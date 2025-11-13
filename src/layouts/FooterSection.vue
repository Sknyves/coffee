<template>
  <footer class="bg-gray-900 text-white">
    <!-- Newsletter -->
    <div class="bg-amber-900 py-16">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h3 class="text-3xl font-bold mb-4">Restez informé</h3>
          <p class="text-amber-100 mb-8 text-lg">
            Recevez nos dernières nouveautés et offres exclusives
          </p>
          <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre email"
              class="flex-1 px-4 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-300 border-0"
            >
            <button class="bg-white text-amber-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-100 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
              <Send class="w-5 h-5" />
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Liens principaux -->
    <div class="py-16">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-4 gap-12">
          <!-- Logo et description -->
          <div class="lg:col-span-2">
            <div class="flex items-center gap-3 mb-6">
              <Coffee class="w-10 h-10 text-amber-400" />
              <span class="font-bold text-3xl">Coffee.</span>
            </div>
            <p class="text-gray-400 mb-8 max-w-md text-lg leading-relaxed">
              Depuis 1995, nous vous offrons les meilleurs cafés du monde, 
              torréfiés avec passion et expertise pour vos moments les plus précieux.
            </p>
            <div class="flex gap-4">
              <a 
                v-for="social in socialLinks" 
                :key="social.name"
                :href="social.url" 
                class="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-900 transition-all duration-300 transform hover:scale-110"
              >
                <component :is="social.icon" class="w-5 h-5" />
              </a>
            </div>
          </div>

          <!-- Liens rapides -->
          <div>
            <h4 class="font-bold text-xl mb-6">Navigation</h4>
            <ul class="space-y-3">
              <li v-for="item in navItems" :key="item.name">
                <a 
                  :href="item.href" 
                  class="text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                >
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="font-bold text-xl mb-6">Contact</h4>
            <ul class="space-y-4">
              <li class="flex items-center gap-4 text-gray-400">
                <MapPin class="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span class="text-lg">123 Rue du Café, 75001 Paris</span>
              </li>
              <li class="flex items-center gap-4 text-gray-400">
                <Phone class="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span class="text-lg">01 23 45 67 89</span>
              </li>
              <li class="flex items-center gap-4 text-gray-400">
                <Mail class="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span class="text-lg">contact@coffee.fr</span>
              </li>
              <li class="flex items-center gap-4 text-gray-400">
                <Clock class="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span class="text-lg">Lun - Sam: 9h - 19h</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="border-t border-gray-800 py-8">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row justify-between items-center text-gray-400">
          <p class="text-lg mb-4 lg:mb-0">&copy; 2024 Coffee. Tous droits réservés.</p>
          <div class="flex gap-8">
            <a 
              v-for="link in legalLinks" 
              :key="link.name"
              :href="link.url" 
              class="hover:text-white transition-colors duration-300 text-lg"
            >
              {{ link.name }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { 
  Coffee, 
  Send, 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail,
  Clock
} from 'lucide-vue-next';

const navItems = [
  { name: 'Accueil', href: '#home' },
  { name: 'Nos cafés', href: '#products' },
  { name: 'À propos', href: '#about' },
  { name: 'Processus', href: '#process' },
  { name: 'Témoignages', href: '#testimonials' },
  { name: 'Contact', href: '#contact' }
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' }
];

const legalLinks = [
  { name: 'Mentions légales', url: '#' },
  { name: 'Politique de confidentialité', url: '#' },
  { name: 'CGV', url: '#' }
];
</script>