import { onDeactivated, onMounted, onUnmounted, ref } from "vue"
import _ from "underscore"

export function useScrollListen(elref) {
    let el = window
    // 不要在这里给el赋值elref,在挂载时赋值

    // 监听window页面的滚动,在离开当前页面后取消监听
    const clientHeight = ref(0)
    const scrollTop = ref(0)
    const scrollHeight = ref(0)
    const isBelowBottom = ref(false)
    // 还要设置防抖和节流，这里用节流_.throttle
    const scrollListenFn = _.throttle(() => {
        // console.log("在滚了~在滚了~");
        if (el === window) {
            clientHeight.value = document.documentElement.clientHeight
            scrollTop.value = document.documentElement.scrollTop
            scrollHeight.value = document.documentElement.scrollHeight
        } else {
            clientHeight.value = el.clientHeight
            scrollTop.value = el.scrollTop
            scrollHeight.value = el.scrollHeight
        }
        if (scrollTop.value + clientHeight.value >= scrollHeight.value) {
            isBelowBottom.value = true
        }
    }, 500)

    onMounted(() => {
        // 要在挂载的时候判断,否则没有挂载没有值
        if (elref) {
            el = elref.value
        }
        el.addEventListener("scroll", scrollListenFn)
    })

    onUnmounted(() => {
        el.removeEventListener("scrool", scrollListenFn)
    })

    onDeactivated(() => {
        el.removeEventListener("scrool", scrollListenFn)
    })

    
    return {
        isBelowBottom,
        clientHeight,
        scrollHeight,
        scrollTop
    }
}
