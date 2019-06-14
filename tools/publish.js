const shell = require('shelljs');
const path = require('path')
const src = path.join(__dirname, '../src')

// 拷贝scss样式并发布
shell.exec(`cp -R -f ${src}/scss ${src}/vant-ui/ && cd src/vant-ui && npm publish`)