<template>
    <div class="food-page">
        <header class="header">
            <h1>Продукты</h1>
            <button 
                class="submit" 
                @click="openCreateFood"
            >
                Создать
            </button>            
        </header> 
        <main class="content">
            <app-loader v-if="loading"/>
            <food-list :foodList="foodList"/>
            <create-food v-if="isCreateFoodOpen"/>
        </main>    
    </div>
</template>

<script>
import FoodList from '../components/food/FoodList.vue'
import CreateFood from '../components/food/CreateFood.vue'
import AppLoader from '../components/app/AppLoader.vue'

export default {
    name: 'FoodPage', 
    components: { 
        AppLoader,
        FoodList, 
        CreateFood
    },  
    computed: {
        foodList() {
            return this.$store.getters.foodList;
        },
        loading() {
            return this.$store.getters.getProcessing;
        },
        isCreateFoodOpen() {
            return this.$store.getters.isCreateFoodOpen;
        }
    },
    methods: {
        openCreateFood() {
            this.$store.commit('OPEN_CREATE_FOOD', true);
        }
    },
    mounted() {
        this.$store.dispatch('getFoodList');
    }
}
</script>

<style lang="scss" scoped>
.food-page {
    min-height: 100%;
    width: 100%;
    padding: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        padding: 0px 32px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0px 32px;
    }      
    @media (max-width: 768px) {
        padding: 0px 16px;
    } 
}
.header {
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid rgba(223, 223, 223, 0.5);
    text-align: start;
    padding: 10px;
    margin-bottom: 36px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        margin-bottom: 16px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-bottom: 16px;
    }      
    @media (max-width: 768px) {
        margin-bottom: 16px;
    } 
}
.content {
    position: relative;
    display: flex;
    color: $black;  
    min-height: 100%;
    @media (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
    }    
    @media (max-width: 768px) {
        flex-direction: column;
    } 
}
h1 {
    color: $black;
    font-weight: 500;
}
button {
    background-color: rgb(98, 162, 98);
    box-shadow: 1px 1px 2px 1px rgba(98, 162, 98, 0.504);
    margin: 0 4px;
    height: 48px;
    width: 80px;
    border-radius: 5px;
    border: none;
    color: white;
    &:hover {
        background-color: rgb(134, 215, 150);           
    }              
}

</style>