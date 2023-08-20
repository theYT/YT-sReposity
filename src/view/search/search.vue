<template>
    <div class="search">
        <div>search搜索界面</div> 
        <div>
            {{ startDay }}
        </div>
        <div>
            {{ endDay }}
        </div><div>
            {{ currentCity }}
        </div>
        
    </div>
</template>

<script setup>
    import useHomeStore from '../../stores/modules/home';
    import useCityStore from '../../stores/modules/city';
    import {storeToRefs} from 'pinia'

    const HomeStores=useHomeStore()
    const { startDay,endDay } =storeToRefs(HomeStores)

    const CityStore=useCityStore()
    const {currentCity}=storeToRefs(CityStore)
</script>

<style scoped>
</style>