import { mergeProps, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$6 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$1 } from "./FormSection-cdefd75b.mjs";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$7 } from "./PrimaryButton-3722f774.mjs";
import "./SecondaryButton-0a2fd542.mjs";
import { _ as _sfc_main$3 } from "./TextInput-581d553f.mjs";
import "./TextAreaInput-724f9eae.mjs";
import { _ as _sfc_main$5 } from "./SelectInput-6987634f.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdateInformationForm",
  __ssrInlineRender: true,
  props: {
    users: Object | String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      id: props.users.id ?? null,
      name: props.users.name ?? null,
      email: props.users.email ?? null,
      phone: props.users.phone ?? null,
      status_id: props.users.status_id ?? null,
      role_id: props.users.role_id ?? null
    });
    const storeInformation = () => {
      if (props.users.name == null) {
        form.post(route("user.store"), {
          errorBag: "storeInformation",
          preserveScroll: true,
          onSuccess: () => {
            formReset();
          }
        });
      } else {
        form.put(route("user.update", form.id), {
          errorBag: "updateInformation",
          preserveScroll: true,
          onSuccess: () => {
            formReset();
          }
        });
      }
    };
    const formReset = () => {
      form.defaults({
        id: null,
        name: null,
        email: null,
        role_id: null
      });
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ onSubmitted: storeInformation }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Informasi Pengguna `);
          } else {
            return [
              createTextVNode(" Informasi Pengguna ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Perbarui informasi profil akun dan alamat email pengguna. `);
          } else {
            return [
              createTextVNode(" Perbarui informasi profil akun dan alamat email pengguna. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Nama"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full capitalize",
              autocomplete: "name",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              autocomplete: "email",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.email,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "phone",
              value: "Telepon"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "phone",
              modelValue: unref(form).phone,
              "onUpdate:modelValue": ($event) => unref(form).phone = $event,
              type: "tel",
              class: "mt-1 block w-full",
              autocomplete: "phone",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.phone,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Status" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              "model-value": unref(form).status_id,
              "onUpdate:modelValue": ($event) => unref(form).status_id = $event,
              "model-valueModifiers": { number: true },
              option: _ctx.$page.props.selectStatus,
              class: "mt-1 block w-full",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.status_id,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Peran" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              "model-value": unref(form).role_id,
              "onUpdate:modelValue": ($event) => unref(form).role_id = $event,
              "model-valueModifiers": { number: true },
              option: _ctx.$page.props.selectRole,
              class: "mt-1 block w-full",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.role_id,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                createVNode(_sfc_main$2, {
                  for: "name",
                  value: "Nama"
                }),
                createVNode(_sfc_main$3, {
                  id: "name",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  type: "text",
                  class: "mt-1 block w-full capitalize",
                  autocomplete: "name",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-2" }, [
                createVNode(_sfc_main$2, {
                  for: "email",
                  value: "Email"
                }),
                createVNode(_sfc_main$3, {
                  id: "email",
                  modelValue: unref(form).email,
                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                  type: "email",
                  class: "mt-1 block w-full",
                  autocomplete: "email",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.email,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-2" }, [
                createVNode(_sfc_main$2, {
                  for: "phone",
                  value: "Telepon"
                }),
                createVNode(_sfc_main$3, {
                  id: "phone",
                  modelValue: unref(form).phone,
                  "onUpdate:modelValue": ($event) => unref(form).phone = $event,
                  type: "tel",
                  class: "mt-1 block w-full",
                  autocomplete: "phone",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.phone,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Status" }),
                createVNode(_sfc_main$5, {
                  "model-value": unref(form).status_id,
                  "onUpdate:modelValue": ($event) => unref(form).status_id = $event,
                  "model-valueModifiers": { number: true },
                  option: _ctx.$page.props.selectStatus,
                  class: "mt-1 block w-full",
                  required: ""
                }, null, 8, ["model-value", "onUpdate:modelValue", "option"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.status_id,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Peran" }),
                createVNode(_sfc_main$5, {
                  "model-value": unref(form).role_id,
                  "onUpdate:modelValue": ($event) => unref(form).role_id = $event,
                  "model-valueModifiers": { number: true },
                  option: _ctx.$page.props.selectRole,
                  class: "mt-1 block w-full",
                  required: ""
                }, null, 8, ["model-value", "onUpdate:modelValue", "option"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.role_id,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$6, {
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
            _push2(ssrRenderComponent(_sfc_main$7, {
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
              createVNode(_sfc_main$6, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Berhasil disimpan. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$7, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Partials/UpdateInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
