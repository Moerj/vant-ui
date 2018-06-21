<template>
    <ui-main>
        <div class="ui-title">基础组件</div>
        <van-cell-group>
            <van-cell icon="home" title="Vant UI 组件库" is-link @click.native="link('https://youzan.github.io/vant/mobile.html#/zh-CN')"/>
            <van-cell icon="shop" title="公共样式" is-link to="/demo-style" />
        </van-cell-group>

        <div class="ui-title">扩展库</div>
        <van-cell-group>
            <van-cell icon="pending-payment" title="子页面" is-link to="/demo-page" />
            <van-cell title="自适应图片" is-link to="/demo-img" />
            <van-cell title="多选框" is-link to="/demo-checkbox" />
            <van-cell title="时间线" is-link to="/demo-timeline" />
            <van-cell title="加载" is-link to="/demo-loading" />
            <van-cell title="图片上传" is-link to="/demo-upload" />
            <van-cell title="下拉框" is-link to="/demo-dropdown" />
        </van-cell-group>
    </ui-main>
</template>
<script>
    export default {
        methods:{
            link(url){
                if (url) {
                    window.location.href = url
                }
            }
        },
    }
</script>