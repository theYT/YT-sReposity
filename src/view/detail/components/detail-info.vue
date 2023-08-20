<template>
    <div class="info">
        <div class="infoName">
            {{detailInfos.houseName}}
        </div>
        <div class="infoTags">
            <template v-for="(item,index) in detailInfos.houseTags" :key="index">
                <span 
                class="tags"
                v-show="item.tagText"
                :style="{ color:item.tagText?.color ,background:item.tagText?.background.color}"
                >
                    {{  item.tagText?.text  }}
                </span>
            </template>
        </div>
        <div class="commentBrief">
            <div class="left">
                <div class="overall"> {{detailInfos.commentBrief?.overall}}</div>
                <div class="scoreTitle">{{detailInfos.commentBrief?.scoreTitle}}</div>
                <div class="comment">"{{detailInfos.commentBrief?.commentBrief}}"</div>
            </div>
            <div class="right">
                <div class="totalCount">{{detailInfos.commentBrief?.totalCount}}条评论></div>
            </div>
        </div>
        <div class="nearByPosition">

                <div class="left">
                    {{detailInfos.nearByPosition?.address}}
                </div>
                <div class="right">
                    地图·周边>
                </div>
        </div>
    </div>
</template>

<script setup>
    const props=defineProps({
        detailInfos:{
            type:Object,
            default:()=>({})
        }
    })

</script>

<style scoped>
.infoName{
    font-size: 22px;
    font-weight: 600;
    margin:10px 10px;

}

.infoTags{
    font-size: 13px;
    margin:5px 10px;
}
.tags{
    margin-right:4px
}

.commentBrief,.nearByPosition{
    display: flex;
    height: 40px;
    background-color:#eee;
    margin:10px 10px;
    padding: 0 13px;
    border-radius: 5px;
    align-items: center;
}

.commentBrief .left{
    flex: 3;
    display: flex;
}

.commentBrief .left .overall{
    font-size: 24px;
    font-weight: 800;
}

.commentBrief .left .scoreTitle{
    font-size: 13px;
    font-weight: 800;
    line-height: 28px;
}

.commentBrief .left .comment{
    font-size: 13px;
    line-height: 29.5px;
    color:#999;
}
.commentBrief .right{
    flex: 1;
    display: flex;
    color: #ff9854;
    font-size: 13px;
    flex-direction: row-reverse;
}

.nearByPosition .left{
    flex: 3;
    font-size: 13px;
    font-weight: 800;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    margin: 5px 0;
}

.nearByPosition .right{
    flex: 1;
    font-size: 13px;
    color: #ff9854;
    display: flex;
    flex-direction: row-reverse;
}
</style>