<style lang="scss" scoped>
    .doc{
        height: 100vh;
        display: flex;
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
        padding: 50px 0;
        &> a{
            margin: 0;
            display: block;
            color: #455a64;
            padding: 10px 20px 10px 40px;
            line-height: 24px;
            transition: all .3s;
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
</style>
<template>
    <div class="doc">
        <!-- nav -->
        <div class="scroll-y nav-item mr15">
            <a v-for="(item,index) in routerList" v-if="item.name" :class="{active:activeNavIndex==index}" @click="navActive(item,index)">
                {{item.name}}
            </a>
        </div>

        <!-- demo -->
        <iframe :src="frameSrc" frameborder="0" class="doc-simulator"></iframe>

        <!-- markdown -->
        <div class="flex-1 p15">
            <iframe :src="markdownSrc" frameborder="0" style="width:100%;height:100%"></iframe>
        </div>

    </div>
</template>
<script>
    import routerList from './router'
    
    export default {
        data(){
            return {
                frameSrc: location.origin +'/#/demo',
                routerList:routerList,
                markdownSrc:'',
                activeNavIndex: sessionStorage.getItem('activeNavIndex')
            }
        },
        methods:{
            navActive(item,index){
                const host = location.origin + location.pathname
                const pageName =  item.path.replace('/demo-','')
                this.frameSrc = `${host}#${item.path}`
                // this.markdownSrc = '/md2html/ui-' + item.path.replace('/demo-','') + '.md.html'

                this.markdownSrc = `${host}/md2html/ui-${pageName}.md.html`
                this.activeNavIndex = index
                sessionStorage.setItem('activeNavIndex',index)
            }
        },
        mounted(){
            let i = this.activeNavIndex
            if (i) {
                this.navActive(this.routerList[i], i)
            }
        },
    }
</script>