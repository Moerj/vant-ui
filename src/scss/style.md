> 样式作为选装型功能, 使用时记得安装
```js
// main.js
import 'vant-ui/scss/base.scss'
```

## 单位
- 全局基础单位: 16px 
- 最小单位: 10px 

系统会将以下几个css属性的px单位转为rem   
**font, font-size, line-height, letter-spacing**

## [base.scss](https://raw.githubusercontent.com/Moerj/vant-ui/master/scss/base.scss) 全文
<pre>
    <code class="language-css">
    </code>
</pre>

<script>
    $(function(){
        $.ajax({
            url:'https://raw.githubusercontent.com/Moerj/vant-ui/master/scss/base.scss',
            success: function (response) {
                var html = Prism.highlight(response, Prism.languages.css, 'css');
                $('.language-css').append(html)
            }
        })
    })
</script>