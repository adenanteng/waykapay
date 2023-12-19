import { onMounted, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "./AppLayout-967352dd.mjs";
import "moment";
import "./PreviousButton-54c32c2b.mjs";
import { _ as _sfc_main$1 } from "./BlankLayout-851b751e.mjs";
import "./PrimaryButton-3722f774.mjs";
import "./ApplicationLogo-6cbfcc6b.mjs";
import "./Badge-0aaec22c.mjs";
import { useForm } from "@inertiajs/vue3";
import { A as ApplicationLogoTitle } from "./ApplicationLogoTitle-9de108fc.mjs";
import { _ as _sfc_main$2 } from "./SecondaryButton-0a2fd542.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
const _sfc_main = {
  __name: "Success",
  __ssrInlineRender: true,
  props: {
    transaction: Object
  },
  setup(__props) {
    const props = __props;
    useForm({
      transaction: props.transaction
    });
    onMounted(() => {
      setTimeout(() => route("history.show", props.transaction), 500);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Sukses" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="pt-16 pb-12"${_scopeId}><main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"${_scopeId}><div class="flex flex-shrink-0 justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(ApplicationLogoTitle, null, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-5"${_scopeId}><div class="text-center justify-center"${_scopeId}><div class="px-4 sm:px-6 text-center text-gray-900 text-sm"${_scopeId}></div><h1 class="text-lg font-bold tracking-tight text-gray-900"${_scopeId}>Transaksi Berhasil</h1><p class="text-gray-500 text-sm"${_scopeId}>Kamu akan dialihkan dalam </p><div class="mt-5 space-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              as: "a",
              href: _ctx.route("dashboard")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ke Beranda <i class="fa-regular fa-arrow-right ml-1 text-xs"${_scopeId2}></i>`);
                } else {
                  return [
                    createTextVNode(" Ke Beranda "),
                    createVNode("i", { class: "fa-regular fa-arrow-right ml-1 text-xs" })
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
                    createVNode("div", { class: "text-center justify-center" }, [
                      createVNode("div", { class: "px-4 sm:px-6 text-center text-gray-900 text-sm" }),
                      createVNode("h1", { class: "text-lg font-bold tracking-tight text-gray-900" }, "Transaksi Berhasil"),
                      createVNode("p", { class: "text-gray-500 text-sm" }, "Kamu akan dialihkan dalam "),
                      createVNode("div", { class: "mt-5 space-x-2" }, [
                        createVNode(_sfc_main$2, {
                          as: "a",
                          href: _ctx.route("dashboard")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Ke Beranda "),
                            createVNode("i", { class: "fa-regular fa-arrow-right ml-1 text-xs" })
                          ]),
                          _: 1
                        }, 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Payment/Success.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
