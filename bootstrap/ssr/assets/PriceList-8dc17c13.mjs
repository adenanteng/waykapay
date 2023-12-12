import { ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import "moment/moment.js";
import { useSSRContext } from "vue";
import "@inertiajs/vue3";
import _sfc_main$2 from "./FormatEmoney-5c125b37.mjs";
import _sfc_main$1 from "./FormatPulsa-1c36cdb3.mjs";
import "./Loading-6d21ae0a.mjs";
import _sfc_main$3 from "./FormatVoucher-0a8688fb.mjs";
import _sfc_main$4 from "./FormatGames-e03a517e.mjs";
import _sfc_main$5 from "./FormatTV-87feeb4d.mjs";
import _sfc_main$6 from "./FormatPln-bc179f97.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
const _sfc_main = {
  __name: "PriceList",
  __ssrInlineRender: true,
  props: {
    list: Object,
    slug: String,
    title: String
  },
  setup(__props) {
    const props = __props;
    function sort(arr) {
      return arr.slice().sort(function(a, b) {
        return a.price - b.price;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(props.list, (data, index) => {
        _push(`<div><h3 class="text-gray-900 text-sm font-medium mx-5 mt-5 mb-2">${ssrInterpolate(props.title)} ${ssrInterpolate(index)}</h3><div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300"><ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600"><!--[-->`);
        ssrRenderList(sort(data), (item) => {
          _push(`<li><div class="relative px-6 py-5 flex items-center space-x-3"><div class="flex-shrink-0"><img class="h-6"${ssrRenderAttr("src", "/img/vendor/" + item.brand + ".svg")} alt=""></div><div class="flex-1 min-w-0"><div class="focus:outline-none text-left"><span class="absolute inset-0" aria-hidden="true"></span><p class="text-sm font-medium text-gray-900">${ssrInterpolate(item.product_name)}</p><p class="text-sm text-gray-500 truncate">`);
          if (props.slug == "pulsa") {
            _push(ssrRenderComponent(_sfc_main$1, {
              price: item.price
            }, null, _parent));
          } else if (props.slug == "emoney") {
            _push(ssrRenderComponent(_sfc_main$2, {
              price: item.price
            }, null, _parent));
          } else if (props.slug == "voucher") {
            _push(ssrRenderComponent(_sfc_main$3, {
              price: item.price
            }, null, _parent));
          } else if (props.slug == "games") {
            _push(ssrRenderComponent(_sfc_main$4, {
              price: item.price
            }, null, _parent));
          } else if (props.slug == "tv") {
            _push(ssrRenderComponent(_sfc_main$5, {
              price: item.price
            }, null, _parent));
          } else if (props.slug == "pln") {
            _push(ssrRenderComponent(_sfc_main$6, {
              price: item.price
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</p></div></div></div></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pricing/Partials/PriceList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
