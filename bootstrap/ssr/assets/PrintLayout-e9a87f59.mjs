import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "PrintLayout",
  __ssrInlineRender: true,
  props: {
    title: String,
    darkMode: Boolean,
    greeting: String,
    name: String,
    desc: String,
    avatar: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "transition duration-1000" }, _attrs))}>`);
      if (_ctx.$page.props.appSetting) {
        _push(ssrRenderComponent(unref(Head), {
          title: __props.title + " - " + _ctx.$page.props.appSetting.name
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      }
      _push(`<div class="flex justify-center items-center max-w-sm mx-auto">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/PrintLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
