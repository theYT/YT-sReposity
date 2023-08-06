<template>
    <!-- 使用vant开发 -->
    <div class="tab-bar">
        <van-tabbar route v-model="currentIndex" active-color="#ff9854" inactive-color="#333">
            <template v-for="(item, index) in tabBarData" :key="index">
                <van-tabbar-item :to=item.path >
                    <span>{{ item.text }}</span>
                    <template #icon>
                        <img v-if="index !== currentIndex" :src="getAssetImgURL(item.img)" alt="">
                        <img v-else :src="getAssetImgURL(item.imgActive)" alt="">
                    </template>
                </van-tabbar-item>
            </template>
        </van-tabbar>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import tabBarData from "../../assets//data/tab-bar"
import getAssetImgURL from "../../utils/get-asset-imgURL"

const currentIndex = ref(0)
</script>

<style scoped>
    .tab-bar img{
        height: 25px;
        width: 30px; 
    }
</style>