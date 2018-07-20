// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {
            browsers: ['Android >= 4.0', 'last 3 iOS versions']
        },
        "postcss-pxtorem": {
            rootValue: 16, // 1rem等于多少px
            unitPrecision: 5, //精确到小数点后多少
            propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        },

        // 自定义主题颜色 -----------
        "postcss-easy-import": {
            extensions: ['pcss', 'css']
        },
        "postcss-theme-variables": {
            // 对应颜色文档 https://github.com/youzan/vant/blob/dev/packages/vant-css/src/common/var.css
            vars: {
                // 'button-primary-background-color': '#26a2ff',
                // 'button-primary-border-color': '#26a2ff',
            },
            prefix: '$'
        },
        "precss": {},
        // -----------
    }
}