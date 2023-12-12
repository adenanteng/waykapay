import { computed, mergeProps, unref, withCtx, createVNode, createTextVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "NavLinkAlt",
  __ssrInlineRender: true,
  props: {
    href: String,
    active: Boolean,
    icon: String,
    flyout: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? " text-primary-700 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10" : " text-gray-900 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10";
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.flyout) {
        _push(`<button${ssrRenderAttrs(mergeProps({ class: classes.value }, _attrs))}><div class="flex items-center gap-2"><i class="${ssrRenderClass([__props.icon, "fa-duotone"])}"></i> `);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div></button>`);
      } else {
        _push(ssrRenderComponent(unref(Link), mergeProps({
          href: __props.href,
          class: classes.value
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex items-center gap-2"${_scopeId}><i class="${ssrRenderClass([__props.icon, "fa-duotone"])}"${_scopeId}></i> `);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "flex items-center gap-2" }, [
                  createVNode("i", {
                    class: ["fa-duotone", __props.icon]
                  }, null, 2),
                  createTextVNode(),
                  renderSlot(_ctx.$slots, "default")
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLinkAlt.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
