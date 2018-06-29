<style lang="scss" scoped>
    .icon{
        height: 16px;
        margin-right: 5px;
        margin-top: 5px;
    }
</style>
<template>
    <ui-main>
        <div class="ui-title">基础组件</div>
        <van-cell-group>
            <van-cell title="Vant UI 组件库" is-link @click.native="link('https://youzan.github.io/vant/mobile.html#/zh-CN')">
                <img class="icon" slot="icon" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" >
            </van-cell>
            <van-cell title="公共样式" is-link to="/demo-style" >
                <img class="icon" slot="icon" src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=2425825150,527813223&fm=58&s=8C0E7432DD276F1106E587E503005025&bpow=121&bpoh=75.jpeg">
            </van-cell>
        </van-cell-group>

        <div class="ui-title">扩展组件</div>
        <van-cell-group>
            <van-cell icon="pending-payment" title="子页面" value="page" is-link to="/demo-page" />
            <van-cell title="卡片" value="card" is-link to="/demo-card" />
            <van-cell title="自适应图片" value="img" is-link to="/demo-img" />
            <van-cell title="多选框" value="checkbox" is-link to="/demo-checkbox" />
            <van-cell title="时间线" value="timeline" is-link to="/demo-timeline" />
            <van-cell title="加载" value="loading" is-link to="/demo-loading" />
            <van-cell title="图片上传" value="upload" is-link to="/demo-upload" />
            <van-cell title="下拉刷新/上拉加载" value="pull" is-link to="/demo-pull" />
            <van-cell title="选项卡" value="tab" is-link to="/demo-tab" />
            <van-cell title="数字输入框" value="input-number" is-link to="/demo-input-number" />
            <van-cell title="滑动单选" value="picker" is-link to="/demo-picker" />
            <van-cell title="高级选择" value="select" is-link to="/demo-select" />
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