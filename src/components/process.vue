<template>
  <section class="py-20 bg-amber-900 text-white">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <Badge class="bg-white text-amber-900 px-4 py-2 rounded-full text-sm font-medium mb-4">
          Notre processus
        </Badge>
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          De la plantation à 
          <span class="text-amber-200">votre tasse</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Étape 1 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <Sprout class="w-8 h-8 text-amber-200" />
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-amber-200 text-amber-900 rounded-full flex items-center justify-center font-bold">
              1
            </div>
          </div>
          <h3 class="text-xl font-bold mb-3">Sélection rigoureuse</h3>
          <p class="text-amber-100">
            Nous sélectionnons les meilleurs grains dans les plantations du monde entier.
          </p>
        </div>

        <!-- Étape 2 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <Flame class="w-8 h-8 text-amber-200" />
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-amber-200 text-amber-900 rounded-full flex items-center justify-center font-bold">
              2
            </div>
          </div>
          <h3 class="text-xl font-bold mb-3">Torréfaction artisanale</h3>
          <p class="text-amber-100">
            Chaque lot est torréfié avec précision pour révéler ses arômes uniques.
          </p>
        </div>

        <!-- Étape 3 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <Scale class="w-8 h-8 text-amber-200" />
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-amber-200 text-amber-900 rounded-full flex items-center justify-center font-bold">
              3
            </div>
          </div>
          <h3 class="text-xl font-bold mb-3">Contrôle qualité</h3>
          <p class="text-amber-100">
            Tests rigoureux pour garantir une qualité exceptionnelle à chaque lot.
          </p>
        </div>

        <!-- Étape 4 -->
        <div class="text-center group">
          <div class="relative mb-6">
            <div class="w-20 h-20 bg-amber-800 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
              <Package class="w-8 h-8 text-amber-200" />
            </div>
            <div class="absolute -top-2 -right-2 w-8 h-8 bg-amber-200 text-amber-900 rounded-full flex items-center justify-center font-bold">
              4
            </div>
          </div>
          <h3 class="text-xl font-bold mb-3">Livraison fraîche</h3>
          <p class="text-amber-100">
            Emballage protecteur et livraison express pour préserver la fraîcheur.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Sprout, Flame, Scale, Package, Badge } from 'lucide-vue-next';
</script>