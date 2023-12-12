import { mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d2330d14.mjs";
import "./SectionBorder-ee088f14.mjs";
import _sfc_main$3 from "./UpdateInformationForm-fce960b1.mjs";
import { _ as _sfc_main$2 } from "./PreviousButton-54c32c2b.mjs";
import "@inertiajs/vue3";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./SecondaryButton-70b2499c.mjs";
import "./ActionMessage-c43f20d9.mjs";
import "./FormSection-cdefd75b.mjs";
import "./SectionTitle-592cad78.mjs";
import "./InputError-6aeb8d97.mjs";
import "./InputLabel-3c261e52.mjs";
import "./PrimaryButton-3137fc48.mjs";
import "./TextInput-581d553f.mjs";
import "./ActionSection-b1b3d881.mjs";
import "./TextAreaInput-724f9eae.mjs";
const _sfc_main = {
  __name: "CreateEdit",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Kirim Uang",
        name: "Mau isi saldo berapa?",
        desc: "lorem ipsum"
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
            _push2(ssrRenderComponent(_sfc_main$3, {
              users: _ctx.$page.props.users ?? "",
              response: _ctx.$page.props.response ?? "",
              bank: _ctx.$page.props.bank ?? "",
              account_no: _ctx.$page.props.account_no ?? ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                users: _ctx.$page.props.users ?? "",
                response: _ctx.$page.props.response ?? "",
                bank: _ctx.$page.props.bank ?? "",
                account_no: _ctx.$page.props.account_no ?? ""
              }, null, 8, ["users", "response", "bank", "account_no"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/MoneyTransfer/CreateEdit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
