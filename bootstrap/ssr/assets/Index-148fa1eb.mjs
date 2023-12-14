import { onMounted, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-a8d0400d.mjs";
import { Link } from "@inertiajs/vue3";
import "./MobileMenu-5acf9387.mjs";
import "moment";
import "./PreviousButton-54c32c2b.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./SecondaryButton-70b2499c.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {},
  setup(__props) {
    onMounted(() => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Perangkat",
        name: "Perangkat",
        desc: "Profil perangkat kamu"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"${_scopeId}><div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><div class="flex-1 truncate"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="truncate text-sm text-gray-600"${_scopeId}>Notifikasi Perangkat</h3></div><p class="mt-1 truncate text-sm font-medium text-gray-900"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.device_token ? "Aktif" : "Tidak aktif")}</p>`);
            if (_ctx.$page.props.user.device_token) {
              _push2(`<p class="mt-1 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.device_token)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><i class="${ssrRenderClass([_ctx.$page.props.user.device_token ? "text-green-600" : "text-red-600", "fa-duotone fa-mobile-android text-3xl flex-shrink-0"])}"${_scopeId}></i></div><div${_scopeId}><div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"${_scopeId}><div class="flex w-0 flex-1"${_scopeId}><div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"${_scopeId}><div class="ml-3 truncate"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}></div>`);
            if (_ctx.$page.url.startsWith("/device/store")) {
              _push2(ssrRenderComponent(unref(Link), {
                class: "text-sm font-medium text-primary-600 truncate",
                href: _ctx.route("dashboard"),
                replace: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Kembali ke dasbor `);
                  } else {
                    return [
                      createTextVNode(" Kembali ke dasbor ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(unref(Link), {
                class: "text-sm font-medium text-primary-600 truncate",
                href: _ctx.route("device.store", { "user": _ctx.$page.props.user.slug }),
                replace: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Refresh perangkat `);
                  } else {
                    return [
                      createTextVNode(" Refresh perangkat ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300" }, [
                createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                  createVNode("div", { class: "flex-1 truncate" }, [
                    createVNode("div", { class: "flex items-center space-x-3" }, [
                      createVNode("h3", { class: "truncate text-sm text-gray-600" }, "Notifikasi Perangkat")
                    ]),
                    createVNode("p", { class: "mt-1 truncate text-sm font-medium text-gray-900" }, toDisplayString(_ctx.$page.props.user.device_token ? "Aktif" : "Tidak aktif"), 1),
                    _ctx.$page.props.user.device_token ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "mt-1 text-sm text-gray-500"
                    }, toDisplayString(_ctx.$page.props.user.device_token), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode("i", {
                    class: ["fa-duotone fa-mobile-android text-3xl flex-shrink-0", _ctx.$page.props.user.device_token ? "text-green-600" : "text-red-600"]
                  }, null, 2)
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "-mt-px flex divide-x divide-gray-300 dark:divide-gray-600" }, [
                    createVNode("div", { class: "flex w-0 flex-1" }, [
                      createVNode("div", { class: "relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4" }, [
                        createVNode("div", { class: "ml-3 truncate" }, [
                          createVNode("div", { class: "text-xs text-gray-500" }),
                          _ctx.$page.url.startsWith("/device/store") ? (openBlock(), createBlock(unref(Link), {
                            key: 0,
                            class: "text-sm font-medium text-primary-600 truncate",
                            href: _ctx.route("dashboard"),
                            replace: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Kembali ke dasbor ")
                            ]),
                            _: 1
                          }, 8, ["href"])) : (openBlock(), createBlock(unref(Link), {
                            key: 1,
                            class: "text-sm font-medium text-primary-600 truncate",
                            href: _ctx.route("device.store", { "user": _ctx.$page.props.user.slug }),
                            replace: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Refresh perangkat ")
                            ]),
                            _: 1
                          }, 8, ["href"]))
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Device/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
