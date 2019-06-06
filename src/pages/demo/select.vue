<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
        </template>

        <van-cell-group>
            <ui-select label="单选" required v-model="form.id" :options="opt" placeholder="请选择一项"></ui-select>
            <ui-select label="多选" v-model="form2.id" @search="onSearch" :options="opt" multiple :max="3" placeholder="最多选3个,可搜索">
                <!-- 插入tab进行过滤 -->
                <van-tabs v-model="tab">
                    <van-tab v-for="item in tabData" :key="item.label" :title="item.label">
                    </van-tab>
                </van-tabs>
            </ui-select>
        </van-cell-group>

    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                form:{
                    label:'',
                    id:''
                },
                form2:{
                    label:'',
                    id:''
                },
                opt:[],
                tab:'分类1',
                tabData: [ // 工单状态
                    { label: '分类1'},
                    { label: '分类2'},
                ],
                initOpt: [
                    {text:'选项1',id:'1'},
                    {text:'选项2',id:'2'},
                    {text:'选项3',id:'3'},
                    {text:'选项4',id:'4'},
                    {text:'选项5',id:'5'},
                    {text:'选项6',id:'6'},
                    {text:'选项7',id:'7'},
                    {text:'选项8',id:'8'},
                ],
            }
        },
        mounted(){
            this.opt = [...this.initOpt]
            this.form.id = '1'
            this.form2.id = '1,2'
        },
        methods:{
            onSearch(v){
                console.log('检索关键字: '+v);
                // 模拟在线检索
                setTimeout(() => {
                    if (v) {
                        this.opt = [
                            {text:'在线新结果1',id:'new1'},
                            {text:'在线新结果2',id:'new2'},
                        ]
                    }else{
                        this.opt=[...this.initOpt]
                    }
                }, 1000);
            }
        },
    }
</script>
