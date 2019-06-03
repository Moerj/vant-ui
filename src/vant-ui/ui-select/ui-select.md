## 高级选择器
独立页面的选择器,包括单选多选,输入检索

```html
<ui-select
    label="标题" 
    v-model="form.id" 
    :options="opt"
    multiple
    :max="3"
    @search="onSearch"
    @change="onChange"
></ui-select>
```

```js
data(){
    return{
        opt:[
            {text:'选项1',id:'1'},
            {text:'选项2',id:'2'},
            {text:'选项3',id:'3'}
        ]
    }
},
methods:{
    onSearch(keyword){
        // keyword搜索关键字
    },
    onChange(){

    }
}
```


参数名          |  说明                                           |  类型         |  默认值
----------------|-------------------------------------------------|---------------|----------
label           | 选项标题                                        |   String      |
options         | 数据源                                          |   Array       |
v-model         | 回显的id                                        |   String      |
multiple        | 是否多选                                        |   Boolean     |   false
searchable      | 是否可搜索                                      |   Boolean     |   false
disabled        | 是否禁用                                        |   Boolean     |   false
value-key       | 选项对象中，文字对应的 key                      |   String      |   false
@search         | 搜索回调,回调参数keyword                        |   Function    |
@change         | 关闭时选择项变化的回调(参数为当前选中项)        |   Function    |



方法名          |  说明               |  参数               
----------------|---------------------|---------------
open            | 打开当前实例        |                      
close           | 关闭当前实例        |               
reset           | 重置并清空所有已选项|               

>slot
默认插槽插入的位置在search输入框下方

