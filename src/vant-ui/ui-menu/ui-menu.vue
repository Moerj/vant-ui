<style lang="scss" scope>
    .modal{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(black,.5);
        z-index: 10;
    }
    .filter-list{
        $bg:#f8f8f8;
        position: absolute;
        left: 0;
        right: 0;
        font-size: 12px;
        z-index: 11;
        background-color: #fff;
        .van-tree-select__nav{
            background-color: $bg;
        }
        .van-tree-select__item{
            border-bottom:1px solid rgba(black,.05);
        }
        .van-tree-select__nitem{//一级菜单
            background-color: $bg;
            &.van-tree-select__nitem--active{//已激活
                background-color: #fff;
                color:#f44
            }
        }
    }
    .tree-select-bar{
        background-color: #fff;
        padding: .3rem .5rem;
        font-size: 12px;
        color: #26a2ff;
        box-shadow: 0 1px 1px rgba(black, .1);
        position: relative;
        z-index: 2;
    }
</style>
<template>
    <div ref="el">
        <!-- 面包屑开关 -->
        <div class="tree-select-bar" ref="bar">
            <span @click="treeVisible=!treeVisible">
                {{groupText}} / {{itemText}}
                <van-icon name="arrow-down" />
            </span>
        </div>
        <!-- 筛选树 -->
        <div>
            <van-tree-select
            v-show="treeVisible" 
            :items="options" 
            :main-active-index="mainActiveIndex" 
            :active-id="value" 
            @navclick="onNavClick" 
            @itemclick="onItemClick" 
            class="filter-list"
            />
            <div class="modal" v-show="treeVisible" :style="{top:headerHeight}" @click="treeVisible=false" ref="modal"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name:'ui-menu',
        props:{
            options:Array,
            value:'',//当前二级节点id
        },
        data() {
            return {
                groupText:'',
                itemText:'',
                filterVisible:false,
                headerHeight:'',
                treeVisible:false,
                mainActiveIndex:0,
                activeGroupIndex:0,//当前点亮的组
            }
        },
        methods: {
            onNavClick(index) {//一级节点选择
                this.mainActiveIndex = index
                
            },
            onItemClick(data) {//二级节点选择
                this.groupText = this.options[this.mainActiveIndex].text
                this.itemText = data.text

                this.$emit('input',data.id)
                this.close()
            },
            open(){
                this.treeVisible = true
            },
            close(){
                this.treeVisible = false
            },
            updateText(){//更新面包屑导航
                this.$nextTick(() => {
                    this.options.forEach((group,index)=>{
                        if (group.children) {
                            group.children.forEach((item)=>{
                                if (item.id == this.value) {
                                    this.groupText = group.text
                                    this.itemText = item.text
                                    this.activeGroupIndex = index
                                }
                            })
                        }
                    })
                })
            },
        },
        watch:{
            treeVisible(v){
                if (v) {
                    //开启筛选时,重置蒙层top定位
                    const bar = this.$refs.bar
                    this.headerHeight = bar.offsetTop + bar.clientHeight + 'px'

                    // 激活对应的组
                    this.mainActiveIndex = this.activeGroupIndex
                }
                this.$eventHub.$emit('ui-main-scroll',!v)
            },
            value(){
                this.updateText()
            }
        },
        mounted(){
            this.updateText()
        },
    }
</script>