<template>
    <div class="login-page">
        <h1>Login</h1>

        <form action="#" @submit.prevent="loginHandler">
            <input v-model="data.email" type="text" placeholder="login"><br>
            <input v-model="data.password" type="text" placeholder="password"><br>
            <input type="submit" value="enter"><br>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            data: {
                email: 'test@test.test',
                password: '123456'
            }
        }
    },
    methods: {
        loginHandler() {
            this.$store.dispatch('login', this.data)
        }
    }
}
</script>

<style lang="scss" scoped>

.login-page {
    padding: 64px;
}
</style>