// 数量选择组件, 带加减按钮
<style lang="scss" scoped>
    .ui-input-number{
        background-color: #fff;
        padding: .5rem;
        padding-left: .5rem;
        &:first-of-type{
            margin-left: 0rem;
            padding-left: 0.5rem;
        }
    }
    .input-number-btn{
        padding: 5px 10px;
        &.disabled{
            pointer-events: none;
            opacity: .4;
        }
    }
</style>
<template>
    <div class="ui-input-number ui-border-top flex col-center row-between">
        <span class="mr1 f08 flex-1 ui-clamp-1 ">{{title}}</span>
        <div class="flex col-stretch">
            <a class="input-number-btn" :class="{disabled:isMin}" @click="minus()">
                <img style="height:18px;padding:2px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI5OTk5ODI2Mjk3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjI2MTciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTgwMS4xNzEgNTQ3LjU4OUgyMjIuODNjLTE3LjY3MyAwLTMyLTE0LjMyNy0zMi0zMnMxNC4zMjctMzIgMzItMzJoNTc4LjM0MWMxNy42NzMgMCAzMiAxNC4zMjcgMzIgMzJzLTE0LjMyNyAzMi0zMiAzMnoiIGZpbGw9IiIgcC1pZD0iMjYxOCI+PC9wYXRoPjwvc3ZnPg==">
            </a>
            <input  v-model="n" type="number" class="ui-input ml05 mr05 text-center" style="width:2.2rem;border-radius:4px">
            <a class="input-number-btn" :class="{disabled:isMax}" @click="add()">
                <img style="height:18px;padding:2px" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI5OTk5NzQyNDA5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE5NDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU0NCAxMjggNDgwIDEyOCA0ODAgNDgwIDEyOCA0ODAgMTI4IDU0NCA0ODAgNTQ0IDQ4MCA4OTYgNTQ0IDg5NiA1NDQgNTQ0IDg5NS45MzYgNTQ0IDg5NS45MzYgNDgwIDU0NCA0ODBaIiBwLWlkPSIxOTQ3Ij48L3BhdGg+PC9zdmc+">
            </a>
        </div>
    </div>
</template>
<script>
    export default {
        name:'ui-input-number',
        props:{
            title:String,
            value:'',
            min:{
                type:Number,
                default:1
            },
            max:Number
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