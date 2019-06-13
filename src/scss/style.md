## 样式规范

### 不允许开发人员修改,只能使用
- base 基础样式
- variables 公共变量
- rewrite 重构样式

### 开发人员可以使用和修改
- ui 项目风格
- vue-transition 动画部分

### 单位
- 全局基础单位: 16px 
- 最小单位: 10px 

系统会将以下几个css属性的px单位转为rem   
**font, font-size, line-height, letter-spacing**


## 基础样式
样式名          |   说明
----------------|-----------------
flex            |   flex布局
flex-column     |   flex布局-纵向
flex-nowrap     |   不换行
col-center      |   纵向居中
row-center      |   横向居中
row-center      |   横向居中
row-between     |   两端对齐
row-around      |   均分

> 样式太多,不一一例举,请查看 **base.scss**