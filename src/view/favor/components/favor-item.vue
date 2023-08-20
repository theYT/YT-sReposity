<template>
    <!-- item组件 -->
    <div class="favorItem">
        <div class="itemImg">
            <img :src="item.pictureList[0]" alt="">

        </div>
        <div class="itemAddressAndUnitSummerise">
            <div class="itemAddress">
                {{ item.address }}
            </div>
            <div class="itemUnitSummeries">
                <template v-for="(iten, indey) in item.unitSummeries" :key="indey">
                    <span class="unitSummeriesItem">
                        {{ iten.text }}
                        <span v-if="indey != (item.unitSummeries.length - 1)">·</span>
                    </span>

                </template>
            </div>
        </div>
        <div class="itemName">
            {{ item.unitName }}
        </div>
        <div class="itemHouseTags">
            <template v-for="(iten, indey) in item.houseTags">
                <div class="itemHouseTagItem" :style="{ color: iten.color, background: iten.background.color }">{{ iten.text }}
                </div>
            </template>
        </div>
        <div class="itemPrice">
            <div class="finalPrice">{{ "¥" + item.finalPrice }}</div>
            <div class="productPrice">{{ "¥" + item.productPrice }}</div>
            <template v-if="item.priceTipBadge">
                <div class="priceTipBadge">
                    {{ item.priceTipBadge.text }}
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
    const props=defineProps({
        item:{
            type:Object,
            default:()=>{}
        }
    })
</script>

<style scoped>
    .favorItem{
    padding:20px 20px 5px 20px
}
.favorItem .itemImg img{    
    width: 100%;
    border-radius: 8px;
}
.favorItem .itemAddressAndUnitSummerise{
    display: flex;
    align-items: center;
    padding:5px 0;
}
.favorItem .itemAddressAndUnitSummerise .itemAddress{
    font-size: 13px;
    background-color:#555;
    color: #fff;
    padding:3px  4px;
    border-radius: 3px;
    margin-right: 10px;
}
.favorItem .itemAddressAndUnitSummerise .itemUnitSummeries .unitSummeriesItem{
    font-size: 10px;
    color:#999;
    margin-left: 4px;
}
.favorItem .itemName{
    font-size: 19px;
    font-weight: 500;
}
.favorItem .itemHouseTags{
    display: flex;
    margin: 10px 0;
}

.favorItem .itemHouseTagItem{
    padding: 1px 2px;
    margin-right: 8px;
    font-size: 13px;
}

.favorItem .itemPrice{
    display: flex;
}
.favorItem .itemPrice .finalPrice{
    font-size: 20px;
    color: #ff9854;
    line-height: 20px;
    margin-right: 10px;
}
.favorItem .itemPrice .productPrice{
    font-size: 13px;
    color: #999;
    line-height: 22px;
    margin-right: 10px;
    text-decoration: line-through;

}

.favorItem .itemPrice .priceTipBadge{
    color: #fff;
    font-size: 12px;
    padding: 0px 3px;
    line-height: 20px;
    background: linear-gradient(#FF6666,#FB4A4A);
    border-radius: 30px;
}
</style>