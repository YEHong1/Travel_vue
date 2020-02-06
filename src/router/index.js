import Vue from 'vue'
import Router from 'vue-router'
import Home from '../Pages/home/Home'
import List from '../Pages/list/List'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/list',
            name: 'List',
            component: List
        }
    ]
})
