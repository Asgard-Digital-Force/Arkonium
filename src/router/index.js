import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RessourcesView from '@/views/RessourcesView.vue'

const routes = [
    { path: '/', name: 'Home', component: HomeView },
    { path: '/ressources', name: 'Ressources', component: RessourcesView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
