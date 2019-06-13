
const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const markdown = require('markdown-it')({
    html: true,
    linkify: true,
    typographer: true,
    quotes: '\"\"\'\'',
});
const NODE_ENV = process.argv[process.argv.length - 1].replace('--', '');
const basePath = path.join(__dirname, '../../public/md2html/').replace(/\\/g, '/')
const distPath = path.resolve(basePath)

// 如果md2html文件夹不存在就自己建立一个
if (!fs.existsSync(distPath)) {
    fs.mkdir(distPath,(err) => {
        if (err) throw err
        console.log('成功创建:', distPath)
    })
}else{
    // 清理指定文件夹
    fs.readdirSync(distPath).map((file) => {
        // 忽略 public/static/.gitkeep 文件
        if (file !== '.gitkeep') {
            fs.unlink(`${distPath}/${file}`, (err) => {
                if (err) console.log('\x1b[41m\x1b[30m ERROR \x1b[0m ', err)
            })
        }
    })
}

//给table加class
markdown.renderer.rules.table_open = function(tokens, idx) {
    return '<table class="ui celled table small">';
}

// 转换 markdown 文件为html文件
function buildFile(file) {
    // console.log('\x1b[46m\x1b[30m DONE \x1b[0m ' + file);
    let fileContent = '';
    fileContent = fs.readFileSync(file, 'utf8');
    fileContent = markdown.render(fileContent);

    // 替换模板内容
    fileContent = fs.readFileSync(path.resolve('tools', 'md2html/md2html_tpl.html'), 'utf8').replace('${body}', fileContent);

    //弄到指定目录
    // console.log(file)
    let pc_file = file.substr(file.lastIndexOf('\\') + 1);
    let mac_file = file.substr(file.lastIndexOf('/') + 1); //用不起苹果,还是要照顾到它
    let fileName;
    // console.log('---', pc_file)
    pc_file === file ? fileName = mac_file : fileName = pc_file;

    //fs.writeFileSync(file + '.vue', fileContent);  //转到当前文件夹下的vue文件
    fs.writeFileSync(path.resolve(basePath, fileName) + '.html', fileContent);
}

// 遍历所有文件夹找出'.md'文件
const walk = function(dir, done) {
    let results = [];
    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        let pending = list.length;
        if (!pending) return done(null, results);
        let reg = /(.*\.md$)/;  //匹配后缀为.md的文件
        list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                }else{
                    if (reg.test(file)) { // 如果符合'.md'后缀就执行
                        buildFile(file);
                        results.push(file);
                    }
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

const init = function() {
    const mdPath = path.resolve(__dirname, '../../src')

    // md 转 html
    walk(mdPath, function(err, results) {
        if (err) throw err;
        if (NODE_ENV === 'production') console.log('\n \x1b[46m\x1b[30m MD2HTML \x1b[0m DONE\n');
    });
    buildFile(path.resolve(path.resolve(__dirname, '../../'), 'README.md')); // 主页README.md也编译一次
    
    // 如果不是开发模式就不需要监听
    if (NODE_ENV !== 'production') {
        // 开发模式监听文件
        let watcher = chokidar.watch(mdPath, {
            ignored: /.*\.(scss|js|vue)$/,
            persistent: true
        });
        watcher.on('ready', () => {
            console.log('\x1b[46m\x1b[30m MD2HTML \x1b[0m 监听中...');
            watcher.on('change', (path) => {
                console.log('\n\x1b[36m -- MD2HTML(change) START --');
                buildFile(path);
                console.log('\x1b[36m -- MD2HTML(change) END --\n');
            });
            watcher.on('add', (path) => {
                console.log('\n\x1b[36m -- MD2HTML(add) START --');
                buildFile(path);
                console.log('\x1b[36m -- MD2HTML(add) END --\n');
            });
        });
    }
};


init()// 此脚本在package.js中调用





