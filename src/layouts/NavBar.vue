<template>
  <nav class="fixed top-0 left-0 w-full z-50 transition-all duration-500" :class="navBackground">
    <div class="container mx-auto px-6">
      <div class="flex items-center justify-between py-4">
        <!-- Logo -->
        <router-link to="/" class="flex items-center gap-2">
          <Coffee class="w-8 h-8" :class="textColor"/>
          <span class="font-bold text-2xl" :class="textColor">Coffee.</span>
        </router-link>

        <!-- Navigation Desktop -->
        <div class="hidden lg:flex items-center gap-8">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.href" 
            class="font-medium transition-colors duration-300 hover:text-amber-900"
            :class="textColor"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Actions Desktop -->
        <div class="hidden lg:flex items-center gap-4">
          
          <!-- Bouton Panier avec badge -->
          <button 
            class="p-2 transition-colors duration-300 hover:text-amber-900 relative"
            :class="textColor"
            @click="cartStore.openCart()"
          >
            <ShoppingCart class="w-5 h-5" />
            <!-- Badge du nombre d'articles -->
            <span 
              v-if="cartStore.totalItems > 0"
              class="absolute -top-1 -right-1 bg-amber-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold animate-pulse"
            >
              {{ cartStore.totalItems > 99 ? '99+' : cartStore.totalItems }}
            </span>
          </button>
        </div>

        <!-- Menu Mobile -->
        <button 
          class="lg:hidden p-2 transition-colors duration-300 hover:text-amber-900" 
          :class="textColor"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <Menu class="w-6 h-6" />
        </button>
      </div>

      <!-- Menu Mobile Dropdown -->
      <div 
        v-if="isMobileMenuOpen" 
        class="lg:hidden bg-white shadow-2xl rounded-2xl p-6 mt-2 border border-gray-100"
      >
        <div class="space-y-4">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.href" 
            class="block py-2 font-medium text-gray-900 hover:text-amber-900 transition-colors duration-300"
            @click="isMobileMenuOpen = false"
          >
            {{ item.name }}
          </router-link>
          <div class="pt-4 border-t border-gray-200 flex items-center gap-4">
            
            <!-- Bouton Panier Mobile -->
            <button 
              class="p-2 text-gray-700 hover:text-amber-900 transition-colors duration-300 relative"
              @click="cartStore.openCart(); isMobileMenuOpen = false;"
            >
              <ShoppingCart class="w-5 h-5" />
              <span 
                v-if="cartStore.totalItems > 0"
                class="absolute -top-1 -right-1 bg-amber-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold"
              >
                {{ cartStore.totalItems > 99 ? '99+' : cartStore.totalItems }}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useCartStore } from '@/stores/cart';
import { 
  Coffee, 
  Menu, 
  Search, 
  User, 
  ShoppingCart 
} from 'lucide-vue-next';
import router from '@/router';

const cartStore = useCartStore();
const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

const navItems = [
  { name: 'Accueil', href: '/' },
  { name: 'Nos cafés', href: '/products' },
  { name: 'À propos', href: '/about' },
  { name: 'Processus', href: '/process' },
  { name: 'Témoignages', href: '/testimonials' },
  { name: 'Contact', href: '/contact' }
];

// Computed pour le background de la navbar
const navBackground = computed(() => {
  return isScrolled.value 
    ? 'bg-white/20 backdrop-blur-md shadow-lg' 
    : 'bg-amber-900';
});

// Computed pour la couleur du texte
const textColor = computed(() => {
  return isScrolled.value ? 'text-gray-900' : 'text-white';
});

// Gestion du scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>