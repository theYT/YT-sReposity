<template>
    <div class="date">
        <div class="date-range" @click="dataRangeClick">
            <div class="startDay">
                <span class="tip">入住</span>
                <span>{{ startDay }}</span>
            </div>
            <div class="stayDayNum">共{{stayDayNum}}晚</div>

            <div class="endDay">
                <span class="tip">离店</span>
                <span>{{ endDay }}</span>
            </div>
        </div>
        <div class="calendar">
            <van-calendar 
            v-model:show="calendarShow" 
            type="range" 
            @confirm="onConfirm" 
            color="#ff9854" />
        </div>
        <div class="limit">
            <div class="startDay">
                <span class="limit-item">价格不限</span>
            </div>
            <div class="stayDayNum"></div>

            <div class="endDay">
                <span class="limit-item">人数不限</span>

            </div>
        </div><div class="limit">
            <div class="startDay">
                <span class="limit-item">关键字/位置/民宿名</span>

            </div>

            <div class="endDay">
                <span class="limit-item"></span>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { formatMonthDay,getDiffDay } from "../../../utils/format_dayjs";
import useHomeStore from "../../../stores/modules/home"
// 日期的初始化处理
const nowDate = new Date()
const nextDate=new Date()
nextDate.setDate(nowDate.getDate() + 1)

const startDay = ref(formatMonthDay(nowDate))
const endDay = ref(formatMonthDay(nextDate))
// 设置日历显示
const calendarShow = ref(false)
// 设置住宿时间
const stayDayNum=ref(1)
// 将入店和离店时间传给homeStore
const HomeStore=useHomeStore()
HomeStore.startDay=nowDate
HomeStore.endDay=nextDate

const onConfirm = (values) => {
    const [start, end] = values;

    // 设置入店和离店时间显示
    startDay.value = formatMonthDay(start);
    endDay.value = formatMonthDay(end);
    // 设置住宿天数
    // stayDayNum.value=(end-start)/1000/3600/24
    stayDayNum.value=getDiffDay(start,end)
    // 可用dayjs
    // 关闭日历
    calendarShow.value = false;

    // 将入店和离店时间传给home.store
    HomeStore.startDay=start
    HomeStore.endDay=end
}

const dataRangeClick = () => {
    calendarShow.value = true
}
</script>

<style scoped>
.date-range,.limit  {
    display: flex;
    height: 44.8px;
    padding: 0 20px
}

.startDay {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
}

.tip {
    font-size: 12px;
    color: #999
}

.stayDayNum {
    flex: 1;
    text-align: center;
    padding-right: 44px;
    line-height: 44.8px;
    font-size: 12px;
    color: #666
}

.endDay {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-evenly;
}

.limit-item {
    font-size: 14px;
    color: #999
}

</style>