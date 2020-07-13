<style lang="scss" scoped>
    .icon{
        height: 16px;
        margin-right: 5px;
        margin-top: 5px;
    }
</style>
<template>
    <ui-main>
        <van-cell-group>
            <van-cell title="Vant UI 组件库" is-link @click.native="link('https://youzan.github.io/vant/mobile.html#/zh-CN')">
                <template v-slot:icon>
                    <img class="icon" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" >
                </template>
            </van-cell>
            <van-cell title="公共样式" is-link to="/demo-style" >
                <template v-slot:icon>
                    <img class="icon" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2425825150,527813223&fm=58&s=8C0E7432DD276F1106E587E503005025&bpow=121&bpoh=75.jpeg">
                </template>
            </van-cell>
        </van-cell-group>

        <div class="ui-title">ui扩展</div>
        <van-cell-group>
            <van-cell title="主容器/子路由" value="main" is-link to="/demo-main" />
            <van-cell title="子页面" value="page" is-link to="/demo-page" />
            <van-cell title="卡片" value="card" is-link to="/demo-card" />
            <van-cell title="自适应图片" value="img" is-link to="/demo-img" />
            <van-cell title="时间线" value="timeline" is-link to="/demo-timeline" />
            <van-cell title="加载" value="loading" is-link to="/demo-loading" />
            <van-cell title="下拉刷新/上拉加载" value="pull" is-link to="/demo-pull" />
            <van-cell title="滑动单选" value="picker" is-link to="/demo-picker" />
            <van-cell title="高级选择" value="select" is-link to="/demo-select" />
            <van-cell title="日期时间" value="datetime" is-link to="/demo-datetime" />
            <van-cell title="菜单" value="menu" is-link to="/demo-menu" />
            <van-cell title="图片画廊" value="lightbox" is-link to="/demo-lightbox" />
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