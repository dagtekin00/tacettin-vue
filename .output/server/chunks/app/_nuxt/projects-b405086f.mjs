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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"><div class="mid"><div class="right"><b><div class="txt4"><span class="abouttxt">${ssrInterpolate(_ctx.$t("projects"))}</span><div class="hr4"><hr style="${ssrRenderStyle({ "border": "none", "border-top": "2px solid rgb(0, 0, 0)" })}"></div></div></b><div class="projects"><div class="projects1"><b>${ssrInterpolate(_ctx.$t("projectsname"))}</b><button><a href="https://github.com/dagtekin00/Kullanici-Veri-Girisi">${ssrInterpolate(_ctx.$t("projectsbtn"))}</a></button></div><div class="projects1"><b>Dino Game</b><button><a href="https://github.com/dagtekin00/Dino-Game">${ssrInterpolate(_ctx.$t("projectsbtn"))}</a></button></div><div class="projects1">${ssrInterpolate(_ctx.$t("dotnet"))}<b></b><button><a href="https://github.com/dagtekin00/Dotnet-Proje">${ssrInterpolate(_ctx.$t("projectsbtn"))}</a></button></div></div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { projects as default };
//# sourceMappingURL=projects-b405086f.mjs.map
