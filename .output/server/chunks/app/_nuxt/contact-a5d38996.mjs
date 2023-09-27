import { ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"><div class="mid"><div class="right"><b><div class="txt4"><span class="abouttxt">${ssrInterpolate(_ctx.$t("contact"))}</span><div class="hr4"><hr style="${ssrRenderStyle({ "border": "none", "border-top": "2px solid rgb(0, 0, 0)" })}"></div></div></b><form class="contact" id="Form"><input type="text" placeholder="name" name="name" id="name" for="name" required><input type="email" placeholder="mail" name="email" id="email" required><input type="tel" placeholder="phone" name="phone" id="phone" required><textarea ad="mesaj" placeholder="message" name="message" id="message"></textarea><button type="submit">${ssrInterpolate(_ctx.$t("contactbtn"))}</button></form></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-a5d38996.mjs.map
