import { computed, ref, watch, withCtx, createVNode, toDisplayString, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useForm, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$7 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$2 } from "./FormSection-cdefd75b.mjs";
import { _ as _sfc_main$5 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$3 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$8 } from "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$4 } from "./TextInput-581d553f.mjs";
import { _ as _sfc_main$1 } from "./ActionSection-b1b3d881.mjs";
import { _ as _sfc_main$6 } from "./TextAreaInput-724f9eae.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdateInformationForm",
  __ssrInlineRender: true,
  props: {
    users: Object | String,
    response: Object | String,
    bank: Object,
    account_no: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      // user_id: props.users.id ?? null,
      amount: null,
      bank: props.bank,
      account_no: props.account_no,
      desc: null
    });
    const { ...userInfo } = computed(() => usePage().props.user).value;
    const message = ref(null);
    const storeInformation = () => {
      form.amount = amount.value.replaceAll(".", "");
      if (Number(form.amount) >= Number(userInfo.wallet_balance)) {
        message.value = "Saldo kurang";
      } else {
        if (userInfo.pin) {
          form.post(route("pin.moneyTransfer"), {
            errorBag: "storeInformation",
            preserveScroll: true,
            replace: true,
            onSuccess: () => {
            }
          });
        } else {
          form.post(route("money-transfer.confirm"), {
            errorBag: "storeInformation",
            preserveScroll: true,
            replace: true,
            onSuccess: () => {
            }
          });
        }
      }
    };
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    const amount = ref(null);
    watch(amount, (newAmount) => {
      amount.value = newAmount.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center px-2"${_scopeId}><div class="flex-shrink-0"${_scopeId}><img class="h-5 w-full"${ssrRenderAttr("src", props.bank.logo)}${ssrRenderAttr("alt", props.bank.name)}${_scopeId}></div><div class="ml-3 min-w-0 flex-1"${_scopeId}><div class="text-base font-medium text-gray-800 truncate capitalize"${_scopeId}>${ssrInterpolate(props.users.name)}</div><div class="text-sm font-medium text-gray-500 truncate"${_scopeId}>${ssrInterpolate(props.account_no)}</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center px-2" }, [
                createVNode("div", { class: "flex-shrink-0" }, [
                  createVNode("img", {
                    class: "h-5 w-full",
                    src: props.bank.logo,
                    alt: props.bank.name
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("div", { class: "ml-3 min-w-0 flex-1" }, [
                  createVNode("div", { class: "text-base font-medium text-gray-800 truncate capitalize" }, toDisplayString(props.users.name), 1),
                  createVNode("div", { class: "text-sm font-medium text-gray-500 truncate" }, toDisplayString(props.account_no), 1)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$2, { onSubmitted: storeInformation }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Mau Transfer berapa? `);
          } else {
            return [
              createTextVNode(" Mau Transfer berapa? ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "amount",
              value: "Nominal"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "amount",
              modelValue: amount.value,
              "onUpdate:modelValue": ($event) => amount.value = $event,
              type: "tel",
              class: "mt-1 block w-full rounded-l-none",
              min: "1",
              max: Number(_ctx.$page.props.user.wallet_balance) <= 2e6 ? _ctx.$page.props.user.wallet_balance : 2e6,
              required: "",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              message: unref(form).errors.amount || message.value,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`<p class="mt-1 text-xs text-gray-600"${_scopeId}> Nominal Rp 1.000 - Rp ${ssrInterpolate(Number(_ctx.$page.props.user.wallet_balance) <= 2e6 ? formatPrice(_ctx.$page.props.user.wallet_balance) : "2.000.000")}</p></div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "amount",
              value: "Keterangan"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              id: "desc",
              modelValue: unref(form).desc,
              "onUpdate:modelValue": ($event) => unref(form).desc = $event,
              type: "text",
              class: "mt-1 block w-full",
              rows: "1"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              message: unref(form).errors.desc,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                createVNode(_sfc_main$3, {
                  for: "amount",
                  value: "Nominal"
                }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$4, {
                    id: "amount",
                    modelValue: amount.value,
                    "onUpdate:modelValue": ($event) => amount.value = $event,
                    type: "tel",
                    class: "mt-1 block w-full rounded-l-none",
                    min: "1",
                    max: Number(_ctx.$page.props.user.wallet_balance) <= 2e6 ? _ctx.$page.props.user.wallet_balance : 2e6,
                    required: "",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "max"])
                ]),
                createVNode(_sfc_main$5, {
                  message: unref(form).errors.amount || message.value,
                  class: "mt-2"
                }, null, 8, ["message"]),
                createVNode("p", { class: "mt-1 text-xs text-gray-600" }, " Nominal Rp 1.000 - Rp " + toDisplayString(Number(_ctx.$page.props.user.wallet_balance) <= 2e6 ? formatPrice(_ctx.$page.props.user.wallet_balance) : "2.000.000"), 1)
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$3, {
                  for: "amount",
                  value: "Keterangan"
                }),
                createVNode(_sfc_main$6, {
                  id: "desc",
                  modelValue: unref(form).desc,
                  "onUpdate:modelValue": ($event) => unref(form).desc = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  rows: "1"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$5, {
                  message: unref(form).errors.desc,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$7, {
              on: unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Berhasil disimpan. `);
                } else {
                  return [
                    createTextVNode(" Berhasil disimpan. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Konfirmasi `);
                } else {
                  return [
                    createTextVNode(" Konfirmasi ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$7, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Berhasil disimpan. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$8, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Konfirmasi ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/MoneyTransfer/Partials/UpdateInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
