function getIPAdress() {
    const interfaces = require('os').networkInterfaces();
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
    return null
}

const ip = getIPAdress()
const config = {
    陈勇: 'http://192.200.200.24:8888',
    陈浪: 'http://192.200.200.21:8888',
    蔡涛: 'http://192.200.200.23:8888',
    楼建勇: 'http://192.168.18.156:8888',
    外网: 'http://218.201.222.159:8083',

    // 选择开启
    active: '外网'
}

// 指定ip环境切换端口,比如在家
if (ip == '192.168.31.10') {
    config.active = '外网'
}

module.exports = config
