import { ref, mergeProps, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderClass } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$1 } from "./FormSection-cdefd75b.mjs";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton-3137fc48.mjs";
import { _ as _sfc_main$3 } from "./TextInput-581d553f.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    const updatePassword = () => {
      form.put(route("user-password.update"), {
        errorBag: "updatePassword",
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
          if (form.errors.password) {
            form.reset("password", "password_confirmation");
            passwordInput.value.focus();
          }
          if (form.errors.current_password) {
            form.reset("current_password");
            currentPasswordInput.value.focus();
          }
        }
      });
    };
    const showPassword = ref(false);
    const showPasswordNew = ref(false);
    const showPasswordConfirm = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ onSubmitted: updatePassword }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Password `);
          } else {
            return [
              createTextVNode(" Password ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pastikan akun kamu menggunakan kata sandi acak yang panjang agar tetap aman. `);
          } else {
            return [
              createTextVNode(" Pastikan akun kamu menggunakan kata sandi acak yang panjang agar tetap aman. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "current_password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "current_password",
              ref_key: "currentPasswordInput",
              ref: currentPasswordInput,
              modelValue: unref(form).current_password,
              "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
              type: showPassword.value ? "text" : "password",
              class: "mt-1 block w-full rounded-r-none",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(`<button type="button" class="bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"${_scopeId}><i class="${ssrRenderClass([showPassword.value ? "fa-eye-slash" : "fa-eye", "fa-regular"])}"${_scopeId}></i></button></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.current_password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password",
              value: "Password Baru"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: showPasswordNew.value ? "text" : "password",
              class: "mt-1 block w-full rounded-r-none",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`<button type="button" class="bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"${_scopeId}><i class="${ssrRenderClass([showPasswordNew.value ? "fa-eye-slash" : "fa-eye", "fa-regular"])}"${_scopeId}></i></button></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "password_confirmation",
              value: "Konfirmasi Password Baru"
            }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: showPasswordConfirm.value ? "text" : "password",
              class: "mt-1 block w-full rounded-r-none",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(`<button type="button" class="bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"${_scopeId}><i class="${ssrRenderClass([showPasswordConfirm.value ? "fa-eye-slash" : "fa-eye", "fa-regular"])}"${_scopeId}></i></button></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.password_confirmation,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "current_password",
                  value: "Password"
                }),
                createVNode("div", { class: "flex" }, [
                  createVNode(_sfc_main$3, {
                    id: "current_password",
                    ref_key: "currentPasswordInput",
                    ref: currentPasswordInput,
                    modelValue: unref(form).current_password,
                    "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
                    type: showPassword.value ? "text" : "password",
                    class: "mt-1 block w-full rounded-r-none",
                    autocomplete: "current-password"
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
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.current_password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "password",
                  value: "Password Baru"
                }),
                createVNode("div", { class: "flex" }, [
                  createVNode(_sfc_main$3, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: showPasswordNew.value ? "text" : "password",
                    class: "mt-1 block w-full rounded-r-none",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "type"]),
                  createVNode("button", {
                    type: "button",
                    onClick: ($event) => showPasswordNew.value = !showPasswordNew.value,
                    class: "bg-white text-black border border-gray-300 border-l-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl rounded-l-none shadow-sm mt-1 px-3"
                  }, [
                    createVNode("i", {
                      class: ["fa-regular", showPasswordNew.value ? "fa-eye-slash" : "fa-eye"]
                    }, null, 2)
                  ], 8, ["onClick"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "password_confirmation",
                  value: "Konfirmasi Password Baru"
                }),
                createVNode("div", { class: "flex" }, [
                  createVNode(_sfc_main$3, {
                    id: "password_confirmation",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    type: showPasswordConfirm.value ? "text" : "password",
                    class: "mt-1 block w-full rounded-r-none",
                    autocomplete: "new-password"
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
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.password_confirmation,
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
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Simpan `);
                } else {
                  return [
                    createTextVNode(" Simpan ")
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
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Simpan ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
