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
        <template v-slot:button>
            <div ref="popup">
                <van-popup v-model="popupVisible" position="bottom" class="ui-datetime" get-container="body">
                    <van-datetime-picker 
                    ref="picker"
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
        </template>

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
                //时间组件打开时picker选项定位
                if (this.value) {
                    if (this.type==='time') {
                        // 时间类型无法直接赋值定位
                        let hour = this.value.split(':')[0]
                        let minute = this.value.split(':')[1]
                        this.$refs.picker.$children[0].setValues([hour,minute])
                    }else {
                        // 直接赋值定位
                        this.pickerModel = new Date(this.value);
                    }
                }
                this.popupVisible = true
            },
            close(){
                this.popupVisible = false
            },
            confirm(val){
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
                    timeStr = val
                }
                else  {
                    timeStr = this.$date(val, formate)
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
    }
</script>