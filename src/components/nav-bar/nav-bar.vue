<template>
    <div class="nav-bar">
        <van-nav-bar left-text="旅途" left-arrow :title="title" @click-left="leftClick">
            <template #right>
                <van-icon name="ellipsis" size="18" />
            </template>
        </van-nav-bar>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props=defineProps({
    title:{
        type:String,
        default:" "
    }
})

// 左侧按钮返回功能
const router = useRouter()
const leftClick = () => {
    router.back()
}
</script>

<style scoped>
.nav-bar {
    --van-nav-bar-text-color: #ff9854;
    --van-nav-bar-icon-color: #ff9854;
    --van-nav-bar-title-text-color:#ff9854;
}
</style>