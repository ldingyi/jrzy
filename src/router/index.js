import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component:() =>import('../views/Home'),
    children:[
      {
        path: '/',
        name: 'main1',
        component:()=>import('../components/main1')
      },
      {
        path:'/main2',
        name:'main2',
        component:()=>import('../components/main2')
      },
      {
        path:'/main3',
        name:'main3',
        component:()=>import('../components/main3')
      },


    ]


  }

]

const router = new VueRouter({
  routes
})

export default router
