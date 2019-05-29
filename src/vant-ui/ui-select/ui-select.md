# 高级选择器
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

<script>
    export default {
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
    }
</script>
```

> 参数

参数名          |  类型         |  说明                                           |  默认值
----------------|---------------|-------------------------------------------------|----------
label           |   String      | 选项标题                                        |
options         |   Array       | 数据源                                          |
v-model         |   String      | 回显的id                                        |
multiple        |   Boolean     | 是否多选                                        |   false
searchable      |   Boolean     | 是否可搜索                                      |   false
disabled        |   Boolean     | 是否禁用                                        |   false
value-key       |   String      | 选项对象中，文字对应的 key                      |   false
@search         |   Function    | 搜索回调,回调参数keyword                        |
@change         |   Function    | 关闭时选择项变化的回调(参数为当前选中项)        |


>方法

方法名          |  参数         |  说明                     
----------------|---------------|--------------
open            |               | 打开当前实例               
close           |               | 关闭当前实例
reset           |               | 重置并清空所有已选项

>slot
默认插槽插入的位置在search输入框下方

