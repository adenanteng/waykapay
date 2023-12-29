import { onMounted, computed, ref, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d45ca2f7.mjs";
import { router, useForm, usePage } from "@inertiajs/vue3";
import bcrypt from "bcryptjs";
import "./MobileMenu-5acf9387.mjs";
import { _ as _sfc_main$5 } from "./TextInput-581d553f.mjs";
import { _ as _sfc_main$6 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./PreviousButton-54c32c2b.mjs";
import { _ as _sfc_main$3 } from "./FormSection-d7f7af6c.mjs";
import { _ as _sfc_main$8 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$9 } from "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$4 } from "./InputLabel-3c261e52.mjs";
import "./ActionSection-b1b3d881.mjs";
import { a as _sfc_main$7 } from "./DialogModal-98d96ed5.mjs";
import "./SecondaryButton-0a2fd542.mjs";
import VOtpInput from "vue3-otp-input";
import Loading from "./Loading-860dd56d.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./SectionTitle-592cad78.mjs";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    response: void 0,
    category_id: Number,
    product: String,
    fee_25: Number,
    fee_50: Number,
    fee_75: Number,
    fee_100: Number,
    fee_200: Number,
    fee_500: Number,
    fee_1000: Number,
    fee_max: Number
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      router.reload({ only: ["response"] });
    });
    const form = useForm({
      customer_no: "",
      product_name: "",
      sku: "",
      amount: "",
      category_id: props.category_id ?? null,
      fee: null,
      pin: null
    });
    const { ...userInfo } = computed(() => usePage().props.user).value;
    const storeInformation = () => {
      if (fee.value != null) {
        form.fee = fee.value;
      }
      form.post(route("product.topup"), {
        errorBag: "storeInformation",
        preserveScroll: true,
        onSuccess: () => closeModal()
      });
    };
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    const confirmingModal = ref(false);
    ref(null);
    let productName = ref(null);
    ref(null);
    let productPrice = ref(null);
    let productDesc = ref(null);
    const fee = ref(null);
    const confirmModal = (data) => {
      if (form.customer_no !== "") {
        confirmingModal.value = true;
        form.sku = data.buyer_sku_code;
        form.amount = data.price;
        form.product_name = data.product_name;
        data.buyer_sku_code;
        productName = data.product_name;
        data.brand;
        if (Number(data.price) < 1e3) {
          fee.value = 0;
        } else if (Number(data.price) < 25e3) {
          fee.value = Number(props.fee_25);
        } else if (Number(data.price) < 5e4) {
          fee.value = Number(props.fee_50);
        } else if (Number(data.price) < 75e3) {
          fee.value = Number(props.fee_75);
        } else if (Number(data.price) < 1e5) {
          fee.value = Number(props.fee_100);
        } else if (Number(data.price) < 2e5) {
          fee.value = Number(props.fee_200);
        } else if (Number(data.price) < 5e5) {
          fee.value = Number(props.fee_500);
        } else if (Number(data.price) < 1e6) {
          fee.value = Number(props.fee_1000);
        } else {
          fee.value = Number(props.fee_max);
        }
        productPrice = Number(fee.value) + Number(data.price);
        productDesc = data.desc;
      }
    };
    function sort(arr) {
      return arr.slice().sort(function(a, b) {
        return a.price - b.price;
      });
    }
    const handleModal = () => {
      if (userInfo.pin) {
        confirmingModal.value = false;
        pinModal.value = true;
      } else {
        storeInformation();
      }
    };
    const closeModal = () => {
      confirmingModal.value = false;
      pinModal.value = false;
    };
    const tab = ref(props.product == "MAXIM" ? "Customer" : "Umum");
    const pinModal = ref(false);
    const otpInput = ref(VOtpInput | null);
    const bindModal = ref("");
    const msgError = ref(false);
    const handleOnComplete = (value) => {
      let hash = value;
      hash = hash.replace(/^\$2y(.+)$/i, "$2a$1");
      bcrypt.compare(hash, userInfo.pin, function(err, res) {
        var _a;
        if (res) {
          storeInformation();
        } else {
          msgError.value = true;
          (_a = otpInput.value) == null ? void 0 : _a.clearInput();
        }
      });
    };
    const handleOnChange = (value) => {
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: props.product,
        name: props.product,
        desc: "Lorem ipsum"
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
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, { class: "sticky top-0 z-40" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(props.product)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(props.product), 1)
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
                    value: "No Kustomer"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    id: "number",
                    modelValue: unref(form).customer_no,
                    "onUpdate:modelValue": ($event) => unref(form).customer_no = $event,
                    type: "number",
                    class: "mt-1 block w-full",
                    minlength: "8",
                    required: "",
                    autofocus: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    message: unref(form).errors.customer_no,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        for: "number",
                        value: "No Kustomer"
                      }),
                      createVNode(_sfc_main$5, {
                        id: "number",
                        modelValue: unref(form).customer_no,
                        "onUpdate:modelValue": ($event) => unref(form).customer_no = $event,
                        type: "number",
                        class: "mt-1 block w-full",
                        minlength: "8",
                        required: "",
                        autofocus: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$6, {
                        message: unref(form).errors.customer_no,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="border-b border-gray-300"${_scopeId}><nav class="-mb-px flex" aria-label="Tabs"${_scopeId}>`);
            if (props.product != "MAXIM") {
              _push2(`<button class="${ssrRenderClass([tab.value == "Umum" ? "border-primary-500 text-primary-600" : "text-gray-500 border-gray-300", "w-full py-4 px-1 text-center border-b-2 font-medium text-sm"])}"${_scopeId}> Umum </button>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.product == "GO PAY" || props.product == "MAXIM") {
              _push2(`<button class="${ssrRenderClass([tab.value == "Customer" ? "border-primary-500 text-primary-600" : "text-gray-500 border-gray-300", "w-full py-4 px-1 text-center border-b-2 font-medium text-sm"])}"${_scopeId}> Customer </button>`);
            } else {
              _push2(`<!---->`);
            }
            if (props.product == "GO PAY" || props.product == "MAXIM") {
              _push2(`<button class="${ssrRenderClass([tab.value == "Driver" ? "border-primary-500 text-primary-600" : "text-gray-500 border-gray-300", "w-full py-4 px-1 text-center border-b-2 font-medium text-sm"])}"${_scopeId}> Driver </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</nav></div><ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600"${_scopeId}>`);
            if (props.response === void 0) {
              _push2(ssrRenderComponent(Loading, null, null, _parent2, _scopeId));
            } else if ((_a = props.response.data) == null ? void 0 : _a.rc) {
              _push2(`<div class="grid justify-center text-center px-5 py-3"${_scopeId}><i class="fa-regular fa-exclamation-triangle text-2xl text-red-600"${_scopeId}></i><p class="text-sm text-gray-600"${_scopeId}>Produk sedang tidak tersedia, coba beberapa saat lagi.</p></div>`);
            } else {
              _push2(`<!--[-->`);
              ssrRenderList(sort(props.response.data), (data) => {
                _push2(`<!--[-->`);
                if (data.brand == props.product) {
                  _push2(`<!--[-->`);
                  if (data.type == tab.value) {
                    _push2(`<li class="relative px-6 py-5 flex items-center space-x-3"${_scopeId}><div class="flex-shrink-0"${_scopeId}><img class="w-10"${ssrRenderAttr("src", "/img/vendor/" + props.product + ".svg")} alt=""${_scopeId}></div><div class="flex-1 min-w-0"${_scopeId}>`);
                    if (Number(data.price) < Number(_ctx.$page.props.digiflazz_saldo) && data.buyer_product_status && data.seller_product_status) {
                      _push2(`<button class="focus:outline-none text-left"${_scopeId}><span class="absolute inset-0" aria-hidden="true"${_scopeId}></span><p class="text-sm font-medium text-gray-900"${_scopeId}>${ssrInterpolate(data.product_name)}</p><p class="text-sm text-gray-500 truncate"${_scopeId}>`);
                      if (Number(data.price) < 1e3) {
                        _push2(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(data.price)))}<!--]-->`);
                      } else if (Number(data.price) < 25e3) {
                        _push2(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(data.price) + Number(props.fee_25)))}<!--]-->`);
                      } else if (Number(data.price) < 5e4) {
                        _push2(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(data.price) + Number(props.fee_50)))}<!--]-->`);
                      } else if (Number(data.price) < 75e3) {
                        _push2(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(data.price) + Number(props.fee_75)))}<!--]-->`);
                      } else if (Number(data.price) < 1e5) {
                        _push2(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(data.price) + Number(props.fee_100)))}<!--]-->`);
                      } else if (Number(data.price) < 2e5) {
                        _push2(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(data.price) + Number(props.fee_200)))}<!--]-->`);
                      } else if (Number(data.price) < 5e5) {
                        _push2(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(data.price) + Number(props.fee_500)))}<!--]-->`);
                      } else if (Number(data.price) < 1e6) {
                        _push2(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(data.price) + Number(props.fee_1000)))}<!--]-->`);
                      } else {
                        _push2(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(data.price) + Number(props.fee_max)))}<!--]-->`);
                      }
                      _push2(`</p></button>`);
                    } else {
                      _push2(`<div class="focus:outline-none text-left"${_scopeId}><p class="text-sm font-medium text-gray-500"${_scopeId}>${ssrInterpolate(data.product_name)}</p><p class="text-sm text-gray-500 truncate"${_scopeId}>Tidak tersedia</p></div>`);
                    }
                    _push2(`</div></li>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<!--]-->`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            }
            _push2(`</ul>`);
            _push2(ssrRenderComponent(_sfc_main$7, {
              show: confirmingModal.value,
              onClose: closeModal
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Lanjutkan Pembayaran `);
                } else {
                  return [
                    createTextVNode(" Lanjutkan Pembayaran ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-2 justify-between gap-2"${_scopeId2}><div class=""${_scopeId2}> Produk </div><div class="text-right font-medium"${_scopeId2}>${ssrInterpolate(unref(productName))}</div><div class=""${_scopeId2}> No Customer </div><div class="text-right font-medium"${_scopeId2}>${ssrInterpolate(unref(form).customer_no)}</div><div class=""${_scopeId2}> Harga </div><div class="text-right font-medium"${_scopeId2}> Rp ${ssrInterpolate(formatPrice(unref(productPrice)))}</div><div class=""${_scopeId2}> Detail Produk </div></div><div class="border border-gray-300 rounded-3xl p-2 mt-2"${_scopeId2}>${ssrInterpolate(unref(productDesc))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-2 justify-between gap-2" }, [
                      createVNode("div", { class: "" }, " Produk "),
                      createVNode("div", { class: "text-right font-medium" }, toDisplayString(unref(productName)), 1),
                      createVNode("div", { class: "" }, " No Customer "),
                      createVNode("div", { class: "text-right font-medium" }, toDisplayString(unref(form).customer_no), 1),
                      createVNode("div", { class: "" }, " Harga "),
                      createVNode("div", { class: "text-right font-medium" }, " Rp " + toDisplayString(formatPrice(unref(productPrice))), 1),
                      createVNode("div", { class: "" }, " Detail Produk ")
                    ]),
                    createVNode("div", { class: "border border-gray-300 rounded-3xl p-2 mt-2" }, toDisplayString(unref(productDesc)), 1)
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid items-center w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    on: _ctx.$page.props.user.wallet_balance <= unref(productPrice),
                    class: "mr-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Saldo anda kurang `);
                      } else {
                        return [
                          createTextVNode(" Saldo anda kurang ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$9, {
                    class: ["w-full justify-center", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing || _ctx.$page.props.user.wallet_balance <= unref(productPrice),
                    onClick: handleModal
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Beli `);
                      } else {
                        return [
                          createTextVNode(" Beli ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid items-center w-full" }, [
                      createVNode(_sfc_main$8, {
                        on: _ctx.$page.props.user.wallet_balance <= unref(productPrice),
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Saldo anda kurang ")
                        ]),
                        _: 1
                      }, 8, ["on"]),
                      createVNode(_sfc_main$9, {
                        class: ["w-full justify-center", { "opacity-25": unref(form).processing }],
                        disabled: unref(form).processing || _ctx.$page.props.user.wallet_balance <= unref(productPrice),
                        onClick: handleModal
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Beli ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              show: pinModal.value,
              onClose: closeModal
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full text-center"${_scopeId2}> Masukkan PIN transaksi kamu </div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full text-center" }, " Masukkan PIN transaksi kamu ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid justify-center"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(VOtpInput), {
                    ref_key: "otpInput",
                    ref: otpInput,
                    value: bindModal.value,
                    "onUpdate:value": ($event) => bindModal.value = $event,
                    "input-classes": "otp-input",
                    separator: "",
                    "num-inputs": 6,
                    "should-auto-focus": true,
                    "input-type": "letter-numeric",
                    conditionalClass: ["one", "two", "three", "four", "five", "six"],
                    onOnChange: handleOnChange,
                    onOnComplete: handleOnComplete
                  }, null, _parent3, _scopeId2));
                  if (msgError.value) {
                    _push3(`<p class="w-full text-center text-sm text-red-600 mt-2"${_scopeId2}>Pin salah, silahkan coba lagi.</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid justify-center" }, [
                      createVNode(unref(VOtpInput), {
                        ref_key: "otpInput",
                        ref: otpInput,
                        value: bindModal.value,
                        "onUpdate:value": ($event) => bindModal.value = $event,
                        "input-classes": "otp-input",
                        separator: "",
                        "num-inputs": 6,
                        "should-auto-focus": true,
                        "input-type": "letter-numeric",
                        conditionalClass: ["one", "two", "three", "four", "five", "six"],
                        onOnChange: handleOnChange,
                        onOnComplete: handleOnComplete
                      }, null, 8, ["value", "onUpdate:value"]),
                      msgError.value ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "w-full text-center text-sm text-red-600 mt-2"
                      }, "Pin salah, silahkan coba lagi.")) : createCommentVNode("", true)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, { class: "sticky top-0 z-40" }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(props.product), 1)
                ]),
                description: withCtx(() => [
                  createTextVNode(" * Saldo Rekening Rp " + toDisplayString(formatPrice(_ctx.$page.props.user.wallet_balance)), 1)
                ]),
                form: withCtx(() => [
                  createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                    createVNode(_sfc_main$4, {
                      for: "number",
                      value: "No Kustomer"
                    }),
                    createVNode(_sfc_main$5, {
                      id: "number",
                      modelValue: unref(form).customer_no,
                      "onUpdate:modelValue": ($event) => unref(form).customer_no = $event,
                      type: "number",
                      class: "mt-1 block w-full",
                      minlength: "8",
                      required: "",
                      autofocus: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$6, {
                      message: unref(form).errors.customer_no,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                _: 1
              }),
              createVNode("div", { class: "border-b border-gray-300" }, [
                createVNode("nav", {
                  class: "-mb-px flex",
                  "aria-label": "Tabs"
                }, [
                  props.product != "MAXIM" ? (openBlock(), createBlock("button", {
                    key: 0,
                    class: ["w-full py-4 px-1 text-center border-b-2 font-medium text-sm", tab.value == "Umum" ? "border-primary-500 text-primary-600" : "text-gray-500 border-gray-300"],
                    onClick: ($event) => tab.value = "Umum"
                  }, " Umum ", 10, ["onClick"])) : createCommentVNode("", true),
                  props.product == "GO PAY" || props.product == "MAXIM" ? (openBlock(), createBlock("button", {
                    key: 1,
                    class: ["w-full py-4 px-1 text-center border-b-2 font-medium text-sm", tab.value == "Customer" ? "border-primary-500 text-primary-600" : "text-gray-500 border-gray-300"],
                    onClick: ($event) => tab.value = "Customer"
                  }, " Customer ", 10, ["onClick"])) : createCommentVNode("", true),
                  props.product == "GO PAY" || props.product == "MAXIM" ? (openBlock(), createBlock("button", {
                    key: 2,
                    class: ["w-full py-4 px-1 text-center border-b-2 font-medium text-sm", tab.value == "Driver" ? "border-primary-500 text-primary-600" : "text-gray-500 border-gray-300"],
                    onClick: ($event) => tab.value = "Driver"
                  }, " Driver ", 10, ["onClick"])) : createCommentVNode("", true)
                ])
              ]),
              createVNode("ul", { class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600" }, [
                props.response === void 0 ? (openBlock(), createBlock(Loading, { key: 0 })) : ((_b = props.response.data) == null ? void 0 : _b.rc) ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "grid justify-center text-center px-5 py-3"
                }, [
                  createVNode("i", { class: "fa-regular fa-exclamation-triangle text-2xl text-red-600" }),
                  createVNode("p", { class: "text-sm text-gray-600" }, "Produk sedang tidak tersedia, coba beberapa saat lagi.")
                ])) : (openBlock(true), createBlock(Fragment, { key: 2 }, renderList(sort(props.response.data), (data) => {
                  return openBlock(), createBlock(Fragment, null, [
                    data.brand == props.product ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      data.type == tab.value ? (openBlock(), createBlock("li", {
                        key: 0,
                        class: "relative px-6 py-5 flex items-center space-x-3"
                      }, [
                        createVNode("div", { class: "flex-shrink-0" }, [
                          createVNode("img", {
                            class: "w-10",
                            src: "/img/vendor/" + props.product + ".svg",
                            alt: ""
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "flex-1 min-w-0" }, [
                          Number(data.price) < Number(_ctx.$page.props.digiflazz_saldo) && data.buyer_product_status && data.seller_product_status ? (openBlock(), createBlock("button", {
                            key: 0,
                            onClick: ($event) => confirmModal(data),
                            class: "focus:outline-none text-left"
                          }, [
                            createVNode("span", {
                              class: "absolute inset-0",
                              "aria-hidden": "true"
                            }),
                            createVNode("p", { class: "text-sm font-medium text-gray-900" }, toDisplayString(data.product_name), 1),
                            createVNode("p", { class: "text-sm text-gray-500 truncate" }, [
                              Number(data.price) < 1e3 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createTextVNode(" Rp " + toDisplayString(formatPrice(Number(data.price))), 1)
                              ], 64)) : Number(data.price) < 25e3 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createTextVNode(" Rp " + toDisplayString(formatPrice(Number(data.price) + Number(props.fee_25))), 1)
                              ], 64)) : Number(data.price) < 5e4 ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                createTextVNode(" Rp " + toDisplayString(formatPrice(Number(data.price) + Number(props.fee_50))), 1)
                              ], 64)) : Number(data.price) < 75e3 ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                                createTextVNode(" Rp " + toDisplayString(formatPrice(Number(data.price) + Number(props.fee_75))), 1)
                              ], 64)) : Number(data.price) < 1e5 ? (openBlock(), createBlock(Fragment, { key: 4 }, [
                                createTextVNode(" Rp " + toDisplayString(formatPrice(Number(data.price) + Number(props.fee_100))), 1)
                              ], 64)) : Number(data.price) < 2e5 ? (openBlock(), createBlock(Fragment, { key: 5 }, [
                                createTextVNode(" Rp " + toDisplayString(formatPrice(Number(data.price) + Number(props.fee_200))), 1)
                              ], 64)) : Number(data.price) < 5e5 ? (openBlock(), createBlock(Fragment, { key: 6 }, [
                                createTextVNode(" Rp " + toDisplayString(formatPrice(Number(data.price) + Number(props.fee_500))), 1)
                              ], 64)) : Number(data.price) < 1e6 ? (openBlock(), createBlock(Fragment, { key: 7 }, [
                                createTextVNode(" Rp " + toDisplayString(formatPrice(Number(data.price) + Number(props.fee_1000))), 1)
                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 8 }, [
                                createTextVNode(" Rp " + toDisplayString(formatPrice(Number(data.price) + Number(props.fee_max))), 1)
                              ], 64))
                            ])
                          ], 8, ["onClick"])) : (openBlock(), createBlock("div", {
                            key: 1,
                            class: "focus:outline-none text-left"
                          }, [
                            createVNode("p", { class: "text-sm font-medium text-gray-500" }, toDisplayString(data.product_name), 1),
                            createVNode("p", { class: "text-sm text-gray-500 truncate" }, "Tidak tersedia")
                          ]))
                        ])
                      ])) : createCommentVNode("", true)
                    ], 64)) : createCommentVNode("", true)
                  ], 64);
                }), 256))
              ]),
              createVNode(_sfc_main$7, {
                show: confirmingModal.value,
                onClose: closeModal
              }, {
                title: withCtx(() => [
                  createTextVNode(" Lanjutkan Pembayaran ")
                ]),
                content: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-2 justify-between gap-2" }, [
                    createVNode("div", { class: "" }, " Produk "),
                    createVNode("div", { class: "text-right font-medium" }, toDisplayString(unref(productName)), 1),
                    createVNode("div", { class: "" }, " No Customer "),
                    createVNode("div", { class: "text-right font-medium" }, toDisplayString(unref(form).customer_no), 1),
                    createVNode("div", { class: "" }, " Harga "),
                    createVNode("div", { class: "text-right font-medium" }, " Rp " + toDisplayString(formatPrice(unref(productPrice))), 1),
                    createVNode("div", { class: "" }, " Detail Produk ")
                  ]),
                  createVNode("div", { class: "border border-gray-300 rounded-3xl p-2 mt-2" }, toDisplayString(unref(productDesc)), 1)
                ]),
                footer: withCtx(() => [
                  createVNode("div", { class: "grid items-center w-full" }, [
                    createVNode(_sfc_main$8, {
                      on: _ctx.$page.props.user.wallet_balance <= unref(productPrice),
                      class: "mr-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Saldo anda kurang ")
                      ]),
                      _: 1
                    }, 8, ["on"]),
                    createVNode(_sfc_main$9, {
                      class: ["w-full justify-center", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing || _ctx.$page.props.user.wallet_balance <= unref(productPrice),
                      onClick: handleModal
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Beli ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ]),
                _: 1
              }, 8, ["show"]),
              createVNode(_sfc_main$7, {
                show: pinModal.value,
                onClose: closeModal
              }, {
                title: withCtx(() => [
                  createVNode("div", { class: "w-full text-center" }, " Masukkan PIN transaksi kamu ")
                ]),
                content: withCtx(() => [
                  createVNode("div", { class: "grid justify-center" }, [
                    createVNode(unref(VOtpInput), {
                      ref_key: "otpInput",
                      ref: otpInput,
                      value: bindModal.value,
                      "onUpdate:value": ($event) => bindModal.value = $event,
                      "input-classes": "otp-input",
                      separator: "",
                      "num-inputs": 6,
                      "should-auto-focus": true,
                      "input-type": "letter-numeric",
                      conditionalClass: ["one", "two", "three", "four", "five", "six"],
                      onOnChange: handleOnChange,
                      onOnComplete: handleOnComplete
                    }, null, 8, ["value", "onUpdate:value"]),
                    msgError.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "w-full text-center text-sm text-red-600 mt-2"
                    }, "Pin salah, silahkan coba lagi.")) : createCommentVNode("", true)
                  ])
                ]),
                _: 1
              }, 8, ["show"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
