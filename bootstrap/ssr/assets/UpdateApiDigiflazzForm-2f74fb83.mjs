import { mergeProps, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$1 } from "./FormSection-cdefd75b.mjs";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton-3137fc48.mjs";
import "./SecondaryButton-70b2499c.mjs";
import { _ as _sfc_main$3 } from "./TextInput-581d553f.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdateApiDigiflazzForm",
  __ssrInlineRender: true,
  props: {
    setting: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      digiflazz_username: props.setting.digiflazz_username ?? null,
      digiflazz_key: props.setting.digiflazz_key ?? null
    });
    const updateSettingInformation = () => {
      form.post(route("setting.store"), {
        errorBag: "storeSettingInformation",
        preserveScroll: true
        // onSuccess: () => clearPhotoFileInput(),
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ onSubmitted: updateSettingInformation }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API Digiflazz `);
          } else {
            return [
              createTextVNode(" API Digiflazz ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Informasi autentikasi API Digiflazz `);
          } else {
            return [
              createTextVNode(" Informasi autentikasi API Digiflazz ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "digiflazzUsername",
              value: "Username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "digiflazzUsername",
              modelValue: unref(form).digiflazz_username,
              "onUpdate:modelValue": ($event) => unref(form).digiflazz_username = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.digiflazz_username,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "digiflazzKey",
              value: "Key"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "digiflazzKey",
              modelValue: unref(form).digiflazz_key,
              "onUpdate:modelValue": ($event) => unref(form).digiflazz_key = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.digiflazz_key,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6" }, [
                createVNode(_sfc_main$2, {
                  for: "digiflazzUsername",
                  value: "Username"
                }),
                createVNode(_sfc_main$3, {
                  id: "digiflazzUsername",
                  modelValue: unref(form).digiflazz_username,
                  "onUpdate:modelValue": ($event) => unref(form).digiflazz_username = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.digiflazz_username,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6" }, [
                createVNode(_sfc_main$2, {
                  for: "digiflazzKey",
                  value: "Key"
                }),
                createVNode(_sfc_main$3, {
                  id: "digiflazzKey",
                  modelValue: unref(form).digiflazz_key,
                  "onUpdate:modelValue": ($event) => unref(form).digiflazz_key = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.digiflazz_key,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AppSetting/Partials/UpdateApiDigiflazzForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
