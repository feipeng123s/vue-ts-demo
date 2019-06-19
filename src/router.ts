import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Layout from '@/views/layout/index.vue'
import Home from '@/views/Home.vue'
import User from '@/views/user/user.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      meta: {
        title: 'Layout'
      },
      children: [
        {
          path: 'home',
          component: Home,
          meta: {
            title: '首页'
          }
        },
        {
          path: 'user',
          component: User,
          meta: {
            title: '用户列表'
          }
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
    {
      path: '/login',
      component: Login
    }
  ]
})
