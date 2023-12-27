import { ref, withCtx, unref, isRef, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$1 } from "./FormSection-d7f7af6c.mjs";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$3 } from "./TextInput-581d553f.mjs";
import { RadioGroup, RadioGroupOption, RadioGroupDescription } from "@headlessui/vue";
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
    const category = ref();
    const categoryLists = [
      { id: 1, name: "Virtual Account", logo: "/img/vendor/BCA.svg", icon: "fa-wallet", desc: 4e3, disabled: false },
      { id: 2, name: "Manual Transfer", logo: "/img/vendor/WAYKAPAY.svg", icon: "fa-bank", desc: 0, disabled: false },
      { id: 3, name: "Retail Offline", logo: "/img/vendor/WAYKAPAY.svg", icon: "fa-bank", desc: 0, disabled: false }
      // { id: 4, name: 'Agen Waykapay', logo: '/img/vendor/WAYKAPAY.svg', icon: 'fa-bank', desc: 0, disabled: false },
    ];
    const virtualAccount = [
      // { id: 1, name: 'bca', logo: '/img/vendor/BCA.svg', adminFee: 'Biaya admin Rp 3.000' },
      { id: 2, name: "bni", logo: "/img/vendor/BNI.svg", adminFee: "Biaya admin Rp3.000" },
      { id: 3, name: "bri", logo: "/img/vendor/BRI.svg", adminFee: "Biaya admin Rp3.000" },
      { id: 4, name: "mandiri", logo: "/img/vendor/MANDIRI.svg", adminFee: "Biaya admin Rp3.000" },
      { id: 5, name: "permata", logo: "/img/vendor/PERMATA.svg", adminFee: "Biaya admin Rp3.000" },
      { id: 6, name: "bsi", logo: "/img/vendor/BSI.svg", adminFee: "Biaya admin Rp3.000" }
    ];
    const offlineAccount = [
      { id: 13, name: "alfamart", logo: "/img/vendor/ALFAMART.svg", adminFee: "Biaya admin Rp4.000" }
    ];
    const manualTransfer = [
      // { id: 15, name: 'bca', logo: '/img/vendor/BCA.svg', adminFee: 'Biaya admin Rp 4.000' },
      { id: 16, name: "bri", logo: "/img/vendor/BRI.svg", adminFee: "Bebas biaya admin" }
    ];
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    const amount = formatPrice(props.amount);
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
              modelValue: unref(amount),
              "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
              type: "text",
              class: "mt-1 block w-full rounded-l-none",
              disabled: ""
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
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
                    modelValue: unref(amount),
                    "onUpdate:modelValue": ($event) => isRef(amount) ? amount.value = $event : null,
                    type: "text",
                    class: "mt-1 block w-full rounded-l-none",
                    disabled: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
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
            _push2(ssrRenderComponent(unref(RadioGroup), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"${_scopeId2}><!--[-->`);
                  ssrRenderList(categoryLists, (item) => {
                    _push3(ssrRenderComponent(unref(RadioGroupOption), {
                      onClick: ($event) => {
                        category.value = item.id;
                        unref(form).method = null;
                      },
                      as: "template",
                      key: item.id,
                      value: item,
                      disabled: item.disabled,
                      class: item.disabled ? "bg-gray-200 opacity-75" : ""
                    }, {
                      default: withCtx(({ checked, active }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none"])}"${_scopeId3}><div class="flex flex-1 justify-center items-center h-full"${_scopeId3}><div class="inline-flex items-center"${_scopeId3}><i class="${ssrRenderClass([item.icon, "fa-duotone text-primary-600 text-lg mr-2"])}"${_scopeId3}></i>`);
                          _push4(ssrRenderComponent(unref(RadioGroupDescription), {
                            as: "span",
                            class: "flex text-sm font-medium text-gray-900"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(item.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(item.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(`</div></div>`);
                          _push4(ssrRenderComponent(unref(CheckCircleIcon), {
                            class: [!checked ? "invisible" : "", "h-5 w-5 text-primary-600"],
                            "aria-hidden": "true"
                          }, null, _parent4, _scopeId3));
                          _push4(`<span class="${ssrRenderClass([active ? "border" : "border-2", checked ? "border-primary-500" : "border-transparent", "pointer-events-none absolute -inset-px rounded-3xl"])}" aria-hidden="true"${_scopeId3}></span></div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: [checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none"]
                            }, [
                              createVNode("div", { class: "flex flex-1 justify-center items-center h-full" }, [
                                createVNode("div", { class: "inline-flex items-center" }, [
                                  createVNode("i", {
                                    class: ["fa-duotone text-primary-600 text-lg mr-2", item.icon]
                                  }, null, 2),
                                  createVNode(unref(RadioGroupDescription), {
                                    as: "span",
                                    class: "flex text-sm font-medium text-gray-900"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
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
                      (openBlock(), createBlock(Fragment, null, renderList(categoryLists, (item) => {
                        return createVNode(unref(RadioGroupOption), {
                          onClick: ($event) => {
                            category.value = item.id;
                            unref(form).method = null;
                          },
                          as: "template",
                          key: item.id,
                          value: item,
                          disabled: item.disabled,
                          class: item.disabled ? "bg-gray-200 opacity-75" : ""
                        }, {
                          default: withCtx(({ checked, active }) => [
                            createVNode("div", {
                              class: [checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none"]
                            }, [
                              createVNode("div", { class: "flex flex-1 justify-center items-center h-full" }, [
                                createVNode("div", { class: "inline-flex items-center" }, [
                                  createVNode("i", {
                                    class: ["fa-duotone text-primary-600 text-lg mr-2", item.icon]
                                  }, null, 2),
                                  createVNode(unref(RadioGroupDescription), {
                                    as: "span",
                                    class: "flex text-sm font-medium text-gray-900"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
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
                        }, 1032, ["onClick", "value", "disabled", "class"]);
                      }), 64))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6" }, [
                createVNode(unref(RadioGroup), null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(categoryLists, (item) => {
                        return createVNode(unref(RadioGroupOption), {
                          onClick: ($event) => {
                            category.value = item.id;
                            unref(form).method = null;
                          },
                          as: "template",
                          key: item.id,
                          value: item,
                          disabled: item.disabled,
                          class: item.disabled ? "bg-gray-200 opacity-75" : ""
                        }, {
                          default: withCtx(({ checked, active }) => [
                            createVNode("div", {
                              class: [checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none"]
                            }, [
                              createVNode("div", { class: "flex flex-1 justify-center items-center h-full" }, [
                                createVNode("div", { class: "inline-flex items-center" }, [
                                  createVNode("i", {
                                    class: ["fa-duotone text-primary-600 text-lg mr-2", item.icon]
                                  }, null, 2),
                                  createVNode(unref(RadioGroupDescription), {
                                    as: "span",
                                    class: "flex text-sm font-medium text-gray-900"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
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
                        }, 1032, ["onClick", "value", "disabled", "class"]);
                      }), 64))
                    ])
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (category.value == 1) {
        _push(ssrRenderComponent(_sfc_main$1, { onSubmitted: storeInformation }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Virtual Account `);
            } else {
              return [
                createTextVNode(" Virtual Account ")
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
                    _push3(`<div class=""${_scopeId2}><div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(virtualAccount, (mailingList) => {
                      _push3(ssrRenderComponent(unref(RadioGroupOption), {
                        as: "template",
                        key: mailingList.id,
                        value: mailingList
                      }, {
                        default: withCtx(({ checked, active }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="${ssrRenderClass([checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none"])}"${_scopeId3}><div class="flex flex-1 justify-center"${_scopeId3}><div class="flex flex-col items-center"${_scopeId3}><img${ssrRenderAttr("src", mailingList.logo)} class="h-7" alt=""${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(RadioGroupDescription), {
                              as: "span",
                              class: "mt-1 flex text-xs text-gray-500"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(mailingList.adminFee)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
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
                                    }, null, 8, ["src"]),
                                    createVNode(unref(RadioGroupDescription), {
                                      as: "span",
                                      class: "mt-1 flex text-xs text-gray-500"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
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
                    _push3(`<!--]--></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(virtualAccount, (mailingList) => {
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
                                      }, null, 8, ["src"]),
                                      createVNode(unref(RadioGroupDescription), {
                                        as: "span",
                                        class: "mt-1 flex text-xs text-gray-500"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
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
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
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
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(virtualAccount, (mailingList) => {
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
                                      }, null, 8, ["src"]),
                                      createVNode(unref(RadioGroupDescription), {
                                        as: "span",
                                        class: "mt-1 flex text-xs text-gray-500"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
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
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    message: unref(form).errors.method,
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
              _push2(ssrRenderComponent(_sfc_main$6, {
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
                createVNode(_sfc_main$5, {
                  on: unref(form).recentlySuccessful,
                  class: "mr-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Berhasil disimpan. ")
                  ]),
                  _: 1
                }, 8, ["on"]),
                createVNode(_sfc_main$6, {
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
      } else {
        _push(`<!---->`);
      }
      if (category.value == 2) {
        _push(ssrRenderComponent(_sfc_main$1, { onSubmitted: storeInformation }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Manual Transfer `);
            } else {
              return [
                createTextVNode(" Manual Transfer ")
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
                    _push3(`<div class=""${_scopeId2}><div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(manualTransfer, (mailingList) => {
                      _push3(ssrRenderComponent(unref(RadioGroupOption), {
                        as: "template",
                        key: mailingList.id,
                        value: mailingList
                      }, {
                        default: withCtx(({ checked, active }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="${ssrRenderClass([checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none"])}"${_scopeId3}><div class="flex flex-1 justify-center"${_scopeId3}><div class="flex flex-col items-center"${_scopeId3}><img${ssrRenderAttr("src", mailingList.logo)} class="h-7" alt=""${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(RadioGroupDescription), {
                              as: "span",
                              class: "mt-1 flex text-xs text-gray-500"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(mailingList.adminFee)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
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
                                    }, null, 8, ["src"]),
                                    createVNode(unref(RadioGroupDescription), {
                                      as: "span",
                                      class: "mt-1 flex text-xs text-gray-500"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
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
                    _push3(`<!--]--></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(manualTransfer, (mailingList) => {
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
                                      }, null, 8, ["src"]),
                                      createVNode(unref(RadioGroupDescription), {
                                        as: "span",
                                        class: "mt-1 flex text-xs text-gray-500"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
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
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
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
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(manualTransfer, (mailingList) => {
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
                                      }, null, 8, ["src"]),
                                      createVNode(unref(RadioGroupDescription), {
                                        as: "span",
                                        class: "mt-1 flex text-xs text-gray-500"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
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
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    message: unref(form).errors.method,
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
              _push2(ssrRenderComponent(_sfc_main$6, {
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
                createVNode(_sfc_main$5, {
                  on: unref(form).recentlySuccessful,
                  class: "mr-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Berhasil disimpan. ")
                  ]),
                  _: 1
                }, 8, ["on"]),
                createVNode(_sfc_main$6, {
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
      } else {
        _push(`<!---->`);
      }
      if (category.value == 3) {
        _push(ssrRenderComponent(_sfc_main$1, { onSubmitted: storeInformation }, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Retail Offline `);
            } else {
              return [
                createTextVNode(" Retail Offline ")
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
                    _push3(`<div class=""${_scopeId2}><div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(offlineAccount, (mailingList) => {
                      _push3(ssrRenderComponent(unref(RadioGroupOption), {
                        as: "template",
                        key: mailingList.id,
                        value: mailingList
                      }, {
                        default: withCtx(({ checked, active }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="${ssrRenderClass([checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none"])}"${_scopeId3}><div class="flex flex-1 justify-center"${_scopeId3}><div class="flex flex-col items-center"${_scopeId3}><img${ssrRenderAttr("src", mailingList.logo)} class="h-7" alt=""${_scopeId3}>`);
                            _push4(ssrRenderComponent(unref(RadioGroupDescription), {
                              as: "span",
                              class: "mt-1 flex text-xs text-gray-500"
                            }, {
                              default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`${ssrInterpolate(mailingList.adminFee)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div></div>`);
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
                                    }, null, 8, ["src"]),
                                    createVNode(unref(RadioGroupDescription), {
                                      as: "span",
                                      class: "mt-1 flex text-xs text-gray-500"
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
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
                    _push3(`<!--]--></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(offlineAccount, (mailingList) => {
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
                                      }, null, 8, ["src"]),
                                      createVNode(unref(RadioGroupDescription), {
                                        as: "span",
                                        class: "mt-1 flex text-xs text-gray-500"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
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
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
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
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4" }, [
                          (openBlock(), createBlock(Fragment, null, renderList(offlineAccount, (mailingList) => {
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
                                      }, null, 8, ["src"]),
                                      createVNode(unref(RadioGroupDescription), {
                                        as: "span",
                                        class: "mt-1 flex text-xs text-gray-500"
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(mailingList.adminFee), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
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
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    message: unref(form).errors.method,
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
              _push2(ssrRenderComponent(_sfc_main$6, {
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
                createVNode(_sfc_main$5, {
                  on: unref(form).recentlySuccessful,
                  class: "mr-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Berhasil disimpan. ")
                  ]),
                  _: 1
                }, 8, ["on"]),
                createVNode(_sfc_main$6, {
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
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
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
