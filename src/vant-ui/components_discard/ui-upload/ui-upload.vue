
<style lang="scss" scoped>
    .upload-item {
        background-color: #fff;
        display: inline-block;
        position: relative;
        margin-right: 5px;
        margin-left: 5px;
        margin-bottom: 10px;

        >.ui-img {
            width: 100%;
            height: 100%;
        }

        >.upload-item-close{
            position: absolute;
            right: 0;
            top: 0;
            transform: translate3d(50%,-50%,0);
            color: #F36C60;
            font-size: 16px;
            z-index: 1;
        }
    }

    .upload-add {
        position: relative;
        margin-right: 0;
        border: 1px dashed #93caf3;
        margin-bottom: 0;

        &::after {
            content: '+';
            font-size: 2rem;
            position: absolute;
            color: #93caf3;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50%, 0);
        }

        &.disabled{
            border-color: #ddd;
            &::after{
                color: rgba(black,.3);
            }
        }
    }
</style>
<template>
    <div ref="listBox">
        <div v-for="(item,i) in value" class="upload-item" :style="{height:size,width:size}">
            <van-icon class="upload-item-close" name="clear" @click="onRemove(i)"/>

            <!-- 图片回显 -->
            <ui-img :src="item.url"></ui-img>
        </div>

        <van-uploader 
        :after-read="afterRead" 
        :before-read="beforeRead"
        :multiple="multiple" 
        :accept="accept" 
        :disabled="disabled">
            <div class="upload-item upload-add" :class="{disabled:disabled}" ref="add-item" :style="{height:size,width:size}"></div>
        </van-uploader>
    </div>
</template>
<script>
    export default {
        name:'ui-upload',
        props:{
            value:Array,//已上传的图片列表
            multiple:{
                type:Boolean,
                default: true
            },
            accept:{
                type:String,
                default:'image/*'
            },
            disabled:{
                type:Boolean,
                default: false
            },
            beforeRead:Function
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
            afterRead(data){
                // 默认组件会在图片加入队列后自动上传
                // 如果要关闭自动上传,请去掉@imageuploaded事件, 在onChange中自行实现上传机制
                let list = this.value
                if (this.multiple) {
                    if (data.length>1) {
                        for (let i = 0; i < data.length; i++) {
                            let url = URL.createObjectURL(data[i].file)
                            list.push({ url:url })
                        }
                    }else{
                        list.push({ url:URL.createObjectURL(data.file) })
                    }
                }else{
                    list = [{ url:URL.createObjectURL(data.file) }]
                }
                this.$emit('input', list)
                this.$emit('read')
            },
            onRemove(index){
                let list = [...this.value]
                let removeObj = list[index]
                list.splice(index,1)//移除数组中匹配项
                this.$emit('input', list)
                this.$emit('remove', removeObj, index)
            },
        },
    }
</script>