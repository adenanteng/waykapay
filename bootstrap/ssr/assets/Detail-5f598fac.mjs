import { ref, onMounted, watch, mergeProps, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d45ca2f7.mjs";
import { router, Link } from "@inertiajs/vue3";
import "./MobileMenu-5acf9387.mjs";
import moment from "moment";
import "./Badge-0aaec22c.mjs";
import "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$2 } from "./TextInput-581d553f.mjs";
import { _ as _sfc_main$4 } from "./Pagination-8bf1701d.mjs";
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
const _sfc_main = {
  __name: "Detail",
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
    }
    // amount: Number,
    // gross_amount: Number,
  },
  setup(__props) {
    const props = __props;
    let search = ref(props.filters.search);
    let filterStatus = ref(props.filters.filterStatus);
    let filterCategory = ref(props.filters.filterCategory);
    const date = ref([]);
    onMounted(() => {
    });
    watch([search, filterStatus, filterCategory, date], ([value, valueFS, valueFC, valueD]) => {
      router.get(
        route("transaction.detail"),
        {
          search: value,
          filter_status: valueFS,
          filter_category: valueFC,
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
            _push2(`<div class=""${_scopeId}><div class="w-full"${_scopeId}>`);
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
              "model-value": unref(filterStatus),
              "onUpdate:modelValue": ($event) => isRef(filterStatus) ? filterStatus.value = $event : filterStatus = $event,
              "model-valueModifiers": { number: true },
              option: _ctx.$page.props.selectStatus,
              class: "block w-full shadow"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              "model-value": unref(filterCategory),
              "onUpdate:modelValue": ($event) => isRef(filterCategory) ? filterCategory.value = $event : filterCategory = $event,
              "model-valueModifiers": { number: true },
              option: _ctx.$page.props.selectCategory,
              class: "block w-full shadow"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class=""${_scopeId}><div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600"${_scopeId}><!--[-->`);
            ssrRenderList(props.transaction.data, (history) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("history.show", history.order_id),
                class: "block hover:bg-primary-50"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="px-4 py-4 sm:px-6"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><p class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "text-sm font-medium truncate capitalize"])}"${_scopeId2}>${ssrInterpolate(history.product_name)} `);
                    if (history.virtual_account) {
                      _push3(`<!--[-->${ssrInterpolate(history.virtual_account.bank)}<!--]-->`);
                    } else if (history.wallet_account) {
                      _push3(`<!--[-->${ssrInterpolate(history.wallet_account.bank)}<!--]-->`);
                    } else if (history.money_transfer) {
                      _push3(`<!--[--> ke ${ssrInterpolate(history.money_transfer.to.name)}<!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</p><div class="ml-2 flex-shrink-0 flex"${_scopeId2}><p class="${ssrRenderClass([history.color, "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])}"${_scopeId2}>${ssrInterpolate(history.status)}</p></div></div><div class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-end"])}"${_scopeId2}><p class="font-medium text-sm mr-2"${_scopeId2}>${ssrInterpolate(history.user.name)}</p><p class="text-xs"${_scopeId2}>#${ssrInterpolate(history.user.slug)}</p></div><div class="flex justify-between"${_scopeId2}><div class="flex"${_scopeId2}><p class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-center text-sm mr-2"])}"${_scopeId2}> #${ssrInterpolate(history.order_id)}</p><p class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-center text-xs"])}"${_scopeId2}> Rp ${ssrInterpolate(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount))}</p></div><div class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-center text-xs"])}"${_scopeId2}>${ssrInterpolate(formattedDate(history.created_at))}</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "px-4 py-4 sm:px-6" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("p", {
                            class: ["text-sm font-medium truncate capitalize", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                          }, [
                            createTextVNode(toDisplayString(history.product_name) + " ", 1),
                            history.virtual_account ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString(history.virtual_account.bank), 1)
                            ], 64)) : history.wallet_account ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(history.wallet_account.bank), 1)
                            ], 64)) : history.money_transfer ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                              createTextVNode(" ke " + toDisplayString(history.money_transfer.to.name), 1)
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
                          createVNode("p", { class: "font-medium text-sm mr-2" }, toDisplayString(history.user.name), 1),
                          createVNode("p", { class: "text-xs" }, "#" + toDisplayString(history.user.slug), 1)
                        ], 2),
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("div", { class: "flex" }, [
                            createVNode("p", {
                              class: ["flex items-center text-sm mr-2", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                            }, " #" + toDisplayString(history.order_id), 3),
                            createVNode("p", {
                              class: ["flex items-center text-xs", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                            }, " Rp " + toDisplayString(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount)), 3)
                          ]),
                          createVNode("div", {
                            class: ["flex items-center text-xs", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
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
            _push2(`<!--]--></ul></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              pagination: props.transaction
            }, null, _parent2, _scopeId));
          } else {
            return [
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
                    "model-value": unref(filterStatus),
                    "onUpdate:modelValue": ($event) => isRef(filterStatus) ? filterStatus.value = $event : filterStatus = $event,
                    "model-valueModifiers": { number: true },
                    option: _ctx.$page.props.selectStatus,
                    class: "block w-full shadow"
                  }, null, 8, ["model-value", "onUpdate:modelValue", "option"])
                ]),
                createVNode("div", { class: "w-full" }, [
                  createVNode(_sfc_main$3, {
                    "model-value": unref(filterCategory),
                    "onUpdate:modelValue": ($event) => isRef(filterCategory) ? filterCategory.value = $event : filterCategory = $event,
                    "model-valueModifiers": { number: true },
                    option: _ctx.$page.props.selectCategory,
                    class: "block w-full shadow"
                  }, null, 8, ["model-value", "onUpdate:modelValue", "option"])
                ])
              ]),
              createVNode("div", { class: "" }, [
                createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300" }, [
                  createVNode("ul", {
                    role: "list",
                    class: "divide-y divide-gray-300 dark:divide-gray-600"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.transaction.data, (history) => {
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
                                  class: ["text-sm font-medium truncate capitalize", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                                }, [
                                  createTextVNode(toDisplayString(history.product_name) + " ", 1),
                                  history.virtual_account ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(toDisplayString(history.virtual_account.bank), 1)
                                  ], 64)) : history.wallet_account ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(toDisplayString(history.wallet_account.bank), 1)
                                  ], 64)) : history.money_transfer ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                    createTextVNode(" ke " + toDisplayString(history.money_transfer.to.name), 1)
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
                                createVNode("p", { class: "font-medium text-sm mr-2" }, toDisplayString(history.user.name), 1),
                                createVNode("p", { class: "text-xs" }, "#" + toDisplayString(history.user.slug), 1)
                              ], 2),
                              createVNode("div", { class: "flex justify-between" }, [
                                createVNode("div", { class: "flex" }, [
                                  createVNode("p", {
                                    class: ["flex items-center text-sm mr-2", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                                  }, " #" + toDisplayString(history.order_id), 3),
                                  createVNode("p", {
                                    class: ["flex items-center text-xs", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                                  }, " Rp " + toDisplayString(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount)), 3)
                                ]),
                                createVNode("div", {
                                  class: ["flex items-center text-xs", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
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
              ]),
              createVNode(_sfc_main$4, {
                pagination: props.transaction
              }, null, 8, ["pagination"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Transaction/Detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
