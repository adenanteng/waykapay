import { withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./ActionSection-b1b3d881.mjs";
import { _ as _sfc_main$2 } from "./DangerButton-ced309d9.mjs";
import "./SectionTitle-592cad78.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "DeleteForm",
  __ssrInlineRender: true,
  props: {
    carousel: Object | null
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      id: props.carousel.id
    });
    const deleteCarousel = () => {
      form.delete(route("carousel.destroy", props.carousel), {
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
            _push2(` Hapus Carousel `);
          } else {
            return [
              createTextVNode(" Hapus Carousel ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hapus permanen carousel `);
          } else {
            return [
              createTextVNode(" Hapus permanen carousel ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}> Carousel yang dihapus tidak dapat dipulihkan. </div><div class="mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, { onClick: deleteCarousel }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Hapus Carousel `);
                } else {
                  return [
                    createTextVNode(" Hapus Carousel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " Carousel yang dihapus tidak dapat dipulihkan. "),
              createVNode("div", { class: "mt-5" }, [
                createVNode(_sfc_main$2, { onClick: deleteCarousel }, {
                  default: withCtx(() => [
                    createTextVNode(" Hapus Carousel ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Carousel/Partials/DeleteForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
