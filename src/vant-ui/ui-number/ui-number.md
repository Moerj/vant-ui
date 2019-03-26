#number
数字输入


```html
<ui-number label="数字输入" v-model="number"></ui-number>
```

```js
export default {
    data(){
        return{
            number:0
        }
    }
}
```

参数名      |  type             | default  |  说明
------------|-------------------|----------|----------
v-model     | String/Number     |    1      |  
min         | Number            |    1      |  最小允许
max         | Number            |           |  最大允许
disable     | Boolean           |   false    |  禁用

