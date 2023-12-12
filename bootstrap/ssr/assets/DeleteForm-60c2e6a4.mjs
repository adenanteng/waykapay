import { ref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ActionSection-b1b3d881.mjs";
import { _ as _sfc_main$2 } from "./DangerButton-ced309d9.mjs";
import "./DialogModal-279eea47.mjs";
import "./InputError-6aeb8d97.mjs";
import "./SecondaryButton-70b2499c.mjs";
import "./TextInput-581d553f.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "DeleteForm",
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
    const deletePage = () => {
      form.delete(route("user.destroy", props.users), {
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
            _push2(` Hapus Pengguna `);
          } else {
            return [
              createTextVNode(" Hapus Pengguna ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hapus akun secara permanen `);
          } else {
            return [
              createTextVNode(" Hapus akun secara permanen ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}> Setelah akun dihapus, semua sumber daya dan datanya akan dihapus secara permanen. </div><div class="mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: "",
              onClick: deletePage
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hapus Pengguna `);
                } else {
                  return [
                    createTextVNode(" Hapus Pengguna ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " Setelah akun dihapus, semua sumber daya dan datanya akan dihapus secara permanen. "),
              createVNode("div", { class: "mt-5" }, [
                createVNode(_sfc_main$2, {
                  class: "",
                  onClick: deletePage
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Hapus Pengguna ")
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Partials/DeleteForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
