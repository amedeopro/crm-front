//import App from "./App";
import Lavori from "./components/Lavori";
import Dashboard from "./components/Dashboard";
import ListaClienti from "./components/ListaClienti";
import InserisciCliente from "./components/InserisciCliente";

//Vue.use(VueRouter)

export const routes = [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/lavori',
            component: Lavori
        },
        {
            path: '/clienti',
            component: ListaClienti
        },
        {
            path: '/inserisciclienti',
            component: InserisciCliente
        }
]