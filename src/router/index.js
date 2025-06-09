import { createRouter, createWebHistory } from 'vue-router';

import HomePublic from '../views/homePublico.vue';
import Login from '../views/login.vue';
import Register from '../views/register.vue';
import SelectRole from '../views/selectRol.vue';

const routes = [
  { path: '/', component: HomePublic },
  { path: '/select/:mode', component: SelectRole },
  { path: '/login/:role', component: Login },        // Aquí agregué :role
  { path: '/register/:role', component: Register }   // Aquí también
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
