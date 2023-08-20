<template>
    <div class="city">
        <!-- top类在滚动中不动 -->
        <div class="top">
            <!-- 搜索框功能 -->
            <div class="search">
                <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action>
                    <template #action>
                        <div @click="onClickButton">取消</div>
                    </template>
                </van-search>
            </div>

            <!-- tab导航功能 -->
            <div class="tab">
                <van-tabs v-model:active="tabActive" color="#ff9854">
                    <!-- <van-tab :title="allCity?.cityGroup?.title"></van-tab> -->
                    <!-- 用?.做判断,有则使用 -->
                    <!-- <van-tab :title="allCity?.cityGroupOverSea?.title"></van-tab>  -->

                    <template v-for="(value, key, index) in allCity" :key="index">
                        <van-tab :title="value.title" :name="key"></van-tab>
                        <!-- :name="key"将v-for遍历时tab-active绑定的改为key -->
                    </template>
                </van-tabs>
            </div>
        </div>


        <div class="content">
            <template v-for="(item, value, index) in allCity" :key="index">
                <!-- 热门city -->

                <div class="hotCitiesTitle">热门</div>
                <div class="hotCities">
                    <template v-for="(item, index) in currentGroup?.hotCities" :key="index">
                        <div class="hotCitiesItem" @click="cityClick(item)">{{ item.cityName }}</div>
                    </template>
                </div>
                <!-- 一般city -->

                <div class="cities">
                    <van-index-bar :index-list="indexList" >
                        <template v-for="(item, index) in currentGroup?.cities" :key="index">

                            <van-index-anchor :index="item.group" >
                            </van-index-anchor>

                            <template v-for="(iten, indey) in item.cities" :key="indey">
                                <van-cell :title="iten.cityName" @click="cityClick(iten)" ></van-cell>
                            </template>
                        </template>
                    </van-index-bar>
                </div>

            </template>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from "vue"
import { useRouter } from "vue-router";
import useCityStore from "../../stores/modules/city"
import { storeToRefs } from "pinia"

const router = useRouter()

// 搜索框功能
const searchValue = ref("")
const onClickButton = () => {
    router.back()
}

// tab导航功能
const tabActive = ref("")

// 城市选择

// 从store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCityAction()
const { allCity } = storeToRefs(cityStore)



// 获取当前选中的数据

// 对象获取数据无法使用index,为此,将遍历时tabActive绑定的数据改为key,通过object.key获取
// const currentGroup=allCity.value[tabActive.value]
// 因为allCity和tabActive都是ref，会导致currentGroup不是响应式的
const currentGroup = computed(() => allCity.value[tabActive.value])
// 使用computed组件,在allCity和tabActive改变时重新计算,实现响应式
const indexList=computed(()=>{
    return currentGroup?.cities?.map(item=>item.group)
})

const cityClick=(item)=>{
    
    cityStore.currentCity=item
    router.back()
}
</script>

<style scoped>
/* 实现top类在滚动中固定,方法一,top设置positon,但缺点是会遮挡页面 */
/* .top {
    /* position用于固定 */
/* position: fixed; */
/* top: 0; */
/* left: 0; */
/* right: 0; */
/* } */

/* 方法二,给content设置高度 */
.content {
    /* 100vh代表100%的视图高度 */
    /* 98px 是top的高度 */
    height: calc(100vh - 98px);
    overflow-y: auto;
}
.hotCitiesTitle{
    height: 32px;
    line-height: 32px;
    padding-left: 16px;
}
.hotCities{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 10px;
    padding-right :10px;
}


.hotCitiesItem{
    width: 70px;
    height: 28px;
    background-color:#fff4ec;
    margin: 6px;
    border-radius: 20px;
    text-align: center;
    /* 上下居中用line-high */
    line-height: 28px;
    font-size: 12px
}
</style>