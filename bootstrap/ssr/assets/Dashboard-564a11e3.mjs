import { mergeProps, withCtx, createVNode, createTextVNode, unref, openBlock, createBlock, Fragment, renderList, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-3f001962.mjs";
import { Link } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./MobileMenu-512f42ce.mjs";
import { _ as _sfc_main$2 } from "./PrimaryButton-3137fc48.mjs";
import { _ as _sfc_main$3 } from "./SecondaryButton-70b2499c.mjs";
import "moment";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
const swiper = "";
const freeMode = "";
const autoplay = "";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    users: Object,
    carousel: Object
  },
  setup(__props) {
    const props = __props;
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Beranda",
        greeting: "Selamat datang kembali,",
        name: _ctx.$page.props.user.name,
        desc: _ctx.$page.props.user.email,
        avatar: _ctx.$page.props.user.profile_photo_url
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="rounded-3xl bg-gradient-to-br from-primary-600 overflow-hidden shadow-lg"${_scopeId}><div class="py-4 px-4 sm:px-6 lg:py-8 lg:px-8 lg:flex lg:items-center lg:justify-between"${_scopeId}><div class="tracking-tight nightwind-prevent-block"${_scopeId}><span class="block text-sm font-medium text-white"${_scopeId}> Saldo Rekening </span><span class="block text-lg font-bold text-white"${_scopeId}><span class="text-sm font-medium"${_scopeId}>Rp</span> ${ssrInterpolate(formatPrice(_ctx.$page.props.user.wallet_balance))}</span></div><div class="mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              as: "a",
              href: _ctx.route("deposit.index"),
              class: "text-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="fa-solid fa-circle-plus mr-2"${_scopeId2}></i> Isi Ulang `);
                } else {
                  return [
                    createVNode("i", { class: "fa-solid fa-circle-plus mr-2" }),
                    createTextVNode(" Isi Ulang ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              as: "a",
              href: _ctx.route("money-transfer.index"),
              class: "text-sm border border-gray-900 dark:border-white nightwind-prevent"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="fa-solid fa-circle-up mr-2"${_scopeId2}></i> Kirim Uang `);
                } else {
                  return [
                    createVNode("i", { class: "fa-solid fa-circle-up mr-2" }),
                    createTextVNode(" Kirim Uang ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div>`);
            if (_ctx.$page.props.user.pin == null) {
              _push2(`<div class="border-l-4 border-yellow-400 bg-yellow-100 rounded-3xl p-4"${_scopeId}><div class="flex"${_scopeId}><div class="flex-shrink-0 flex items-center"${_scopeId}><i class="fa-regular fa-triangle-exclamation text-yellow-700 h-5 w-5"${_scopeId}></i></div><div class="ml-3"${_scopeId}><p class="text-sm text-yellow-700"${_scopeId}> Pin kamu belum aktif, yuk ${ssrInterpolate(" ")} `);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("pin.create"),
                class: "font-medium text-yellow-700 underline hover:text-yellow-600"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`buat pin untuk keamanan transaksi.`);
                  } else {
                    return [
                      createTextVNode("buat pin untuk keamanan transaksi.")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.user.device_token == null) {
              _push2(`<div class="border-l-4 border-green-400 bg-green-100 rounded-3xl p-4"${_scopeId}><div class="flex"${_scopeId}><div class="flex-shrink-0 flex items-center"${_scopeId}><i class="fa-regular fa-triangle-exclamation text-green-700 h-5 w-5"${_scopeId}></i></div><div class="ml-3"${_scopeId}><p class="text-sm text-green-700"${_scopeId}> Notifikasi perangkat kamu belum aktif, yuk ${ssrInterpolate(" ")} `);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("device.index"),
                class: "font-medium text-green-700 underline hover:text-green-600"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`aktifin notifikasi`);
                  } else {
                    return [
                      createTextVNode("aktifin notifikasi")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(` ${ssrInterpolate("")} perangkat kamu. </p></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class=""${_scopeId}><div class="grid grid-cols-3 grid-rows-6 grid-flow-col gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("pulsa.index"),
              class: "row-span-4 flex justify-center items-center rounded-3xl bg-gradient-to-br from-sky-300 dark:from-sky-700 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center"${_scopeId2}><i class="fa-regular fa-mobile text-5xl text-sky-600 dark:text-gray-900"${_scopeId2}></i><p class="text-xs text-sky-600 dark:text-gray-900 mt-1"${_scopeId2}>Pulsa &amp; Data</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("i", { class: "fa-regular fa-mobile text-5xl text-sky-600 dark:text-gray-900" }),
                      createVNode("p", { class: "text-xs text-sky-600 dark:text-gray-900 mt-1" }, "Pulsa & Data")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("pln.index"),
              class: "row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-amber-300 dark:from-amber-700 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center"${_scopeId2}><i class="fa-regular fa-lightbulb text-2xl text-amber-600 dark:text-gray-900"${_scopeId2}></i><p class="text-xs text-amber-600 dark:text-gray-900"${_scopeId2}>Listrik</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("i", { class: "fa-regular fa-lightbulb text-2xl text-amber-600 dark:text-gray-900" }),
                      createVNode("p", { class: "text-xs text-amber-600 dark:text-gray-900" }, "Listrik")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("games.index"),
              class: "row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-teal-300 dark:from-teal-700 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center"${_scopeId2}><i class="fa-regular fa-gamepad-modern text-2xl text-teal-600 dark:text-gray-900"${_scopeId2}></i><p class="text-xs text-teal-600 dark:text-gray-900"${_scopeId2}>Games</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("i", { class: "fa-regular fa-gamepad-modern text-2xl text-teal-600 dark:text-gray-900" }),
                      createVNode("p", { class: "text-xs text-teal-600 dark:text-gray-900" }, "Games")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("voucher.index"),
              class: "row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-violet-300 dark:from-violet-700 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center"${_scopeId2}><i class="fa-regular fa-ticket text-2xl text-violet-600 dark:text-gray-900"${_scopeId2}></i><p class="text-xs text-violet-600 dark:text-gray-900"${_scopeId2}>Voucher</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("i", { class: "fa-regular fa-ticket text-2xl text-violet-600 dark:text-gray-900" }),
                      createVNode("p", { class: "text-xs text-violet-600 dark:text-gray-900" }, "Voucher")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("emoney.index"),
              class: "row-span-2 col-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-blue-300 dark:from-blue-700 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center"${_scopeId2}><i class="fa-regular fa-wallet text-2xl text-blue-600 dark:text-gray-900"${_scopeId2}></i><p class="text-xs text-blue-600 dark:text-gray-900"${_scopeId2}>E-Money</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("i", { class: "fa-regular fa-wallet text-2xl text-blue-600 dark:text-gray-900" }),
                      createVNode("p", { class: "text-xs text-blue-600 dark:text-gray-900" }, "E-Money")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("television.index"),
              class: "row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-green-300 dark:from-green-700 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center"${_scopeId2}><i class="fa-regular fa-tv-retro text-2xl text-green-600 dark:text-gray-900"${_scopeId2}></i><p class="text-xs text-green-600 dark:text-gray-900"${_scopeId2}>TV</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("i", { class: "fa-regular fa-tv-retro text-2xl text-green-600 dark:text-gray-900" }),
                      createVNode("p", { class: "text-xs text-green-600 dark:text-gray-900" }, "TV")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("etoll.index"),
              class: "row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-red-300 dark:from-red-700 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center"${_scopeId2}><i class="fa-regular fa-cards-blank text-2xl text-red-600 dark:text-gray-900"${_scopeId2}></i><p class="text-xs text-red-600 dark:text-gray-900"${_scopeId2}>E-Toll</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("i", { class: "fa-regular fa-cards-blank text-2xl text-red-600 dark:text-gray-900" }),
                      createVNode("p", { class: "text-xs text-red-600 dark:text-gray-900" }, "E-Toll")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class=""${_scopeId}><h3 class="text-gray-700 text-sm ml-3 mt-2 mb-1"${_scopeId}>Pascabayar</h3><div class="grid grid-cols-3 gap-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("pasca.bpjs.index"),
              class: "py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-green-300 dark:from-green-700 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center"${_scopeId2}><i class="fa-regular fa-heart-pulse text-2xl text-green-600 dark:text-green-900"${_scopeId2}></i><p class="text-xs text-green-600 dark:text-gray-900"${_scopeId2}>BPJS</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("i", { class: "fa-regular fa-heart-pulse text-2xl text-green-600 dark:text-green-900" }),
                      createVNode("p", { class: "text-xs text-green-600 dark:text-gray-900" }, "BPJS")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("pasca.internet.index"),
              class: "py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-red-300 dark:from-red-700 shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center"${_scopeId2}><i class="fa-regular fa-router text-2xl text-red-600 dark:text-gray-900"${_scopeId2}></i><p class="text-xs text-red-600 dark:text-gray-900"${_scopeId2}>Internet</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("i", { class: "fa-regular fa-router text-2xl text-red-600 dark:text-gray-900" }),
                      createVNode("p", { class: "text-xs text-red-600 dark:text-gray-900" }, "Internet")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            _push2(ssrRenderComponent(unref(Swiper), {
              modules: [unref(Autoplay)],
              "slides-per-view": 1,
              "space-between": 10,
              autoplay: {
                delay: 5e3,
                disableOnInteraction: false
              },
              breakpoints: {
                "640": {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                "768": {
                  slidesPerView: 2,
                  spaceBetween: 10
                },
                "1024": {
                  slidesPerView: 3,
                  spaceBetween: 10
                }
              }
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(props.carousel, (slide) => {
                    _push3(ssrRenderComponent(unref(SwiperSlide), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(unref(Link), {
                            href: slide.href
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img${ssrRenderAttr("src", slide.media[0].original_url)} alt="" class="rounded-3xl w-full h-auto aspect-video object-cover p-1"${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: slide.media[0].original_url,
                                    alt: "",
                                    class: "rounded-3xl w-full h-auto aspect-video object-cover p-1"
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(unref(Link), {
                              href: slide.href
                            }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: slide.media[0].original_url,
                                  alt: "",
                                  class: "rounded-3xl w-full h-auto aspect-video object-cover p-1"
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1032, ["href"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(props.carousel, (slide) => {
                      return openBlock(), createBlock(unref(SwiperSlide), {
                        key: slide.id
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Link), {
                            href: slide.href
                          }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: slide.media[0].original_url,
                                alt: "",
                                class: "rounded-3xl w-full h-auto aspect-video object-cover p-1"
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "rounded-3xl bg-gradient-to-br from-primary-600 overflow-hidden shadow-lg" }, [
                createVNode("div", { class: "py-4 px-4 sm:px-6 lg:py-8 lg:px-8 lg:flex lg:items-center lg:justify-between" }, [
                  createVNode("div", { class: "tracking-tight nightwind-prevent-block" }, [
                    createVNode("span", { class: "block text-sm font-medium text-white" }, " Saldo Rekening "),
                    createVNode("span", { class: "block text-lg font-bold text-white" }, [
                      createVNode("span", { class: "text-sm font-medium" }, "Rp"),
                      createTextVNode(" " + toDisplayString(formatPrice(_ctx.$page.props.user.wallet_balance)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2" }, [
                    createVNode(_sfc_main$2, {
                      as: "a",
                      href: _ctx.route("deposit.index"),
                      class: "text-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa-solid fa-circle-plus mr-2" }),
                        createTextVNode(" Isi Ulang ")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(_sfc_main$3, {
                      as: "a",
                      href: _ctx.route("money-transfer.index"),
                      class: "text-sm border border-gray-900 dark:border-white nightwind-prevent"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa-solid fa-circle-up mr-2" }),
                        createTextVNode(" Kirim Uang ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ]),
              _ctx.$page.props.user.pin == null ? (openBlock(), createBlock("div", {
                key: 0,
                class: "border-l-4 border-yellow-400 bg-yellow-100 rounded-3xl p-4"
              }, [
                createVNode("div", { class: "flex" }, [
                  createVNode("div", { class: "flex-shrink-0 flex items-center" }, [
                    createVNode("i", { class: "fa-regular fa-triangle-exclamation text-yellow-700 h-5 w-5" })
                  ]),
                  createVNode("div", { class: "ml-3" }, [
                    createVNode("p", { class: "text-sm text-yellow-700" }, [
                      createTextVNode(" Pin kamu belum aktif, yuk " + toDisplayString(" ") + " "),
                      createVNode(unref(Link), {
                        href: _ctx.route("pin.create"),
                        class: "font-medium text-yellow-700 underline hover:text-yellow-600"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("buat pin untuk keamanan transaksi.")
                        ]),
                        _: 1
                      }, 8, ["href"])
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true),
              _ctx.$page.props.user.device_token == null ? (openBlock(), createBlock("div", {
                key: 1,
                class: "border-l-4 border-green-400 bg-green-100 rounded-3xl p-4"
              }, [
                createVNode("div", { class: "flex" }, [
                  createVNode("div", { class: "flex-shrink-0 flex items-center" }, [
                    createVNode("i", { class: "fa-regular fa-triangle-exclamation text-green-700 h-5 w-5" })
                  ]),
                  createVNode("div", { class: "ml-3" }, [
                    createVNode("p", { class: "text-sm text-green-700" }, [
                      createTextVNode(" Notifikasi perangkat kamu belum aktif, yuk " + toDisplayString(" ") + " "),
                      createVNode(unref(Link), {
                        href: _ctx.route("device.index"),
                        class: "font-medium text-green-700 underline hover:text-green-600"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("aktifin notifikasi")
                        ]),
                        _: 1
                      }, 8, ["href"]),
                      createTextVNode(" " + toDisplayString("") + " perangkat kamu. ")
                    ])
                  ])
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "" }, [
                createVNode("div", { class: "grid grid-cols-3 grid-rows-6 grid-flow-col gap-4" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("pulsa.index"),
                    class: "row-span-4 flex justify-center items-center rounded-3xl bg-gradient-to-br from-sky-300 dark:from-sky-700 shadow-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("i", { class: "fa-regular fa-mobile text-5xl text-sky-600 dark:text-gray-900" }),
                        createVNode("p", { class: "text-xs text-sky-600 dark:text-gray-900 mt-1" }, "Pulsa & Data")
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("pln.index"),
                    class: "row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-amber-300 dark:from-amber-700 shadow-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("i", { class: "fa-regular fa-lightbulb text-2xl text-amber-600 dark:text-gray-900" }),
                        createVNode("p", { class: "text-xs text-amber-600 dark:text-gray-900" }, "Listrik")
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("games.index"),
                    class: "row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-teal-300 dark:from-teal-700 shadow-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("i", { class: "fa-regular fa-gamepad-modern text-2xl text-teal-600 dark:text-gray-900" }),
                        createVNode("p", { class: "text-xs text-teal-600 dark:text-gray-900" }, "Games")
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("voucher.index"),
                    class: "row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-violet-300 dark:from-violet-700 shadow-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("i", { class: "fa-regular fa-ticket text-2xl text-violet-600 dark:text-gray-900" }),
                        createVNode("p", { class: "text-xs text-violet-600 dark:text-gray-900" }, "Voucher")
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("emoney.index"),
                    class: "row-span-2 col-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-blue-300 dark:from-blue-700 shadow-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("i", { class: "fa-regular fa-wallet text-2xl text-blue-600 dark:text-gray-900" }),
                        createVNode("p", { class: "text-xs text-blue-600 dark:text-gray-900" }, "E-Money")
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("television.index"),
                    class: "row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-green-300 dark:from-green-700 shadow-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("i", { class: "fa-regular fa-tv-retro text-2xl text-green-600 dark:text-gray-900" }),
                        createVNode("p", { class: "text-xs text-green-600 dark:text-gray-900" }, "TV")
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("etoll.index"),
                    class: "row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-red-300 dark:from-red-700 shadow-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("i", { class: "fa-regular fa-cards-blank text-2xl text-red-600 dark:text-gray-900" }),
                        createVNode("p", { class: "text-xs text-red-600 dark:text-gray-900" }, "E-Toll")
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ]),
              createVNode("div", { class: "" }, [
                createVNode("h3", { class: "text-gray-700 text-sm ml-3 mt-2 mb-1" }, "Pascabayar"),
                createVNode("div", { class: "grid grid-cols-3 gap-4" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("pasca.bpjs.index"),
                    class: "py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-green-300 dark:from-green-700 shadow-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("i", { class: "fa-regular fa-heart-pulse text-2xl text-green-600 dark:text-green-900" }),
                        createVNode("p", { class: "text-xs text-green-600 dark:text-gray-900" }, "BPJS")
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(unref(Link), {
                    href: _ctx.route("pasca.internet.index"),
                    class: "py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-red-300 dark:from-red-700 shadow-lg"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("i", { class: "fa-regular fa-router text-2xl text-red-600 dark:text-gray-900" }),
                        createVNode("p", { class: "text-xs text-red-600 dark:text-gray-900" }, "Internet")
                      ])
                    ]),
                    _: 1
                  }, 8, ["href"])
                ])
              ]),
              createVNode(unref(Swiper), {
                modules: [unref(Autoplay)],
                "slides-per-view": 1,
                "space-between": 10,
                autoplay: {
                  delay: 5e3,
                  disableOnInteraction: false
                },
                breakpoints: {
                  "640": {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  "768": {
                    slidesPerView: 2,
                    spaceBetween: 10
                  },
                  "1024": {
                    slidesPerView: 3,
                    spaceBetween: 10
                  }
                }
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(props.carousel, (slide) => {
                    return openBlock(), createBlock(unref(SwiperSlide), {
                      key: slide.id
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(Link), {
                          href: slide.href
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: slide.media[0].original_url,
                              alt: "",
                              class: "rounded-3xl w-full h-auto aspect-video object-cover p-1"
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              }, 8, ["modules"]),
              createVNode(_sfc_main$4)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};