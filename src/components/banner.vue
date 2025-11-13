<template>
  <div class="relative banner bg-white/50 flex items-center justify-start w-full h-screen overflow-hidden">

    <!-- Contenu principal -->
    <div class="relative z-10 max-w-2xl mx-8 lg:mx-16 mt-16">
      <div class="space-y-6">
        <Badge class="bg-amber-900/80 text-white px-4 py-2 rounded-full text-sm font-medium">
          <Star class="w-4 h-4 inline mr-1" />
          Café d'exception
        </Badge>
        
        <h1 class="text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
          Premium
          <span class="text-amber-200">Coffee</span>
        </h1>
        
        <p class="text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl drop-shadow-lg">
          Découvrez l'art du café authentique. Nos grains soigneusement sélectionnés et torréfiés avec passion vous offrent une expérience sensorielle unique à chaque tasse.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 pt-4">
          <router-link to="/products" class="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
            <ShoppingBag class="w-5 h-5" />
            Découvrir nos cafés
          </router-link>
          <router-link to="/about" class="border-2 border-white hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2">
            <Play class="w-5 h-5" />
            Voir notre histoire
          </router-link>
        </div>
      </div>
    </div>

    <!-- Indicateur de scroll -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
      <ChevronDown class="w-6 h-6 text-white" />
    </div>

    <!-- Overlay pour meilleure lisibilité -->
    <div class="absolute inset-0 bg-black/30 z-0"></div>
  </div>
</template>

<script setup>
import router from '@/router';
import { 
  Coffee, 
  Menu, 
  Search, 
  User, 
  ShoppingCart, 
  Star, 
  ShoppingBag, 
  Play, 
  ChevronDown,
  Badge 
} from 'lucide-vue-next';
</script>

<style scoped>
.banner {
  background: url('/coffee.jpg') center/cover no-repeat;
}

/* Animation douce pour l'apparition */
.banner > * {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>