import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/pages/Home/Home.vue'
import AboutMmx from '../components/pages/About/AboutMmx.vue'
import HomeActive from '../components/pages/Home/container/HomeActive.vue'
Vue.use(VueRouter)

let routes = [
    {
        path: '/about',
        name: 'about',
        component: AboutMmx
    },
    {
        path: '/',
        name: 'home',
        component: Home
    }
]
const router = new VueRouter({
    mode:'history',
    routes
})
export default router