import { ref, watch, computed, useSlots, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderSlot } from "vue/server-renderer";
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
      _push(`</div><div class="min-h-screen bg-white relative isolate flex justify-center items-center"><div class="fixed inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-75 sm:left-[calc(50%-30rem)]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"></div></div><div class="fixed inset-x-0 -bottom-32 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-75 sm:left-[calc(50%+36rem)]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"></div></div>`);
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
