import { B as BasketStore } from './basket-c1ddd34a.mjs';
import { ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
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
      basket: []
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
      this.basket.splice(index, 1);
      const basketStore = BasketStore();
      basketStore.localInit();
      basketStore.removeFromBasket(index);
      basketStore.writeToLocalStorage();
      this.updateLocalStorage();
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
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (const item of this.basket) {
        total += item.price;
      }
      return total;
    }
  },
  mounted() {
    this.fetchBasketFromLocalStorage();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`);
  if ($data.basket) {
    _push(`<div class="basket" style="${ssrRenderStyle({ "display": "flex", "flex-direction": "column", "align-items": "center" })}"><div class="totalPrice"><h3>${ssrInterpolate(_ctx.$t("totalPrice"))} ${ssrInterpolate($options.totalPrice)}$</h3></div><!--[-->`);
    ssrRenderList($data.basket, (item, index) => {
      _push(`<div class="basketicerik"><h1 style="${ssrRenderStyle({ "font-size": "80%", "margin-left": "15px" })}">${ssrInterpolate(item.title)}</h1><img${ssrRenderAttr("src", item.thumbnail)} alt="" style="${ssrRenderStyle({ "width": "35%", "height": "100px", "margin-left": "20px" })}"><h1 style="${ssrRenderStyle({ "font-size": "80%", "margin-left": "20px" })}">${ssrInterpolate(item.price)}$</h1><button style="${ssrRenderStyle({ "margin-left": "4%", "background-color": "rgba(128, 128, 128, 0.747)", "color": "black", "font-size": "20px", "border": "none", "border-radius": "5px" })}"><i class="fa fa-trash-o"></i></button></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/basket.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const basket = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { basket as default };
//# sourceMappingURL=basket-c02332be.mjs.map
