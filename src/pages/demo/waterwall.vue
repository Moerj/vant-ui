<!--
 * @Descripttion: 防水墙
 * @Author: 杨圣
 * @Date: 2022-04-22 21:20:06
 * @LastEditors: 杨圣
 * @LastEditTime: 2025-02-20 10:04:09
-->
<template>
    <ui-main>
        <img @click="$refs.waterwall.open()" src="./img/cat.jpeg" style="width: 200px;position: absolute;top:50%;left:50%;transform: translate3d(-50%,-50%,0);">
        <ui-waterwall ref="waterwall" @success="onSuccess" @fail="onFail" :imgSrc="imgSrc"></ui-waterwall>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                imgSrc: [
                    new URL('./img/cat.jpeg', import.meta.url).href,
                    new URL('./img/loading-bg.jpg', import.meta.url).href,
                ]
            }
        },
        mounted () {
            this.$refs.waterwall.open()
        },
        methods:{
            onSuccess(){
                this.$notify({ type: 'success', message: '验证通过' });
            },
            onFail(){
                this.$notify({ type: 'danger', message: '验证错误' });
            }
        },
    }
</script>