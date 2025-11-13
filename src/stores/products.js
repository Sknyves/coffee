import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Brésil Santos',
        price: 24.90,
        originalPrice: 29.90,
        discount: 17,
        image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Café doux et équilibré aux notes de noisette et de caramel. Parfait pour commencer la journée.',
        origin: 'Brésil, Minas Gerais',
        rating: 5,
        reviewCount: 128,
        characteristics: ['Doux', 'Équilibré', 'Noisette'],
        category: 'brasil',
        tags: ['mild', 'organic'],
        isNew: false,
        isPopular: true,
        isOrganic: true,
        stock: 50,
        weight: '250g'
      },
      {
        id: 2,
        name: 'Éthiopie Yirgacheffe',
        price: 29.90,
        image: 'https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Café floral et fruité aux arômes complexes de bergamote et de jasmin. Une expérience unique.',
        origin: 'Éthiopie, Yirgacheffe',
        rating: 4,
        reviewCount: 89,
        characteristics: ['Floral', 'Fruité', 'Complexe'],
        category: 'ethiopia',
        tags: ['mild', 'organic'],
        isNew: true,
        isPopular: false,
        isOrganic: true,
        stock: 35,
        weight: '250g'
      },
      {
        id: 3,
        name: 'Colombie Excelso',
        price: 26.90,
        image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Café corsé aux notes de cacao et d\'agrumes, parfait pour l\'espresso et les amateurs de corps.',
        origin: 'Colombie, Huila',
        rating: 5,
        reviewCount: 156,
        characteristics: ['Corsé', 'Cacao', 'Espresso'],
        category: 'colombia',
        tags: ['strong'],
        isNew: false,
        isPopular: true,
        isOrganic: false,
        stock: 42,
        weight: '250g'
      },
      {
        id: 4,
        name: 'Guatemala Antigua',
        price: 27.50,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Café riche et complexe avec des notes de chocolat noir et d\'épices douces.',
        origin: 'Guatemala, Antigua',
        rating: 4,
        reviewCount: 67,
        characteristics: ['Chocolat', 'Épicé', 'Complexe'],
        category: 'guatemala',
        tags: ['strong', 'organic'],
        isNew: true,
        isPopular: false,
        isOrganic: true,
        stock: 28,
        weight: '250g'
      },
      {
        id: 5,
        name: 'Kenya AA',
        price: 31.90,
        image: 'https://images.unsplash.com/photo-1561047029-3000c68339ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Café vif et acidulé aux notes de baies rouges et de tomate séchée.',
        origin: 'Kenya, Nyeri',
        rating: 5,
        reviewCount: 94,
        characteristics: ['Acidulé', 'Baies', 'Vif'],
        category: 'kenya',
        tags: ['strong'],
        isNew: false,
        isPopular: true,
        isOrganic: false,
        stock: 39,
        weight: '250g'
      },
      {
        id: 6,
        name: 'Sumatra Mandheling',
        price: 25.90,
        originalPrice: 28.90,
        discount: 10,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
        description: 'Café corsé et terreux aux notes de cèdre et de tabac, très long en bouche.',
        origin: 'Indonésie, Sumatra',
        rating: 4,
        reviewCount: 112,
        characteristics: ['Terreux', 'Corsé', 'Long'],
        category: 'indonesia',
        tags: ['strong', 'organic'],
        isNew: false,
        isPopular: false,
        isOrganic: true,
        stock: 45,
        weight: '250g'
      }
    ],
    filters: [
      { id: 'all', name: 'Tous les cafés' },
      { id: 'brasil', name: 'Brésil' },
      { id: 'ethiopia', name: 'Éthiopie' },
      { id: 'colombia', name: 'Colombie' },
      { id: 'organic', name: 'Bio' },
      { id: 'strong', name: 'Corsé' },
      { id: 'mild', name: 'Doux' }
    ],
    activeFilter: 'all',
    searchQuery: '',
    isLoading: false
  }),

  getters: {
    filteredProducts: (state) => {
      let filtered = state.products;

      // Filtre par catégorie
      if (state.activeFilter !== 'all') {
        filtered = filtered.filter(product => 
          product.category === state.activeFilter || 
          product.tags.includes(state.activeFilter)
        );
      }

      // Filtre par recherche
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.origin.toLowerCase().includes(query)
        );
      }

      return filtered;
    },

    featuredProducts: (state) => {
      return state.products.filter(product => product.isPopular).slice(0, 3);
    },

    newProducts: (state) => {
      return state.products.filter(product => product.isNew);
    },

    getProductById: (state) => {
      return (productId) => state.products.find(product => product.id === productId);
    },

    totalProducts: (state) => {
      return state.products.length;
    }
  },

  actions: {
    setActiveFilter(filter) {
      this.activeFilter = filter;
    },

    setSearchQuery(query) {
      this.searchQuery = query;
    },

    async fetchProducts() {
      this.isLoading = true;
      try {
        // Simuler un appel API
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Ici vous pourriez faire un appel à votre API
        // const response = await api.get('/products');
        // this.products = response.data;
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error);
      } finally {
        this.isLoading = false;
      }
    },

    toggleWishlist(productId) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.isWishlisted = !product.isWishlisted;
      }
    },

    updateProductStock(productId, quantity) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.stock -= quantity;
      }
    }
  }
});