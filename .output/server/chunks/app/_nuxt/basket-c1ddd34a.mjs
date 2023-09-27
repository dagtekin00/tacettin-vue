import { y as defineStore } from '../server.mjs';

const BasketStore = defineStore("basket", {
  state: () => ({
    items: []
  }),
  actions: {
    ///@item Add ITEM
    addToBasket(item) {
      this.items.push(item);
      this.writeToLocalStorage();
    },
    localInit() {
      if (localStorage.getItem("basket") == null) {
        localStorage.setItem("basket", "[]");
      }
    },
    fetchFromLocalStorage() {
    },
    writeToLocalStorage() {
      localStorage.setItem("basket", JSON.stringify(this.items));
    },
    fetchBasketFromLocalStorage() {
      this.fetchFromLocalStorage();
    },
    removeFromBasket(index) {
      this.items.splice(index, 1);
      this.writeToLocalStorage();
    }
  },
  getters: {
    calculateTotal() {
      let total = 0;
      for (const item of this.items) {
        total += item.price * item.quantity;
      }
      return total.toFixed(2);
    },
    totalPrice() {
      let total = 0;
      for (const item of this.items) {
        total += item.price * item.quantity;
      }
      return total.toFixed(2);
    }
  }
});

export { BasketStore as B };
//# sourceMappingURL=basket-c1ddd34a.mjs.map
