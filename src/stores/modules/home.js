import { defineStore } from "pinia";
import { getHotSuggests} from "../../service/modules/hotSuggests.JS"
import { getCategories } from "../../service/modules/categories";
import {getHouseList} from "../../service/modules/houseList"
const useHomeStore = defineStore("home", {
    state: () => {
        return {
            startDay:{},
            endDay:{},
            allHotSuggests:[],
            categories:[],
            houseList:[],
            currentPage:1,
            isLoading:false
        }
    },
    actions: {
        // 在store中封装网络请求
        fetchHotSuggestsAction() {
            getHotSuggests().then(res => {
                this.allHotSuggests = res.data
            })
        },
        fetchCategoriesAction(){
            getCategories().then(res=>{
                this.categories=res.data
            })
        },
        fetchHouseListAction(){
            getHouseList(this.currentPage).then(res=>{
                // ...Array[],将数组的元素展开.array[].push(...array[]),数组里增加新的数组里的元素
                this.houseList.push(...res.data)
                this.currentPage++
            })
        }
    }
})

export default useHomeStore