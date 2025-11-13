<template>
  <!-- Overlay -->
  <div 
    v-if="cartStore.isOpen" 
    class="fixed inset-0 z-50 overflow-hidden"
  >
    <!-- Overlay de fond -->
    <div 
      class="absolute inset-0 bg-black/50 transition-opacity duration-300"
      @click="cartStore.closeCart()"
    />
    
    <!-- Panier -->
    <div 
      class="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transform transition-transform duration-300"
      :class="cartStore.isOpen ? 'translate-x-0' : 'translate-x-full'"
      @click.stop
    >
      <div class="flex flex-col h-full">
        <!-- En-tête -->
        <div class="flex items-center justify-between p-6 border-b border-gray-200">
          <div class="flex items-center gap-3">
            <ShoppingCart class="w-6 h-6 text-amber-900" />
            <h2 class="text-2xl font-bold text-gray-900">Mon Panier</h2>
          </div>
          <button 
            @click="cartStore.closeCart()"
            class="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X class="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <!-- Contenu du panier -->
        <div class="flex-1 overflow-y-auto">
          <div v-if="cartStore.isCartEmpty" class="flex flex-col items-center justify-center h-full p-6 text-center">
            <ShoppingCart class="w-24 h-24 text-gray-300 mb-6" />
            <h3 class="text-xl font-semibold text-gray-900 mb-2">Votre panier est vide</h3>
            <p class="text-gray-600 mb-6 max-w-sm">
              Découvrez nos cafés d'exception et commencez votre voyage sensoriel
            </p>
            <button 
              @click="cartStore.closeCart()"
              class="bg-amber-900 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Découvrir nos cafés
            </button>
          </div>

          <div v-else class="p-6 space-y-4">
            <!-- Articles -->
            <div 
              v-for="item in cartStore.cartItems" 
              :key="item.id"
              class="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-amber-300 transition-all duration-200"
            >
              <!-- Image -->
              <img 
                :src="item.image" 
                :alt="item.name"
                class="w-20 h-20 object-cover rounded-lg flex-shrink-0"
              />
              
              <!-- Détails -->
              <div class="flex-1 min-w-0">
                <h3 class="font-semibold text-gray-900 truncate">{{ item.name }}</h3>
                <p class="text-amber-900 font-bold text-lg mt-1">{{ item.price }} €</p>
                <p class="text-gray-500 text-sm">{{ item.weight }}</p>
                
                <!-- Contrôle quantité -->
                <div class="flex items-center gap-3 mt-3">
                  <button 
                    @click="updateQuantity(item.id, item.quantity - 1)"
                    class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-amber-900 hover:text-white hover:border-amber-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    :disabled="item.quantity <= 1"
                  >
                    <Minus class="w-3 h-3" />
                  </button>
                  
                  <span class="w-8 text-center font-semibold text-gray-900">{{ item.quantity }}</span>
                  
                  <button 
                    @click="updateQuantity(item.id, item.quantity + 1)"
                    class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-amber-900 hover:text-white hover:border-amber-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    :disabled="!item.product || item.quantity >= item.product.stock"
                  >
                    <Plus class="w-3 h-3" />
                  </button>
                  
                  <span class="text-sm text-gray-500 ml-2">
                    {{ item.product ? `Stock: ${item.product.stock}` : '' }}
                  </span>
                </div>
              </div>
              
              <!-- Supprimer -->
              <button 
                @click="cartStore.removeFromCart(item.id)"
                class="p-2 hover:bg-red-50 rounded-lg transition-colors duration-200 group"
              >
                <Trash2 class="w-4 h-4 text-red-400 group-hover:text-red-600" />
              </button>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div v-if="!cartStore.isCartEmpty" class="border-t border-gray-200 p-6 space-y-4 bg-white">
          <!-- Informations client (optionnel) -->
          <div v-if="showCustomerInfo" class="space-y-3 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h3 class="font-semibold text-amber-900 text-sm">Informations pour la commande</h3>
            <input 
              v-model="customerName"
              type="text" 
              placeholder="Votre nom *"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <input 
              v-model="customerPhone"
              type="tel" 
              placeholder="Votre téléphone *"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <textarea 
              v-model="customerAddress"
              rows="2"
              placeholder="Votre adresse de livraison"
              class="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            ></textarea>
          </div>

          <!-- Sous-total -->
          <div class="space-y-2">
            <div class="flex justify-between text-gray-600">
              <span>Sous-total</span>
              <span>{{ cartStore.totalPrice.toFixed(2) }} €</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>Livraison</span>
              <span class="text-green-600">Gratuite</span>
            </div>
            <div class="border-t pt-2 flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>{{ cartStore.totalPrice.toFixed(2) }} €</span>
            </div>
          </div>

          <!-- Boutons d'action -->
          <div class="space-y-3">

            <button 
              v-if="sendOrderViaWhatsApp"
              @click="showCustomerInfo = true"
              class="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <CreditCard class="w-5 h-5" />
              Commander ({{ cartStore.totalItems }})
            </button>
            
            <button 
              @click="cartStore.clearCart()"
              class="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Trash2 class="w-4 h-4" />
              Vider le panier
            </button>
          </div>

          <!-- Note -->
          <p class="text-xs text-gray-500 text-center">
            En cliquant sur "Commander", vous serez redirigé vers WhatsApp pour finaliser votre commande.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  X, 
  ShoppingCart, 
  Minus, 
  Plus, 
  Trash2, 
  CreditCard,
  MessageCircle
} from 'lucide-vue-next';
import { useCartStore } from '@/stores/cart';
import { ref, computed } from 'vue';

const cartStore = useCartStore();
const isSendingOrder = ref(false);
const showCustomerInfo = ref(false);
const customerName = ref('');
const customerPhone = ref('');
const customerAddress = ref('');

const updateQuantity = (productId, newQuantity) => {
  if (newQuantity < 1) {
    cartStore.removeFromCart(productId);
    return;
  }
  
  try {
    cartStore.updateQuantity(productId, newQuantity);
  } catch (error) {
    alert(error.message);
  }
};

// Générer le message WhatsApp
const generateWhatsAppMessage = () => {
  const items = cartStore.cartItems.map(item => 
    `• ${item.name} - ${item.quantity}x ${item.price}€ = ${(item.quantity * item.price).toFixed(2)}€`
  ).join('\n');

  const customerInfo = customerName.value ? `
👤 Client: ${customerName.value}
📞 Téléphone: ${customerPhone.value}
🏠 Adresse: ${customerAddress.value || 'Non spécifiée'}
  ` : '';

  return `☕ Nouvelle Commande - Coffee.

${customerInfo}

📦 **DÉTAILS DE LA COMMANDE:**
${items}

💰 **TOTAL: ${cartStore.totalPrice.toFixed(2)}€**
🚚 Livraison: Gratuite

⏰ Heure: ${new Date().toLocaleString('fr-FR')}
🆔 Référence: #CMD${Date.now().toString().slice(-6)}`;
};

// Envoyer la commande via WhatsApp
const sendOrderViaWhatsApp = () => {
  if (showCustomerInfo.value && (!customerName.value || !customerPhone.value)) {
    alert('Veuillez remplir votre nom et téléphone pour commander.');
    return;
  }

  isSendingOrder.value = true;

  try {
    const message = generateWhatsAppMessage();
    
    // Numéro de téléphone de l'entreprise (à remplacer par le vôtre)
    const phoneNumber = '33612345678'; // Format international sans +
    
    // Encoder le message pour URL
    const encodedMessage = encodeURIComponent(message);
    
    // Créer l'URL WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
    
    // Optionnel: Vider le panier après envoi
    setTimeout(() => {
      cartStore.clearCart();
      cartStore.closeCart();
      resetCustomerInfo();
    }, 1000);

  } catch (error) {
    console.error('Erreur lors de l\'envoi vers WhatsApp:', error);
    alert('Erreur lors de l\'envoi de la commande. Veuillez réessayer.');
  } finally {
    isSendingOrder.value = false;
  }
};

const resetCustomerInfo = () => {
  customerName.value = '';
  customerPhone.value = '';
  customerAddress.value = '';
  showCustomerInfo.value = false;
};
</script>