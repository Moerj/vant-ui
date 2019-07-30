## 日期时间

### 支持的类型
- datetime 日期时间
- date 日期
- time 日期
- year-month 年月

<span style="color:red">手势滑动在PC端无法操作,请左键点击操作</span>


```html
<ui-datetime v-model="timeString" label="日期与时间" type="date"></ui-datetime>
```

```js
data(){
    return{
        timeString:''
    }
}
```

参数名       | 说明                         |  type    | default  
-------------|------------------------------|----------|----------
label        | 标题                         | String   |          
v-model      | 格式化后的自然时间           | String   |          
type         | 时间格式,最小只精确到分钟    | String   | datetime 
min-date     | 最小日期                     | Date     |          
max-date     | 最大日期                     | Date     |          
min-hour     | 最小时                       | Number   |          
max-hour     | 最大时                       | Number   |          
min-minute   | 最小分                       | Number   |          
max-minute   | 最大分                       | Number   |          
required     | 红色星号标记当前为必选项     | Boolean  | false    
placeholder  | 选项提示                     | String   |          
disabled     | 是否禁用                     | Boolean  | false    
@confirm     | 确认后的回调,参数为当前结果  | Function |          
@cancel      | 取消后回调                   | Function |          

