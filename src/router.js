import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Topic from './views/Topic.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  // 匹配当前开发或生产的环境常量挂载到process.env
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: Topic
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '/topic',
      redirect: '/'
    },
    {
      path: '/user',
      redirect: '/'
    }
  ]
})
