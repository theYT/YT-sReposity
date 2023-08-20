import HYRequest from "../request/index"

// 返回一个promise
export function getHotSuggests() {

    return HYRequest.get({
        url: "http://123.207.32.32:1888/api/home/hotSuggests"
    })
}