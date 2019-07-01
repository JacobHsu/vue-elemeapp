import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      //name: 'index',
      component: Index,
      children: [
        {
          path: "",
          redirect:"/home"
        },
        {
          path: "/home",
          name: "home",
          component: ()=> import('./views/Home.vue')
        },
        {
          path: "/order",
          name: "order",
          component: ()=> import('./views/Order.vue')
        },
        {
          path: "/me",
          name: "me",
          component: ()=> import('./views/Me.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('./views/Login.vue')
    }
  ]
})

router.beforeEach((to, from, next) =>{
  const isLogin = localStorage.ele_login ? true : false;
  if (to.path == '/login') {
    next();
  } else {
    isLogin ? next() : next("/login");
  }
})

export default router;