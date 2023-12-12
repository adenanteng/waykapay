import { mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "MobileMenu",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-full bg-white bg-opacity-50 backdrop-blur border border-gray-300 overflow-hidden shadow-lg fixed bottom-3 right-4 left-4 lg:hidden z-40" }, _attrs))}><div class="pt-3 pb-2"><div class="grid grid-cols-4 max-w-7xl mx-auto">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard"),
        class: "group text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="${ssrRenderClass([_ctx.$page.component.startsWith("Dashboard") ? "fa-solid text-primary-700" : "fa-regular", "fa-home text-xl text-gray-700"])}"${_scopeId}></i><h3 class="${ssrRenderClass([_ctx.$page.component.startsWith("Dashboard") ? "font-semibold text-primary-700" : "", "text-sm text-gray-700"])}"${_scopeId}> Beranda </h3>`);
          } else {
            return [
              createVNode("i", {
                class: ["fa-home text-xl text-gray-700", _ctx.$page.component.startsWith("Dashboard") ? "fa-solid text-primary-700" : "fa-regular"]
              }, null, 2),
              createVNode("h3", {
                class: ["text-sm text-gray-700", _ctx.$page.component.startsWith("Dashboard") ? "font-semibold text-primary-700" : ""]
              }, " Beranda ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("history.index"),
        class: "group text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="${ssrRenderClass([_ctx.$page.component.startsWith("History") ? "fa-solid text-primary-700" : "fa-regular", "fa-files text-xl text-gray-700"])}"${_scopeId}></i><h3 class="${ssrRenderClass([_ctx.$page.component.startsWith("History") ? "font-semibold text-primary-700" : "", "text-sm text-gray-700"])}"${_scopeId}> Riwayat </h3>`);
          } else {
            return [
              createVNode("i", {
                class: ["fa-files text-xl text-gray-700", _ctx.$page.component.startsWith("History") ? "fa-solid text-primary-700" : "fa-regular"]
              }, null, 2),
              createVNode("h3", {
                class: ["text-sm text-gray-700", _ctx.$page.component.startsWith("History") ? "font-semibold text-primary-700" : ""]
              }, " Riwayat ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("information.index"),
        class: "group text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="${ssrRenderClass([_ctx.$page.component.startsWith("Information") ? "fa-solid text-primary-700" : "fa-regular", "fa-circle-info text-xl text-gray-700"])}"${_scopeId}></i><h3 class="${ssrRenderClass([_ctx.$page.component.startsWith("Information") ? "font-semibold text-primary-700" : "", "text-sm text-gray-700"])}"${_scopeId}> Informasi </h3>`);
          } else {
            return [
              createVNode("i", {
                class: ["fa-circle-info text-xl text-gray-700", _ctx.$page.component.startsWith("Information") ? "fa-solid text-primary-700" : "fa-regular"]
              }, null, 2),
              createVNode("h3", {
                class: ["text-sm text-gray-700", _ctx.$page.component.startsWith("Information") ? "font-semibold text-primary-700" : ""]
              }, " Informasi ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("profile.index"),
        class: "group grid justify-center text-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="${ssrRenderClass([_ctx.$page.component.startsWith("Profile") ? "fa-solid text-primary-700" : "fa-regular", "fa-user text-xl text-gray-700"])}"${_scopeId}></i><h3 class="${ssrRenderClass([_ctx.$page.component.startsWith("Profile") ? "font-semibold text-primary-700" : "", "text-sm text-gray-700"])}"${_scopeId}> Saya </h3>`);
          } else {
            return [
              createVNode("i", {
                class: ["fa-user text-xl text-gray-700", _ctx.$page.component.startsWith("Profile") ? "fa-solid text-primary-700" : "fa-regular"]
              }, null, 2),
              createVNode("h3", {
                class: ["text-sm text-gray-700", _ctx.$page.component.startsWith("Profile") ? "font-semibold text-primary-700" : ""]
              }, " Saya ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/MobileMenu.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
