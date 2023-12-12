import { ssrInterpolate } from "vue/server-renderer";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "FormatGames",
  __ssrInlineRender: true,
  props: {
    price: Number
  },
  setup(__props) {
    const props = __props;
    function formatPrice(value) {
      let val = (value / 1).toFixed(0).replace(".", "");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      if (Number(props.price) < 1e3) {
        _push(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(props.price)))}<!--]-->`);
      } else if (Number(props.price) < 25e3) {
        _push(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(props.price) + Number(props.fee_25)))}<!--]-->`);
      } else if (Number(props.price) < 5e4) {
        _push(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(props.price) + Number((_a = _ctx.$page.props.appSetting) == null ? void 0 : _a.games_50)))}<!--]-->`);
      } else if (Number(props.price) < 75e3) {
        _push(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(props.price) + Number((_b = _ctx.$page.props.appSetting) == null ? void 0 : _b.games_75)))}<!--]-->`);
      } else if (Number(props.price) < 1e5) {
        _push(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(props.price) + Number((_c = _ctx.$page.props.appSetting) == null ? void 0 : _c.games_100)))}<!--]-->`);
      } else if (Number(props.price) < 2e5) {
        _push(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(props.price) + Number((_d = _ctx.$page.props.appSetting) == null ? void 0 : _d.games_200)))}<!--]-->`);
      } else if (Number(props.price) < 5e5) {
        _push(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(props.price) + Number((_e = _ctx.$page.props.appSetting) == null ? void 0 : _e.games_500)))}<!--]-->`);
      } else if (Number(props.price) < 1e6) {
        _push(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(props.price) + Number((_f = _ctx.$page.props.appSetting) == null ? void 0 : _f.games_1000)))}<!--]-->`);
      } else {
        _push(`<!--[--> Rp ${ssrInterpolate(formatPrice(Number(props.price) + Number((_g = _ctx.$page.props.appSetting) == null ? void 0 : _g.games_max)))}<!--]-->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Pricing/Partials/FormatGames.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
