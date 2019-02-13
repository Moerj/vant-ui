<template>
    <van-field :label="label" v-model="selectedText" :placeholder="placeholder" readonly :required="required" @focus="open()">
        <!-- 弹出层会插入body -->
        <div slot="icon" ref="popup">
            <van-popup class="ui-picker vw-100" v-model="popupVisible" position="bottom" get-container="body">
                <van-picker
                show-toolbar
                :columns="options"
                @cancel="close"
                @confirm="confirm"
                ref="picker"
                :loading="options.length===0"
                />
            </van-popup>
        </div>
    </van-field>
</template>
<script>
    export default {
        name:'ui-picker',
        props:{
            options:Array,
            value:'',
            label:String,
            required:Boolean,
            placeholder:{
                type:String,
                default:'请选择一项'
            },
            disabled:{
                type:Boolean,
                default:false
            },
            valueKey:{
                type:String,
                default:'text'
            }
        },
        data(){
            return {
                popupVisible:false,
                reRenderSwitch:true,//用于重绘picker
                selectedText:'',
                selectedIndex:0
            }
        },
        mounted(){
            this.syncByModel()
        },
        watch:{
            value(v){
                this.syncByModel()
            },
            popupVisible(v){
                if (v===true) {
                    this.$nextTick(() => {
                        this.$refs.picker.setIndexes([this.selectedIndex])
                    })
                }
            }
        },
        methods:{
            confirm(item){
                // 修改v-model
                this.$emit('input',item.id)
                // @change回调
                if (this.selectedText) {
                    this.$emit('change', item)
                }
                // 关闭
                this.close()
            },
            open(){
                if (!this.disabled){
                    this.popupVisible=true
                }
            },
            close(){
                this.$nextTick(() => {
                    this.popupVisible=false
                })
            },
            syncByModel(){
                if (!this.value) return;
                    
                this.options.forEach((item,i)=>{
                    if (item.id === this.value) {
                        this.selectedText = item[this.valueKey]
                        this.selectedIndex=i
                    }
                })
            }
        },
    }
</script>
