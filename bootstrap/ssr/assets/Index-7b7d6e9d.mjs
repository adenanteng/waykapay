import { ref, onMounted, watch, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-3f001962.mjs";
import { router, Link } from "@inertiajs/vue3";
import "./MobileMenu-512f42ce.mjs";
import moment from "moment";
import "./Badge-0aaec22c.mjs";
import "./PrimaryButton-3137fc48.mjs";
import { _ as _sfc_main$2 } from "./TextInput-581d553f.mjs";
import "./Pagination-8bf1701d.mjs";
import { _ as _sfc_main$3 } from "./SelectInput-6987634f.mjs";
import "@vuepic/vue-datepicker";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
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
    // transaction: undefined,
    transaction: {
      type: Object,
      default: () => ({})
    },
    filters: {
      type: Object,
      default: () => ({})
    },
    amount: Number,
    gross_amount: Number
  },
  setup(__props) {
    const props = __props;
    let search = ref(props.filters.search);
    let filter = ref(props.filters.filter);
    const date = ref([]);
    onMounted(() => {
    });
    watch([search, filter, date], ([value, valueF, valueD]) => {
      router.get(
        route("transaction.index"),
        {
          search: value,
          filter: valueF,
          date_start: valueD ? valueD[0] : null,
          date_end: valueD ? valueD[1] : null
        },
        {
          preserveState: true,
          replace: true
        }
      );
    });
    const formatter = ref({
      date: "YYYY-MM-DD",
      month: "MMM"
    });
    const options = ref({
      shortcuts: {
        today: "Hari ini",
        yesterday: "Kemarin",
        past: (period) => period + " hari terakhir",
        currentMonth: "Bulan ini",
        pastMonth: "Bulan lalu"
      },
      footer: {
        apply: "Terapkan",
        cancel: "Batal"
      }
    });
    function formattedDate(value) {
      return moment(value).format("DD MMM Y HH:mm");
    }
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Transaksi",
        name: "Transaksi",
        desc: "Riwayat transaksi semua pengguna"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"${_scopeId}><div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><div class="flex-1 truncate"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="truncate text-sm text-gray-600"${_scopeId}>Total Laba</h3></div><p class="mt-1 truncate text-sm font-medium text-gray-900"${_scopeId}>Rp ${ssrInterpolate(formatPrice(Number(props.gross_amount) - Number(props.amount)))}</p></div><i class="fa-duotone fa-money-bill-1-wave text-green-600 text-3xl flex-shrink-0"${_scopeId}></i></div><div${_scopeId}><div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"${_scopeId}><div class="flex w-0 flex-1"${_scopeId}><div class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"${_scopeId}><div class="ml-3"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>Modal</div><div class="text-sm font-medium text-gray-700"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.amount))}</div></div></div></div><div class="flex w-0 flex-1"${_scopeId}><div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"${_scopeId}><div class="ml-3"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>Omzet</div><div class="text-sm font-medium text-gray-700"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.gross_amount))}</div></div></div></div></div></div></div><div class=""${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              type: "text",
              modelValue: unref(search),
              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : search = $event,
              placeholder: "Cari disini",
              class: "block w-full lg:w-96 shadow"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="grid lg:flex space-y-5 lg:space-y-0 lg:gap-3"${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VueTailwindDatepicker), {
              modelValue: date.value,
              "onUpdate:modelValue": ($event) => date.value = $event,
              "input-classes": "bg-white text-black border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm rounded-full ",
              options: options.value,
              formatter: formatter.value,
              placeholder: "Bulan",
              separator: " - ",
              "use-range": "",
              "as-single": "",
              i18n: "id"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              "model-value": unref(filter),
              "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : filter = $event,
              "model-valueModifiers": { number: true },
              option: _ctx.$page.props.selectCategory,
              class: "block w-full shadow"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class=""${_scopeId}><!--[-->`);
            ssrRenderList(props.transaction, (date2, index) => {
              _push2(`<!--[--><h3 class="text-sm text-gray-900 font-medium ml-5 mt-5 mb-1"${_scopeId}>${ssrInterpolate(index)}</h3><div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600"${_scopeId}><!--[-->`);
              ssrRenderList(date2, (history) => {
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
                        _push3(`<!--[--> ke ${ssrInterpolate(history.money_transfer.to.name)} <!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</p><div class="ml-2 flex-shrink-0 flex"${_scopeId2}><p class="${ssrRenderClass([history.color, "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])}"${_scopeId2}>${ssrInterpolate(history.status)}</p></div></div><div class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-end"])}"${_scopeId2}><p class="font-medium mr-2"${_scopeId2}>${ssrInterpolate(history.user.name)}</p><p class="text-sm"${_scopeId2}>#${ssrInterpolate(history.user.slug)}</p></div><div class="flex justify-between"${_scopeId2}><div class="flex"${_scopeId2}><p class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-center text-sm mr-2"])}"${_scopeId2}> #${ssrInterpolate(history.order_id)}</p><p class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-center text-sm"])}"${_scopeId2}> Rp ${ssrInterpolate(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount))}</p></div><div class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-center text-sm"])}"${_scopeId2}>${ssrInterpolate(formattedDate(history.created_at))}</div></div></div>`);
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
                                createTextVNode(" ke " + toDisplayString(history.money_transfer.to.name) + " ", 1)
                              ], 64)) : createCommentVNode("", true)
                            ], 2),
                            createVNode("div", { class: "ml-2 flex-shrink-0 flex" }, [
                              createVNode("p", {
                                class: ["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", history.color]
                              }, toDisplayString(history.status), 3)
                            ])
                          ]),
                          createVNode("div", {
                            class: ["flex items-end", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                          }, [
                            createVNode("p", { class: "font-medium mr-2" }, toDisplayString(history.user.name), 1),
                            createVNode("p", { class: "text-sm" }, "#" + toDisplayString(history.user.slug), 1)
                          ], 2),
                          createVNode("div", { class: "flex justify-between" }, [
                            createVNode("div", { class: "flex" }, [
                              createVNode("p", {
                                class: ["flex items-center text-sm mr-2", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                              }, " #" + toDisplayString(history.order_id), 3),
                              createVNode("p", {
                                class: ["flex items-center text-sm", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                              }, " Rp " + toDisplayString(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount)), 3)
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
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300" }, [
                createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                  createVNode("div", { class: "flex-1 truncate" }, [
                    createVNode("div", { class: "flex items-center space-x-3" }, [
                      createVNode("h3", { class: "truncate text-sm text-gray-600" }, "Total Laba")
                    ]),
                    createVNode("p", { class: "mt-1 truncate text-sm font-medium text-gray-900" }, "Rp " + toDisplayString(formatPrice(Number(props.gross_amount) - Number(props.amount))), 1)
                  ]),
                  createVNode("i", { class: "fa-duotone fa-money-bill-1-wave text-green-600 text-3xl flex-shrink-0" })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "-mt-px flex divide-x divide-gray-300 dark:divide-gray-600" }, [
                    createVNode("div", { class: "flex w-0 flex-1" }, [
                      createVNode("div", { class: "relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4" }, [
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("div", { class: "text-xs text-gray-500" }, "Modal"),
                          createVNode("div", { class: "text-sm font-medium text-gray-700" }, "Rp " + toDisplayString(formatPrice(props.amount)), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex w-0 flex-1" }, [
                      createVNode("div", { class: "relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4" }, [
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("div", { class: "text-xs text-gray-500" }, "Omzet"),
                          createVNode("div", { class: "text-sm font-medium text-gray-700" }, "Rp " + toDisplayString(formatPrice(props.gross_amount)), 1)
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(_sfc_main$2, {
                    type: "text",
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : search = $event,
                    placeholder: "Cari disini",
                    class: "block w-full lg:w-96 shadow"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", { class: "grid lg:flex space-y-5 lg:space-y-0 lg:gap-3" }, [
                createVNode("div", { class: "w-full" }, [
                  createVNode(unref(VueTailwindDatepicker), {
                    modelValue: date.value,
                    "onUpdate:modelValue": ($event) => date.value = $event,
                    "input-classes": "bg-white text-black border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm rounded-full ",
                    options: options.value,
                    formatter: formatter.value,
                    placeholder: "Bulan",
                    separator: " - ",
                    "use-range": "",
                    "as-single": "",
                    i18n: "id"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "formatter"])
                ]),
                createVNode("div", { class: "w-full" }, [
                  createVNode(_sfc_main$3, {
                    "model-value": unref(filter),
                    "onUpdate:modelValue": ($event) => isRef(filter) ? filter.value = $event : filter = $event,
                    "model-valueModifiers": { number: true },
                    option: _ctx.$page.props.selectCategory,
                    class: "block w-full shadow"
                  }, null, 8, ["model-value", "onUpdate:modelValue", "option"])
                ])
              ]),
              createVNode("div", { class: "" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.transaction, (date2, index) => {
                  return openBlock(), createBlock(Fragment, null, [
                    createVNode("h3", { class: "text-sm text-gray-900 font-medium ml-5 mt-5 mb-1" }, toDisplayString(index), 1),
                    createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300" }, [
                      createVNode("ul", {
                        role: "list",
                        class: "divide-y divide-gray-300 dark:divide-gray-600"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(date2, (history) => {
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
                                        createTextVNode(" ke " + toDisplayString(history.money_transfer.to.name) + " ", 1)
                                      ], 64)) : createCommentVNode("", true)
                                    ], 2),
                                    createVNode("div", { class: "ml-2 flex-shrink-0 flex" }, [
                                      createVNode("p", {
                                        class: ["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", history.color]
                                      }, toDisplayString(history.status), 3)
                                    ])
                                  ]),
                                  createVNode("div", {
                                    class: ["flex items-end", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                                  }, [
                                    createVNode("p", { class: "font-medium mr-2" }, toDisplayString(history.user.name), 1),
                                    createVNode("p", { class: "text-sm" }, "#" + toDisplayString(history.user.slug), 1)
                                  ], 2),
                                  createVNode("div", { class: "flex justify-between" }, [
                                    createVNode("div", { class: "flex" }, [
                                      createVNode("p", {
                                        class: ["flex items-center text-sm mr-2", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                                      }, " #" + toDisplayString(history.order_id), 3),
                                      createVNode("p", {
                                        class: ["flex items-center text-sm", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                                      }, " Rp " + toDisplayString(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount)), 3)
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
                }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Transaction/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
