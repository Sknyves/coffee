<template>
  <div class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
    <!-- Image du produit -->
    <div class="relative overflow-hidden">
      <img 
        :src="product.image" 
        :alt="product.name"
        class="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
      >
      
      <!-- Badges -->
      <div class="absolute top-4 left-4 flex flex-col gap-2">
        <span 
          v-if="product.isNew"
          class="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
        >
          Nouveau
        </span>
        <span 
          v-if="product.isPopular"
          class="bg-amber-900 text-white px-3 py-1 rounded-full text-xs font-semibold"
        >
          Populaire
        </span>
        <span 
          v-if="product.isOrganic"
          class="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold"
        >
          Bio
        </span>
      </div>

      <!-- Actions rapides -->
      <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-2">
        <button 
          class="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-amber-900 hover:text-white transition-all duration-300 transform hover:scale-110"
          @click="toggleWishlist"
        >
          <Heart class="w-4 h-4" :class="{ 'fill-red-500 text-red-500': product.isWishlisted }" />
        </button>
        <button 
          class="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-amber-900 hover:text-white transition-all duration-300 transform hover:scale-110"
          @click="$emit('quickView', product)"
        >
          <Eye class="w-4 h-4" />
        </button>
      </div>

      <!-- Stock -->
      <div class="absolute bottom-4 left-4">
        <span 
          class="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-medium"
        >
          Stock: {{ product.stock }}
        </span>
      </div>

      <!-- Overlay au hover -->
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
    </div>

    <!-- Contenu -->
    <div class="p-6">
      <!-- En-tête -->
      <div class="flex items-start justify-between mb-3">
        <div>
          <h3 class="text-xl font-bold text-gray-900 group-hover:text-amber-900 transition-colors duration-300 line-clamp-1">
            {{ product.name }}
          </h3>
          <p class="text-gray-500 text-sm mt-1">{{ product.origin }}</p>
        </div>
        <div class="flex items-center gap-1">
          <Star 
            v-for="star in 5" 
            :key="star"
            class="w-4 h-4"
            :class="star <= product.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'"
          />
          <span class="text-gray-500 text-sm ml-1">({{ product.reviewCount }})</span>
        </div>
      </div>

      <!-- Description -->
      <p class="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">
        {{ product.description }}
      </p>

      <!-- Caractéristiques -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="characteristic in product.characteristics" 
          :key="characteristic"
          class="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
        >
          {{ characteristic }}
        </span>
      </div>

      <!-- Prix et CTA -->
      <div class="flex items-center justify-between">
        <div class="flex items-baseline gap-2">
          <span class="text-2xl font-bold text-amber-900">{{ product.price }} €</span>
          <span 
            v-if="product.originalPrice"
            class="text-gray-400 line-through text-sm"
          >
            {{ product.originalPrice }} €
          </span>
          <span 
            v-if="product.discount"
            class="text-red-500 text-sm font-semibold"
          >
            -{{ product.discount }}%
          </span>
        </div>

        <button 
          class="bg-amber-900 hover:bg-amber-800 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 group/btn flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          @click="addToCart"
          :disabled="isAddingToCart || product.stock === 0"
        >
          <ShoppingCart 
            class="w-5 h-5" 
            :class="{ 'animate-spin': isAddingToCart }"
          />
          <span class="max-w-0 group-hover/btn:max-w-32 overflow-hidden transition-all duration-300 text-sm font-medium whitespace-nowrap">
            {{ product.stock === 0 ? 'Rupture' : 'Ajouter' }}
          </span>
        </button>
      </div>

      <!-- Livraison -->
      <div class="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
        <Truck class="w-4 h-4 text-green-600" />
        <span class="text-green-600 text-sm font-medium">Livraison gratuite</span>
        <span class="text-gray-400 text-sm">•</span>
        <span 
          class="text-sm font-medium"
          :class="product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-amber-600' : 'text-red-600'"
        >
          {{ product.stock > 10 ? 'En stock' : product.stock > 0 ? `Plus que ${product.stock}` : 'Rupture' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Star, ShoppingCart, Heart, Eye, Truck } from 'lucide-vue-next';
import { useProductsStore } from '@/stores/products';
import { useCartStore } from '@/stores/cart';
import { ref } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['quickView']);

const productsStore = useProductsStore();
const cartStore = useCartStore();
const isAddingToCart = ref(false);

const addToCart = async () => {
  if (props.product.stock === 0) return;

  isAddingToCart.value = true;
  try {
    await cartStore.addToCart(props.product, 1);
    // Vous pourriez ajouter une notification toast ici
    console.log('Produit ajouté au panier:', props.product.name);
  } catch (error) {
    console.error('Erreur:', error.message);
    // Afficher une erreur à l'utilisateur
  } finally {
    isAddingToCart.value = false;
  }
};

const toggleWishlist = () => {
  productsStore.toggleWishlist(props.product.id);
};
</script>

<style scoped>
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>