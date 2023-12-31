import { onMounted, watch, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d45ca2f7.mjs";
import { router, Link } from "@inertiajs/vue3";
import "moment";
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
    // transaction: undefined,
    trx: void 0,
    admin: void 0,
    amount: void 0,
    gross_amount: void 0,
    prev_trx: void 0,
    prev_amount: void 0,
    prev_gross_amount: void 0
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      router.reload({ only: ["trx", "admin", "amount", "gross_amount", "prev_trx", "prev_amount", "prev_gross_amount"] });
    });
    let stats = [];
    watch(
      () => props.amount,
      () => {
        console.log(props.prev_amount);
        if (props.amount) {
          stats = [
            {
              name: "Total Keuntungan",
              stat: "Rp " + formatPrice(Number(props.gross_amount) - Number(props.amount)),
              previousStat: "Rp " + formatPrice(Number(props.prev_gross_amount) - Number(props.prev_amount)),
              change: "12%",
              changeType: "increase"
            },
            {
              name: "Transaksi Sukses",
              stat: props.trx,
              previousStat: props.prev_trx,
              change: "12%",
              changeType: "increase"
            },
            {
              name: "Modal",
              stat: "Rp " + formatPrice(Number(props.amount)),
              previousStat: "Rp " + formatPrice(Number(props.prev_amount)),
              change: "2.02%",
              changeType: "increase"
            },
            {
              name: "Omzet",
              stat: "Rp " + formatPrice(Number(props.gross_amount)),
              previousStat: "Rp " + formatPrice(Number(props.prev_gross_amount)),
              change: "4.05%",
              changeType: "decrease"
            }
          ];
        }
      }
    );
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
            _push2(`<div${_scopeId}>${ssrInterpolate(props.admin)} <h3 class="font-medium text-gray-900"${_scopeId}>Bulan ini</h3><dl class="mt-2 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 overflow-hidden rounded-3xl bg-white bg-opacity-50 backdrop-blur border border-gray-300 shadow-lg md:grid-cols-4 md:divide-y-0 md:divide-x"${_scopeId}><!--[-->`);
            ssrRenderList(unref(stats), (item) => {
              _push2(`<div class="px-4 py-5 sm:p-6"${_scopeId}><dt class="text-sm font-normal text-gray-900"${_scopeId}>${ssrInterpolate(item.name)}</dt><dd class="mt-1 flex items-end justify-between md:block lg:flex"${_scopeId}><div class="grid items-baseline text-lg font-semibold text-primary-600"${_scopeId}>${ssrInterpolate(item.stat)} <span class="text-xs font-medium text-gray-500"${_scopeId}>dari ${ssrInterpolate(item.previousStat)}</span></div><div class="${ssrRenderClass([item.changeType === "increase" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"])}"${_scopeId}>`);
              if (item.changeType === "increase") {
                _push2(`<i class="mr-2 text-xs text-green-500 fa-regular fa-arrow-up"${_scopeId}></i>`);
              } else {
                _push2(`<i class="mr-2 text-xs text-red-500 fa-regular fa-arrow-down"${_scopeId}></i>`);
              }
              _push2(` ${ssrInterpolate(item.change)}</div></dd></div>`);
            });
            _push2(`<!--]--></dl></div><div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"${_scopeId}><div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><div class="flex-1 truncate"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="truncate text-sm text-gray-600"${_scopeId}>Total Laba</h3></div><p class="mt-1 truncate text-sm font-medium text-gray-900"${_scopeId}>Rp ${ssrInterpolate(formatPrice(Number(props.gross_amount) - Number(props.amount)))}</p></div><i class="fa-duotone fa-money-bill-1-wave text-green-600 text-3xl flex-shrink-0"${_scopeId}></i></div><div${_scopeId}><div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"${_scopeId}><div class="flex w-0 flex-1"${_scopeId}><div class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"${_scopeId}><div class="ml-3"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>Modal</div><div class="text-sm font-medium text-gray-700"${_scopeId}>Rp ${ssrInterpolate(formatPrice(Number(props.amount)))}</div></div></div></div><div class="flex w-0 flex-1"${_scopeId}><div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"${_scopeId}><div class="ml-3"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>Omzet</div><div class="text-sm font-medium text-gray-700"${_scopeId}>Rp ${ssrInterpolate(formatPrice(Number(props.gross_amount)))}</div></div></div></div></div></div></div>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("transaction.detail")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Detail -&gt;`);
                } else {
                  return [
                    createTextVNode("Detail ->")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createTextVNode(toDisplayString(props.admin) + " ", 1),
                createVNode("h3", { class: "font-medium text-gray-900" }, "Bulan ini"),
                createVNode("dl", { class: "mt-2 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 overflow-hidden rounded-3xl bg-white bg-opacity-50 backdrop-blur border border-gray-300 shadow-lg md:grid-cols-4 md:divide-y-0 md:divide-x" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(stats), (item) => {
                    return openBlock(), createBlock("div", {
                      key: item.name,
                      class: "px-4 py-5 sm:p-6"
                    }, [
                      createVNode("dt", { class: "text-sm font-normal text-gray-900" }, toDisplayString(item.name), 1),
                      createVNode("dd", { class: "mt-1 flex items-end justify-between md:block lg:flex" }, [
                        createVNode("div", { class: "grid items-baseline text-lg font-semibold text-primary-600" }, [
                          createTextVNode(toDisplayString(item.stat) + " ", 1),
                          createVNode("span", { class: "text-xs font-medium text-gray-500" }, "dari " + toDisplayString(item.previousStat), 1)
                        ]),
                        createVNode("div", {
                          class: [item.changeType === "increase" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"]
                        }, [
                          item.changeType === "increase" ? (openBlock(), createBlock("i", {
                            key: 0,
                            class: "mr-2 text-xs text-green-500 fa-regular fa-arrow-up"
                          })) : (openBlock(), createBlock("i", {
                            key: 1,
                            class: "mr-2 text-xs text-red-500 fa-regular fa-arrow-down"
                          })),
                          createTextVNode(" " + toDisplayString(item.change), 1)
                        ], 2)
                      ])
                    ]);
                  }), 128))
                ])
              ]),
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
                          createVNode("div", { class: "text-sm font-medium text-gray-700" }, "Rp " + toDisplayString(formatPrice(Number(props.amount))), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex w-0 flex-1" }, [
                      createVNode("div", { class: "relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4" }, [
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("div", { class: "text-xs text-gray-500" }, "Omzet"),
                          createVNode("div", { class: "text-sm font-medium text-gray-700" }, "Rp " + toDisplayString(formatPrice(Number(props.gross_amount))), 1)
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode(unref(Link), {
                href: _ctx.route("transaction.detail")
              }, {
                default: withCtx(() => [
                  createTextVNode("Detail ->")
                ]),
                _: 1
              }, 8, ["href"])
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
