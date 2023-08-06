<template>
    <!-- 使用原生组件开发 -->
    <div class="tab-bar">
        <template v-for="(item, index) in tabBarData" :key="index">
            <div class="tab-bar-item" :class="{ active: index === currentIndex }" @click="tabBarItemClick(index)">
                <router-link :to=item.path>
                    <img v-if="index !== currentIndex" :src="getAssetImgURL(item.img)" alt="">
                    <img v-else :src="getAssetImgURL(item.imgActive)" alt="">

                    <div class="text">{{ item.text }}</div>
                </router-link>
            </div>
        </template>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import tabBarData from "../../assets//data/tab-bar"
import getAssetImgURL from "../../utils/get-asset-imgURL"

const currentIndex = ref(0)

function tabBarItemClick(index) {
    currentIndex.value = index
}
</script>

<style scoped>
@import "../../assets/css/tab-bar.css";
</style>
