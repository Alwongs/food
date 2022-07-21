<template>
    <div class="history-page">
        <app-header 
            :titleText="'History'"
            :btnText="'reserve'"
        />
        <main class="content">
            <app-loader v-if="loading" />
            <ul v-else class="date-list">
                <li 
                    v-for="item in historyList" 
                    :key="item"
                    class="date-item"
                    @click="$router.push({name: 'day-page', params: { date: item.id }})"
                >
                    <span class="date">{{ item.id }}</span>
                    <span>energy: {{ getTotalEnergy(item.food) }} kKl</span>
                    <span>carb: {{ getTotalCarb(item.food) }} g</span>
                    <span>fat: {{ getTotalFat(item.food) }} g</span>
                    <span>fat: {{ getTotalProtein(item.food) }} g</span>                  
                </li>
            </ul>
        </main>    
    </div>
</template>

<script>
import AppHeader from '../components/app/AppHeader.vue';
import AppLoader from '../components/app/AppLoader.vue';

export default {
  components: { AppHeader, AppLoader },
    name: 'HistoryPage', 
    computed: {
        historyList() {
            return this.$store.getters.historyList;
        },
        foodList() {
            return this.$store.getters.foodList;
        },
        loading() {
            return this.$store.getters.getProcessing;
        },        
    },
    methods: {
        getTotalEnergy(food) {
            if (food) {
                let totalEnergy = 0;
                for (let foodId in food) {
                    let foodEnergy = this.foodList[foodId] ?  this.foodList[foodId].energy / 100 * food[foodId] : ''
                    totalEnergy = totalEnergy + foodEnergy;
                }
                return totalEnergy;
            }
        },
        getTotalCarb(food) {
            if(food) {
                let totalCarb = 0;
                for (let foodId in food) {
                    let foodCarb = this.foodList[foodId] ?  this.foodList[foodId].carb / 100 * food[foodId] : ''
                    totalCarb = totalCarb + foodCarb;
                }
                return totalCarb;
            }
        },
        getTotalFat(food) {
            if(food) {
                let totalFat = 0;
                for (let foodId in food) {
                    let foodFat = this.foodList[foodId] ?  this.foodList[foodId].fat / 100 * food[foodId] : ''
                    totalFat = totalFat + foodFat;
                }
                return totalFat;
            }
        },
        getTotalProtein(food) {
            if(food) {
                let totalProtein = 0;
                for (let foodId in food) {
                    let foodProtein = this.foodList[foodId] ?  this.foodList[foodId].protein / 100 * food[foodId] : ''
                    totalProtein = totalProtein + foodProtein;
                }
                return totalProtein;
            }
        },
        getTitle(id) {
            return this.foodList[id] ? this.foodList[id].title : ''
        }
    },
    async mounted() {
        await this.$store.dispatch('getHistoryList');
        await this.$store.dispatch('getFoodList');
    }
}
</script>

<style lang="scss" scoped>
.history-page {
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

.content {
    color: $black;  
    @media (min-width: 768px) and (max-width: 1024px) {
        flex-direction: column;
    }    
    @media (max-width: 768px) {
        flex-direction: column;
    } 
}
.date-item {
    background-color: rgb(176, 220, 235);
    border-radius: 5px;
    padding: 0 8px;
    height: 38px;
    line-height: 38px;
    margin-bottom: 16px;
}
.food-id-list {
    margin-bottom: 8px;
    display: flex;
    justify-content: space-between;
    //align-items: center;
}
span {
    margin-right: 32px;
    &.date {
        color: red;
    }
}
</style>