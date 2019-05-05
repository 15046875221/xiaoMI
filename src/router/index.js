import Vue from 'vue'
import Router from 'vue-router'
import Home from "../view/home"
import Shop from "../view/shop"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    }
  ]
})
