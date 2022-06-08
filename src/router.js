import Vue from 'vue'
import VueRouter from 'vue-router'

import Notas from './componentes/Notas.vue'
import Respuestas from './componentes/Respuestas.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/notas' },
        { path: '/notas', component: Notas },
        { path: '/respuestas', component: Respuestas },
    ]
})