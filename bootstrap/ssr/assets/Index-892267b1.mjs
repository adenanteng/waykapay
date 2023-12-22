import { onMounted, ref, watch, mergeProps, withCtx, unref, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-b84f86f2.mjs";
import { router, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./MobileMenu-5acf9387.mjs";
import "./OnlineStatus-589db755.mjs";
import { _ as _sfc_main$2 } from "./DangerButton-ced309d9.mjs";
import "moment/moment.js";
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
    history: Object,
    // flip_saldo: undefined,
    digiflazz_saldo: void 0
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      router.reload({ only: ["digiflazz_saldo"] });
    });
    const darkMode = ref(false);
    if (typeof window !== "undefined") {
      darkMode.value = JSON.parse(localStorage.getItem("darkmode")) ?? false;
      watch(darkMode, (newDarkMode) => {
        console.log(`darkmode is ${newDarkMode}`);
        localStorage.setItem("darkmode", JSON.stringify(newDarkMode));
      });
    }
    const logout = () => {
      router.post(route("logout"));
    };
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Saya",
        name: _ctx.$page.props.user.name,
        desc: _ctx.$page.props.user.email,
        avatar: _ctx.$page.props.user.profile_photo_url
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"${_scopeId}><div class="md:hidden relative"${_scopeId}><img${ssrRenderAttr("src", _ctx.$page.props.user.profile_photo_url)} class="w-full object-cover rounded-t-3xl aspect-video"${_scopeId}><div class="absolute inset-0 bg-gradient-to-tl from-gray-50 dark:from-gray-900 via-transparent via-35% flex justify-end items-end rounded-t-3xl"${_scopeId}><div class="pb-2 pr-5 text-right"${_scopeId}><h3 class="font-semibold text-gray-900"${_scopeId}>${ssrInterpolate(_ctx.$page.props.user.phone)}</h3><p class="text-xs text-gray-700"${_scopeId}>Akun ${ssrInterpolate(_ctx.$page.props.user.role)}</p></div></div></div><div${_scopeId}><div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"${_scopeId}><div class="flex w-0 flex-1"${_scopeId}><div class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4"${_scopeId}><i class="fa-duotone fa-money-bill-wave text-green-400"${_scopeId}></i><div class="ml-3"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>Saldo Rekening</div><div class="text-sm font-medium text-gray-700"${_scopeId}>Rp ${ssrInterpolate(formatPrice(_ctx.$page.props.user.wallet_balance))}</div></div></div></div><div class="-ml-px flex w-0 flex-1"${_scopeId}><div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"${_scopeId}><i class="fa-duotone fa-coins text-amber-400"${_scopeId}></i><div class="ml-3"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>Poin</div><div class="text-sm font-medium text-gray-700"${_scopeId}>${ssrInterpolate(formatPrice(_ctx.$page.props.user.coin))}</div></div></div></div></div></div></div><div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"${_scopeId}><ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600"${_scopeId}><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("profile.show"),
              class: "flex justify-between px-6 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-sm font-medium text-gray-900"${_scopeId2}>Ubah data profil</p><i class="fa-regular fa-angle-right text-gray-900"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Ubah data profil"),
                    createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li>`);
            if (_ctx.$page.props.user.role_id != 3) {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("report.index"),
                class: "flex justify-between px-6 py-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-sm font-medium text-gray-900"${_scopeId2}>Laporan</p><i class="fa-regular fa-angle-right text-gray-900"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Laporan"),
                      createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.user.role_id != 3) {
              _push2(`<li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("pricing.index"),
                class: "flex justify-between px-6 py-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-sm font-medium text-gray-900"${_scopeId2}>Daftar harga</p><i class="fa-regular fa-angle-right text-gray-900"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Daftar harga"),
                      createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<li class="block lg:hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("profile.index"),
              onClick: ($event) => darkMode.value = !darkMode.value,
              class: "flex justify-between px-6 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-sm font-medium text-gray-900"${_scopeId2}>Mode ${ssrInterpolate(darkMode.value ? "gelap" : "terang")}</p><i class="${ssrRenderClass([darkMode.value ? "fa-moon" : "fa-sun-bright", "fa-regular text-gray-900"])}"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Mode " + toDisplayString(darkMode.value ? "gelap" : "terang"), 1),
                    createVNode("i", {
                      class: ["fa-regular text-gray-900", darkMode.value ? "fa-moon" : "fa-sun-bright"]
                    }, null, 2)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("device.index"),
              class: "flex justify-between px-6 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-sm font-medium text-gray-900"${_scopeId2}>Perangkat</p><i class="fa-regular fa-angle-right text-gray-900"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Perangkat"),
                    createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></div>`);
            if (_ctx.$page.props.user.role_id == 1) {
              _push2(`<div class="col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"${_scopeId}><div${_scopeId}><div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"${_scopeId}><div class="-ml-px flex w-0 flex-1"${_scopeId}><div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"${_scopeId}><i class="fa-duotone fa-money-bill-1-wave text-green-400"${_scopeId}></i><div class="ml-3"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>Digiflazz Saldo</div><div class="text-sm font-medium text-gray-700"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.digiflazz_saldo))}</div></div></div></div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.user.role_id == 1) {
              _push2(`<div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"${_scopeId}><ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600"${_scopeId}><li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("setting.index"),
                class: "flex justify-between px-6 py-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-sm font-medium text-gray-900"${_scopeId2}>Pengaturan aplikasi</p><i class="fa-regular fa-angle-right text-gray-900"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Pengaturan aplikasi"),
                      createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("transaction.index"),
                class: "flex justify-between px-6 py-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-sm font-medium text-gray-900"${_scopeId2}>Transaksi</p><i class="fa-regular fa-angle-right text-gray-900"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Transaksi"),
                      createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("carousel.index"),
                class: "flex justify-between px-6 py-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-sm font-medium text-gray-900"${_scopeId2}>Carousel</p><i class="fa-regular fa-angle-right text-gray-900"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Carousel"),
                      createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li><li${_scopeId}>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("user.index"),
                class: "flex justify-between px-6 py-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="text-sm font-medium text-gray-900"${_scopeId2}>Data pengguna</p><i class="fa-regular fa-angle-right text-gray-900"${_scopeId2}></i>`);
                  } else {
                    return [
                      createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Data pengguna"),
                      createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</li></ul></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"${_scopeId}><ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600"${_scopeId}><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("terms.show"),
              class: "block px-6 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-sm font-medium text-gray-900"${_scopeId2}>Ketentuan layanan</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Ketentuan layanan")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("policy.show"),
              class: "block px-6 py-4"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text-sm font-medium text-gray-900"${_scopeId2}>Kebijakan privasi</p>`);
                } else {
                  return [
                    createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Kebijakan privasi")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></div><form method="POST"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              type: "submit",
              class: "w-full"
            }, {
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
            _push2(ssrRenderComponent(_sfc_main$3, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300" }, [
                createVNode("div", { class: "md:hidden relative" }, [
                  createVNode("img", {
                    src: _ctx.$page.props.user.profile_photo_url,
                    class: "w-full object-cover rounded-t-3xl aspect-video"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "absolute inset-0 bg-gradient-to-tl from-gray-50 dark:from-gray-900 via-transparent via-35% flex justify-end items-end rounded-t-3xl" }, [
                    createVNode("div", { class: "pb-2 pr-5 text-right" }, [
                      createVNode("h3", { class: "font-semibold text-gray-900" }, toDisplayString(_ctx.$page.props.user.phone), 1),
                      createVNode("p", { class: "text-xs text-gray-700" }, "Akun " + toDisplayString(_ctx.$page.props.user.role), 1)
                    ])
                  ])
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "-mt-px flex divide-x divide-gray-300 dark:divide-gray-600" }, [
                    createVNode("div", { class: "flex w-0 flex-1" }, [
                      createVNode("div", { class: "relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4" }, [
                        createVNode("i", { class: "fa-duotone fa-money-bill-wave text-green-400" }),
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("div", { class: "text-xs text-gray-500" }, "Saldo Rekening"),
                          createVNode("div", { class: "text-sm font-medium text-gray-700" }, "Rp " + toDisplayString(formatPrice(_ctx.$page.props.user.wallet_balance)), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "-ml-px flex w-0 flex-1" }, [
                      createVNode("div", { class: "relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4" }, [
                        createVNode("i", { class: "fa-duotone fa-coins text-amber-400" }),
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("div", { class: "text-xs text-gray-500" }, "Poin"),
                          createVNode("div", { class: "text-sm font-medium text-gray-700" }, toDisplayString(formatPrice(_ctx.$page.props.user.coin)), 1)
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg" }, [
                createVNode("ul", {
                  role: "list",
                  class: "divide-y divide-gray-300 dark:divide-gray-600"
                }, [
                  createVNode("li", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("profile.show"),
                      class: "flex justify-between px-6 py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Ubah data profil"),
                        createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  _ctx.$page.props.user.role_id != 3 ? (openBlock(), createBlock("li", { key: 0 }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("report.index"),
                      class: "flex justify-between px-6 py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Laporan"),
                        createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])) : createCommentVNode("", true),
                  _ctx.$page.props.user.role_id != 3 ? (openBlock(), createBlock("li", { key: 1 }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("pricing.index"),
                      class: "flex justify-between px-6 py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Daftar harga"),
                        createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])) : createCommentVNode("", true),
                  createVNode("li", { class: "block lg:hidden" }, [
                    createVNode(unref(Link), {
                      href: _ctx.route("profile.index"),
                      onClick: ($event) => darkMode.value = !darkMode.value,
                      class: "flex justify-between px-6 py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Mode " + toDisplayString(darkMode.value ? "gelap" : "terang"), 1),
                        createVNode("i", {
                          class: ["fa-regular text-gray-900", darkMode.value ? "fa-moon" : "fa-sun-bright"]
                        }, null, 2)
                      ]),
                      _: 1
                    }, 8, ["href", "onClick"])
                  ]),
                  createVNode("li", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("device.index"),
                      class: "flex justify-between px-6 py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Perangkat"),
                        createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ]),
              _ctx.$page.props.user.role_id == 1 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"
              }, [
                createVNode("div", null, [
                  createVNode("div", { class: "-mt-px flex divide-x divide-gray-300 dark:divide-gray-600" }, [
                    createVNode("div", { class: "-ml-px flex w-0 flex-1" }, [
                      createVNode("div", { class: "relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4" }, [
                        createVNode("i", { class: "fa-duotone fa-money-bill-1-wave text-green-400" }),
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("div", { class: "text-xs text-gray-500" }, "Digiflazz Saldo"),
                          createVNode("div", { class: "text-sm font-medium text-gray-700" }, "Rp " + toDisplayString(formatPrice(props.digiflazz_saldo)), 1)
                        ])
                      ])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true),
              _ctx.$page.props.user.role_id == 1 ? (openBlock(), createBlock("div", {
                key: 1,
                class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg"
              }, [
                createVNode("ul", {
                  role: "list",
                  class: "divide-y divide-gray-300 dark:divide-gray-600"
                }, [
                  createVNode("li", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("setting.index"),
                      class: "flex justify-between px-6 py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Pengaturan aplikasi"),
                        createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("li", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("transaction.index"),
                      class: "flex justify-between px-6 py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Transaksi"),
                        createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("li", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("carousel.index"),
                      class: "flex justify-between px-6 py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Carousel"),
                        createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("li", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("user.index"),
                      class: "flex justify-between px-6 py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Data pengguna"),
                        createVNode("i", { class: "fa-regular fa-angle-right text-gray-900" })
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg" }, [
                createVNode("ul", {
                  role: "list",
                  class: "divide-y divide-gray-300 dark:divide-gray-600"
                }, [
                  createVNode("li", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("terms.show"),
                      class: "block px-6 py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Ketentuan layanan")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ]),
                  createVNode("li", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("policy.show"),
                      class: "block px-6 py-4"
                    }, {
                      default: withCtx(() => [
                        createVNode("p", { class: "text-sm font-medium text-gray-900" }, "Kebijakan privasi")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ]),
              createVNode("form", {
                method: "POST",
                onSubmit: withModifiers(logout, ["prevent"])
              }, [
                createVNode(_sfc_main$2, {
                  type: "submit",
                  class: "w-full"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Keluar ")
                  ]),
                  _: 1
                })
              ], 32),
              createVNode(_sfc_main$3)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
