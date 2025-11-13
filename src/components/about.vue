<template>
  <section class="py-20 bg-amber-50">
    <div class="container mx-auto px-6">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative">
          <div class="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/about-coffee.jpg" 
              alt="Notre processus de torréfaction"
              class="w-full h-[500px] object-cover"
            >
          </div>
          <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-900 rounded-2xl"></div>
        </div>

        <!-- Contenu -->
        <div class="space-y-6">
          <Badge class="bg-amber-900 text-white px-4 py-2 rounded-full text-sm font-medium">
            Notre histoire
          </Badge>
          
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-900">
            L'art de la 
            <span class="text-amber-900">torréfaction</span>
          </h2>
          
          <p class="text-lg text-gray-600 leading-relaxed">
            Depuis 1995, nous parcourons le monde à la recherche des meilleurs grains de café. 
            Notre passion pour l'authenticité et la qualité nous guide dans chaque étape, 
            de la plantation à votre tasse.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-6 pt-6">
            <div class="text-center">
              <div class="flex items-center justify-center gap-2 mb-2">
                <Trophy class="w-8 h-8 text-amber-900" />
              </div>
              <h3 class="text-2xl font-bold text-amber-900">25+</h3>
              <p class="text-gray-600">Ans d'expérience</p>
            </div>
            <div class="text-center">
              <div class="flex items-center justify-center gap-2 mb-2">
                <Globe class="w-8 h-8 text-amber-900" />
              </div>
              <h3 class="text-2xl font-bold text-amber-900">15+</h3>
              <p class="text-gray-600">Pays producteurs</p>
            </div>
          </div>

          <router-link to="/about" class="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <BookOpen class="w-5 h-5" />
            Notre histoire
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Trophy, Globe, BookOpen, Badge } from 'lucide-vue-next';
</script>