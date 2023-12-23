import { ref, mergeProps, withCtx, createTextVNode, unref, createVNode, withDirectives, openBlock, createBlock, createCommentVNode, vShow, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$6 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$1 } from "./FormSection-4680a7c9.mjs";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$7 } from "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$3 } from "./SecondaryButton-0a2fd542.mjs";
import { _ as _sfc_main$5 } from "./TextInput-581d553f.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdateAppInformationForm",
  __ssrInlineRender: true,
  props: {
    setting: Object
  },
  setup(__props) {
    const props = __props;
    const photoPreview = ref(null);
    const photoInput = ref(null);
    const form = useForm({
      id: props.setting.id ?? null,
      name: props.setting.name ?? null,
      desc: props.setting.desc ?? null,
      photo: null
      // fees: props.setting.fees ?? null,
      // midtrans_id_merchant: props.setting.midtrans_id_merchant ?? null,
      // midtrans_client_key: props.setting.midtrans_client_key ?? null,
      // midtrans_server_key: props.setting.midtrans_server_key ?? null,
      //
      // digiflazz_username: props.setting.digiflazz_username ?? null,
      // digiflazz_key: props.setting.digiflazz_key ?? null,
    });
    const updateSettingInformation = () => {
      if (photoInput.value) {
        form.photo = photoInput.value.files[0];
      }
      form.post(route("setting.store"), {
        errorBag: "storeSettingInformation",
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput()
      });
    };
    const selectNewPhoto = () => {
      photoInput.value.click();
    };
    const updatePhotoPreview = () => {
      const photo = photoInput.value.files[0];
      if (!photo)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        photoPreview.value = e.target.result;
      };
      reader.readAsDataURL(photo);
    };
    const clearPhotoFileInput = () => {
      var _a;
      if ((_a = photoInput.value) == null ? void 0 : _a.value) {
        photoInput.value.value = null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ onSubmitted: updateSettingInformation }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Informasi Umum `);
          } else {
            return [
              createTextVNode(" Informasi Umum ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Informasi umum tentang aplikasi `);
          } else {
            return [
              createTextVNode(" Informasi umum tentang aplikasi ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "photo",
              value: "Logo"
            }, null, _parent2, _scopeId));
            _push2(`<div style="${ssrRenderStyle(!photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}>`);
            if (props.setting.media != null) {
              _push2(`<img${ssrRenderAttr("src", props.setting.media[0].original_url)}${ssrRenderAttr("alt", __props.setting.name)} class="rounded-full h-20 w-20 object-cover"${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div style="${ssrRenderStyle(photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}><span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center" style="${ssrRenderStyle("background-image: url('" + photoPreview.value + "');")}"${_scopeId}></span></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2 mr-2 border border-gray-300",
              type: "button",
              onClick: selectNewPhoto
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ubah Logo `);
                } else {
                  return [
                    createTextVNode(" Ubah Logo ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.photo,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Nama"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
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
            _push2(`</div><div class="col-span-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "desc",
              value: "Slogan"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "desc",
              modelValue: unref(form).desc,
              "onUpdate:modelValue": ($event) => unref(form).desc = $event,
              type: "text",
              class: "mt-1 block w-full"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.desc,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode("input", {
                  ref_key: "photoInput",
                  ref: photoInput,
                  type: "file",
                  class: "hidden",
                  onChange: updatePhotoPreview
                }, null, 544),
                createVNode(_sfc_main$2, {
                  for: "photo",
                  value: "Logo"
                }),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  props.setting.media != null ? (openBlock(), createBlock("img", {
                    key: 0,
                    src: props.setting.media[0].original_url,
                    alt: __props.setting.name,
                    class: "rounded-full h-20 w-20 object-cover"
                  }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                ], 512), [
                  [vShow, !photoPreview.value]
                ]),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("span", {
                    class: "block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",
                    style: "background-image: url('" + photoPreview.value + "');"
                  }, null, 4)
                ], 512), [
                  [vShow, photoPreview.value]
                ]),
                createVNode(_sfc_main$3, {
                  class: "mt-2 mr-2 border border-gray-300",
                  type: "button",
                  onClick: withModifiers(selectNewPhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Ubah Logo ")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.photo,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$2, {
                  for: "name",
                  value: "Nama"
                }),
                createVNode(_sfc_main$5, {
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
              createVNode("div", { class: "col-span-6" }, [
                createVNode(_sfc_main$2, {
                  for: "desc",
                  value: "Slogan"
                }),
                createVNode(_sfc_main$5, {
                  id: "desc",
                  modelValue: unref(form).desc,
                  "onUpdate:modelValue": ($event) => unref(form).desc = $event,
                  type: "text",
                  class: "mt-1 block w-full"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.desc,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AppSetting/Partials/UpdateAppInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
