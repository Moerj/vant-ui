# 日期时间
日期时间选择

<span style="color:red">手势滑动在pc端查看可能无法操作,请切换成手机模式</span>


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

参数名      |  type    | default  |  说明
------------|----------|----------|----------
label       | String   |          |  标题
v-model     | String   |          |  格式化后的自然时间
type        | String   | datetime |  时间格式,最小只支持到分钟
min-date    | Date     |          |  最小日期
max-date    | Date     |          |  最大日期
min-hour    | Number   |          |  最小时
max-hour    | Number   |          |  最大时
min-minute  | Number   |          |  最小分
max-minute  | Number   |          |  最大分
required    | Boolean  | false    |  红色星号标记当前为必选项
placeholder | String   |          |  选项提示
disabled    | Boolean  | false    |  是否禁用
@confirm    | Function |          |  确认后的回调,参数为当前结果
@cancel     | Function |          |  取消后回调

