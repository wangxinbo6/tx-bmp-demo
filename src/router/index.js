import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Headers from '@/components/views/Headers'
import Login from '@/components/comment/login'
import Dashboard from '@/components/views/content/Dashboard'
import DashboardTwo from '@/components/views/content/DashboardTwo'
import List from '@/components/views/content/list'
import Shop from '@/components/views/content/shop'
import ShopCar from '@/components/views/content/shop-car'
import store from '@/components/comment/switch'
Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            redirect: 'list', //此为默认路径 即打开首页的时候自动跳转在list页面
            meta: {
                roles: ['admin'] //该页面可访问的权限
            },
            children:[
                {name:'header', path:'/header', component:Headers,},
                {name:'dash', path:'/dash', component:Dashboard},
                {name:'dashTwo', path:'/dashTwo', component:DashboardTwo},
                {name:'list',path:'/list',component:List},
                {name:'shop',path:'/shop',component:Shop},
                {name:'shopCar',path:'/shopCar',component:ShopCar}
            ]
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
    ]
}) 
export default router
//路由守卫  
router.beforeEach((to, from, next) => {
    // var user = localStorage.user ? JSON.parse(localStorage.user) : '';
    var user = store.state;
    if (user.count==true) { // 判断 vuex状态  （正常项目判断token 可以把token存在vuex中）
      if (to.meta.roles && to.meta.roles.indexOf(user.role) === -1) {//页面有权限要求但用户不符合 
          alert('403')
          if(from.path == '/login'){
              next('/')
          }else{
              next({path: from.path})
          }
      } else {//页面没有权限要求就直接访问 
          next()
      }
    } else if(to.path != '/login'){//没有token的话让跳转到登录页，并传递当前准备访问的路由
        next({path:'/login', query: {redirect: to.fullPath}})
    } else{
        next()
    }
})