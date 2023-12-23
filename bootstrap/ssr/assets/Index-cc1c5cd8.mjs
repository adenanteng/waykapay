import { mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d45ca2f7.mjs";
import { useForm } from "@inertiajs/vue3";
import "./MobileMenu-5acf9387.mjs";
import { _ as _sfc_main$5 } from "./TextInput-581d553f.mjs";
import { _ as _sfc_main$6 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$2 } from "./PreviousButton-54c32c2b.mjs";
import { _ as _sfc_main$3 } from "./FormSection-4680a7c9.mjs";
import { _ as _sfc_main$7 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$8 } from "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$4 } from "./InputLabel-3c261e52.mjs";
import "./ActionSection-b1b3d881.mjs";
import "./DialogModal-98d96ed5.mjs";
import "./SecondaryButton-0a2fd542.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./SectionTitle-592cad78.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: Object
  },
  setup(__props) {
    const form = useForm({
      customer_no: ""
    });
    const storeInformation = () => {
      form.post(route("internet.indihome.inquiry", form), {
        errorBag: "storeInformation",
        preserveScroll: true
        // onSuccess: () => closeModal(),
        // onError: () => passwordInput.value.focus(),
        // onFinish: () => form.reset(),
      });
    };
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Indihome",
        name: "Indihome",
        desc: "Masukkan nomor meter"
      }, _attrs), {
        previous: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, { onSubmitted: storeInformation }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Indihome `);
                } else {
                  return [
                    createTextVNode(" Indihome ")
                  ];
                }
              }),
              description: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` * Saldo Rekening Rp ${ssrInterpolate(formatPrice(_ctx.$page.props.user.wallet_balance))}`);
                } else {
                  return [
                    createTextVNode(" * Saldo Rekening Rp " + toDisplayString(formatPrice(_ctx.$page.props.user.wallet_balance)), 1)
                  ];
                }
              }),
              form: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="col-span-6 sm:col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    for: "number",
                    value: "Masukkan id pelanggan"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    id: "number",
                    modelValue: unref(form).customer_no,
                    "onUpdate:modelValue": ($event) => unref(form).customer_no = $event,
                    type: "number",
                    class: "mt-1 block w-full",
                    minlength: "5",
                    required: "",
                    autofocus: ""
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    message: unref(form).errors.customer_no,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                      createVNode(_sfc_main$4, {
                        for: "number",
                        value: "Masukkan id pelanggan"
                      }),
                      createVNode(_sfc_main$5, {
                        id: "number",
                        modelValue: unref(form).customer_no,
                        "onUpdate:modelValue": ($event) => unref(form).customer_no = $event,
                        type: "number",
                        class: "mt-1 block w-full",
                        minlength: "5",
                        required: "",
                        autofocus: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_sfc_main$6, {
                        message: unref(form).errors.customer_no,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    on: unref(form).recentlySuccessful,
                    class: "mr-3"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Berhasil disimpan. `);
                      } else {
                        return [
                          createTextVNode(" Berhasil disimpan. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cek `);
                      } else {
                        return [
                          createTextVNode(" Cek ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, {
                      on: unref(form).recentlySuccessful,
                      class: "mr-3"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Berhasil disimpan. ")
                      ]),
                      _: 1
                    }, 8, ["on"]),
                    createVNode(_sfc_main$8, {
                      class: { "opacity-25": unref(form).processing },
                      disabled: unref(form).processing
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cek ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, { onSubmitted: storeInformation }, {
                title: withCtx(() => [
                  createTextVNode(" Indihome ")
                ]),
                description: withCtx(() => [
                  createTextVNode(" * Saldo Rekening Rp " + toDisplayString(formatPrice(_ctx.$page.props.user.wallet_balance)), 1)
                ]),
                form: withCtx(() => [
                  createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                    createVNode(_sfc_main$4, {
                      for: "number",
                      value: "Masukkan id pelanggan"
                    }),
                    createVNode(_sfc_main$5, {
                      id: "number",
                      modelValue: unref(form).customer_no,
                      "onUpdate:modelValue": ($event) => unref(form).customer_no = $event,
                      type: "number",
                      class: "mt-1 block w-full",
                      minlength: "5",
                      required: "",
                      autofocus: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_sfc_main$6, {
                      message: unref(form).errors.customer_no,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                actions: withCtx(() => [
                  createVNode(_sfc_main$7, {
                    on: unref(form).recentlySuccessful,
                    class: "mr-3"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Berhasil disimpan. ")
                    ]),
                    _: 1
                  }, 8, ["on"]),
                  createVNode(_sfc_main$8, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Cek ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/PascaInternet/Indihome/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
