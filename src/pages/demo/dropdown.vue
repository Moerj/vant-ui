<template>
    <ui-main>
        <van-nav-bar slot="header" :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>

        <div class="mt1">
            <!-- v-model可以控制展开状态 -->
            <ui-dropdown title="单选组1" v-model="droped">
                <!-- 这里插入其他组件或内容 -->
                <van-radio-group v-model="radio">
                    <van-cell-group>
                        <van-cell title="单选框 1" clickable @click="radio = '1'">
                            <van-radio name="1" />
                        </van-cell>
                        <van-cell title="单选框 2" clickable @click="radio = '2'">
                            <van-radio name="2" />
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>
            </ui-dropdown>

            <ui-dropdown title="多选组">
                <van-checkbox-group v-model="checklist">
                    <van-cell-group>
                        <van-cell v-for="item in 3" :title="`复选框 ${item}`" :key="item" @click.native="clickChildren('checkbox'+item)">
                            <van-checkbox :name="item" shape="square" :ref="'checkbox'+item"/>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
            </ui-dropdown>
        </div>

    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                droped:false,
                radio:'',
                checklist:[]
            }
        },
        methods:{
            clickChildren(ref){
                let checkbox = this.$refs[ref][0].$el
                checkbox.querySelector('i').click()
            }
        },
    }
</script>