import Vue from 'vue'
import Home from './pages/home'
import NotFound from './pages/404'
import animate4phaser from './pages/animate4phaser'
const routes = {
  '#/': Home,
  '#/animate4phaser':animate4phaser
}

Vue.config.productionTip = false

new Vue({
  data: {
    currentRoute: window.location.hash
  },
  computed: {
    ViewComponent () {
      let hash = this.currentRoute;
      if(!hash){
        hash = '#/'
      }
      return routes[hash] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
