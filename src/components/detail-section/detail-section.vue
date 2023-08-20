<template>
    <div class="detail-section">
        <div class="header">
            <h2>{{title}}</h2>
        </div>
        <div class="content" >
            <!-- 使用插槽 -->
            <slot>
                <h2>默认内容</h2>
            </slot>
        </div>
        <div class="footer">
            <div>{{ footer }}></div>
        </div>
    </div>
</template>

<script setup>
    const props=defineProps({
        title:{
            type:String,
            default:"默认标题"
        },
        footer:{
            type:String,
            dafault:"默认尾标"
        }
    })
</script>

<style scoped>
    .detail-section{
        border-bottom:15px solid #eeeeee;
        padding:15px 0
    }
    .header{
        height: 50px;
        margin: 0 10px;
        border-bottom: 1px solid #999;
        margin-bottom: 10px;
        line-height: 50px;
        font-size: 20px;
        font-weight: 600;
    }
    .footer{
        display: flex;
        flex-direction: row-reverse;
        color:#ff9854;
        margin: 0 10px;
        font-weight: 600;
    }
</style>
