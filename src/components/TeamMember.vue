<template>
  <div class="group text-center">
    <!-- Photo du membre -->
    <div class="relative mb-6 overflow-hidden rounded-2xl">
      <div class="relative overflow-hidden rounded-2xl">
        <img 
          :src="member.image" 
          :alt="member.name"
          class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
        >
        <!-- Overlay au hover -->
        <div class="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/20 transition-all duration-500 flex items-center justify-center">
          <!-- Liens sociaux au hover -->
          <div class="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 space-y-3">
            <a 
              v-for="social in member.socials" 
              :key="social.name"
              :href="social.url" 
              class="block w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-amber-900 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <component :is="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      <!-- Badge spécialité -->
      <div 
        v-if="member.badge"
        class="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-amber-900 px-3 py-1 rounded-full text-sm font-semibold"
      >
        {{ member.badge }}
      </div>
    </div>

    <!-- Informations -->
    <div class="space-y-3">
      <h3 class="text-2xl font-bold text-gray-900 group-hover:text-amber-900 transition-colors duration-300">
        {{ member.name }}
      </h3>
      
      <p class="text-amber-900 font-semibold text-lg">
        {{ member.role }}
      </p>
      
      <p class="text-gray-600 leading-relaxed">
        {{ member.description }}
      </p>

      <!-- Spécialités -->
      <div 
        v-if="member.specialties && member.specialties.length > 0"
        class="flex flex-wrap gap-2 justify-center pt-2"
      >
        <span 
          v-for="specialty in member.specialties" 
          :key="specialty"
          class="bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-sm font-medium"
        >
          {{ specialty }}
        </span>
      </div>

      <!-- Années d'expérience -->
      <div 
        v-if="member.experience"
        class="flex items-center justify-center gap-2 pt-3 text-gray-500"
      >
        <Award class="w-4 h-4 text-amber-900" />
        <span class="text-sm font-medium">{{ member.experience }} d'expérience</span>
      </div>

      <!-- Citation -->
      <div 
        v-if="member.quote"
        class="relative pt-4 mt-4 border-t border-gray-200"
      >
        <Quote class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 text-amber-200 bg-white p-1" />
        <p class="text-gray-500 italic text-sm">
          "{{ member.quote }}"
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Award, Quote, Mail, Linkedin, Instagram } from 'lucide-vue-next';

defineProps({
  member: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      name: 'Nom du membre',
      role: 'Rôle',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
      description: 'Description du membre',
      experience: '10 ans',
      specialties: [],
      badge: '',
      quote: '',
      socials: []
    })
  }
});
</script>