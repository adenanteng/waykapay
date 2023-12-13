import { onMounted, ref, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-a31fc106.mjs";
import { router } from "@inertiajs/vue3";
import "./MobileMenu-5acf9387.mjs";
import moment from "moment";
import Loading from "./Loading-6d21ae0a.mjs";
import _sfc_main$2 from "./PriceList-a43a6076.mjs";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "nightwind/helper.js";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./SecondaryButton-70b2499c.mjs";
import "moment/moment.js";
import "./FormatEmoney-882053b0.mjs";
import "./FormatPulsa-5bc45ed9.mjs";
import "./FormatVoucher-7283b783.mjs";
import "./FormatGames-802f3ff2.mjs";
import "./FormatTV-f6aca9e4.mjs";
import "./FormatPln-14a4a72d.mjs";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    product_count: void 0,
    pulsa: void 0,
    data: void 0,
    emoney: void 0,
    voucher: void 0,
    games: void 0,
    tv: void 0,
    pln: void 0
    // product: {
    //     type: Object,
    //     default: () => ({}),
    // },
    // filters: {
    //     type: Object,
    //     default: () => ({}),
    // },
  },
  setup(__props) {
    const props = __props;
    onMounted(() => {
      router.reload({ only: ["product_count", "pulsa", "data", "emoney", "voucher", "games", "tv", "pln"] });
    });
    function formatDateNow() {
      return moment().format("DD MMM Y HH:mm");
    }
    const tab = ref("Semua");
    const lists = [
      {
        name: "Semua",
        slug: null,
        icon: "fa-cube"
      },
      {
        name: "Pulsa",
        slug: "pulsa",
        icon: "fa-mobile"
      },
      {
        name: "Data",
        slug: "pulsa",
        icon: "fa-mobile"
      },
      {
        name: "E-Money",
        slug: "emoney",
        icon: "fa-wallet"
      },
      {
        name: "Voucher",
        slug: "voucher",
        icon: "fa-ticket"
      },
      {
        name: "Games",
        slug: "games",
        icon: "fa-gamepad-modern"
      },
      {
        name: "TV",
        slug: "tv",
        icon: "fa-tv-retro"
      },
      {
        name: "PLN",
        slug: "pln",
        icon: "fa-lightbulb"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Daftar Harga",
        name: "Daftar Harga",
        desc: "Daftar harga produk prabayar"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300"${_scopeId}><div class="flex w-full items-center justify-between space-x-6 p-6"${_scopeId}><div class="flex-1 truncate"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><h3 class="truncate text-sm text-gray-600"${_scopeId}>Total Produk</h3></div><p class="mt-1 truncate text-sm font-medium text-gray-900"${_scopeId}>${ssrInterpolate(props.product_count)}</p></div><i class="fa-duotone fa-cube text-green-600 text-3xl flex-shrink-0"${_scopeId}></i></div><div${_scopeId}><div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600"${_scopeId}><div class="flex w-0 flex-1"${_scopeId}><div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4"${_scopeId}><div class="ml-3"${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>Harga per tanggal</div><div class="text-sm font-medium text-gray-700"${_scopeId}>${ssrInterpolate(formatDateNow())}</div></div></div></div></div></div></div><div class="grid sm:grid-cols-6 gap-5"${_scopeId}><div class="sm:col-span-2"${_scopeId}><div class="bg-white bg-opacity-50 border border-gray-300 rounded-3xl shadow-lg"${_scopeId}><div class="px-3 py-5 grid gap-3"${_scopeId}><h3 class="font-semibold text-gray-900 ml-2"${_scopeId}> Produk Prabayar </h3><!--[-->`);
            ssrRenderList(lists, (list, listIdx) => {
              _push2(`<button${_scopeId}><div class="${ssrRenderClass([tab.value == list.name ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-900", "rounded-3xl py-3 px-5 text-left"])}"${_scopeId}><i class="${ssrRenderClass([list.icon, "fa-duotone mr-1 w-5"])}"${_scopeId}></i> ${ssrInterpolate(list.name)}</div></button>`);
            });
            _push2(`<!--]--></div></div></div>`);
            if (props.pulsa === void 0) {
              _push2(ssrRenderComponent(Loading, null, null, _parent2, _scopeId));
            } else {
              _push2(`<div class="grid sm:col-span-4 gap-5"${_scopeId}>`);
              if (tab.value == "Pulsa" || tab.value == "Semua") {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  title: "PULSA",
                  slug: "pulsa",
                  list: props.pulsa
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (tab.value == "Data" || tab.value == "Semua") {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  title: "DATA",
                  slug: "pulsa",
                  list: props.data
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (tab.value == "E-Money" || tab.value == "Semua") {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  title: "E-MONEY",
                  slug: "emoney",
                  list: props.emoney
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (tab.value == "Voucher" || tab.value == "Semua") {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  title: "VOUCHER",
                  slug: "voucher",
                  list: props.voucher
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (tab.value == "Games" || tab.value == "Semua") {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  title: "GAMES",
                  slug: "games",
                  list: props.games
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (tab.value == "TV" || tab.value == "Semua") {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  title: "TV",
                  slug: "tv",
                  list: props.tv
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (tab.value == "PLN" || tab.value == "Semua") {
                _push2(ssrRenderComponent(_sfc_main$2, {
                  title: "PLN",
                  slug: "pln",
                  list: props.pln
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300" }, [
                createVNode("div", { class: "flex w-full items-center justify-between space-x-6 p-6" }, [
                  createVNode("div", { class: "flex-1 truncate" }, [
                    createVNode("div", { class: "flex items-center space-x-3" }, [
                      createVNode("h3", { class: "truncate text-sm text-gray-600" }, "Total Produk")
                    ]),
                    createVNode("p", { class: "mt-1 truncate text-sm font-medium text-gray-900" }, toDisplayString(props.product_count), 1)
                  ]),
                  createVNode("i", { class: "fa-duotone fa-cube text-green-600 text-3xl flex-shrink-0" })
                ]),
                createVNode("div", null, [
                  createVNode("div", { class: "-mt-px flex divide-x divide-gray-300 dark:divide-gray-600" }, [
                    createVNode("div", { class: "flex w-0 flex-1" }, [
                      createVNode("div", { class: "relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4" }, [
                        createVNode("div", { class: "ml-3" }, [
                          createVNode("div", { class: "text-xs text-gray-500" }, "Harga per tanggal"),
                          createVNode("div", { class: "text-sm font-medium text-gray-700" }, toDisplayString(formatDateNow()), 1)
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "grid sm:grid-cols-6 gap-5" }, [
                createVNode("div", { class: "sm:col-span-2" }, [
                  createVNode("div", { class: "bg-white bg-opacity-50 border border-gray-300 rounded-3xl shadow-lg" }, [
                    createVNode("div", { class: "px-3 py-5 grid gap-3" }, [
                      createVNode("h3", { class: "font-semibold text-gray-900 ml-2" }, " Produk Prabayar "),
                      (openBlock(), createBlock(Fragment, null, renderList(lists, (list, listIdx) => {
                        return createVNode("button", {
                          key: list.id,
                          onClick: ($event) => tab.value = list.name
                        }, [
                          createVNode("div", {
                            class: ["rounded-3xl py-3 px-5 text-left", tab.value == list.name ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-900"]
                          }, [
                            createVNode("i", {
                              class: ["fa-duotone mr-1 w-5", list.icon]
                            }, null, 2),
                            createTextVNode(" " + toDisplayString(list.name), 1)
                          ], 2)
                        ], 8, ["onClick"]);
                      }), 64))
                    ])
                  ])
                ]),
                props.pulsa === void 0 ? (openBlock(), createBlock(Loading, { key: 0 })) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "grid sm:col-span-4 gap-5"
                }, [
                  tab.value == "Pulsa" || tab.value == "Semua" ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 0,
                    title: "PULSA",
                    slug: "pulsa",
                    list: props.pulsa
                  }, null, 8, ["list"])) : createCommentVNode("", true),
                  tab.value == "Data" || tab.value == "Semua" ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 1,
                    title: "DATA",
                    slug: "pulsa",
                    list: props.data
                  }, null, 8, ["list"])) : createCommentVNode("", true),
                  tab.value == "E-Money" || tab.value == "Semua" ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 2,
                    title: "E-MONEY",
                    slug: "emoney",
                    list: props.emoney
                  }, null, 8, ["list"])) : createCommentVNode("", true),
                  tab.value == "Voucher" || tab.value == "Semua" ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 3,
                    title: "VOUCHER",
                    slug: "voucher",
                    list: props.voucher
                  }, null, 8, ["list"])) : createCommentVNode("", true),
                  tab.value == "Games" || tab.value == "Semua" ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 4,
                    title: "GAMES",
                    slug: "games",
                    list: props.games
                  }, null, 8, ["list"])) : createCommentVNode("", true),
                  tab.value == "TV" || tab.value == "Semua" ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 5,
                    title: "TV",
                    slug: "tv",
                    list: props.tv
                  }, null, 8, ["list"])) : createCommentVNode("", true),
                  tab.value == "PLN" || tab.value == "Semua" ? (openBlock(), createBlock(_sfc_main$2, {
                    key: 6,
                    title: "PLN",
                    slug: "pln",
                    list: props.pln
                  }, null, 8, ["list"])) : createCommentVNode("", true)
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pricing/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
