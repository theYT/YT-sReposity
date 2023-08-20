<template>
    <div class="categories">

        <template v-for="(item, index) in categories" :key="index">
            <div class="categories-item">
                <img :src="item.pictureUrl" alt="">
                <div class="title">{{ item.title }}</div>
            </div>
        </template>

    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import useHomeStore from '../../../stores/modules/home';

const homeStore = useHomeStore()
homeStore.fetchCategoriesAction()
const { categories } = storeToRefs(homeStore)
</script>

<style scoped>
.categories {
    display: flex;
    overflow-x: auto;
    margin-top: 20px;
    margin-left:10px;
}
.categories-item{
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 72px;
    flex-direction: column;
}
.categories::-webkit-scrollbar {
  display: none;
}
.categories-item .title{
    font-size: 14px;
}

.categories-item img {
    width: 32px;
    height: 32px;
    
}
</style>