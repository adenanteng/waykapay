import { mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "./AppLayout-d45ca2f7.mjs";
import "moment";
import "./PreviousButton-54c32c2b.mjs";
import { _ as _sfc_main$1 } from "./BlankLayout-27981359.mjs";
import { _ as _sfc_main$2 } from "./PrimaryButton-3722f774.mjs";
import "./ApplicationLogo-6cbfcc6b.mjs";
import "./Badge-0aaec22c.mjs";
import { useForm } from "@inertiajs/vue3";
import { A as ApplicationLogoTitle } from "./ApplicationLogoTitle-9de108fc.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./SecondaryButton-0a2fd542.mjs";
const _sfc_main = {
  __name: "Info",
  __ssrInlineRender: true,
  props: {
    transaction: Object
  },
  setup(__props) {
    const props = __props;
    useForm({
      transaction: props.transaction
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: ((_a = props.transaction) == null ? void 0 : _a.message) ?? "Transaksi Gagal"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="pt-16 pb-12"${_scopeId}><main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"${_scopeId}><div class="flex flex-shrink-0 justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(ApplicationLogoTitle, null, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-5"${_scopeId}><div class="text-center"${_scopeId}><h1 class="text-lg font-bold tracking-tight text-gray-900"${_scopeId}>Info</h1><div class=""${_scopeId}><div class="text-sm text-gray-900"${_scopeId}><span class="class text-gray-600"${_scopeId}> (${ssrInterpolate(((_a2 = props.transaction) == null ? void 0 : _a2.rc) ?? "null")}) </span> ${ssrInterpolate(((_b = props.transaction) == null ? void 0 : _b.message) ?? "Transaksi Gagal")}</div></div><div class="mt-5 space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { onclick: "history.back();return false;" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Kembali `);
                } else {
                  return [
                    createTextVNode(" Kembali ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></main></div>`);
          } else {
            return [
              createVNode("div", { class: "pt-16 pb-12" }, [
                createVNode("main", { class: "mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-shrink-0 justify-center" }, [
                    createVNode(ApplicationLogoTitle)
                  ]),
                  createVNode("div", { class: "mt-5" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("h1", { class: "text-lg font-bold tracking-tight text-gray-900" }, "Info"),
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "text-sm text-gray-900" }, [
                          createVNode("span", { class: "class text-gray-600" }, " (" + toDisplayString(((_c = props.transaction) == null ? void 0 : _c.rc) ?? "null") + ") ", 1),
                          createTextVNode(" " + toDisplayString(((_d = props.transaction) == null ? void 0 : _d.message) ?? "Transaksi Gagal"), 1)
                        ])
                      ]),
                      createVNode("div", { class: "mt-5 space-x-2" }, [
                        createVNode(_sfc_main$2, { onclick: "history.back();return false;" }, {
                          default: withCtx(() => [
                            createTextVNode(" Kembali ")
                          ]),
                          _: 1
                        })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Payment/Info.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
