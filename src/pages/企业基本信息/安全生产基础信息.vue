<template>
    <ui-main>
        <van-cell-group class="mb10">
            <van-field required label="主要负责人" />
            <van-field required label="主要负责人固定电话" />
            <van-field required label="主要负责人移动电话" />
            <van-field label="主要负责人邮箱" />
        </van-cell-group>

        <van-cell-group class="mb10">
            <van-field required label="安全负责人" />
            <van-field required label="安全负责人固定电话" />
            <van-field required label="安全负责人移动电话" />
            <van-field label="安全负责人邮箱" />
        </van-cell-group>

        <van-cell-group class="mb10">
            <ui-picker label="安全机构设置情况" required v-model="form.security" :options="[
                {text:'有',id:'1'},
                {text:'无',id:'0'},
            ]"> </ui-picker>
            <van-field label="职业卫生负责人" />
            <van-field label="安全监察监管机构" />
            <van-field required label="生产\经营地址" />
        </van-cell-group>

        <van-button type="primary" slot="footer" size="large">保存</van-button>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                form:{
                    security:''
                },
            }
        },
    }
</script>