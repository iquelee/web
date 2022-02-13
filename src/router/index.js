import Vue from 'vue'
import VueRouter from 'vue-router'
import screenPage from '../views/screenPage'
import High from '../views/high'
import Medium from '../views/medium'

Vue.use(VueRouter)
Vue.component(High)
Vue.component(Medium)

const routes = [
  {
    path: '/',
    redirect: '/screen'
  },
  {
    path: '/screen',
    component: screenPage,
    children: [
      { path: '/high', name: 'High', component: High },
      { path: '/medium', name: 'Medium', component: Medium }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
