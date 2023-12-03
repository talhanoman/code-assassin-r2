import { create } from 'zustand';

const useCartStore = create((set) => ({
    cartItems: [],
    addToCart: (item) => {
        set((state) => {
          const existingItem = state.cartItems.find((cartItem) => cartItem.courseGuid === item.courseGuid);
          if (!existingItem) {
            return { cartItems: [...state.cartItems, item] };
          } else {
            return state;
          }
        });
      },
    removeFromCart: (course) =>
    {        
        set((state) => ({ cartItems: state.cartItems.filter((item) => item.courseGuid !== course.courseGuid) }))
    },
        
}));

export default useCartStore;
