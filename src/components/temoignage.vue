<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <Badge class="bg-amber-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
          Témoignages
        </Badge>
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Ce que disent 
          <span class="text-amber-900">nos clients</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Témoignage 1 -->
        <div class="bg-amber-50 rounded-2xl p-8 relative">
          <div class="flex text-amber-400 mb-4">
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5 fill-current" />
          </div>
          <p class="text-gray-700 mb-6 italic">
            "Le Brésil Santos a complètement transformé mes matinées. Un café d'une douceur exceptionnelle, je ne peux plus m'en passer !"
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
              <User class="w-6 h-6 text-amber-900" />
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Marie L.</h4>
              <p class="text-gray-600 text-sm">Client fidèle depuis 2 ans</p>
            </div>
          </div>
          <Quote class="absolute bottom-4 right-4 w-8 h-8 text-amber-200" />
        </div>

        <!-- Témoignage 2 -->
        <div class="bg-amber-50 rounded-2xl p-8 relative">
          <div class="flex text-amber-400 mb-4">
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5 fill-current" />
          </div>
          <p class="text-gray-700 mb-6 italic">
            "La qualité est au rendez-vous à chaque commande. Service client impeccable et cafés toujours frais."
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
              <User class="w-6 h-6 text-amber-900" />
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Pierre D.</h4>
              <p class="text-gray-600 text-sm">Barista professionnel</p>
            </div>
          </div>
          <Quote class="absolute bottom-4 right-4 w-8 h-8 text-amber-200" />
        </div>

        <!-- Témoignage 3 -->
        <div class="bg-amber-50 rounded-2xl p-8 relative">
          <div class="flex text-amber-400 mb-4">
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5 fill-current" />
            <Star class="w-5 h-5" />
          </div>
          <p class="text-gray-700 mb-6 italic">
            "L'Éthiopie Yirgacheffe est une révélation ! Des arômes floraux incroyables que je n'avais jamais trouvés ailleurs."
          </p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center">
              <User class="w-6 h-6 text-amber-900" />
            </div>
            <div>
              <h4 class="font-bold text-gray-900">Sophie M.</h4>
              <p class="text-gray-600 text-sm">Amateur de café</p>
            </div>
          </div>
          <Quote class="absolute bottom-4 right-4 w-8 h-8 text-amber-200" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Star, User, Quote, Badge } from 'lucide-vue-next';
</script>