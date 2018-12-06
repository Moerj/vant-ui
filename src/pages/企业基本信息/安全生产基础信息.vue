<template>
    <ui-main>
        <van-cell-group class="mb10">
            <van-cell title="主要负责人" />
            <van-cell title="主要负责人固定电话" />
            <van-cell title="主要负责人移动电话" />
            <van-cell title="主要负责人邮箱" />
        </van-cell-group>

        <van-cell-group class="mb10">
            <van-cell title="安全负责人" />
            <van-cell title="安全负责人固定电话" />
            <van-cell title="安全负责人移动电话" />
            <van-cell title="安全负责人邮箱" />
        </van-cell-group>

        <van-cell-group class="mb10">
            <van-cell title="安全机构设置情况" value="有"></van-cell>
            <van-cell title="职业卫生负责人" />
            <van-cell title="安全监察监管机构" />
            <van-cell title="生产\经营地址" />
        </van-cell-group>

    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                form:{
                },
            }
        },
    }
</script>