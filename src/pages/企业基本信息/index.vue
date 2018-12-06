<template>
    <div class="flex-column h-100">
        <van-nav-bar slot="header" :title="title" left-arrow @click-left="$refs.list.open()" />
        <ui-menu slot="header" :options="items" v-model="activeMenu" ref="tree"></ui-menu>
        
        <div class="flex-1 relative">
            <!-- 动态ui-main -->
            <keep-alive>
                <component :is="activeMenu" :params="{test:'参数'}"></component>
            </keep-alive>
        </div>

        <!-- 企业列表,初始自动打卡 -->
        <ui-page ref="list" transition="fade">
            <enterpriseList :title.sync="title"></enterpriseList>
        </ui-page>
    </div>
</template>
<script>
    export default {
        components:{
            safeInfo: ()=>import('./安全生产基础信息'),
            enterpriseInfo: ()=>import('./企业基础信息'),
            employeeProfile: ()=>import('./员工档案'),
            enterpriseList: ()=>import('./企业列表'),
        },
        data() {
            return {
                title:'',
                activeMenu: '', //当前激活的页面
                items: [{
                    // 导航名称
                    text: '企业基础信息',
                    // 该导航下所有的可选项
                    children: [{
                            // 名称
                            text: '安全生产基础信息',
                            // id，作为匹配选中状态的标识
                            id: 'safeInfo',
                        },
                        {
                            text: '企业基础信息',
                            id: 'enterpriseInfo'
                        },
                        {
                            text: '员工档案',
                            id: 'employeeProfile'
                        },
                    ]
                }]
            }
        },
        watch:{
            activeMenu(v){
                this.$router.push({
                    query:{
                        menu: v
                    }
                })
            },
        },
        mounted(){
            this.$refs.list.open()//初始进来就先打开企业列表
            this.activeMenu = this.$route.query.menu || 'safeInfo'
        },
    }

</script>
