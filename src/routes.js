//import App from "./App";
import Lavori from "./components/Lavori";
import Dashboard from "./components/Dashboard";
import ListaClienti from "./components/ListaClienti";
import Login from "./components/Login";
import {store} from "@/store/store";
//Vue.use(VueRouter)

export const routes = [
        {
            path: '/',
            component: Login,
            name: 'login'
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard',
            beforeEnter: (to, from, next) => {
                if(!store.getters['auth/authenticated']){
                    return next({
                        name: 'login'
                    })
                }
                next()
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/lavori',
            component: Lavori,
            name: 'lavori',
            beforeEnter: (to, from, next) => {
                if(!store.getters['auth/authenticated']){
                    return next({
                        name: 'login'
                    })
                }
                next()
            }
        },
        {
            path: '/clienti',
            component: ListaClienti,
            name: 'clienti',
            beforeEnter: (to, from, next) => {
                if(!store.getters['auth/authenticated']){
                    return next({
                        name: 'login'
                    })
                }
                next()
            }
        },

]
