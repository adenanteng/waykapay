import { ref, unref, withCtx, createVNode, createTextVNode, withModifiers, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./AuthenticationCard-54fb8148.mjs";
import { _ as _sfc_main$2 } from "./AuthenticationCardLogo-a83ca525.mjs";
import { _ as _sfc_main$6 } from "./Checkbox-59124fab.mjs";
import { _ as _sfc_main$5 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$3 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$7 } from "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$4 } from "./TextInput-581d553f.mjs";
import "./Banner-24bf2dbf.mjs";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      phone: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    const showPassword = ref(false);
    const showPasswordConfirm = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ayo buat akun Anda, masukkan alamat email aktif dan nomor telepon Anda. `);
          } else {
            return [
              createTextVNode(" Ayo buat akun Anda, masukkan alamat email aktif dan nomor telepon Anda. ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "name",
              value: "Nama"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full capitalize",
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "phone",
              value: "Telepon"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "phone",
              modelValue: unref(form).phone,
              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
              type: "tel",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "phone"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.phone
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: showPassword.value ? "text" : "password",
              class: "mt-1 block w-full rounded-r-none",
              required: "",
              autocomplete: "password"
            }, null, _parent2, _scopeId));
            _push2(`<button type="button" class="bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"${_scopeId}><i class="${ssrRenderClass([showPassword.value ? "fa-eye-slash" : "fa-eye", "fa-regular"])}"${_scopeId}></i></button></div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              for: "password_confirmation",
              value: "Konfirmasi Password"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: showPasswordConfirm.value ? "text" : "password",
              class: "mt-1 block w-full rounded-r-none",
              required: "",
              autocomplete: "password"
            }, null, _parent2, _scopeId));
            _push2(`<button type="button" class="bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"${_scopeId}><i class="${ssrRenderClass([showPasswordConfirm.value ? "fa-eye-slash" : "fa-eye", "fa-regular"])}"${_scopeId}></i></button></div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature) {
              _push2(`<div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, { for: "terms" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      id: "terms",
                      checked: unref(form).terms,
                      "onUpdate:checked": ($event) => unref(form).terms = $event,
                      name: "terms",
                      required: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="ml-2"${_scopeId2}> Saya menyetujui `);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("terms.show"),
                      class: "underline text-sm font-semibold text-primary-600 hover:text-primary-900"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Ketentuan Layanan `);
                        } else {
                          return [
                            createTextVNode(" Ketentuan Layanan ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(` dan `);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: _ctx.route("policy.show"),
                      class: "underline text-sm font-semibold text-primary-600 hover:text-primary-900"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Kebijakan Privasi `);
                        } else {
                          return [
                            createTextVNode(" Kebijakan Privasi ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      class: "mt-2",
                      message: unref(form).errors.terms
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_sfc_main$6, {
                          id: "terms",
                          checked: unref(form).terms,
                          "onUpdate:checked": ($event) => unref(form).terms = $event,
                          name: "terms",
                          required: ""
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ml-2" }, [
                          createTextVNode(" Saya menyetujui "),
                          createVNode(unref(Link), {
                            href: _ctx.route("terms.show"),
                            class: "underline text-sm font-semibold text-primary-600 hover:text-primary-900"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Ketentuan Layanan ")
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createTextVNode(" dan "),
                          createVNode(unref(Link), {
                            href: _ctx.route("policy.show"),
                            class: "underline text-sm font-semibold text-primary-600 hover:text-primary-900"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Kebijakan Privasi ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.terms
                      }, null, 8, ["message"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$7, {
              class: ["w-full justify-center", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Daftar `);
                } else {
                  return [
                    createTextVNode(" Daftar ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$3, {
                    for: "name",
                    value: "Nama"
                  }),
                  createVNode(_sfc_main$4, {
                    id: "name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    type: "text",
                    class: "mt-1 block w-full capitalize",
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$3, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$4, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "email"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$3, {
                    for: "phone",
                    value: "Telepon"
                  }),
                  createVNode(_sfc_main$4, {
                    id: "phone",
                    modelValue: unref(form).phone,
                    "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                    type: "tel",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "phone"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.phone
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$3, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode("div", { class: "flex" }, [
                    createVNode(_sfc_main$4, {
                      id: "password",
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: showPassword.value ? "text" : "password",
                      class: "mt-1 block w-full rounded-r-none",
                      required: "",
                      autocomplete: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type"]),
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => showPassword.value = !showPassword.value,
                      class: "bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"
                    }, [
                      createVNode("i", {
                        class: ["fa-regular", showPassword.value ? "fa-eye-slash" : "fa-eye"]
                      }, null, 2)
                    ], 8, ["onClick"])
                  ]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$3, {
                    for: "password_confirmation",
                    value: "Konfirmasi Password"
                  }),
                  createVNode("div", { class: "flex" }, [
                    createVNode(_sfc_main$4, {
                      id: "password_confirmation",
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      type: showPasswordConfirm.value ? "text" : "password",
                      class: "mt-1 block w-full rounded-r-none",
                      required: "",
                      autocomplete: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "type"]),
                    createVNode("button", {
                      type: "button",
                      onClick: ($event) => showPasswordConfirm.value = !showPasswordConfirm.value,
                      class: "bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"
                    }, [
                      createVNode("i", {
                        class: ["fa-regular", showPasswordConfirm.value ? "fa-eye-slash" : "fa-eye"]
                      }, null, 2)
                    ], 8, ["onClick"])
                  ]),
                  createVNode(_sfc_main$5, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                _ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-4"
                }, [
                  createVNode(_sfc_main$3, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_sfc_main$6, {
                          id: "terms",
                          checked: unref(form).terms,
                          "onUpdate:checked": ($event) => unref(form).terms = $event,
                          name: "terms",
                          required: ""
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ml-2" }, [
                          createTextVNode(" Saya menyetujui "),
                          createVNode(unref(Link), {
                            href: _ctx.route("terms.show"),
                            class: "underline text-sm font-semibold text-primary-600 hover:text-primary-900"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Ketentuan Layanan ")
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createTextVNode(" dan "),
                          createVNode(unref(Link), {
                            href: _ctx.route("policy.show"),
                            class: "underline text-sm font-semibold text-primary-600 hover:text-primary-900"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Kebijakan Privasi ")
                            ]),
                            _: 1
                          }, 8, ["href"])
                        ])
                      ]),
                      createVNode(_sfc_main$5, {
                        class: "mt-2",
                        message: unref(form).errors.terms
                      }, null, 8, ["message"])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex items-center mt-4" }, [
                  createVNode(_sfc_main$7, {
                    class: ["w-full justify-center", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Daftar ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
