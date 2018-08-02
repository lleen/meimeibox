import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入home
import Home from '../components/pages/Home/Home'
// 引入Classfiy
import Classify from '../components/pages/classify/Classify'
// 引入mine
import Mine from '../components/pages/Mine/mine'
// 错误信息提示
import Nofound from '../components/pages/NoFound/nofound'

// 二级路由
import Homes from '../components/pages/Home/Homes'
import Pony from '../components/pages/Home/HomePony'

// vue的全局工具都需要vue.use全局注册一下
Vue.use(VueRouter)

// 创建一个路由表
let routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home', // 当前浏览器的地址
    name: 'home', // 给当前文件取个名字
    component: Home,
    children: [
      {
        path: '',
        redirect: {name: 'homes'}
      },
      {
        path: '1',
        name: 'homes',
        component: Homes
      },
      {
        path: '6',
        name: 'pony',
        component: Pony
      }
    ]
  },
  {
    path: '/classify',
    name: 'classify',
    component: Classify
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  },
  // {
  //   path: '/goods',
  //   name: 'goods',
  //   component: Goods
  // },
  {
    path: '/nofound',
    name: 'nofound',
    component: Nofound
  },
  {
    path: '**',
    redirect: {name: 'nofound'}
  }
]

// 实例router
const router = new VueRouter({
  mode: 'history',
  routes
})
export default router
