<template>
    <div class="list-section">             
        <ul class="food-list">
            <food-item 
                v-for="food in foodList"
                :key="food.id" 
                :food="food"             
            />
        </ul>       
    </div>  
</template>

<script>
import FoodItem from '@/components/food/FoodItem.vue'

export default {
    name: 'Food', 
    props: ['foodList'],
    components: { FoodItem }  
}
</script>

<style lang="scss" scoped>
.food-list {
    flex: 1 1 auto; 
    &.test-data {
        margin-top: 128px;
    }
}
.list-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    flex: 1 0 450px;    
    border-radius: 5px;
    padding: 16px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        flex: 1 1 300px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-right: 0; 
        margin-bottom: 8px;
        width: 100%;
    }
    @media (max-width: 768px) {      
        margin-bottom: 8px;        
        width: 100%;
    }
}
button {
    background-color: rgb(65, 108, 172);
    width: 100px;
    height: 32px;
    border-radius: 4px;
    color: white;
    align-self: start;
}


.pagination {
    flex: 0 0 200px; 
    align-self: center;
}
</style>