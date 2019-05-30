<style lang="scss" scoped>
    .upload-item {
        background-color: #fff;
        display: inline-block;
        position: relative;
        margin-right: 4px;
        margin-left: 4px;
        margin-bottom: 8px;

        >.ui-img {
            width: 100%;
            height: 100%;
        }
    }

    .upload-tools {
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

        >* {
            margin-right: 0.2rem;
        }
    }

    .upload-add {
        position: relative;
        margin-right: 0;
        border: 1px dashed #ddd;
        margin-bottom: 0;

        &::after {
            content: '+';
            font-size: 2rem;
            position: absolute;
            color: rgba(black, .3);
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
        }
    }
</style>
<template>
    <div ref="listBox">
        <div v-for="(item,i) in fileList" class="upload-item" :style="{height:size,width:size}">

            <!-- 操作按钮 -->
            <div class="upload-tools" @click="onRemove(i)">
                <van-icon name="delete" /> 删除
            </div>

            <!-- 图片回显 -->
            <ui-img :src="item.url"></ui-img>
        </div>

        <van-uploader :after-read="onChange" :multiple="multiple">
            <div class="upload-item upload-add" ref="add-item" :style="{height:size,width:size}"></div>
        </van-uploader>
    </div>
</template>
<script>
    export default {
        name:'ui-upload',
        props:{
            fileList:Array,//已上传的图片列表
            multiple:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                size:''
            }
        },
        mounted(){
            let w = this.$refs['listBox'].offsetWidth/4.5
            this.size = w + 'px'
        },
        methods: {
            onChange(data){
                // 默认组件会在图片加入队列后自动上传
                // 如果要关闭自动上传,请去掉@imageuploaded事件, 在onChange中自行实现上传机制
                let list = this.fileList
                if (data.length>1) {//多图
                    for (let i = 0; i < data.length; i++) {
                        let url = URL.createObjectURL(data[i].file)
                        list.push({
                            url:url
                        })
                    }
                }else{//单图上传
                    list = [{
                        url:URL.createObjectURL(data.file)
                    }]
                }
                this.$emit('update:file-list', list)
            },
            onRemove(index){
                let list = [...this.fileList]
                list.splice(index,1)//移除数组中匹配项
                this.$emit('update:file-list', list)
            },
        },
    }
</script>