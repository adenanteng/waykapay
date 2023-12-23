import { mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d45ca2f7.mjs";
import "./DeleteUserForm-126e9b72.mjs";
import _sfc_main$7 from "./LogoutOtherBrowserSessionsForm-dd0d5815.mjs";
import { S as SectionBorder } from "./SectionBorder-ee088f14.mjs";
import _sfc_main$6 from "./TwoFactorAuthenticationForm-5c4991f8.mjs";
import _sfc_main$5 from "./UpdatePasswordForm-28b8eb5a.mjs";
import _sfc_main$3 from "./UpdateProfileInformationForm-65cfcb61.mjs";
import "./MobileMenu-5acf9387.mjs";
import { _ as _sfc_main$2 } from "./PreviousButton-54c32c2b.mjs";
import _sfc_main$4 from "./UpdatePinForm-694e8539.mjs";
import "@inertiajs/vue3";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./ActionSection-b1b3d881.mjs";
import "./SectionTitle-592cad78.mjs";
import "./DangerButton-ced309d9.mjs";
import "./DialogModal-98d96ed5.mjs";
import "./InputError-6aeb8d97.mjs";
import "./SecondaryButton-0a2fd542.mjs";
import "./TextInput-581d553f.mjs";
import "./ActionMessage-c43f20d9.mjs";
import "./PrimaryButton-3722f774.mjs";
import "./InputLabel-3c261e52.mjs";
import "./FormSection-4680a7c9.mjs";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: _ctx.$page.props.user.name,
        name: _ctx.$page.props.user.name,
        desc: _ctx.$page.props.user.email,
        avatar: _ctx.$page.props.user.profile_photo_url
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
            if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                user: _ctx.$page.props.user
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.canUpdatePassword) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_sfc_main$5, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.jetstream.canManageTwoFactorAuthentication) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_sfc_main$6, { "requires-confirmation": __props.confirmsTwoFactorAuthentication }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$7, { sessions: __props.sessions }, null, _parent2, _scopeId));
          } else {
            return [
              _ctx.$page.props.jetstream.canUpdateProfileInformation ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode(_sfc_main$3, {
                  user: _ctx.$page.props.user
                }, null, 8, ["user"]),
                createVNode(SectionBorder)
              ], 64)) : createCommentVNode("", true),
              createVNode(_sfc_main$4),
              createVNode(SectionBorder),
              _ctx.$page.props.jetstream.canUpdatePassword ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(_sfc_main$5),
                createVNode(SectionBorder)
              ], 64)) : createCommentVNode("", true),
              _ctx.$page.props.jetstream.canManageTwoFactorAuthentication ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                createVNode(_sfc_main$6, { "requires-confirmation": __props.confirmsTwoFactorAuthentication }, null, 8, ["requires-confirmation"]),
                createVNode(SectionBorder)
              ], 64)) : createCommentVNode("", true),
              createVNode(_sfc_main$7, { sessions: __props.sessions }, null, 8, ["sessions"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
