import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<li${ssrRenderAttrs(mergeProps({ class: "bg-white bg-opacity-50 backdrop-blur-2xl rounded-3xl" }, _attrs))}><!--[-->`);
  ssrRenderList(6, (loader) => {
    _push(`<div class="animate-pulse relative px-6 py-5 flex items-center space-x-3"><div class="flex-shrink-0"><div class="h-10 w-10 rounded-full bg-gray-300"></div></div><div class="flex-1 min-w-0"><div class="space-y-1"><div class="text-gray-300 bg-gray-300 w-full rounded-3xl">a</div><div class="text-gray-300 bg-gray-300 w-1/2 rounded-3xl">a</div></div></div></div>`);
  });
  _push(`<!--]--></li>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Loading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Loading as default
};
