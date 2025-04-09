import { createRouter, createWebHashHistory } from "vue-router";

//Agregando  paginas de la aplicacion
import Home from "../Pages/Home.vue";
import About from "../Pages/About.vue";

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
},
{
    path: "/about",
    name: "About",
    component: About,
}
                
]

const router = createRouter({
    history:createWebHashHistory(import.meta.env.BASE_URL),
    routes,

});

export default router;
