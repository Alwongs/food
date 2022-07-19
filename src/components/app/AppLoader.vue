<template>
    <div class="loading">
        <h4>Loading ...</h4>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.loading {
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    width: 200px;
    height: 100px;
    box-shadow: 2px 2px 5px 3px rgba(0, 0, 0, 0.32);
    border-radius: 50px;
    background-color: #fff;
    text-align: center;
    line-height: 100px;
}
</style>