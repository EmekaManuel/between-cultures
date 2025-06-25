// store/cartStore.ts
import { create } from "zustand";
import { CartStore } from "../types/store";

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (product, size, color) =>
    set((state) => {
      const existingItem = state.items.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === size &&
          item.selectedColor === color
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id &&
            item.selectedSize === size &&
            item.selectedColor === color
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          { ...product, quantity: 1, selectedSize: size, selectedColor: color },
        ],
      };
    }),

  // Fixed removeItem to handle composite keys
  removeItem: (compositeId) =>
    set((state) => ({
      items: state.items.filter((item) => {
        const itemCompositeId = `${item.id}-${item.selectedSize}-${item.selectedColor}`;
        return itemCompositeId !== compositeId;
      }),
    })),

  // Fixed updateQuantity to handle composite keys
  updateQuantity: (compositeId, quantity) =>
    set((state) => ({
      items:
        quantity === 0
          ? state.items.filter((item) => {
              const itemCompositeId = `${item.id}-${item.selectedSize}-${item.selectedColor}`;
              return itemCompositeId !== compositeId;
            })
          : state.items.map((item) => {
              const itemCompositeId = `${item.id}-${item.selectedSize}-${item.selectedColor}`;
              return itemCompositeId === compositeId
                ? { ...item, quantity }
                : item;
            }),
    })),

  clearCart: () => set({ items: [] }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  getTotalItems: () =>
    get().items.reduce((total, item) => total + item.quantity, 0),
  getTotalPrice: () =>
    get().items.reduce((total, item) => total + item.price * item.quantity, 0),
}));
