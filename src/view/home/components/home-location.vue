<template>
    <div class="location">
            <div class="city" @click="cityClick">{{ currentCity.cityName}}</div>
            <div class="my-position" @click="myPositionClick">
                <span>我的位置</span>
                <img src="../../../assets/image/home/icon_location.png" alt="">
            </div>
        </div>
</template>

<script setup>
    import { computed, ref } from "vue"
    import useCityStore from '../../../stores/modules/city';
    import { useRouter } from 'vue-router';
    import { storeToRefs } from 'pinia';

    const router=useRouter()

    const cityClick=()=>{

        router.push("/city")

    }
     const myPositionClick=()=>{
        // 调用api获取经纬度
        navigator.geolocation.getCurrentPosition(res=>{
            console.log(res);
        },err=>{
            console.log(err);
        })
    }

    // 获取当前城市
    const cityStore=useCityStore()
    const { currentCity }=storeToRefs(cityStore)

</script>

<style scoped>
.location{
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 20px;
    }
    .location .city{
        flex: 1;
        color: #333
    }
    .location .my-position{
        display: flex;
        align-items: center;
        width: 80px;
    }
    .location .my-position span{
        position: relative;
        top:1.6px;
        font-size:15px;
        color: #666;
    }
    .location .my-position img{
        width: 18px;
        height: 18px;
    }
</style>