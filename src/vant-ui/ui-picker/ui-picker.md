# 单选器
用于选项较少的单选操作

<span style="color:red">滑块在pc端查看可能无法操作,请切换成手机模式</span>


```html
<ui-picker title="标题" required v-model="selectedValue" :options="opt"> </ui-picker>
```

```js
export default {
    data(){
        return{
            selectedValue:'',
            opt:[
                {text:'选项1',id:'1'},
                {text:'选项2',id:'2'},
                {text:'选项3',id:'3'},
            ]
        }
    }
}
```

参数名      |  type    | default  |  说明
------------|----------|----------|----------
label       | String   |          |  标题
v-model     | String   |          |  选中项的value
options     | Array    |          |  数据源
required    | Boolean  | false    |  红色星号标记当前为必选项
placeholder | String   |          |  选项提示
disabled    | Boolean  | false    |  是否禁用
value-key   | String   | text     |  选项对象中，文字对应的 key
@change     | Function |          |  选中后的回调,参数为当前选中的对象

