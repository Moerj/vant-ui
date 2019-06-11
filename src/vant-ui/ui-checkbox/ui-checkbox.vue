<style lang="scss" scoped>
    @import '~@/scss/variables.scss';
    .ui-checkbox{
        background-color: #fff;
        display: inline;
        padding-left: 15px;
        input[disabled]{//禁用颜色
            &+.checkbox-icon{
                border-color: $ui-color-disabled !important;
                .fa-icon{
                    color: $ui-color-disabled !important;
                }
            }
        }
        .checkbox-icon{
            border: 1px solid $ui-color-primary;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 1rem;
            height: 1rem;
            >*{
                color: $ui-color-primary;
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