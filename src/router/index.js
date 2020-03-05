import Vue from 'vue'
import VueRouter from 'vue-router'
import BookManage from '../views/BookManage'
import AddBook from '../views/AddBook'
import PageThree from '../views/PageThree'
import PageFour from '../views/PageFour'
import Index from '../views/Index'
import BookUpdate from '../views/BookUpdate'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'图书管理',
    component:Index,//默认放父组件，带一插槽
    show:true,
    // redirect:'/BookManage',
    children:[
      {
        path:'/BookManage',
        name:'查询图书',
        component:BookManage  //子组件放入父组件中
      },
      {
        path:'/AddBook',
        name:'添加图书',
        component:AddBook
      },

    ]
  },
  {
    path:'/update',
    component:BookUpdate,
    show:false
  }

  // {
  //   path:'/navigation',
  //   name:'导航2',
  //   component:Index,
  //   children: [
  //     {
  //       path:'/pageThree',
  //       name:'页面3',
  //       component:PageThree
  //     },
  //     {
  //       path:'/pageFour',
  //       name:'页面4',
  //       component:PageFour
  //     }
  //   ]
  // }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
