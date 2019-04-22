<template>
    <ui-main>
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>

        <ui-card>
            <span slot="title">ui-datetime</span>
            支持datetime、date、time、year-month
            时间最小只能支持选到分钟
        </ui-card>

        <ui-datetime v-model="timeString" label="日期与时间" type="date"></ui-datetime>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                timeString:""
            }
        },
    }
</script>