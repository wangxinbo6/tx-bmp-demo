import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Headers from '@/components/views/Headers'
import Login from '@/components/comment/login'
import Dashboard from '@/components/views/content/Dashboard'
import DashboardTwo from '@/components/views/content/DashboardTwo'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {name:'header', path:'/header', component:Headers},
        {name:'dash', path:'/dash', component:Dashboard},
        {name:'dashTwo', path:'/dashTwo', component:DashboardTwo}
      ]
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/dashTwo',
      name:'dashTwo',
      component:DashboardTwo
    }
  ]
})
