<template>
    <div class="detail-swipe">
        <van-swipe class="my-swipe" :autoplay="3000">
            <van-swipe-item v-for="(item, index) in swipeData" :key="index">
                <img :src="item.url" alt="">
            </van-swipe-item>
            <template #indicator="{ active, total }">
                <div class="custom-indicator">
                    <template v-if="swipeGroup">
                        <template v-for="(value, key, index) in swipeGroup" :key="index">
                            <!-- 这里用==,因为key是string,s[a].e是number类型 -->
                            <div class="item" :class="{ active: key == swipeData[active]?.enumPictureCategory }">
                                <span class="text">
                                    {{ getName(value[0].title) }}
                                </span>
                                <span class="count" v-show="key == swipeData[active]?.enumPictureCategory">
                                    {{ getCurrentIndex(swipeData[active]) + 2 }}/{{ value.length + 1 }}
                                </span>
                            </div>
                        </template>
                    </template>
                </div>
            </template>
        </van-swipe>
    </div>
</template>

<script setup>
import { onMounted, ref, toRef, watch } from 'vue';
const props = defineProps({
    swipeData: {
        type: Array,
        default: () => [],
    }
})

// 对数据进行转换

const swipeGroup = {}
setTimeout(() => {
    for (const item of props.swipeData) {
        let value = swipeGroup[item.enumPictureCategory]
        // 获取key为item.e...的value
        // 如果value为空,创建一个空数组,赋值给这个key
        if (!value) {
            value = [];
            swipeGroup[item.enumPictureCategory] = value
        } else {
            // 如果不为空,那么给swipeGroup[item.enumPictureCategory]添加新的数据
            swipeGroup[item.enumPictureCategory].push(item)
        }
    }
}, 1000)

// 获取当前滚动到的数据的index
const getCurrentIndex = (item) => {
    const value = swipeGroup[item?.enumPictureCategory]
    return value?.findIndex(element => {
        // 当element===item时,返回true
        return element === item
    })
}

const getName = (name) => {
    return name.slice(0, name.length - 1)
}

</script>
 
<style scoped>
img {
    width: 100%;
}

.custom-indicator {
    display: flex;
    position: absolute;
    right: 5px;
    bottom: 5px;

    font-size: 12px;
    background: rgba(0, 0, 0, 0.6);
    color: #fff
}

.item {
    border-radius: 6px;
    padding: 0 4px;
}

.active {
    background-color: #fff;
    color: #000
}
</style>