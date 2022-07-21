<template>
    <app-panel />
    <main class="app-main">
        <router-view/>
    </main>
</template>

<script>
import AppPanel from '@/components/app/AppPanel.vue'

export default {
    name: 'App',
    components: { AppPanel }
}
</script>

<style lang="scss">

.app-main {
    height: 100%;
    padding-top: 64px;
}
</style>
