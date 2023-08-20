<template>
    <!-- home为keep-alive -->
    <div class="home" ref="homeRef">
        <home-nav-bar></home-nav-bar>
        <home-banner></home-banner>
        <home-location></home-location>
        <home-date></home-date>
        <home-hot-suggests></home-hot-suggests>
        <home-search-btn></home-search-btn>
        <home-categories></home-categories>
        <home-search-bar></home-search-bar>
        <!-- home-house-list 因为在滚动中要监听home的滚动,不能封装到组件中 -->
        <div class="home-house-list">
        <h2 class="title">热门精选</h2>
        <div class="list">
            <template v-for="(item, index) in houseList" :key="item.data.houseId">
                <!-- 监听组件的点击,会自动绑定到组件内部的根元素里 -->
                <home-type-3 @click="itemClick(item)" v-if="item.discoveryContentType === 3" :item-data="item.data"></home-type-3>
                <home-type-9 @click="itemClick(item)" v-else :item-data="item.data"></home-type-9>
            </template>
        </div>


        <!-- 加载页面 -->
        <div  v-show="isLoading" class="loading">
            <h2>
                <van-icon size="100" name="ellipsis" />
            </h2>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: "home"
}
</script>
<script setup>
import homeNavBar from "./components/home-nav-bar.vue"
import HomeBanner from "./components/home-banner.vue"
import HomeLocation from "./components/home-location.vue"
import HomeDate from "./components/home-date.vue"
import HomeHotSuggests from "./components/home-hot-suggests.vue"
import HomeSearchBtn from "./components/home-searchBtn.vue"
import HomeCategories from "./components/home-categories.vue"
import HomeSearchBar from "./components/home-search-bar.vue"
import HomeType3 from "../../components/home/home-type-3.vue"
import HomeType9 from "../../components/home/home-type-9.vue"

import router from '../../router';
import { watch,ref, onActivated } from "vue"
import  {useScrollListen} from "../../hooks/useScrollListen"
import  useHomeStore from "../../stores/modules/home"
import { storeToRefs } from "pinia"


const HomeStore = useHomeStore()
HomeStore.fetchHouseListAction()
const { houseList,isLoading } = storeToRefs(HomeStore)

// 调用hooks中的useScrollListen监听window的滚动,在滚动到底部后再次请求调用
const homeRef=ref()
// 在使用滚动函数时一定要明确滚动监听的目标对象,不能全部都监听window的滚动
const { isBelowBottom,scrollTop }=useScrollListen(homeRef)
watch(isBelowBottom,(newValue)=>{
    if(newValue){
    HomeStore.fetchHouseListAction()
    isBelowBottom.value=false
    }
})

// 监听house-list-item的点击
const itemClick=(item)=>{
    // 用router传入id
    router.push('/detail/'+item.data.houseId)
}

// 跳转回home时,回到离开时的位置
onActivated(()=>{
    homeRef.value?.scrollTo({
        // 初次加载homeRef是没有值的,跳转回来homeRef是有值的
        // 在useScrollListen中有离开时的位置,scrollTop.value
        top:scrollTop.value
    })
})
</script>

<style scoped>
.home{
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 50px;
    /* 将home的高度设置为100vh,这样监听的就是home的滚动而不是window,切换home和favor的router时不会因为监听的都是window而请求数据 */
    /* 后面的组件都要设置自己的高度 */
 }

.home-house-list {
    margin: 22px 7px;
}

.title {
    font-size: 22px;
    font-weight: 800;
    margin-left: 10px;
    margin-bottom: 13px;
}

.list {
    display: flex;
    flex-wrap: wrap;
}

.loading{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    width: 100px;
    height: 100px;

    border-radius: 30px;
    background-color: #ff9854;
}
</style>