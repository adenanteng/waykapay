import { computed, ref, onMounted, onUnmounted, watch, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, createTextVNode, createVNode, unref, toDisplayString, Fragment, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./AppLayout-d45ca2f7.mjs";
import moment from "moment";
import { _ as _sfc_main$2 } from "./PreviousButton-54c32c2b.mjs";
import "./Badge-0aaec22c.mjs";
import { toClipboard } from "@soerenmartius/vue3-clipboard";
import Popper from "vue3-popper";
import { useForm, usePage } from "@inertiajs/vue3";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import "./ApplicationLogo-6cbfcc6b.mjs";
import { _ as _sfc_main$5 } from "./InputLabel-3c261e52.mjs";
import { _ as _sfc_main$6 } from "./TextInput-581d553f.mjs";
import { _ as _sfc_main$7 } from "./InputError-6aeb8d97.mjs";
import { _ as _sfc_main$3 } from "./PrimaryButton-3722f774.mjs";
import { _ as _sfc_main$8 } from "./ActionMessage-c43f20d9.mjs";
import { _ as _sfc_main$4 } from "./SecondaryButton-0a2fd542.mjs";
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
      agent_commission: null,
      valid: null,
      valid_amount: null
    });
    const { ...userInfo } = computed(() => usePage().props.user).value;
    const message = ref(null);
    const storeInformation = () => {
      form.agent_commission = commission.value.replaceAll(".", "");
      form.patch(route("transaction.update", props.history), {
        errorBag: "storeInformation",
        preserveScroll: true,
        onSuccess: () => {
          form.reset();
        }
      });
    };
    const validate = () => {
      form.valid = props.history.order_id;
      form.valid_amount = amount.value.replaceAll(".", "");
      if (userInfo.pin) {
        form.post(route("pin.manualTransfer"), {
          errorBag: "storeInformation",
          preserveScroll: true,
          // replace: true,
          onSuccess: () => {
          }
        });
      } else {
        form.patch(route("transaction.update", props.history), {
          errorBag: "storeInformation",
          preserveScroll: true,
          onSuccess: () => {
            form.reset();
          }
        });
      }
    };
    const timerSuccess = ref(props.goSuccess);
    onMounted(() => {
      if (timerSuccess.value) {
        console.log("anjir");
        setTimeout(() => timerSuccess.value = false, 5e3);
      }
    });
    onUnmounted(() => {
    });
    const commission = ref(null);
    watch(commission, (newAmount) => {
      commission.value = newAmount.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    });
    const amount = ref(props.history.gross_amount.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, "."));
    watch(amount, (newAmount) => {
      amount.value = newAmount.toString().replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            if (timerSuccess.value) {
              _push2(`<div class="pt-16 pb-12"${_scopeId}><main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8"${_scopeId}><div class="flex flex-shrink-0 justify-center"${_scopeId}>`);
              _push2(ssrRenderComponent(ApplicationLogoTitle, null, null, _parent2, _scopeId));
              _push2(`</div><div class="mt-5"${_scopeId}><div class="text-center justify-center"${_scopeId}><div class="px-4 sm:px-6 text-center text-gray-900 text-sm"${_scopeId}></div><h1 class="text-lg font-bold tracking-tight text-gray-900"${_scopeId}>Transaksi Berhasil</h1><p class="text-gray-500 text-sm"${_scopeId}>Kamu akan dialihkan dalam 5 detik</p><div class="mt-5 gap-x-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                as: "a",
                href: _ctx.route("history.show", props.history.order_id)
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
                  if (props.history.manual_account) {
                    _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.manual_account.bank)}</div>`);
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
                  _push2(`<div class="sm:col-span-2 flex sm:block justify-between gap-5"${_scopeId}><div class="text-sm"${_scopeId}>Keterangan</div><div class="text-sm font-semibold text-right sm:text-left"${_scopeId}>${ssrInterpolate(((_g = (_f = props.history) == null ? void 0 : _f.desc) == null ? void 0 : _g.replaceAll("/", " ")) ?? "-")}</div></div>`);
                }
                _push2(`<span class="my-2 border-t border-gray-600 border-dashed block sm:hidden"${_scopeId}></span><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Nominal</div><div class="text-sm font-semibold"${_scopeId}> Rp ${ssrInterpolate(props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount))}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Biaya Admin</div><div class="text-sm font-semibold"${_scopeId}> Rp ${ssrInterpolate(props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.admin_fee) : "0")}</div></div>`);
                if (props.history.agent_commission) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Komisi</div><div class="text-sm font-semibold"${_scopeId}> Rp ${ssrInterpolate(formatPrice(props.history.agent_commission))}</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (props.history.service_fee) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Biaya Layanan</div><div class="text-sm font-semibold"${_scopeId}> Rp ${ssrInterpolate(formatPrice(props.history.service_fee))}</div></div>`);
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
                    modelValue: commission.value,
                    "onUpdate:modelValue": ($event) => commission.value = $event,
                    type: "tel",
                    class: "mt-1 block w-full rounded-l-none",
                    min: Number(props.history.gross_amount),
                    required: ""
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                  _push2(ssrRenderComponent(_sfc_main$7, {
                    message: unref(form).errors.agent_commission || message.value,
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
                _push2(ssrRenderComponent(_sfc_main$4, {
                  as: "a",
                  href: _ctx.route("dashboard"),
                  class: "justify-center w-full border border-gray-600 dark:border-white nightwind-prevent"
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
                _push2(`</div><!--]-->`);
              } else if (props.history.status_id == 2) {
                _push2(`<!--[--><div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start"${_scopeId}>`);
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
                  _push2(`</div></div><!--]-->`);
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
                  _push2(`</div></div><!--]-->`);
                } else if (props.history.manual_account) {
                  _push2(`<!--[--><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Metode Pembayaran</div><div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.manual_account.bank)}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Atas Nama</div><div class="text-sm font-semibold uppercase"${_scopeId}>Agus Suryaman</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>No. Rekening</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.manual_account.payment_code)} `);
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
                            onClick: ($event) => unref(toClipboard)(props.history.manual_account.payment_code)
                          }, [
                            createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                          ], 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div></div><!--]-->`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<span class="my-2 border-t border-gray-600 border-dashed block sm:hidden"${_scopeId}></span><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Nominal</div><div class="text-sm font-semibold"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.history.amount))}</div></div>`);
                if (props.history.manual_account) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Kode Unik</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(Number(props.history.gross_amount) - Number(props.history.amount))}</div></div>`);
                } else {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Biaya Admin</div><div class="text-sm font-semibold"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.history.admin_fee))}</div></div>`);
                }
                _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Total</div><div class="text-sm font-semibold"${_scopeId}>Rp ${ssrInterpolate(formatPrice(props.history.gross_amount))}</div></div>`);
                if (props.history.manual_account) {
                  _push2(`<div class=""${_scopeId}><p class="text-xs text-gray-500"${_scopeId}>Untuk memudahkan transaksi harap transfer nominal beserta kode uniknya ya.</p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div>`);
                if (props.history.manual_account) {
                  _push2(`<div class="mt-5 grid gap-5"${_scopeId}>`);
                  if (props.manual_account && props.history.user_id == _ctx.$page.props.user.id) {
                    _push2(ssrRenderComponent(_sfc_main$4, {
                      class: "border border-gray-600 dark:border-white",
                      as: "outside",
                      href: "https://api.whatsapp.com/send?phone=6285839036717&text=Halo%20admin%20Waykapay.%20Saya%20ingin%20mengirimkan%20bukti%20transfer",
                      target: "_blank",
                      replace: ""
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(` Kirim bukti tf `);
                        } else {
                          return [
                            createTextVNode(" Kirim bukti tf ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  if (_ctx.$page.props.user.role_id == 1) {
                    _push2(`<div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start"${_scopeId}><h3 class="mt-1 text-lg font-bold leading-6 text-gray-900"${_scopeId}>Validasi</h3></div><div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6"${_scopeId}><form${_scopeId}><div class="grid grid-cols-6"${_scopeId}><div class="col-span-6 sm:col-span-3"${_scopeId}>`);
                    _push2(ssrRenderComponent(_sfc_main$5, {
                      for: "amount",
                      value: "Jumlah Validasi"
                    }, null, _parent2, _scopeId));
                    _push2(`<div class="flex"${_scopeId}><span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3"${_scopeId}> Rp </span>`);
                    _push2(ssrRenderComponent(_sfc_main$6, {
                      id: "amount",
                      modelValue: amount.value,
                      "onUpdate:modelValue": ($event) => amount.value = $event,
                      type: "tel",
                      class: "mt-1 block w-full rounded-l-none"
                    }, null, _parent2, _scopeId));
                    _push2(`</div>`);
                    _push2(ssrRenderComponent(_sfc_main$7, {
                      message: unref(form).errors.valid_amount || message.value,
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
                          _push3(` Validasi `);
                        } else {
                          return [
                            createTextVNode(" Validasi ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div></div></form></div></div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              } else {
                _push2(`<div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"${_scopeId}><div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start"${_scopeId}>`);
                _push2(ssrRenderComponent(ApplicationLogoTitle, { class: "block sm:hidden" }, null, _parent2, _scopeId));
                _push2(`<h3 class="mt-1 text-lg font-bold leading-6 text-gray-900"${_scopeId}>Transaksi ${ssrInterpolate(props.history.status)}</h3></div><div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6"${_scopeId}><div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900"${_scopeId}><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Tanggal</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(formattedDate(props.history.updated_at))}</div></div><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Kode Referensi</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.order_id)}</div></div><span class="my-2 border-t border-gray-600 border-dashed block sm:hidden"${_scopeId}></span><div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Kategori</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.category)}</div></div>`);
                if (props.history.category_id != 1) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Sumber Dana</div>`);
                  if (props.history.virtual_account) {
                    _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.virtual_account.bank)}</div>`);
                  } else if (props.history.wallet_account) {
                    _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.wallet_account.bank)}</div>`);
                  } else if (props.history.offline_account) {
                    _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.offline_account.bank)}</div>`);
                  } else if (props.history.manual_account) {
                    _push2(`<div class="text-sm font-semibold uppercase"${_scopeId}>${ssrInterpolate(props.history.manual_account.bank)}</div>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (props.history.category_id != 99 || props.history.category_id != 1) {
                  _push2(`<div class="sm:col-span-1 flex sm:block justify-between"${_scopeId}><div class="text-sm"${_scopeId}>Produk</div><div class="text-sm font-semibold"${_scopeId}>${ssrInterpolate(props.history.product_name)}</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (props.history.category_id != 99 || props.history.category_id != 1) {
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
                          as: "a",
                          href: _ctx.route("history.show", props.history.order_id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Lihat Transaksi ")
                          ]),
                          _: 1
                        }, 8, ["href"]),
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
                          }, toDisplayString(props.history.offline_account.bank), 1)) : createCommentVNode("", true),
                          props.history.manual_account ? (openBlock(), createBlock("div", {
                            key: 3,
                            class: "text-sm font-semibold uppercase"
                          }, toDisplayString(props.history.manual_account.bank), 1)) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true),
                        props.history.category_id == 99 ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Jenis Transaksi"),
                            createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString(props.history.product_name), 1)
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Bank Tujuan"),
                            createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString((_h = props.history.money_transfer) == null ? void 0 : _h.bank), 1)
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Nama Tujuan"),
                            createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString((_j = (_i = props.history.money_transfer) == null ? void 0 : _i.to) == null ? void 0 : _j.name), 1)
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "No. Rekening Tujuan"),
                            createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString((_l = (_k = props.history.money_transfer) == null ? void 0 : _k.to) == null ? void 0 : _l.phone), 1)
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
                          createVNode("div", { class: "text-sm font-semibold text-right sm:text-left" }, toDisplayString(((_n = (_m = props.history) == null ? void 0 : _m.desc) == null ? void 0 : _n.replaceAll("/", " ")) ?? "-"), 1)
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
                        props.history.service_fee ? (openBlock(), createBlock("div", {
                          key: 8,
                          class: "sm:col-span-1 flex sm:block justify-between"
                        }, [
                          createVNode("div", { class: "text-sm" }, "Biaya Layanan"),
                          createVNode("div", { class: "text-sm font-semibold" }, " Rp " + toDisplayString(formatPrice(props.history.service_fee)), 1)
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
                                modelValue: commission.value,
                                "onUpdate:modelValue": ($event) => commission.value = $event,
                                type: "tel",
                                class: "mt-1 block w-full rounded-l-none",
                                min: Number(props.history.gross_amount),
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "min"])
                            ]),
                            createVNode(_sfc_main$7, {
                              message: unref(form).errors.agent_commission || message.value,
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
                    createVNode(_sfc_main$4, {
                      as: "a",
                      href: _ctx.route("dashboard"),
                      class: "justify-center w-full border border-gray-600 dark:border-white nightwind-prevent"
                    }, {
                      default: withCtx(() => [
                        createVNode("i", { class: "fa-regular fa-home mr-2" }),
                        createTextVNode(" Beranda ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ], 64)) : props.history.status_id == 2 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createVNode("div", { class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300" }, [
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
                          ])
                        ], 64)) : props.history.manual_account ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Metode Pembayaran"),
                            createVNode("div", { class: "text-sm font-semibold uppercase" }, toDisplayString(props.history.manual_account.bank), 1)
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "Atas Nama"),
                            createVNode("div", { class: "text-sm font-semibold uppercase" }, "Agus Suryaman")
                          ]),
                          createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                            createVNode("div", { class: "text-sm" }, "No. Rekening"),
                            createVNode("div", { class: "text-sm font-semibold" }, [
                              createTextVNode(toDisplayString(props.history.manual_account.payment_code) + " ", 1),
                              createVNode(unref(Popper), {
                                class: "text-sm text-primary-700 font-normal lowercase",
                                content: "Sukses Copy",
                                arrow: "",
                                placement: "right-end"
                              }, {
                                default: withCtx(() => [
                                  createVNode("button", {
                                    class: "",
                                    onClick: ($event) => unref(toClipboard)(props.history.manual_account.payment_code)
                                  }, [
                                    createVNode("i", { class: "fa-duotone fa-paste ml-2" })
                                  ], 8, ["onClick"])
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ], 64)) : createCommentVNode("", true),
                        createVNode("span", { class: "my-2 border-t border-gray-600 border-dashed block sm:hidden" }),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Nominal"),
                          createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(formatPrice(props.history.amount)), 1)
                        ]),
                        props.history.manual_account ? (openBlock(), createBlock("div", {
                          key: 4,
                          class: "sm:col-span-1 flex sm:block justify-between"
                        }, [
                          createVNode("div", { class: "text-sm" }, "Kode Unik"),
                          createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(Number(props.history.gross_amount) - Number(props.history.amount)), 1)
                        ])) : (openBlock(), createBlock("div", {
                          key: 5,
                          class: "sm:col-span-1 flex sm:block justify-between"
                        }, [
                          createVNode("div", { class: "text-sm" }, "Biaya Admin"),
                          createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(formatPrice(props.history.admin_fee)), 1)
                        ])),
                        createVNode("div", { class: "sm:col-span-1 flex sm:block justify-between" }, [
                          createVNode("div", { class: "text-sm" }, "Total"),
                          createVNode("div", { class: "text-sm font-semibold" }, "Rp " + toDisplayString(formatPrice(props.history.gross_amount)), 1)
                        ]),
                        props.history.manual_account ? (openBlock(), createBlock("div", {
                          key: 6,
                          class: ""
                        }, [
                          createVNode("p", { class: "text-xs text-gray-500" }, "Untuk memudahkan transaksi harap transfer nominal beserta kode uniknya ya.")
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  props.history.manual_account ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-5 grid gap-5"
                  }, [
                    props.manual_account && props.history.user_id == _ctx.$page.props.user.id ? (openBlock(), createBlock(_sfc_main$4, {
                      key: 0,
                      class: "border border-gray-600 dark:border-white",
                      as: "outside",
                      href: "https://api.whatsapp.com/send?phone=6285839036717&text=Halo%20admin%20Waykapay.%20Saya%20ingin%20mengirimkan%20bukti%20transfer",
                      target: "_blank",
                      replace: ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Kirim bukti tf ")
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    _ctx.$page.props.user.role_id == 1 ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"
                    }, [
                      createVNode("div", { class: "px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start" }, [
                        createVNode("h3", { class: "mt-1 text-lg font-bold leading-6 text-gray-900" }, "Validasi")
                      ]),
                      createVNode("div", { class: "border-t border-gray-600 border-dashed px-4 py-5 sm:px-6" }, [
                        createVNode("form", {
                          onSubmit: withModifiers(validate, ["prevent"])
                        }, [
                          createVNode("div", { class: "grid grid-cols-6" }, [
                            createVNode("div", { class: "col-span-6 sm:col-span-3" }, [
                              createVNode(_sfc_main$5, {
                                for: "amount",
                                value: "Jumlah Validasi"
                              }),
                              createVNode("div", { class: "flex" }, [
                                createVNode("span", { class: "flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3" }, " Rp "),
                                createVNode(_sfc_main$6, {
                                  id: "amount",
                                  modelValue: amount.value,
                                  "onUpdate:modelValue": ($event) => amount.value = $event,
                                  type: "tel",
                                  class: "mt-1 block w-full rounded-l-none"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(_sfc_main$7, {
                                message: unref(form).errors.valid_amount || message.value,
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
                                  createTextVNode(" Validasi ")
                                ]),
                                _: 1
                              }, 8, ["class", "disabled"])
                            ])
                          ])
                        ], 32)
                      ])
                    ])) : createCommentVNode("", true)
                  ])) : createCommentVNode("", true)
                ], 64)) : (openBlock(), createBlock("div", {
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
                      props.history.category_id != 1 ? (openBlock(), createBlock("div", {
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
                        }, toDisplayString(props.history.offline_account.bank), 1)) : props.history.manual_account ? (openBlock(), createBlock("div", {
                          key: 3,
                          class: "text-sm font-semibold uppercase"
                        }, toDisplayString(props.history.manual_account.bank), 1)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      props.history.category_id != 99 || props.history.category_id != 1 ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "sm:col-span-1 flex sm:block justify-between"
                      }, [
                        createVNode("div", { class: "text-sm" }, "Produk"),
                        createVNode("div", { class: "text-sm font-semibold" }, toDisplayString(props.history.product_name), 1)
                      ])) : createCommentVNode("", true),
                      props.history.category_id != 99 || props.history.category_id != 1 ? (openBlock(), createBlock("div", {
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
