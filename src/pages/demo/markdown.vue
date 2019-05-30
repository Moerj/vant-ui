<style lang="scss" scoped>
    .doc{
        max-width: 1600px;
        background-color: #fff;
        .scroll-y{
            &::-webkit-scrollbar{
                width:3px;
                height:4px;
            }
            &::-webkit-scrollbar-track{
                border-radius:10px;
                background-color:transparent ;
            }
            &::-webkit-scrollbar-thumb{
                border-radius:10px;
                background-color:transparent ;
            }
            &:hover::-webkit-scrollbar-track{
                background-color:rgba(0, 0, 0, .1);
            }
            &:hover::-webkit-scrollbar-thumb{
                background-color:rgba(0, 0, 0, .25);
            }
        }
    }
    .doc-simulator{
        overflow: hidden;
        border-radius: 6px;
        background: #fafafa;
        margin-right: 40px;
        width: 360px;
        height: 640px;
        margin-top: 100px;
        box-shadow: 0 4px 12px #ebedf0;
    }
    .nav-item{
        height: 100%;
        border-right: 1px solid #f1f4f8;
        padding-bottom:50px;
        @mixin item(){
            margin: 0;
            display: block;
            color: #455a64;
            padding: 10px 20px 10px 40px;
            line-height: 24px;
            transition: all .3s;
            
        }
        >.nav-title{
            @include item;
            font-size: 16px;
            font-weight: bold;
            margin-top: 20px;
        }
        &> a{
            @include item;
            font-size: 14px;
            cursor: pointer;
            &:hover{
                color:dodgerblue;
            }
            &.active{
                color:orange;
            }
        }
    }
    .topbar{
        height: 60px;
        border-bottom: 1px solid #f1f4f8;
        background-color: #fff;
        display: flex;
        align-items: center;
        padding-left: 40px;
    }
    .markdown{
        padding: 15px 40px;
    }
</style>
<template>
    <div class="vh-100 flex-column">
        <div class="topbar">
            <span class="flex col-center">
                <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" width="24">
                <span class="f22 ml10">Vant-ui</span>
            </span>
        </div>
        <div class="doc flex-1 flex">
            <!-- nav -->
            <div class="scroll-y nav-item">
                <span class="nav-title">框架基础</span>
                <a href="https://youzan.github.io/vant/1.x/#/zh-CN/intro" target="_blank">
                    <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" width="16">
                    Vant官方库
                </a>
                <a @click="navChange('/demo')" :class="{active:activeNav=='/demo'}">
                    介绍
                </a>
                <a @click="navChange('/demo-style')" :class="{active:activeNav=='/demo-style'}">
                    样式
                </a>
                <span class="nav-title">扩展组件</span>
                <a v-for="(item,index) in routerList" v-if="item.name" :class="{active:activeNav==item.path}" @click="navChange(item.path)">
                    {{item.path.replace('/demo','').replace('-','')}}
                    <span class="f13 opacity-06">{{item.name}}</span>
                </a>
            </div>

            <!-- markdown -->
            <div class="markdown flex-1">
                <iframe v-if="markdownSrc" :src="markdownSrc" frameborder="0" style="width:100%;height:100%"></iframe>
            </div>

            <!-- demo -->
            <iframe :src="demoSrc" frameborder="0" class="doc-simulator"></iframe>
        </div>
    </div>
</template>
<script>
    import routerList from './router'
    
    export default {
        data(){
            return {
                host: location.origin + location.pathname,
                demoSrc: this.host +'#/demo',
                routerList:routerList,
                activeNav: sessionStorage.getItem('activeNav') || '/demo',
                pageName:''
            }
        },
        methods:{
            navChange(path){
                this.pageName =  path.replace('/demo','').replace('-','')
                this.demoSrc = `${this.host}#${path}`
                this.activeNav = path
                sessionStorage.setItem('activeNav',path)
            },
        },
        computed:{
            markdownSrc(){
                if (this.pageName === '') {
                    return `${this.host}/md2html/readme.md.html`
                }else if (this.pageName === 'style') {
                    return `${this.host}/md2html/style.md.html`
                }
                return `${this.host}/md2html/ui-${this.pageName}.md.html`
            }
        },
        mounted(){
            this.navChange(this.activeNav)
        },
    }
</script>