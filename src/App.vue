<template>
    <div id="app" class="h-100">
        <transition name="fade">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'App',
    }
</script>
