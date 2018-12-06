<template>
    <ui-main>
        <van-nav-bar slot="header" title="企业基本信息" left-arrow @click-left="$router.replace('/workplace')" />
        
        <van-cell  is-link v-for="item in listData" :key="item.title" :title="item.title" @click="goItem(item)"></van-cell>
    </ui-main>
</template>
<script>
    export default {
        props:['page-title'],
        methods:{
            goItem(item){//显示指定企业
                this.$emit('update:page-title', item.title)//标题显示选中的企业名称
                this.$parent.close()//关闭当前企业列表的弹窗
            }
        },
        data(){
            return {
                listData:[]
            }
        },
        mounted(){
            // 模拟加载数据
            for (let i = 0; i < 20; i++) {
                this.listData.push({
                    title:`第 ${i+0} 企业`
                })
            }
        },
    }
</script>
