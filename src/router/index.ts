import { createRouter, createWebHistory } from 'vue-router/auto';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL)
  // You don't need to pass the routes anymore,
  // the plugin writes it for you 🤖
});

export default router;
