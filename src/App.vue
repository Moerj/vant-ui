<template>
    <div id="app" class="h-100 flex-column">
        <div class="flex-1 relative">
            <transition name="fade">
                <router-view/>
            </transition>
        </div>
        <bottombar></bottombar>
    </div>
</template>

<script>
    import bottombar from '@/pages/bottombar'
    
    export default {
        name: 'App',
        components:{
            bottombar
        },
    }
</script>
