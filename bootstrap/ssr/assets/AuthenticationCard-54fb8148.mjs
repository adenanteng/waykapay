import { ref, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import "./Banner-24bf2dbf.mjs";
const _sfc_main = {
  __name: "AuthenticationCard",
  __ssrInlineRender: true,
  props: {
    darkMode: Boolean
  },
  setup(__props) {
    const show = ref(true);
    computed(() => {
      var _a;
      return ((_a = usePage().props.jetstream.flash) == null ? void 0 : _a.bannerStyle) || "success";
    });
    const message = computed(() => {
      var _a;
      return ((_a = usePage().props.jetstream.flash) == null ? void 0 : _a.banner) || "";
    });
    watch(message, async () => {
      show.value = true;
    });
    const darkMode = ref(false);
    if (typeof window !== "undefined") {
      darkMode.value = JSON.parse(localStorage.getItem("darkmode")) ?? false;
      watch(darkMode, (newDarkMode) => {
        console.log(`darkmode is ${newDarkMode}`);
        localStorage.setItem("darkmode", JSON.stringify(newDarkMode));
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["", darkMode.value ? "nightwind dark" : "nightwind"]
      }, _attrs))}><div class="min-h-screen flex bg-white relative isolate"><div class="fixed inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-75 sm:left-[calc(50%-30rem)]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"></div></div><div class="fixed inset-x-0 -bottom-32 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true"><div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-75 sm:left-[calc(50%+36rem)]" style="${ssrRenderStyle({ "clip-path": "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" })}"></div></div><div class="min-h-screen flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"><div class="mx-auto w-full max-w-sm lg:w-96 py-10"><div><button>`);
      ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push, _parent);
      _push(`</button><h2 class="mt-6 text-3xl font-extrabold text-gray-900">Selamat Datang <br> di Waykapay</h2><p class="mt-2 text-sm text-gray-600">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</p></div><div class="mt-8"><div class="mb-5">`);
      if (show.value && message.value) {
        _push(`<div class="bg-red-700 rounded-3xl"><div class="max-w-screen-xl mx-auto py-3 px-3"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center min-w-0"><span class="flex bg-red-600 p-2 rounded-3xl"><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg></span><p class="ml-3 font-medium text-sm text-white">${ssrInterpolate(message.value)}</p></div><div class="shrink-0 sm:ml-3 p-2"><button type="button" class="-mr-1 flex p-2 hover:bg-red-600 focus:bg-red-600 rounded-3xl focus:outline-none sm:-mr-2 transition" aria-label="Dismiss"><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div></div><div class="hidden lg:block relative w-0 flex-1"><img class="absolute inset-0 h-full w-full object-cover" src="/img/minion.jpg" alt=""></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AuthenticationCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
