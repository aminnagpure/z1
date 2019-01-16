import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router=new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/login.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/logout.vue')
    },
    {
      path: '/addexchange',
      name: 'addexchange',
      component: () => import(/* webpackChunkName: "about" */ './views/Addexchange.vue')
    },
    {
      path: '/getdata',
      name: 'getdata',
      component: () => import(/* webpackChunkName: "about" */ './views/getandadddata.vue')
    },
    {
      path: '/addaddress',
      name: 'addaddress',
      component: () => import(/* webpackChunkName: "about" */ './views/addaddress.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/dashboard.vue')
    }
  ]
})
export default router;