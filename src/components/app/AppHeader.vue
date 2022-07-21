<template>
    <header class="header">
        <h1>{{ titleText }}</h1>
        <button @click="clickEvent">
            {{ btnText }}
        </button>            
    </header>
</template>

<script>

export default {
    name: 'AppHeader',
    props: ['btnText', 'titleText'],
    methods: {
        clickEvent() {
            this.$emit('clickEvent')
        }
    }
}
</script>

<style lang="scss" scoped>

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
</style>