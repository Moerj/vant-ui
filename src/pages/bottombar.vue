<template>
    <van-tabbar v-model="active" v-if="$route.meta.root">
        <van-tabbar-item v-for="item in items" :icon="item.icon" :key="item.label" @click="clickItem(item)">{{item.label}}</van-tabbar-item>
    </van-tabbar>
</template>
<script>
    export default {
        data(){
            return {
                active:0,
                items:[
                    { icon:'shop',label:'首页', path:'/home' },
                    { icon:'chat',label:'标签', path:'' },
                    { icon:'records',label:'工作台', path:'/workplace' },
                    { icon:'gold-coin',label:'个人中心', path:'' },
                ],
            }
        },
        mounted(){
        },
        methods:{
            clickItem(item){
                item.path && this.$router.push(item.path)
            },
            updateTabState(){
                this.items.forEach((item,index)=>{
                    if (location.hash.indexOf(item.path)>=1) {
                        this.active = index
                    }
                })
            }
        },
        watch:{
            $route(){
                if (this.$route.meta.root) {
                    this.updateTabState()
                }
            }
        },
    }
</script>