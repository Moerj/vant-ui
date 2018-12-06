<template>
    <ui-main>
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')" />

        <ui-card>
            <span slot="title">ui-menu</span>
            顶部主菜单,用于切换到子页面
        </ui-card>

        <ui-menu :options="items" v-model="activeMenu"></ui-menu>

    </ui-main>
</template>
<script>
    export default {
        data() {
            return {
                activeMenu: 'safeInfo', //当前激活的页面
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
        }
    }

</script>
