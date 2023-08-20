<template>
    <div class="detail" ref="detailRef">
        <div class="detail-tabs">
            <van-tabs v-if="showTab" :active="tabActive" @click-tab="tabClick" color="#ff9854">
                <van-tab title="房屋设施"></van-tab>
                <van-tab title="房东介绍"></van-tab>
                <van-tab title="位置"></van-tab>
                <van-tab title="评论"></van-tab>
            </van-tabs>
        </div>
        <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="onClickLeft" />
        <!-- 这里可以加个v-if,判断mainPart是否有值,后续就无需判断了 -->
        <div v-if="mainPart">
            <detail-swipe :swipeData="mainPart.topModule.housePicture.housePics"></detail-swipe>

            <detail-info :detailInfos="mainPart.topModule"></detail-info>

            <detail-section title="房屋设施" footer="查看全部设施">
                <detail-facility :ref="getRef"
                    :houseFacility="mainPart.dynamicModule.facilityModule.houseFacility"></detail-facility>
            </detail-section>

            <detail-section title="房东介绍" footer="查看房东主页">
                <detail-landlord :ref="getRef" :landlordModule="mainPart.dynamicModule.landlordModule"></detail-landlord>
            </detail-section>

            <detail-section title="位置" footer="查看更多周边信息">
                <detail-map :ref="getRef" :positionModule="mainPart.dynamicModule.positionModule"></detail-map>
            </detail-section>

            <detail-section title="评论" footer="查看更多评论">
                <detail-comment :ref="getRef" :commentModule="mainPart.dynamicModule.commentModule"></detail-comment>
            </detail-section>
        </div>

        <br><br><br>
        <br><br><br>
        <br><br><br>
        <br><br><br>
        <br><br><br>
        <br><br><br>
        <br><br><br>
        <br><br><br>

    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import useDetailStore from "../../stores/modules/detail"
import DetailSwipe from "./components/detail-swipe.vue"
import DetailInfo from "./components/detail-info.vue"
import DetailSection from "../../components/detail-section/detail-section.vue"
import DetailFacility from "./components/detail-facility.vue"
import DetailLandlord from "./components/detail-landlord.vue";
import DetailMap from "./components/detail-map.vue"
import DetailComment from "./components/detail-comment.vue"
import { useScrollListen } from "../../hooks/useScrollListen";


const route = useRoute()
const DetailStore = useDetailStore()
DetailStore.houseId = route.params.id
DetailStore.fetchDetailAction()
const { detailData } = storeToRefs(DetailStore)

// 从detailData中获取数据
const mainPart = computed(() => {
    return detailData.value.mainPart
})
const onClickLeft = () => history.back();

//滚动,监听detail的滚动
const detailRef=ref()
const { clientHeight, scrollHeight, scrollTop } = useScrollListen(detailRef)
const showTab = computed(() => {
    return scrollTop.value > 350
})

const getRefArr = []
const getRef = (value) =>{
    if (value) {
        getRefArr.push(value.$el)
    }
}
// 点击detail-tabs跳转到对应的位置
const tabClick = ({ name }) => {
    detailRef.value.scrollTo({
        top: getRefArr[name].offsetTop - 100,
        behavior: "smooth"
    })
}
// 根据滚动的位置进行detail-tabs切换
const tabActive = computed(()=>{
    let index=-1
    for(const item of getRefArr){
        if(scrollTop.value>(item.offsetTop-110)){
            index+=1
        }
    }
    return index
})
</script>

<style scoped>
.detail {
    --van-nav-bar-text-color: #ff9854;
    --van-nav-bar-icon-color: #ff9854;
    --van-nav-bar-title-text-color: #ff9854;
    /* 设置为detail滚动 */
    height: 100vh;
    overflow-y: auto;
}

.detail-tabs {
    position: fixed;
    /*设置显示层级 */
    background-color: #fff;
    z-index: 20;
    left: 0;
    right: 0;
    top: 0;
}
</style>