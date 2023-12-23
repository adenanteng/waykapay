import { ref, mergeProps, withCtx, createTextVNode, unref, createVNode, withDirectives, openBlock, createBlock, vShow, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$6 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$1 } from "./FormSection-b0f83775.mjs";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$7 } from "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$3 } from "./SecondaryButton-0a2fd542.mjs";
import { _ as _sfc_main$5 } from "./TextInput-581d553f.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    carousel: Object | null
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      id: props.carousel.id ?? null,
      href: props.carousel.href ?? null,
      photo: null
    });
    const photoPreview = ref(null);
    const photoInput = ref(null);
    const updateProfileInformation = () => {
      if (photoInput.value) {
        form.photo = photoInput.value.files[0];
      }
      if (form.id == null) {
        form.post(route("carousel.store"), {
          errorBag: "storeInformation",
          preserveScroll: true,
          onSuccess: () => clearPhotoFileInput()
        });
      } else {
        form.put(route("carousel.update", form), {
          errorBag: "updateInformation",
          preserveScroll: true,
          onSuccess: () => clearPhotoFileInput()
        });
      }
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
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ onSubmitted: updateProfileInformation }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Carousel `);
          } else {
            return [
              createTextVNode(" Carousel ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Lorem ipsum dolor sit amet `);
          } else {
            return [
              createTextVNode(" Lorem ipsum dolor sit amet ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "photo",
              value: "Photo"
            }, null, _parent2, _scopeId));
            if (props.carousel) {
              _push2(`<div style="${ssrRenderStyle(!photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}><img${ssrRenderAttr("src", props.carousel.media[0].original_url)}${ssrRenderAttr("alt", props.carousel.href)} class="h-20 w-auto aspect-video rounded-3xl object-cover"${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div style="${ssrRenderStyle(photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}><span class="block h-20 w-auto aspect-video rounded-3xl bg-cover bg-no-repeat bg-center" style="${ssrRenderStyle("background-image: url('" + photoPreview.value + "');")}"${_scopeId}></span></div>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              class: "mt-2 mr-2 nightwind-prevent",
              type: "button",
              onClick: selectNewPhoto
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ubah Foto `);
                } else {
                  return [
                    createTextVNode(" Ubah Foto ")
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
              for: "href",
              value: "Link"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              id: "href",
              modelValue: unref(form).href,
              "onUpdate:modelValue": ($event) => unref(form).href = $event,
              type: "text",
              class: "mt-1 block w-full",
              autocomplete: "href"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.href,
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
                  value: "Photo"
                }),
                props.carousel ? withDirectives((openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-2"
                }, [
                  createVNode("img", {
                    src: props.carousel.media[0].original_url,
                    alt: props.carousel.href,
                    class: "h-20 w-auto aspect-video rounded-3xl object-cover"
                  }, null, 8, ["src", "alt"])
                ], 512)), [
                  [vShow, !photoPreview.value]
                ]) : createCommentVNode("", true),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("span", {
                    class: "block h-20 w-auto aspect-video rounded-3xl bg-cover bg-no-repeat bg-center",
                    style: "background-image: url('" + photoPreview.value + "');"
                  }, null, 4)
                ], 512), [
                  [vShow, photoPreview.value]
                ]),
                createVNode(_sfc_main$3, {
                  class: "mt-2 mr-2 nightwind-prevent",
                  type: "button",
                  onClick: withModifiers(selectNewPhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Ubah Foto ")
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
                  for: "href",
                  value: "Link"
                }),
                createVNode(_sfc_main$5, {
                  id: "href",
                  modelValue: unref(form).href,
                  "onUpdate:modelValue": ($event) => unref(form).href = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  autocomplete: "href"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$4, {
                  message: unref(form).errors.href,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Carousel/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
