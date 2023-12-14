import { ref, onMounted, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "./AppLayout-1cc769bf.mjs";
import moment from "moment";
import { toClipboard } from "@soerenmartius/vue3-clipboard";
import Popper from "vue3-popper";
import "@inertiajs/vue3";
import { A as ApplicationLogoTitle } from "./ApplicationLogoTitle-9de108fc.mjs";
import { useShare } from "@vueuse/core";
import "./BlankLayout-efcc5a51.mjs";
import "./SecondaryButton-70b2499c.mjs";
import "./PrimaryButton-3137fc48.mjs";
import { _ as _sfc_main$1 } from "./PrintLayout-e9a87f59.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
const _sfc_main = {
  __name: "Share",
  __ssrInlineRender: true,
  props: {
    // users: Object,
    history: Object
  },
  setup(__props) {
    const props = __props;
    useShare();
    ref(null);
    onMounted(() => {
    });
    ref(null);
    ref(null);
    ref(null);
    function formattedDate(value) {
      return moment(value).format("DD MMM Y HH:mm");
    }
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: props.history.product_name,
        name: props.history.product_name,
        desc: "lorem ipsum dolor sit"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            _push2(`<div class="min-h-screen flex justify-center items-center py-5"${_scopeId}><div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden border border-gray-300"${_scopeId}><div class="px-4 py-5 flex flex-col justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(ApplicationLogoTitle, null, null, _parent2, _scopeId));
            _push2(`<h3 class="mt-1 text-lg font-bold leading-6 text-gray-900"${_scopeId}>Transaksi Berhasil</h3></div><div class="border-t border-gray-600 border-dashed px-4 py-5"${_scopeId}><div class="grid grid-cols-1 gap-x-4 gap-y-2 text-gray-900"${_scopeId}><div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Tanggal</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(formattedDate(props.history.updated_at))}</div></div><div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Kode Referensi</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.order_id)}</div></div><span class="my-2 border-t border-gray-600 border-dashed block"${_scopeId}></span>`);
            if (props.history.category_id == 1) {
              _push2(`<div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Kategori</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.category)}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.history.category_id == 1) {
              _push2(`<div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Sumber Dana</div>`);
              if (props.history.virtual_account) {
                _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.virtual_account.bank)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (props.history.wallet_account) {
                _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.wallet_account.bank)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (props.history.offline_account) {
                _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.offline_account.bank)}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.history.category_id == 99) {
              _push2(`<!--[--><div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Jenis Transaksi</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.product_name)}</div></div><div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Bank Tujuan</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate((_a = props.history.money_transfer) == null ? void 0 : _a.bank)}</div></div><div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Nama Tujuan</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate((_c = (_b = props.history.money_transfer) == null ? void 0 : _b.to) == null ? void 0 : _c.name)}</div></div><div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>No. Rekening Tujuan</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate((_e = (_d = props.history.money_transfer) == null ? void 0 : _d.to) == null ? void 0 : _e.phone)}</div></div><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (props.history.category_id != 99 && props.history.category_id != 1) {
              _push2(`<div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Produk</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.product_name)}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.history.category_id != 99 && props.history.category_id != 1) {
              _push2(`<div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>No. Kustomer</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.customer_no)}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.history.category_id == 5) {
              _push2(`<!--[--><div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Nama Kustomer</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.desc.split("/")[1])}</div></div><div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Stroom</div><div class="text-sm font-bold"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Popper), {
                content: "Sukses Copy",
                arrow: "",
                placement: "right-end"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<button class=""${_scopeId2}>${ssrInterpolate(props.history.desc.split("/")[0])}</button>`);
                  } else {
                    return [
                      createVNode("button", {
                        onClick: ($event) => unref(toClipboard)(props.history.desc.split("/")[0]),
                        class: ""
                      }, toDisplayString(props.history.desc.split("/")[0]), 9, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div><!--]-->`);
            } else {
              _push2(`<div class="flex justify-between gap-5"${_scopeId}><div class="text-sm"${_scopeId}>Keterangan</div><div class="text-sm font-semibold text-right truncate"${_scopeId}>${ssrInterpolate(props.history.desc ?? "-")}</div></div>`);
            }
            _push2(`<span class="my-2 border-t border-gray-600 border-dashed block"${_scopeId}></span><div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Nominal</div><div class="text-sm font-semibold"${_scopeId}> Rp ${ssrInterpolate(props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(Number(props.history.amount) + Number(props.history.agent_commission)) : formatPrice(Number(props.history.gross_amount) + Number(props.history.agent_commission)))}</div></div><div class="flex justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Biaya Admin</div><div class="text-sm font-semibold"${_scopeId}> Rp ${ssrInterpolate(props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.admin_fee) : "0")}</div></div><span class="my-2 border-t border-gray-600 border-dashed block"${_scopeId}></span><div class="flex justify-between"${_scopeId}><div class="text-sm font-bold"${_scopeId}>Total</div><div class="text-sm font-bold"${_scopeId}>Rp ${ssrInterpolate(formatPrice(Number(props.history.gross_amount) + Number(props.history.agent_commission)))}</div></div></div></div><div class="border-t border-gray-600 border-dashed px-4 py-5 text-xs text-gray-500"${_scopeId}><p${_scopeId}>CV Cahaya Matahari Dunia</p><p${_scopeId}>NPWP: 50.079.228.8-326.000</p><p${_scopeId}>Jl. Lintas Sumatera, Baradatu, Way Kanan, Lampung - 34761</p></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen flex justify-center items-center py-5" }, [
                createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden border border-gray-300" }, [
                  createVNode("div", { class: "px-4 py-5 flex flex-col justify-center items-center" }, [
                    createVNode(ApplicationLogoTitle),
                    createVNode("h3", { class: "mt-1 text-lg font-bold leading-6 text-gray-900" }, "Transaksi Berhasil")
                  ]),
                  createVNode("div", { class: "border-t border-gray-600 border-dashed px-4 py-5" }, [
                    createVNode("div", { class: "grid grid-cols-1 gap-x-4 gap-y-2 text-gray-900" }, [
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Tanggal"),
                        createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(formattedDate(props.history.updated_at)), 1)
                      ]),
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Kode Referensi"),
                        createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.order_id), 1)
                      ]),
                      createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block" }),
                      props.history.category_id == 1 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex justify-between"
                      }, [
                        createVNode("div", { class: "text-sm" }, "Kategori"),
                        createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.category), 1)
                      ])) : createCommentVNode("", true),
                      props.history.category_id == 1 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "flex justify-between"
                      }, [
                        createVNode("div", { class: "text-sm" }, "Sumber Dana"),
                        props.history.virtual_account ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm font-semibold uppercase"
                        }, toDisplayString(props.history.virtual_account.bank), 1)) : createCommentVNode("", true),
                        props.history.wallet_account ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-sm font-semibold uppercase"
                        }, toDisplayString(props.history.wallet_account.bank), 1)) : createCommentVNode("", true),
                        props.history.offline_account ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "text-sm font-semibold uppercase"
                        }, toDisplayString(props.history.offline_account.bank), 1)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      props.history.category_id == 99 ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Jenis Transaksi"),
                          createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString(props.history.product_name), 1)
                        ]),
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Bank Tujuan"),
                          createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString((_f = props.history.money_transfer) == null ? void 0 : _f.bank), 1)
                        ]),
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Nama Tujuan"),
                          createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString((_h = (_g = props.history.money_transfer) == null ? void 0 : _g.to) == null ? void 0 : _h.name), 1)
                        ]),
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "No. Rekening Tujuan"),
                          createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString((_j = (_i = props.history.money_transfer) == null ? void 0 : _i.to) == null ? void 0 : _j.phone), 1)
                        ])
                      ], 64)) : createCommentVNode("", true),
                      props.history.category_id != 99 && props.history.category_id != 1 ? (openBlock(), createBlock("div", {
                        key: 3,
                        class: "flex justify-between"
                      }, [
                        createVNode("div", { class: "text-sm" }, "Produk"),
                        createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString(props.history.product_name), 1)
                      ])) : createCommentVNode("", true),
                      props.history.category_id != 99 && props.history.category_id != 1 ? (openBlock(), createBlock("div", {
                        key: 4,
                        class: "flex justify-between"
                      }, [
                        createVNode("div", { class: "text-sm" }, "No. Kustomer"),
                        createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.customer_no), 1)
                      ])) : createCommentVNode("", true),
                      props.history.category_id == 5 ? (openBlock(), createBlock(Fragment, { key: 5 }, [
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Nama Kustomer"),
                          createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.desc.split("/")[1]), 1)
                        ]),
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Stroom"),
                          createVNode("div", { class: "text-sm font-bold" }, [
                            createVNode(unref(Popper), {
                              content: "Sukses Copy",
                              arrow: "",
                              placement: "right-end"
                            }, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  onClick: ($event) => unref(toClipboard)(props.history.desc.split("/")[0]),
                                  class: ""
                                }, toDisplayString(props.history.desc.split("/")[0]), 9, ["onClick"])
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ], 64)) : (openBlock(), createBlock("div", {
                        key: 6,
                        class: "flex justify-between gap-5"
                      }, [
                        createVNode("div", { class: "text-sm" }, "Keterangan"),
                        createVNode("div", { class: "text-sm font-semibold text-right truncate" }, toDisplayString(props.history.desc ?? "-"), 1)
                      ])),
                      createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block" }),
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Nominal"),
                        createVNode("div", { class: "text-sm font-semibold" }, " Rp " + toDisplayString(props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(Number(props.history.amount) + Number(props.history.agent_commission)) : formatPrice(Number(props.history.gross_amount) + Number(props.history.agent_commission))), 1)
                      ]),
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Biaya Admin"),
                        createVNode("div", { class: "text-sm font-semibold" }, " Rp " + toDisplayString(props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.admin_fee) : "0"), 1)
                      ]),
                      createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block" }),
                      createVNode("div", { class: "flex justify-between" }, [
                        createVNode("div", { class: "text-sm font-bold" }, "Total"),
                        createVNode("div", { class: "text-sm font-bold" }, "Rp " + toDisplayString(formatPrice(Number(props.history.gross_amount) + Number(props.history.agent_commission))), 1)
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "border-t border-gray-600 border-dashed px-4 py-5 text-xs text-gray-500" }, [
                    createVNode("p", null, "CV Cahaya Matahari Dunia"),
                    createVNode("p", null, "NPWP: 50.079.228.8-326.000"),
                    createVNode("p", null, "Jl. Lintas Sumatera, Baradatu, Way Kanan, Lampung - 34761")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/History/Share.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
