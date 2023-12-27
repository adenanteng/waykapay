import { ref, watch, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$1 } from "./FormSection-d7f7af6c.mjs";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$3 } from "./TextInput-581d553f.mjs";
import moment from "moment/moment.js";
import { _ as _sfc_main$7 } from "./SecondaryButton-0a2fd542.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdateInformationForm",
  __ssrInlineRender: true,
  props: {
    users: Object | String,
    response: Object | String
  },
  setup(__props) {
    const form = useForm({
      // user_id: props.users.id ?? null,
      amount: null
    });
    const storeInformation = () => {
      form.amount = amount.value.replaceAll(".", "");
      form.post(route("deposit.method"), {
        errorBag: "storeInformation",
        preserveScroll: true,
        replace: true,
        onSuccess: () => {
        }
      });
    };
    const clock = moment().format("HH");
    const amount = ref(null);
    watch(amount, (newAmount) => {
      amount.value = newAmount.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, { onSubmitted: storeInformation }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Mau isi saldo berapa? `);
          } else {
            return [
              createTextVNode(" Mau isi saldo berapa? ")
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
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "amount",
              value: "Jumlah Saldo"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "amount",
              modelValue: amount.value,
              "onUpdate:modelValue": ($event) => amount.value = $event,
              type: "tel",
              class: "mt-1 block w-full rounded-l-none",
              min: "1",
              max: "5000000",
              required: "",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.amount,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                createVNode(_sfc_main$2, {
                  for: "amount",
                  value: "Jumlah Saldo"
                }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    id: "amount",
                    modelValue: amount.value,
                    "onUpdate:modelValue": ($event) => amount.value = $event,
                    type: "tel",
                    class: "mt-1 block w-full rounded-l-none",
                    min: "1",
                    max: "5000000",
                    required: "",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.amount,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
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
            _push2(ssrRenderComponent(_sfc_main$5, {
              on: unref(clock) >= 23,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Sistem cut off. `);
                } else {
                  return [
                    createTextVNode(" Sistem cut off. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing || unref(clock) >= 23
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
              createVNode(_sfc_main$5, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Berhasil disimpan. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$5, {
                on: unref(clock) >= 23,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Sistem cut off. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$6, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing || unref(clock) >= 23
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
      _push(`<div class="grid grid-cols-3 lg:grid-cols-6 gap-3">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50 shadow-lg",
        onClick: ($event) => amount.value = 1e4
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`10.000`);
          } else {
            return [
              createTextVNode("10.000")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50 shadow-lg",
        onClick: ($event) => amount.value = 5e4
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`50.000`);
          } else {
            return [
              createTextVNode("50.000")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50 shadow-lg",
        onClick: ($event) => amount.value = 1e5
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`100.000`);
          } else {
            return [
              createTextVNode("100.000")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50 shadow-lg",
        onClick: ($event) => amount.value = 15e4
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`150.000`);
          } else {
            return [
              createTextVNode("150.000")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50 shadow-lg",
        onClick: ($event) => amount.value = 2e5
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`200.000`);
          } else {
            return [
              createTextVNode("200.000")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50 shadow-lg",
        onClick: ($event) => amount.value = 5e5
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`500.000`);
          } else {
            return [
              createTextVNode("500.000")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50 shadow-lg",
        onClick: ($event) => amount.value = 1e6
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`1.000.000`);
          } else {
            return [
              createTextVNode("1.000.000")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50 shadow-lg",
        onClick: ($event) => amount.value = 2e6
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`2.000.000`);
          } else {
            return [
              createTextVNode("2.000.000")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        class: "border border-gray-300 justify-center bg-white dark:bg-gray-600 bg-opacity-50 shadow-lg",
        onClick: ($event) => amount.value = 5e6
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`5.000.000`);
          } else {
            return [
              createTextVNode("5.000.000")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Deposit/Partials/UpdateInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
