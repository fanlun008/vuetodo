import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home.vue'
import welcome from '../components/welcome.vue'
import myInfo from '../components/myInfo.vue'
import todolistmain from '../components/todolistmain.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/welcome',
      component: welcome
    },
    {
      path: '/home/:id',
      component: home,
      children: [
        {
          path: '/myInfo',
          component: myInfo
        },
        {
          path: '/todoList',
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
