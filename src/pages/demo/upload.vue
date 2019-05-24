<style lang="scss" scoped>
    .upload-item{
        background-color: #fff;
        display: inline-block;
        position: relative;
        width: 110px;
        height: 110px;
        margin-right: 0.5rem;
        >.ui-img{
            width: 100%;
            height: 100%;
        }
    }
    .upload-tools{
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        height: 1.5rem;
        width: 100%;
        background-color: rgba(black, .3);
        padding: 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: .7rem;

        >*{
            margin-right: 0.2rem;
        }
    }
    .upload-add{
        position: relative;
        margin-right: 0;
        border:1px dashed #ddd;
        &::after{
            content: '+';
            font-size: 2rem;
            position: absolute;
            color:rgba(black, .3);
            top: 50%;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
        }
    }

</style>
<template>
    <ui-main>
        <template v-slot:header>
            <van-nav-bar :title="$route.path.replace('/demo-','')" left-arrow @click-left="$router.replace('/demo')"/>
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

        <div class="p15">

            <div v-for="item in fileList" class="upload-item">

                <!-- 操作按钮 -->
                <div class="upload-tools" @click="onRemove(item)">
                    <van-icon name="delete" /> 删除
                </div>

                <!-- 图片回显 -->
                <ui-img :src="item" ></ui-img>
            </div>

            <van-uploader :after-read="onChange" multiple>
                <div class="upload-item upload-add"></div>
            </van-uploader>
        </div>

    </ui-main>
</template>
<script>
    export default {
        data(){
            return {
                action:'http://back.7178861.com/index.php?g=asset&m=asset&a=plupload',//上传地址
                fileList:[],//已上传的图片列表
            }
        },
        methods: {
            onChange(data){
                // 默认组件会在图片加入队列后自动上传
                // 如果要关闭自动上传,请去掉@imageuploaded事件, 在onChange中自行实现上传机制
                console.log('onChange',data);
                if (data.length>1) {//多图
                    for (let i = 0; i < data.length; i++) {
                        let url = URL.createObjectURL(data[i].file)
                        this.fileList.push(url)
                    }
                }else{//单图上传
                    this.fileList.push(URL.createObjectURL(data.file))
                }
            },
            onRemove(imgSrc){
                this.fileList.forEach((src,i)=>{
                    if (src===imgSrc) {
                        console.log('移除已上传的图片',{src:src,index:i});
                        this.fileList.splice(i,1)//移除数组中匹配项

                        return
                    }
                })
            },
        },
    }
</script>