import { mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-b84f86f2.mjs";
import "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./MobileMenu-5acf9387.mjs";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import moment from "moment/moment.js";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    // users: Object,
    // history: Object
  },
  setup(__props) {
    const clock = moment().format("HH");
    const data = [
      {
        name: "Kontak Admin",
        title: "Online 08.30 - 22.00",
        role: clock >= 22 ? "Nonaktif" : "Aktif",
        roleClass: clock >= 22 ? "text-red-800 bg-red-100" : "text-green-800 bg-green-100",
        icon: "fa-whatsapp text-green-500",
        btn: "Admin 1",
        btn2: "Admin 2",
        link: "https://wa.me/6285156875180",
        link2: "https://wa.me/6285156875180"
      },
      {
        name: "Grup Whatsapp",
        title: "Gabung grup whatsapp",
        role: "Aktif",
        roleClass: "text-green-800 bg-green-100",
        icon: "fa-whatsapp text-green-500",
        btn: "Grup Whatsapp",
        // btn2: 'Grup 2',
        link: "https://wa.me/6285156875180"
        // link2: 'https://wa.me/6285156875180',
      }
    ];
    const faqs = [
      {
        question: "Mengalami Kendala Transaksi?",
        answer: "Konten belum tersedia."
      },
      {
        question: "Mengalami Kendala Deposit?",
        answer: "Konten belum tersedia."
      }
    ];
    const info = [
      {
        name: "Admin Waykapay",
        desc: "Semua transaksi terpantau lancar bosku.",
        role: "fa-circle-info",
        roleClass: "text-blue-700"
      },
      {
        name: "Admin Waykapay",
        desc: "Sesuai syarat dan ketentuan Waykapay tidak pernah menerima dana isi ulang atas pencairan paylater dalam bentuk apapun, maka dari itu mohon dipatuhi dan diikuti bosku.",
        role: "fa-megaphone",
        roleClass: "text-green-700"
      },
      {
        name: "Admin Waykapay",
        desc: "Hindari transaksi di jam 23:00 hingga 00:10 dikarenakan cut off & pemeliharaan sistem.",
        role: "fa-power-off",
        roleClass: "text-red-700"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Informasi",
        name: "Informasi",
        desc: "Pusat informasi"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul role="list" class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(data, (item) => {
              _push2(`<li class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"${_scopeId}><div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><div class="flex-1 truncate"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="truncate text-sm font-medium text-gray-900"${_scopeId}>${ssrInterpolate(item.name)}</h3><span class="${ssrRenderClass([item.roleClass, "inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"])}"${_scopeId}>${ssrInterpolate(item.role)}</span></div><p class="mt-1 truncate text-sm text-gray-500"${_scopeId}>${ssrInterpolate(item.title)}</p></div><i class="${ssrRenderClass([item.icon, "fa-brands text-3xl flex-shrink-0"])}"${_scopeId}></i></div><div${_scopeId}><div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"${_scopeId}><div class="flex w-0 flex-1"${_scopeId}><a${ssrRenderAttr("href", item.link)} class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"${_scopeId}><span class="ml-3"${_scopeId}>${ssrInterpolate(item.btn)}</span></a></div>`);
              if (item.btn2) {
                _push2(`<div class="-ml-px flex w-0 flex-1"${_scopeId}><a${ssrRenderAttr("href", item.link2)} class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"${_scopeId}><span class="ml-3"${_scopeId}>${ssrInterpolate(item.btn2)}</span></a></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></li>`);
            });
            _push2(`<!--]--></ul><div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"${_scopeId}><div class="divide-y divide-gray-300 dark:divide-gray-600"${_scopeId}><!--[-->`);
            ssrRenderList(faqs, (faq) => {
              _push2(ssrRenderComponent(unref(Disclosure), {
                as: "div",
                key: faq.question,
                class: ""
              }, {
                default: withCtx(({ open }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<dt${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(DisclosureButton), { class: "flex w-full items-start justify-between text-left px-6 py-4" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<span class="text-sm font-medium text-gray-900"${_scopeId3}>${ssrInterpolate(faq.question)}</span><span class="ml-6 flex items-center"${_scopeId3}><i class="${ssrRenderClass([open ? "fa-minus" : "fa-chevron-down", "fa-regular text-gray-900"])}"${_scopeId3}></i></span>`);
                        } else {
                          return [
                            createVNode("span", { class: "text-sm font-medium text-gray-900" }, toDisplayString(faq.question), 1),
                            createVNode("span", { class: "ml-6 flex items-center" }, [
                              createVNode("i", {
                                class: ["fa-regular text-gray-900", open ? "fa-minus" : "fa-chevron-down"]
                              }, null, 2)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</dt>`);
                    _push3(ssrRenderComponent(unref(DisclosurePanel), {
                      as: "dd",
                      class: "px-6 pt-0 pb-4"
                    }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<p class="text-sm text-gray-500"${_scopeId3}>${ssrInterpolate(faq.answer)}</p>`);
                        } else {
                          return [
                            createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(faq.answer), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("dt", null, [
                        createVNode(unref(DisclosureButton), { class: "flex w-full items-start justify-between text-left px-6 py-4" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-sm font-medium text-gray-900" }, toDisplayString(faq.question), 1),
                            createVNode("span", { class: "ml-6 flex items-center" }, [
                              createVNode("i", {
                                class: ["fa-regular text-gray-900", open ? "fa-minus" : "fa-chevron-down"]
                              }, null, 2)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode(unref(DisclosurePanel), {
                        as: "dd",
                        class: "px-6 pt-0 pb-4"
                      }, {
                        default: withCtx(() => [
                          createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(faq.answer), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div><ul role="list" class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y divide-gray-300 dark:divide-gray-600"${_scopeId}><!--[-->`);
            ssrRenderList(info, (item) => {
              _push2(`<li class=""${_scopeId}><div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><div class="flex-1"${_scopeId}><div class="flex items-center space-x-2"${_scopeId}><span class="${ssrRenderClass([item.roleClass, "inline-block flex-shrink-0 rounded-full text-sm font-medium"])}"${_scopeId}><i class="${ssrRenderClass([item.role, "fa-regular w-4"])}"${_scopeId}></i></span><h3 class="truncate text-sm font-medium text-gray-900"${_scopeId}>${ssrInterpolate(item.name)}</h3></div><p class="mt-1 text-sm text-gray-500"${_scopeId}>${ssrInterpolate(item.desc)}</p></div></div></li>`);
            });
            _push2(`<!--]--></ul>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("ul", {
                role: "list",
                class: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(data, (item) => {
                  return createVNode("li", {
                    key: item.name,
                    class: "col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"
                  }, [
                    createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                      createVNode("div", { class: "flex-1 truncate" }, [
                        createVNode("div", { class: "flex items-center space-x-3" }, [
                          createVNode("h3", { class: "truncate text-sm font-medium text-gray-900" }, toDisplayString(item.name), 1),
                          createVNode("span", {
                            class: ["inline-block flex-shrink-0 rounded-full px-2 py-0.5 text-xs font-medium", item.roleClass]
                          }, toDisplayString(item.role), 3)
                        ]),
                        createVNode("p", { class: "mt-1 truncate text-sm text-gray-500" }, toDisplayString(item.title), 1)
                      ]),
                      createVNode("i", {
                        class: ["fa-brands text-3xl flex-shrink-0", item.icon]
                      }, null, 2)
                    ]),
                    createVNode("div", null, [
                      createVNode("div", { class: "-mt-px flex divide-x divide-gray-300 dark:divide-gray-600" }, [
                        createVNode("div", { class: "flex w-0 flex-1" }, [
                          createVNode("a", {
                            href: item.link,
                            class: "relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                          }, [
                            createVNode("span", { class: "ml-3" }, toDisplayString(item.btn), 1)
                          ], 8, ["href"])
                        ]),
                        item.btn2 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "-ml-px flex w-0 flex-1"
                        }, [
                          createVNode("a", {
                            href: item.link2,
                            class: "relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                          }, [
                            createVNode("span", { class: "ml-3" }, toDisplayString(item.btn2), 1)
                          ], 8, ["href"])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]);
                }), 64))
              ]),
              createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg" }, [
                createVNode("div", { class: "divide-y divide-gray-300 dark:divide-gray-600" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(faqs, (faq) => {
                    return createVNode(unref(Disclosure), {
                      as: "div",
                      key: faq.question,
                      class: ""
                    }, {
                      default: withCtx(({ open }) => [
                        createVNode("dt", null, [
                          createVNode(unref(DisclosureButton), { class: "flex w-full items-start justify-between text-left px-6 py-4" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-sm font-medium text-gray-900" }, toDisplayString(faq.question), 1),
                              createVNode("span", { class: "ml-6 flex items-center" }, [
                                createVNode("i", {
                                  class: ["fa-regular text-gray-900", open ? "fa-minus" : "fa-chevron-down"]
                                }, null, 2)
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode(unref(DisclosurePanel), {
                          as: "dd",
                          class: "px-6 pt-0 pb-4"
                        }, {
                          default: withCtx(() => [
                            createVNode("p", { class: "text-sm text-gray-500" }, toDisplayString(faq.answer), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 64))
                ])
              ]),
              createVNode("ul", {
                role: "list",
                class: "grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y divide-gray-300 dark:divide-gray-600"
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(info, (item) => {
                  return createVNode("li", {
                    key: item.name,
                    class: ""
                  }, [
                    createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                      createVNode("div", { class: "flex-1" }, [
                        createVNode("div", { class: "flex items-center space-x-2" }, [
                          createVNode("span", {
                            class: ["inline-block flex-shrink-0 rounded-full text-sm font-medium", item.roleClass]
                          }, [
                            createVNode("i", {
                              class: ["fa-regular w-4", item.role]
                            }, null, 2)
                          ], 2),
                          createVNode("h3", { class: "truncate text-sm font-medium text-gray-900" }, toDisplayString(item.name), 1)
                        ]),
                        createVNode("p", { class: "mt-1 text-sm text-gray-500" }, toDisplayString(item.desc), 1)
                      ])
                    ])
                  ]);
                }), 64))
              ]),
              createVNode(_sfc_main$2)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Information/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
