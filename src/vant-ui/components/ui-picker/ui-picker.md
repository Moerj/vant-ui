## 单选器
用于选项较少的单选操作

<span style="color:red">手势滑动在PC端无法操作,请左键点击操作</span>


```html
<ui-picker title="标题" required v-model="selectedValue" :options="opt"> </ui-picker>
```

```js
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
```

参数名      |  说明                                 |  type    | default  
------------|---------------------------------------|----------|----------
label       |  标题                                 | String   |          
v-model     |  选中项的value                        | String   |          
options     |  数据源                               | Array    |          
required    |  红色星号标记当前为必选项             | Boolean  | false    
placeholder |  选项提示                             | String   |          
disabled    |  是否禁用                             | Boolean  | false    
value-key   |  选项对象中，文字对应的 key           | String   | text     
@change     |  选中后的回调,参数为当前选中的对象    | Function |          

