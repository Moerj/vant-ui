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
            imgList: [
                {
                    src: '图片的url',
                    w: 0,//宽
                    h: 0,//高
                    // 宽高参数不可省略,无需写单位,以px计算.
                    // 0代表自动计算宽高,但会损失性能.
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