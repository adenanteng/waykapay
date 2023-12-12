import { ref, mergeProps, withCtx, createTextVNode, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$1 } from "./FormSection-cdefd75b.mjs";
import "./InputError-6aeb8d97.mjs";
import "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$2 } from "./PrimaryButton-3137fc48.mjs";
import "./TextInput-581d553f.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "UpdatePinForm",
  __ssrInlineRender: true,
  setup(__props) {
    const pinInput = ref(null);
    const currentPinInput = ref(null);
    const form = useForm({
      current_pin: "",
      pin: "",
      pin_confirmation: ""
    });
    const updatePassword = () => {
      form.put(route("pin.store"), {
        errorBag: "storeInformation",
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
          if (form.errors.pin) {
            form.reset("pin", "pin_confirmation");
            pinInput.value.focus();
          }
          if (form.errors.current_pin) {
            form.reset("current_pin");
            currentPinInput.value.focus();
          }
        }
      });
    };
    ref(false);
    ref(false);
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ onSubmitted: updatePassword }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pin Transaksi `);
          } else {
            return [
              createTextVNode(" Pin Transaksi ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pastikan akun kamu menggunakan pin acak agar tetap aman. `);
          } else {
            return [
              createTextVNode(" Pastikan akun kamu menggunakan pin acak agar tetap aman. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2)
            ;
          else {
            return [];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.user.pin != null) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                as: "a",
                href: _ctx.route("pin.create")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Ubah Pin `);
                  } else {
                    return [
                      createTextVNode(" Ubah Pin ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_sfc_main$2, {
                as: "a",
                href: _ctx.route("pin.create")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Buat Pin `);
                  } else {
                    return [
                      createTextVNode(" Buat Pin ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
          } else {
            return [
              _ctx.$page.props.user.pin != null ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                as: "a",
                href: _ctx.route("pin.create")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Ubah Pin ")
                ]),
                _: 1
              }, 8, ["href"])) : (openBlock(), createBlock(_sfc_main$2, {
                key: 1,
                as: "a",
                href: _ctx.route("pin.create")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Buat Pin ")
                ]),
                _: 1
              }, 8, ["href"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePinForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
