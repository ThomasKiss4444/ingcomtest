import { createRouter, createWebHistory } from 'vue-router'
import ListView from '../views/ListView.vue'
import LIST_TYPES from "../classes/ListTypes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'list',
      component: () => import('../views/ListView.vue'),
      props: {
        title: 'Hirdetések',
        listType: LIST_TYPES.ALL,
      }
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: () => import('../views/ListView.vue'),
      props: {
        title: 'Kedvencek',
        listType: LIST_TYPES.FAVORITES,
      }
    },
    {
      path: '/details/:itemId',
      name: 'details',
      component: () => import('../views/DetailsView.vue')
    }
  ]
})

export default router
