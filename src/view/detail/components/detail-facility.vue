<template>
    <div class="datailFacility">
        <template v-for="(item,index) in houseFacility.houseFacilitys" :key="index">
            <template v-if="isGroupName(index)">
                <div class="group">
                    <div class="groupName">
                        <div class="groupNameIcon">
                            <img :src="item.icon" alt="">
                        </div>
                        <div class="groupNameItem">
                        
                            {{item.groupName}}
                        </div>
                    </div>
                    <div class="groupItems">
                        <template v-for="(iten,indey) in item.facilitys.slice(0,4)" :key="indey">
                            <div class="groupItem">
                            <div class="groupItemIcon">
                                <van-icon name="passed" />
                            </div>
                            <div class="groupItemName">
                                {{iten.name}}
                            </div>
                        </div>
                        </template>
                    </div>
                </div>
            </template>
        </template>
    </div>
</template>

<script setup>
import { computed } from "vue";

    const props=defineProps({
        houseFacility:{
            type:Object,
            default:()=>{}
        }
    })


    const isGroupName=(index)=>{
        return props.houseFacility.facilitySort.includes(index)
    }
</script>

<style scoped>
.datailFacility{
    background-color: #eeeeee;
    margin:10px 10px 30px 10px 
}
.group{
    display: flex;
}
.group .groupName{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:20px 0px
}
.group .groupName .groupNameIcon img{
    width: 40px;
    height: 40px;
}
.group .groupItems{
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    align-content: center
}

.group .groupItems .groupItem{
    width: 120px;
    display: flex;
    align-items: center;
    padding:7px 0
}
</style>