<template>
    <div class="favor">
        <favor-nav-bar></favor-nav-bar>
        <template v-if="navBarActiveItem===0">
            <favor-myfavor></favor-myfavor>
        </template>
        <template v-if="navBarActiveItem===1">
            <favor-history></favor-history>
        </template>
    </div>
</template>

<script setup>
    import FavorNavBar from "./components/favor-navbar.vue"
    import FavorMyfavor from "./components/favor-myfavor.vue";
    import FavorHistory from "./components/favor-history.vue";
    import useFavorStore from "../../stores/modules/favor";
    import { storeToRefs } from "pinia";

    const FavorStore=useFavorStore()
    const { navBarActiveItem }=storeToRefs(FavorStore)
</script>

<style scoped>
</style>