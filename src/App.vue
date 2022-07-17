<template>
    <app-header />
    <main class="app-main">
        <router-view/>
    </main>
</template>

<script>
import AppHeader from '@/components/app/AppHeader.vue'

export default {
    name: 'App',
    components: { AppHeader }
}
</script>

<style lang="scss">

.app-main {
    height: 100%;
    padding-top: 64px;
}
</style>
