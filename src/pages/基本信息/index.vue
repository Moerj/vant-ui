<template>
    <ui-main>
        <van-nav-bar slot="header" title="基本信息" left-arrow @click-left="$router.go(-1)" />
        <ui-menu slot="header" :options="items" v-model="activeId" ref="tree"></ui-menu>
    </ui-main>
</template>
<script>
    export default {
        data() {
            return {
                activeId: 1,
                items: [{
                    // 导航名称
                    text: '基本信息',
                    // 该导航下所有的可选项
                    children: [{
                            // 名称
                            text: '企业基础信息',
                            // id，作为匹配选中状态的标识
                            id: 1,
                            // 禁用选项
                            disabled: true
                        },
                        {
                            text: '安全生产基础信息',
                            id: 2
                        }
                    ]
                }]
            }
        },
    }

</script>
