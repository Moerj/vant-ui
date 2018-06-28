#picker
用于选项较少的单选操作


```html
<ui-picker title="标题" required v-model="selectedValue" :options="opt"> </ui-picker>
```

```js
export default {
    data(){
        return{
            selectedValue:'',
            opt:[
                {label:'选项1',value:'1'},
                {label:'选项2',value:'2'},
                {label:'选项3',value:'3'},
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
@change     | Function |          |  选中后的回调,参数为当前选中的对象

