import { computed, unref, mergeProps, withCtx, renderSlot, useSSRContext, ref, watch, onMounted, createTextVNode, createVNode, openBlock, createBlock, withModifiers } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { Link, Head, router } from "@inertiajs/vue3";
import "nightwind/helper.js";
import { _ as _sfc_main$2, A as ApplicationMark, a as _sfc_main$4, b as _sfc_main$5, c as _sfc_main$6, d as _sfc_main$7 } from "./OnlineStatus-589db755.mjs";
import { _ as _sfc_main$3 } from "./Banner-24bf2dbf.mjs";
import "./PrimaryButton-3722f774.mjs";
const _sfc_main$1 = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    active: Boolean
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-primary-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-primary-700 transition" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-700 hover:text-gray-900 hover:border-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-700 transition";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "LandingLayout",
  __ssrInlineRender: true,
  props: {
    title: String,
    darkMode: Boolean,
    header: String,
    desc: String,
    img: String,
    page: Object
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
    const logout = () => {
      router.post(route("logout"));
    };
    const headRef = ref(null);
    onMounted(() => {
      var prev = window.pageYOffset;
      window.addEventListener("scroll", () => {
        if (headRef.value != null) {
          var curr = window.pageYOffset;
          if (prev > curr) {
            headRef.value.classList.add("scrolled");
            headRef.value.classList.remove("scrollDown");
          } else {
            headRef.value.classList.add("bg-white", "bg-opacity-50", "backdrop-blur", "border", "border-gray-300", "rounded-full");
            headRef.value.classList.remove("scrolled");
          }
          if (curr === 0) {
            headRef.value.classList.remove("bg-white", "bg-opacity-50", "backdrop-blur", "border", "border-gray-300", "rounded-full");
            headRef.value.classList.remove("scrolled");
          }
          prev = curr;
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["transition duration-1000 nightwind", darkMode.value ? "dark" : ""]
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.title + " - " + ((_a = _ctx.$page.props.appSetting) == null ? void 0 : _a.name)
      }, null, _parent));
      _push(`<div class="sticky top-0 z-50">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div><div class="sticky top-0 z-50">`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div><div class="min-h-screen bg-white relative isolate"><div class="fixed inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-75 sm:left-[calc(50%-30rem)]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"></div></div><div class="fixed inset-x-0 -bottom-32 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-75 sm:left-[calc(50%+36rem)]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"></div></div><nav class="px-3 mb-3 pt-3 w-full z-50 fixed top-0"><div class="px-3 max-w-screen-xl mx-auto"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(ssrRenderComponent(ApplicationMark, { class: "block h-10 w-auto" }, null, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 lg:flex">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        href: _ctx.route("landing.welcome"),
        active: _ctx.route().current("landing.welcome")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Beranda `);
          } else {
            return [
              createTextVNode(" Beranda ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden lg:flex sm:items-center sm:ml-6">`);
      if (_ctx.$page.props.user == null) {
        _push(`<div class="ml-3 relative">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          href: _ctx.route("login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Login `);
            } else {
              return [
                createTextVNode(" Login ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="ml-3 relative">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        darkMode: darkMode.value,
        onClick: ($event) => darkMode.value = !darkMode.value
      }, null, _parent));
      _push(`</div>`);
      if (_ctx.$page.props.user) {
        _push(`<div class="ml-3 relative">`);
        _push(ssrRenderComponent(_sfc_main$5, {
          align: "right",
          width: "48"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button class="flex text-sm border-transparent rounded-full focus:outline-none focus:ring focus:ring-primary-300 transition"${_scopeId}>`);
              if (_ctx.$page.props.user) {
                _push2(`<img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}${_scopeId}>`);
              } else {
                _push2(`<span class="block h-10 w-10 bg-primary-100 flex items-center justify-center rounded-full"${_scopeId}><i class="fa-duotone fa-user text-2xl text-primary-400"${_scopeId}></i></span>`);
              }
              _push2(`</button>`);
            } else {
              return [
                createVNode("button", { class: "flex text-sm border-transparent rounded-full focus:outline-none focus:ring focus:ring-primary-300 transition" }, [
                  _ctx.$page.props.user ? (openBlock(), createBlock("img", {
                    key: 0,
                    class: "h-10 w-10 rounded-full object-cover",
                    src: _ctx.$page.props.user.profile_photo_url,
                    alt: _ctx.$page.props.user.name
                  }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("span", {
                    key: 1,
                    class: "block h-10 w-10 bg-primary-100 flex items-center justify-center rounded-full"
                  }, [
                    createVNode("i", { class: "fa-duotone fa-user text-2xl text-primary-400" })
                  ]))
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$6, {
                href: _ctx.route("dashboard")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Dasbor `);
                  } else {
                    return [
                      createTextVNode(" Dasbor ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Profil `);
                  } else {
                    return [
                      createTextVNode(" Profil ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<div class="border-t border-gray-100"${_scopeId}></div><form${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, { as: "button" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Keluar `);
                  } else {
                    return [
                      createTextVNode(" Keluar ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</form>`);
            } else {
              return [
                createVNode(_sfc_main$6, {
                  href: _ctx.route("dashboard")
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Dasbor ")
                  ]),
                  _: 1
                }, 8, ["href"]),
                createVNode(_sfc_main$6, {
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
                  createVNode(_sfc_main$6, { as: "button" }, {
                    default: withCtx(() => [
                      createTextVNode(" Keluar ")
                    ]),
                    _: 1
                  })
                ], 32)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="-mr-2 flex items-center lg:hidden">`);
      _push(ssrRenderComponent(_sfc_main$4, {
        darkMode: darkMode.value,
        onClick: ($event) => darkMode.value = !darkMode.value
      }, null, _parent));
      _push(`<button class="inline-flex items-center justify-center ml-2 p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ "block": showingNavigationDropdown.value, "hidden": !showingNavigationDropdown.value }, "lg:hidden mt-2 bg-white bg-opacity-50 backdrop-blur rounded-3xl border border-gray-300"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$7, {
        href: _ctx.route("landing.welcome"),
        active: _ctx.route().current("landing.welcome")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Beranda `);
          } else {
            return [
              createTextVNode(" Beranda ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200">`);
      if (_ctx.$page.props.user) {
        _push(`<div class="flex items-center px-4 mb-3"><div class="shrink-0 mr-3"><img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.user.name)}></div><div><div class="font-medium text-base text-gray-800">${ssrInterpolate(_ctx.$page.props.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.user.email)}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="space-y-1">`);
      if (_ctx.$page.props.user) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$7, {
          href: _ctx.route("dashboard"),
          active: _ctx.route().current("dashboard")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Dasbor `);
            } else {
              return [
                createTextVNode(" Dasbor ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$7, {
          href: _ctx.route("profile.show"),
          active: _ctx.route().current("profile.show")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Profil `);
            } else {
              return [
                createTextVNode(" Profil ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<form method="POST">`);
        _push(ssrRenderComponent(_sfc_main$7, { as: "button" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Keluar `);
            } else {
              return [
                createTextVNode(" Keluar ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</form><!--]-->`);
      } else {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_sfc_main$7, {
          href: _ctx.route("login")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Masuk `);
            } else {
              return [
                createTextVNode(" Masuk ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$7, {
          href: _ctx.route("register")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Daftar `);
            } else {
              return [
                createTextVNode(" Daftar ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      }
      _push(`</div></div></div></nav><main class="">`);
      if (props.header) {
        _push(`<div class="relative"><img class="object-cover w-full h-screen"${ssrRenderAttr("src", props.img)}><div class="absolute w-full bottom-0 top-0 flex justify-center items-center bg-gradient-to-tr to-transparent from-gray-800 dark:from-gray-800"><div class="text-left justify-start max-w-screen-xl w-full px-10 2xl:px-0"><h1 class="max-w-2xl text-white text-4xl lg:text-6xl font-bold capitalize nightwind-prevent">${ssrInterpolate(props.header)}</h1><p class="max-w-xl text-gray-100 text-base mt-1 nightwind-prevent">${ssrInterpolate(props.desc)}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><div class="sticky inset-x-0 bottom-0 nightwind-prevent-block"><div class="bg-primary-600 bg-opacity-50 backdrop-blur"><div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center"><span class="flex p-2 rounded-lg bg-primary-800"><i class="fa-regular fa-bullhorn text-white"></i></span><p class="ml-3 font-medium text-white truncate"><span class="md:hidden">Website dalam tahap pengembangan! </span><span class="hidden md:inline">Website ini masih dalam tahap pengembangan. </span></p></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/LandingLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
