import { defineStore } from 'pinia';
import { useProductsStore } from './products';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isOpen: false
  }),

  getters: {
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },

    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
    },

    cartItems: (state) => {
      const productsStore = useProductsStore();
      return state.items.map(item => {
        const product = productsStore.getProductById(item.id);
        return {
          ...item,
          product: product || null
        };
      });
    },

    isCartEmpty: (state) => {
      return state.items.length === 0;
    },

    // Nouveau getter pour le récapitulatif de commande
    orderSummary: (state) => {
      const productsStore = useProductsStore();
      return state.items.map(item => {
        const product = productsStore.getProductById(item.id);
        return {
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          total: item.price * item.quantity,
          weight: item.weight,
          image: item.image
        };
      });
    }
  },

  actions: {
    addToCart(product, quantity = 1) {
      const existingItem = this.items.find(item => item.id === product.id);

      if (existingItem) {
        // Vérifier le stock
        const productsStore = useProductsStore();
        const productInfo = productsStore.getProductById(product.id);
        
        if (productInfo && existingItem.quantity + quantity > productInfo.stock) {
          throw new Error(`Stock insuffisant. Il ne reste que ${productInfo.stock} unités.`);
        }

        existingItem.quantity += quantity;
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: quantity,
          weight: product.weight || '250g'
        });
      }

      // Mettre à jour le stock
      const productsStore = useProductsStore();
      productsStore.updateProductStock(product.id, quantity);

      
      
      return this.items.find(item => item.id === product.id);
    },

    removeFromCart(productId) {
      const itemIndex = this.items.findIndex(item => item.id === productId);
      if (itemIndex > -1) {
        const removedItem = this.items[itemIndex];
        
        // Restaurer le stock
        const productsStore = useProductsStore();
        productsStore.updateProductStock(productId, -removedItem.quantity);
        
        this.items.splice(itemIndex, 1);
      }
    },

    updateQuantity(productId, newQuantity) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        const productsStore = useProductsStore();
        const productInfo = productsStore.getProductById(productId);

        if (productInfo && newQuantity > productInfo.stock) {
          throw new Error(`Stock insuffisant. Il ne reste que ${productInfo.stock} unités.`);
        }

        const quantityDiff = newQuantity - item.quantity;
        item.quantity = newQuantity;

        // Mettre à jour le stock
        productsStore.updateProductStock(productId, quantityDiff);
      }
    },

    clearCart() {
      // Restaurer tous les stocks
      const productsStore = useProductsStore();
      this.items.forEach(item => {
        productsStore.updateProductStock(item.id, -item.quantity);
      });

      this.items = [];
    },

    toggleCart() {
      this.isOpen = !this.isOpen;
    },

    openCart() {
      this.isOpen = true;
    },

    closeCart() {
      this.isOpen = false;
    },

    // Nouvelle méthode pour générer le message de commande
    generateOrderMessage(customerInfo = {}) {
      const itemsText = this.orderSummary.map(item => 
        `• ${item.name} - ${item.quantity}x ${item.price}€ = ${item.total.toFixed(2)}€`
      ).join('\n');

      const customerText = customerInfo.name ? `
👤 Client: ${customerInfo.name}
📞 Téléphone: ${customerInfo.phone}
🏠 Adresse: ${customerInfo.address || 'Non spécifiée'}
      ` : '';

      return `☕ Nouvelle Commande - Coffee.

${customerText}

📦 **DÉTAILS DE LA COMMANDE:**
${itemsText}

💰 **TOTAL: ${this.totalPrice.toFixed(2)}€**
🚚 Livraison: Gratuite

⏰ Heure: ${new Date().toLocaleString('fr-FR')}
🆔 Référence: #CMD${Date.now().toString().slice(-6)}`;
    }
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: 'coffee-cart',
        storage: localStorage
      }
    ]
  }
});