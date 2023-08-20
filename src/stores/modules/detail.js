import { defineStore } from "pinia";
import { getDatilInfo } from "../../service/modules/details"

const useDetailStore = defineStore("detail", {
    state: () => {
        return {
            detailData:{},
            houseId:""
        }
    },
    actions: {
        // 在store中封装网络请求
        fetchDetailAction() {
            getDatilInfo(this.houseId).then(res=>{
                this.detailData=res.data
            })  
        }
    }
})

export default useDetailStore