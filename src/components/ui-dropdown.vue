<style lang="scss" scoped>
    $closeHeight:44px;
    .ui-dropdown{
        border:1px solid #ddd;
        overflow: hidden;
        background-color: #fff;
        height:auto;
        transition: .3s;
        margin-top: -1px;
        &.closed{
            height:$closeHeight;
        }
    }
    .ui-dropdown-title{
        font-size: 12px;
        color: #999;
        height: $closeHeight;
        display: flex;
        padding-left: 15px;
        padding-right: 10px;
        align-items: center;
        justify-content: space-between;
    }
    .icon{
        transition: .3s;
        transform: rotate3d(0,0,1,90deg);
        &.droped{
            transform: rotate3d(0,0,1,-90deg);
        }
    }
</style>
<template>
    <div class="ui-dropdown" :class="{closed:!droped}">
        <div @click="toggle" class="ui-dropdown-title">
            {{title}}
           <van-icon name="arrow" class="icon" :class="{droped:droped}" />
        </div>
        <div class="ui-dropdown-content" >
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'ui-dropdown',
        props:{
            title:{
                type:String
            },
            value:{
                type:Boolean,
            }
        },
        data(){
            return {
                dropdownHeight:0,
                droped:true,
            }
        },
        beforeMount(){
            this.droped = this.value
        },
        watch:{
            droped(){
                this.$emit('input',this.droped)
            }
        },
        methods:{
            toggle(){
                this.droped = !this.droped
            }
        },
    }
</script>