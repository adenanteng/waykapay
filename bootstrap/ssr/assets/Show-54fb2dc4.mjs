import { ref, onMounted, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, createTextVNode, createVNode, unref, toDisplayString, Fragment, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-1a157a17.mjs";
import moment from "moment";
import { _ as _sfc_main$2 } from "./PreviousButton-54c32c2b.mjs";
import "./Badge-0aaec22c.mjs";
import { toClipboard } from "@soerenmartius/vue3-clipboard";
import Popper from "vue3-popper";
import { useForm } from "@inertiajs/vue3";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import "./ApplicationLogo-6cbfcc6b.mjs";
import { _ as _sfc_main$5 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$6 } from "./TextInput-581d553f.mjs";
import { _ as _sfc_main$7 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$3 } from "./PrimaryButton-3137fc48.mjs";
import { _ as _sfc_main$8 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$4 } from "./SecondaryButton-70b2499c.mjs";
import { A as ApplicationLogoTitle } from "./ApplicationLogoTitle-9de108fc.mjs";
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
    // users: Object,
    history: Object,
    goBack: {
      type: Boolean,
      default: true
    },
    goSuccess: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      agent_commission: null
    });
    const storeInformation = () => {
      form.patch(route("transaction.update", props.history), {
        errorBag: "storeInformation",
        preserveScroll: true,
        onSuccess: () => {
          form.reset();
        }
      });
    };
    const timerSuccess = ref(props.goSuccess);
    onMounted(() => {
      setTimeout(() => timerSuccess.value = false, 5e3);
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
        title: props.history.product_name,
        name: props.history.product_name,
        desc: "lorem ipsum dolor sit"
      }, _attrs), {
        previous: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (props.goBack) {
              _push2(ssrRenderComponent(_sfc_main$2, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              props.goBack ? (openBlock(), createBlock(_sfc_main$2, { key: 0 })) : createCommentVNode("", true)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
          if (_push2) {
            if (timerSuccess.value) {
              _push2(`<div class="pt-16 pb-12"${_scopeId}><main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"${_scopeId}><div class="flex flex-shrink-0 justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(ApplicationLogoTitle, null, null, _parent2, _scopeId));
              _push2(`</div><div class="mt-5"${_scopeId}><div class="text-center justify-center"${_scopeId}><div class="px-4 sm:px-6 text-center text-gray-900 text-sm"${_scopeId}></div><h1 class="text-lg font-bold tracking-tight text-gray-900"${_scopeId}>Transaksi Berhasil</h1><p class="text-gray-500 text-sm"${_scopeId}>Kamu akan dialihkan dalam 5 detik</p><div class="mt-5 gap-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                onClick: ($event) => timerSuccess.value = false
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Lihat Transaksi `);
                  } else {
                    return [
                      createTextVNode(" Lihat Transaksi ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$4, {
                as: "a",
                href: _ctx.route("dashboard")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Ke Beranda <i class="fa-regular fa-arrow-right ml-1 text-xs"${_scopeId2}></i>`);
                  } else {
                    return [
                      createTextVNode(" Ke Beranda "),
                      createVNode("i", { class: "fa-regular fa-arrow-right ml-1 text-xs" })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div></main></div>`);
            } else {
              _push2(`<!--[-->`);
              if (props.history.status_id == 1) {
                _push2(`<!--[--><div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start"${_scopeId}>`);
                _push2(ssrRenderComponent(ApplicationLogoTitle, { class: "block sm:hidden" }, null, _parent2, _scopeId));
                _push2(`<h3 class="mt-1 text-lg font-bold leading-6 text-gray-900"${_scopeId}>Transaksi Berhasil</h3></div><div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6"${_scopeId}><div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900"${_scopeId}><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Tanggal</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(formattedDate(props.history.updated_at))}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Kode Referensi</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.order_id)}</div></div><span class="my-2 border-t border-gray-600 border-dashed block sm:hidden"${_scopeId}></span>`);
                if (props.history.category_id == 1) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Kategori</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.category)}</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (props.history.category_id == 1) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Sumber Dana</div>`);
                  if (props.history.virtual_account) {
                    _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.virtual_account.bank)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (props.history.wallet_account) {
                    _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.wallet_account.bank)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (props.history.offline_account) {
                    _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.offline_account.bank)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (props.history.category_id == 99) {
                  _push2(`<!--[--><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Jenis Transaksi</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.product_name)}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Bank Tujuan</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate((_a = props.history.money_transfer) == null ? void 0 : _a.bank)}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Nama Tujuan</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate((_c = (_b = props.history.money_transfer) == null ? void 0 : _b.to) == null ? void 0 : _c.name)}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>No. Rekening Tujuan</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate((_e = (_d = props.history.money_transfer) == null ? void 0 : _d.to) == null ? void 0 : _e.phone)}</div></div><!--]-->`);
                } else {
                  _push2(`<!---->`);
                }
                if (props.history.category_id != 99 && props.history.category_id != 1) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Produk</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.product_name)}</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (props.history.category_id != 99 && props.history.category_id != 1) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>No. Kustomer</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.customer_no)}</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (props.history.category_id == 5) {
                  _push2(`<!--[--><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Nama Kustomer</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.desc.split("/")[1])}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Stroom</div><div class="text-sm font-bold"${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(Popper), {
                    content: "Sukses Copy",
                    arrow: "",
                    placement: "right-end"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<button class=""${_scopeId2}>${ssrInterpolate(props.history.desc.split("/")[0])}</button>`);
                      } else {
                        return [
                          createVNode("button", {
                            onClick: ($event) => unref(toClipboard)(props.history.desc.split("/")[0]),
                            class: ""
                          }, toDisplayString(props.history.desc.split("/")[0]), 9, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div></div><!--]-->`);
                } else {
                  _push2(`<div class="sm:col-span-2 flex sm:block justify-between gap-5"${_scopeId}><div class="text-sm"${_scopeId}>Keterangan</div><div class="text-sm font-semibold text-right sm:text-left truncate"${_scopeId}>${ssrInterpolate(props.history.desc ?? "-")}</div></div>`);
                }
                _push2(`<span class="my-2 border-t border-gray-600 border-dashed block sm:hidden"${_scopeId}></span><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Nominal</div><div class="text-sm font-semibold"${_scopeId}> Rp ${ssrInterpolate(props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount))}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Biaya Admin</div><div class="text-sm font-semibold"${_scopeId}> Rp ${ssrInterpolate(props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.admin_fee) : "0")}</div></div>`);
                if (props.history.agent_commission) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Komisi</div><div class="text-sm font-semibold"${_scopeId}> Rp ${ssrInterpolate(formatPrice(props.history.agent_commission))}</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="my-2 border-t border-gray-600 border-dashed block sm:hidden"${_scopeId}></span><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm font-bold"${_scopeId}>Total</div><div class="text-sm font-bold"${_scopeId}>Rp ${ssrInterpolate(formatPrice(Number(props.history.gross_amount) + Number(props.history.agent_commission)))}</div></div></div></div><div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6 text-xs text-gray-500"${_scopeId}><p${_scopeId}>CV Cahaya Matahari Dunia</p><p${_scopeId}>NPWP: 50.079.228.8-326.000</p><p${_scopeId}>Jl. Lintas Sumatera, Baradatu, Way Kanan, Lampung - 34761</p></div></div>`);
                if (props.history.category_id != 0 && props.history.category_id != 1 && _ctx.$page.props.user.role_id != 3 && props.history.user_id == _ctx.$page.props.user.id) {
                  _push2(`<div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start"${_scopeId}><h3 class="mt-1 text-lg font-bold leading-6 text-gray-900"${_scopeId}>Komisi Agen</h3></div><div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6"${_scopeId}><form${_scopeId}><div class="grid grid-cols-6"${_scopeId}><div class="col-span-6 sm:col-span-3"${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$5, {
                    for: "amount",
                    value: "Harga Jual"
                  }, null, _parent2, _scopeId));
                  _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
                  _push2(ssrRenderComponent(_sfc_main$6, {
                    id: "amount",
                    modelValue: unref(form).agent_commission,
                    "onUpdate:modelValue": ($event) => unref(form).agent_commission = $event,
                    type: "number",
                    class: "mt-1 block w-full rounded-l-none",
                    min: Number(props.history.gross_amount),
                    max: "100000",
                    required: ""
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                  _push2(ssrRenderComponent(_sfc_main$7, {
                    message: unref(form).errors.agent_commission,
                    class: "mt-2"
                  }, null, _parent2, _scopeId));
                  _push2(`</div><div class="col-span-6 mt-3 flex justify-between items-center"${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$8, {
                    on: unref(form).recentlySuccessful,
                    class: "mr-3"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` Berhasil disimpan. `);
                      } else {
                        return [
                          createTextVNode(" Berhasil disimpan. ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_sfc_main$3, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` Konfirmasi `);
                      } else {
                        return [
                          createTextVNode(" Konfirmasi ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div></div></form></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="flex justify-center gap-2"${_scopeId}>`);
                if (props.history.user_id == _ctx.$page.props.user.id && props.history.category_id != 1) {
                  _push2(ssrRenderComponent(_sfc_main$3, {
                    as: "a",
                    href: _ctx.route("transaction.print", props.history.order_id),
                    class: "justify-center w-full"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<i class="fa-regular fa-print mr-2"${_scopeId2}></i> Cetak `);
                      } else {
                        return [
                          createVNode("i", { class: "fa-regular fa-print mr-2" }),
                          createTextVNode(" Cetak ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (props.history.user_id == _ctx.$page.props.user.id && props.history.category_id != 1) {
                  _push2(ssrRenderComponent(_sfc_main$3, {
                    as: "a",
                    href: _ctx.route("transaction.share", props.history.order_id),
                    class: "justify-center w-full"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<i class="fa-regular fa-share-nodes mr-2"${_scopeId2}></i> Bagikan `);
                      } else {
                        return [
                          createVNode("i", { class: "fa-regular fa-share-nodes mr-2" }),
                          createTextVNode(" Bagikan ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class=""${_scopeId}>`);
                if (!props.goBack) {
                  _push2(ssrRenderComponent(_sfc_main$4, {
                    as: "a",
                    href: _ctx.route("dashboard"),
                    class: "justify-center w-full border border-gray-300 nightwind-prevent"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<i class="fa-regular fa-home mr-2"${_scopeId2}></i> Beranda `);
                      } else {
                        return [
                          createVNode("i", { class: "fa-regular fa-home mr-2" }),
                          createTextVNode(" Beranda ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><!--]-->`);
              } else if (props.history.status_id == 2) {
                _push2(`<div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start"${_scopeId}>`);
                _push2(ssrRenderComponent(ApplicationLogoTitle, { class: "block sm:hidden" }, null, _parent2, _scopeId));
                _push2(`<h3 class="mt-1 text-lg font-bold leading-6 text-gray-900"${_scopeId}>Transaksi Pending</h3></div><div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6"${_scopeId}><div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900"${_scopeId}>`);
                if (props.history.virtual_account) {
                  _push2(`<!--[--><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Bank</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.virtual_account.bank)}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>No. Virtual Account</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.virtual_account.va_number)} `);
                  _push2(ssrRenderComponent(unref(Popper), {
                    class: "text-sm text-primary-700 font-normal lowercase",
                    content: "Sukses Copy",
                    arrow: "",
                    placement: "right-end"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<button class=""${_scopeId2}><i class="fa-duotone fa-paste ml-2"${_scopeId2}></i></button>`);
                      } else {
                        return [
                          createVNode("button", {
                            class: "",
                            onClick: ($event) => unref(toClipboard)(props.history.virtual_account.va_number)
                          }, [
                            createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div></div><!--]-->`);
                } else if (props.history.wallet_account) {
                  _push2(`<!--[--><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Metode Pembayaran</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.wallet_account.bank)}</div></div><div class="sm:col-span-2 flex flex-col items-center my-5 gap-3"${_scopeId}><div class="text-sm"${_scopeId}><img src="/img/vendor/QRIS.svg" class="h-8 w-auto" alt="QRIS"${_scopeId}></div><div class="text-sm"${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(VueQrcode), {
                    value: props.history.wallet_account.qr_code,
                    tag: "svg",
                    options: {
                      width: 200,
                      color: {
                        dark: "#000",
                        light: "#fff"
                      }
                    }
                  }, null, _parent2, _scopeId));
                  _push2(`</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Deeplink</div><div class="text-sm font-semibold text-primary-600 underline"${_scopeId}><a target="_blank"${ssrRenderAttr("href", props.history.wallet_account.payment_url)}${_scopeId}> Bayar </a></div></div><!--]-->`);
                } else if (props.history.offline_account) {
                  _push2(`<!--[--><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Metode Pembayaran</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.offline_account.bank)}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>No. Pembayaran</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.offline_account.payment_code)} `);
                  _push2(ssrRenderComponent(unref(Popper), {
                    class: "text-sm text-primary-700 font-normal lowercase",
                    content: "Sukses Copy",
                    arrow: "",
                    placement: "right-end"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<button class=""${_scopeId2}><i class="fa-duotone fa-paste ml-2"${_scopeId2}></i></button>`);
                      } else {
                        return [
                          createVNode("button", {
                            class: "",
                            onClick: ($event) => unref(toClipboard)(props.history.offline_account.payment_code)
                          }, [
                            createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Cara bayar</div><div class="text-sm font-semibold text-primary-600 underline"${_scopeId}><a target="_blank"${ssrRenderAttr("href", props.history.offline_account.payment_url)}${_scopeId}> Bayar </a></div></div><!--]-->`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="my-2 border-t border-gray-600 border-dashed block sm:hidden"${_scopeId}></span><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Nominal</div><div class="text-sm font-semibold"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.history.amount))}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Biaya Admin</div><div class="text-sm font-semibold"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.history.admin_fee))}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Total</div><div class="text-sm font-semibold"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.history.gross_amount))}</div></div></div></div></div>`);
              } else {
                _push2(`<div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start"${_scopeId}>`);
                _push2(ssrRenderComponent(ApplicationLogoTitle, { class: "block sm:hidden" }, null, _parent2, _scopeId));
                _push2(`<h3 class="mt-1 text-lg font-bold leading-6 text-gray-900"${_scopeId}>Transaksi ${ssrInterpolate(props.history.status)}</h3></div><div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6"${_scopeId}><div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900"${_scopeId}><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Tanggal</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(formattedDate(props.history.updated_at))}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Kode Referensi</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.order_id)}</div></div><span class="my-2 border-t border-gray-600 border-dashed block sm:hidden"${_scopeId}></span><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Kategori</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.category)}</div></div>`);
                if (props.history.category_id == 0 || props.history.category_id != 1) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Sumber Dana</div>`);
                  if (props.history.virtual_account) {
                    _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.virtual_account.bank)}</div>`);
                  } else if (props.history.wallet_account) {
                    _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.wallet_account.bank)}</div>`);
                  } else if (props.history.offline_account) {
                    _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.offline_account.bank)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (props.history.category_id != 0 || props.history.category_id != 1) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Produk</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.product_name)}</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (props.history.category_id != 0 || props.history.category_id != 1) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>No. Kustomer</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.customer_no)}</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="sm:col-span-2 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Keterangan</div><div class="text-sm font-semibold text-right sm:text-left"${_scopeId}>${ssrInterpolate(props.history.desc ?? "-")}</div></div><span class="my-2 border-t border-gray-600 border-dashed block sm:hidden"${_scopeId}></span><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Nominal</div><div class="text-sm font-semibold"${_scopeId}>Rp ${ssrInterpolate(props.history.category_id == 1 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount))}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Biaya Admin</div><div class="text-sm font-semibold"${_scopeId}>Rp ${ssrInterpolate(props.history.category_id == 1 ? formatPrice(props.history.admin_fee) : "0")}</div></div><span class="my-2 border-t border-gray-600 border-dashed block sm:hidden"${_scopeId}></span><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm font-bold"${_scopeId}>Total</div><div class="text-sm font-bold"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.history.gross_amount))}</div></div></div></div></div>`);
              }
              _push2(`<!--]-->`);
            }
          } else {
            return [
              timerSuccess.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "pt-16 pb-12"
              }, [
                createVNode("main", { class: "mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8" }, [
                  createVNode("div", { class: "flex flex-shrink-0 justify-center" }, [
                    createVNode(ApplicationLogoTitle)
                  ]),
                  createVNode("div", { class: "mt-5" }, [
                    createVNode("div", { class: "text-center justify-center" }, [
                      createVNode("div", { class: "px-4 sm:px-6 text-center text-gray-900 text-sm" }),
                      createVNode("h1", { class: "text-lg font-bold tracking-tight text-gray-900" }, "Transaksi Berhasil"),
                      createVNode("p", { class: "text-gray-500 text-sm" }, "Kamu akan dialihkan dalam 5 detik"),
                      createVNode("div", { class: "mt-5 gap-x-2" }, [
                        createVNode(_sfc_main$3, {
                          onClick: ($event) => timerSuccess.value = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Lihat Transaksi ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_sfc_main$4, {
                          as: "a",
                          href: _ctx.route("dashboard")
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Ke Beranda "),
                            createVNode("i", { class: "fa-regular fa-arrow-right ml-1 text-xs" })
                          ]),
                          _: 1
                        }, 8, ["href"])
                      ])
                    ])
                  ])
                ])
              ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                props.history.status_id == 1 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300" }, [
                    createVNode("div", { class: "px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start" }, [
                      createVNode(ApplicationLogoTitle, { class: "block sm:hidden" }),
                      createVNode("h3", { class: "mt-1 text-lg font-bold leading-6 text-gray-900" }, "Transaksi Berhasil")
                    ]),
                    createVNode("div", { class: "border-t border-gray-600 border-dashed px-4 py-5 sm:px-6" }, [
                      createVNode("div", { class: "grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900" }, [
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Tanggal"),
                          createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(formattedDate(props.history.updated_at)), 1)
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Kode Referensi"),
                          createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.order_id), 1)
                        ]),
                        createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block sm:hidden" }),
                        props.history.category_id == 1 ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "sm:col-span-1 flex sm:block justify-between"
                        }, [
                          createVNode("div", { class: "text-sm" }, "Kategori"),
                          createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.category), 1)
                        ])) : createCommentVNode("", true),
                        props.history.category_id == 1 ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "sm:col-span-1 flex sm:block justify-between"
                        }, [
                          createVNode("div", { class: "text-sm" }, "Sumber Dana"),
                          props.history.virtual_account ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "text-sm font-semibold uppercase"
                          }, toDisplayString(props.history.virtual_account.bank), 1)) : createCommentVNode("", true),
                          props.history.wallet_account ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "text-sm font-semibold uppercase"
                          }, toDisplayString(props.history.wallet_account.bank), 1)) : createCommentVNode("", true),
                          props.history.offline_account ? (openBlock(), createBlock("div", {
                            key: 2,
                            class: "text-sm font-semibold uppercase"
                          }, toDisplayString(props.history.offline_account.bank), 1)) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        props.history.category_id == 99 ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Jenis Transaksi"),
                            createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString(props.history.product_name), 1)
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Bank Tujuan"),
                            createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString((_f = props.history.money_transfer) == null ? void 0 : _f.bank), 1)
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Nama Tujuan"),
                            createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString((_h = (_g = props.history.money_transfer) == null ? void 0 : _g.to) == null ? void 0 : _h.name), 1)
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "No. Rekening Tujuan"),
                            createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString((_j = (_i = props.history.money_transfer) == null ? void 0 : _i.to) == null ? void 0 : _j.phone), 1)
                          ])
                        ], 64)) : createCommentVNode("", true),
                        props.history.category_id != 99 && props.history.category_id != 1 ? (openBlock(), createBlock("div", {
                          key: 3,
                          class: "sm:col-span-1 flex sm:block justify-between"
                        }, [
                          createVNode("div", { class: "text-sm" }, "Produk"),
                          createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString(props.history.product_name), 1)
                        ])) : createCommentVNode("", true),
                        props.history.category_id != 99 && props.history.category_id != 1 ? (openBlock(), createBlock("div", {
                          key: 4,
                          class: "sm:col-span-1 flex sm:block justify-between"
                        }, [
                          createVNode("div", { class: "text-sm" }, "No. Kustomer"),
                          createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.customer_no), 1)
                        ])) : createCommentVNode("", true),
                        props.history.category_id == 5 ? (openBlock(), createBlock(Fragment, { key: 5 }, [
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Nama Kustomer"),
                            createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.desc.split("/")[1]), 1)
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Stroom"),
                            createVNode("div", { class: "text-sm font-bold" }, [
                              createVNode(unref(Popper), {
                                content: "Sukses Copy",
                                arrow: "",
                                placement: "right-end"
                              }, {
                                default: withCtx(() => [
                                  createVNode("button", {
                                    onClick: ($event) => unref(toClipboard)(props.history.desc.split("/")[0]),
                                    class: ""
                                  }, toDisplayString(props.history.desc.split("/")[0]), 9, ["onClick"])
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ], 64)) : (openBlock(), createBlock("div", {
                          key: 6,
                          class: "sm:col-span-2 flex sm:block justify-between gap-5"
                        }, [
                          createVNode("div", { class: "text-sm" }, "Keterangan"),
                          createVNode("div", { class: "text-sm font-semibold text-right sm:text-left truncate" }, toDisplayString(props.history.desc ?? "-"), 1)
                        ])),
                        createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block sm:hidden" }),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Nominal"),
                          createVNode("div", { class: "text-sm font-semibold" }, " Rp " + toDisplayString(props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount)), 1)
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Biaya Admin"),
                          createVNode("div", { class: "text-sm font-semibold" }, " Rp " + toDisplayString(props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.admin_fee) : "0"), 1)
                        ]),
                        props.history.agent_commission ? (openBlock(), createBlock("div", {
                          key: 7,
                          class: "sm:col-span-1 flex sm:block justify-between"
                        }, [
                          createVNode("div", { class: "text-sm" }, "Komisi"),
                          createVNode("div", { class: "text-sm font-semibold" }, " Rp " + toDisplayString(formatPrice(props.history.agent_commission)), 1)
                        ])) : createCommentVNode("", true),
                        createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block sm:hidden" }),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm font-bold" }, "Total"),
                          createVNode("div", { class: "text-sm font-bold" }, "Rp " + toDisplayString(formatPrice(Number(props.history.gross_amount) + Number(props.history.agent_commission))), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "border-t border-gray-600 border-dashed px-4 py-5 sm:px-6 text-xs text-gray-500" }, [
                      createVNode("p", null, "CV Cahaya Matahari Dunia"),
                      createVNode("p", null, "NPWP: 50.079.228.8-326.000"),
                      createVNode("p", null, "Jl. Lintas Sumatera, Baradatu, Way Kanan, Lampung - 34761")
                    ])
                  ]),
                  props.history.category_id != 0 && props.history.category_id != 1 && _ctx.$page.props.user.role_id != 3 && props.history.user_id == _ctx.$page.props.user.id ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"
                  }, [
                    createVNode("div", { class: "px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start" }, [
                      createVNode("h3", { class: "mt-1 text-lg font-bold leading-6 text-gray-900" }, "Komisi Agen")
                    ]),
                    createVNode("div", { class: "border-t border-gray-600 border-dashed px-4 py-5 sm:px-6" }, [
                      createVNode("form", {
                        onSubmit: withModifiers(storeInformation, ["prevent"])
                      }, [
                        createVNode("div", { class: "grid grid-cols-6" }, [
                          createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                            createVNode(_sfc_main$5, {
                              for: "amount",
                              value: "Harga Jual"
                            }),
                            createVNode("div", { class: "flex" }, [
                              createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                              createVNode(_sfc_main$6, {
                                id: "amount",
                                modelValue: unref(form).agent_commission,
                                "onUpdate:modelValue": ($event) => unref(form).agent_commission = $event,
                                type: "number",
                                class: "mt-1 block w-full rounded-l-none",
                                min: Number(props.history.gross_amount),
                                max: "100000",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
                            ]),
                            createVNode(_sfc_main$7, {
                              message: unref(form).errors.agent_commission,
                              class: "mt-2"
                            }, null, 8, ["message"])
                          ]),
                          createVNode("div", { class: "col-span-6 mt-3 flex justify-between items-center" }, [
                            createVNode(_sfc_main$8, {
                              on: unref(form).recentlySuccessful,
                              class: "mr-3"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Berhasil disimpan. ")
                              ]),
                              _: 1
                            }, 8, ["on"]),
                            createVNode(_sfc_main$3, {
                              class: { "opacity-25": unref(form).processing },
                              disabled: unref(form).processing
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Konfirmasi ")
                              ]),
                              _: 1
                            }, 8, ["class", "disabled"])
                          ])
                        ])
                      ], 32)
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "flex justify-center gap-2" }, [
                    props.history.user_id == _ctx.$page.props.user.id && props.history.category_id != 1 ? (openBlock(), createBlock(_sfc_main$3, {
                      key: 0,
                      as: "a",
                      href: _ctx.route("transaction.print", props.history.order_id),
                      class: "justify-center w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa-regular fa-print mr-2" }),
                        createTextVNode(" Cetak ")
                      ]),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true),
                    props.history.user_id == _ctx.$page.props.user.id && props.history.category_id != 1 ? (openBlock(), createBlock(_sfc_main$3, {
                      key: 1,
                      as: "a",
                      href: _ctx.route("transaction.share", props.history.order_id),
                      class: "justify-center w-full"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa-regular fa-share-nodes mr-2" }),
                        createTextVNode(" Bagikan ")
                      ]),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "" }, [
                    !props.goBack ? (openBlock(), createBlock(_sfc_main$4, {
                      key: 0,
                      as: "a",
                      href: _ctx.route("dashboard"),
                      class: "justify-center w-full border border-gray-300 nightwind-prevent"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa-regular fa-home mr-2" }),
                        createTextVNode(" Beranda ")
                      ]),
                      _: 1
                    }, 8, ["href"])) : createCommentVNode("", true)
                  ])
                ], 64)) : props.history.status_id == 2 ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"
                }, [
                  createVNode("div", { class: "px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start" }, [
                    createVNode(ApplicationLogoTitle, { class: "block sm:hidden" }),
                    createVNode("h3", { class: "mt-1 text-lg font-bold leading-6 text-gray-900" }, "Transaksi Pending")
                  ]),
                  createVNode("div", { class: "border-t border-gray-600 border-dashed px-4 py-5 sm:px-6" }, [
                    createVNode("div", { class: "grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900" }, [
                      props.history.virtual_account ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Bank"),
                          createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString(props.history.virtual_account.bank), 1)
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "No. Virtual Account"),
                          createVNode("div", { class: "text-sm font-semibold" }, [
                            createTextVNode(toDisplayString(props.history.virtual_account.va_number) + " ", 1),
                            createVNode(unref(Popper), {
                              class: "text-sm text-primary-700 font-normal lowercase",
                              content: "Sukses Copy",
                              arrow: "",
                              placement: "right-end"
                            }, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  class: "",
                                  onClick: ($event) => unref(toClipboard)(props.history.virtual_account.va_number)
                                }, [
                                  createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ], 64)) : props.history.wallet_account ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Metode Pembayaran"),
                          createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString(props.history.wallet_account.bank), 1)
                        ]),
                        createVNode("div", { class: "sm:col-span-2 flex flex-col items-center my-5 gap-3" }, [
                          createVNode("div", { class: "text-sm" }, [
                            createVNode("img", {
                              src: "/img/vendor/QRIS.svg",
                              class: "h-8 w-auto",
                              alt: "QRIS"
                            })
                          ]),
                          createVNode("div", { class: "text-sm" }, [
                            createVNode(unref(VueQrcode), {
                              value: props.history.wallet_account.qr_code,
                              tag: "svg",
                              options: {
                                width: 200,
                                color: {
                                  dark: "#000",
                                  light: "#fff"
                                }
                              }
                            }, null, 8, ["value"])
                          ])
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Deeplink"),
                          createVNode("div", { class: "text-sm font-semibold text-primary-600 underline" }, [
                            createVNode("a", {
                              target: "_blank",
                              href: props.history.wallet_account.payment_url
                            }, " Bayar ", 8, ["href"])
                          ])
                        ])
                      ], 64)) : props.history.offline_account ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Metode Pembayaran"),
                          createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString(props.history.offline_account.bank), 1)
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "No. Pembayaran"),
                          createVNode("div", { class: "text-sm font-semibold" }, [
                            createTextVNode(toDisplayString(props.history.offline_account.payment_code) + " ", 1),
                            createVNode(unref(Popper), {
                              class: "text-sm text-primary-700 font-normal lowercase",
                              content: "Sukses Copy",
                              arrow: "",
                              placement: "right-end"
                            }, {
                              default: withCtx(() => [
                                createVNode("button", {
                                  class: "",
                                  onClick: ($event) => unref(toClipboard)(props.history.offline_account.payment_code)
                                }, [
                                  createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Cara bayar"),
                          createVNode("div", { class: "text-sm font-semibold text-primary-600 underline" }, [
                            createVNode("a", {
                              target: "_blank",
                              href: props.history.offline_account.payment_url
                            }, " Bayar ", 8, ["href"])
                          ])
                        ])
                      ], 64)) : createCommentVNode("", true),
                      createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block sm:hidden" }),
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Nominal"),
                        createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(formatPrice(props.history.amount)), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Biaya Admin"),
                        createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(formatPrice(props.history.admin_fee)), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Total"),
                        createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(formatPrice(props.history.gross_amount)), 1)
                      ])
                    ])
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 2,
                  class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"
                }, [
                  createVNode("div", { class: "px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start" }, [
                    createVNode(ApplicationLogoTitle, { class: "block sm:hidden" }),
                    createVNode("h3", { class: "mt-1 text-lg font-bold leading-6 text-gray-900" }, "Transaksi " + toDisplayString(props.history.status), 1)
                  ]),
                  createVNode("div", { class: "border-t border-gray-600 border-dashed px-4 py-5 sm:px-6" }, [
                    createVNode("div", { class: "grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900" }, [
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Tanggal"),
                        createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(formattedDate(props.history.updated_at)), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Kode Referensi"),
                        createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.order_id), 1)
                      ]),
                      createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block sm:hidden" }),
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Kategori"),
                        createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.category), 1)
                      ]),
                      props.history.category_id == 0 || props.history.category_id != 1 ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "sm:col-span-1 flex sm:block justify-between"
                      }, [
                        createVNode("div", { class: "text-sm" }, "Sumber Dana"),
                        props.history.virtual_account ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm font-semibold uppercase"
                        }, toDisplayString(props.history.virtual_account.bank), 1)) : props.history.wallet_account ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "text-sm font-semibold uppercase"
                        }, toDisplayString(props.history.wallet_account.bank), 1)) : props.history.offline_account ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "text-sm font-semibold uppercase"
                        }, toDisplayString(props.history.offline_account.bank), 1)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      props.history.category_id != 0 || props.history.category_id != 1 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "sm:col-span-1 flex sm:block justify-between"
                      }, [
                        createVNode("div", { class: "text-sm" }, "Produk"),
                        createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.product_name), 1)
                      ])) : createCommentVNode("", true),
                      props.history.category_id != 0 || props.history.category_id != 1 ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "sm:col-span-1 flex sm:block justify-between"
                      }, [
                        createVNode("div", { class: "text-sm" }, "No. Kustomer"),
                        createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.customer_no), 1)
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "sm:col-span-2 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Keterangan"),
                        createVNode("div", { class: "text-sm font-semibold text-right sm:text-left" }, toDisplayString(props.history.desc ?? "-"), 1)
                      ]),
                      createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block sm:hidden" }),
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Nominal"),
                        createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(props.history.category_id == 1 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount)), 1)
                      ]),
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm" }, "Biaya Admin"),
                        createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(props.history.category_id == 1 ? formatPrice(props.history.admin_fee) : "0"), 1)
                      ]),
                      createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block sm:hidden" }),
                      createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                        createVNode("div", { class: "text-sm font-bold" }, "Total"),
                        createVNode("div", { class: "text-sm font-bold" }, "Rp " + toDisplayString(formatPrice(props.history.gross_amount)), 1)
                      ])
                    ])
                  ])
                ]))
              ], 64))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/History/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
