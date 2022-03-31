import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeView from '@/views/HomeView.vue'
import AllView from '@/views/AllView.vue'
import AddComponent from '@/components/AddComponent'
import LoginComponent from '@/components/LoginComponent'
import RegisterComponent from '@/components/RegisterComponent'
let routes
Vue.use(VueRouter)
if (!localStorage.getItem('token')) {
  routes = [
    {
      path: '/',
      name: 'home',
      component: LoginComponent
    },
    {
      path: '/all',
      name: 'all-view',
      component: LoginComponent
    },
    {
      path: '/create',
      name: 'create',
      component: LoginComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/register',
      name: 'register',
      component: LoginComponent
    }
  ]
} else {
  routes = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/all',
      name: 'all-view',
      component: AllView
    },
    {
      path: '/create',
      name: 'create',
      component: AddComponent
    },
    {
      path: '/login',
      name: 'login',
      component: LoginComponent
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterComponent
    }
  ]
}

const router = new VueRouter({
  routes
})

export default router
