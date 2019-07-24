import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import welcome from '../components/welcome.vue'
import myInfo from '../components/myInfo.vue'
import todolistmain from '../components/todolistmain.vue'
import refactor from '../components/refactor.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      component: welcome
    },
    {
      path: '/refactor',
      component: refactor
    },
    {
      path: '/home/:id',
      component: home,
      children: [
        {
          path: '/myInfo/:id',
          component: myInfo
        },
        {
          path: '',
          component: todolistmain
        }
      ]
    },
    {
      path: '/',
      redirect: '/welcome'
    }
  ]
})
