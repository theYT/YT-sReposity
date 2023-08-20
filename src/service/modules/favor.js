import HYRequest from "../request/index"

export function getFavorHouse() {

    return HYRequest.get({
        url: "http://123.207.32.32:1888/api/favor/list",
    })
}

export function getHistoryHouse() {

    return HYRequest.get({
        url: "http://123.207.32.32:1888/api/favor/history",
    })
}