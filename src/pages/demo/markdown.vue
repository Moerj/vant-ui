<style lang="scss" scoped>
    .doc{
        min-width: 1450px;
        max-width: 1600px;
        margin: 0 auto;
        background-color: #fff;
        position: relative;
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
        height: 100vh;
        border-right: 1px solid #f1f4f8;
        display: flex;
        flex-direction: column;
        @mixin item(){
            margin: 0;
            display: block;
            color: #455a64;
            padding: 10px 20px 10px 40px;
            line-height: 24px;
            transition: all .3s;
            
        }
        .nav-title{
            @include item;
            font-size: 16px;
            font-weight: bold;
            margin-top: 20px;
        }
        a{
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
        padding-left: 20px;
        @keyframes rotate {
            0%{
                transform: rotateZ(0);
            }
            100%{
                transform: rotateZ(360deg);
            }
        }
        .logo{
            animation: rotate 5s infinite;
        }
    }
    .markdown{
        padding: 15px 40px;
    }
</style>
<template>
    <div class="doc flex-1 flex">
        <!-- nav -->
        <div class="nav-item">
            <div class="topbar">
                <span class="flex col-center">
                    <img class="logo" src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" width="24">
                    <span class="f22 ml10">Vant-UI
                        <span class="f14 opacity-06 ml5">v{{version}}</span>
                    </span>
                </span>
            </div>
            <div class="flex-1 scroll-y pb50">
                <span class="nav-title">框架基础</span>
                <a href="https://youzan.github.io/vant/1.x/#/zh-CN/intro" target="_blank">
                    <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" width="16">
                    Vant官方库
                </a>
                <a @click="navChange('/demo')" :class="{active:isActiveNav('readme')}">
                    介绍
                </a>
                <a @click="navChange('/demo-style')" :class="{active:isActiveNav('style')}">
                    样式
                </a>
                <span class="nav-title">扩展组件</span>
                <a v-for="(item,index) in routerList" v-if="item.name" :class="{active:isActiveNav(item.path)}" @click="navChange(item.path)">
                    {{item.path.replace('/demo','').replace('-','')}}
                    <span class="f13 opacity-06">{{item.name}}</span>
                </a>
            </div>
        </div>

        <!-- markdown -->
        <div class="markdown flex-1">
            <iframe v-if="markdownSrc" :src="markdownSrc" frameborder="0" style="width:100%;height:100%"></iframe>
        </div>

        <!-- demo -->
        <iframe :src="demoSrc" frameborder="0" class="doc-simulator"></iframe>
    </div>
</template>
<script>
    import ROUTER_LIST from './router'
    import PACKAGE from '@/vant-ui/package.json'
    
    export default {
        data(){
            return {
                host: location.origin + location.pathname,
                demoSrc: '',
                routerList: ROUTER_LIST,
                pageName: this.$route.query.nav || '',
                version: PACKAGE.version
            }
        },
        methods:{
            navChange(path){
                this.pageName =  path.replace('/demo','').replace('-','') || 'readme'  //当前菜单名称

                if (this.pageName === 'readme') {
                    this.demoSrc = `${this.host}#/demo`
                }else{
                    this.demoSrc = `${this.host}#/demo-${this.pageName}` //获取demo地址
                }

                // 记录当前激活的菜单
                this.$router.push({
                    query:{
                        nav:this.pageName
                    }
                })
            },
            isActiveNav(path){
                return path.indexOf(this.pageName)>=0
            }
        },
        computed:{
            markdownSrc(){
                if (this.pageName === 'readme') {
                    return `${this.host}md2html/readme.md.html`
                }else if (this.pageName === 'style') {
                    return `${this.host}md2html/style.md.html`
                }
                return `${this.host}md2html/ui-${this.pageName}.md.html`
            }
        },
        mounted(){
            this.navChange(this.pageName)
        },
    }
</script>