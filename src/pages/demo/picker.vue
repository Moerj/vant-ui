<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
        </template>

        <ui-card>
            <template v-slot:title>
                <span>ui-picker</span>
            </template>
            建议选项少于10项,
            选项过多或需要多选时不适合
        </ui-card>

        <ui-picker v-model="id" placeholder="请选择一项" label="这是单选题" :options="option" required @change="onChange">
        </ui-picker>

        <p class="c-orange pl5">当前id: {{id}}</p>

    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                option:[],
                id:''
            }
        },
        mounted(){
            //模拟异步加载数据源和回显数据
            setTimeout(() => {
                this.option = [
                    {text:'萝莉',id:'01'},
                    {text:'御姐',id:'02'},
                    {text:'都要',id:'03'},
                ]
                this.id = '03'
            }, 3000);
        },
        methods:{
            onChange(item){
                console.log('change', item);
            }
        },
    }
</script>