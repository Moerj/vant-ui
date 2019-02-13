// 数量选择组件, 带加减按钮
<style lang="scss" scoped>
    .ui-number{
        background-color: #fff;
        padding: .5rem;
        padding-left: .5rem;
        &:first-of-type{
            margin-left: 0rem;
            padding-left: 0.5rem;
        }
    }
    .ui-number-btn{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        padding: 5px 10px;
        transition: .3s;
        opacity: .8;
        &:active{
            opacity: 1;
            background-color: #3498db;
        }
        &.disabled{
            pointer-events: none;
            opacity: .3;
        }
        >img{
            height: 20px;
        }
    }
</style>
<template>
    <div class="ui-number ui-border-top flex col-center row-between">
        <span class="mr1 f08 flex-1 ui-clamp-1 ">{{label}}</span>
        <div class="flex col-stretch">
            <!-- 让ios自持:active伪类, 需要touchstart空事件 -->
            <a class="ui-number-btn" :class="{disabled:isMin || disabled}" @click="minus()" @touchstart="">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI5OTk5ODI2Mjk3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgwMS4xNzEgNTQ3LjU4OUgyMjIuODNjLTE3LjY3MyAwLTMyLTE0LjMyNy0zMi0zMnMxNC4zMjctMzIgMzItMzJoNTc4LjM0MWMxNy42NzMgMCAzMiAxNC4zMjcgMzIgMzJzLTE0LjMyNyAzMi0zMiAzMnoiIGZpbGw9IiIgcC1pZD0iMjYxOCI+PC9wYXRoPjwvc3ZnPg==">
            </a>
            <input v-model="n" :disabled="disabled" type="number" class="ui-input ml05 mr05 text-center" style="width:2.2rem;border-radius:4px">
            <a class="ui-number-btn" :class="{disabled:isMax || disabled}" @click="add()" @touchstart="">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI5OTk5NzQyNDA5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5NDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0NCAxMjggNDgwIDEyOCA0ODAgNDgwIDEyOCA0ODAgMTI4IDU0NCA0ODAgNTQ0IDQ4MCA4OTYgNTQ0IDg5NiA1NDQgNTQ0IDg5NS45MzYgNTQ0IDg5NS45MzYgNDgwIDU0NCA0ODBaIiBwLWlkPSIxOTQ3Ij48L3BhdGg+PC9zdmc+">
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name:'ui-number',
        props:{
            label:String,
            value:'',
            min:{
                type:Number,
                default:1
            },
            max:Number,
            disabled:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                n: this.value || 1
            }
        },
        computed:{
            isMin(){
                return this.n<=this.min
            },
            isMax(){
                return this.n>=this.max
            }
        },
        methods:{
            add(){
                if (this.max===undefined || !this.isMax) {
                    this.n ++
                }
            },
            minus(){
                if (!this.isMin) {
                    this.n --
                }
            }
        },
        watch:{
            n(v){
                this.$emit('input',v)
            }
        },
    }
</script>