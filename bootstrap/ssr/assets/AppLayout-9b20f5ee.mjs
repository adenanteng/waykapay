import { ref, watch, computed, useSlots, onMounted, mergeProps, unref, withCtx, openBlock, createBlock, createVNode, createTextVNode, toDisplayString, withModifiers, renderSlot, Fragment, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Head, router } from "@inertiajs/vue3";
import { _ as _sfc_main$1, a as _sfc_main$3, b as _sfc_main$4, c as _sfc_main$5, d as _sfc_main$7 } from "./OnlineStatus-589db755.mjs";
import { _ as _sfc_main$2 } from "./Banner-24bf2dbf.mjs";
import { _ as _sfc_main$6 } from "./NavLinkAlt-d12ba1c8.mjs";
import { Popover, Menu, TransitionRoot, TransitionChild, PopoverOverlay, PopoverPanel, PopoverButton } from "@headlessui/vue";
import "./SecondaryButton-70b2499c.mjs";
const _sfc_main = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    title: String,
    darkMode: Boolean,
    greeting: String,
    name: String,
    desc: String,
    avatar: String
  },
  setup(__props) {
    const props = __props;
    const darkMode = ref(false);
    if (typeof window !== "undefined") {
      darkMode.value = JSON.parse(localStorage.getItem("darkmode")) ?? false;
      watch(darkMode, (newDarkMode) => {
        console.log(`darkmode is ${newDarkMode}`);
        localStorage.setItem("darkmode", JSON.stringify(newDarkMode));
      });
    }
    const showingNavigationDropdown = ref(false);
    computed(() => !!useSlots().action);
    const hasPrevious = computed(() => !!useSlots().previous);
    const split = props.name.split(" ");
    const logout = () => {
      router.post(route("logout"));
    };
    const headRef = ref(null);
    const titleRef = ref(null);
    const paddingRef = ref(null);
    onMounted(() => {
      var prev = window.pageYOffset;
      window.addEventListener("scroll", () => {
        if (headRef.value != null && titleRef.value != null) {
          var curr = window.pageYOffset;
          if (prev > curr)
            ;
          else {
            if (!hasPrevious.value) {
              headRef.value.classList.add("backdrop-blur", "border", "border-gray-300", "mx-4", "rounded-full", "sm:mx-0", "sm:border-0", "sm:rounded-none");
              titleRef.value.classList.add("text-xl");
              paddingRef.value.classList.remove("py-5");
              paddingRef.value.classList.add("py-2");
            }
          }
          if (curr === 0) {
            if (!hasPrevious.value) {
              headRef.value.classList.remove("backdrop-blur", "border", "border-gray-300", "mx-4", "rounded-full", "sm:mx-0", "sm:border-0", "sm:rounded-none");
              titleRef.value.classList.remove("text-xl");
              paddingRef.value.classList.add("py-5");
              paddingRef.value.classList.remove("py-2");
            }
          }
          prev = curr;
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["transition duration-1000", darkMode.value ? "nightwind dark" : "nightwind"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.title + " - " + ((_a = _ctx.$page.props.appSetting) == null ? void 0 : _a.name)
      }, null, _parent));
      _push(`<div class="sticky top-0 z-50">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="sticky top-0 z-50">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div><div class="min-h-screen bg-white bg-glass bg-fixed object-cover"><div class="" class="${ssrRenderClass([hasPrevious.value ? "" : "sticky sm:relative top-3 right-0 left-0 z-40", ""])}">`);
      _push(ssrRenderComponent(unref(Popover), {
        as: "header",
        class: ""
      }, {
        default: withCtx(({ open }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8"${_scopeId}><div class="relative flex flex-wrap items-center justify-start lg:justify-between"${_scopeId}><div class="py-5 flex-shrink-0 flex items-center"${_scopeId}>`);
            if (hasPrevious.value) {
              ssrRenderSlot(_ctx.$slots, "previous", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<div class="sm:flex sm:space-x-5"${_scopeId}><div class="sm:mt-0 sm:pt-1 text-left"${_scopeId}><p class="text-4xl sm:text-2xl font-bold text-gray-900 capitalize"${_scopeId}>`);
              if (props.greeting) {
                _push2(`<!--[--><span class="font-medium text-gray-600"${_scopeId}>Halo,</span> ${ssrInterpolate(unref(split)[0])}. <!--]-->`);
              } else {
                _push2(`<!--[-->${ssrInterpolate(props.name)}${ssrInterpolate(props.name ? "." : "")}<!--]-->`);
              }
              _push2(`</p><p class="text-sm font-medium text-gray-600"${_scopeId}>${ssrInterpolate(props.desc)}</p></div></div>`);
            }
            _push2(`</div><div class="hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              darkMode: darkMode.value,
              onClick: ($event) => darkMode.value = !darkMode.value
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Menu), {
              as: "div",
              class: "ml-4 relative flex-shrink-0"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    align: "right",
                    width: "48"
                  }, {
                    trigger: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        if (_ctx.$page.props.jetstream.managesProfilePhotos) {
                          _push4(`<button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"${_scopeId3}><img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId3}></button>`);
                        } else {
                          _push4(`<span class="inline-flex rounded-3xl"${_scopeId3}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"${_scopeId3}>${ssrInterpolate(_ctx.$page.props.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"${_scopeId3}><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"${_scopeId3}></path></svg></button></span>`);
                        }
                      } else {
                        return [
                          _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("button", {
                            key: 0,
                            class: "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                          }, [
                            createVNode("img", {
                              class: "h-10 w-10 rounded-full object-cover",
                              src: _ctx.$page.props.user.profile_photo_url,
                              alt: _ctx.$page.props.user.name
                            }, null, 8, ["src", "alt"])
                          ])) : (openBlock(), createBlock("span", {
                            key: 1,
                            class: "inline-flex rounded-3xl"
                          }, [
                            createVNode("button", {
                              type: "button",
                              class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
                            }, [
                              createTextVNode(toDisplayString(_ctx.$page.props.user.name) + " ", 1),
                              (openBlock(), createBlock("svg", {
                                class: "ml-2 -mr-0.5 h-4 w-4",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 20 20",
                                fill: "currentColor"
                              }, [
                                createVNode("path", {
                                  "fill-rule": "evenodd",
                                  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                  "clip-rule": "evenodd"
                                })
                              ]))
                            ])
                          ]))
                        ];
                      }
                    }),
                    content: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          href: _ctx.route("profile.show")
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Profil `);
                            } else {
                              return [
                                createTextVNode(" Profil ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`<div class="border-t border-gray-100"${_scopeId3}></div><form${_scopeId3}>`);
                        _push4(ssrRenderComponent(_sfc_main$5, { as: "button" }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Keluar `);
                            } else {
                              return [
                                createTextVNode(" Keluar ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(`</form>`);
                      } else {
                        return [
                          createVNode(_sfc_main$5, {
                            href: _ctx.route("profile.show")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Profil ")
                            ]),
                            _: 1
                          }, 8, ["href"]),
                          createVNode("div", { class: "border-t border-gray-100" }),
                          createVNode("form", {
                            onSubmit: withModifiers(logout, ["prevent"])
                          }, [
                            createVNode(_sfc_main$5, { as: "button" }, {
                              default: withCtx(() => [
                                createTextVNode(" Keluar ")
                              ]),
                              _: 1
                            })
                          ], 32)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
                      align: "right",
                      width: "48"
                    }, {
                      trigger: withCtx(() => [
                        _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("button", {
                          key: 0,
                          class: "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                        }, [
                          createVNode("img", {
                            class: "h-10 w-10 rounded-full object-cover",
                            src: _ctx.$page.props.user.profile_photo_url,
                            alt: _ctx.$page.props.user.name
                          }, null, 8, ["src", "alt"])
                        ])) : (openBlock(), createBlock("span", {
                          key: 1,
                          class: "inline-flex rounded-3xl"
                        }, [
                          createVNode("button", {
                            type: "button",
                            class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
                          }, [
                            createTextVNode(toDisplayString(_ctx.$page.props.user.name) + " ", 1),
                            (openBlock(), createBlock("svg", {
                              class: "ml-2 -mr-0.5 h-4 w-4",
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 20 20",
                              fill: "currentColor"
                            }, [
                              createVNode("path", {
                                "fill-rule": "evenodd",
                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                "clip-rule": "evenodd"
                              })
                            ]))
                          ])
                        ]))
                      ]),
                      content: withCtx(() => [
                        createVNode(_sfc_main$5, {
                          href: _ctx.route("profile.show")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Profil ")
                          ]),
                          _: 1
                        }, 8, ["href"]),
                        createVNode("div", { class: "border-t border-gray-100" }),
                        createVNode("form", {
                          onSubmit: withModifiers(logout, ["prevent"])
                        }, [
                          createVNode(_sfc_main$5, { as: "button" }, {
                            default: withCtx(() => [
                              createTextVNode(" Keluar ")
                            ]),
                            _: 1
                          })
                        ], 32)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div class="hidden lg:flex w-full py-10 lg:py-5 lg:border-t lg:border-gray-300"${_scopeId}><div class="lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center"${_scopeId}><div class="hidden lg:block lg:col-span-2"${_scopeId}><nav class="flex space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              href: _ctx.route("dashboard"),
              active: _ctx.$page.component.startsWith("Dashboard"),
              icon: "fa-house",
              replace: ""
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Beranda `);
                } else {
                  return [
                    createTextVNode(" Beranda ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              href: _ctx.route("history.index"),
              active: _ctx.$page.component.startsWith("History"),
              icon: "fa-files"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Riwayat `);
                } else {
                  return [
                    createTextVNode(" Riwayat ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              href: _ctx.route("information.index"),
              active: _ctx.$page.component.startsWith("Information"),
              icon: "fa-circle-info"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Informasi `);
                } else {
                  return [
                    createTextVNode(" Informasi ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              href: _ctx.route("profile.index"),
              active: _ctx.$page.component.startsWith("Profile"),
              icon: "fa-user"
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Saya `);
                } else {
                  return [
                    createTextVNode(" Saya ")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</nav></div><div class="px-12 lg:px-0"${_scopeId}><div class="flex justify-end"${_scopeId}></div></div></div></div><div class="absolute right-0 flex-shrink-0 lg:hidden"${_scopeId}></div></div></div>`);
            _push2(ssrRenderComponent(unref(TransitionRoot), {
              as: "template",
              show: open
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="lg:hidden"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-150 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-150 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(PopoverOverlay), { class: "z-20 fixed inset-0 bg-black bg-opacity-50" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(PopoverOverlay), { class: "z-20 fixed inset-0 bg-black bg-opacity-50" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    as: "template",
                    enter: "duration-150 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-150 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(PopoverPanel), {
                          focus: "",
                          class: "z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200"${_scopeId4}><div class="pt-3 pb-2"${_scopeId4}><div class="flex items-center justify-between px-4"${_scopeId4}><div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_sfc_main$3, {
                                darkMode: darkMode.value,
                                onClick: ($event) => darkMode.value = !darkMode.value
                              }, null, _parent5, _scopeId4));
                              _push5(`</div><div class="-mr-2"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(PopoverButton), { class: "bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<button class="inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"${_scopeId5}><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"${_scopeId5}><path class="${ssrRenderClass({ "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"${_scopeId5}></path><path class="${ssrRenderClass({ "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId5}></path></svg></button>`);
                                  } else {
                                    return [
                                      createVNode("button", {
                                        class: "inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",
                                        onClick: ($event) => showingNavigationDropdown.value = !showingNavigationDropdown.value
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          class: "h-6 w-6",
                                          stroke: "currentColor",
                                          fill: "none",
                                          viewBox: "0 0 24 24"
                                        }, [
                                          createVNode("path", {
                                            class: { "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value },
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M4 6h16M4 12h16M4 18h16"
                                          }, null, 2),
                                          createVNode("path", {
                                            class: { "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value },
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                          }, null, 2)
                                        ]))
                                      ], 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</div></div><div class="mt-3 px-2 space-y-1"${_scopeId4}></div></div><div class="pt-4 pb-2"${_scopeId4}><div class="flex items-center px-5"${_scopeId4}><div class="flex-shrink-0"${_scopeId4}><img class="h-12 w-12 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId4}></div><div class="ml-3 min-w-0 flex-1"${_scopeId4}><div class="text-base font-medium text-gray-800 truncate capitalize"${_scopeId4}>${ssrInterpolate(_ctx.$page.props.user.name)}</div><div class="text-sm font-medium text-gray-500 truncate"${_scopeId4}>${ssrInterpolate(_ctx.$page.props.user.email)}</div></div></div><div class="mt-3 px-2 space-y-1"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_sfc_main$7, {
                                href: _ctx.route("profile.show"),
                                active: _ctx.route().current("profile.show")
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Profil `);
                                  } else {
                                    return [
                                      createTextVNode(" Profil ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`<form method="POST"${_scopeId4}>`);
                              _push5(ssrRenderComponent(_sfc_main$7, { as: "button" }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Keluar `);
                                  } else {
                                    return [
                                      createTextVNode(" Keluar ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(`</form></div></div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200" }, [
                                  createVNode("div", { class: "pt-3 pb-2" }, [
                                    createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                      createVNode("div", null, [
                                        createVNode(_sfc_main$3, {
                                          darkMode: darkMode.value,
                                          onClick: ($event) => darkMode.value = !darkMode.value
                                        }, null, 8, ["darkMode", "onClick"])
                                      ]),
                                      createVNode("div", { class: "-mr-2" }, [
                                        createVNode(unref(PopoverButton), { class: "bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500" }, {
                                          default: withCtx(() => [
                                            createVNode("button", {
                                              class: "inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",
                                              onClick: ($event) => showingNavigationDropdown.value = !showingNavigationDropdown.value
                                            }, [
                                              (openBlock(), createBlock("svg", {
                                                class: "h-6 w-6",
                                                stroke: "currentColor",
                                                fill: "none",
                                                viewBox: "0 0 24 24"
                                              }, [
                                                createVNode("path", {
                                                  class: { "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value },
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                  d: "M4 6h16M4 12h16M4 18h16"
                                                }, null, 2),
                                                createVNode("path", {
                                                  class: { "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value },
                                                  "stroke-linecap": "round",
                                                  "stroke-linejoin": "round",
                                                  "stroke-width": "2",
                                                  d: "M6 18L18 6M6 6l12 12"
                                                }, null, 2)
                                              ]))
                                            ], 8, ["onClick"])
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 px-2 space-y-1" })
                                  ]),
                                  createVNode("div", { class: "pt-4 pb-2" }, [
                                    createVNode("div", { class: "flex items-center px-5" }, [
                                      createVNode("div", { class: "flex-shrink-0" }, [
                                        createVNode("img", {
                                          class: "h-12 w-12 rounded-full object-cover",
                                          src: _ctx.$page.props.user.profile_photo_url,
                                          alt: _ctx.$page.props.user.name
                                        }, null, 8, ["src", "alt"])
                                      ]),
                                      createVNode("div", { class: "ml-3 min-w-0 flex-1" }, [
                                        createVNode("div", { class: "text-base font-medium text-gray-800 truncate capitalize" }, toDisplayString(_ctx.$page.props.user.name), 1),
                                        createVNode("div", { class: "text-sm font-medium text-gray-500 truncate" }, toDisplayString(_ctx.$page.props.user.email), 1)
                                      ])
                                    ]),
                                    createVNode("div", { class: "mt-3 px-2 space-y-1" }, [
                                      createVNode(_sfc_main$7, {
                                        href: _ctx.route("profile.show"),
                                        active: _ctx.route().current("profile.show")
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Profil ")
                                        ]),
                                        _: 1
                                      }, 8, ["href", "active"]),
                                      createVNode("form", {
                                        method: "POST",
                                        onSubmit: withModifiers(logout, ["prevent"])
                                      }, [
                                        createVNode(_sfc_main$7, { as: "button" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Keluar ")
                                          ]),
                                          _: 1
                                        })
                                      ], 32)
                                    ])
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(PopoverPanel), {
                            focus: "",
                            class: "z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200" }, [
                                createVNode("div", { class: "pt-3 pb-2" }, [
                                  createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                    createVNode("div", null, [
                                      createVNode(_sfc_main$3, {
                                        darkMode: darkMode.value,
                                        onClick: ($event) => darkMode.value = !darkMode.value
                                      }, null, 8, ["darkMode", "onClick"])
                                    ]),
                                    createVNode("div", { class: "-mr-2" }, [
                                      createVNode(unref(PopoverButton), { class: "bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500" }, {
                                        default: withCtx(() => [
                                          createVNode("button", {
                                            class: "inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",
                                            onClick: ($event) => showingNavigationDropdown.value = !showingNavigationDropdown.value
                                          }, [
                                            (openBlock(), createBlock("svg", {
                                              class: "h-6 w-6",
                                              stroke: "currentColor",
                                              fill: "none",
                                              viewBox: "0 0 24 24"
                                            }, [
                                              createVNode("path", {
                                                class: { "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value },
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M4 6h16M4 12h16M4 18h16"
                                              }, null, 2),
                                              createVNode("path", {
                                                class: { "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value },
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M6 18L18 6M6 6l12 12"
                                              }, null, 2)
                                            ]))
                                          ], 8, ["onClick"])
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 px-2 space-y-1" })
                                ]),
                                createVNode("div", { class: "pt-4 pb-2" }, [
                                  createVNode("div", { class: "flex items-center px-5" }, [
                                    createVNode("div", { class: "flex-shrink-0" }, [
                                      createVNode("img", {
                                        class: "h-12 w-12 rounded-full object-cover",
                                        src: _ctx.$page.props.user.profile_photo_url,
                                        alt: _ctx.$page.props.user.name
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    createVNode("div", { class: "ml-3 min-w-0 flex-1" }, [
                                      createVNode("div", { class: "text-base font-medium text-gray-800 truncate capitalize" }, toDisplayString(_ctx.$page.props.user.name), 1),
                                      createVNode("div", { class: "text-sm font-medium text-gray-500 truncate" }, toDisplayString(_ctx.$page.props.user.email), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 px-2 space-y-1" }, [
                                    createVNode(_sfc_main$7, {
                                      href: _ctx.route("profile.show"),
                                      active: _ctx.route().current("profile.show")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Profil ")
                                      ]),
                                      _: 1
                                    }, 8, ["href", "active"]),
                                    createVNode("form", {
                                      method: "POST",
                                      onSubmit: withModifiers(logout, ["prevent"])
                                    }, [
                                      createVNode(_sfc_main$7, { as: "button" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Keluar ")
                                        ]),
                                        _: 1
                                      })
                                    ], 32)
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "lg:hidden" }, [
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "duration-150 ease-out",
                        "enter-from": "opacity-0",
                        "enter-to": "opacity-100",
                        leave: "duration-150 ease-in",
                        "leave-from": "opacity-100",
                        "leave-to": "opacity-0"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(PopoverOverlay), { class: "z-20 fixed inset-0 bg-black bg-opacity-50" })
                        ]),
                        _: 1
                      }),
                      createVNode(unref(TransitionChild), {
                        as: "template",
                        enter: "duration-150 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-150 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(PopoverPanel), {
                            focus: "",
                            class: "z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200" }, [
                                createVNode("div", { class: "pt-3 pb-2" }, [
                                  createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                    createVNode("div", null, [
                                      createVNode(_sfc_main$3, {
                                        darkMode: darkMode.value,
                                        onClick: ($event) => darkMode.value = !darkMode.value
                                      }, null, 8, ["darkMode", "onClick"])
                                    ]),
                                    createVNode("div", { class: "-mr-2" }, [
                                      createVNode(unref(PopoverButton), { class: "bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500" }, {
                                        default: withCtx(() => [
                                          createVNode("button", {
                                            class: "inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",
                                            onClick: ($event) => showingNavigationDropdown.value = !showingNavigationDropdown.value
                                          }, [
                                            (openBlock(), createBlock("svg", {
                                              class: "h-6 w-6",
                                              stroke: "currentColor",
                                              fill: "none",
                                              viewBox: "0 0 24 24"
                                            }, [
                                              createVNode("path", {
                                                class: { "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value },
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M4 6h16M4 12h16M4 18h16"
                                              }, null, 2),
                                              createVNode("path", {
                                                class: { "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value },
                                                "stroke-linecap": "round",
                                                "stroke-linejoin": "round",
                                                "stroke-width": "2",
                                                d: "M6 18L18 6M6 6l12 12"
                                              }, null, 2)
                                            ]))
                                          ], 8, ["onClick"])
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 px-2 space-y-1" })
                                ]),
                                createVNode("div", { class: "pt-4 pb-2" }, [
                                  createVNode("div", { class: "flex items-center px-5" }, [
                                    createVNode("div", { class: "flex-shrink-0" }, [
                                      createVNode("img", {
                                        class: "h-12 w-12 rounded-full object-cover",
                                        src: _ctx.$page.props.user.profile_photo_url,
                                        alt: _ctx.$page.props.user.name
                                      }, null, 8, ["src", "alt"])
                                    ]),
                                    createVNode("div", { class: "ml-3 min-w-0 flex-1" }, [
                                      createVNode("div", { class: "text-base font-medium text-gray-800 truncate capitalize" }, toDisplayString(_ctx.$page.props.user.name), 1),
                                      createVNode("div", { class: "text-sm font-medium text-gray-500 truncate" }, toDisplayString(_ctx.$page.props.user.email), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "mt-3 px-2 space-y-1" }, [
                                    createVNode(_sfc_main$7, {
                                      href: _ctx.route("profile.show"),
                                      active: _ctx.route().current("profile.show")
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Profil ")
                                      ]),
                                      _: 1
                                    }, 8, ["href", "active"]),
                                    createVNode("form", {
                                      method: "POST",
                                      onSubmit: withModifiers(logout, ["prevent"])
                                    }, [
                                      createVNode(_sfc_main$7, { as: "button" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Keluar ")
                                        ]),
                                        _: 1
                                      })
                                    ], 32)
                                  ])
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8" }, [
                createVNode("div", { class: "relative flex flex-wrap items-center justify-start lg:justify-between" }, [
                  createVNode("div", {
                    class: "py-5 flex-shrink-0 flex items-center",
                    ref_key: "paddingRef",
                    ref: paddingRef
                  }, [
                    hasPrevious.value ? renderSlot(_ctx.$slots, "previous", { key: 0 }) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "sm:flex sm:space-x-5"
                    }, [
                      createVNode("div", { class: "sm:mt-0 sm:pt-1 text-left" }, [
                        createVNode("p", {
                          class: "text-4xl sm:text-2xl font-bold text-gray-900 capitalize",
                          ref_key: "titleRef",
                          ref: titleRef
                        }, [
                          props.greeting ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("span", { class: "font-medium text-gray-600" }, "Halo,"),
                            createTextVNode(" " + toDisplayString(unref(split)[0]) + ". ", 1)
                          ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createTextVNode(toDisplayString(props.name) + toDisplayString(props.name ? "." : ""), 1)
                          ], 64))
                        ], 512),
                        createVNode("p", { class: "text-sm font-medium text-gray-600" }, toDisplayString(props.desc), 1)
                      ])
                    ]))
                  ], 512),
                  createVNode("div", { class: "hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5" }, [
                    createVNode(_sfc_main$3, {
                      darkMode: darkMode.value,
                      onClick: ($event) => darkMode.value = !darkMode.value
                    }, null, 8, ["darkMode", "onClick"]),
                    createVNode(unref(Menu), {
                      as: "div",
                      class: "ml-4 relative flex-shrink-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4, {
                          align: "right",
                          width: "48"
                        }, {
                          trigger: withCtx(() => [
                            _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("button", {
                              key: 0,
                              class: "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                            }, [
                              createVNode("img", {
                                class: "h-10 w-10 rounded-full object-cover",
                                src: _ctx.$page.props.user.profile_photo_url,
                                alt: _ctx.$page.props.user.name
                              }, null, 8, ["src", "alt"])
                            ])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "inline-flex rounded-3xl"
                            }, [
                              createVNode("button", {
                                type: "button",
                                class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-3xl text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition"
                              }, [
                                createTextVNode(toDisplayString(_ctx.$page.props.user.name) + " ", 1),
                                (openBlock(), createBlock("svg", {
                                  class: "ml-2 -mr-0.5 h-4 w-4",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 20 20",
                                  fill: "currentColor"
                                }, [
                                  createVNode("path", {
                                    "fill-rule": "evenodd",
                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                    "clip-rule": "evenodd"
                                  })
                                ]))
                              ])
                            ]))
                          ]),
                          content: withCtx(() => [
                            createVNode(_sfc_main$5, {
                              href: _ctx.route("profile.show")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Profil ")
                              ]),
                              _: 1
                            }, 8, ["href"]),
                            createVNode("div", { class: "border-t border-gray-100" }),
                            createVNode("form", {
                              onSubmit: withModifiers(logout, ["prevent"])
                            }, [
                              createVNode(_sfc_main$5, { as: "button" }, {
                                default: withCtx(() => [
                                  createTextVNode(" Keluar ")
                                ]),
                                _: 1
                              })
                            ], 32)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "hidden lg:flex w-full py-10 lg:py-5 lg:border-t lg:border-gray-300" }, [
                    createVNode("div", { class: "lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center" }, [
                      createVNode("div", { class: "hidden lg:block lg:col-span-2" }, [
                        createVNode("nav", { class: "flex space-x-4" }, [
                          createVNode(_sfc_main$6, {
                            href: _ctx.route("dashboard"),
                            active: _ctx.$page.component.startsWith("Dashboard"),
                            icon: "fa-house",
                            replace: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Beranda ")
                            ]),
                            _: 1
                          }, 8, ["href", "active"]),
                          createVNode(_sfc_main$6, {
                            href: _ctx.route("history.index"),
                            active: _ctx.$page.component.startsWith("History"),
                            icon: "fa-files"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Riwayat ")
                            ]),
                            _: 1
                          }, 8, ["href", "active"]),
                          createVNode(_sfc_main$6, {
                            href: _ctx.route("information.index"),
                            active: _ctx.$page.component.startsWith("Information"),
                            icon: "fa-circle-info"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Informasi ")
                            ]),
                            _: 1
                          }, 8, ["href", "active"]),
                          createVNode(_sfc_main$6, {
                            href: _ctx.route("profile.index"),
                            active: _ctx.$page.component.startsWith("Profile"),
                            icon: "fa-user"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Saya ")
                            ]),
                            _: 1
                          }, 8, ["href", "active"])
                        ])
                      ]),
                      createVNode("div", { class: "px-12 lg:px-0" }, [
                        createVNode("div", { class: "flex justify-end" })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "absolute right-0 flex-shrink-0 lg:hidden" })
                ])
              ]),
              createVNode(unref(TransitionRoot), {
                as: "template",
                show: open
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "lg:hidden" }, [
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-150 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-150 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(PopoverOverlay), { class: "z-20 fixed inset-0 bg-black bg-opacity-50" })
                      ]),
                      _: 1
                    }),
                    createVNode(unref(TransitionChild), {
                      as: "template",
                      enter: "duration-150 ease-out",
                      "enter-from": "opacity-0 scale-95",
                      "enter-to": "opacity-100 scale-100",
                      leave: "duration-150 ease-in",
                      "leave-from": "opacity-100 scale-100",
                      "leave-to": "opacity-0 scale-95"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(PopoverPanel), {
                          focus: "",
                          class: "z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur shadow-lg ring-1 ring-black ring-opacity-5 divide-y divide-gray-200" }, [
                              createVNode("div", { class: "pt-3 pb-2" }, [
                                createVNode("div", { class: "flex items-center justify-between px-4" }, [
                                  createVNode("div", null, [
                                    createVNode(_sfc_main$3, {
                                      darkMode: darkMode.value,
                                      onClick: ($event) => darkMode.value = !darkMode.value
                                    }, null, 8, ["darkMode", "onClick"])
                                  ]),
                                  createVNode("div", { class: "-mr-2" }, [
                                    createVNode(unref(PopoverButton), { class: "bg-white rounded-3xl inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500" }, {
                                      default: withCtx(() => [
                                        createVNode("button", {
                                          class: "inline-flex items-center justify-center p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition",
                                          onClick: ($event) => showingNavigationDropdown.value = !showingNavigationDropdown.value
                                        }, [
                                          (openBlock(), createBlock("svg", {
                                            class: "h-6 w-6",
                                            stroke: "currentColor",
                                            fill: "none",
                                            viewBox: "0 0 24 24"
                                          }, [
                                            createVNode("path", {
                                              class: { "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value },
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M4 6h16M4 12h16M4 18h16"
                                            }, null, 2),
                                            createVNode("path", {
                                              class: { "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value },
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M6 18L18 6M6 6l12 12"
                                            }, null, 2)
                                          ]))
                                        ], 8, ["onClick"])
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                createVNode("div", { class: "mt-3 px-2 space-y-1" })
                              ]),
                              createVNode("div", { class: "pt-4 pb-2" }, [
                                createVNode("div", { class: "flex items-center px-5" }, [
                                  createVNode("div", { class: "flex-shrink-0" }, [
                                    createVNode("img", {
                                      class: "h-12 w-12 rounded-full object-cover",
                                      src: _ctx.$page.props.user.profile_photo_url,
                                      alt: _ctx.$page.props.user.name
                                    }, null, 8, ["src", "alt"])
                                  ]),
                                  createVNode("div", { class: "ml-3 min-w-0 flex-1" }, [
                                    createVNode("div", { class: "text-base font-medium text-gray-800 truncate capitalize" }, toDisplayString(_ctx.$page.props.user.name), 1),
                                    createVNode("div", { class: "text-sm font-medium text-gray-500 truncate" }, toDisplayString(_ctx.$page.props.user.email), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "mt-3 px-2 space-y-1" }, [
                                  createVNode(_sfc_main$7, {
                                    href: _ctx.route("profile.show"),
                                    active: _ctx.route().current("profile.show")
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Profil ")
                                    ]),
                                    _: 1
                                  }, 8, ["href", "active"]),
                                  createVNode("form", {
                                    method: "POST",
                                    onSubmit: withModifiers(logout, ["prevent"])
                                  }, [
                                    createVNode(_sfc_main$7, { as: "button" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Keluar ")
                                      ]),
                                      _: 1
                                    })
                                  ], 32)
                                ])
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 2
              }, 1032, ["show"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><main class="mt-5"><div class="max-w-3xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class=""><div class="max-w-7xl mx-auto space-y-5 relative">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div></main><footer><div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl"><div class="py-10 block lg:hidden"></div><div class="border-t border-gray-300 py-5 text-sm text-gray-500 text-center sm:text-left hidden lg:block"><span class="block sm:inline capitalize">© 2023 ${ssrInterpolate((_b = _ctx.$page.props.appSetting) == null ? void 0 : _b.name)}. </span><span class="block sm:inline">All rights reserved.</span></div></div></footer></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
