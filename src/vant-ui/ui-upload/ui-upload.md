# 图片上传

```html
 <ui-upload multiple :file-list.sync="fileList" @read="onRead" @remove="onRemove"></ui-upload>
```

```js
data() {
    return {
        //已上传的图片列表
        fileList: [
            {
                src:'图片的url',//必须
                // 其他参数可自行定义
            }
        ], 
    }
}
```


参数         |      类型       |      说明                                               | 默认值
-------------|-----------------|---------------------------------------------------------|---------
v-model      |    Array        |   数据列表                                              |
:before-read |    Function     |   读取前的回调函数，返回 false 可终止文件读取           |  
@read        |    Function     |   新增文件回调, 参数                                    |  
@remove      |    Function     |   删除文件回调, 参数(删除的文件参数,删除的索引)         |  
multiple     |    Boolean      |   input原生属性,上传时是否可以一次选择多图              |   true     
accept       |    String       |   input原生属性                                         |        
