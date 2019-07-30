<style lang="scss" >
    .ui-loading{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        height: 100%;
        width: 100%;
        color: rgba(black,.3);
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .ui-loading-title{
            font-size: .8rem;
        }
    }
</style>
<template>
    <div class="ui-loading" :style="{background:background}">
        <van-loading color="white" />
        <div class="ui-loading-title">{{title}}</div>
    </div>
</template>
<script>
    export default {
        name:'ui-loading',
        props:{
            title:{
                type: String
            },
            background:{
                type: String,
                default: 'rgba(255,255,255,0.8)'
            }
        },
        mounted () {
            this.$el.parentElement.style.position = 'relative';
        }
    }
</script>