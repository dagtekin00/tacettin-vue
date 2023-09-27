import { B as BasketStore } from './basket-c1ddd34a.mjs';
import { resolveComponent, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'ufo';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import '@intlify/core-base';
import 'cookie-es';
import 'is-https';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'klona';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'http-graceful-shutdown';

const _sfc_main = {
  data() {
    return {
      categories: {},
      jsonProducts: {
        products: [],
        basketItems: []
      },
      itemId: null,
      productsLoaded: false,
      selectedCategory: localStorage.getItem("selectedCategory") || "all",
      basketItems: [],
      itemAdded: false,
      basketItemCount: 0
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
        path: `/products${this.selectedCategory}`
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
      }, 2e3);
    },
    fetchProducts() {
      const url = this.selectedCategory === "all" ? "https://dummyjson.com/products" : `https://dummyjson.com/products/category/${this.$route.params.category}`;
      fetch(url).then((res) => res.json()).finally(() => this.productsLoaded = false).then((data) => {
        this.jsonProducts = data;
        this.productsLoaded = true;
      }).catch((e) => console.log(e));
    },
    togglePopup() {
      const popup = document.getElementById("popup");
      popup.style.display = "block";
    }
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
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_loading_overlay = resolveComponent("loading-overlay");
  _push(`<!--[--><link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><div class="mid"><div class="right"><b><div class="productstxt"><span class="abouttxt">${ssrInterpolate(_ctx.$t("products"))}</span><br><div class="productshr"><hr style="${ssrRenderStyle({ "border": "none", "border-top": "2px solid rgb(0, 0, 0)" })}"></div></div></b><div>`);
  _push(ssrRenderComponent(_component_loading_overlay, {
    active: _ctx.loading,
    "can-cancel": false
  }, null, _parent));
  if (!_ctx.loading) {
    _push(`<div><p>${ssrInterpolate(_ctx.veri)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><form class="filter-form"><label for="category" class="categorytxt">${ssrInterpolate(_ctx.$t("category"))}</label><select id="category" name="category" class="select"><!--[-->`);
  ssrRenderList($data.categories, (category, index) => {
    _push(`<option${ssrRenderAttr("value", category)}>${ssrInterpolate(category)}</option>`);
  });
  _push(`<!--]--></select><button type="submit" class="submit">${ssrInterpolate(_ctx.$t("tosort"))}</button></form><h1 id="productTitle"></h1>`);
  if ($data.itemId != null) {
    _push(`<div class="icerik" style="${ssrRenderStyle({ "text-align": "center" })}"><h1>${ssrInterpolate($data.jsonProducts.products[$data.itemId].title)}</h1><h2>${ssrInterpolate($data.jsonProducts.products[$data.itemId].price)}$</h2><p>${ssrInterpolate($data.jsonProducts.products[$data.itemId].description)}</p><p><b>${ssrInterpolate(_ctx.$t("category"))}: </b>${ssrInterpolate($data.jsonProducts.products[$data.itemId].category)}</p><p><b>${ssrInterpolate(_ctx.$t("brand"))}: </b>${ssrInterpolate($data.jsonProducts.products[$data.itemId].brand)}</p><p><b>${ssrInterpolate(_ctx.$t("discountPercentage"))}: </b>${ssrInterpolate($data.jsonProducts.products[$data.itemId].discountPercentage)}</p><p><b>${ssrInterpolate(_ctx.$t("rating"))}: </b>${ssrInterpolate($data.jsonProducts.products[$data.itemId].rating)}</p><img${ssrRenderAttr("src", $data.jsonProducts.products[$data.itemId].thumbnail)} style="${ssrRenderStyle({ "width": "50%", "height": "200px" })}"><br><button class="historygo">${ssrInterpolate(_ctx.$t("goback"))}</button><button class="addtobasket" style="${ssrRenderStyle({ "z-index": "2" })}">${ssrInterpolate(_ctx.$t("addtobasket"))}</button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.productsLoaded == true) {
    _push(`<div class="products-grid"><!--[-->`);
    ssrRenderList($data.jsonProducts.products, (item, index) => {
      _push(`<div style="${ssrRenderStyle({ "z-index": "1" })}" class="product"><div class="containerid"><img${ssrRenderAttr("src", item.thumbnail)} class="product-img"></div><h2 class="product-title">${ssrInterpolate(item.title)}</h2>`);
      if ($data.itemAdded) {
        _push(`<div class="basket-notification">${ssrInterpolate(_ctx.$t("addedtocart"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<div style="${ssrRenderStyle({ "display": "flex", "justify-content": "center", "align-items": "center" })}"><div class="progress progress-striped"><div class="progress-bar"></div></div></div>`);
  }
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products[category].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const products_category_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { products_category_ as default };
//# sourceMappingURL=products_category_-7446de72.mjs.map
