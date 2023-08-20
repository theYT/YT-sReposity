<template>
    <div class="detailLandlord">
        <div class="topScroll">
            <img :src="landlordModule.topScroll" alt="">
        </div>
        <div class="hotelInfo">
            <div class="hotelInfoLeft">
                <div class="hotelInfoLogo">
                    <img :src="landlordModule.hotelLogo" alt="">
                </div>
                <div class="hotelInfoLeftRight">
                    <div class="hotelInfoName">
                        {{ landlordModule.hotelName }}
                    </div>
                    <div class="hotelInfoTags">
                        <template v-for="(item, index) in landlordModule.hotelTags" :key="index">
                            <span class="hotelInfoTags">
                                {{ item.tagText.text }}
                            </span>
                            <span v-if="index != landlordModule.hotelTags.length - 1">
                                |
                            </span>
                        </template>
                    </div>
                </div>
            </div>
            <div class="hotelInfoRight">
                联系房东
            </div>
        </div>
        <div class="hotelSummary">
            <template v-for="(item, index) in landlordModule.hotelSummary" :key="index">
                <div class="hotelSummaryItem">
                    <div class="hotelSummaryTitle">
                        {{ item.title }}
                    </div>
                    <div class="hotelSummaryIntroduction">
                        {{ item.introduction }}
                    </div>
                    <div class="hotelSummaryTip">
                        {{ item.tip }}
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    landlordModule: {
        type: Object,
        default: () => { }
    }
})
</script>

<style scoped>
.topScroll {
    margin: 0 10px;
}

.topScroll img {
    width: 100%;
    border-radius: 5px;
}

.hotelInfo {
    margin: 0 10px;
    display: flex;
}

.hotelInfo .hotelInfoLeft {
    flex: 4;
    display: flex;
}

.hotelInfo .hotelInfoLeft img {
    width: 58px;
    height: 58px;
}

.hotelInfo .hotelInfoLeft .hotelInfoLeftRight {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.hotelInfo .hotelInfoLeft .hotelInfoLeftRight .hotelInfoName {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 6px;
}

.hotelInfo .hotelInfoLeft .hotelInfoLeftRight .hotelInfoTags {
    font-size: 12px;
    color: #999;
}

.hotelInfo .hotelInfoRight {
    flex: 1;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #fff;
    background-color: #ff9854;
    margin-top: auto;
    margin-bottom: auto;
    border-radius: 6px;
}

.hotelSummary {
    display: flex;
}
.hotelSummary .hotelSummaryItem{
    flex: 1;
    margin:30px 10px
}
.hotelSummary .hotelSummaryItem .hotelSummaryTitle{
    color:#999;
    font-size: 12px;
    margin:4px 0
}
.hotelSummary .hotelSummaryItem .hotelSummaryIntroduction{
    font-size: 20px;
    font-weight: 600;
    margin:6px 0
}
.hotelSummary .hotelSummaryItem .hotelSummaryTip{
    color:#666;
    font-size: 12px;
    margin:4px 0
}
</style>
