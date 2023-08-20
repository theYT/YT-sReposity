<template>
    <div v-show="isShowSearchBar" class="home-search-bar">
        <div class="select-time">
            <div>
                <span class="select-time-tip">住</span>
                <span class="select-time-date">
                    {{ startDayComputed }}
                </span>
            </div>
            <div>
                <span class="select-time-tip">离</span>
                <span class="select-time-date">
                    {{ endDayComputed }}
                </span>
            </div>
        </div>
        <div class="content">
            <van-search v-model="value" left-icon=" " right-icon="search" placeholder="关键字/位置/民宿" />
        </div>

    </div>
</template>

<script setup>

// 随着画面的移动暂时searchBar
import { computed, ref } from "vue"
import useHomeStore from "../../../stores/modules/home";
import { useScrollListen } from "../../../hooks/useScrollListen"
import { formatMonthDay } from "../../../utils/format_dayjs"
import { storeToRefs } from "pinia";

const { scrollTop } = useScrollListen()

const isShowSearchBar = computed(() => {
    return scrollTop.value > 100
})

const HomeStore = useHomeStore()
const { startDay, endDay } = storeToRefs(HomeStore)

// 将获取的startDay,endDay转换成xx.xx的日月格式
const startDayComputed = computed(() => {
    return formatMonthDay(startDay.value).slice(0, 2) + "." + formatMonthDay(startDay.value).slice(3, 5)
})
const endDayComputed = computed(() => {
    return formatMonthDay(endDay.value).slice(0, 2) + "." + formatMonthDay(endDay.value).slice(3, 5)
})

const value = ref('')
</script>

<style scoped>
.home-search-bar {
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: #fff;
    display: flex;
}

.select-time {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    font-size: 10px;
    background-color: #f7f8fa;
    margin: 4px;
    padding: 4px 16px;
}

.select-time-tip {
    color: #999;
}

.content {
    flex: 6;
    --van-search-padding: 4px;
    --van-padding-sm: 2px
}
</style>