<style lang="scss" scoped>
    .ui-datetime{
        width: 100vw;
    }
</style>
<template>
    <van-field
        v-model="value"
        :label="label"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        readonly
        @focus="open()">

        <!-- 弹出层会插入body -->
        <div slot="icon" ref="popup">
            <van-popup v-model="popupVisible" position="bottom" class="ui-datetime">
                <van-datetime-picker 
                v-model="pickerModel" 
                :type="type"
                :min-date="minDate"
                :max-date="maxDate"
                :min-hour="minHour"
                :max-hour="maxHour"
                :min-Minute="minMinute"
                :max-Minute="maxMinute"
                @confirm="confirm"
                @cancel="cancel"/>
            </van-popup>
        </div>

    </van-field>
</template>
<script>
    export default {
        name:'ui-datetime',
        props:{
            label:String,//当前页标题
            type:{
                type:String,
                default:'datetime'
            },
            value:{
                type:String,
            },
            required:Boolean,
            disabled:{
                type:Boolean,
                default:false
            },
            placeholder:{
                type:String,
                default:'请选择时间'
            },
            minDate:Date,
            maxDate:Date,
            minHour:Number,
            maxHour:Number,
            minMinute:Number,
            maxMinute:Number,
        },
        data(){
            return {
                popupVisible:false,
                pickerModel:'',
            }
        },
        methods:{
            open(){
                if (this.value) {
                    this.pickerModel = new Date(this.value) //时间组件打开时,将自然时间转为时间对象
                }
                this.popupVisible = true
            },
            close(){
                this.popupVisible = false
            },
            confirm(){
                // 根据类型确定格式化
                let formate ='yyyy-MM-dd hh:mm:ss'
                switch (this.type) {
                    case 'date':
                        formate='yyyy-MM-dd'
                        break;
                    case 'time':
                        formate='hh:mm:ss'
                        break;
                    case 'year-month':
                        formate='yyyy-MM'
                        break;
                
                    default:
                        break;
                }

                // 将最终输出结果转化为自然时间-字符串
                let timeStr = ''
                if (this.type==='time') {
                    timeStr = this.pickerModel
                }
                else  {
                    timeStr = this.$date(this.pickerModel, formate)
                }

                // 回显输出
                this.$emit('input', timeStr)

                this.close()
                this.$emit('confirm',timeStr)
            },
            cancel(){
                this.close()
                this.$emit('cancel')
            }
        },
        mounted(){
            document.body.appendChild(this.$refs.popup)
        },
        beforeDestroy(){
            document.body.removeChild(this.$refs.popup)
        },
    }
</script>