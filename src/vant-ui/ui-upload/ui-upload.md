# 图片上传

```html
 <ui-upload multiple :file-list.sync="fileList" @change="onChange" @remove="onRemove"></ui-upload>
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


参数        |      类型       |      说明                                               | 默认值
------------|-----------------|---------------------------------------------------------|---------
multiple    |    Boolean      |   是否传多图                                            |   false     
file-list   |    Array        |   数据列表                                              |
@change     |    Function     |   新增文件回调                                          |  
@remove     |    Function     |   删除文件回调                                          |  
