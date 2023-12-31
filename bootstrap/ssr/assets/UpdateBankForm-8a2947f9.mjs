import { ref, withCtx, createTextVNode, unref, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
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
import moment from "moment";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdateBankForm",
  __ssrInlineRender: true,
  props: {
    users: Object | String,
    response: Object | String
  },
  setup(__props) {
    const props = __props;
    const walletLists = [
      { id: 1, name: "wkp", logo: "/img/vendor/WAYKAPAY.svg", admin: 0, disabled: false }
    ];
    const form = useForm({
      user_id: props.users.id ?? null,
      bank: walletLists[0],
      account_no: ""
    });
    const storeInformation = () => {
      form.post(route("money-transfer.amount"), {
        errorBag: "storeInformation",
        preserveScroll: true,
        // replace: true,
        onSuccess: () => {
        }
      });
    };
    const category = ref();
    const categoryLists = [
      { id: 1, name: "Transfer Waykapay", logo: "/img/vendor/BCA.svg", icon: "fa-wallet", desc: 4e3, disabled: false },
      { id: 2, name: "Transfer Bank", logo: "/img/vendor/WAYKAPAY.svg", icon: "fa-bank", desc: 0, disabled: false }
    ];
    const bankLists = [
      // { id: 1, name: 'wkp', logo: '/img/vendor/WAYKAPAY.svg', admin: 0, disabled: false },
      { id: 2, name: "bca", logo: "/img/vendor/BCA.svg", admin: 4e3, disabled: true },
      { id: 3, name: "bni", logo: "/img/vendor/BNI.svg", admin: 4e3, disabled: true },
      { id: 4, name: "bri", logo: "/img/vendor/BRI.svg", admin: 4e3, disabled: true },
      { id: 5, name: "mandiri", logo: "/img/vendor/MANDIRI.svg", admin: 4e3, disabled: true },
      { id: 6, name: "permata", logo: "/img/vendor/PERMATA.svg", admin: 4e3, disabled: true },
      { id: 7, name: "bsm", logo: "/img/vendor/BSI.svg", admin: 4e3, disabled: true }
    ];
    const clock = moment().format("HH");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Mau transfer kemana? `);
          } else {
            return [
              createTextVNode(" Mau transfer kemana? ")
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
                      onClick: ($event) => category.value = item.id,
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
                          onClick: ($event) => category.value = item.id,
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
                          onClick: ($event) => category.value = item.id,
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
              _push2(` Nomor handphone tujuan `);
            } else {
              return [
                createTextVNode(" Nomor handphone tujuan ")
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
              _push2(ssrRenderComponent(_sfc_main$2, {
                for: "amount",
                value: "Nomor handphone tujuan"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                id: "account_no",
                modelValue: unref(form).account_no,
                "onUpdate:modelValue": ($event) => unref(form).account_no = $event,
                type: "number",
                class: "mt-1 block w-full",
                required: ""
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                message: unref(form).errors.account_no,
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(_sfc_main$2, {
                    for: "amount",
                    value: "Nomor handphone tujuan"
                  }),
                  createVNode(_sfc_main$3, {
                    id: "account_no",
                    modelValue: unref(form).account_no,
                    "onUpdate:modelValue": ($event) => unref(form).account_no = $event,
                    type: "number",
                    class: "mt-1 block w-full",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    message: unref(form).errors.account_no,
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
                disabled: unref(form).account_no === "" || unref(clock) >= 23
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Lanjutkan `);
                  } else {
                    return [
                      createTextVNode(" Lanjutkan ")
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
                  disabled: unref(form).account_no === "" || unref(clock) >= 23
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Lanjutkan ")
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
              _push2(` Bank dan nomor rekening tujuan `);
            } else {
              return [
                createTextVNode(" Bank dan nomor rekening tujuan ")
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
                modelValue: unref(form).bank,
                "onUpdate:modelValue": ($event) => unref(form).bank = $event
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4"${_scopeId2}><!--[-->`);
                    ssrRenderList(bankLists, (item) => {
                      _push3(ssrRenderComponent(unref(RadioGroupOption), {
                        as: "template",
                        key: item.id,
                        value: item,
                        disabled: item.disabled,
                        class: item.disabled ? "bg-gray-200 opacity-75" : ""
                      }, {
                        default: withCtx(({ checked, active }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="${ssrRenderClass([checked ? "border-transparent" : "border-gray-300", active ? "border-primary-500 ring-2 ring-primary-500" : "", "relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none"])}"${_scopeId3}><div class="flex flex-1 justify-center items-center h-full"${_scopeId3}><img${ssrRenderAttr("src", item.logo)} class="h-7" alt=""${_scopeId3}></div>`);
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
                                  createVNode("img", {
                                    src: item.logo,
                                    class: "h-7",
                                    alt: ""
                                  }, null, 8, ["src"])
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
                        (openBlock(), createBlock(Fragment, null, renderList(bankLists, (item) => {
                          return createVNode(unref(RadioGroupOption), {
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
                                  createVNode("img", {
                                    src: item.logo,
                                    class: "h-7",
                                    alt: ""
                                  }, null, 8, ["src"])
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
                          }, 1032, ["value", "disabled", "class"]);
                        }), 64))
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                message: unref(form).errors.bank,
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "col-span-6" }, [
                  createVNode(unref(RadioGroup), {
                    modelValue: unref(form).bank,
                    "onUpdate:modelValue": ($event) => unref(form).bank = $event
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(bankLists, (item) => {
                          return createVNode(unref(RadioGroupOption), {
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
                                  createVNode("img", {
                                    src: item.logo,
                                    class: "h-7",
                                    alt: ""
                                  }, null, 8, ["src"])
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
                          }, 1032, ["value", "disabled", "class"]);
                        }), 64))
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$4, {
                    message: unref(form).errors.bank,
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
                disabled: unref(form).bank === null || unref(form).account_no === "" || unref(clock) >= 23
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Lanjutkan `);
                  } else {
                    return [
                      createTextVNode(" Lanjutkan ")
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
                  disabled: unref(form).bank === null || unref(form).account_no === "" || unref(clock) >= 23
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Lanjutkan ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/MoneyTransfer/Partials/UpdateBankForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
