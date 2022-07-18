<template>
    <div class="form-section">
        <div class="close-modal" @click="closeModal">(x)</div>

        <h2 v-if="!foodToUpdate">Создать продукт</h2>
        <h2 v-else>Обновить "{{ data.title }}"</h2>

        <form @submit.prevent="createFoodHandler">
            <div class="input-block title">
                <label for="">name</label>
                <input 
                    v-model="data.title" 
                    type="text" 
                    placeholder="Название"
                >
            </div>
            <div class="input-block energy">
                <label for="">enrgy</label>                
                <input 
                    v-model.number="data.energy" 
                    type="text" 
                    placeholder="Калорийность"
                >
            </div>
            <div class="input-block protein">
                <label for="">protein</label>                
                <input 
                    v-model.number="data.protein" 
                    type="text" 
                    placeholder="Белки"
                >
            </div>
            <div class="input-block fat">
                <label for="">fat</label>                
                <input 
                    v-model.number="data.fat" 
                    type="text" 
                    placeholder="Жиры"
                >
            </div>
            <div class="input-block carb">
                <label for="">carb</label>                
                <input 
                    v-model.number="data.carb" 
                    type="text" 
                    placeholder="Углеводы"
                >
            </div>
            <button v-if="foodToUpdate" class="submit">Обновить</button>
            <button v-if="!foodToUpdate" class="submit">Сохранить</button>
        </form>
    </div>  
</template>

<script>

export default {
    name: 'Food',
    data() {
        return {
            data: {}
        }
    },
    computed: {
        foodToUpdate() {
            return this.$store.getters.foodToUpdate;
        }
    },
    methods: {
        async createFoodHandler() {
            if(this.foodToUpdate) {
                await this.$store.dispatch('updateFood', this.data);
                this.$store.dispatch('getFoodList');
                this.$store.commit('OPEN_CREATE_FOOD', false);                 
            } else {
                await this.$store.dispatch('createFood', this.data);
            }
            this.data = {}
        },
        closeModal() {
            this.$store.commit('UPDATE_FOOD', null); 
            this.$store.commit('OPEN_CREATE_FOOD', false);             
        }
    },
    mounted() {
        if(this.foodToUpdate) {
            this.data = this.foodToUpdate;
        }
    }    
}
</script>

<style lang="scss" scoped>

.form-section {
    flex: 0 0 300px;
    background-color: rgb(78, 158, 123);
    box-shadow: 0px 1px 2px 1px rgba(3, 3, 3, 0.4);    
    border-radius: 5px;
    width: 300px;
    padding: 16px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        //flex: 0 0 200px;
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
.close-modal {
    font-size: 18px;
    color: white;
    text-align: right;
    cursor: pointer
}
h2 {
    color: $white;
    font-weight: 500;    
    font-size: 24px;
    margin-bottom: 64px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        font-size: 26px;
        margin-bottom: 32px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        font-size: 24px;
        margin-bottom: 32px;
    }      
    @media (max-width: 768px) {
        margin-bottom: 16px;
    } 
}
.input-block {
    margin-bottom: 16px;
    @media (min-width: 1024px) and (max-width: 1440px) {
        margin-bottom: 16px;
    }     
    @media (min-width: 768px) and (max-width: 1024px) {
        margin-bottom: 16px;
    }      
    @media (max-width: 768px) {
        margin-bottom: 16px;
    } 
    label {
        color: white;
        font-size: 12px;
    }
}
input {
    width: 100%;
    height: 32px;
    margin-right: 32px;

}
button {
    background-color: rgb(65, 108, 172);
    width: 100px;
    height: 32px;
    border-radius: 4px;
    color: white;
}
</style>