<template>
    <ui-main >
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
        </template>

        <!-- 案例 1 -->
        <ui-card>
            <template v-slot:title>
                <span class="c-blue">default</span>
            </template>
            默认均分布局
        </ui-card>

        <ui-tab v-model="tab1">
            <ui-tab-item  v-for="item in tabData1" :key="item.label" :label="item.label" :badge="item.badge"></ui-tab-item>
        </ui-tab>


        <!-- 案例 2 -->
        <ui-card class="mt2">
            <template v-slot:title>
                <span class="c-blue">scroll</span>
            </template>
            左右滚动
        </ui-card>

        <ui-tab v-model="tab2" scroll>
            <ui-tab-item  v-for="item in tabData2" :key="item.label" :label="item.label" :badge="item.badge"></ui-tab-item>
        </ui-tab>
        
    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                tab1:'爱丽丝',
                tabData1: [
                    { label: '爱丽丝', badge:''},
                    { label: '魔理沙', badge:'1'},
                    { label: '蕾米莉亚', badge:''},
                    { label: '灵梦', badge:'99+'},
                ],


                tab2:'飞机师',
                tabData2: [
                    { label: '飞机师', badge:0},
                    { label: '俄罗斯大转盘', badge:5},
                    { label: '深水炸弹', badge:0},
                    { label: '待完工', badge:0},
                    { label: '已完工', badge:0},
                    { label: '付款中', badge:0},
                    { label: '已结项', badge:99},
                ],
                
            }
        },
        mounted(){
        },
    }
</script>