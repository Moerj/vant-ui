<!--
 * @Descripttion: 防水墙
 * @Author: 杨圣
 * @Date: 2022-04-22 21:20:06
 * @LastEditors: 杨圣
 * @LastEditTime: 2025-03-03 16:16:32
-->
<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
        </template>
        
        <img @click="$refs.waterwall.open()" src="./img/cat.jpeg" style="width: 200px;position: absolute;top:50%;left:50%;transform: translate3d(-50%,-50%,0);">
        <ui-waterwall ref="waterwall" @success="onSuccess" @fail="onFail" :imgSrc="imgSrc"></ui-waterwall>
    </ui-main>
</template>
<script>
import Cat from './img/cat.jpeg'
import Bg from './img/loading-bg.jpg'
    export default {
        data(){
            return {
                imgSrc: [Cat, Bg]
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