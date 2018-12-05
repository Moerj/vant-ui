<template>
    <div class="flex-column h-100">
        <van-nav-bar slot="header" title="基本信息" left-arrow @click-left="$router.go(-1)" />
        <ui-menu slot="header" :options="items" v-model="activeMenu" ref="tree"></ui-menu>
        
        <div class="flex-1 relative">
            <!-- 动态ui-main -->
            <keep-alive>
                <component :is="activeMenu" :params="{test:'参数'}"></component>
            </keep-alive>
        </div>
    </div>
</template>
<script>
    export default {
        components:{
            safeInfo: ()=>import('./安全生产基础信息.vue'),
            enterpriseInfo: ()=>import('./企业基础信息.vue'),
        },
        data() {
            return {
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
                            id: 3
                        },
                        {
                            text: '个人证书管理',
                            id: 4
                        },
                        {
                            text: '个人证书审核',
                            id: 5
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
            this.activeMenu = this.$route.query.menu || 'safeInfo'
        },
    }

</script>
