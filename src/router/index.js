import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import MonstersView from '../views/MonstersView.vue';
import MonsterView from '../views/MonsterView.vue';

import MonsterForm from '../components/MonsterForm.vue';

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: HomeView,
      },
      {
         path: '/about',
         name: 'about',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('../views/AboutView.vue'),
      },
      {
         path: '/contact',
         name: 'contact',
         component: () => import('../views/ContactView.vue'),
      },
      {
         path: '/monsters',
         name: 'monsters',
         component: () => import('../views/MonstersView.vue'),
      },
      {
         path: '/monster/:slug',
         name: 'monster',
         component: () => import('../views/MonsterView.vue'),
      },
   ],
});

export default router;
