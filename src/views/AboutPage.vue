<template>
  <div class="pt-20">
    <!-- Hero -->
    <section class="bg-amber-900 text-white py-20">
      <div class="container mx-auto px-6 text-center">
        <h1 class="text-5xl lg:text-6xl font-bold mb-6">Notre Histoire</h1>
        <p class="text-xl text-amber-100 max-w-2xl mx-auto">
          Depuis 1995, nous parcourons le monde à la recherche des meilleurs grains de café.
        </p>
      </div>
    </section>

    <!-- Histoire -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Notre Passion</h2>
            <p class="text-lg text-gray-600 mb-6">
              Tout a commencé dans un petit atelier de torréfaction artisanal. Aujourd'hui, 
              nous perpétuons cette tradition avec la même passion et le même engagement 
              pour la qualité.
            </p>
            <p class="text-lg text-gray-600 mb-8">
              Chaque grain de café que nous sélectionnons raconte une histoire : celle des 
              producteurs passionnés, des terroirs uniques et des savoir-faire ancestraux.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Globe class="w-8 h-8 text-amber-900" />
                </div>
                <h3 class="font-bold text-gray-900">15+ Pays</h3>
                <p class="text-gray-600 text-sm">Producteurs partenaires</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award class="w-8 h-8 text-amber-900" />
                </div>
                <h3 class="font-bold text-gray-900">25+ Prix</h3>
                <p class="text-gray-600 text-sm">Récompenses internationales</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Notre histoire"
              class="rounded-2xl shadow-2xl w-full h-96 object-cover"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Équipe -->
    <section class="py-20 bg-amber-50">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <Badge class="bg-amber-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Notre équipe
          </Badge>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Rencontrez notre équipe</h2>
          <p class="text-lg text-gray-600">
            Des passionnés qui mettent leur expertise au service de votre plaisir.
            Chaque membre apporte son savoir-faire unique pour vous offrir le meilleur café.
          </p>
        </div>

        <!-- Équipe principale -->
        <div class="mb-16">
          <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Fondateurs & Direction</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              v-for="member in foundingTeam" 
              :key="member.id"
              :member="member" 
            />
          </div>
        </div>

        <!-- Équipe technique -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 text-center mb-8">Maîtres Torréfacteurs</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember 
              v-for="member in roastingTeam" 
              :key="member.id"
              :member="member" 
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Valeurs -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-2xl mx-auto mb-16">
          <Badge class="bg-amber-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Nos valeurs
          </Badge>
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Ce qui nous guide</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center p-6">
            <div class="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart class="w-10 h-10 text-amber-900" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Passion</h3>
            <p class="text-gray-600">
              Une passion dévorante pour le café qui nous pousse à toujours chercher l'excellence.
            </p>
          </div>
          <div class="text-center p-6">
            <div class="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf class="w-10 h-10 text-amber-900" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Durabilité</h3>
            <p class="text-gray-600">
              Engagement envers une production responsable et le bien-être des producteurs.
            </p>
          </div>
          <div class="text-center p-6">
            <div class="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users class="w-10 h-10 text-amber-900" />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">Partage</h3>
            <p class="text-gray-600">
              Partager notre savoir et notre passion pour faire découvrir l'univers du café.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Badge, Globe, Award, Heart, Leaf, Users, Mail, Linkedin, Instagram } from 'lucide-vue-next';
import TeamMember from '../components/TeamMember.vue';

const foundingTeam = [
  {
    id: 1,
    name: 'Marie Dubois',
    role: 'Fondatrice & CEO',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: '25 ans d\'expérience dans la torréfaction artisanale et la sélection des meilleurs grains.',
    experience: '25 ans',
    specialties: ['Torréfaction', 'Sélection', 'Relations producteurs'],
    badge: 'Fondatrice',
    quote: 'Le café est bien plus qu\'une boisson, c\'est une expérience sensorielle unique.',
    socials: [
      { name: 'Email', icon: Mail, url: 'mailto:marie@coffee.fr' },
      { name: 'LinkedIn', icon: Linkedin, url: '#' },
    ]
  },
  {
    id: 2,
    name: 'Pierre Martin',
    role: 'Co-fondateur & Directeur Technique',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Expert en développement de machines de torréfaction et processus qualité.',
    experience: '20 ans',
    specialties: ['Innovation', 'Qualité', 'Processus'],
    badge: 'Co-fondateur',
    quote: 'L\'innovation au service de la tradition, pour un café toujours plus exceptionnel.',
    socials: [
      { name: 'Email', icon: Mail, url: 'mailto:pierre@coffee.fr' },
      { name: 'LinkedIn', icon: Linkedin, url: '#' },
    ]
  },
  {
    id: 3,
    name: 'Sophie Lambert',
    role: 'Directrice Commerciale',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Spécialiste des relations clients et du développement des partenariats internationaux.',
    experience: '15 ans',
    specialties: ['Commerce', 'Partnerships', 'Clientèle'],
    badge: 'Direction',
    quote: 'Chaque client mérite de découvrir le café qui correspond parfaitement à ses goûts.',
    socials: [
      { name: 'Email', icon: Mail, url: 'mailto:sophie@coffee.fr' },
      { name: 'LinkedIn', icon: Linkedin, url: '#' },
    ]
  }
];

const roastingTeam = [
  {
    id: 4,
    name: 'Jean Moreau',
    role: 'Maître Torréfacteur',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Artisan torréfacteur depuis 18 ans, il maîtrise parfaitement les profils de torréfaction.',
    experience: '18 ans',
    specialties: ['Torréfaction artisanale', 'Profils aromatiques', 'Contrôle qualité'],
    badge: 'Expert',
    quote: 'La torréfaction est une alchimie entre la science et l\'intuition.',
    socials: [
      { name: 'Email', icon: Mail, url: 'mailto:jean@coffee.fr' },
    ]
  },
  {
    id: 5,
    name: 'Lucie Petit',
    role: 'Spécialiste en Dégustation',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Palais d\'exception et formation en analyse sensorielle, elle garantit la qualité de chaque lot.',
    experience: '12 ans',
    specialties: ['Dégustation', 'Analyse sensorielle', 'Assurance qualité'],
    badge: 'Q-Grader',
    quote: 'Chaque café a une histoire à raconter, il suffit de savoir l\'écouter.',
    socials: [
      { name: 'Email', icon: Mail, url: 'mailto:lucie@coffee.fr' },
      { name: 'Instagram', icon: Instagram, url: '#' },
    ]
  },
  {
    id: 6,
    name: 'Thomas Leroy',
    role: 'Responsable Approvisionnement',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    description: 'Voyage dans les plantations du monde entier pour sélectionner les meilleurs grains.',
    experience: '10 ans',
    specialties: ['Sourcing', 'Relations producteurs', 'Développement durable'],
    badge: 'Voyageur',
    quote: 'La qualité d\'un café commence bien avant la torréfaction, dans le soin apporté à sa culture.',
    socials: [
      { name: 'Email', icon: Mail, url: 'mailto:thomas@coffee.fr' },
      { name: 'LinkedIn', icon: Linkedin, url: '#' },
    ]
  }
];
</script>