import { computed, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d45ca2f7.mjs";
import _sfc_main$3 from "./UpdateAppInformationForm-fd0e8386.mjs";
import { _ as _sfc_main$2 } from "./PreviousButton-54c32c2b.mjs";
import { S as SectionBorder } from "./SectionBorder-ee088f14.mjs";
import "./UpdateApiMidtransForm-59051ad0.mjs";
import _sfc_main$d from "./UpdateApiDigiflazzForm-581b850f.mjs";
import "./UpdateApiFlipForm-092a53e4.mjs";
import _sfc_main$9 from "./UpdateFeePulsaForm-03afd0bb.mjs";
import _sfc_main$4 from "./UpdateFeeEmoneyForm-1a25ee3c.mjs";
import _sfc_main$5 from "./UpdateFeeEtollForm-24dbc9af.mjs";
import _sfc_main$6 from "./UpdateFeeGamesForm-88f4f965.mjs";
import _sfc_main$7 from "./UpdateFeeInternetForm-0a609a44.mjs";
import _sfc_main$8 from "./UpdateFeePlnForm-c6e353bc.mjs";
import _sfc_main$a from "./UpdateFeeTVForm-a6074ae7.mjs";
import _sfc_main$b from "./UpdateFeeVoucherForm-751ce5f8.mjs";
import "./SecondaryButton-0a2fd542.mjs";
import { useForm, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$c } from "./DangerButton-ced309d9.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./ActionMessage-c43f20d9.mjs";
import "./FormSection-b0f83775.mjs";
import "./SectionTitle-592cad78.mjs";
import "./InputError-6aeb8d97.mjs";
import "./InputLabel-3c261e52.mjs";
import "./PrimaryButton-3722f774.mjs";
import "./TextInput-581d553f.mjs";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      // password: '',
    });
    const { ...userInfo } = computed(() => usePage().props.appSetting).value;
    const deleteRedis = () => {
      form.delete(route("setting.destroy", userInfo), {
        preserveScroll: true,
        onSuccess: () => {
        }
        // onError: () => passwordInput.value.focus(),
        // onFinish: () => form.reset(),
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Pengaturan",
        name: "Pengaturan Aplikasi",
        desc: "lorem ipsum"
      }, _attrs), {
        previous: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              href: _ctx.route("profile.index")
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                href: _ctx.route("profile.index")
              }, null, 8, ["href"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              setting: _ctx.$page.props.appSetting
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              setting: _ctx.$page.props.appSetting
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              setting: _ctx.$page.props.appSetting
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              setting: _ctx.$page.props.appSetting
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$7, {
              setting: _ctx.$page.props.appSetting
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              setting: _ctx.$page.props.appSetting
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, {
              setting: _ctx.$page.props.appSetting
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, {
              setting: _ctx.$page.props.appSetting
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, {
              setting: _ctx.$page.props.appSetting
            }, null, _parent2, _scopeId));
            _push2(`<div class="relative py-8"${_scopeId}><div class="absolute inset-0 flex items-center" aria-hidden="true"${_scopeId}><div class="w-full border-t border-gray-300"${_scopeId}></div></div><div class="relative flex justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$c, {
              class: "",
              onClick: deleteRedis
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="fa-regular fa-trash mr-2"${_scopeId2}></i> Hapus Cache `);
                } else {
                  return [
                    createVNode("i", { class: "fa-regular fa-trash mr-2" }),
                    createTextVNode(" Hapus Cache ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(_sfc_main$d, {
              setting: _ctx.$page.props.appSetting
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, {
                setting: _ctx.$page.props.appSetting
              }, null, 8, ["setting"]),
              createVNode(SectionBorder),
              createVNode(_sfc_main$4, {
                setting: _ctx.$page.props.appSetting
              }, null, 8, ["setting"]),
              createVNode(SectionBorder),
              createVNode(_sfc_main$5, {
                setting: _ctx.$page.props.appSetting
              }, null, 8, ["setting"]),
              createVNode(SectionBorder),
              createVNode(_sfc_main$6, {
                setting: _ctx.$page.props.appSetting
              }, null, 8, ["setting"]),
              createVNode(SectionBorder),
              createVNode(_sfc_main$7, {
                setting: _ctx.$page.props.appSetting
              }, null, 8, ["setting"]),
              createVNode(SectionBorder),
              createVNode(_sfc_main$8, {
                setting: _ctx.$page.props.appSetting
              }, null, 8, ["setting"]),
              createVNode(SectionBorder),
              createVNode(_sfc_main$9, {
                setting: _ctx.$page.props.appSetting
              }, null, 8, ["setting"]),
              createVNode(SectionBorder),
              createVNode(_sfc_main$a, {
                setting: _ctx.$page.props.appSetting
              }, null, 8, ["setting"]),
              createVNode(SectionBorder),
              createVNode(_sfc_main$b, {
                setting: _ctx.$page.props.appSetting
              }, null, 8, ["setting"]),
              createVNode("div", { class: "relative py-8" }, [
                createVNode("div", {
                  class: "absolute inset-0 flex items-center",
                  "aria-hidden": "true"
                }, [
                  createVNode("div", { class: "w-full border-t border-gray-300" })
                ]),
                createVNode("div", { class: "relative flex justify-center" }, [
                  createVNode(_sfc_main$c, {
                    class: "",
                    onClick: deleteRedis
                  }, {
                    default: withCtx(() => [
                      createVNode("i", { class: "fa-regular fa-trash mr-2" }),
                      createTextVNode(" Hapus Cache ")
                    ]),
                    _: 1
                  })
                ])
              ]),
              createVNode(_sfc_main$d, {
                setting: _ctx.$page.props.appSetting
              }, null, 8, ["setting"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AppSetting/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
