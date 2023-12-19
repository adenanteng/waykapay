import { ref, mergeProps, withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import "./MobileMenu-5acf9387.mjs";
import "./PrimaryButton-3722f774.mjs";
import "./SecondaryButton-0a2fd542.mjs";
import "moment";
import { _ as _sfc_main$1 } from "./BlankLayout-851b751e.mjs";
import "./ApplicationLogo-6cbfcc6b.mjs";
import VOtpInput from "vue3-otp-input";
import { _ as _sfc_main$2 } from "./InputError-6aeb8d97.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    request: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      // user_id: props.users.id ?? null,
      pin: null
    });
    console.log(props.request);
    const storeInformation = () => {
      form.pin = bindModal.value;
      form.post(route("pin.store"), {
        errorBag: "storeInformation",
        preserveScroll: true,
        onSuccess: () => {
        }
      });
    };
    const otpInput = ref(VOtpInput | null);
    const bindModal = ref("");
    const handleOnComplete = (value) => {
      console.log("OTP completed: ", value);
      storeInformation();
    };
    const handleOnChange = (value) => {
      console.log("OTP changed: ", value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ title: "Pin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative isolate overflow-hidden"${_scopeId}><div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8"${_scopeId}><div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"${_scopeId}><h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"${_scopeId}>Masukkan pin</h1><p class="text-sm leading-8 text-gray-600"${_scopeId}>Lorem ipsum</p><div class="mt-10"${_scopeId}><div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(unref(VOtpInput), {
              ref_key: "otpInput",
              ref: otpInput,
              value: bindModal.value,
              "onUpdate:value": ($event) => bindModal.value = $event,
              "input-classes": "otp-input",
              separator: "",
              "num-inputs": 6,
              "should-auto-focus": true,
              "input-type": "letter-numeric",
              conditionalClass: ["one", "two", "three", "four", "five", "six"],
              onOnChange: handleOnChange,
              onOnComplete: handleOnComplete
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              message: unref(form).errors.pin,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative isolate overflow-hidden" }, [
                createVNode("div", { class: "mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8" }, [
                  createVNode("div", { class: "mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8" }, [
                    createVNode("h1", { class: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl" }, "Masukkan pin"),
                    createVNode("p", { class: "text-sm leading-8 text-gray-600" }, "Lorem ipsum"),
                    createVNode("div", { class: "mt-10" }, [
                      createVNode("div", { class: "" }, [
                        createVNode(unref(VOtpInput), {
                          ref_key: "otpInput",
                          ref: otpInput,
                          value: bindModal.value,
                          "onUpdate:value": ($event) => bindModal.value = $event,
                          "input-classes": "otp-input",
                          separator: "",
                          "num-inputs": 6,
                          "should-auto-focus": true,
                          "input-type": "letter-numeric",
                          conditionalClass: ["one", "two", "three", "four", "five", "six"],
                          onOnChange: handleOnChange,
                          onOnComplete: handleOnComplete
                        }, null, 8, ["value", "onUpdate:value"]),
                        createVNode(_sfc_main$2, {
                          message: unref(form).errors.pin,
                          class: "mt-2"
                        }, null, 8, ["message"])
                      ])
                    ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pin/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
