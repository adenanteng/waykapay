import { mergeProps, withCtx, createVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-0e10c014.mjs";
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
        title: "E-Toll",
        name: "E-Toll",
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
              href: _ctx.route("etoll.show", "MANDIRI E-TOLL"),
              class: "absolute inset-0"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><i class="fa-regular fa-cards-blank text-3xl text-blue-500"${_scopeId}></i><div class="flex-1"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="text-sm font-medium text-gray-900"${_scopeId}>Mandiri E-Toll</h3></div><p class="truncate text-sm text-gray-500"${_scopeId}>Topup saldo Mandiri</p></div></div></li><li class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("etoll.show", "TAPCASH BNI"),
              class: "absolute inset-0"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><i class="fa-regular fa-cards-blank text-3xl text-orange-500"${_scopeId}></i><div class="flex-1"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="text-sm font-medium text-gray-900"${_scopeId}>Tapcash BNI</h3></div><p class="truncate text-sm text-gray-500"${_scopeId}>Topup saldo BNI</p></div></div></li><li class="relative"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("etoll.show", "BRI BRIZZI"),
              class: "absolute inset-0"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><i class="fa-regular fa-cards-blank text-3xl text-indigo-500"${_scopeId}></i><div class="flex-1"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="text-sm font-medium text-gray-900"${_scopeId}>BRI Brizzi</h3></div><p class="truncate text-sm text-gray-500"${_scopeId}>Topup saldo BRI</p></div></div></li></ul>`);
          } else {
            return [
              createVNode("ul", {
                role: "list",
                class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"
              }, [
                createVNode("li", { class: "relative" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("etoll.show", "MANDIRI E-TOLL"),
                    class: "absolute inset-0"
                  }, null, 8, ["href"]),
                  createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                    createVNode("i", { class: "fa-regular fa-cards-blank text-3xl text-blue-500" }),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("h3", { class: "text-sm font-medium text-gray-900" }, "Mandiri E-Toll")
                      ]),
                      createVNode("p", { class: "truncate text-sm text-gray-500" }, "Topup saldo Mandiri")
                    ])
                  ])
                ]),
                createVNode("li", { class: "relative" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("etoll.show", "TAPCASH BNI"),
                    class: "absolute inset-0"
                  }, null, 8, ["href"]),
                  createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                    createVNode("i", { class: "fa-regular fa-cards-blank text-3xl text-orange-500" }),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("h3", { class: "text-sm font-medium text-gray-900" }, "Tapcash BNI")
                      ]),
                      createVNode("p", { class: "truncate text-sm text-gray-500" }, "Topup saldo BNI")
                    ])
                  ])
                ]),
                createVNode("li", { class: "relative" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("etoll.show", "BRI BRIZZI"),
                    class: "absolute inset-0"
                  }, null, 8, ["href"]),
                  createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                    createVNode("i", { class: "fa-regular fa-cards-blank text-3xl text-indigo-500" }),
                    createVNode("div", { class: "flex-1" }, [
                      createVNode("div", { class: "flex items-center space-x-3" }, [
                        createVNode("h3", { class: "text-sm font-medium text-gray-900" }, "BRI Brizzi")
                      ]),
                      createVNode("p", { class: "truncate text-sm text-gray-500" }, "Topup saldo BRI")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Etoll/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
