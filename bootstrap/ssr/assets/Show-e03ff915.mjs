import { ref, watch, mergeProps, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-1cc769bf.mjs";
import "./TextInput-581d553f.mjs";
import { router, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./PrimaryButton-3137fc48.mjs";
import { _ as _sfc_main$2 } from "./PreviousButton-54c32c2b.mjs";
import moment from "moment/moment.js";
import { _ as _sfc_main$5 } from "./Pagination-8bf1701d.mjs";
import { _ as _sfc_main$3 } from "./SecondaryButton-70b2499c.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    users: Object | String,
    history: {
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
        route("user.show", props.users),
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
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: props.users.name,
        name: props.users.name,
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
            _push2(`<div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><div class="py-4 px-4 lg:flex lg:items-center lg:justify-between"${_scopeId}><div class="tracking-tight flex gap-5 items-center"${_scopeId}><div class=""${_scopeId}>`);
            if (props.users.profile_photo_url) {
              _push2(`<img class="mx-auto h-12 w-12 object-cover rounded-full"${ssrRenderAttr("src", props.users.profile_photo_url)}${ssrRenderAttr("alt", props.users.name)}${_scopeId}>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class=""${_scopeId}><div class="block text-xl font-bold text-gray-900 capitalize"${_scopeId}>${ssrInterpolate(props.users.name)} <span class="text-sm font-medium ml-2 text-gray-500"${_scopeId}>#${ssrInterpolate(props.users.slug)}</span></div><div class="block text-sm font-medium text-gray-600 space-x-2"${_scopeId}><span${_scopeId}><i class="fa-regular fa-mobile mr-1"${_scopeId}></i>${ssrInterpolate(props.users.phone)}</span><span${_scopeId}><i class="fa-regular fa-envelope mr-1"${_scopeId}></i>${ssrInterpolate(props.users.email)}</span></div><div class="block text-sm font-medium text-gray-600"${_scopeId}> Akun ${ssrInterpolate(props.users.role)}</div><div class="block text-sm font-medium text-primary-600"${_scopeId}> Rp ${ssrInterpolate(formatPrice(props.users.wallet_balance))}</div></div></div><div class="mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              as: "a",
              href: _ctx.route("user.normalizeTransaction", props.users)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="fa-regular fa-arrows-rotate"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "fa-regular fa-arrows-rotate" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
              as: "a",
              href: _ctx.route("user.edit", props.users)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Ubah Data `);
                } else {
                  return [
                    createTextVNode(" Ubah Data ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="flex justify-between gap-3"${_scopeId}><div class=""${_scopeId}></div><div class=""${_scopeId}></div></div><div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600"${_scopeId}><!--[-->`);
            ssrRenderList(props.history.data, (history) => {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                "preserve-scroll": "",
                href: _ctx.route("history.show", history.order_id),
                class: "block hover:bg-primary-50"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="px-4 py-4 sm:px-6"${_scopeId2}><div class="flex items-center justify-between"${_scopeId2}><p class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-primary-600" : "text-gray-500", "font-medium truncate uppercase"])}"${_scopeId2}>${ssrInterpolate(history.product_name)} `);
                    if (history.virtual_account) {
                      _push3(`<!--[-->${ssrInterpolate(history.virtual_account.bank)}<!--]-->`);
                    } else if (history.wallet_account) {
                      _push3(`<!--[-->${ssrInterpolate(history.wallet_account.bank)}<!--]-->`);
                    } else if (history.money_transfer) {
                      _push3(`<!--[-->`);
                      if (history.user_id == props.users.id) {
                        _push3(`<!--[--> ke ${ssrInterpolate(history.money_transfer.to.name)}<!--]-->`);
                      } else {
                        _push3(`<!--[--> dari ${ssrInterpolate(history.user.name)}<!--]-->`);
                      }
                      _push3(`<!--]-->`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</p><div class="ml-2 flex-shrink-0 flex"${_scopeId2}><p class="${ssrRenderClass([history.color, "px-2 inline-flex text-xs leading-5 font-semibold rounded-full"])}"${_scopeId2}>${ssrInterpolate(history.status)}</p></div></div><div class="flex justify-between"${_scopeId2}><div class="flex"${_scopeId2}><p class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-center text-sm mr-2"])}"${_scopeId2}> #${ssrInterpolate(history.order_id)}</p><p class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-center text-sm"])}"${_scopeId2}> Rp ${ssrInterpolate(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount))}</p></div><div class="${ssrRenderClass([history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500", "flex items-center text-sm"])}"${_scopeId2}>${ssrInterpolate(formattedDate(history.created_at))}</div></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "px-4 py-4 sm:px-6" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("p", {
                            class: ["font-medium truncate uppercase", history.status_id == 1 || history.status_id == 2 ? "text-primary-600" : "text-gray-500"]
                          }, [
                            createTextVNode(toDisplayString(history.product_name) + " ", 1),
                            history.virtual_account ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(toDisplayString(history.virtual_account.bank), 1)
                            ], 64)) : history.wallet_account ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(toDisplayString(history.wallet_account.bank), 1)
                            ], 64)) : history.money_transfer ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                              history.user_id == props.users.id ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createTextVNode(" ke " + toDisplayString(history.money_transfer.to.name), 1)
                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createTextVNode(" dari " + toDisplayString(history.user.name), 1)
                              ], 64))
                            ], 64)) : createCommentVNode("", true)
                          ], 2),
                          createVNode("div", { class: "ml-2 flex-shrink-0 flex" }, [
                            createVNode("p", {
                              class: ["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", history.color]
                            }, toDisplayString(history.status), 3)
                          ])
                        ]),
                        createVNode("div", { class: "flex justify-between" }, [
                          createVNode("div", { class: "flex" }, [
                            createVNode("p", {
                              class: ["flex items-center text-sm mr-2", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                            }, " #" + toDisplayString(history.order_id), 3),
                            createVNode("p", {
                              class: ["flex items-center text-sm", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                            }, " Rp " + toDisplayString(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount)), 3)
                          ]),
                          createVNode("div", {
                            class: ["flex items-center text-sm", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                          }, toDisplayString(formattedDate(history.created_at)), 3)
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
            _push2(ssrRenderComponent(_sfc_main$5, {
              pagination: props.history
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300" }, [
                createVNode("div", { class: "py-4 px-4 lg:flex lg:items-center lg:justify-between" }, [
                  createVNode("div", { class: "tracking-tight flex gap-5 items-center" }, [
                    createVNode("div", { class: "" }, [
                      props.users.profile_photo_url ? (openBlock(), createBlock("img", {
                        key: 0,
                        class: "mx-auto h-12 w-12 object-cover rounded-full",
                        src: props.users.profile_photo_url,
                        alt: props.users.name
                      }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "" }, [
                      createVNode("div", { class: "block text-xl font-bold text-gray-900 capitalize" }, [
                        createTextVNode(toDisplayString(props.users.name) + " ", 1),
                        createVNode("span", { class: "text-sm font-medium ml-2 text-gray-500" }, "#" + toDisplayString(props.users.slug), 1)
                      ]),
                      createVNode("div", { class: "block text-sm font-medium text-gray-600 space-x-2" }, [
                        createVNode("span", null, [
                          createVNode("i", { class: "fa-regular fa-mobile mr-1" }),
                          createTextVNode(toDisplayString(props.users.phone), 1)
                        ]),
                        createVNode("span", null, [
                          createVNode("i", { class: "fa-regular fa-envelope mr-1" }),
                          createTextVNode(toDisplayString(props.users.email), 1)
                        ])
                      ]),
                      createVNode("div", { class: "block text-sm font-medium text-gray-600" }, " Akun " + toDisplayString(props.users.role), 1),
                      createVNode("div", { class: "block text-sm font-medium text-primary-600" }, " Rp " + toDisplayString(formatPrice(props.users.wallet_balance)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2" }, [
                    createVNode(_sfc_main$3, {
                      as: "a",
                      href: _ctx.route("user.normalizeTransaction", props.users)
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa-regular fa-arrows-rotate" })
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$4, {
                      as: "a",
                      href: _ctx.route("user.edit", props.users)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Ubah Data ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ]),
              createVNode("div", { class: "flex justify-between gap-3" }, [
                createVNode("div", { class: "" }),
                createVNode("div", { class: "" })
              ]),
              createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300" }, [
                createVNode("ul", {
                  role: "list",
                  class: "divide-y divide-gray-300 dark:divide-gray-600"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.history.data, (history) => {
                    return openBlock(), createBlock("li", null, [
                      createVNode(unref(Link), {
                        "preserve-scroll": "",
                        href: _ctx.route("history.show", history.order_id),
                        class: "block hover:bg-primary-50"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "px-4 py-4 sm:px-6" }, [
                            createVNode("div", { class: "flex items-center justify-between" }, [
                              createVNode("p", {
                                class: ["font-medium truncate uppercase", history.status_id == 1 || history.status_id == 2 ? "text-primary-600" : "text-gray-500"]
                              }, [
                                createTextVNode(toDisplayString(history.product_name) + " ", 1),
                                history.virtual_account ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createTextVNode(toDisplayString(history.virtual_account.bank), 1)
                                ], 64)) : history.wallet_account ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createTextVNode(toDisplayString(history.wallet_account.bank), 1)
                                ], 64)) : history.money_transfer ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                                  history.user_id == props.users.id ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(" ke " + toDisplayString(history.money_transfer.to.name), 1)
                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(" dari " + toDisplayString(history.user.name), 1)
                                  ], 64))
                                ], 64)) : createCommentVNode("", true)
                              ], 2),
                              createVNode("div", { class: "ml-2 flex-shrink-0 flex" }, [
                                createVNode("p", {
                                  class: ["px-2 inline-flex text-xs leading-5 font-semibold rounded-full", history.color]
                                }, toDisplayString(history.status), 3)
                              ])
                            ]),
                            createVNode("div", { class: "flex justify-between" }, [
                              createVNode("div", { class: "flex" }, [
                                createVNode("p", {
                                  class: ["flex items-center text-sm mr-2", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                                }, " #" + toDisplayString(history.order_id), 3),
                                createVNode("p", {
                                  class: ["flex items-center text-sm", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                                }, " Rp " + toDisplayString(history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount)), 3)
                              ]),
                              createVNode("div", {
                                class: ["flex items-center text-sm", history.status_id == 1 || history.status_id == 2 ? "text-gray-900" : "text-gray-500"]
                              }, toDisplayString(formattedDate(history.created_at)), 3)
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["href"])
                    ]);
                  }), 256))
                ])
              ]),
              createVNode(_sfc_main$5, {
                pagination: props.history
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/User/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
