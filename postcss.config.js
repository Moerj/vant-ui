module.exports = {
    plugins: {
        "postcss-import": {},
        "postcss-url": {},
        "autoprefixer": {
            // browsers 会优先采用 package.json 中的 "browserslist" 字段,如果有的话
            browsers: ['Android >= 4.0', 'last 3 iOS versions']
        },
        "postcss-pxtorem": {
            rootValue: 16, // 1rem等于多少px
            unitPrecision: 5, //精确到小数点后多少
            propList: ['font', 'font-size', 'line-height', 'letter-spacing'],
            selectorBlackList: ['body'],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        },
    }
}