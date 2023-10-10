import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/tabela',
      name: 'tabelas',
      component: () => import('../views/TabelaView.vue')
    },
    {
      path: '/artilharia',
      name: 'artilharia',
      component: () => import('../views/ArtilhariaView.vue')
    },
    {
      path: '/chaveamento',
      name: 'chaveamento',
      component: () => import('../views/ChaveamentoView.vue')
    },
    {
      path: '/jogos',
      name: 'jogos',
      component: () => import('../views/JogosView.vue')
    },
  ]
})

export default router
