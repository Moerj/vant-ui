<style lang="scss" scoped>
    .ui-img{
        display: inline-block;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        overflow: hidden;
        position: relative;
        // 默认图片
        background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTI4MTcwMDg3MTI2IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjEwNzgiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNODY5LjU0NDk2IDkxNy40MDY3MiAzNTcuNTI0NDggOTE3LjQwNjcybC0yMTguNTkzMjgtMC40MTk4NGMtMC42MzQ4OC0wLjAxNTM2LTEuMjY0NjQtMC4wNDA5Ni0xLjg5NDQtMC4xMDc1Mi0yNS45MzI4LTIuNTk1ODQtNDkuOTItMTQuNjc5MDQtNjcuNTIyNTYtMzQuMDE3MjgtMTcuNzM1NjgtMTkuNDg2NzItMjcuNTA0NjQtNDQuNzMzNDQtMjcuNTA0NjQtNzEuMDg2MDhMNDIuMDA5NiAyNjIuMDIxMTJjMC01OC4yNDUxMiA0Ny4zOTA3Mi0xMDUuNjM1ODQgMTA1LjYzNTg0LTEwNS42MzU4NGw3MjEuODk5NTIgMGM1OC4yNTAyNCAwIDEwNS42MzU4NCA0Ny4zOTA3MiAxMDUuNjM1ODQgMTA1LjYzNTg0bDAgMjM1LjM4MTc2YzAgMC4yODE2LTAuMDEwMjQgMC41NjgzMi0wLjAyMDQ4IDAuODYwMTYtMC4wMjU2IDAuNTE3MTItMi4wNTMxMiA1My45ODUyOCAxNi4xNTg3MiA4OS4xOTU1MiA0LjkxNTIgOS41MTgwOCAxLjE5Mjk2IDIxLjIyMjQtOC4zMiAyNi4xNDI3MnMtMjEuMjI3NTIgMS4yMDgzMi0yNi4xNDc4NC04LjMwNDY0Yy0yMi4yMzEwNC00Mi45ODI0LTIwLjcxMDQtMTAxLjkxODcyLTIwLjQ4LTEwOC4yODI4OEw5MzYuMzcxMiAyNjIuMDIxMTJjMC0zNi44NDM1Mi0yOS45Nzc2LTY2LjgyNjI0LTY2LjgyNjI0LTY2LjgyNjI0TDE0Ny42NDU0NCAxOTUuMTk0ODhjLTM2Ljg0ODY0IDAtNjYuODMxMzYgMjkuOTgyNzItNjYuODMxMzYgNjYuODI2MjRsMCA1NDkuNzZjMCAzNC4xODYyNCAyNS4zODQ5NiA2Mi41NjY0IDU5LjIwMjU2IDY2LjM5NjE2bDIxNy41NDM2OCAwLjQyNDk2IDUxMS45ODQ2NCAwYzM2Ljg0ODY0IDAgNjYuODM2NDgtMjkuOTcyNDggNjYuODM2NDgtNjYuODIxMTJsLTAuNDA0NDgtOTcuNzg2ODhjLTAuMTA3NTItMS44MTI0OC0xLjY1Mzc2LTIwLjQwMzItMjAuNDAzMi00NC4zNDk0NC0wLjA1MTItMC4wNjY1Ni0wLjA5NzI4LTAuMTI4LTAuMTQ4NDgtMC4xOTQ1NmwtMjIuNjcxMzYtMjkuNzQyMDhMNzcwLjQwNjQgNDc3Ljc5ODRjLTAuNDM1Mi0wLjU2ODMyLTQwLjcwNC01My4wNzM5Mi05MC4wNTA1Ni00Ny41MTg3Mi00MC4wMDc2OCA0LjUwMDQ4LTc5LjI3Mjk2IDQ3LjEzOTg0LTExMy41NDYyNCAxMjMuMjk5ODQtMTguMzg1OTIgNDAuODQ3MzYtMzYuMTYyNTYgNzEuMjU1MDQtNTQuMzU5MDQgOTIuOTMzMTItMTguMzgwOCAyMS45MDMzNi0zNy4yMzc3NiAzNC45OTAwOC01Ny42NjY1NiAzOS45OTc0NC00NS4zMjIyNCAxMS4xMTA0LTg0LjU5MjY0LTE5LjgyNDY0LTEyNi4xNzcyOC01Mi41ODI0bC01LjI3MzYtNC4xNDcyYy00OC41OTM5Mi0zOC4xOTAwOC03MS43NjE5Mi0yOS40NjA0OC0xNjUuMjUzMTIgNjIuMTk3NzYtNy42NTQ0IDcuNTA1OTItMTkuOTM3MjggNy4zODMwNC0yNy40MzgwOC0wLjI2NjI0LTcuNTAwOC03LjY1OTUyLTcuMzc3OTItMTkuOTQyNCAwLjI3MTM2LTI3LjQ0MzIgNDguNjk2MzItNDcuNzQ0IDgwLjkzMTg0LTc1LjkwNCAxMTEuNzY5Ni04Ny45NjY3MiAzNC44MTYtMTMuNjI0MzIgNjcuMDg3MzYtNi41MzgyNCAxMDQuNjI3MiAyMi45NTgwOGw1LjMxNDU2IDQuMTgzMDRjMzUuNDA5OTIgMjcuODgzNTIgNjUuOTg2NTYgNTEuOTczMTIgOTIuOTIyODggNDUuMzYzMiAyNi43NDE3Ni02LjU1MzYgNTUuNjI4OC00My45NTUyIDg1Ljg3Nzc2LTExMS4xNzA1NiA0MC44NTI0OC05MC43Nzc2IDg5LjU4OTc2LTEzOS44ODM1MiAxNDQuODcwNC0xNDUuOTYwOTYgNzEuNDQ0NDgtNy44NDg5NiAxMjIuOTcyMTYgNTkuOTA5MTIgMTI1LjEyNzY4IDYyLjgwMTkybDEyMi4yNTAyNCAxNjEuNzYxMjggMjIuNTM4MjQgMjkuNTc4MjRjMjcuNDI3ODQgMzUuMDkyNDggMjguNTI4NjQgNjQuMzMyOCAyOC41NjQ0OCA2Ny41NTg0IDAgMC4wNDA5NiAwIDAuMDkyMTYgMCAwLjEyOGwwLjQwNDQ4IDk4LjE2NTc2Qzk3NS4xODA4IDg3MC4wMTYgOTI3Ljc5NTIgOTE3LjQwNjcyIDg2OS41NDQ5NiA5MTcuNDA2NzJMODY5LjU0NDk2IDkxNy40MDY3MnoiIHAtaWQ9IjEwNzkiIGZpbGw9IiNlNmU2ZTYiPjwvcGF0aD48cGF0aCBkPSJNMzA1LjA1OTg0IDQ1Mi4zNDE3NmMtNDQuMTc1MzYgMC04MC4xMTI2NC0zNS45MzcyOC04MC4xMTI2NC04MC4xMTI2NCAwLTQ0LjE3NTM2IDM1Ljk0MjQtODAuMTEyNjQgODAuMTEyNjQtODAuMTEyNjRTMzg1LjE3MjQ4IDMyOC4wNDg2NCAzODUuMTcyNDggMzcyLjIyNEMzODUuMTcyNDggNDE2LjQwNDQ4IDM0OS4yMzAwOCA0NTIuMzQxNzYgMzA1LjA1OTg0IDQ1Mi4zNDE3NkwzMDUuMDU5ODQgNDUyLjM0MTc2ek0zMDUuMDU5ODQgMzMwLjkxNTg0Yy0yMi43Nzg4OCAwLTQxLjMxMzI4IDE4LjUyOTI4LTQxLjMxMzI4IDQxLjMwODE2IDAgMjIuNzczNzYgMTguNTM0NCA0MS4zMDgxNiA0MS4zMTMyOCA0MS4zMDgxNiAyMi43Nzg4OCAwIDQxLjMwODE2LTE4LjUzNDQgNDEuMzA4MTYtNDEuMzA4MTZDMzQ2LjM2OCAzNDkuNDQ1MTIgMzI3LjgzMzYgMzMwLjkxNTg0IDMwNS4wNTk4NCAzMzAuOTE1ODRMMzA1LjA1OTg0IDMzMC45MTU4NHoiIHAtaWQ9IjEwODAiIGZpbGw9IiNlNmU2ZTYiPjwvcGF0aD48L3N2Zz4=');
        .ui-img-tools{
            // 图片中的标题
            text-overflow: ellipsis;
            white-space: normal;
            word-break: break-all;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            // 图片中的标题 end
            overflow: hidden;
            line-height: normal;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: rgba(black, 0.3);
            padding:.2rem .3rem;
            margin: 0;
            font-size: .6rem;
            color: #fff;
            width: 100%;
            text-align: left;
        }
    }
    .weight-full{
        width: 100%;
    }
    .height-full{
        height: 100%;
    }
</style>
<template>
    <div class="ui-img" :style="{ backgroundImage: imgSrc, width:formatSize, height:formatSize, borderRadius:radius }" >
        <!--标题-->
        <div v-if="$slots.default" class="ui-img-tools">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'ui-img',
        props:{
            src:{
                type: String,
                require: true
            },
            size:{
                type: String,
                default: ''
            },
            circle:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return {
                imgWeightFull:false,
                imgHeightFull:false,
            }
        },
        computed: {
            imgSrc(){
                if (this.src) {
                    return `url(${encodeURI(this.src)})`
                }
                return ''
            },
            formatSize(){
                if (this.size.indexOf('rem')>-1 || this.size.indexOf('px')>-1) {
                    return this.size
                }
                return this.size + 'px'
            },
            radius(){
                return this.circle?'50%':''
            }
        }
    }
</script>