import { ref, watch, computed, useSlots, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./OnlineStatus-589db755.mjs";
import { _ as _sfc_main$2 } from "./Banner-24bf2dbf.mjs";
import "./NavLinkAlt-d12ba1c8.mjs";
import "./SecondaryButton-0a2fd542.mjs";
const _sfc_main = {
  __name: "BlankLayout",
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
    const darkMode = ref(false);
    if (typeof window !== "undefined") {
      darkMode.value = JSON.parse(localStorage.getItem("darkmode")) ?? false;
      watch(darkMode, (newDarkMode) => {
        console.log(`darkmode is ${newDarkMode}`);
        localStorage.setItem("darkmode", JSON.stringify(newDarkMode));
      });
    }
    ref(false);
    computed(() => !!useSlots().action);
    computed(() => !!useSlots().previous);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["transition duration-1000", darkMode.value ? "nightwind dark" : "nightwind"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(Head), {
        title: __props.title + " - " + ((_a = _ctx.$page.props.appSetting) == null ? void 0 : _a.name)
      }, null, _parent));
      _push(`<div class="sticky top-0 z-50">`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="sticky top-0 z-50">`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div><div class="min-h-screen bg-gray-100 bg-glass bg-fixed flex justify-center items-center">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/BlankLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
