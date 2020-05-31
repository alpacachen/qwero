import Vue from 'vue'
import Home from './pages/home'
import NotFound from './pages/404'

const routes = {
  '/': Home,
}

Vue.config.productionTip = false

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
}).$mount('#app')
