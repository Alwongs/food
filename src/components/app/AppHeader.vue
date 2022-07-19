<template>
    <header class="app-header">
        <div class="logo-block" @click="goTo('home')">
            HOME
        </div>
        <div class="btn-block">
            <button 
                v-if="isUserAuthenticated" 
                @click="goTo('food-page')"
            >
                FoodList
            </button>

            <button 
                v-if="isUserAuthenticated" 
                @click="goTo('create-meal')"
            >
                CreateMeal
            </button>

            <button 
                v-if="isUserAuthenticated" 
                @click="goTo('profile-page')"
            >
                Profile
            </button>

            <button 
                v-if="!isUserAuthenticated" 
                @click="goTo('login')"
            >
                Login
            </button>

            <button 
                v-if="!isUserAuthenticated" 
                @click="goTo('register')"
            >
                Register
            </button>

            <button 
                v-if="isUserAuthenticated" 
                @click="logoutHandler"
            >
                Logout
            </button>
        </div>
    </header>  
</template>

<script>
export default {
    name: 'AppHeader',
    computed: {
        isUserAuthenticated() {
            return this.$store.getters.isUserAuthenticated;
        }
    },   
    methods: {
        goTo(name) {
            this.$router.push({name})
        },
        logoutHandler() {
            this.$store.dispatch('logout');
            this.$router.push('/');
        }
    }
}
</script>

<style lang="scss" scoped>

.app-header {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: rgb(101, 149, 150);
    height: 64px;
    display: flex;
    justify-content: space-between;
    line-height: 64px;
    padding: 0 64px;
}
.logo-block {
    color: white;
    font-size: 24px;
    cursor: pointer;
}
button {
    height: 48px;
    width: 90px;
    margin: 0 4px;
}
</style>