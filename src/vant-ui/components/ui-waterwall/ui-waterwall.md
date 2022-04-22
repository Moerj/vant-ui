## 防水墙
用于验证真人操作,防止机器攻击


```html
<ui-waterwall ref="waterwall" @success="onSuccess" @fail="onFail" :imgSrc="imgSrc" />
```

```js
data(){
    return{
        imgSrc:'/img.png' //在线获取本地图片地址
    },
    methods:{
        onSuccess(){
            this.$notify({ type: 'success', message: '验证通过' });
        },
        onFail(){
            this.$notify({ type: 'danger', message: '验证错误' });
        }
    }
}
```

参数名      |  说明              |   type    | default  
------------|--------------------|-----------|----------
imgSrc      |  验证图片的地址    | String    |          
@success    |  验证成功的回调    | function  |         
@fail       |  验证失败的回调    | function  |         

