import { onMounted, mergeProps, withCtx, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d45ca2f7.mjs";
import { router } from "@inertiajs/vue3";
import "moment";
import { _ as _sfc_main$2 } from "./PrimaryButton-3722f774.mjs";
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
    amount: void 0,
    gross_amount: void 0,
    prev_trx: void 0,
    prev_amount: void 0,
    prev_gross_amount: void 0
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      router.reload({ only: ["trx", "amount", "gross_amount", "prev_trx", "prev_amount", "prev_gross_amount"] });
    });
    let now = Number(props.gross_amount) - Number(props.amount);
    let prev = Number(props.prev_gross_amount) - Number(props.prev_amount);
    const stats = [
      {
        name: "Total Keuntungan",
        stat: "Rp " + formatPrice(now),
        previousStat: "Rp " + formatPrice(prev),
        change: "Rp " + formatPrice(Math.round(Number(now) - Number(prev))),
        changeType: Number(now) >= Number(prev) ? "increase" : "decrease"
      },
      {
        name: "Transaksi Sukses",
        stat: props.trx,
        previousStat: props.prev_trx,
        change: Math.round(Number(props.trx) - Number(props.prev_trx)),
        changeType: Number(props.trx) >= Number(props.prev_trx) ? "increase" : "decrease"
      },
      {
        name: "Modal",
        stat: "Rp " + formatPrice(Number(props.amount)),
        previousStat: "Rp " + formatPrice(Number(props.prev_amount)),
        change: "Rp " + formatPrice(Math.round(Number(props.amount) - Number(props.prev_amount))),
        changeType: Number(props.amount) >= Number(props.prev_amount) ? "increase" : "decrease"
      },
      {
        name: "Omzet",
        stat: "Rp " + formatPrice(Number(props.gross_amount)),
        previousStat: "Rp " + formatPrice(Number(props.prev_gross_amount)),
        change: "Rp " + formatPrice(Math.round(Number(props.gross_amount) - Number(props.prev_gross_amount))),
        changeType: Number(props.gross_amount) >= Number(props.prev_gross_amount) ? "increase" : "decrease"
      }
    ];
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
            _push2(`<div${_scopeId}><dl class="mt-2 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 overflow-hidden rounded-3xl bg-white bg-opacity-50 backdrop-blur border border-gray-300 shadow-lg md:grid-cols-4 md:divide-y-0 md:divide-x"${_scopeId}><!--[-->`);
            ssrRenderList(stats, (item) => {
              _push2(`<div class="px-4 py-5 sm:p-6"${_scopeId}><dt class="text-sm font-normal text-gray-900"${_scopeId}>${ssrInterpolate(item.name)}</dt><dd class="mt-1 flex items-end justify-between md:block lg:flex"${_scopeId}><div class="grid items-baseline text-lg font-semibold text-primary-600"${_scopeId}>${ssrInterpolate(item.stat)} <span class="text-xs font-medium text-gray-500"${_scopeId}>dari ${ssrInterpolate(item.previousStat)}</span></div><div class="${ssrRenderClass([item.changeType === "increase" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800", "inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0"])}"${_scopeId}>`);
              if (item.changeType === "increase") {
                _push2(`<i class="mr-2 text-xs text-green-500 fa-regular fa-arrow-up"${_scopeId}></i>`);
              } else {
                _push2(`<i class="mr-2 text-xs text-red-500 fa-regular fa-arrow-down"${_scopeId}></i>`);
              }
              _push2(` ${ssrInterpolate(item.change)}</div></dd></div>`);
            });
            _push2(`<!--]--></dl></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              as: "a",
              href: _ctx.route("transaction.detail"),
              class: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lihat Detail Transaksi <i class="fa-duotone fa-arrow-right ml-2"${_scopeId2}></i>`);
                } else {
                  return [
                    createTextVNode(" Lihat Detail Transaksi "),
                    createVNode("i", { class: "fa-duotone fa-arrow-right ml-2" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", null, [
                createVNode("dl", { class: "mt-2 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 overflow-hidden rounded-3xl bg-white bg-opacity-50 backdrop-blur border border-gray-300 shadow-lg md:grid-cols-4 md:divide-y-0 md:divide-x" }, [
                  (openBlock(), createBlock(Fragment, null, renderList(stats, (item) => {
                    return createVNode("div", {
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
                  }), 64))
                ])
              ]),
              createVNode(_sfc_main$2, {
                as: "a",
                href: _ctx.route("transaction.detail"),
                class: ""
              }, {
                default: withCtx(() => [
                  createTextVNode(" Lihat Detail Transaksi "),
                  createVNode("i", { class: "fa-duotone fa-arrow-right ml-2" })
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
