<template>
    <ui-main>
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>

        <ui-card>
            <span slot="title">ui-timeline</span>
        </ui-card>

        
        <ui-timeline :points="points"></ui-timeline>
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                points: [{
                    pointColor: 'red', // *关键点颜色 可选red yellow green
                    // img: 'http://www.jikexueyuan.com/event/static/images/bootstrap/bootstrap-logo.png', // 图片地址 可留空
                    title: '陈浪拿起包包准备打车过来了', // *时间点标题
                    text: '他半路发现忘记带钱包了,又跑回家拿...', // *时间点内容
                    // linkUrl: 'https://www.google.com', // *链接url 留空则不显示按钮
                    // linkText: 'Read detail', // 按钮显示内容 默认为Read more
                    date: '2017-1-1 15:33', // 时间点
                }, {
                    pointColor: 'yellow', // *关键点颜色 可选red yellow green
                    // img: '1', // 图片地址 可留空
                    title: '陈浪拿好钱包准备出门了', // *时间点标题
                    text: '突然孙璨打电话来说他不需要开锁服务了...', // *时间点内容
                    date: '2017-1-1 16:01' // 时间点
                }, {
                    pointColor: 'green', // *关键点颜色 可选red yellow green
                    title: '陈浪气急败坏,摔了手机', // *时间点标题
                    text: '后来听说孙璨为了省下开锁费,在公园的长椅上睡了一晚,并在公园的垃圾桶翻到了陈浪摔坏的手机...', // *时间点内容
                    // linkUrl: '#', // *链接url 留空则不显示按钮
                    date: '2017-1-2 01:06' // 时间点
                }
                ]
            }
        },
    }
</script>