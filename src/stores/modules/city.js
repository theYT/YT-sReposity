import { defineStore } from "pinia";
import { getAllCity } from "../../service/modules/city"
const useCityStore = defineStore("city", {
    state: () => {
        return {
            allCity: {},
            currentCity: {
                cityName: "宁波"
            }
        }
    },
    actions: {
        // 在store中封装网络请求
        fetchAllCityAction() {
            getAllCity().then(res => {
                this.allCity = res.data
            })
        }
    }
})

export default useCityStore