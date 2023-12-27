import { mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d45ca2f7.mjs";
import { useForm, Link } from "@inertiajs/vue3";
import "./MobileMenu-5acf9387.mjs";
import "./TextInput-581d553f.mjs";
import "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./PreviousButton-54c32c2b.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    // user: Object,
  },
  setup(__props) {
    useForm({
      name: null,
      email: null
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Voucher Games",
        name: "Voucher Games",
        desc: "Summertime sadness"
      }, _attrs), {
        previous: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"${_scopeId}><li class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("games.show", "GOOGLE PLAY INDONESIA"),
              class: "absolute inset-0"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><img src="/img/games/GOOGLE%20PLAY%20INDONESIA.png" alt="" class="h-10"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="text-sm font-medium text-gray-900"${_scopeId}>Google Play</h3></div><p class="text-sm text-gray-500"${_scopeId}>Topup Google Play</p></div></div></li><li class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("games.show", "Steam Wallet (IDR)"),
              class: "absolute inset-0"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><img src="/img/games/Steam%20Wallet%20(IDR).png" alt="" class="h-10"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="text-sm font-medium text-gray-900"${_scopeId}>Steam</h3></div><p class="text-sm text-gray-500"${_scopeId}>Topup Steam Wallet</p></div></div></li><li class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("games.show", "PUBG MOBILE"),
              class: "absolute inset-0"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><img src="/img/games/PUBG%20MOBILE.png" alt="" class="h-10"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="text-sm font-medium text-gray-900"${_scopeId}>PUBG Mobile</h3></div><p class="text-sm text-gray-500"${_scopeId}>Topup PUBG Mobile</p></div></div></li><li class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("games.show", "MOBILE LEGENDS"),
              class: "absolute inset-0"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><img src="/img/games/MOBILE%20LEGENDS.png" alt="" class="h-10"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="text-sm font-medium text-gray-900"${_scopeId}>Mobile Legends</h3></div><p class="text-sm text-gray-500"${_scopeId}>Topup Mobile Legends</p></div></div></li><li class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("games.show", "HAGO"),
              class: "absolute inset-0"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><img src="/img/games/HAGO.png" alt="" class="h-10"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="text-sm font-medium text-gray-900"${_scopeId}>HAGO</h3></div><p class="text-sm text-gray-500"${_scopeId}>Topup HAGO</p></div></div></li><li class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("games.show", "FC Mobile"),
              class: "absolute inset-0"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><img src="/img/games/FC%20Mobile.png" alt="" class="h-10"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="text-sm font-medium text-gray-900"${_scopeId}>FC Mobile</h3></div><p class="text-sm text-gray-500"${_scopeId}>Topup FC Mobile</p></div></div></li><li class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("games.show", "Valorant"),
              class: "absolute inset-0"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><img src="/img/games/Valorant.png" alt="" class="h-10"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="text-sm font-medium text-gray-900"${_scopeId}>Valorant</h3></div><p class="text-sm text-gray-500"${_scopeId}>Topup Valorant</p></div></div></li></ul>`);
          } else {
            return [
              createVNode("ul", {
                role: "list",
                class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"
              }, [
                createVNode("li", { class: "relative" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("games.show", "GOOGLE PLAY INDONESIA"),
                    class: "absolute inset-0"
                  }, null, 8, ["href"]),
                  createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                    createVNode("img", {
                      src: "/img/games/GOOGLE%20PLAY%20INDONESIA.png",
                      alt: "",
                      class: "h-10"
                    }),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("h3", { class: "text-sm font-medium text-gray-900" }, "Google Play")
                      ]),
                      createVNode("p", { class: "text-sm text-gray-500" }, "Topup Google Play")
                    ])
                  ])
                ]),
                createVNode("li", { class: "relative" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("games.show", "Steam Wallet (IDR)"),
                    class: "absolute inset-0"
                  }, null, 8, ["href"]),
                  createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                    createVNode("img", {
                      src: "/img/games/Steam%20Wallet%20(IDR).png",
                      alt: "",
                      class: "h-10"
                    }),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("h3", { class: "text-sm font-medium text-gray-900" }, "Steam")
                      ]),
                      createVNode("p", { class: "text-sm text-gray-500" }, "Topup Steam Wallet")
                    ])
                  ])
                ]),
                createVNode("li", { class: "relative" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("games.show", "PUBG MOBILE"),
                    class: "absolute inset-0"
                  }, null, 8, ["href"]),
                  createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                    createVNode("img", {
                      src: "/img/games/PUBG%20MOBILE.png",
                      alt: "",
                      class: "h-10"
                    }),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("h3", { class: "text-sm font-medium text-gray-900" }, "PUBG Mobile")
                      ]),
                      createVNode("p", { class: "text-sm text-gray-500" }, "Topup PUBG Mobile")
                    ])
                  ])
                ]),
                createVNode("li", { class: "relative" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("games.show", "MOBILE LEGENDS"),
                    class: "absolute inset-0"
                  }, null, 8, ["href"]),
                  createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                    createVNode("img", {
                      src: "/img/games/MOBILE%20LEGENDS.png",
                      alt: "",
                      class: "h-10"
                    }),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("h3", { class: "text-sm font-medium text-gray-900" }, "Mobile Legends")
                      ]),
                      createVNode("p", { class: "text-sm text-gray-500" }, "Topup Mobile Legends")
                    ])
                  ])
                ]),
                createVNode("li", { class: "relative" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("games.show", "HAGO"),
                    class: "absolute inset-0"
                  }, null, 8, ["href"]),
                  createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                    createVNode("img", {
                      src: "/img/games/HAGO.png",
                      alt: "",
                      class: "h-10"
                    }),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("h3", { class: "text-sm font-medium text-gray-900" }, "HAGO")
                      ]),
                      createVNode("p", { class: "text-sm text-gray-500" }, "Topup HAGO")
                    ])
                  ])
                ]),
                createVNode("li", { class: "relative" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("games.show", "FC Mobile"),
                    class: "absolute inset-0"
                  }, null, 8, ["href"]),
                  createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                    createVNode("img", {
                      src: "/img/games/FC%20Mobile.png",
                      alt: "",
                      class: "h-10"
                    }),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("h3", { class: "text-sm font-medium text-gray-900" }, "FC Mobile")
                      ]),
                      createVNode("p", { class: "text-sm text-gray-500" }, "Topup FC Mobile")
                    ])
                  ])
                ]),
                createVNode("li", { class: "relative" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("games.show", "Valorant"),
                    class: "absolute inset-0"
                  }, null, 8, ["href"]),
                  createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                    createVNode("img", {
                      src: "/img/games/Valorant.png",
                      alt: "",
                      class: "h-10"
                    }),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("h3", { class: "text-sm font-medium text-gray-900" }, "Valorant")
                      ]),
                      createVNode("p", { class: "text-sm text-gray-500" }, "Topup Valorant")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Games/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
