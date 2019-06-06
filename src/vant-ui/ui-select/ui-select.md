## 高级选择器
独立页面的选择器
- 单选多选
- 输入检索
- 分类检索


### 简单的
```html
<ui-select
    label="标题" 
    required
    v-model="form.id" 
    :options="opt"
></ui-select>
```

### 带输入框检索和tab检索
```html
<ui-select
    label="标题" 
    v-model="form.id" 
    :options="opt"
    multiple
    :max="3"
    @search="onSearch"
    @change="onChange"
    <!-- 插入tab进行过滤 -->
    <van-tabs v-model="tab">
        <van-tab v-for="item in tabData" :key="item.label" :title="item.label">
        </van-tab>
    </van-tabs>
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
        // 模拟在线检索
        setTimeout(() => {
            if (v) {
                this.opt = [
                    {text:'在线新结果1',id:'new1'},
                    {text:'在线新结果2',id:'new2'},
                ]
            }else{
                this.opt=[...this.initOpt]
            }
        }, 1000);
    },
    onChange(){

    }
}
```

>提示: 组件为了统一检索逻辑，统一使用 **@search** 回调修改数据源的方式进行数据的筛选。
这样既满足在线检索也满足本地数据过滤。


参数名          |  说明                                                             |  类型         |  默认值
----------------|-------------------------------------------------------------------|---------------|----------
label           | 选项标题                                                          |   String      |
required        | 标题前标记为必选                                                  |   Boolean     |   false
placeholder     | 原生属性                                                          |   String      |   
options         | 数据源                                                            |   Array       |
v-model         | 回显的id                                                          |   String      |
multiple        | 是否多选                                                          |   Boolean     |   false
disabled        | 是否禁用                                                          |   Boolean     |   false
value-key       | 选项对象中，文字对应的 key                                        |   String      |   false
@search         | 在线检索功能,在回调中人工去修改数据源 (回调参数为当前keyword)     |   Function    |
@change         | 关闭时选择项变化的回调 (参数为当前选中项)                         |   Function    |



方法名          |  说明               |  参数               
----------------|---------------------|---------------
open            | 打开当前实例        |                      
close           | 关闭当前实例        |               
reset           | 重置并清空所有已选项|               

插槽            |  说明                 
----------------|---------------------
default         | 在输入框下方                            

