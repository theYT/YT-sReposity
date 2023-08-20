<template>
  <div class="app">

    <!-- 将首页设置为keep-alive -->
    <!-- 切换主页不会发送重复请求 -->
    <router-view v-slot="{ Component }">
      <keep-alive include="home">
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <!-- <keep-alive include="home">
      <router-view></router-view>
    </keep-alive> -->
    <!-- 如果当前页面的meta的hideTabBar为ture,隐藏tab-bar -->
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>


  </div>
</template>

<script setup>
import TabBar from "./components/tab-bar/tab-bar.vue"
import { useRoute } from "vue-router";
const route = useRoute()
    // 获取当前界面的router
</script>

<style scoped></style>
