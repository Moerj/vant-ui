<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
        </template>

        <ui-card>
            <template v-slot:title>
                <span>ui-datetime</span>
            </template>
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