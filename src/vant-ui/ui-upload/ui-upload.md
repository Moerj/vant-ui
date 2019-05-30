# 文件上传列表

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