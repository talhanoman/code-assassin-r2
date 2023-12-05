import { create } from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  cartTotal: 0,
  addToCart: (item) => {
    set((state) => {
      const existingItem = state?.cartItems?.find((cartItem) => cartItem?.course_guid === item?.course_guid);

      if (!existingItem) {
        return {
          cartItems: [...state.cartItems, item],
          cartTotal: state.getCartTotal() + item.course_price, // Update total when adding a new item
        };
      } else {
        return state;
      }
    });
  },
  removeFromCart: (course) => {
    set((state) => ({
      cartItems: state?.cartItems?.filter((item) => item?.course_guid !== course?.course_guid),
      cartTotal: state.getCartTotal() - course.course_price, // Update total when removing an item
    }));
  },
  getCartTotal: () => {
    return useCartStore.getState().cartItems.reduce((total, item) => total + item.course_price, 0);
  },
  emptyCart: () => {
    set((state) => ({
      cartItems: [],
      cartTotal: 0
    }));
  },
}));

export default useCartStore;

// course_category
// course_guid
// course_level
// course_price
// course_title
// date_created