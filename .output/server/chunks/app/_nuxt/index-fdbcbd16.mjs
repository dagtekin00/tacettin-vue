import { ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"><div class="mid"><div class="right"><div class="aboutTxt"><h2>Tacettin Da\u011Ftekin</h2><p style="${ssrRenderStyle({ "font-size": "18px" })}">${ssrInterpolate(_ctx.$t("skills"))}</p></div><div class="aboutt"><div class="txt6"><span class="abouttxt">${ssrInterpolate(_ctx.$t("About"))}</span><div class="hr6"><hr style="${ssrRenderStyle({ "border": "none", "border-top": "2px solid rgb(0, 0, 0)" })}"></div></div><br><p class="txtabout">${ssrInterpolate(_ctx.$t("abouttxt"))}</p></div><div class="linkBox"><div class="contentLinkBox"><p><a href="https://twitter.com/i/flow/login?redirect_after_login=%2FTacetti12094323"><i class="fa fa-twitter socialIcon"></i></a></p><p><a href="https://www.linkedin.com/in/tacettin-da%C4%9Ftekin-87472024b/"><i class="fa fa-linkedin socialIcon"></i></a></p><p><a href="https://www.instagram.com/dagtekin03/"><i class="fa fa-instagram socialIcon"></i></a></p><p><a href="https://github.com/dagtekin00"><i class="fa fa-github socialIcon"></i></a></p></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-fdbcbd16.mjs.map
