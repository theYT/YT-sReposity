import { defineStore } from "pinia";
import { getFavorHouse,getHistoryHouse } from "../../service/modules/favor";

const useFavorStore=defineStore('favor',{
    state:()=>{
        return{
            navBarActiveItem:0,
            favorHouse:{},
            historyHouse:{},
        }
    },
    actions:{
        fetchFavorHouseAction() {
            getFavorHouse().then(res => {
                this.favorHouse = res.data
            })
        },
        fetchHistoryHouseAction() {
            getHistoryHouse().then(res => {
                this.historyHouse = res.data
            })
        },
    }
})

export default useFavorStore