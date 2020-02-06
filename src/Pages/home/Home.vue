<template>
    <div>
        <div>Home</div>
        <router-link id="link" to="/list">ToList</router-link>
        <div id="box"></div>
    </div>
</template>

<script>
    export default {
        name: "Home"
    }
</script>

<style scoped>
    #box{
        width: 10rem;
        height: 5rem;
        background-color: skyblue;
    }
</style>
