import Vue from 'vue'
import Router from 'vue-router'
import App from "./App";
import HelloWorld from "./components/HelloWorld";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
        {
            path: '/',
            name: 'home',
            component: App
        },
        {
            path: '/lavori',
            name: 'lavori',
            component: HelloWorld
        },
    ]
})