<template>
    <div class="create-meal">
        <header class="header">
            <h1>Create a meal</h1>
            <button>
                Add a meal
            </button>            
        </header> 
        <main class="content">
            <form class="form" @submit.prevent="saveMeal">
                <div class="input-item">
                    <input 
                        v-model="selectedFood.title" 
                        type="text" 
                        placeholder="choose food.." 
                        @click="openList"
                    >
                    <ul 
                        v-if="isListOpen" 
                        class="food-list"
                    >
                        <li v-if="loading">
                            Loading ...
                        </li>
                        <li 
                            v-for="food in foodList"
                            :key="food.id"
                            @click="selectFood(food)"
                        >
                            {{ food.title }}
                        </li>
                    </ul>
                </div>
                <div class="input-item">
                    <input 
                        v-model="weight" 
                        type="text" 
                        placeholder="choose weight.."
                    >
                </div>
                <div class="input-item">
                    <input type="submit" value="Add">
                </div>
            </form>
        </main>    
    </div>
</template>

<script>

export default {
    name: 'CreateMeal', 
    data() {
        return {
            isListOpen: false,
            selectedFood: '',
            weight: ''
        }
    },
    computed: {
        loading() {
            return this.$store.getters.getProcessing
        },
        foodList() {
            return this.$store.getters.foodList
        }
    },
    methods: {
        openList () {
            this.isListOpen = !this.isListOpen;
            this.$store.dispatch('getFoodList')
        },
        selectFood(food) {
            this.selectedFood = food;
            this.isListOpen = false;
        },
        saveMeal() {
            this.$store.dispatch('createMeal', {
                selectedFood: this.selectedFood, 
                weight: this.weight
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.create-meal {
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
    color: $black;  
    @media (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
    }    
    @media (max-width: 768px) {
        flex-direction: column;
    } 
}
.form {
    display: flex;
    justify-content: center;   
    align-content: center; 
    .input-item {
        position: relative;
    }
    input {
        height: 28px;
        margin-right: 8px;
        width: 200px;
    }
    .food-list {
        position: absolute;
        left: 0;
        top: 28px;
        background-color: #fff;
        border: 1px solid green;
        height: 200px;
        width: 200px;
        li {
            //margin-bottom: 8px;
            padding: 8px;
            cursor: pointer;
            &:hover {
                background-color: rgb(217, 228, 217);
            }
        }
    }
}
</style>