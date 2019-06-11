<style lang="scss" scoped>
    .card-title{
        color: #26a2ff;
        font-size: 16px;
        font-weight: bold;
    }
    .card{
        margin: 15px;
        padding: 15px;
        background-color: #fff;
        box-shadow: 0 .0625rem .375rem #d7e4ed;
        font-size: 14px;
        text-align: left;
    }
</style>
<template>
    <div class="card">
        <div v-if="$slots.title" class="card-title">
            <slot name="title"></slot>
        </div>
        <div class="card-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'ui-card',
    }
</script>