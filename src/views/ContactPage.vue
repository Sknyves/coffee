<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-amber-900 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl lg:text-6xl font-bold mb-6">Contact</h1>
        <p class="text-xl text-amber-100 max-w-2xl mx-auto">
          Une question ? Un projet ? Nous sommes à votre écoute.
        </p>
      </div>
    </section>

    <!-- Contact -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Formulaire -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            <form class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-gray-700 mb-2">Prénom</label>
                  <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                </div>
                <div>
                  <label class="block text-gray-700 mb-2">Nom</label>
                  <input type="text" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                </div>
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Email</label>
                <input type="email" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Sujet</label>
                <select class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500">
                  <option>Question générale</option>
                  <option>Commande</option>
                  <option>Partenaire</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-700 mb-2">Message</label>
                <textarea rows="6" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
              </div>
              <button type="submit" class="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                Envoyer le message
              </button>
            </form>
          </div>

          <!-- Informations -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Nos coordonnées</h2>
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <MapPin class="w-6 h-6 text-amber-900 mt-1" />
                <div>
                  <h3 class="font-bold text-gray-900">Adresse</h3>
                  <p class="text-gray-600">123 Rue du Café<br>75001 Paris, France</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <Phone class="w-6 h-6 text-amber-900 mt-1" />
                <div>
                  <h3 class="font-bold text-gray-900">Téléphone</h3>
                  <p class="text-gray-600">01 23 45 67 89</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <Mail class="w-6 h-6 text-amber-900 mt-1" />
                <div>
                  <h3 class="font-bold text-gray-900">Email</h3>
                  <p class="text-gray-600">contact@coffee.fr</p>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <Clock class="w-6 h-6 text-amber-900 mt-1" />
                <div>
                  <h3 class="font-bold text-gray-900">Horaires</h3>
                  <p class="text-gray-600">Lundi - Samedi: 9h - 19h<br>Dimanche: 10h - 17h</p>
                </div>
              </div>
            </div>

            <!-- Carte -->
            <div class="mt-8 bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p class="text-gray-600">Carte interactive ici</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next';
</script>