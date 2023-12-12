import { mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import "@inertiajs/vue3";
import "./MobileMenu-512f42ce.mjs";
import { _ as _sfc_main$2 } from "./PrimaryButton-3137fc48.mjs";
import "./SecondaryButton-70b2499c.mjs";
import "moment";
import { _ as _sfc_main$1 } from "./BlankLayout-efcc5a51.mjs";
import { A as ApplicationLogo } from "./ApplicationLogo-6cbfcc6b.mjs";
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
    users: Object,
    carousel: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Upgrade" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative isolate overflow-hidden"${_scopeId}><svg class="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true"${_scopeId}><defs${_scopeId}><pattern id="0787a7c5-978c-4f66-83c7-11c213f99cb7" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse"${_scopeId}><path d="M.5 200V.5H200" fill="none"${_scopeId}></path></pattern></defs><rect width="100%" height="100%" stroke-width="0" fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"${_scopeId}></rect></svg><div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8"${_scopeId}><div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"${_scopeId}>`);
            _push2(ssrRenderComponent(ApplicationLogo, null, null, _parent2, _scopeId));
            _push2(`<div class="mt-24 sm:mt-32 lg:mt-16"${_scopeId}></div><h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"${_scopeId}>Waykapay Premium</h1><p class="mt-6 text-lg leading-8 text-gray-600"${_scopeId}>Yuk, upgrade ke Waykapay Premium! Nikmatin akses dan benefit lengkap dari Waykapay!</p><div class="mt-10 flex items-center gap-x-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              as: "a",
              href: _ctx.route("upgrade.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Daftar Sekarang`);
                } else {
                  return [
                    createTextVNode("Daftar Sekarang")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"${_scopeId}><div class="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none"${_scopeId}><div class="-m-2 rounded-3xl bg-gray-900 bg-opacity-10 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:p-4"${_scopeId}><img src="https://tailwindui.com/img/component-images/project-app-screenshot.png" alt="App screenshot" width="2432" height="1442" class="w-[76rem] rounded-3xl shadow-2xl ring-1 ring-gray-900 ring-opacity-10"${_scopeId}></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative isolate overflow-hidden" }, [
                (openBlock(), createBlock("svg", {
                  class: "absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]",
                  "aria-hidden": "true"
                }, [
                  createVNode("defs", null, [
                    createVNode("pattern", {
                      id: "0787a7c5-978c-4f66-83c7-11c213f99cb7",
                      width: "200",
                      height: "200",
                      x: "50%",
                      y: "-1",
                      patternUnits: "userSpaceOnUse"
                    }, [
                      createVNode("path", {
                        d: "M.5 200V.5H200",
                        fill: "none"
                      })
                    ])
                  ]),
                  createVNode("rect", {
                    width: "100%",
                    height: "100%",
                    "stroke-width": "0",
                    fill: "url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
                  })
                ])),
                createVNode("div", { class: "mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8" }, [
                  createVNode("div", { class: "mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8" }, [
                    createVNode(ApplicationLogo),
                    createVNode("div", { class: "mt-24 sm:mt-32 lg:mt-16" }),
                    createVNode("h1", { class: "mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" }, "Waykapay Premium"),
                    createVNode("p", { class: "mt-6 text-lg leading-8 text-gray-600" }, "Yuk, upgrade ke Waykapay Premium! Nikmatin akses dan benefit lengkap dari Waykapay!"),
                    createVNode("div", { class: "mt-10 flex items-center gap-x-5" }, [
                      createVNode(_sfc_main$2, {
                        as: "a",
                        href: _ctx.route("upgrade.create")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("Daftar Sekarang")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ]),
                  createVNode("div", { class: "mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32" }, [
                    createVNode("div", { class: "max-w-3xl flex-none sm:max-w-5xl lg:max-w-none" }, [
                      createVNode("div", { class: "-m-2 rounded-3xl bg-gray-900 bg-opacity-10 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:p-4" }, [
                        createVNode("img", {
                          src: "https://tailwindui.com/img/component-images/project-app-screenshot.png",
                          alt: "App screenshot",
                          width: "2432",
                          height: "1442",
                          class: "w-[76rem] rounded-3xl shadow-2xl ring-1 ring-gray-900 ring-opacity-10"
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Upgrade/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
