<template>
    <div class="home-type-3">
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
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    itemData: {
        type: Object,
        define: () => ({})
    }
})
</script>

<style scoped>
.home-type-3 {
    width: 50%;
    height: 222.8px;
    position: relative;
}

.home-type-3 .item-inner {
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
    color: #000;
}

.infos .houseName {
    color: #000;
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
    color:#000
}
</style>