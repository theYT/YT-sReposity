<template>
    <div class="home-type-9">
        <div class="item-inner">
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>
            <div class="infos">
                <div class="summaryText">
                    {{ itemData.summaryText }}
                </div>
                <div class="houseName">
                    {{ itemData.houseName }}
                </div>
                <div class="bottom">
                    <div class="star">
                        <van-rate v-model="commentScore" size="13" color="#fff" readonly allow-half></van-rate>
                    </div>
                    <div class="price">
                        {{ "¥"+itemData.finalPrice }}
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
const props=defineProps({
    itemData: {
        type: Object,
        define: () => ({})
    }
})

const commentScore=Number(props.itemData.commentScore)
</script>

<style scoped>
.home-type-9 {
    width: 50%;
    position: relative;
}

.home-type-9 .item-inner {
    margin: 5px;
    border-radius: 14px;
    /* 溢出部分隐藏 */
    overflow: hidden;
}

.item-inner .cover img {
    width: 100%
}

.infos {
    position: absolute;
    bottom: 15px;
    padding: 5px;
}

.infos .summaryText {
    font-size: 12px;
    color: #fff;
}

.infos .houseName {
    color: #fff;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 5px 0;
}
.infos .bottom{
    display: flex;
    justify-content: space-around;
}

.infos .bottom .price{
    color:#fff
}
</style>