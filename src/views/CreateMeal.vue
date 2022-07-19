<template>
    <div class="create-meal">
        <header class="header">
            <h1>Create a meal</h1>
            <button>
                Add a meal
            </button>            
        </header> 
        <main class="content">
            <div class="input-block">
                <div class="input-item">
                    <input type="text" placeholder="choose food.." @click="openList">
                    <div v-if="isListOpen" class="food-list"></div>
                </div>

                <div class="input-item">
                    <input type="text" placeholder="choose weight..">
                </div>
                <div class="input-item">
                    <input type="submit" value="Add">
                </div>
            </div>
        </main>    
    </div>
</template>

<script>

export default {
    name: 'CreateMeal', 
    data() {
        return {
            isListOpen: false
        }
    },
    methods: {
        openList () {
            this.isListOpen = !this.isListOpen
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
.input-block {
    background-color: rgb(247, 205, 205);
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
        height: 100px;
        width: 200px;
    }
}
</style>