<template>
    <div class="favor-nav-bar">
        <van-nav-bar left-text="旅途" left-arrow @click-left="leftClick">
            <template #title>
                <div class="navBar">
                    <template v-for=" (item, index) in title" :key="index">
                        <div class="navBarItem" :class="{ active: navBarActiveItem === index }" @click="navBarItemClick(index)">
                            {{ item }}
                        </div>
                    </template>
                </div>
            </template>
            <template #right>
                <van-icon name="ellipsis" size="18" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import useFavorStore from '../../../stores/modules/favor'
const title = ["我的收藏", "浏览历史"]


// 左侧按钮返回功能
const router = useRouter()
const leftClick = () => {
    router.back()
}

// 中间按钮切换
const FavorStore = useFavorStore()
const { navBarActiveItem } = storeToRefs(FavorStore)
const navBarItemClick = (index) => {
    navBarActiveItem.value = index
}
</script>

<style scoped>
.favor-nav-bar {
    --van-nav-bar-text-color: #ff9854;
    --van-nav-bar-icon-color: #ff9854;
}

.favor-nav-bar .navBar {
    display: flex;
}

.favor-nav-bar .navBar .navBarItem {
    flex: 1;
    padding: 2px 5px;
    border: 1px solid #ff9854;
    font-weight: normal;
    color: #ff9854;
}

.active {
    background-color: #ff9854;
    color: #fff !important;
}
</style>