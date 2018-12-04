<style lang="scss" scoped>
    .btn{
        width: 15vw;
        height: 15vw;
        border-radius: 5px;
        background-color: #efefef;
        color:#fff;
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
        margin-right: 7px;
        margin-left: 7px;
        font-size: 10px;
        .fa-icon{
            margin-bottom: 2px;
        }
    }
</style>
<template>
    <ui-main class="bg-white">
        <van-nav-bar slot="header" title="工作台" />

        <div class="ui-content">
            <router-link to="/baseInfo" class="btn bg-blue">
                <icon name="regular/address-book" scale="2"></icon>
                <span>基本信息</span>
            </router-link>
        </div>
    </ui-main>
</template>