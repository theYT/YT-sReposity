<template>
    <div class="message">
        <nav-bar :title=title></nav-bar>
        <div class="content">
            <img src="../../assets/image/message/icon_message.png" alt="">
            <div class="text">暂无聊天消息</div>
        </div>
    </div>
</template>

<script setup>
import NavBar from '../../components/nav-bar/nav-bar.vue';
const title = "消息"
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