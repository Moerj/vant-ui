<template>
    <ui-main>
        <van-cell-group class="mb10">
            <van-cell title="企业名称" value="贵州燃气(集团)有限责任公司"/>
            <van-field label="统一社会信用代码" />
            <van-field label="工商登记机关" />
            <van-cell title="公司登记日期" @click="registerDateVisable=true" :value="$date(form.registerDate,'yyyy-MM-dd')">
            </van-cell>
        </van-cell-group>
        <van-popup v-model="registerDateVisable" position="bottom" class="w-100" ref="registerDate">
            <van-datetime-picker v-model="form.registerDate" type="date"/>
        </van-popup>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                form:{
                    registerDate:''
                },
                registerDateVisable:false
            }
        },
        methods:{
            confirm(v){
                this.form.registerDate=v
            },
        },
    }
</script>
