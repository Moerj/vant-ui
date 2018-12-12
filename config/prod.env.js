'use strict'
function getFullDate(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return `"${year}-${month}-${day} ${hour}:${minute}:${second}"`
}

module.exports = {
  NODE_ENV: '"production"',
  APP_VERSION: getFullDate() // 生成发布版本号,调用 process.env.APP_VERSION
}
