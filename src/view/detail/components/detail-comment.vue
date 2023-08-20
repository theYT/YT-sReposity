<template>
    <div class="detail-comment">
        <div class="head">
            <div class="left">
                <div class="headLeftLeft">
                    <div class="headLeftLeftOverall">
                        {{ commentModule.overall }}
                    </div>
                </div>
                <div class="headLeftRight">
                    <div class="headLeftScoreTitle">
                        {{ commentModule.scoreTitle }}
                    </div>
                    <div class="headLeftTotalCount">
                        {{ commentModule.totalCount }}条评论
                    </div>
                    <div class="headLeftStart">
                        <van-rate v-model="startValue" readonly allow-half size="14px"/>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="subScores">
                    <template v-for="(item,index) in commentModule.subScoresFocus" :key="index">
                        <span class="subScoresItem">
                            {{ item.text }}
                        </span>
                    </template>
                </div>
            </div>
        </div>
        <div class="commentItems">
            <template v-for="(item,index) in commentModule.commentTagVo" :key="index">
                <div class="commentItem" :style="{color:item.color, background:item.backgroundColor}">
                    {{ item.text }}
                </div>
            </template>
        </div>
        <div class="commentContent">
            <div class="user">
                <div class="userLeft">
                    <div class="userLeftAvatars">
                        <img :src="commentModule.comment.userAvatars" alt="">
                    </div>
                </div>
                <div class="userRight">
                    <div class="userRightName">
                        {{ commentModule.comment.userName }}
                    </div>
                    <div class="userRightCheckInDate">
                        {{ commentModule.comment.checkInDate }}
                    </div>
                </div>
            </div>
            <div class="commentDetail">{{ commentModule.comment.commentDetail }}</div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const props=defineProps({
        commentModule:{
            type:Object,
            default:()=>{}
        }
    })

    // 评分星数
    const startValue=ref(props.commentModule.overall)
</script>

<style scoped>
    .head{
        display: flex;
        height: 60px;
        margin:0 2px;
        margin-top: 30px;
    }
    .head .left{
        flex:1;
        display: flex;
    }
    .head .left .headLeftLeft{
        flex: 1;
    }
    .head .left .headLeftLeft .headLeftLeftOverall{
        text-align: center;
        font-size: 60px;
        font-weight: 600;
        line-height: 60px;
    }
    .head .left .headLeftRight{
        flex: 1;
    }
    .head .left .headLeftRight .headLeftTotalCount{
        margin:4px 0;
        color:#999;
    }
    .head .right{
        flex:1;
    }
    .head .right .subScores{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-left:30px;
    }
    .head .right .subScores .subScoresItem{
        margin-bottom: 6px;
        font-size: 14px;
    }

    .commentItems{
        display: flex;
        flex-wrap: wrap;
        margin:20px 10px;
    }

    .commentItems .commentItem{
        margin:4px 6px;
        font-size: 14px;
        border-radius: 5px;
        padding:4px 2px;
    }
    .commentContent{
        background-color:rgb(245, 245, 245);
        margin: 0 10px;
    }
    .user{
        display: flex;
        padding:10px 10px
    }
    .user .userLeft{
        flex:1;
    }
    .user .userLeft .userLeftAvatars img{
        width: 45px;
        height: 45px;
        border-radius: 45px;
        padding-left:3px;
    }
    .user .userRight {
        flex:5.5;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .user .userRight .userRightName{
        font-size:16px;
        font-weight: 600;
        padding-bottom:4px
    }
    .user .userRight .userRightCheckInDate{
        color: #999;
    }

    .commentContent .commentDetail{
        padding:10px 16px;
        margin-bottom:40px;
        font-size: 14px;
        line-height: 20px;
    }
</style>