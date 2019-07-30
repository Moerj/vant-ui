<style lang="scss" scoped>
    .ui-checkbox{
        background-color: #fff;
        display: inline;
        padding-left: 15px;
        input[disabled]{//禁用颜色
            &+.checkbox-icon{
                border-color: rgba(black, .24) !important;
                .fa-icon{
                    color: rgba(black, .24) !important;
                }
            }
        }
        .checkbox-icon{
            border: 1px solid #26a2ff;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 1rem;
            height: 1rem;
            >*{
                color: #26a2ff;
                font-weight: lighter;
            }
        }
        .checkbox-text{
            color: rgba(black, .4);
            font-size: 16px;
            margin-left: 5px;
        }

        >label{
            display: flex;
            align-items: center;
        }
    }
</style>
<template>
    <div class="ui-checkbox" @click="$emit('click')">
        <label>
            <input type="checkbox" :name="name" v-model="checked" :disabled="disabled" style="display:none">

            <span class="checkbox-icon" :style="{borderColor:color}">
                <transition name="zoom">
                    <van-icon name="success" v-show="checked" :style="{color:color}"/>
                </transition>
            </span>

            <span class="checkbox-text">{{label}}</span>
        </label>
    </div>
</template>
<script>
    export default {
        name: 'ui-checkbox', 
        props:{
            value: {
                type: Boolean,
                default: false,
                require: true
            },
            name: String,
            label:String,
            disabled:{
                type:Boolean,
                default:false
            },
            default:Boolean,
            color:String
        },
        data() {
            return {
                checked: this.default || this.value
            }
        },
        watch: {
            value(v){
                this.checked = v
            },
            checked(v){
                this.$emit('input', v)
            }
        }
    }
</script>