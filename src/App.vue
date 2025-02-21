<template>
    <div id="app" class="h-100 flex-column">
        <div class="flex-1 relative">
            <router-view/>
        </div>
        <bottombar></bottombar>
    </div>
</template>

<script>
    import bottombar from '@/pages/rootMenu'
    export default {
        name: 'App',
        components:{
            bottombar
        },
        mounted(){
            if (window.innerWidth<800) {
                console.log('移动端访问模式');
                this.$router.replace('/demo')
            }else{
                console.log('PC端访问模式');
                this.$router.replace('/demo-markdown?nav=readme')
            } 
        },
    }
</script>
