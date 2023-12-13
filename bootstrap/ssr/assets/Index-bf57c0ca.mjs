import { onMounted, onUnmounted, ref, watch, mergeProps, withCtx, unref, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-1a157a17.mjs";
import { router, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./MobileMenu-5acf9387.mjs";
import moment from "moment";
import { _ as _sfc_main$2 } from "./Badge-0aaec22c.mjs";
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
  props: {
    history: void 0,
    in_count: void 0,
    out_count: void 0,
    all_process: void 0
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      router.reload({ only: ["history", "in_count", "out_count", "all_process"] });
    });
    onUnmounted(() => {
      clearInterval(interval);
    });
    const interval = setInterval(() => {
      console.log("interval");
      router.reload({ only: ["history", "in_count", "out_count", "all_process"] });
    }, 1e4);
    function formattedDate(value) {
      return moment(value).format("DD MMM Y HH:mm");
    }
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    if (typeof window !== "undefined") {
      const tabHistory = ref(JSON.parse(localStorage.getItem("tabHistory")) ?? 2);
      watch(tabHistory, (newTabHistory) => {
        console.log(`tab is ${newTabHistory}`);
        localStorage.setItem("tabHistory", JSON.stringify(newTabHistory));
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Riwayat",
        name: "Riwayat",
        desc: "Riwayat transaksi kamu"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"${_scopeId}><div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><div class="flex-1 truncate"${_scopeId}><p class="mt-1 truncate text-sm text-gray-500"${_scopeId}>Bulan ini</p><h3 class="truncate text-sm font-medium text-gray-900"${_scopeId}>${ssrInterpolate(props.all_process)} <span class="truncate text-xs text-gray-500"${_scopeId}>transaksi</span></h3></div></div><div${_scopeId}><div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"${_scopeId}><div class="flex w-0 flex-1"${_scopeId}><div class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"${_scopeId}><i class="fa-duotone fa-down text-primary-400"${_scopeId}></i><div class="ml-3"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>Uang masuk</div><div class="text-sm font-medium text-gray-700"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.in_count ?? 0))}</div></div></div></div><div class="-ml-px flex w-0 flex-1"${_scopeId}><div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"${_scopeId}><i class="fa-duotone fa-up text-amber-400"${_scopeId}></i><div class="ml-3"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>Uang Keluar</div><div class="text-sm font-medium text-gray-700"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.out_count ?? 0))}</div></div></div></div></div></div></div>`);
            if (props.history === void 0) {
              _push2(`<div class="animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300"${_scopeId}><!--[-->`);
              ssrRenderList(4, (loader) => {
                _push2(`<div class="px-4 py-4 sm:px-6"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><p class="bg-gray-300 text-gray-300 w-full rounded-3xl"${_scopeId}>a</p><div class="ml-2 flex-shrink-0 flex"${_scopeId}><p class="px-2 bg-gray-300 text-gray-300 rounded-full w-20"${_scopeId}>b</p></div></div><div class="sm:flex sm:justify-between"${_scopeId}><p class="flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl"${_scopeId}>c</p></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class=""${_scopeId}><!--[-->`);
              ssrRenderList(props.history, (date, index) => {
                _push2(`<!--[--><h3 class="text-sm text-gray-900 font-medium ml-5 mt-5 mb-1 flex items-center"${_scopeId}>${ssrInterpolate(index)} `);
                _push2(ssrRenderComponent(_sfc_main$2, {
                  name: date.length + " transaksi",
                  class: "ml-3 text-xs text-primary-600 bg-primary-100"
                }, null, _parent2, _scopeId));
                _push2(`</h3><div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600"${_scopeId}><!--[-->`);
                ssrRenderList(date, (history) => {
                  _push2(`<li${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(Link), {
                    href: _ctx.route("history.show", history.order_id),
                    class: "block hover:bg-primary-50"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="px-4 py-4 sm:px-6"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><p class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-primary-600" : "text-gray-500", "font-medium truncate uppercase"])}"${_scopeId2}>${ssrInterpolate(history.product_name)} `);
                        if (history.virtual_account) {
                          _push3(`<!--[-->${ssrInterpolate(history.virtual_account.bank)}<!--]-->`);
                        } else if (history.wallet_account) {
                          _push3(`<!--[-->${ssrInterpolate(history.wallet_account.bank)}<!--]-->`);
                        } else if (history.money_transfer) {
                          _push3(`<!--[-->`);
                          if (history.user_id == _ctx.$page.props.user.id) {
                            _push3(`<!--[--> ke ${ssrInterpolate(history.money_transfer.to.name)}<!--]-->`);
                          } else {
                            _push3(`<!--[--> dari ${ssrInterpolate(history.user.name)}<!--]-->`);
                          }
                          _push3(`<!--]-->`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</p><div class="ml-2 flex-shrink-0 flex"${_scopeId2}><p class="${ssrRenderClass([history.color, "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])}"${_scopeId2}>${ssrInterpolate(history.status)}</p></div></div><div class="flex justify-between"${_scopeId2}><div class="flex"${_scopeId2}><p class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-center text-sm"])}"${_scopeId2}>${ssrInterpolate(history.category_id == 1 || history.user_id != _ctx.$page.props.user.id ? "+" : "-")} Rp ${ssrInterpolate(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount))}</p></div><div class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-center text-sm"])}"${_scopeId2}>${ssrInterpolate(formattedDate(history.created_at))}</div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "px-4 py-4 sm:px-6" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("p", {
                                class: ["font-medium truncate uppercase", history.status_id == 1 || history.status_id == 2 ? "text-primary-600" : "text-gray-500"]
                              }, [
                                createTextVNode(toDisplayString(history.product_name) + " ", 1),
                                history.virtual_account ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createTextVNode(toDisplayString(history.virtual_account.bank), 1)
                                ], 64)) : history.wallet_account ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createTextVNode(toDisplayString(history.wallet_account.bank), 1)
                                ], 64)) : history.money_transfer ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                  history.user_id == _ctx.$page.props.user.id ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(" ke " + toDisplayString(history.money_transfer.to.name), 1)
                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(" dari " + toDisplayString(history.user.name), 1)
                                  ], 64))
                                ], 64)) : createCommentVNode("", true)
                              ], 2),
                              createVNode("div", { class: "ml-2 flex-shrink-0 flex" }, [
                                createVNode("p", {
                                  class: ["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", history.color]
                                }, toDisplayString(history.status), 3)
                              ])
                            ]),
                            createVNode("div", { class: "flex justify-between" }, [
                              createVNode("div", { class: "flex" }, [
                                createVNode("p", {
                                  class: ["flex items-center text-sm", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                                }, toDisplayString(history.category_id == 1 || history.user_id != _ctx.$page.props.user.id ? "+" : "-") + " Rp " + toDisplayString(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount)), 3)
                              ]),
                              createVNode("div", {
                                class: ["flex items-center text-sm", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                              }, toDisplayString(formattedDate(history.created_at)), 3)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul></div><!--]-->`);
              });
              _push2(`<!--]--><div class="px-4 py-4 sm:px-6 text-center text-gray-900 text-sm"${_scopeId}> Eits, udah mentok hehe </div></div>`);
            }
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300" }, [
                createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                  createVNode("div", { class: "flex-1 truncate" }, [
                    createVNode("p", { class: "mt-1 truncate text-sm text-gray-500" }, "Bulan ini"),
                    createVNode("h3", { class: "truncate text-sm font-medium text-gray-900" }, [
                      createTextVNode(toDisplayString(props.all_process) + " ", 1),
                      createVNode("span", { class: "truncate text-xs text-gray-500" }, "transaksi")
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "-mt-px flex divide-x divide-gray-300 dark:divide-gray-600" }, [
                    createVNode("div", { class: "flex w-0 flex-1" }, [
                      createVNode("div", { class: "relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4" }, [
                        createVNode("i", { class: "fa-duotone fa-down text-primary-400" }),
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("div", { class: "text-xs text-gray-500" }, "Uang masuk"),
                          createVNode("div", { class: "text-sm font-medium text-gray-700" }, "Rp " + toDisplayString(formatPrice(props.in_count ?? 0)), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "-ml-px flex w-0 flex-1" }, [
                      createVNode("div", { class: "relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4" }, [
                        createVNode("i", { class: "fa-duotone fa-up text-amber-400" }),
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("div", { class: "text-xs text-gray-500" }, "Uang Keluar"),
                          createVNode("div", { class: "text-sm font-medium text-gray-700" }, "Rp " + toDisplayString(formatPrice(props.out_count ?? 0)), 1)
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              props.history === void 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300"
              }, [
                (openBlock(), createBlock(Fragment, null, renderList(4, (loader) => {
                  return createVNode("div", { class: "px-4 py-4 sm:px-6" }, [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("p", { class: "bg-gray-300 text-gray-300 w-full rounded-3xl" }, "a"),
                      createVNode("div", { class: "ml-2 flex-shrink-0 flex" }, [
                        createVNode("p", { class: "px-2 bg-gray-300 text-gray-300 rounded-full w-20" }, "b")
                      ])
                    ]),
                    createVNode("div", { class: "sm:flex sm:justify-between" }, [
                      createVNode("p", { class: "flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl" }, "c")
                    ])
                  ]);
                }), 64))
              ])) : (openBlock(), createBlock("div", {
                key: 1,
                class: ""
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.history, (date, index) => {
                  return openBlock(), createBlock(Fragment, null, [
                    createVNode("h3", { class: "text-sm text-gray-900 font-medium ml-5 mt-5 mb-1 flex items-center" }, [
                      createTextVNode(toDisplayString(index) + " ", 1),
                      createVNode(_sfc_main$2, {
                        name: date.length + " transaksi",
                        class: "ml-3 text-xs text-primary-600 bg-primary-100"
                      }, null, 8, ["name"])
                    ]),
                    createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300" }, [
                      createVNode("ul", {
                        role: "list",
                        class: "divide-y divide-gray-300 dark:divide-gray-600"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(date, (history) => {
                          return openBlock(), createBlock("li", {
                            key: history.id
                          }, [
                            createVNode(unref(Link), {
                              href: _ctx.route("history.show", history.order_id),
                              class: "block hover:bg-primary-50"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "px-4 py-4 sm:px-6" }, [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("p", {
                                      class: ["font-medium truncate uppercase", history.status_id == 1 || history.status_id == 2 ? "text-primary-600" : "text-gray-500"]
                                    }, [
                                      createTextVNode(toDisplayString(history.product_name) + " ", 1),
                                      history.virtual_account ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createTextVNode(toDisplayString(history.virtual_account.bank), 1)
                                      ], 64)) : history.wallet_account ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createTextVNode(toDisplayString(history.wallet_account.bank), 1)
                                      ], 64)) : history.money_transfer ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                        history.user_id == _ctx.$page.props.user.id ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createTextVNode(" ke " + toDisplayString(history.money_transfer.to.name), 1)
                                        ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createTextVNode(" dari " + toDisplayString(history.user.name), 1)
                                        ], 64))
                                      ], 64)) : createCommentVNode("", true)
                                    ], 2),
                                    createVNode("div", { class: "ml-2 flex-shrink-0 flex" }, [
                                      createVNode("p", {
                                        class: ["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", history.color]
                                      }, toDisplayString(history.status), 3)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex justify-between" }, [
                                    createVNode("div", { class: "flex" }, [
                                      createVNode("p", {
                                        class: ["flex items-center text-sm", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                                      }, toDisplayString(history.category_id == 1 || history.user_id != _ctx.$page.props.user.id ? "+" : "-") + " Rp " + toDisplayString(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount)), 3)
                                    ]),
                                    createVNode("div", {
                                      class: ["flex items-center text-sm", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                                    }, toDisplayString(formattedDate(history.created_at)), 3)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ]);
                        }), 128))
                      ])
                    ])
                  ], 64);
                }), 256)),
                createVNode("div", { class: "px-4 py-4 sm:px-6 text-center text-gray-900 text-sm" }, " Eits, udah mentok hehe ")
              ])),
              createVNode(_sfc_main$3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/History/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
