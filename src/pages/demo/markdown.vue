<style lang="scss" scoped>
    .doc{
        min-width: 1280px;
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
            position: relative;
            &:hover{
                color:dodgerblue;
            }
            &.active{
                color:#4caf50;
            }

            >.tag{
                position: absolute;
                right: 2px;
                top: 2px;
            }
        }
    }
    .topbar{
        height: 60px;
        border-bottom: 1px solid #f1f4f8;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
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
            width: 24px;
        }
    }
    .markdown{
        padding: 15px 40px;
        >iframe{
            width: 100%;
            height: 100%;
        }
    }

    .mark-github{
        position: absolute;
        right: 20px;
        top: 20px;
    }

    // 小屏幕视频
    @media screen and (max-width: 1280px) {
        .markdown{
            padding-right: 5px;
            padding-left: 5px;
        }
        .nav-item a, .nav-title{
            padding-left: 20px !important;
        }
        .doc-simulator{
            margin-right: 0;
            width: 320px;
        }
    }
</style>
<template>
    <div class="doc flex-1 flex">
        <a href="https://github.com/Moerj/vant-ui" target="_blank" class="mark-github">
            <svg  height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>

        <!-- nav -->
        <div class="nav-item">
            <div class="topbar">
                <span class="flex col-center">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGAGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgeG1wOkNyZWF0ZURhdGU9IjIwMTktMDYtMDVUMTU6MTA6NDcrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDE5LTA2LTA1VDE1OjEzOjQ3KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA2LTA1VDE1OjEzOjQ3KzA4OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjEwNTk5NDY3LWM5YzctNGQwZS1iZGY2LTIwM2ZiYmI0NjE3ZCIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjg5NjMyODNlLWMzNWQtOGM0Ny1hMDg4LWEyMWIxMDc1NjlhMSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjRlZjBhOGI3LWIwNjItNDc1NC04OWE4LWQwODg5NDBlYWIzMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NGVmMGE4YjctYjA2Mi00NzU0LTg5YTgtZDA4ODk0MGVhYjMzIiBzdEV2dDp3aGVuPSIyMDE5LTA2LTA1VDE1OjEwOjQ3KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MTA1OTk0NjctYzljNy00ZDBlLWJkZjYtMjAzZmJiYjQ2MTdkIiBzdEV2dDp3aGVuPSIyMDE5LTA2LTA1VDE1OjEzOjQ3KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoTWFjaW50b3NoKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Z3FvvAAAKcElEQVRoga2ZaYxl11HHf1XnLm/pnp6lx9Mz03jCEk8SJ+AkJkTO4qBI/mCwIUqQwpIFRXyABMiXIMsI4SCSCIGQCEq+RiwKEooiYSuK8gEJsBQJBSOhZKyIBBkHe2yPe7r7db/t3ntOFR/e9My8nl7e63ZJ78O979w69a+qU9sRd2eHHrvvu4yGW2RtZdxLdJYKRls13ZMFw+2GhdMF40GDoJgZ6orkTqx88s1WorOUMd5OtBbC3Vu94Z/FJn1GRF5g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" 
                    class="logo">
                    <span class="f22 ml10">Vant-UI
                        <span class="f14 opacity-06 ml5">v{{version}}</span>
                    </span>
                </span>
            </div>
            <div class="flex-1 scroll-y pb50">
                <span class="nav-title">框架基础</span>
                <a href="https://youzan.github.io/vant/#/zh-CN/intro" target="_blank">
                    <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" width="16" class="mid">
                    Vant官方库
                </a>
                <a @click="navChange('/demo')" :class="{active:isActiveNav('readme')}">
                    介绍
                </a>
                <a @click="navChange('/demo-style')" :class="{active:isActiveNav('style')}">
                    样式
                </a>
                
                <span class="nav-title">扩展组件</span>
                <a  v-for="(item,index) in routerList" 
                    v-if="item.name" 
                    :class="{active:isActiveNav(item.path)}" 
                    :style="{'text-decoration':(item.meta&&item.meta.disused)?'line-through':''}"
                    @click="navChange(item.path)">

                    {{item.path.replace('/demo','').replace('-','')}}
                    <span class="f13 opacity-06">{{item.name}}</span>
                </a>
            </div>
        </div>

        <!-- markdown -->
        <div class="markdown flex-1">
            <iframe v-if="markdownSrc" :src="markdownSrc" frameborder="0"></iframe>
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
        created(){
            if (window.innerWidth<800) {
                this.$router.replace('/demo')
            }
        },
    }
</script>