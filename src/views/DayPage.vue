<template>
    <div class="day-page">
        <app-header 
            :titleText="$route.params.date"
            :btnText="'reserve'"
        />
        <main class="content">
            <app-loader v-if="loading" />

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
.day-page {
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

</style>