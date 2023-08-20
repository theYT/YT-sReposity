<template>
    <div class="detail-map">
        <div class="baidu" ref="mapRef">

        </div>
    </div>
</template>


<script setup>
import { onMounted,ref } from "vue";
const props=defineProps({
    positionModule:{
        type:Object,
        default:()=>{}
    }
})
const mapRef=ref()
// 在onMouted中使用,确保.baidu的div已经挂载
onMounted(() => {
    const map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
    const point = new BMapGL.Point(props.positionModule.longitude,props.positionModule.latitude);  // 创建点坐标 
    map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    const marker = new BMapGL.Marker(point);        // 创建标注   
    map.addOverlay(marker);                     // 将标注添加到地图中
})

</script>

<style scoped>
.detail-map{
    margin:0 10px;
    margin-bottom: 15px;

}
.baidu {
    height: 300px;
    width: 100%;
}
</style>