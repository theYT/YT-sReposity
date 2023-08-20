import { createRouter, createWebHashHistory } from "vue-router";

const router=createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:"/home"
        },
        {
            path:"/home",
            component:()=>import("../view/home/home.vue"),
        },
        {
            path:"/favor",
            component:()=>import("../view/favor/favor.vue")
        },
        {
            path:"/message",
            component:()=>import("../view/message/message.vue")
            
        },
        {
            path:"/order",
            component:()=>import("../view/order/order.vue")
        },
        {
            path:"/city",
            component:()=>import("../view/city/city.vue"),
            meta:{
                hideTabBar:"ture"
            }
        },
        {
            path:"/search",
            component:()=>import("../view/search/search.vue"),
            meta:{
                hideTabBar:"ture"
            }
        },
        {
            path:"/detail/:id",
            component:()=>import("../view/detail/detail.vue"),
            meta:{
                hideTabBar:"ture"
            }
        }
    ]
})

export default router