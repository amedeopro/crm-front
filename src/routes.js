//import App from "./App";
import Lavori from "./components/Lavori";
import Dashboard from "./components/Dashboard";

//Vue.use(VueRouter)

export const routes = [
        {
            path: '/',
            component: Dashboard
        },
        {
            path: '/lavori',
            component: Lavori
        }
]