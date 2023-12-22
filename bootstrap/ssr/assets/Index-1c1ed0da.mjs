import { mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-b84f86f2.mjs";
import { Link } from "@inertiajs/vue3";
import "./MobileMenu-5acf9387.mjs";
import "./OnlineStatus-589db755.mjs";
import "./DangerButton-ced309d9.mjs";
import { _ as _sfc_main$2 } from "./PrimaryButton-3722f774.mjs";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "@headlessui/vue";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "nightwind/helper.js";
import "@vueuse/core";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    carousel: Object
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Carousel",
        name: "Carousel",
        desc: "Carousel slider"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between"${_scopeId}><div class=""${_scopeId}></div><div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              as: "a",
              href: _ctx.route("carousel.create")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Tambah`);
                } else {
                  return [
                    createTextVNode("Tambah")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="grid grid-cols-1 gap-4 sm:grid-cols-3"${_scopeId}><!--[-->`);
            ssrRenderList(props.carousel, (data) => {
              _push2(`<div class="relative items-center bg-white bg-opacity-50 border border-gray-300 shadow-lg rounded-3xl"${_scopeId}><img class="h-auto w-full aspect-video object-cover rounded-t-3xl"${ssrRenderAttr("src", data.media[0].original_url)} alt=""${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("carousel.edit", data),
                class: "focus:outline-none text-left"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<span class="absolute inset-0" aria-hidden="true"${_scopeId2}></span><p class="text-sm font-medium text-gray-900 px-3 py-2"${_scopeId2}>${ssrInterpolate(data.href)}</p>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: "absolute inset-0",
                        "aria-hidden": "true"
                      }),
                      createVNode("p", { class: "text-sm font-medium text-gray-900 px-3 py-2" }, toDisplayString(data.href), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-between" }, [
                createVNode("div", { class: "" }),
                createVNode("div", { class: "" }, [
                  createVNode(_sfc_main$2, {
                    as: "a",
                    href: _ctx.route("carousel.create")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Tambah")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ]),
              createVNode("div", { class: "grid grid-cols-1 gap-4 sm:grid-cols-3" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(props.carousel, (data) => {
                  return openBlock(), createBlock("div", { class: "relative items-center bg-white bg-opacity-50 border border-gray-300 shadow-lg rounded-3xl" }, [
                    createVNode("img", {
                      class: "h-auto w-full aspect-video object-cover rounded-t-3xl",
                      src: data.media[0].original_url,
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode(unref(Link), {
                      href: _ctx.route("carousel.edit", data),
                      class: "focus:outline-none text-left"
                    }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: "absolute inset-0",
                          "aria-hidden": "true"
                        }),
                        createVNode("p", { class: "text-sm font-medium text-gray-900 px-3 py-2" }, toDisplayString(data.href), 1)
                      ]),
                      _: 2
                    }, 1032, ["href"])
                  ]);
                }), 256))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Carousel/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
