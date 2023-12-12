import { ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "Badge",
  __ssrInlineRender: true,
  props: {
    name: String | Number,
    class: {
      type: String,
      default: "bg-primary-100 text-primary-800"
    },
    dot: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span class="${ssrRenderClass([props.class, "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"])}">`);
      if (__props.dot) {
        _push(`<svg class="-ml-1 mr-1.5 h-2 w-2 opacity-50" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"></circle></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(__props.name)}</span><template><div class="bg-green-100 text-green-800"></div><div class="bg-amber-100 text-amber-800"></div><div class="bg-red-100 text-red-800"></div><div class="bg-gray-100 text-gray-800"></div></template><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Badge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
