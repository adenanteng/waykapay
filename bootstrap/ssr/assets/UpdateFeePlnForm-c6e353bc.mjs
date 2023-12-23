import { mergeProps, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$1 } from "./FormSection-b0f83775.mjs";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$6 } from "./PrimaryButton-3722f774.mjs";
import "./SecondaryButton-0a2fd542.mjs";
import { _ as _sfc_main$3 } from "./TextInput-581d553f.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdateFeePlnForm",
  __ssrInlineRender: true,
  props: {
    setting: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      pln_25: props.setting.pln_25 ?? null,
      pln_50: props.setting.pln_50 ?? null,
      pln_75: props.setting.pln_75 ?? null,
      pln_100: props.setting.pln_100 ?? null,
      pln_200: props.setting.pln_200 ?? null,
      pln_500: props.setting.pln_500 ?? null,
      pln_1000: props.setting.pln_1000 ?? null,
      pln_max: props.setting.pln_max ?? null
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
            _push2(` Informasi Biaya Token Pln `);
          } else {
            return [
              createTextVNode(" Informasi Biaya Token Pln ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Informasi biaya token pln `);
          } else {
            return [
              createTextVNode(" Informasi biaya token pln ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 25.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pln_25,
              "onUpdate:modelValue": ($event) => unref(form).pln_25 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pln_25,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 50.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pln_50,
              "onUpdate:modelValue": ($event) => unref(form).pln_50 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pln_50,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 75.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pln_75,
              "onUpdate:modelValue": ($event) => unref(form).pln_75 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pln_75,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 100.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pln_100,
              "onUpdate:modelValue": ($event) => unref(form).pln_100 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pln_100,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 200.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pln_200,
              "onUpdate:modelValue": ($event) => unref(form).pln_200 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pln_200,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 500.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pln_500,
              "onUpdate:modelValue": ($event) => unref(form).pln_500 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pln_500,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Rp 1.000.000" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pln_1000,
              "onUpdate:modelValue": ($event) => unref(form).pln_1000 = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pln_1000,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { value: "Max" }, null, _parent2, _scopeId));
            _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              modelValue: unref(form).pln_max,
              "onUpdate:modelValue": ($event) => unref(form).pln_max = $event,
              type: "number",
              class: "mt-1 block w-full rounded-l-none"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.pln_max,
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
                    modelValue: unref(form).pln_25,
                    "onUpdate:modelValue": ($event) => unref(form).pln_25 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pln_25,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 50.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pln_50,
                    "onUpdate:modelValue": ($event) => unref(form).pln_50 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pln_50,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 75.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pln_75,
                    "onUpdate:modelValue": ($event) => unref(form).pln_75 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pln_75,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 100.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pln_100,
                    "onUpdate:modelValue": ($event) => unref(form).pln_100 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pln_100,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 200.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pln_200,
                    "onUpdate:modelValue": ($event) => unref(form).pln_200 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pln_200,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 500.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pln_500,
                    "onUpdate:modelValue": ($event) => unref(form).pln_500 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pln_500,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Rp 1.000.000" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pln_1000,
                    "onUpdate:modelValue": ($event) => unref(form).pln_1000 = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pln_1000,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-2" }, [
                createVNode(_sfc_main$2, { value: "Max" }),
                createVNode("div", { class: "flex" }, [
                  createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                  createVNode(_sfc_main$3, {
                    modelValue: unref(form).pln_max,
                    "onUpdate:modelValue": ($event) => unref(form).pln_max = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.pln_max,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AppSetting/Partials/UpdateFeePlnForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
