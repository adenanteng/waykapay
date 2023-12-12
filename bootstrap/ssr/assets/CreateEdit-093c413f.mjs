import { ref, onMounted, mergeProps, withCtx, unref, createTextVNode, createVNode, withDirectives, vShow, openBlock, createBlock, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import "./MobileMenu-5acf9387.mjs";
import { _ as _sfc_main$5 } from "./PrimaryButton-3137fc48.mjs";
import "./SecondaryButton-70b2499c.mjs";
import "moment";
import { _ as _sfc_main$1 } from "./BlankLayout-efcc5a51.mjs";
import "./ApplicationLogo-6cbfcc6b.mjs";
import { _ as _sfc_main$2 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$3 } from "./TextInput-581d553f.mjs";
import { _ as _sfc_main$4 } from "./InputError-6aeb8d97.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
const _sfc_main = {
  __name: "CreateEdit",
  __ssrInlineRender: true,
  props: {},
  setup(__props) {
    const form = useForm({
      name: null,
      ktp: null,
      photo: null
    });
    const isCameraOpen = ref(false);
    const isPhotoTaken = ref(false);
    const isShotPhoto = ref(false);
    const isLoading = ref(false);
    ref("#");
    const camcam = ref(null);
    onMounted(() => {
      setTimeout(() => toggleCamera(), 1e3);
    });
    function toggleCamera() {
      if (isCameraOpen.value === true) {
        isCameraOpen.value = false;
        isPhotoTaken.value = false;
        isShotPhoto.value = false;
      } else {
        isCameraOpen.value = true;
        createCameraElement();
      }
    }
    function createCameraElement() {
      isLoading.value = true;
      const constraints = window.constraints = {
        audio: false,
        video: true
      };
      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        isLoading.value = false;
        camcam.value.srcObject = stream;
      }).catch((error) => {
        isLoading.value = false;
        alert("May the browser didn't support or there is some errors.");
      });
    }
    function takePhoto() {
      if (!isPhotoTaken) {
        isShotPhoto.value = true;
        const FLASH_TIMEOUT = 50;
        setTimeout(() => {
          isShotPhoto.value = false;
        }, FLASH_TIMEOUT);
      }
      isPhotoTaken.value = !isPhotoTaken.value;
      const context = document.getElementById("photoTaken").getContext("2d");
      context.drawImage(camcam.value, 0, 0, 450, 337.5);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Upgrade" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen"${_scopeId}><div class="mt-10"${_scopeId}><div class=""${_scopeId}></div><div style="${ssrRenderStyle(isCameraOpen.value && isLoading.value ? null : { display: "none" })}" class="my-10 text-center"${_scopeId}><i class="fa-duotone fa-loader fa-spin text-3xl text-primary-600"${_scopeId}></i></div>`);
            if (isCameraOpen.value) {
              _push2(`<div style="${ssrRenderStyle(!isLoading.value ? null : { display: "none" })}" class="${ssrRenderClass([{ "flash": isShotPhoto.value }, "p-3 rounded-3xl relative"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                value: "Foto KTP",
                class: "ml-3 mb-1"
              }, null, _parent2, _scopeId));
              _push2(`<div class="" class="${ssrRenderClass([{ "flash": isShotPhoto.value }, ""])}"${_scopeId}></div><video style="${ssrRenderStyle(!isPhotoTaken.value ? null : { display: "none" })}" class="rounded-3xl scale-x-flip"${ssrRenderAttr("width", 450)}${ssrRenderAttr("height", 337.5)} autoplay${_scopeId}></video><canvas style="${ssrRenderStyle(isPhotoTaken.value ? null : { display: "none" })}" id="photoTaken" class="rounded-3xl scale-x-flip w-full"${ssrRenderAttr("width", 450)}${ssrRenderAttr("height", 337.5)}${_scopeId}></canvas>`);
              if (isCameraOpen.value && !isLoading.value) {
                _push2(`<div class="text-center mt-2 absolute bottom-5 left-0 right-0 justify-center"${_scopeId}><button class=""${_scopeId}><i class="fa-light fa-camera text-3xl text-white nightwind-prevent"${_scopeId}></i></button></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="mt-5 p-3 grid space-y-5"${_scopeId}><div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "ktp",
              value: "Nomor KTP",
              class: "ml-3"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "ktp",
              modelValue: unref(form).ktp,
              "onUpdate:modelValue": ($event) => unref(form).ktp = $event,
              type: "number",
              class: "mt-1 block w-full"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.ktp,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              for: "name",
              value: "Nama Sesuai KTP",
              class: "ml-3"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full uppercase"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              message: unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              class: ["w-full justify-center", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ajukan Pendaftaran `);
                } else {
                  return [
                    createTextVNode(" Ajukan Pendaftaran ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen" }, [
                createVNode("div", { class: "mt-10" }, [
                  createVNode("div", { class: "" }),
                  withDirectives(createVNode("div", { class: "my-10 text-center" }, [
                    createVNode("i", { class: "fa-duotone fa-loader fa-spin text-3xl text-primary-600" })
                  ], 512), [
                    [vShow, isCameraOpen.value && isLoading.value]
                  ]),
                  isCameraOpen.value ? withDirectives((openBlock(), createBlock("div", {
                    key: 0,
                    class: ["p-3 rounded-3xl relative", { "flash": isShotPhoto.value }]
                  }, [
                    createVNode(_sfc_main$2, {
                      value: "Foto KTP",
                      class: "ml-3 mb-1"
                    }),
                    createVNode("div", {
                      class: ["", { "flash": isShotPhoto.value }]
                    }, null, 2),
                    withDirectives(createVNode("video", {
                      ref_key: "camcam",
                      ref: camcam,
                      class: "rounded-3xl scale-x-flip",
                      width: 450,
                      height: 337.5,
                      autoplay: ""
                    }, null, 512), [
                      [vShow, !isPhotoTaken.value]
                    ]),
                    withDirectives(createVNode("canvas", {
                      id: "photoTaken",
                      ref: "canvas",
                      class: "rounded-3xl scale-x-flip w-full",
                      width: 450,
                      height: 337.5
                    }, null, 512), [
                      [vShow, isPhotoTaken.value]
                    ]),
                    isCameraOpen.value && !isLoading.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "text-center mt-2 absolute bottom-5 left-0 right-0 justify-center"
                    }, [
                      createVNode("button", {
                        class: "",
                        onClick: takePhoto
                      }, [
                        createVNode("i", { class: "fa-light fa-camera text-3xl text-white nightwind-prevent" })
                      ])
                    ])) : createCommentVNode("", true)
                  ], 2)), [
                    [vShow, !isLoading.value]
                  ]) : createCommentVNode("", true)
                ]),
                createVNode("div", { class: "mt-5 p-3 grid space-y-5" }, [
                  createVNode("div", { class: "" }, [
                    createVNode(_sfc_main$2, {
                      for: "ktp",
                      value: "Nomor KTP",
                      class: "ml-3"
                    }),
                    createVNode(_sfc_main$3, {
                      id: "ktp",
                      modelValue: unref(form).ktp,
                      "onUpdate:modelValue": ($event) => unref(form).ktp = $event,
                      type: "number",
                      class: "mt-1 block w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      message: unref(form).errors.ktp,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "" }, [
                    createVNode(_sfc_main$2, {
                      for: "name",
                      value: "Nama Sesuai KTP",
                      class: "ml-3"
                    }),
                    createVNode(_sfc_main$3, {
                      id: "name",
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      type: "text",
                      class: "mt-1 block w-full uppercase"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$4, {
                      message: unref(form).errors.name,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ]),
                  createVNode("div", { class: "" }, [
                    createVNode(_sfc_main$5, {
                      class: ["w-full justify-center", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Ajukan Pendaftaran ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Upgrade/CreateEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
