<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')" />
        </template>

        <ui-card>
            <template v-slot:title>
                <div>@change</div>
            </template>
            获取已上传的file对象,然后手动实现上传逻辑
        </ui-card>
        <ui-card>
            <template v-slot:title>
                <div>@remove</div>
            </template>
            点击删除按钮时获取已删除的本地图片src和索引
        </ui-card>

        <ui-upload multiple :file-list.sync="fileList" @change="onChange" @remove="onRemove"></ui-upload>
    </ui-main>
</template>
<script>
    export default {
        data() {
            return {
                //已上传的图片列表
                fileList: [
                    {
                        url:'//wx4.sinaimg.cn/orj360/8d65f675gy1ffv2lovprqj21kw11ykjo.jpg',
                    }
                ], 
            }
        },
        methods:{
            onChange(){
                console.log('加入上传队列',this.fileList);
            },
            onRemove(){
                console.log('删除文件',this.fileList);
            }
        },
    }
</script>