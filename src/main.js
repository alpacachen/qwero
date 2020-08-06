import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
const Home = () => import('./pages/home')
const animate4phaser = () => import('./pages/animate4phaser')
const spinePlayerPage = () => import('./pages/spineplayer')
const coconut = () => import('./pages/coconut')
const text = () => import('./pages/text')
Vue.use(VueRouter)
const routes = [
  { path: '/', component: Home },
  { path: '/animate4phaser', component: animate4phaser },
  { path: '/spinePlayerPage', component: spinePlayerPage },
  { path: '/coconut', component: coconut },
  { path: '/text', component: text },
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

Vue.config.productionTip = false

new Vue({
  router,
}).$mount('#app')
