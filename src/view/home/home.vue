<template>
    <div class="home">
        <div class="nav-bar">
            <div class="title">我的旅途</div>
        </div>
        <div class="banner">
            <img src="../../assets/image/home/banner.webp" alt="">
        </div>
        <div class="location">
            <div class="city">宁波市</div>
            <div class="my-position">
                <span>我的位置</span>
                <img src="../../assets/image/home/icon_location.png" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
    
</script>

<style scoped>

    .home .nav-bar{
        display: flex;
        height: 46px;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #f2f2f2;
    }

    .home .nav-bar .title{
        font-size: 18px;
        font-weight: 600;
        color:#ff9854;
    }

    /*  */
    .banner img{
        width: 100%;
    }
    /*  */

    .location{
        display: flex;
        align-items: center;
        height: 44px;
        padding: 0 20px;
    }
    .location .city{
        flex: 1;
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
    }
    .location .my-position img{
        width: 18px;
        height: 18px;
    }
</style>