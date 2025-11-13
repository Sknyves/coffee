<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <!-- En-tête -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <Badge class="bg-amber-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          Nos produits
        </Badge>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Découvrez notre
          <span class="text-amber-900">sélection</span>
        </h2>
        <p class="text-lg text-gray-600">
          Des cafés d'exception soigneusement sélectionnés pour vos moments les plus précieux.
        </p>
      </div>

      <!-- Produits -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard 
          v-for="product in featuredProducts" 
          :key="product.id"
          :product="product"
          @add-to-cart="handleAddToCart"
        />
      </div>

      <!-- Bouton Voir plus -->
      <div class="text-center mt-12">
        <router-link 
          to="/products" 
          class="inline-flex items-center gap-2 border-2 border-amber-900 hover:bg-amber-900 text-amber-900 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
        >
          <List class="w-5 h-5" />
          Voir tous les produits
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { List, Badge } from 'lucide-vue-next';
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';
import { computed } from 'vue';
import ProductCard from '@/components/ProductCard.vue';

const productsStore = useProductsStore();
const cartStore = useCartStore();

// Utiliser les produits populaires depuis le store
const featuredProducts = computed(() => productsStore.featuredProducts);

const handleAddToCart = async (product) => {
  try {
    await cartStore.addToCart(product, 1);
    // Optionnel: Afficher une notification de succès
    console.log('Produit ajouté au panier:', product.name);
  } catch (error) {
    console.error('Erreur:', error.message);
    // Afficher une erreur à l'utilisateur
  }
};
</script>