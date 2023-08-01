import {createRouter, createWebHistory} from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Usuario from '@/views/UsuarioView.vue'
import loginView from '@/views/LoginView.vue'
import DashboardView from "@/views/DashboardView.vue";
import PrincipalView from "@/views/PrincipalView.vue";
import MostrarUsuariosView from "@/views/MostrarUsuariosView.vue";

import PokemonView from "@/views/PokemonView.vue";

import {useUsuarioStore} from "@/store/UsuarioStore";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Principal',
            component: PrincipalView
        },
        {
            path: '/login',
            name: 'login',
            component: loginView
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView,
            meta: {
                requiresAuth: true,
            },
            children: [
                {
                    path: '/Pokemon',
                    name: 'pokemon',
                    component: PokemonView
                },
                {
                    path: '',
                    name: 'inicio',
                    component: Inicio
                },
                {
                    path: '/usuario',
                    name: 'usuario',

                },
                {
                    path: '/usuarios/mostrarusuarios',
                    name: 'mostrarusuarios',
                    component: MostrarUsuariosView
                }
            ]

        },


    ]
})

// Navigation guard to check if the user is already authenticated (has a token)
router.beforeEach((to, from, next) => {
    const authToken = useUsuarioStore().usuario._token;

    // If the user is already authenticated and tries to access the login page,
    // redirect them to another page (e.g., dashboard)
    if (to.name === 'login' && authToken) {
        next('/dashboard');
    } else {
        next();
    }
});

// Add navigation guard to check for authentication token
router.beforeEach((to, from, next) => {
    // Check if the route requires authentication
    if (to.matched.some((route) => route.meta.requiresAuth)) {
        // Get the token from the Pinia store
        const authToken = useUsuarioStore().usuario._token;

        // If the user is authenticated (has a token), allow access to the route
        if (authToken) {
            next();
        } else {
            // If the user is not authenticated, redirect to the login page
            next('/login');
        }
    } else {
        // For public routes, allow access without authentication
        next();
    }
});




export default router
