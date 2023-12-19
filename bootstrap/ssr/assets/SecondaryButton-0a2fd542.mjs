import { computed, unref, mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    },
    as: String,
    href: String
  },
  setup(__props) {
    const classes = computed(() => {
      return "inline-flex items-center px-4 py-2 rounded-full font-semibold text-base text-gray-900 dark:text-white hover:text-gray-500 active:text-gray-800 disabled:opacity-25 transition nightwind-prevent";
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.as === "a") {
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
      } else if (__props.as === "outside") {
        _push(`<a${ssrRenderAttrs(mergeProps({
          href: __props.href,
          class: classes.value
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        _push(`<button${ssrRenderAttrs(mergeProps({
          type: __props.type,
          class: classes.value
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
