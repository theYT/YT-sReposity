import HYRequest from "../request/index"

export function getCategories(){
    return HYRequest.get({
        url: "http://123.207.32.32:1888/api/home/categories"
    })
}