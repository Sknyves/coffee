// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/Home.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import AboutPage from '@/views/AboutPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import Process from '@/components/process.vue';
import Temoignage from '@/components/temoignage.vue';
import CartSidebar from '@/components/CartSidebar.vue';

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/products', name: 'products', component: ProductsPage },
  { path: '/about', name: 'about', component: AboutPage },
  { path: '/contact', name: 'contact', component: ContactPage },
  { path: '/process', name: 'process', component: Process },
  { path: '/testimonials', name: 'testimonials', component: Temoignage },
  { path: '/cart', name: 'cart', component: CartSidebar },
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0, behavior: 'smooth' }
    }
});

export default router;