<template>
  <div class="pt-20">
    <!-- Hero Produits -->
    <section class="bg-amber-900 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl lg:text-6xl font-bold mb-6">Nos Cafés</h1>
        <p class="text-xl text-amber-100 max-w-2xl mx-auto">
          Découvrez notre sélection exclusive de cafés d'exception provenant des meilleures régions du monde.
        </p>
      </div>
    </section>

    <!-- Filtres et Recherche -->
    <section class="bg-white py-8 border-b">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
          <!-- Barre de recherche -->
          <div class="w-full lg:w-auto">
            <div class="relative max-w-md">
              <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Rechercher un café..."
                class="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                :value="productsStore.searchQuery"
                @input="productsStore.setSearchQuery($event.target.value)"
              >
            </div>
          </div>

          <!-- Filtres -->
          <div class="flex flex-wrap gap-4 justify-center">
            <button 
              v-for="filter in productsStore.filters" 
              :key="filter.id"
              class="px-6 py-3 rounded-full border border-amber-900 text-amber-900 hover:bg-amber-900 hover:text-white transition-all duration-300"
              :class="{ 'bg-amber-900 text-white': productsStore.activeFilter === filter.id }"
              @click="productsStore.setActiveFilter(filter.id)"
            >
              {{ filter.name }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Grille de produits -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <!-- En-tête résultats -->
        <div class="flex justify-between items-center mb-8">
          <p class="text-gray-600">
            {{ productsStore.filteredProducts.length }} 
            produit{{ productsStore.filteredProducts.length > 1 ? 's' : '' }} 
            trouvé{{ productsStore.filteredProducts.length > 1 ? 's' : '' }}
          </p>
          <div class="flex items-center gap-4">
            <span class="text-gray-600">Trier par:</span>
            <select class="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Popularité</option>
              <option>Prix croissant</option>
              <option>Prix décroissant</option>
              <option>Nouveautés</option>
            </select>
          </div>
        </div>

        <!-- Produits -->
        <div v-if="productsStore.isLoading" class="flex justify-center py-12">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-900"></div>
        </div>

        <div v-else-if="productsStore.filteredProducts.length === 0" class="text-center py-12">
          <Package class="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Aucun produit trouvé</h3>
          <p class="text-gray-600">Essayez de modifier vos critères de recherche ou de filtrage.</p>
        </div>

        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <ProductCard 
            v-for="product in productsStore.filteredProducts" 
            :key="product.id"
            :product="product"
            @quick-view="handleQuickView"
          />
        </div>

        <!-- Pagination -->
        <div class="flex justify-center mt-12">
          <div class="flex gap-2">
            <button 
              v-for="page in totalPages" 
              :key="page"
              class="w-10 h-10 rounded-lg border border-gray-300 hover:border-amber-900 hover:bg-amber-900 hover:text-white transition-all duration-300"
              :class="{ 'bg-amber-900 text-white border-amber-900': currentPage === page }"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useProductsStore } from '@/stores/products';
import { Search, Package } from 'lucide-vue-next';
import ProductCard from '@/components/ProductCard.vue';

const productsStore = useProductsStore();
const currentPage = ref(1);
const totalPages = ref(5);

const handleQuickView = (product) => {
  console.log('Vue rapide:', product);
  // Implémentez votre logique de vue rapide
};

onMounted(() => {
  productsStore.fetchProducts();
});
</script>