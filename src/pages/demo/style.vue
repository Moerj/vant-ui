<template>
    <ui-main>
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>

        <ui-card class="f-color-orange">
            公共样式路径 src/scss/*.scss
        </ui-card>

        <ui-card>
            <span slot="title" class="f-color-blue">public.scss</span>
            存放所有样式公共变量, 如颜色, 用于在其他页面或样式文件中@import引入
        </ui-card>

        <ui-card>
            <span slot="title" class="f-color-blue">base.scss</span>
            外边距样式 m0~m100
            内边距样式 p0~p100
            单位为px

            带方向: mt mb pl pr
            t(top) b(bottom) l(left) r(right)
        </ui-card>

        <ui-card>
            <span slot="title" class="f-color-blue">ui.scss</span>
            与样式库相关的css封装
        </ui-card>

        <ui-card>
            <span slot="title" class="f-color-blue">rewrite.scss</span>
            整对当前项目与当前框架的差异进行样式覆盖
        </ui-card>

    </ui-main>
</template>
