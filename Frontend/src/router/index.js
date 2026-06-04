import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import AdminView from '../views/AdminView.vue';
import UserView from '../views/UserView.vue';

const routes = [
  { path: '/', name: 'login', component: LoginView },
  { path: '/admin', name: 'admin', component: AdminView },
  { path: '/user', name: 'user', component: UserView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
