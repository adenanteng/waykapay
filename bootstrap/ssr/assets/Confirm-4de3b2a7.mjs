import { mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, Fragment, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-967352dd.mjs";
import { useForm } from "@inertiajs/vue3";
import "./MobileMenu-5acf9387.mjs";
import { _ as _sfc_main$5 } from "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$4 } from "./SecondaryButton-0a2fd542.mjs";
import { _ as _sfc_main$2 } from "./PreviousButton-54c32c2b.mjs";
import "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$3 } from "./FormSection-cdefd75b.mjs";
import { toClipboard } from "@soerenmartius/vue3-clipboard";
import Popper from "vue3-popper";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import "moment/moment.js";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./SectionTitle-592cad78.mjs";
const _sfc_main = {
  __name: "Confirm",
  __ssrInlineRender: true,
  props: {
    transaction: Object,
    virtual_account: Object | String,
    wallet_account: Object | String,
    offline_account: Object | String,
    manual_account: Object | String
  },
  setup(__props) {
    const props = __props;
    useForm({
      transaction: props.transaction
      // bank: props.bank ?? null,
      // gopay: props.gopay ?? null,
    });
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Konfirmasi Deposit",
        name: "Konfirmasi Deposit",
        desc: "Lorem ipsum dolor sit amet"
      }, _attrs), {
        previous: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Pembayaran `);
                } else {
                  return [
                    createTextVNode(" Pembayaran ")
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3)
                  ;
                else {
                  return [];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="col-span-6"${_scopeId2}><div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900"${_scopeId2}>`);
                  if (props.virtual_account) {
                    _push3(`<!--[--><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId2}><div class="text-sm"${_scopeId2}>Bank</div><div class="text-sm font-semibold"${_scopeId2}>${ssrInterpolate(props.virtual_account.bank)}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId2}><div class="text-sm"${_scopeId2}>No. Virtual Account</div><div class="text-sm font-semibold"${_scopeId2}>${ssrInterpolate(props.virtual_account.va_number)} `);
                    _push3(ssrRenderComponent(unref(Popper), {
                      class: "text-sm text-primary-900 font-normal lowercase",
                      content: "Sukses copy",
                      arrow: "",
                      placement: "right-end"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<button class=""${_scopeId3}><i class="fa-duotone fa-paste ml-2"${_scopeId3}></i></button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: "",
                              onClick: ($event) => unref(toClipboard)(props.virtual_account.va_number)
                            }, [
                              createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div><!--]-->`);
                  } else if (props.wallet_account) {
                    _push3(`<!--[-->`);
                    if (props.wallet_account.qr_code !== "-") {
                      _push3(`<div class="sm:col-span-2 flex flex-col items-center my-5 gap-3"${_scopeId2}><div class="text-sm"${_scopeId2}><img src="/img/vendor/QRIS.svg" class="h-8 w-auto" alt="QRIS"${_scopeId2}></div><div class="text-sm font-semibold"${_scopeId2}>`);
                      _push3(ssrRenderComponent(unref(VueQrcode), {
                        value: props.wallet_account.qr_code,
                        tag: "svg",
                        options: {
                          width: 200,
                          color: {
                            dark: "#000",
                            light: "#fff"
                          }
                        }
                      }, null, _parent3, _scopeId2));
                      _push3(`</div></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<!--]-->`);
                  } else if (props.offline_account) {
                    _push3(`<!--[--><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId2}><div class="text-sm"${_scopeId2}>Metode Pembayaran</div><div class="text-sm font-semibold"${_scopeId2}>${ssrInterpolate(props.offline_account.bank)}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId2}><div class="text-sm"${_scopeId2}>No. Pembayaran</div><div class="text-sm font-semibold"${_scopeId2}>${ssrInterpolate(props.offline_account.payment_code)} `);
                    _push3(ssrRenderComponent(unref(Popper), {
                      class: "text-sm text-primary-900 font-normal lowercase",
                      content: "Sukses copy",
                      arrow: "",
                      placement: "right-end"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<button class=""${_scopeId3}><i class="fa-duotone fa-paste ml-2"${_scopeId3}></i></button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: "",
                              onClick: ($event) => unref(toClipboard)(props.offline_account.payment_code)
                            }, [
                              createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div><!--]-->`);
                  } else if (props.manual_account) {
                    _push3(`<!--[--><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId2}><div class="text-sm"${_scopeId2}>Metode Pembayaran</div><div class="text-sm font-semibold"${_scopeId2}>${ssrInterpolate(props.manual_account.bank)}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId2}><div class="text-sm"${_scopeId2}>Atas Nama</div><div class="text-sm font-semibold"${_scopeId2}>Agus Suryaman</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId2}><div class="text-sm"${_scopeId2}>No. Rekening</div><div class="text-sm font-semibold"${_scopeId2}>${ssrInterpolate(props.manual_account.payment_code)} `);
                    _push3(ssrRenderComponent(unref(Popper), {
                      class: "text-sm text-primary-900 font-normal lowercase",
                      content: "Sukses copy",
                      arrow: "",
                      placement: "right-end"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<button class=""${_scopeId3}><i class="fa-duotone fa-paste ml-2"${_scopeId3}></i></button>`);
                        } else {
                          return [
                            createVNode("button", {
                              class: "",
                              onClick: ($event) => unref(toClipboard)(props.manual_account.payment_code)
                            }, [
                              createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                            ], 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div><!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<span class="my-2 border-t border-gray-600 border-dashed block sm:hidden"${_scopeId2}></span><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId2}><div class="text-sm"${_scopeId2}>Nominal</div><div class="text-sm font-semibold"${_scopeId2}>Rp ${ssrInterpolate(formatPrice(props.transaction.amount))}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId2}><div class="text-sm"${_scopeId2}>Kode Unik</div><div class="text-sm font-semibold"${_scopeId2}>${ssrInterpolate(Number(props.transaction.gross_amount) - Number(props.transaction.amount))}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId2}><div class="text-sm"${_scopeId2}>Total</div><div class="text-sm font-semibold"${_scopeId2}>Rp ${ssrInterpolate(formatPrice(props.transaction.gross_amount))}</div></div>`);
                  if (props.manual_account) {
                    _push3(`<div class=""${_scopeId2}><p class="text-xs text-gray-500"${_scopeId2}>Untuk memudahkan transaksi harap transfer nominal beserta kode uniknya ya.</p></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "col-span-6" }, [
                      createVNode("div", { class: "grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900" }, [
                        props.virtual_account ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Bank"),
                            createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.virtual_account.bank), 1)
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "No. Virtual Account"),
                            createVNode("div", { class: "text-sm font-semibold" }, [
                              createTextVNode(toDisplayString(props.virtual_account.va_number) + " ", 1),
                              createVNode(unref(Popper), {
                                class: "text-sm text-primary-900 font-normal lowercase",
                                content: "Sukses copy",
                                arrow: "",
                                placement: "right-end"
                              }, {
                                default: withCtx(() => [
                                  createVNode("button", {
                                    class: "",
                                    onClick: ($event) => unref(toClipboard)(props.virtual_account.va_number)
                                  }, [
                                    createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                                  ], 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ], 64)) : props.wallet_account ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          props.wallet_account.qr_code !== "-" ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "sm:col-span-2 flex flex-col items-center my-5 gap-3"
                          }, [
                            createVNode("div", { class: "text-sm" }, [
                              createVNode("img", {
                                src: "/img/vendor/QRIS.svg",
                                class: "h-8 w-auto",
                                alt: "QRIS"
                              })
                            ]),
                            createVNode("div", { class: "text-sm font-semibold" }, [
                              createVNode(unref(VueQrcode), {
                                value: props.wallet_account.qr_code,
                                tag: "svg",
                                options: {
                                  width: 200,
                                  color: {
                                    dark: "#000",
                                    light: "#fff"
                                  }
                                }
                              }, null, 8, ["value"])
                            ])
                          ])) : createCommentVNode("", true)
                        ], 64)) : props.offline_account ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Metode Pembayaran"),
                            createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.offline_account.bank), 1)
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "No. Pembayaran"),
                            createVNode("div", { class: "text-sm font-semibold" }, [
                              createTextVNode(toDisplayString(props.offline_account.payment_code) + " ", 1),
                              createVNode(unref(Popper), {
                                class: "text-sm text-primary-900 font-normal lowercase",
                                content: "Sukses copy",
                                arrow: "",
                                placement: "right-end"
                              }, {
                                default: withCtx(() => [
                                  createVNode("button", {
                                    class: "",
                                    onClick: ($event) => unref(toClipboard)(props.offline_account.payment_code)
                                  }, [
                                    createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                                  ], 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ], 64)) : props.manual_account ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Metode Pembayaran"),
                            createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.manual_account.bank), 1)
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Atas Nama"),
                            createVNode("div", { class: "text-sm font-semibold" }, "Agus Suryaman")
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "No. Rekening"),
                            createVNode("div", { class: "text-sm font-semibold" }, [
                              createTextVNode(toDisplayString(props.manual_account.payment_code) + " ", 1),
                              createVNode(unref(Popper), {
                                class: "text-sm text-primary-900 font-normal lowercase",
                                content: "Sukses copy",
                                arrow: "",
                                placement: "right-end"
                              }, {
                                default: withCtx(() => [
                                  createVNode("button", {
                                    class: "",
                                    onClick: ($event) => unref(toClipboard)(props.manual_account.payment_code)
                                  }, [
                                    createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                                  ], 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ], 64)) : createCommentVNode("", true),
                        createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block sm:hidden" }),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Nominal"),
                          createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(formatPrice(props.transaction.amount)), 1)
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Kode Unik"),
                          createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(Number(props.transaction.gross_amount) - Number(props.transaction.amount)), 1)
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Total"),
                          createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(formatPrice(props.transaction.gross_amount)), 1)
                        ]),
                        props.manual_account ? (openBlock(), createBlock("div", {
                          key: 4,
                          class: ""
                        }, [
                          createVNode("p", { class: "text-xs text-gray-500" }, "Untuk memudahkan transaksi harap transfer nominal beserta kode uniknya ya.")
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-3"${_scopeId2}>`);
                  if (props.manual_account) {
                    _push3(ssrRenderComponent(_sfc_main$4, {
                      class: "border border-gray-300",
                      as: "outside",
                      href: "https://api.whatsapp.com/send?phone=6285839036717&text=Halo%20admin%20Waykapay.%20Saya%20ingin%20mengirimkan%20bukti%20transfer",
                      target: "_blank"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Kirim bukti Transfer `);
                        } else {
                          return [
                            createTextVNode(" Kirim bukti Transfer ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    as: "a",
                    href: _ctx.route("dashboard")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Beranda `);
                      } else {
                        return [
                          createTextVNode(" Beranda ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-3" }, [
                      props.manual_account ? (openBlock(), createBlock(_sfc_main$4, {
                        key: 0,
                        class: "border border-gray-300",
                        as: "outside",
                        href: "https://api.whatsapp.com/send?phone=6285839036717&text=Halo%20admin%20Waykapay.%20Saya%20ingin%20mengirimkan%20bukti%20transfer",
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Kirim bukti Transfer ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_sfc_main$5, {
                        as: "a",
                        href: _ctx.route("dashboard")
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Beranda ")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, null, {
                title: withCtx(() => [
                  createTextVNode(" Pembayaran ")
                ]),
                description: withCtx(() => []),
                form: withCtx(() => [
                  createVNode("div", { class: "col-span-6" }, [
                    createVNode("div", { class: "grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900" }, [
                      props.virtual_account ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Bank"),
                          createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.virtual_account.bank), 1)
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "No. Virtual Account"),
                          createVNode("div", { class: "text-sm font-semibold" }, [
                            createTextVNode(toDisplayString(props.virtual_account.va_number) + " ", 1),
                            createVNode(unref(Popper), {
                              class: "text-sm text-primary-900 font-normal lowercase",
                              content: "Sukses copy",
                              arrow: "",
                              placement: "right-end"
                            }, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  class: "",
                                  onClick: ($event) => unref(toClipboard)(props.virtual_account.va_number)
                                }, [
                                  createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ], 64)) : props.wallet_account ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                        props.wallet_account.qr_code !== "-" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "sm:col-span-2 flex flex-col items-center my-5 gap-3"
                        }, [
                          createVNode("div", { class: "text-sm" }, [
                            createVNode("img", {
                              src: "/img/vendor/QRIS.svg",
                              class: "h-8 w-auto",
                              alt: "QRIS"
                            })
                          ]),
                          createVNode("div", { class: "text-sm font-semibold" }, [
                            createVNode(unref(VueQrcode), {
                              value: props.wallet_account.qr_code,
                              tag: "svg",
                              options: {
                                width: 200,
                                color: {
                                  dark: "#000",
                                  light: "#fff"
                                }
                              }
                            }, null, 8, ["value"])
                          ])
                        ])) : createCommentVNode("", true)
                      ], 64)) : props.offline_account ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Metode Pembayaran"),
                          createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.offline_account.bank), 1)
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "No. Pembayaran"),
                          createVNode("div", { class: "text-sm font-semibold" }, [
                            createTextVNode(toDisplayString(props.offline_account.payment_code) + " ", 1),
                            createVNode(unref(Popper), {
                              class: "text-sm text-primary-900 font-normal lowercase",
                              content: "Sukses copy",
                              arrow: "",
                              placement: "right-end"
                            }, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  class: "",
                                  onClick: ($event) => unref(toClipboard)(props.offline_account.payment_code)
                                }, [
                                  createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ], 64)) : props.manual_account ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Metode Pembayaran"),
                          createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.manual_account.bank), 1)
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Atas Nama"),
                          createVNode("div", { class: "text-sm font-semibold" }, "Agus Suryaman")
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "No. Rekening"),
                          createVNode("div", { class: "text-sm font-semibold" }, [
                            createTextVNode(toDisplayString(props.manual_account.payment_code) + " ", 1),
                            createVNode(unref(Popper), {
                              class: "text-sm text-primary-900 font-normal lowercase",
                              content: "Sukses copy",
                              arrow: "",
                              placement: "right-end"
                            }, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  class: "",
                                  onClick: ($event) => unref(toClipboard)(props.manual_account.payment_code)
                                }, [
                                  createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ], 64)) : createCommentVNode("", true),
                      createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block sm:hidden" }),
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Nominal"),
                        createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(formatPrice(props.transaction.amount)), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Kode Unik"),
                        createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(Number(props.transaction.gross_amount) - Number(props.transaction.amount)), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Total"),
                        createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(formatPrice(props.transaction.gross_amount)), 1)
                      ]),
                      props.manual_account ? (openBlock(), createBlock("div", {
                        key: 4,
                        class: ""
                      }, [
                        createVNode("p", { class: "text-xs text-gray-500" }, "Untuk memudahkan transaksi harap transfer nominal beserta kode uniknya ya.")
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ]),
                actions: withCtx(() => [
                  createVNode("div", { class: "flex gap-3" }, [
                    props.manual_account ? (openBlock(), createBlock(_sfc_main$4, {
                      key: 0,
                      class: "border border-gray-300",
                      as: "outside",
                      href: "https://api.whatsapp.com/send?phone=6285839036717&text=Halo%20admin%20Waykapay.%20Saya%20ingin%20mengirimkan%20bukti%20transfer",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Kirim bukti Transfer ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_sfc_main$5, {
                      as: "a",
                      href: _ctx.route("dashboard")
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Beranda ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Deposit/Confirm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
