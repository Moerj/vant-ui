# 图片画廊
功能:
- 查看大图
- 手势翻页
- 手势缩放
- 自动页数
- 自定义操作按钮

## 安装依赖

> npm i photoswipe

```html
<lightbox :items="imgList" ref="lightbox"></lightbox>
```

```js
import lightbox from '@/lib/lightbox' //在当前页面按需引入组件
export default {
    components:{
        lightbox
    },
    data(){
        return {
            imgList = [
                {
                    src: '图片的url',
                    w: 0,//宽高参数必须,如果接口没有具体数值则写0,这样会损失性能去动态计算.
                    h: 0,
                }
            ]
        }
    },
    methods:{
        openLightbox(index=0){
            // 画廊组件开启,index可指定初始图片
            this.$refs.lightbox.open(index)
        }
    }
}
```