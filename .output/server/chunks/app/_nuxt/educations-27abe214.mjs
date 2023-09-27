import { ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"><div class="middle"><div class="right"><div class="aboutt1"><div class="txt2"><span class="abouttxt">${ssrInterpolate(_ctx.$t("Educations"))}</span><div class="hr2"><hr style="${ssrRenderStyle({ "border": "none", "border-top": "2px solid rgb(0, 0, 0)" })}"></div></div><br><br><p style="${ssrRenderStyle({ "font-size": "20px" })}">${ssrInterpolate(_ctx.$t("school"))} <b><span>2020-2024</span></b></p></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/educations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const educations = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { educations as default };
//# sourceMappingURL=educations-27abe214.mjs.map
