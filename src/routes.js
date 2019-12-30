//import App from "./App";
import Lavori from "./components/Lavori";
import Dashboard from "./components/Dashboard";
import ListaClienti from "./components/ListaClienti";
import Login from "./components/Login";
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
            name: 'dashboard'
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
