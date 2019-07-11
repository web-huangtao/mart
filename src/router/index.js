import Vue from 'vue'
import Router from 'vue-router'
const dome = r => require.ensure([], () => r(require('@/views/dome/index')), 'dome')
const home = r => require.ensure([], () => r(require('@/views/home/index')), 'home')
const kind = r => require.ensure([], () => r(require('@/views/kind/index')), 'kind')
const cart = r => require.ensure([], () => r(require('@/views/cart/index')), 'cart')
const user = r => require.ensure([], () => r(require('@/views/user/index')), 'user')

Vue.use(Router)

export default new Router({
  // scrollBehavior: (to, from, savedPosition) => ({
  //   if (savedPosition) {
  //     setTimeout(() => {
  //       window.scrollTo(savedPosition.x, savedPosition.y)
  //     }, 200)
  //   }
  // }),
  routes: [
    {
      path: '/',
      name: 'dome',
      component: dome,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/kind',
      name: 'kind',
      component: kind,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      meta: {
        keepAlive: false
      }
    }
  ]
})
