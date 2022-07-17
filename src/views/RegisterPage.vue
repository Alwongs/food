<template>
    <div class="login-page">
        <h1>Register</h1>

        <form action="#" @submit.prevent="registerHandler">
            <input v-model="data.email" type="text" placeholder="login"><br>
            <input v-model="data.password" type="text" placeholder="password"><br>
            <input type="submit" value="save"><br>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            data: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        registerHandler() {
            this.$store.dispatch('register', this.data)
        }
    }
}
</script>

<style lang="scss" scoped>

.login-page {
    padding: 64px;
}
</style>