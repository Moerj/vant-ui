<template>
    <ui-main>
        <div class="ui-title">基础组件</div>
        <van-cell-group>
            <van-cell title="Vant UI 组件库" is-link @click.native="link('https://youzan.github.io/vant/mobile.html#/zh-CN')"/>
            <van-cell title="公共样式" is-link to="/demo-style" />
        </van-cell-group>

        <div class="ui-title">扩展库</div>
        <van-cell-group>
            <van-cell title="子页面" is-link to="/demo-page" />
            <van-cell title="自适应图片" is-link to="/demo-img" />
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