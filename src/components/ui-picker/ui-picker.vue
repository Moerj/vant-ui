<template>
    <van-cell-group @click.native="open()">
        <van-field :label="label" v-model="selectedText" :placeholder="placeholder" readonly :required="required" />

        <div ref="popup">
            <!-- 弹出层 插入body -->
            <van-popup class="ui-picker vw-100" v-model="popupVisible" position="bottom">
                <van-picker
                show-toolbar
                :columns="options"
                @cancel="close"
                @confirm="confirm"
                ref="picker"
                />
            </van-popup>
        </div>

    </van-cell-group>
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
            document.body.appendChild(this.$refs.popup)
        },
        beforeDestroy(){
            document.body.removeChild(this.$refs.popup)
        },
        watch:{
            value(v){
                if (v) {
                    this.options.forEach((item,i)=>{
                        if (item.id === v) {
                            this.selectedText = item[this.valueKey]
                            this.selectedIndex=i
                        }
                    })
                }
                this.$emit('change',v)
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
                // this.selectedText = item[this.valueKey]
                if (this.selectedText) {
                    this.$emit('change', item)
                }
                this.$emit('input',item.id)
                this.close()
            },
            open(){
                if (this.disabled) return;
                if (this.options.length>0) {
                    this.popupVisible=true
                }
            },
            close(){
                this.$nextTick(() => {
                    this.popupVisible=false
                })
            },
        },
    }
</script>
