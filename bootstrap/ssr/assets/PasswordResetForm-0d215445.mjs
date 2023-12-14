import { ref, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ActionSection-b1b3d881.mjs";
import "./DangerButton-ced309d9.mjs";
import "./DialogModal-98d96ed5.mjs";
import "./InputError-6aeb8d97.mjs";
import "./SecondaryButton-70b2499c.mjs";
import "./TextInput-581d553f.mjs";
import { _ as _sfc_main$2 } from "./PrimaryButton-3137fc48.mjs";
import { _ as _sfc_main$3 } from "./ActionMessage-c43f20d9.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "PasswordResetForm",
  __ssrInlineRender: true,
  props: {
    users: Object
  },
  setup(__props) {
    const props = __props;
    ref(null);
    const form = useForm({
      id: props.users.id
    });
    const passwordReset = () => {
      form.post(route("user.passwordReset", props.users), {
        preserveScroll: true
        // onSuccess: () => closeModal(),
        // onError: () => passwordInput.value.focus(),
        // onFinish: () => form.reset(),
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Reset Password Pengguna `);
          } else {
            return [
              createTextVNode(" Reset Password Pengguna ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Reset password pengguna secara permanen `);
          } else {
            return [
              createTextVNode(" Reset password pengguna secara permanen ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}> Setelah reset password, password akan diganti secara permanen. </div><div class="mt-5 flex items-center gap-3"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "",
              onClick: passwordReset
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              on: unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Berhasil reset password. `);
                } else {
                  return [
                    createTextVNode(" Berhasil reset password. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " Setelah reset password, password akan diganti secara permanen. "),
              createVNode("div", { class: "mt-5 flex items-center gap-3" }, [
                createVNode(_sfc_main$2, {
                  class: "",
                  onClick: passwordReset
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Reset Password ")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$3, {
                  on: unref(form).recentlySuccessful,
                  class: "mr-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Berhasil reset password. ")
                  ]),
                  _: 1
                }, 8, ["on"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Partials/PasswordResetForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
