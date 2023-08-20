<template>
    <div class="search-btn">
        <div class="search-item" @click="searchBtnClick">开始搜索</div>
    </div>
</template>

<script setup>

    import router from '../../../router';

    // 监听搜索按钮的点击
    const searchBtnClick=()=>{
        router.push("/search")
    }
</script>

<style scoped>
    .search-item{
        height: 44.8px;
        background-color: #ff9854;
        margin: 14px 20px;
        border-radius: 314px;
        font-size: 17px;
        color: #ffffff;
        line-height: 44.8px;
        text-align: center;
    }
</style>