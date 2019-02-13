<style lang="scss" scoped>
    @import '~@/scss/public.scss';
    .ui-tab-item{
        flex:1;
        font-size: 14px;
        text-align: center;
        padding: 6px;
        white-space: nowrap;
        transition: .3s;
        color: $ui-color-black;
        display: inline-block;
        &.item-active{
            color: $ui-color-primary;
        }
        >.item-label{
            display: inline-block;
            position: relative;
            >.item-badge{
                background-color: $ui-color-purple;
                font-size: 10px;
                line-height: 1;
                color: #fff;
                border-radius: 3px;
                position: absolute;
                top: -5px;
                right: 5px;
                opacity: .7;
                padding: 1px 3px;
                animation: init .5s;
                transform: translateX(100%);
                @keyframes init {
                    0%{
                        opacity: 0;
                        transform: scale3d(0,0,0) translateX(100%);
                    }
                    100%{
                        opacity: .7;
                        transform: scale3d(1,1,1) translateX(100%);
                    }
                }
            }
        }
    }
</style>
<template>
    <div @click="clickTab" class="ui-tab-item" :class="{'item-active': this.$parent.value===label}">
        <span class="item-label"> {{label}} <i v-if="badge" class="item-badge">{{badge}}</i></span>
        
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'ui-tab-item',
        props:['label','badge'],
        methods:{
            clickTab(){
                this.$parent.$emit('tab-click',this.label)
            }
        },
    }
</script>