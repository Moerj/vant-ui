const shell = require('shelljs');
const path = require('path')
const src = path.join(__dirname, '../src')
const removeTemp = function(){
    shell.exec(`cd src/vant-ui && rm -rf scss/`) //发布完成后删除临时文件
}
// 拷贝样式文件到发布目录,用于发布
console.log('正在发布,请勿关闭进程...');
if (shell.exec(`cp README.md ${src}/vant-ui/ && cp -R -f ${src}/scss ${src}/vant-ui/ && cd src/vant-ui && npm publish`).code === 0) {
    // removeTemp()
    console.log('------------ 发布成功 ------------');
}else{
    // removeTemp()
}
