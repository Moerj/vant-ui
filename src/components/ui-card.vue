/**
    卡牌区域效果
    通常用于描述当前demo页面的说明
 */
<style lang="scss" scoped>
    @import '~@/scss/public.scss';
    .card-title{
        color: $ui-color-primary;
        font-size: 30px;
        font-weight: bold;
    }
    .card{
        margin: 15px;
        padding: 15px;
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(7,17,27,.1);
        font-size: 26px;
        text-align: left;
        &.title{
            white-space: pre-line;
        }
    }
</style>
<template>
    <div class="card" :class="{title:$slots.title}">
        <div v-if="$slots.title" class="card-title">
            <slot name="title"></slot>
        </div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'ui-card',
    }
</script>