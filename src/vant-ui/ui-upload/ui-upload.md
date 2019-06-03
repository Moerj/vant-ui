## 图片上传

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


参数         |      说明                                               |      类型       | 默认值
-------------|---------------------------------------------------------|-----------------|---------
v-model      |   数据列表                                              |    Array        |
:before-read |   读取前的回调函数，返回 false 可终止文件读取           |    Function     |  
@read        |   新增文件回调, 参数                                    |    Function     |  
@remove      |   删除文件回调, 参数(删除的文件参数,删除的索引)         |    Function     |  
multiple     |   input原生属性,上传时是否可以一次选择多图              |    Boolean      |   true     
accept       |   input原生属性                                         |    String       |   image/*     
