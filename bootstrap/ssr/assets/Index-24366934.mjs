import { ref, watch, mergeProps, withCtx, unref, isRef, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-9b20f5ee.mjs";
import { _ as _sfc_main$2 } from "./TextInput-581d553f.mjs";
import { router, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./PrimaryButton-3137fc48.mjs";
import moment from "moment/moment.js";
import "./Badge-0aaec22c.mjs";
import { _ as _sfc_main$4 } from "./Pagination-8bf1701d.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./SecondaryButton-70b2499c.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    users: {
      type: Object,
      default: () => ({})
    },
    filters: {
      type: Object,
      default: () => ({})
    }
  },
  setup(__props) {
    const props = __props;
    let search = ref(props.filters.search);
    watch(search, (value) => {
      router.get(
        route("user.index"),
        { search: value },
        {
          preserveState: true,
          replace: true
        }
      );
    });
    function formattedDate(value) {
      return moment(value).format("DD MMM Y HH:mm");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Pengguna",
        name: "Pengguna",
        desc: "Data pengguna"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-between gap-3"${_scopeId}><div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              type: "text",
              modelValue: unref(search),
              "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : search = $event,
              placeholder: "Cari disini",
              class: "block w-full lg:w-96 shadow"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              as: "a",
              href: _ctx.route("user.create")
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
            _push2(`</div></div><div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600"${_scopeId}><!--[-->`);
            ssrRenderList(props.users.data, (item) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("user.show", item.slug),
                class: "block hover:bg-primary-50"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="px-4 py-4 sm:px-6"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><p class="font-medium truncate capitalize text-gray-900"${_scopeId2}>${ssrInterpolate(item.name)} <span class="text-sm font-medium ml-2 text-gray-500"${_scopeId2}>#${ssrInterpolate(item.slug)}</span></p><div class="ml-2 flex-shrink-0 flex"${_scopeId2}>`);
                    if (item.email_verified_at) {
                      _push3(`<p class="px-2 text-xs leading-5 font-semibold rounded-full mr-2 bg-green-100 text-green-800"${_scopeId2}><i class="fa-regular fa-check mr-1"${_scopeId2}></i> Verified </p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<p class="${ssrRenderClass([item.color, "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])}"${_scopeId2}>${ssrInterpolate(item.status)}</p></div></div><div class="flex justify-between"${_scopeId2}><div class="sm:flex gap-3"${_scopeId2}><p class="flex items-center text-sm text-gray-600"${_scopeId2}>${ssrInterpolate(item.phone)}</p><p class="flex items-center text-sm text-gray-600"${_scopeId2}>${ssrInterpolate(item.email)}</p></div><div class="flex items-end text-sm text-gray-600"${_scopeId2}>${ssrInterpolate(formattedDate(item.updated_at))}</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "px-4 py-4 sm:px-6" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("p", { class: "font-medium truncate capitalize text-gray-900" }, [
                            createTextVNode(toDisplayString(item.name) + " ", 1),
                            createVNode("span", { class: "text-sm font-medium ml-2 text-gray-500" }, "#" + toDisplayString(item.slug), 1)
                          ]),
                          createVNode("div", { class: "ml-2 flex-shrink-0 flex" }, [
                            item.email_verified_at ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "px-2 text-xs leading-5 font-semibold rounded-full mr-2 bg-green-100 text-green-800"
                            }, [
                              createVNode("i", { class: "fa-regular fa-check mr-1" }),
                              createTextVNode(" Verified ")
                            ])) : createCommentVNode("", true),
                            createVNode("p", {
                              class: ["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", item.color]
                            }, toDisplayString(item.status), 3)
                          ])
                        ]),
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("div", { class: "sm:flex gap-3" }, [
                            createVNode("p", { class: "flex items-center text-sm text-gray-600" }, toDisplayString(item.phone), 1),
                            createVNode("p", { class: "flex items-center text-sm text-gray-600" }, toDisplayString(item.email), 1)
                          ]),
                          createVNode("div", { class: "flex items-end text-sm text-gray-600" }, toDisplayString(formattedDate(item.updated_at)), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul></div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              pagination: props.users
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "flex justify-between gap-3" }, [
                createVNode("div", { class: "" }, [
                  createVNode(_sfc_main$2, {
                    type: "text",
                    modelValue: unref(search),
                    "onUpdate:modelValue": ($event) => isRef(search) ? search.value = $event : search = $event,
                    placeholder: "Cari disini",
                    class: "block w-full lg:w-96 shadow"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "" }, [
                  createVNode(_sfc_main$3, {
                    as: "a",
                    href: _ctx.route("user.create")
                  }, {
                    default: withCtx(() => [
                      createTextVNode("Tambah")
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ]),
              createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300" }, [
                createVNode("ul", {
                  role: "list",
                  class: "divide-y divide-gray-300 dark:divide-gray-600"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.users.data, (item) => {
                    return openBlock(), createBlock("li", {
                      key: item.id
                    }, [
                      createVNode(unref(Link), {
                        href: _ctx.route("user.show", item.slug),
                        class: "block hover:bg-primary-50"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "px-4 py-4 sm:px-6" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("p", { class: "font-medium truncate capitalize text-gray-900" }, [
                                createTextVNode(toDisplayString(item.name) + " ", 1),
                                createVNode("span", { class: "text-sm font-medium ml-2 text-gray-500" }, "#" + toDisplayString(item.slug), 1)
                              ]),
                              createVNode("div", { class: "ml-2 flex-shrink-0 flex" }, [
                                item.email_verified_at ? (openBlock(), createBlock("p", {
                                  key: 0,
                                  class: "px-2 text-xs leading-5 font-semibold rounded-full mr-2 bg-green-100 text-green-800"
                                }, [
                                  createVNode("i", { class: "fa-regular fa-check mr-1" }),
                                  createTextVNode(" Verified ")
                                ])) : createCommentVNode("", true),
                                createVNode("p", {
                                  class: ["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", item.color]
                                }, toDisplayString(item.status), 3)
                              ])
                            ]),
                            createVNode("div", { class: "flex justify-between" }, [
                              createVNode("div", { class: "sm:flex gap-3" }, [
                                createVNode("p", { class: "flex items-center text-sm text-gray-600" }, toDisplayString(item.phone), 1),
                                createVNode("p", { class: "flex items-center text-sm text-gray-600" }, toDisplayString(item.email), 1)
                              ]),
                              createVNode("div", { class: "flex items-end text-sm text-gray-600" }, toDisplayString(formattedDate(item.updated_at)), 1)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]);
                  }), 128))
                ])
              ]),
              createVNode(_sfc_main$4, {
                pagination: props.users
              }, null, 8, ["pagination"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
