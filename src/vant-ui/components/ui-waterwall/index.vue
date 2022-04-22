<!--
 * @Descripttion: 防水墙
 * @Author: 杨圣
 * @Date: 2022-04-22 21:21:13
 * @LastEditors: 杨圣
 * @LastEditTime: 2022-04-22 23:22:54
-->
<template>
    <div class="waterwall-mask" v-show="display" @click="close">
        <div class="waterwall" @click.stop>
            <div class="title">
                <span>请点击与其他不同的图片</span>
                <span>
                    <van-icon name="replay" class="mr15" @click="replay" />
                    <van-icon name="cross" @click="close" />
                </span>
            </div>
            <div class="waterwall-box" ref="box">
                <img v-if="ready" v-for="(item, i) in 10" :src="imgSrc" 
                class="waterwall-img"
                 @click="clickImg(i)"
                 :style="{
                     width:imgSize+'px',
                     height:imgSize+'px',
                     top:randomTop(), 
                     left:randomLeft(),
                     filter: i==0 ? '':'grayscale(1)',
                     zIndex: i==0 ? 1 : 0,
                     transform: i==0 ? '' : 'rotate('+getRandom(0,360)+'deg)'
                     }">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'ui-waterwall',
        props:{
            imgSrc:{//验证图片的地址,可以是本地路径
                type:String,
                require:true
            },
            imgSize:{
                type:Number,
                default: 60
            }
        },
        data(){
            return {
                ready:false,
                display:true
            }
        },
        computed:{
            boxW(){
                return this.$refs.box.clientWidth
            },
            boxH(){
                return this.$refs.box.clientHeight
            },
        },
        methods:{
            clickImg(i){
                if (i==0) {
                    this.$emit('success')
                    this.close()
                }else{
                    this.$emit('fail')
                    // 重置图片
                    this.replay()
                }
            },
            randomTop(){
                return this.getRandom(this.imgSize/2, this.boxH - this.imgSize/2) + 'px'
            },
            randomLeft(){
                return this.getRandom(this.imgSize/2, this.boxW - this.imgSize/2) + 'px'
            },
            getRandom(min,max){
                return Math.random() * (max-min)+min
            },
            replay(){
                this.ready=false
                setTimeout(() => {
                    this.ready=true
                }, 100);
            },
            open(){
                this.display=true
            },
            close(){
                this.display=false
            }
        },
        mounted(){
            this.ready=true
        },
    }
</script>
<style lang="scss" scoped>
    .waterwall-mask{
        background-color: rgba($color: #000000, $alpha: .3);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
    }
    .waterwall{
        $shadowColor:rgba(0, 0, 0, .06);
        width: 80vw;
        position: absolute ;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-50%,0);
        background-color: #fff;
        box-shadow: 0 .0625rem .375rem $shadowColor, 0 .0625rem .25rem $shadowColor inset;
    }
    .title{
        padding: 10px;
        font-size: 13px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid rgba(black,0.03);
    }
    .waterwall-box{
        display: block;
        width: 100%;
        height: 30vh;
        overflow: hidden;
        position: relative;
    }
    .waterwall-img{
        border-radius: 50%;
        position: absolute;
    }
</style>