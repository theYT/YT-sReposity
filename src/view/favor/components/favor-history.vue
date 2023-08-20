<template>
    <div class="favor-history">
        <div class="content">
            <template v-for="(item,index) in historyHouse?.data?.items" :key="index">
                <favor-item :item="item"></favor-item>
            </template>  
        </div>
    </div>
</template>

<script setup>
    import { storeToRefs } from 'pinia';
    import useFavorStore from '../../../stores/modules/favor';
    import favorItem from './favor-item.vue';

    const FavorStore=useFavorStore()
    FavorStore.fetchHistoryHouseAction()
    const {historyHouse}=storeToRefs(FavorStore)
</script>

<style scoped>
    .content{
        height: calc(100vh - 46px);
        overflow-y: auto;
    }
</style>