<template>
    <ui-main>
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')" />

        <ui-number label="数字输入" v-model="number"></ui-number>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                number:''
            }
        },
    }
</script>