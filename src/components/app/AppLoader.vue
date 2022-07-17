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
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 100px;
    box-shadow: 1px 1px 3px 3px grey;
    border-radius: 10px;
    background-color: #fff;
}
</style>