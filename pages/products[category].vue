<template>
  <link
    href="https://fonts.googleapis.com/css?family=Raleway"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <div class="mid">
    <div class="right">
      <b>
        <div class="productstxt">
          <span class="abouttxt">{{ $t("products") }}</span
          ><br />
          <div class="productshr">
            <hr style="border: none; border-top: 2px solid rgb(0, 0, 0)" />
          </div></div
      ></b>
      <div>
        <loading-overlay
          :active="loading"
          :can-cancel="false"
        ></loading-overlay>
        <div v-if="!loading">
          <p>{{ veri }}</p>
        </div>
      </div>
      <form class="filter-form" @submit.prevent="filterForm">
        <label for="category" class="categorytxt">{{ $t("category") }}</label>
        <select
          id="category"
          name="category"
          ref="categorySelecter"
          class="select"
          v-model="selectedCategory"
        >
          <option
            v-for="(category, index) in categories"
            :key="index"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
        <button type="submit" class="submit">
          {{ $t("tosort") }}
        </button>
      </form>

      <h1 id="productTitle" ref="productTitle"></h1>
      <div class="icerik" v-if="itemId != null" style="text-align: center">
        <h1>{{ jsonProducts.products[itemId].title }}</h1>
        <h2>{{ jsonProducts.products[itemId].price }}$</h2>
        <p>{{ jsonProducts.products[itemId].description }}</p>
        <p>
          <b> {{ $t("category") }}: </b
          >{{ jsonProducts.products[itemId].category }}
        </p>
        <p>
          <b> {{ $t("brand") }}: </b>{{ jsonProducts.products[itemId].brand }}
        </p>
        <p>
          <b> {{ $t("discountPercentage") }}: </b
          >{{ jsonProducts.products[itemId].discountPercentage }}
        </p>
        <p>
          <b> {{ $t("rating") }}: </b>{{ jsonProducts.products[itemId].rating }}
        </p>
        <img
          :src="jsonProducts.products[itemId].thumbnail"
          style="width: 50%; height: 200px"
        />
        <br />
        <button @click="toggleIcerik(itemId)" class="historygo">
          {{ $t("goback") }}
        </button>
        <button
          class="addtobasket"
          @click="addToBasket(jsonProducts.products[itemId])"
          style="z-index: 2"
        >
          {{ $t("addtobasket") }}
        </button>
      </div>

      <div v-if="productsLoaded == true" class="products-grid">
        <div
          v-for="(item, index) in jsonProducts.products"
          style="z-index: 1"
          :key="item.id"
          class="product"
          @click="toggleIcerik(index)"
        >
          <div class="containerid">
            <img :src="item.thumbnail" class="product-img" />
          </div>
          <h2 class="product-title">{{ item.title }}</h2>
          <div v-if="itemAdded" class="basket-notification">
            {{ $t("addedtocart") }}
          </div>
        </div>
      </div>
      <div
        style="display: flex; justify-content: center; align-items: center"
        v-else
      >
        <div class="progress progress-striped">
          <div class="progress-bar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BasketStore } from "@/stores/basket.js";
export default {
  data() {
    return {
      categories: {},
      jsonProducts: {
        products: [],
        basketItems: [],
      },
      itemId: null,
      productsLoaded: false,
      selectedCategory: "smartphones",
      basketItems: [],
      itemAdded: false,
      basketItemCount: 0,
    };
  },
  methods: {
    filterForm() {
      console.log(this.selectedCategory);
      localStorage.setItem(
        "selectedCategory",
        this.selectedCategory.toString()
      );
      return this.$router.push({
        path: `/products${this.selectedCategory}`,
      });
    },
    openProduct(item) {
      console.log("hello tacettin how are you");
    },
    toggleIcerik(itemId) {
      console.log(itemId);
      if (this.itemId === itemId) {
        this.itemId = null;
      } else {
        this.itemId = itemId;
      }
    },
    addToBasket(item) {
      const basketStore = BasketStore();
      basketStore.localInit();
      basketStore.addToBasket(item);
      basketStore.writeToLocalStorage();
      this.itemAdded = true;
      this.basketItemCount += 1;
      setTimeout(() => {
        this.itemAdded = false;
      }, 2000);
    },
    fetchProducts() {
      const url =
        this.selectedCategory === "all"
          ? "https://dummyjson.com/products"
          : `https://dummyjson.com/products/category/${this.$route.params.category}`;

      fetch(url)
        .then((res) => res.json())
        .finally(() => (this.productsLoaded = false))
        .then((data) => {
          this.jsonProducts = data;
          this.productsLoaded = true;
        })
        .catch((e) => console.log(e));
    },
    togglePopup() {
      const popup = document.getElementById("popup");
      popup.style.display = "block";
    },
  },
  async mounted() {
    console.log("konsol");
    try {
      const response = await fetch(`https://dummyjson.com/products/categories`);
      this.categories = await response.json();
    } catch (error) {
      console.log(error);
    }
    this.fetchProducts();
  },
};
</script>

<style>
img {
  width: 100%;
  height: 120px;
}

.product {
  width: 25%;
  height: 250px;
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  background-color: rgba(12, 12, 12, 0.258);
}

.products-grid {
  margin-top: 10%;
  width: auto;
  display: flex;
  flex-direction: row;
  margin-right: 10px;
}
.icerik {
  position: fixed;
  top: 10%;
  left: 23.6%;
  background-color: rgb(119, 119, 119);
  padding: 20px;
  width: 50%;
  height: auto;
  z-index: 2;
  border-radius: 5%;
}
.light-mode .icerik {
  background-color: white;
}
.basket-notification {
  background-color: rgba(4, 148, 7, 0.8);
  color: white;
  padding: 20px;
  border-radius: 5px;
  position: fixed;
  bottom: 90%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeInOut 2s forwards;
}

@keyframes fadeInOut {
  0%,
  100% {
    opacity: 0;
    transform: translateX(-50%) scale(0.5);
  }
  10%,
  90% {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
}

.addtobasket {
  border: none;
  padding: 2%;
  border-radius: 15%;
  background-color: rgb(74, 74, 74);
  color: white;
  transition: 0.3s;
  margin-left: 20px;
}
.progress {
  padding: 6px;
  width: 70%;
  background: rgb(227, 227, 227);
  border-radius: 20px;
}

.progress-bar {
  height: 10px;
  border-radius: 4px;
  transition: 0.4s linear;
  transition-property: width, background-color;
}

.progress-striped .progress-bar {
  background-color: #28d808;
  width: 100%;
  animation: progressAnimationStrike 6s;
}
.progress-striped {
  text-align: center;
  justify-content: center;
}

@keyframes progressAnimationStrike {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.productstxt {
  justify-content: space-around;
  font-family: "Raleway";
  margin-top: -5%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
.historygo {
  border: none;
  padding: 2%;
  border-radius: 15%;
  background-color: rgb(74, 74, 74);
  color: white;
}
.productshr {
  padding: 6px;
  width: 60%;
  margin-left: 10px;
}
.filter-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.categorytxt {
  background-color: rgba(255, 255, 255, 0.681);
  padding: 10px;
  margin-bottom: 5px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: 0.3s;
}
.categorytxt:hover {
  background-color: rgb(49, 48, 48);
  color: white;
}
.select {
  width: 50%;
  padding: 10px;
  border: none;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: rgba(255, 255, 255, 0.681);
  color: black;
  font-size: 18px;
  margin-bottom: 5px;
}
.submit {
  background-color: rgba(255, 255, 255, 0.681);
  padding: 10px;
  width: 30%;
  margin-bottom: 5px;
  border: none;
  border-radius: 5px;
  transition: 0.3s;
}
.submit:hover {
  background-color: rgb(49, 48, 48);
  color: white;
}
#fa-basket {
  color: rgba(255, 255, 255, 0.73);
}
#fa-basket:hover {
  color: rgb(0, 0, 0);
}
@media screen and (max-width: 1200px) and (min-width: 580px) {
  .icerik {
    width: 47.5%;
    height: auto;
    margin: 0 auto;
  }
  .icerik img {
    height: 30%;
  }
  .icerik h1 {
    font-size: 18px;
    margin-top: -5%;
  }
  .icerik h2 {
    font-size: 18px;
  }
  .icerik p {
    font-size: 15px;
  }
}
@media screen and (max-width: 580px) and (min-width: 340px) {
  .icerik {
    width: 60%;
    height: auto;
    margin: 0 auto;
    left: 17%;
  }
  .icerik img {
    height: 100%;
  }
  .icerik h1 {
    font-size: 20px;
    margin-top: -5%;
  }
  .icerik h2 {
    font-size: 18px;
  }
  .icerik p {
    font-size: 15px;
  }
}
</style>
