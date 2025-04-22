import { createRouter, createWebHistory } from 'vue-router';
import LoginEmployee from '../components/LoginEmployee.vue';
import PortalEmployee from '../components/PortalEmployee.vue';

const routes = [
  { path: '/', component: LoginEmployee },
  { path: '/portal', component: PortalEmployee }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
