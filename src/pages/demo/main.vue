<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
        </template>

        <div class="flex-column h-100">
            <ui-card>
                <template v-slot:title>
                    <span>主容器</span>
                </template>
                用与每个页面的外壳构建
                它有三个常用插槽,分别是:
                header、default、footer

                <van-button @click="$router.push('/demo-main-child')" type="primary" size="small">访问子路由</van-button>
            </ui-card>

            <div class="scroll-y flex-1">
                <van-panel :title="'标题'+i" desc="子页面返回时保持滚动条位置" status="状态" v-for="(item,i) in 20" :key="i">
                </van-panel>
            </div>
        </div>

    </ui-main>
</template>