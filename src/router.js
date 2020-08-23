import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/tabbar/Home.vue'
import Member from './components/tabbar/Member.vue'
import Shop from './components/tabbar/Shop.vue'
import Search from './components/tabbar/Search.vue'
import Newslist from './components/News/Newslist.vue'
import Newsinfor from './components/News/Newsinfor.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/shop', component: Shop },
        { path: '/search', component: Search },
        { path: '/home/newslist', component: Newslist },
        { path: '/home/newsinfor/:ID', component: Newsinfor }
    ],
    linkActiveClass: 'mui-active', //覆盖默认的Tabbal路由高亮, 用（mui-active）覆盖（router-link-active）
})

export default router
