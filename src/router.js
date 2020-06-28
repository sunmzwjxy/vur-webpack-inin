import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import Shop from './components/Shop.vue'
import Search from './components/Search.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: Home },
        { path: '/member', component: Member },
        { path: '/shop', component: Shop },
        { path: '/search', component: Search },
    ],
    linkActiveClass: 'mui-active', //覆盖默认的Tabbal路由高亮, 用（mui-active）覆盖（router-link-active）
})

export default router
