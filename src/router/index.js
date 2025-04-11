import { createApp } from 'vue'
import App from '../App.vue'
import { createRouter, createWebHashHistory } from "vue-router";

// Agregando páginas de la aplicación
import Bienvenida from "../Pages/Bienvenida.vue";
import Login from "../Pages/Login.vue";
import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";
import Calculadorav1 from "../Pages/Calculadorav1.vue";
import Calculadorav2 from "../Pages/Calculadorav2.vue";
import Eventos from "../Pages/Eventos.vue";
import Horario from "../Pages/Horario.vue";
import Horario1 from "../Pages/Horario1.vue";
import Padre from "../Pages/Padre.vue";
import Recorrido from "../Pages/Recorrido.vue";
import Recorrido2 from "../Pages/Recorrido2.vue";
import Componentes from "../Pages/Componentes.vue";


const routes = [
    {
        path: "/welcome",
        name: "bienvenida",
        component: Bienvenida,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/calculadorav1",
        name: "calculadorav1",
        component: Calculadorav1,
    },
    {
        path: "/calculadorav2",
        name: "calculadorav2",
        component: Calculadorav2,
    },
    {
        path: "/eventos",
        name: "eventos",
        component: Eventos,
    },
    {
        path: "/horario",
        name: "horario",
        component: Horario,
    },
    {
        path: "/horario1",
        name: "horario1",
        component: Horario1,
    },
    {
        path: "/recorrido",
        name: "recorrido",
        component: Recorrido,
    },
    {
        path: "/recorrido2",
        name: "recorrido2",
        component: Recorrido2,
    },
    {
        path: "/padre",
        name: "padre",
        component: Padre,
    },
    {
        path: "/componentes",
        name: "componentes",
        component: Componentes,
    },

];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;

createApp(App).use(router).mount('#app');
