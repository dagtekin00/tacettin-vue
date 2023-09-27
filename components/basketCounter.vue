<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div>
    <nuxt-link to="/basket"
      ><i
        class="fa fa-shopping-basket"
        id="fa-basket"
        style="font-size: 250%"
      ></i>
    </nuxt-link>
    <span class="basketCount"> {{ counting }}</span>
  </div>
</template>
<script setup lang="ts">
import { BasketStore } from "@/stores/basket.js";
import { ref, watch } from "vue";

const state = BasketStore();

let counting = ref("0");
watch(
  () => state,
  (newValue, oldValue) => {
    console.log(state.items);
    console.log(state.items.length);

    counting.value = state.items.length.toString();
  },
  { deep: true, immediate: true }
);
</script>
<style>
.basketCount {
  position: absolute;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 3px 6px;
  font-size: 12px;
}
</style>
