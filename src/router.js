import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('./views/Login/Login.vue')
    },
    {
      path: '/main',
      name: 'main',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Main/Main.vue')
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: () => import('./views/Backstage/Backstage.vue'),
      children: [
        {
          path: '/backstage/table',
          name: 'table',
          component: () => import('./views/Backstage/Table/Table.vue'),
        },
        {
          path: '',
          redirect: '/backstage/table'
        },
      ]
    }
  ]
})
