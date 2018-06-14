<template>
    <ui-main class="bg-white">
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>

        <ui-card>
            <span slot="title">ui-checkbox</span>
            注意由于fastclick组件影响, pc上看效果可能要双击两次鼠标
        </ui-card>

        <div class="ui-content flex-column row-center">
            <ui-checkbox v-model="checked" name="inputName" label="我已阅读条款协议"></ui-checkbox>

            <p>是否已同意:{{ checked }}</p>
        </div>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                checked:false
            }
        },
    }
</script>