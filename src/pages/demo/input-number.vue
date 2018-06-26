<template>
    <ui-main>
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>

        <ui-input-number title="标题" :min="1" :max="10" v-model="n"></ui-input-number>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                n: 1
            }
        },
    }
</script>