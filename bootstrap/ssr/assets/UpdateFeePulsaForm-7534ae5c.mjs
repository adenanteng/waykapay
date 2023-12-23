import { mergeProps, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$1 } from "./FormSection-4680a7c9.mjs";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton-3722f774.mjs";
import "./SecondaryButton-0a2fd542.mjs";
import { _ as _sfc_main$3 } from "./TextInput-581d553f.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdateFeePulsaForm",
  __ssrInlineRender: true,
  props: {
    setting: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      pulsa_25: props.setting.pulsa_25 ?? null,
      pulsa_50: props.setting.pulsa_50 ?? null,
      pulsa_75: props.setting.pulsa_75 ?? null,
      pulsa_100: props.setting.pulsa_100 ?? null,
      pulsa_200: props.setting.pulsa_200 ?? null,
      pulsa_500: props.setting.pulsa_500 ?? null,
      pulsa_1000: props.setting.pulsa_1000 ?? null,
      pulsa_max: props.setting.pulsa_max ?? null
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
            _push2(` Informasi Biaya Pulsa `);
          } else {
            return [
              createTextVNode(" Informasi Biaya Pulsa ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Informasi biaya pulsa `);
          } else {
            return [
              createTextVNode(" Informasi biaya pulsa ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 25.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pulsa_25,
              "onUpdate:modelValue": ($event) => unref(form).pulsa_25 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pulsa_25,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 50.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pulsa_50,
              "onUpdate:modelValue": ($event) => unref(form).pulsa_50 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pulsa_50,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 75.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pulsa_75,
              "onUpdate:modelValue": ($event) => unref(form).pulsa_75 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pulsa_75,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 100.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pulsa_100,
              "onUpdate:modelValue": ($event) => unref(form).pulsa_100 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pulsa_100,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 200.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pulsa_200,
              "onUpdate:modelValue": ($event) => unref(form).pulsa_200 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pulsa_200,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 500.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pulsa_500,
              "onUpdate:modelValue": ($event) => unref(form).pulsa_500 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pulsa_500,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 1.000.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pulsa_1000,
              "onUpdate:modelValue": ($event) => unref(form).pulsa_1000 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pulsa_1000,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Max" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pulsa_max,
              "onUpdate:modelValue": ($event) => unref(form).pulsa_max = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pulsa_max,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 25.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pulsa_25,
                    "onUpdate:modelValue": ($event) => unref(form).pulsa_25 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pulsa_25,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 50.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pulsa_50,
                    "onUpdate:modelValue": ($event) => unref(form).pulsa_50 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pulsa_50,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 75.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pulsa_75,
                    "onUpdate:modelValue": ($event) => unref(form).pulsa_75 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pulsa_75,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 100.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pulsa_100,
                    "onUpdate:modelValue": ($event) => unref(form).pulsa_100 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pulsa_100,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 200.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pulsa_200,
                    "onUpdate:modelValue": ($event) => unref(form).pulsa_200 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pulsa_200,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 500.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pulsa_500,
                    "onUpdate:modelValue": ($event) => unref(form).pulsa_500 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pulsa_500,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 1.000.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pulsa_1000,
                    "onUpdate:modelValue": ($event) => unref(form).pulsa_1000 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pulsa_1000,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Max" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pulsa_max,
                    "onUpdate:modelValue": ($event) => unref(form).pulsa_max = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pulsa_max,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AppSetting/Partials/UpdateFeePulsaForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
