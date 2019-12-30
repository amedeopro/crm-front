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
                console.log(store.getters)
                next()
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/lavori',
            component: Lavori
        },
        {
            path: '/clienti',
            component: ListaClienti
        },

]
