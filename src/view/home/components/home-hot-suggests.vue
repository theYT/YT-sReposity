<template>
    <div class="hot-suggest">
        <template v-for=" (item,index) in allHotSuggests" :key="index">
            <div class="hotSuggestsItem"
            :style="{color:item.tagText.color,background:item.tagText.background.color}"
            >{{item.tagText.text}}</div>
        </template>
    </div>
</template>

<script setup>
    import  useHomeStore from "../../../stores/modules/home"
    import { storeToRefs } from "pinia"


    // 发送网络请求
    // 热门建议allHotSuggests
    const HomeStore = useHomeStore()
    HomeStore.fetchHotSuggestsAction()
    const { allHotSuggests } = storeToRefs(HomeStore)

</script>

<style scoped>
.hot-suggest{
    display: flex;
    height: 100px;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 0px 20px;
    margin-top: 12px;
   
}

.hotSuggestsItem{
    height: 15px;
    font-size: 14px;
    padding: 5px;
    margin-right: 5px;
    border-radius: 36px;
}
</style>