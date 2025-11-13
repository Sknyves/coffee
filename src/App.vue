<script setup>
import FooterSection from './layouts/FooterSection.vue';
import NavBar from './layouts/NavBar.vue';
import CartSidebar from './components/CartSidebar.vue';
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Navbar fixe -->
    <NavBar />
    
    <!-- Contenu principal avec padding pour la navbar fixe -->
    <main class="pt-20">
      <router-view />
    </main>
    
    <!-- Footer -->
    <FooterSection />

    <!-- Panier Sidebar -->
    <CartSidebar />
  </div>
</template>

<style>
/* Styles globaux pour les animations */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}

.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>