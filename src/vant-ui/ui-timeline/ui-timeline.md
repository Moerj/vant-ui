# 时间线

```html
<ui-timeline :points="points"></ui-timeline>
```

```js
data(){
    return {
        points: [
            {
            pointColor: 'red', // *关键点颜色 可选red yellow green
            img: 'http://www.jikexueyuan.com/event/static/images/bootstrap/bootstrap-logo.png', // 图片地址 可留空
            title: '标题', // *时间点标题
            text: '文本内容', // *内容
            linkUrl: 'https://www.google.com', // *链接url 留空则不显示按钮
            linkText: 'Read detail', // 按钮显示内容 默认为Read more
            date: '2017-1-1 15:33', // 时间点
            },]
        }
    }
}
```

> 类似的功能也可以使用 <a href="https://youzan.github.io/vant/1.x/#/zh-CN/steps" target="_blank">Steps 步奏条</a>