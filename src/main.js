import Vue from 'vue/dist/vue.js'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter)
Vue.use(ElementUI);

const Home = () =>
    import('./pages/home')
const animate4phaser = () =>
    import('./pages/animate4phaser')
const spinePlayerPage = () =>
    import('./pages/spineplayer')
const coconut = () =>
    import('./pages/coconut')
const text = () =>
    import('./pages/text')
const fof = () =>
    import('./pages/404')
const formDemo = () =>
    import('./pages/formDemo')
const db = () =>
    import('./pages/db')
const sticky = () =>
    import('./pages/sticky')
const kejian = () =>
    import('./pages/kejian')
const routes = [
    { path: '/', component: Home },
    { path: '/animate4phaser', component: animate4phaser },
    { path: '/spinePlayerPage', component: spinePlayerPage },
    { path: '/coconut', component: coconut },
    { path: '/text', component: text },
    { path: '/404', component: fof },
    { path: '/formDemo', component: formDemo },
    { path: '/db', component: db },
    { path: '/sticky', component: sticky },
    { path: '/kejian', component: kejian },
]
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

Vue.config.productionTip = false

new Vue({
    router,
}).$mount('#app')
