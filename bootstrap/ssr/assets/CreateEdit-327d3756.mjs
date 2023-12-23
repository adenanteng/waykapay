import { ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, openBlock, createBlock, Fragment, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d45ca2f7.mjs";
import { useForm } from "@inertiajs/vue3";
import "./MobileMenu-5acf9387.mjs";
import "./TextInput-581d553f.mjs";
import "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./PreviousButton-54c32c2b.mjs";
import { _ as _sfc_main$3 } from "./FormSection-b0f83775.mjs";
import { _ as _sfc_main$6 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$5 } from "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$4 } from "./InputLabel-3c261e52.mjs";
import "./ActionSection-b1b3d881.mjs";
import "./DialogModal-98d96ed5.mjs";
import "./SecondaryButton-0a2fd542.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./SectionTitle-592cad78.mjs";
const _sfc_main = {
  __name: "CreateEdit",
  __ssrInlineRender: true,
  props: {
    users: Object,
    // response: Object,
    customer: Object,
    fee: Number
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      user_id: props.users.id ?? null,
      order_id: props.customer.data.ref_id,
      customer_no: props.customer.data.customer_no,
      product_name: props.customer.data.customer_name,
      sku: props.customer.data.buyer_sku_code,
      admin: props.customer.data.admin,
      price: props.customer.data.price,
      selling_price: props.customer.data.selling_price,
      category_id: 12
    });
    const storeInformation = () => {
      form.post(route("product.topup.pasca"), {
        errorBag: "storeInformation",
        preserveScroll: true
        // onSuccess: () => closeModal(),
        // onError: () => passwordInput.value.focus(),
        // onFinish: () => form.reset(),
      });
    };
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    ref(false);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Indihome",
        name: "Indihome",
        desc: "Masukkan nomor"
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
                  _push3(` Indihome `);
                } else {
                  return [
                    createTextVNode(" Indihome ")
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` * Saldo Rekening Rp ${ssrInterpolate(formatPrice(_ctx.$page.props.user.wallet_balance))}`);
                } else {
                  return [
                    createTextVNode(" * Saldo Rekening Rp " + toDisplayString(formatPrice(_ctx.$page.props.user.wallet_balance)), 1)
                  ];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    for: "number",
                    value: "No. Pelanggan"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="font-semibold text-gray-900"${_scopeId2}>${ssrInterpolate(props.customer.data.customer_no)}</div></div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    for: "number",
                    value: "Nama Pelanggan"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="font-semibold text-gray-900"${_scopeId2}>${ssrInterpolate(props.customer.data.customer_name)}</div></div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    for: "number",
                    value: "Lembar Tagihan"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="font-semibold text-gray-900"${_scopeId2}>${ssrInterpolate(props.customer.data.desc.lembar_tagihan)}</div></div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    for: "number",
                    value: "Harga"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="font-semibold text-gray-900"${_scopeId2}> Rp ${ssrInterpolate(formatPrice(props.customer.data.price))}</div></div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    for: "number",
                    value: "Biaya Admin"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="font-semibold text-gray-900"${_scopeId2}> Rp ${ssrInterpolate(formatPrice(props.customer.data.admin))}</div></div><div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    for: "number",
                    value: "Total"
                  }, null, _parent3, _scopeId2));
                  _push3(`<div class="font-semibold text-gray-900"${_scopeId2}> Rp ${ssrInterpolate(formatPrice(props.customer.data.selling_price))}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        for: "number",
                        value: "No. Pelanggan"
                      }),
                      createVNode("div", { class: "font-semibold text-gray-900" }, toDisplayString(props.customer.data.customer_no), 1)
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        for: "number",
                        value: "Nama Pelanggan"
                      }),
                      createVNode("div", { class: "font-semibold text-gray-900" }, toDisplayString(props.customer.data.customer_name), 1)
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        for: "number",
                        value: "Lembar Tagihan"
                      }),
                      createVNode("div", { class: "font-semibold text-gray-900" }, toDisplayString(props.customer.data.desc.lembar_tagihan), 1)
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        for: "number",
                        value: "Harga"
                      }),
                      createVNode("div", { class: "font-semibold text-gray-900" }, " Rp " + toDisplayString(formatPrice(props.customer.data.price)), 1)
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        for: "number",
                        value: "Biaya Admin"
                      }),
                      createVNode("div", { class: "font-semibold text-gray-900" }, " Rp " + toDisplayString(formatPrice(props.customer.data.admin)), 1)
                    ]),
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        for: "number",
                        value: "Total"
                      }),
                      createVNode("div", { class: "font-semibold text-gray-900" }, " Rp " + toDisplayString(formatPrice(props.customer.data.selling_price)), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="grid"${_scopeId}>`);
            if (Number(props.customer.data.buyer_last_saldo) >= Number(props.customer.data.selling_price)) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                class: ["w-full justify-center", { "opacity-25": unref(form).processing }],
                disabled: unref(form).processing || _ctx.$page.props.user.wallet_balance <= props.customer.data.selling_price,
                onClick: storeInformation
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Bayar `);
                  } else {
                    return [
                      createTextVNode(" Bayar ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, {
                on: _ctx.$page.props.user.wallet_balance <= props.customer.data.selling_price,
                class: "mr-3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Saldo anda kurang `);
                  } else {
                    return [
                      createTextVNode(" Saldo anda kurang ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(ssrRenderComponent(_sfc_main$5, {
                class: "w-full justify-center",
                disabled: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Tidak Tersedia `);
                  } else {
                    return [
                      createTextVNode(" Tidak Tersedia ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$3, null, {
                title: withCtx(() => [
                  createTextVNode(" Indihome ")
                ]),
                description: withCtx(() => [
                  createTextVNode(" * Saldo Rekening Rp " + toDisplayString(formatPrice(_ctx.$page.props.user.wallet_balance)), 1)
                ]),
                form: withCtx(() => [
                  createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                    createVNode(_sfc_main$4, {
                      for: "number",
                      value: "No. Pelanggan"
                    }),
                    createVNode("div", { class: "font-semibold text-gray-900" }, toDisplayString(props.customer.data.customer_no), 1)
                  ]),
                  createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                    createVNode(_sfc_main$4, {
                      for: "number",
                      value: "Nama Pelanggan"
                    }),
                    createVNode("div", { class: "font-semibold text-gray-900" }, toDisplayString(props.customer.data.customer_name), 1)
                  ]),
                  createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                    createVNode(_sfc_main$4, {
                      for: "number",
                      value: "Lembar Tagihan"
                    }),
                    createVNode("div", { class: "font-semibold text-gray-900" }, toDisplayString(props.customer.data.desc.lembar_tagihan), 1)
                  ]),
                  createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                    createVNode(_sfc_main$4, {
                      for: "number",
                      value: "Harga"
                    }),
                    createVNode("div", { class: "font-semibold text-gray-900" }, " Rp " + toDisplayString(formatPrice(props.customer.data.price)), 1)
                  ]),
                  createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                    createVNode(_sfc_main$4, {
                      for: "number",
                      value: "Biaya Admin"
                    }),
                    createVNode("div", { class: "font-semibold text-gray-900" }, " Rp " + toDisplayString(formatPrice(props.customer.data.admin)), 1)
                  ]),
                  createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                    createVNode(_sfc_main$4, {
                      for: "number",
                      value: "Total"
                    }),
                    createVNode("div", { class: "font-semibold text-gray-900" }, " Rp " + toDisplayString(formatPrice(props.customer.data.selling_price)), 1)
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { class: "grid" }, [
                Number(props.customer.data.buyer_last_saldo) >= Number(props.customer.data.selling_price) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode(_sfc_main$5, {
                    class: ["w-full justify-center", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing || _ctx.$page.props.user.wallet_balance <= props.customer.data.selling_price,
                    onClick: storeInformation
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Bayar ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  createVNode(_sfc_main$6, {
                    on: _ctx.$page.props.user.wallet_balance <= props.customer.data.selling_price,
                    class: "mr-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Saldo anda kurang ")
                    ]),
                    _: 1
                  }, 8, ["on"])
                ], 64)) : (openBlock(), createBlock(_sfc_main$5, {
                  key: 1,
                  class: "w-full justify-center",
                  disabled: ""
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Tidak Tersedia ")
                  ]),
                  _: 1
                }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/PascaInternet/Indihome/CreateEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
