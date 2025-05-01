import { create } from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  isMiniCartOpen: false,
  
  addToCart: (product) => set((state) => {
    const existingItem = state.cartItems.find(item => item.id === product.id);
    if (existingItem) {
      return {
        cartItems: state.cartItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      };
    }
    return { cartItems: [...state.cartItems, { ...product, quantity: 1 }] };
  }),
  
  removeFromCart: (productId) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== productId)
  })),
  
  updateQuantity: (productId, newQuantity) => set((state) => ({
    cartItems: state.cartItems.map(item =>
      item.id === productId 
        ? { ...item, quantity: Math.max(1, newQuantity) }
        : item
    )
  })),
  
  toggleMiniCart: () => set((state) => ({ isMiniCartOpen: !state.isMiniCartOpen })),
  
  clearCart: () => set({ cartItems: [] }),
  
  getTotalItems: () => useCartStore.getState().cartItems.reduce((total, item) => total + item.quantity, 0),
  
  getSubtotal: () => useCartStore.getState().cartItems.reduce(
    (total, item) => total + (item.price * item.quantity), 0
  ),
}));

export default useCartStore;