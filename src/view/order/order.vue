<template>
    <div class="order">
        <nav-bar :title=title></nav-bar>
        <div class="content">
            <img src="../../assets/image/message/icon_message.png" alt="">
            <div class="text">暂无订单</div>
        </div>
    </div>
</template>

<script setup>
    import NavBar from '../../components/nav-bar/nav-bar.vue';
    const title="订单"
</script>

<style scoped>
.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

}

.content img {
    width: 88%;
}
</style>