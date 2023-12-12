import { mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    pagination: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-0 flex items-center justify-between sm:px-6" }, _attrs))}><div class="grid w-full sm:hidden"><div class="mb-3 text-center"><p class="text-sm text-gray-700"> Menampilkan ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(props.pagination.from)}</span> ${ssrInterpolate(" ")} sampai ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(props.pagination.to)}</span> ${ssrInterpolate(" ")} dari ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(props.pagination.total)}</span> ${ssrInterpolate(" ")} hasil </p></div><div class="flex justify-between">`);
      _push(ssrRenderComponent(unref(Link), {
        replace: "",
        href: props.pagination.prev_page_url ?? "",
        class: "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Previous `);
          } else {
            return [
              createTextVNode(" Previous ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        replace: "",
        href: props.pagination.next_page_url ?? "",
        class: "ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Next `);
          } else {
            return [
              createTextVNode(" Next ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"><div><p class="text-sm text-gray-700"> Menampilkan ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(props.pagination.from)}</span> ${ssrInterpolate(" ")} sampai ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(props.pagination.to)}</span> ${ssrInterpolate(" ")} dari ${ssrInterpolate(" ")} <span class="font-medium">${ssrInterpolate(props.pagination.total)}</span> ${ssrInterpolate(" ")} hasil </p></div><div><nav class="relative z-0 inline-flex -space-x-px" aria-label="Pagination"><!--[-->`);
      ssrRenderList(props.pagination.links, (link) => {
        _push(ssrRenderComponent(unref(Link), {
          replace: "",
          href: link.url ?? "",
          class: ["relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-full shadow-lg", link.active ? "z-10 bg-primary-50 border-primary-500 text-primary-600" : "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 "]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}>${link.label}</span>`);
            } else {
              return [
                createVNode("span", {
                  innerHTML: link.label
                }, null, 8, ["innerHTML"])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
