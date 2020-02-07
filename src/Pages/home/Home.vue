<template>
    <div>
        <HomeHeader/>
        <HomeSwiper/>
        <IConView/>
    </div>
</template>

<script>
    import HomeHeader from "./components/HomeHeader";
    import HomeSwiper from "./components/HomeSwiper";
    import IConView from "./components/IConView";
    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSwiper,
            IConView
        }
    }
</script>

<style scoped>

</style>
