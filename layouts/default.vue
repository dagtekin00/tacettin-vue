<template>
  <div class="main-container">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <video
      class="bg-video-about"
      src="@/images/starbg.mp4"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      ref="video"
    ></video>
    <div class="container">
      <div class="middle">
        <div class="leftBox">
          <div class="switcherandBasket">
            <div class="switcher">
              <langSwitcher />
            </div>
            <div class="lightdark">
              <input
                v-model="Color"
                class="checkbox"
                id="checkbox"
                @click="switchColor"
                type="checkbox"
                checked
              />
              <label class="toggle" for="checkbox">
                <i class="star"></i>
                <i class="star"></i>
                <i class="star"></i>
                <i class="star"></i>
                <i class="star"></i>
                <i class="star"></i>
                <i class="star"></i>
                <span class="disc"> <i></i><i></i><i></i> </span>
                <span class="cloud">
                  <i class="cloud__sub1"></i>
                  <i class="cloud__sub2"></i>
                </span>
              </label>
            </div>
            <div class="basketDefault">
              <BasketCounter />
            </div>
            <span class="basket-count">{{ basketItemCount }}</span>
          </div>
          <div class="imageAndPersonalInfoBox">
            <div class="image">
              <img src="../images/tacettin.jpg" alt="" class="imgg" />
            </div>
          </div>
          <nav class="menü">
            <ul>
              <li>
                <NuxtLink class="nxt" :to="localPath('/')">{{
                  $t("navabout")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink class="nxt" :to="localPath('/educations')">{{
                  $t("naveducations")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink class="nxt" :to="localPath('/projects')">{{
                  $t("navprojects")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink class="nxt" :to="localPath('/contact')">{{
                  $t("navcontact")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink class="nxt" :to="localPath('/products[category]')">{{
                  $t("navproducts")
                }}</NuxtLink>
              </li>
            </ul>
          </nav>
          <div class="skillBox">
            <div class="skill">
              <div class="skilltxt">
                <div class="txt1">
                  <span
                    ><b> {{ $t("skill") }}</b></span
                  >
                  <div class="hr1">
                    <hr style="border: none; border-top: 2px solid black" />
                  </div>
                </div>
              </div>
              <div class="skills">
                <div class="details">
                  <span>HTML</span>&ensp;
                  <span>50%</span>
                </div>
                <div class="bar">
                  <div id="html-bar"></div>
                </div>
              </div>
              <div class="skills">
                <div class="details">
                  <span>CSS</span>&ensp;
                  <span>50%</span>
                </div>
                <div class="bar">
                  <div id="css-bar"></div>
                </div>
              </div>
              <div class="skills">
                <div class="details">
                  <span>Javascript</span>&ensp;
                  <span>50%</span>
                </div>
                <div class="bar">
                  <div id="javascript-bar"></div>
                </div>
              </div>
              <div class="skills">
                <div class="details">
                  <span>Bootstrap</span>&ensp;
                  <span>50%</span>
                </div>
                <div class="bar">
                  <div id="bootstrap-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pages">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: {},
      jsonProducts: {
        products: [],
      },
      Color: false,
      itemId: null,
      productsLoaded: false,
      selectedCategory: "all",
    };
  },
  methods: {
    filterForm() {
      localStorage.setItem("selectedCategory", this.selectedCategory);
      return this.$router.push({
        path: `/${this.$i18n.locale}/products${this.selectedCategory}`,
      });
    },
    openProduct(item) {
      console.log("hello tacettin how are you");
    },
    toggleIcerik(itemId) {
      if (this.itemId) {
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
      this.basketCount = this.jsonProducts.products.length;
      this.itemAdded = true;
      this.basketItemCount += 1;
      setTimeout(() => {
        this.itemAdded = false;
      }, 2000);
    },
    switchColor() {
      this.Color
        ? (this.$colorMode.preference = "dark")
        : (this.$colorMode.preference = "light");
      console.log(this.$colorMode.preference);
    },
    fetchProducts() {
      const url =
        this.selectedCategory === "all"
          ? "https://dummyjson.com/products"
          : `https://dummyjson.com/products/category/${this.selectedCategory}`;

      fetch(url)
        .then((res) => res.json())
        .finally(() => (this.itemIsLoading = false))
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
<script setup>
const localPath = useLocalePath();
</script>
<style>
body {
  background-color: #fbeeee;
}

.checkbox {
  display: none;
}

.toggle {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 35px;
  background: #484848;
  border: 3px solid #222;
  border-radius: 50px;
  padding: 4px 4px;
  text-align: left;
  cursor: pointer;
  transition: 0.25s;
}

.disc {
  display: inline-block;
  position: relative;
  background: #fffdf2;
  border: 4px solid #e0e3c4;
  width: 30px;
  height: 30px;
  top: -2px;
  border-radius: 50%;
  left: 0;
  transform: rotate(0);
  transition: 0.3s;
  i {
    position: absolute;
    background: #efeedb;
    border: 3px solid #e0e3c4;
    border-radius: 50%;
    transition: 0.3s;
    &:first-of-type {
      width: 7px;
      height: 7px;
      left: 2px;
      top: 5px;
    }
    &:nth-of-type(2) {
      width: 13px;
      height: 13px;
      right: 3px;
      top: 0;
    }
    &:last-of-type {
      width: 9px;
      height: 9px;
      right: 8px;
      bottom: 2px;
    }
  }
}

.cloud {
  display: inline-block;
  position: absolute;
  top: 20px;
  left: 32px;
  background: #fff;
  border: 4px solid #d3d3d3;
  border-radius: 10px;
  width: 20px;
  height: 10px;
  transform: scale(0);
  opacity: 0;
  transition: transform 0.5s cubic-bezier(0.67, -0.01, 0.27, 1.45);
  &__sub1,
  &__sub2 {
    content: "";
    display: block;
    position: relative;
    border: 4px solid #d3d3d3;
    border-radius: 100%;
    border-right-color: transparent;
    border-bottom-color: transparent;
    &:after {
      content: "";
      position: absolute;
      background: #fff;
      border-radius: 10px;
    }
  }
  &__sub1 {
    top: -9px;
    right: -1px;
    width: 18px;
    height: 18px;
    transform: rotateZ(47deg);
    &:after {
      width: 11px;
      height: 10px;
      top: 0px;
      left: 0px;
    }
  }
  &__sub2 {
    top: -24px;
    right: -15px;
    width: 10px;
    height: 10px;
    transform: rotateZ(51deg);
    &:after {
      top: -1px;
      right: -6px;
      width: 10px;
      height: 9px;
    }
  }
}

.star {
  position: absolute;
  background: #fff;
  border-radius: 50%;
  transform: scale(1);
  transition: transform 0.5s cubic-bezier(0.67, -0.01, 0.27, 1.8);
  &:first-of-type {
    width: 4px;
    height: 4px;
    right: 35px;
    top: 4px;
    transition-delay: 0.1s;
  }
  &:nth-of-type(2) {
    width: 5px;
    height: 5px;
    right: 35px;
    bottom: 8px;
    transition-delay: 0.1s;
  }
  &:nth-of-type(3) {
    width: 3px;
    height: 3px;
    right: 28px;
    top: 17px;
    transition-delay: 0.1s;
  }
  &:nth-of-type(4) {
    width: 3px;
    height: 3px;
    right: 22px;
    top: 30px;
    transition-delay: 0.1s;
  }
  &:nth-of-type(5) {
    width: 4px;
    height: 4px;
    right: 15px;
    top: 5px;
    transition-delay: 0.05s;
  }
  &:nth-of-type(6) {
    width: 5px;
    height: 5px;
    right: 11px;
    top: 20px;
    transition-delay: 0.15s;
  }
  &:nth-of-type(7) {
    width: 3px;
    height: 3px;
    right: 5px;
    bottom: 23px;
    transition-delay: 0.25s;
  }
}

.checkbox:checked + .toggle {
  background: #c0e6f6;
  border-color: #83c2d7;
  .disc {
    background: #f5eb42;
    border-color: #e3c64c;
    left: 40px;
    width: 30px;
    height: 30px;
    top: -2px;
    transform: rotate(110deg);
    i:first-of-type,
    i:nth-of-type(2),
    i:last-of-type {
      opacity: 0;
    }
  }
  .cloud {
    opacity: 1;
    transform: scale(1);
  }
  .star {
    opacity: 0;
    transform: scale(0);
  }
}
.main-container {
  width: 80%;
  display: flex;
  background-color: rgba(128, 128, 128, 0.307);
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.light-mode .main-container {
  background-color: rgba(255, 255, 255, 0.623);
}

.switcherandBasket {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}
.lightdark {
  margin-left: 12px;
}
.basketDefault {
  margin-left: 5%;
}
.light-mode #fa-basket {
  color: black;
}
.pages {
  float: right;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
}
.container {
  width: 50%;
}
.middle {
  display: flex;
  justify-content: center;
  width: 65%;
  margin: 0 auto;
}
.imageAndPersonalInfoBox {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
.imgg {
  width: 110%;
  height: 0%;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.skilltxt {
  font-size: 18px;
}
.light-mode .txt1 {
  color: black;
}
.txt1 {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  color: rgb(171, 171, 171);
  font-family: "Raleway";
  font-size: 18px;
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
  padding-top: 10%;
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
@media screen and (max-width: 1200px) and (min-width: 580px) {
  .main-container {
    width: 95%;
  }
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
  .products-grid {
    align-items: center;
    text-align: center;
    margin-left: -10px;
    width: 80%;
  }
  .product {
    width: 22%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
    background-color: rgba(12, 12, 12, 0.258);
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
.leftBox {
  padding: 3%;
}
.linkBox {
  display: flex;
  margin-left: 5%;
}
.bg-video-about {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -1;
}
.contentLinkBox {
  display: flex;
}
* {
  font-family: "Raleway";
}
.nav {
  width: 50%;
  float: left;
}
.aboutTxt {
  display: flex;
  flex-direction: column;
  padding: 7%;
}
.txtabout {
  padding: 5%;
  width: 90%;
  font-size: 18px;
}
.contentLinkBox p {
  background: #ffffff94;
  border-radius: 50%;
  margin-left: 5px;
}
.contentLinkBox p:hover {
  background-color: black;
}
.socialIcon {
  font-size: 25px;
  color: #000;
  padding: 10px;
}
.socialIcon:hover {
  color: white;
}
.hr1 {
  width: 70%;
  margin-left: 20px;
}
.details {
  padding: 7px;
  color: rgb(171, 171, 171);
  display: flex;
  justify-content: space-around;
}
.light-mode .details {
  color: black;
}

.bar {
  width: 70%;
  margin: 0 auto;
  border: 2px solid rgb(0, 0, 0);
}

.bar div {
  height: 9px;
  background-color: #0d96e0;
}

#html-bar {
  animation: html-fill 2s forwards;
}
@keyframes html-fill {
  100% {
    width: 50%;
  }
}
#css-bar {
  animation: css-fill 2s forwards;
}
@keyframes css-fill {
  100% {
    width: 50%;
  }
}
#javascript-bar {
  animation: javascript-fill 2s forwards;
}
@keyframes javascript-fill {
  100% {
    width: 50%;
  }
}
#bootstrap-bar {
  animation: bootstrap-fill 2s forwards;
}
@keyframes bootstrap-fill {
  100% {
    width: 50%;
  }
}
.about {
  padding-top: 20%;
  display: flex;
  flex-direction: column;
  align-content: stretch;
  justify-content: space-evenly;
}
.abouttxt {
  font-size: 30px;
  font-family: Arial, Helvetica, sans-serif;
}
.nameAndSection1 {
  padding-top: 10%;
  display: flex;
  flex-direction: column;
}
.txt2 {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  font-family: "Raleway";
}
.hr2 {
  padding: 6px;
  width: 60%;
  margin-left: 10px;
}
.txt6 {
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  font-family: "Raleway";
}
.hr6 {
  padding: 6px;
  width: 60%;
  margin-left: 10px;
}
.menü ul {
  list-style: none;
  text-decoration: none;
  margin-top: -2%;
}
.menü li {
  text-decoration: none;
  padding: 3%;
}
.menü .nxt {
  display: block;
  font-size: 16px;
  color: black;
  box-shadow: rgba(100, 100, 100, 100) 0px 1px 2px,
    rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  text-align: center;
  text-decoration: none;
  font-family: "Raleway";
  background-color: rgba(128, 128, 128, 0.519);
  padding: 0 60px;
  border-radius: 3px;
  line-height: 30px;
}
.menü .nxt:hover {
  background-color: white;
}
.leftBox {
  width: 80%;
}
.image {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: stretch;
  padding: 30px;
}
.menü ul {
  padding: 0;
}
.txt3 {
  justify-content: space-around;
  font-family: "Raleway";
  padding-top: 55%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
.hr3 {
  padding: 6px;
  width: 60%;
  margin-left: 10px;
}
.txt4 {
  justify-content: space-around;
  font-family: "Raleway";
  padding-top: 15%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}
.hr4 {
  padding: 6px;
  width: 60%;
  margin-left: 10px;
}
.projects1 {
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  margin: 20px;
  display: block;
  font-size: 15px;
  color: black;
  text-decoration: none;
  font-family: "Raleway";
  background-color: rgba(128, 128, 128, 0.519);
  padding: 0 60px;
  border-radius: 3px;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projects1 button:hover {
  background-color: rgb(34, 65, 74);
}
.projects1 button {
  margin-top: 5%;
  margin-bottom: 2%;
  background-color: #3e3f40;
  border: 1px solid transparent;
  border-radius: 0.75rem;
  box-sizing: border-box;
  color: #f3f3f3;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: 0.5rem 0.55rem;
  text-align: center;
  text-decoration: none #6b7280 solid;
  transition-duration: 0.2s;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}
.projects1 a {
  text-decoration: none;
  color: #e2dfdf;
}

@media screen and (max-width: 1200px) and (min-width: 580px) {
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
  }
  .image {
    width: 100%;
  }

  .container {
    width: 100%;
  }
  .pages {
    width: 100%;
    border-radius: 5%;
  }
  .txt2 {
    margin-top: -35%;
  }

  .txt4 {
    margin-top: -15%;
  }
  .projects {
    padding-bottom: 10%;
  }
}

@media screen and (max-width: 580px) and (min-width: 340px) {
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-bottom-left-radius: 5%;
    border-bottom-right-radius: 5%;
  }
  .image {
    width: 100%;
  }
  .container {
    width: 100%;
  }
  .pages {
    width: 100%;
    border-radius: 5%;
  }
  .txt2 {
    margin-top: -35%;
  }
  .txt4 {
    margin-top: -15%;
  }
  .projects {
    padding-bottom: 10%;
  }
}
</style>
