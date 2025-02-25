import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/LogIn.vue';

const routes = [
  { path: '/', component: HomeView }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
