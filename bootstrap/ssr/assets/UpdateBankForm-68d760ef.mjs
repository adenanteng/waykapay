import { mergeProps, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$1 } from "./FormSection-cdefd75b.mjs";
import { _ as _sfc_main$2 } from "./InputError-6aeb8d97.mjs";
import "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$4 } from "./PrimaryButton-3137fc48.mjs";
import "./TextInput-581d553f.mjs";
import { RadioGroup, RadioGroupOption } from "@headlessui/vue";
import { CheckCircleIcon } from "@heroicons/vue/20/solid";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdateBankForm",
  __ssrInlineRender: true,
  props: {
    users: Object | String,
    response: Object | String,
    amount: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      user_id: props.users.id ?? null,
      amount: props.amount,
      method: null
    });
    const storeInformation = () => {
      form.post(route("deposit.create"), {
        errorBag: "storeInformation",
        preserveScroll: true,
        replace: true,
        onSuccess: () => {
        }
      });
    };
    const mailingLists = [
      // { id: 1, name: 'bca', logo: '/img/vendor/BCA.svg', adminFee: 'Biaya admin Rp 4.000' },
      { id: 2, name: "bni", logo: "/img/vendor/BNI.svg", adminFee: "Biaya admin Rp 4.000" },
      { id: 3, name: "bri", logo: "/img/vendor/BRI.svg", adminFee: "Biaya admin Rp 4.000" },
      { id: 4, name: "mandiri", logo: "/img/vendor/MANDIRI.svg", adminFee: "Biaya admin Rp 4.000" },
      { id: 5, name: "permata", logo: "/img/vendor/PERMATA.svg", adminFee: "Biaya admin Rp 4.000" },
      { id: 6, name: "bsi", logo: "/img/vendor/BSI.svg", adminFee: "Biaya admin Rp 4.000" },
      // { id: 7, name: 'qris', logo: '/img/vendor/QRIS.svg', adminFee: 'Biaya admin 2%' },
      // { id: 8, name: 'ovo', logo: '/img/vendor/OVO.svg', adminFee: 'Biaya admin 2%' },
      // { id: 9, name: 'shopeepay_app', logo: '/img/vendor/SHOPEEPAY.svg', adminFee: 'Biaya admin 2%' },
      // { id: 10, name: 'linkaja_app', logo: '/img/vendor/LINKAJA.svg', adminFee: 'Biaya admin 2%' },
      // { id: 11, name: 'dana', logo: '/img/vendor/DANA.svg', adminFee: 'Biaya admin 2%' },
      // { id: 12, name: 'gopay', logo: '/img/vendor/GOPAY.svg', adminFee: 'Biaya admin 2%' },
      { id: 13, name: "alfamart", logo: "/img/vendor/ALFAMART.svg", adminFee: "Biaya admin Rp 4.000" }
      // { id: 14, name: 'indomaret', logo: '/img/vendor/ALFAMART.svg', adminFee: 'Biaya admin Rp 4.000' },
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ onSubmitted: storeInformation }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pilih metode pembayaranmu. `);
          } else {
            return [
              createTextVNode(" Pilih metode pembayaranmu. ")
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
            _push2(`<div class="col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(RadioGroup), {
              modelValue: unref(form).method,
              "onUpdate:modelValue": ($event) => unref(form).method = $event
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(mailingLists, (mailingList) => {
                    _push3(ssrRenderComponent(unref(RadioGroupOption), {
                      as: "template",
                      key: mailingList.id,
                      value: mailingList
                    }, {
                      default: withCtx(({ checked, active }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none"])}"${_scopeId3}><div class="flex flex-1 justify-center"${_scopeId3}><div class="flex flex-col items-center"${_scopeId3}><img${ssrRenderAttr("src", mailingList.logo)} class="h-7" alt=""${_scopeId3}></div></div>`);
                          _push4(ssrRenderComponent(unref(CheckCircleIcon), {
                            class: [!checked ? "invisible" : "", "h-5 w-5 text-primary-600"],
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="${ssrRenderClass([active ? "border" : "border-2", checked ? "border-primary-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-3xl"])}" aria-hidden="true"${_scopeId3}></span></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: [checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none"]
                            }, [
                              createVNode("div", { class: "flex flex-1 justify-center" }, [
                                createVNode("div", { class: "flex flex-col items-center" }, [
                                  createVNode("img", {
                                    src: mailingList.logo,
                                    class: "h-7",
                                    alt: ""
                                  }, null, 8, ["src"])
                                ])
                              ]),
                              createVNode(unref(CheckCircleIcon), {
                                class: [!checked ? "invisible" : "", "h-5 w-5 text-primary-600"],
                                "aria-hidden": "true"
                              }, null, 8, ["class"]),
                              createVNode("span", {
                                class: [active ? "border" : "border-2", checked ? "border-primary-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-3xl"],
                                "aria-hidden": "true"
                              }, null, 2)
                            ], 2)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--></div>`);
                } else {
                  return [
                    createVNode("div", { class: "mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(mailingLists, (mailingList) => {
                        return createVNode(unref(RadioGroupOption), {
                          as: "template",
                          key: mailingList.id,
                          value: mailingList
                        }, {
                          default: withCtx(({ checked, active }) => [
                            createVNode("div", {
                              class: [checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none"]
                            }, [
                              createVNode("div", { class: "flex flex-1 justify-center" }, [
                                createVNode("div", { class: "flex flex-col items-center" }, [
                                  createVNode("img", {
                                    src: mailingList.logo,
                                    class: "h-7",
                                    alt: ""
                                  }, null, 8, ["src"])
                                ])
                              ]),
                              createVNode(unref(CheckCircleIcon), {
                                class: [!checked ? "invisible" : "", "h-5 w-5 text-primary-600"],
                                "aria-hidden": "true"
                              }, null, 8, ["class"]),
                              createVNode("span", {
                                class: [active ? "border" : "border-2", checked ? "border-primary-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-3xl"],
                                "aria-hidden": "true"
                              }, null, 2)
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              message: unref(form).errors.method,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6" }, [
                createVNode(unref(RadioGroup), {
                  modelValue: unref(form).method,
                  "onUpdate:modelValue": ($event) => unref(form).method = $event
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(mailingLists, (mailingList) => {
                        return createVNode(unref(RadioGroupOption), {
                          as: "template",
                          key: mailingList.id,
                          value: mailingList
                        }, {
                          default: withCtx(({ checked, active }) => [
                            createVNode("div", {
                              class: [checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none"]
                            }, [
                              createVNode("div", { class: "flex flex-1 justify-center" }, [
                                createVNode("div", { class: "flex flex-col items-center" }, [
                                  createVNode("img", {
                                    src: mailingList.logo,
                                    class: "h-7",
                                    alt: ""
                                  }, null, 8, ["src"])
                                ])
                              ]),
                              createVNode(unref(CheckCircleIcon), {
                                class: [!checked ? "invisible" : "", "h-5 w-5 text-primary-600"],
                                "aria-hidden": "true"
                              }, null, 8, ["class"]),
                              createVNode("span", {
                                class: [active ? "border" : "border-2", checked ? "border-primary-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-3xl"],
                                "aria-hidden": "true"
                              }, null, 2)
                            ], 2)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 64))
                    ])
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$2, {
                  message: unref(form).errors.method,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
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
            _push2(ssrRenderComponent(_sfc_main$4, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).method === null
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
              createVNode(_sfc_main$3, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Berhasil disimpan. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$4, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).method === null
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Deposit/Partials/UpdateBankForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
