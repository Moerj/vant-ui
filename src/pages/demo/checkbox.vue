<template>
    <ui-main class="bg-white">
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
        </template>

        <ui-card>
            <template v-slot:title>
                <span>ui-checkbox</span>
            </template>
            注意由于fastclick组件影响, pc上看效果可能要双击两次鼠标
        </ui-card>

        <div class="ui-content">
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