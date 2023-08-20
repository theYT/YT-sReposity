<template>
    <div class="favor-myfavor">
        <van-tabs v-model:active="tabActive" color="#ff9854">
            <van-tab title="房屋">
                <div class="content">
                    <template v-for="(item,index) in favorHouse?.data?.items" :key="index">
                        <favor-item :item="item"></favor-item>
                    </template>
                </div>
            </van-tab>
            <van-tab title="房东">
                <div class="content">
                    
                </div>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import useFavorStore from "../../../stores/modules/favor";
import FavorItem from "./favor-item.vue";

const tabActive=ref(0)
const FavorStore = useFavorStore()
FavorStore.fetchFavorHouseAction()
const { favorHouse } = storeToRefs(FavorStore)
</script>

<style scoped>
.content {
    /* 100vh代表100%的视图高度 */
    /* 98px 是top的高度 */
    height: calc(100vh - 98px);
    overflow-y: auto;
}

</style>