<template>
    <div class="profile-page">
        <h1>Profile</h1>
        <p>user_id: {{ userId }}</p>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    computed: {
        userId() {
            return this.$store.getters.userId
        }
    }

}
</script>

<style lang="scss" scoped>

.profile-page {
    padding: 64px;
}
</style>