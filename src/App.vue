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
        }
    }
</script>
