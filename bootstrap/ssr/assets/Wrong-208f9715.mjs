import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import "./MobileMenu-5acf9387.mjs";
import { _ as _sfc_main$2 } from "./PrimaryButton-3137fc48.mjs";
import { _ as _sfc_main$3 } from "./SecondaryButton-70b2499c.mjs";
import "moment";
import { _ as _sfc_main$1 } from "./BlankLayout-efcc5a51.mjs";
import { A as ApplicationLogo } from "./ApplicationLogo-6cbfcc6b.mjs";
import VOtpInput from "vue3-otp-input";
import "./InputError-6aeb8d97.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
const _sfc_main = {
  __name: "Wrong",
  __ssrInlineRender: true,
  props: {
    request: Object
  },
  setup(__props) {
    ref(VOtpInput | null);
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Pin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative isolate overflow-hidden"${_scopeId}><div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8"${_scopeId}><div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(ApplicationLogo, { class: "mb-10" }, null, _parent2, _scopeId));
            _push2(`<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"${_scopeId}>Pin salah</h1><p class="text-sm text-gray-600"${_scopeId}>Masukkan pin transaksi kamu dengan benar</p><div class="mt-10"${_scopeId}><div class=""${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              onclick: "history.back();return false;",
              "preserve-scroll": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="fa-regular fa-arrow-rotate-left mr-1"${_scopeId2}></i> Coba lagi `);
                } else {
                  return [
                    createVNode("i", { class: "fa-regular fa-arrow-rotate-left mr-1" }),
                    createTextVNode(" Coba lagi ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              as: "a",
              href: _ctx.route("dashboard")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Beranda <i class="fa-regular fa-arrow-right ml-1 text-sm"${_scopeId2}></i>`);
                } else {
                  return [
                    createTextVNode(" Beranda "),
                    createVNode("i", { class: "fa-regular fa-arrow-right ml-1 text-sm" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative isolate overflow-hidden" }, [
                createVNode("div", { class: "mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8" }, [
                  createVNode("div", { class: "mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8" }, [
                    createVNode(ApplicationLogo, { class: "mb-10" }),
                    createVNode("h1", { class: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" }, "Pin salah"),
                    createVNode("p", { class: "text-sm text-gray-600" }, "Masukkan pin transaksi kamu dengan benar"),
                    createVNode("div", { class: "mt-10" }, [
                      createVNode("div", { class: "" }),
                      createVNode(_sfc_main$2, {
                        onclick: "history.back();return false;",
                        "preserve-scroll": ""
                      }, {
                        default: withCtx(() => [
                          createVNode("i", { class: "fa-regular fa-arrow-rotate-left mr-1" }),
                          createTextVNode(" Coba lagi ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$3, {
                        as: "a",
                        href: _ctx.route("dashboard")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Beranda "),
                          createVNode("i", { class: "fa-regular fa-arrow-right ml-1 text-sm" })
                        ]),
                        _: 1
                      }, 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pin/Wrong.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
