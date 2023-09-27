<template>
  <link
    href="https://fonts.googleapis.com/css?family=Raleway"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />

  <div
    v-if="basket"
    class="basket"
    style="display: flex; flex-direction: column; align-items: center"
  >
    <div class="totalPrice">
      <h3>{{ $t("totalPrice") }} {{ totalPrice }}$</h3>
    </div>
    <div v-for="(item, index) in basket" :key="item.id" class="basketicerik">
      <h1 style="font-size: 80%; margin-left: 15px">{{ item.title }}</h1>
      <img
        :src="item.thumbnail"
        alt=""
        style="width: 35%; height: 100px; margin-left: 20px"
      />
      <h1 style="font-size: 80%; margin-left: 20px">{{ item.price }}$</h1>

      <button
        @click="removeFromCart(item)"
        style="
          margin-left: 4%;
          background-color: rgba(128, 128, 128, 0.747);
          color: black;
          font-size: 20px;
          border: none;
          border-radius: 5px;
        "
      >
        <i class="fa fa-trash-o"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { BasketStore } from "@/stores/basket.js";

export default {
  data() {
    return {
      basket: [],
    };
  },
  created() {
    this.fetchBasketFromLocalStorage();
  },
  methods: {
    fetchBasketFromLocalStorage() {
      const basketItems = BasketStore();
      basketItems.fetchFromLocalStorage();
      this.basket = basketItems.items;
    },
    removeFromCart(index) {
      // this.basket.splice(index, 1);
      const basketStore = BasketStore();
      basketStore.localInit();
      basketStore.removeFromBasket(index);
      // this.updateLocalStorage();
    },
    updateLocalStorage() {
       localStorage.setItem("basketItems", JSON.stringify(this.basket));
    },
    incrementQuantity(index) {
      this.basket[index].quantity++;
      this.updateLocalStorage();
    },
    decrementQuantity(index) {
      if (this.basket[index].quantity > 1) {
        this.basket[index].quantity--;
        this.updateLocalStorage();
      }
    },
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (const item of this.basket) {
        total += item.price;
      }
      return total;
    },
  },
  mounted() {
    this.fetchBasketFromLocalStorage();
  },
};
</script>

<style>
.basketicerik {
  margin-top: 5%;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  background-color: rgba(12, 12, 12, 0.258);
}
.basket {
  height: 99%;
  overflow-y: scroll;
}
.totalPrice {
  background-color: rgba(12, 12, 12, 0.258);
  color: black;
  border-radius: 10%;
  margin-top: 15px;
}
</style>
