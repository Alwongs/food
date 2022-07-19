<template>
    <li>
        <div class="food-item">
            <div class="item-image">
                <img :src="require('@/assets/img/png/food.png')" alt="">
            </div>
            <div class="item-title">
                {{ food.title }}
            </div> 
            <ul class="item-nutrients"> 
                <li>
                    <div class="key">
                        Белки:
                    </div>
                    <div class="value">
                        {{ food.protein }}г
                    </div>
                        
                </li>
                <li>
                    <div class="key">
                        Жиры:
                    </div>   
                    <div class="value">
                        {{ food.fat }}г
                    </div>                                                     
                </li>
                <li>
                    <div class="key">                            
                        Углеводы:
                    </div>   
                    <div class="value">
                        {{ food.carb }}г
                    </div>                                                     
                </li>
            </ul>                                                            
            <div class="item-energy"> 
                {{ food.energy }} кКал
            </div>                                       
            <div class="item-buttons"> 
                <button class="edit" @click="openEdit(food)">Edit</button>
                <button class="delete" @click="deleteHandler">Delete</button>
            </div>                                       
        </div>
    </li>  
</template>

<script>
export default {
    name: 'FoodItem',
    props: ['food'],
    computed: {
        isCreateFoodOpen() {
            return this.$store.getters.isCreateFoodOpen;
        }        
    },
    methods: {
        async deleteHandler() {
            await this.$store.dispatch('removeFood', this.food.id)
        },
        openEdit(food) {
            this.$store.commit('UPDATE_FOOD', food);                
            this.$store.commit('OPEN_CREATE_FOOD', true);
        }
    }
}
</script>

<style lang="scss" scoped>

.food-item {
    background-color: rgb(203, 243, 217);
    box-shadow: 1px 1px 4px 2px rgba(110, 129, 112, 0.504);
    border-radius: 10px;
    margin-bottom: 32px;
    padding: 4px 16px 4px 4px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    &:hover {
        background-color: rgb(201, 227, 241);
    }
}
.item-image{  

    flex: 0 0 50px;   
}
img {
    height: 54px;
}
.item-title {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    font-size: 24px;
    font-weight: 500;
    color: rgb(60, 77, 145);
transform: matrix(1.2, 0, -0.2, 1, 0, 0);
}
.item-nutrients {
    display: flex;
    flex-direction: column;
    justify-content: center;  
    flex: 0 0 120px;
    font-size: 14px;
    li {
        display: flex;  
        justify-content: flex-end;      
    }
    .value {
        flex: 0 0 32px;
    }
}
.item-energy {  
    display: flex;
    flex-direction: column;
    justify-content: center;       
}
.item-buttons {
    display: flex;
    align-items: center;   
}
button {
    box-shadow: 1px 1px 2px 1px rgba(110, 129, 112, 0.504);
    margin: 0 4px;
    height: 48px;
    width: 80px;
    border-radius: 5px;
    border: none;
    color: white;
    &.edit {
        background-color: rgb(50, 111, 161);
        &:hover {
            background-color: rgb(116, 185, 241);           
        }              
    }
    &.delete {
        background-color: rgb(183, 89, 89);
        &:hover {
            background-color: rgb(255, 179, 179);            
        }            
    }
} 
</style>