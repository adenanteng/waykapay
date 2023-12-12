import { defineComponent, h, mergeProps, withCtx, createTextVNode, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderVNode, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./LandingLayout-176bc508.mjs";
import { _ as _sfc_main$2 } from "./PrimaryButton-3137fc48.mjs";
import { _ as _sfc_main$3 } from "./SecondaryButton-70b2499c.mjs";
import "./ApplicationLogo-6cbfcc6b.mjs";
import { InboxIcon, UsersIcon, TrashIcon, PencilSquareIcon, DocumentChartBarIcon, ArrowUturnLeftIcon, ChatBubbleLeftEllipsisIcon, HeartIcon } from "@heroicons/vue/24/outline";
import "@inertiajs/vue3";
import "nightwind/helper.js";
import "./OnlineStatus-589db755.mjs";
import "./_plugin-vue_export-helper-cc2b3d55.mjs";
import "@headlessui/vue";
import "@vueuse/core";
import "./Banner-24bf2dbf.mjs";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    const features = [
      {
        name: "Unlimited Inboxes",
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: InboxIcon
      },
      {
        name: "Manage Team Members",
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: UsersIcon
      },
      {
        name: "Spam Report",
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: TrashIcon
      },
      {
        name: "Compose in Markdown",
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: PencilSquareIcon
      },
      {
        name: "Team Reporting",
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: DocumentChartBarIcon
      },
      {
        name: "Saved Replies",
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: ArrowUturnLeftIcon
      },
      {
        name: "Email Commenting",
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: ChatBubbleLeftEllipsisIcon
      },
      {
        name: "Connect with Customers",
        description: "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",
        icon: HeartIcon
      }
    ];
    const metrics = [
      { id: 1, stat: "8K+", emphasis: "Companies", rest: "use laoreet amet lacus nibh integer quis." },
      { id: 2, stat: "25K+", emphasis: "Countries around the globe", rest: "lacus nibh integer quis." },
      { id: 3, stat: "98%", emphasis: "Customer satisfaction", rest: "laoreet amet lacus nibh integer quis." },
      { id: 4, stat: "12M+", emphasis: "Issues resolved", rest: "lacus nibh integer quis." }
    ];
    const footerNavigation = {
      solutions: [
        { name: "Marketing", href: "#" },
        { name: "Analytics", href: "#" },
        { name: "Commerce", href: "#" },
        { name: "Insights", href: "#" }
      ],
      support: [
        { name: "Pricing", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Guides", href: "#" },
        { name: "API Status", href: "#" }
      ],
      company: [
        { name: "About", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Jobs", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" }
      ],
      legal: [
        { name: "Claim", href: "#" },
        { name: "Privacy", href: "#" },
        { name: "Terms", href: "#" }
      ],
      social: [
        {
          name: "Facebook",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
                "clip-rule": "evenodd"
              })
            ])
          })
        },
        {
          name: "Instagram",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
                "clip-rule": "evenodd"
              })
            ])
          })
        },
        {
          name: "Twitter",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              })
            ])
          })
        },
        {
          name: "GitHub",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
                "clip-rule": "evenodd"
              })
            ])
          })
        },
        {
          name: "Dribbble",
          href: "#",
          icon: defineComponent({
            render: () => h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
              h("path", {
                "fill-rule": "evenodd",
                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
                "clip-rule": "evenodd"
              })
            ])
          })
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        title: "Beranda",
        desc: "Lorem ipsum"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<main${_scopeId}><div class="relative pt-24 sm:pt-32"${_scopeId}><div class="mx-auto max-w-7xl px-3 xl:px-0"${_scopeId}><div class="relative shadow-xl sm:overflow-hidden rounded-3xl"${_scopeId}><div class="absolute inset-0"${_scopeId}><div class="absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-400 mix-blend-multiply rounded-3xl"${_scopeId}></div></div><div class="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8"${_scopeId}><h1 class="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"${_scopeId}><span class="block text-white nightwind-prevent"${_scopeId}>Waykapay</span><span class="block text-primary-400"${_scopeId}>Semua ada</span></h1><p class="mx-auto mt-6 max-w-lg text-center text-lg text-primary-200 sm:max-w-3xl"${_scopeId}>Semua kemudahan ada disini.</p><div class="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center"${_scopeId}><div class="flex justify-center items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              as: "a",
              href: _ctx.route("dashboard")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Dashboard`);
                } else {
                  return [
                    createTextVNode("Dashboard")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div></div></div><div class=""${_scopeId}><div class="mx-auto max-w-7xl py-16 px-6 lg:px-8"${_scopeId}><p class="text-center text-base font-semibold text-gray-500"${_scopeId}>Topup e-wallet, games, voucher, internet dan isi pulsa</p><div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"${_scopeId}><div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"${_scopeId}><img class="h-12" src="/img/vendor/AXIS.svg" alt=""${_scopeId}></div><div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"${_scopeId}><img class="h-12" src="/img/vendor/INDIHOME.svg" alt=""${_scopeId}></div><div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"${_scopeId}><img class="h-12" src="/img/games/GOOGLE%20PLAY%20INDONESIA.png" alt=""${_scopeId}></div><div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1"${_scopeId}><img class="h-12" src="/img/vendor/SPOTIFY.svg" alt=""${_scopeId}></div><div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1"${_scopeId}><img class="h-12" src="/img/vendor/DANA.svg" alt=""${_scopeId}></div></div></div></div><div class="relative overflow-hidden pt-16 pb-32"${_scopeId}><div class="relative"${_scopeId}><div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"${_scopeId}><div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0"${_scopeId}><div${_scopeId}><div${_scopeId}><span class="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-primary-600"${_scopeId}><i class="fa-regular fa-inbox text-xl text-white nightwind-prevent"${_scopeId}></i></span></div><div class="mt-6"${_scopeId}><h2 class="text-3xl font-bold tracking-tight text-gray-900"${_scopeId}>Stay on top of customer support</h2><p class="mt-4 text-lg text-gray-500"${_scopeId}>Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.</p><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Get started`);
                } else {
                  return [
                    createTextVNode("Get started")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div><div class="mt-8 border-t border-gray-200 pt-6"${_scopeId}><blockquote${_scopeId}><div${_scopeId}><p class="text-base text-gray-500"${_scopeId}>“Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.”</p></div><footer class="mt-3"${_scopeId}><div class="flex items-center space-x-3"${_scopeId}><div class="flex-shrink-0"${_scopeId}><img class="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=8&amp;w=1024&amp;h=1024&amp;q=80" alt=""${_scopeId}></div><div class="text-base font-medium text-gray-700"${_scopeId}>Marcia Hill, Digital Marketing Manager</div></div></footer></blockquote></div></div><div class="mt-12 sm:mt-16 lg:mt-0"${_scopeId}><div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0"${_scopeId}><img class="w-full rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg" alt="Inbox user interface"${_scopeId}></div></div></div></div><div class="mt-24"${_scopeId}><div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8"${_scopeId}><div class="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0"${_scopeId}><div${_scopeId}><div${_scopeId}><span class="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-primary-600"${_scopeId}><i class="fa-regular fa-inbox text-xl text-white nightwind-prevent"${_scopeId}></i></span></div><div class="mt-6"${_scopeId}><h2 class="text-3xl font-bold tracking-tight text-gray-900"${_scopeId}>Better understand your customers</h2><p class="mt-4 text-lg text-gray-500"${_scopeId}>Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra.</p><div class="mt-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Get started`);
                } else {
                  return [
                    createTextVNode("Get started")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></div><div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0"${_scopeId}><div class="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0"${_scopeId}><img class="w-full rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg" alt="Customer profile user interface"${_scopeId}></div></div></div></div></div><div class="bg-gradient-to-r from-blue-800 to-primary-700 nightwind-prevent-block"${_scopeId}><div class="mx-auto max-w-4xl py-16 px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24"${_scopeId}><h2 class="text-3xl font-bold tracking-tight text-white"${_scopeId}>Inbox support built for efficiency</h2><p class="mt-4 max-w-3xl text-lg text-blue-200"${_scopeId}>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.</p><div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16"${_scopeId}><!--[-->`);
            ssrRenderList(features, (feature) => {
              _push2(`<div${_scopeId}><div${_scopeId}><span class="flex h-12 w-12 items-center justify-center rounded-3xl bg-white bg-opacity-10"${_scopeId}>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(feature.icon), {
                class: "h-6 w-6 text-white",
                "aria-hidden": "true"
              }, null), _parent2, _scopeId);
              _push2(`</span></div><div class="mt-6"${_scopeId}><h3 class="text-lg font-medium text-white"${_scopeId}>${ssrInterpolate(feature.name)}</h3><p class="mt-2 text-base text-blue-200"${_scopeId}>${ssrInterpolate(feature.description)}</p></div></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="relative bg-gray-900 nightwind-prevent nightwind-prevent-block"${_scopeId}><div class="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full"${_scopeId}><div class="h-full w-full xl:grid xl:grid-cols-2"${_scopeId}><div class="h-full xl:relative xl:col-start-2"${_scopeId}><img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2830&amp;q=80&amp;sat=-100" alt="People working on laptops"${_scopeId}><div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"${_scopeId}></div></div></div></div><div class="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8"${_scopeId}><div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24"${_scopeId}><h2 class="text-base font-semibold"${_scopeId}><span class="bg-gradient-to-r from-blue-300 to-primary-300 bg-clip-text text-transparent"${_scopeId}>Valuable Metrics</span></h2><p class="mt-3 text-3xl font-bold tracking-tight text-white"${_scopeId}>Get actionable data that will help grow your business</p><p class="mt-5 text-lg text-gray-300"${_scopeId}>Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.</p><div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2"${_scopeId}><!--[-->`);
            ssrRenderList(metrics, (item) => {
              _push2(`<p${_scopeId}><span class="block text-2xl font-bold text-white"${_scopeId}>${ssrInterpolate(item.stat)}</span><span class="mt-1 block text-base text-gray-300"${_scopeId}><span class="font-medium text-white"${_scopeId}>${ssrInterpolate(item.emphasis)}</span> ${ssrInterpolate(item.rest)}</span></p>`);
            });
            _push2(`<!--]--></div></div></div></div><div class="bg-white"${_scopeId}><div class="mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8"${_scopeId}><h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl"${_scopeId}><span class="block"${_scopeId}>Ready to get started?</span><span class="-mb-1 block bg-gradient-to-r from-blue-600 to-primary-600 bg-clip-text pb-1 text-transparent"${_scopeId}>Get in touch or create an account.</span></h2><div class="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Learn more`);
                } else {
                  return [
                    createTextVNode("Learn more")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Get started`);
                } else {
                  return [
                    createTextVNode("Get started")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></div></main><footer class="bg-white" aria-labelledby="footer-heading"${_scopeId}><h2 id="footer-heading" class="sr-only"${_scopeId}>Footer</h2><div class="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8 lg:pt-24"${_scopeId}><div class="xl:grid xl:grid-cols-3 xl:gap-8"${_scopeId}><div class="grid grid-cols-2 gap-8 xl:col-span-2"${_scopeId}><div class="md:grid md:grid-cols-2 md:gap-8"${_scopeId}><div${_scopeId}><h3 class="text-base font-medium text-gray-900"${_scopeId}>Solutions</h3><ul role="list" class="mt-4 space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(footerNavigation.solutions, (item) => {
              _push2(`<li${_scopeId}><a${ssrRenderAttr("href", item.href)} class="text-base text-gray-500 hover:text-gray-900"${_scopeId}>${ssrInterpolate(item.name)}</a></li>`);
            });
            _push2(`<!--]--></ul></div><div class="mt-12 md:mt-0"${_scopeId}><h3 class="text-base font-medium text-gray-900"${_scopeId}>Support</h3><ul role="list" class="mt-4 space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(footerNavigation.support, (item) => {
              _push2(`<li${_scopeId}><a${ssrRenderAttr("href", item.href)} class="text-base text-gray-500 hover:text-gray-900"${_scopeId}>${ssrInterpolate(item.name)}</a></li>`);
            });
            _push2(`<!--]--></ul></div></div><div class="md:grid md:grid-cols-2 md:gap-8"${_scopeId}><div${_scopeId}><h3 class="text-base font-medium text-gray-900"${_scopeId}>Company</h3><ul role="list" class="mt-4 space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(footerNavigation.company, (item) => {
              _push2(`<li${_scopeId}><a${ssrRenderAttr("href", item.href)} class="text-base text-gray-500 hover:text-gray-900"${_scopeId}>${ssrInterpolate(item.name)}</a></li>`);
            });
            _push2(`<!--]--></ul></div><div class="mt-12 md:mt-0"${_scopeId}><h3 class="text-base font-medium text-gray-900"${_scopeId}>Legal</h3><ul role="list" class="mt-4 space-y-4"${_scopeId}><!--[-->`);
            ssrRenderList(footerNavigation.legal, (item) => {
              _push2(`<li${_scopeId}><a${ssrRenderAttr("href", item.href)} class="text-base text-gray-500 hover:text-gray-900"${_scopeId}>${ssrInterpolate(item.name)}</a></li>`);
            });
            _push2(`<!--]--></ul></div></div></div><div class="mt-12 xl:mt-0"${_scopeId}><h3 class="text-base font-medium text-gray-900"${_scopeId}>Waykapay</h3><p class="mt-4 text-base text-gray-500"${_scopeId}>CV Cahaya Matahari Dunia</p><p class="mt-4 text-sm text-gray-500"${_scopeId}>Way Kanan, Lampung</p></div></div><div class="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16"${_scopeId}><div class="flex space-x-6 md:order-2"${_scopeId}><!--[-->`);
            ssrRenderList(footerNavigation.social, (item) => {
              _push2(`<a${ssrRenderAttr("href", item.href)} class="text-gray-400 hover:text-gray-500"${_scopeId}><span class="sr-only"${_scopeId}>${ssrInterpolate(item.name)}</span>`);
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), {
                class: "h-6 w-6",
                "aria-hidden": "true"
              }, null), _parent2, _scopeId);
              _push2(`</a>`);
            });
            _push2(`<!--]--></div><p class="mt-8 text-base text-gray-400 md:order-1 md:mt-0"${_scopeId}>© 2023 Waykapay. All rights reserved.</p></div></div></footer>`);
          } else {
            return [
              createVNode("main", null, [
                createVNode("div", { class: "relative pt-24 sm:pt-32" }, [
                  createVNode("div", { class: "mx-auto max-w-7xl px-3 xl:px-0" }, [
                    createVNode("div", { class: "relative shadow-xl sm:overflow-hidden rounded-3xl" }, [
                      createVNode("div", { class: "absolute inset-0" }, [
                        createVNode("div", { class: "absolute inset-0 bg-gradient-to-r from-primary-800 to-primary-400 mix-blend-multiply rounded-3xl" })
                      ]),
                      createVNode("div", { class: "relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8" }, [
                        createVNode("h1", { class: "text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl" }, [
                          createVNode("span", { class: "block text-white nightwind-prevent" }, "Waykapay"),
                          createVNode("span", { class: "block text-primary-400" }, "Semua ada")
                        ]),
                        createVNode("p", { class: "mx-auto mt-6 max-w-lg text-center text-lg text-primary-200 sm:max-w-3xl" }, "Semua kemudahan ada disini."),
                        createVNode("div", { class: "mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center" }, [
                          createVNode("div", { class: "flex justify-center items-center" }, [
                            createVNode(_sfc_main$2, {
                              as: "a",
                              href: _ctx.route("dashboard")
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Dashboard")
                              ]),
                              _: 1
                            }, 8, ["href"])
                          ])
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "" }, [
                  createVNode("div", { class: "mx-auto max-w-7xl py-16 px-6 lg:px-8" }, [
                    createVNode("p", { class: "text-center text-base font-semibold text-gray-500" }, "Topup e-wallet, games, voucher, internet dan isi pulsa"),
                    createVNode("div", { class: "mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5" }, [
                      createVNode("div", { class: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1" }, [
                        createVNode("img", {
                          class: "h-12",
                          src: "/img/vendor/AXIS.svg",
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1" }, [
                        createVNode("img", {
                          class: "h-12",
                          src: "/img/vendor/INDIHOME.svg",
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "col-span-1 flex justify-center md:col-span-2 lg:col-span-1" }, [
                        createVNode("img", {
                          class: "h-12",
                          src: "/img/games/GOOGLE%20PLAY%20INDONESIA.png",
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1" }, [
                        createVNode("img", {
                          class: "h-12",
                          src: "/img/vendor/SPOTIFY.svg",
                          alt: ""
                        })
                      ]),
                      createVNode("div", { class: "col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1" }, [
                        createVNode("img", {
                          class: "h-12",
                          src: "/img/vendor/DANA.svg",
                          alt: ""
                        })
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "relative overflow-hidden pt-16 pb-32" }, [
                  createVNode("div", { class: "relative" }, [
                    createVNode("div", { class: "lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8" }, [
                      createVNode("div", { class: "mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0" }, [
                        createVNode("div", null, [
                          createVNode("div", null, [
                            createVNode("span", { class: "flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-primary-600" }, [
                              createVNode("i", { class: "fa-regular fa-inbox text-xl text-white nightwind-prevent" })
                            ])
                          ]),
                          createVNode("div", { class: "mt-6" }, [
                            createVNode("h2", { class: "text-3xl font-bold tracking-tight text-gray-900" }, "Stay on top of customer support"),
                            createVNode("p", { class: "mt-4 text-lg text-gray-500" }, "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."),
                            createVNode("div", { class: "mt-6" }, [
                              createVNode(_sfc_main$2, null, {
                                default: withCtx(() => [
                                  createTextVNode("Get started")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "mt-8 border-t border-gray-200 pt-6" }, [
                          createVNode("blockquote", null, [
                            createVNode("div", null, [
                              createVNode("p", { class: "text-base text-gray-500" }, "“Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.”")
                            ]),
                            createVNode("footer", { class: "mt-3" }, [
                              createVNode("div", { class: "flex items-center space-x-3" }, [
                                createVNode("div", { class: "flex-shrink-0" }, [
                                  createVNode("img", {
                                    class: "h-6 w-6 rounded-full",
                                    src: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
                                    alt: ""
                                  })
                                ]),
                                createVNode("div", { class: "text-base font-medium text-gray-700" }, "Marcia Hill, Digital Marketing Manager")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mt-12 sm:mt-16 lg:mt-0" }, [
                        createVNode("div", { class: "-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0" }, [
                          createVNode("img", {
                            class: "w-full rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none",
                            src: "https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg",
                            alt: "Inbox user interface"
                          })
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mt-24" }, [
                    createVNode("div", { class: "lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8" }, [
                      createVNode("div", { class: "mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0" }, [
                        createVNode("div", null, [
                          createVNode("div", null, [
                            createVNode("span", { class: "flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-primary-600" }, [
                              createVNode("i", { class: "fa-regular fa-inbox text-xl text-white nightwind-prevent" })
                            ])
                          ]),
                          createVNode("div", { class: "mt-6" }, [
                            createVNode("h2", { class: "text-3xl font-bold tracking-tight text-gray-900" }, "Better understand your customers"),
                            createVNode("p", { class: "mt-4 text-lg text-gray-500" }, "Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."),
                            createVNode("div", { class: "mt-6" }, [
                              createVNode(_sfc_main$2, null, {
                                default: withCtx(() => [
                                  createTextVNode("Get started")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "mt-12 sm:mt-16 lg:col-start-1 lg:mt-0" }, [
                        createVNode("div", { class: "-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0" }, [
                          createVNode("img", {
                            class: "w-full rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none",
                            src: "https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg",
                            alt: "Customer profile user interface"
                          })
                        ])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-gradient-to-r from-blue-800 to-primary-700 nightwind-prevent-block" }, [
                  createVNode("div", { class: "mx-auto max-w-4xl py-16 px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24" }, [
                    createVNode("h2", { class: "text-3xl font-bold tracking-tight text-white" }, "Inbox support built for efficiency"),
                    createVNode("p", { class: "mt-4 max-w-3xl text-lg text-blue-200" }, "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in."),
                    createVNode("div", { class: "mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(features, (feature) => {
                        return createVNode("div", {
                          key: feature.name
                        }, [
                          createVNode("div", null, [
                            createVNode("span", { class: "flex h-12 w-12 items-center justify-center rounded-3xl bg-white bg-opacity-10" }, [
                              (openBlock(), createBlock(resolveDynamicComponent(feature.icon), {
                                class: "h-6 w-6 text-white",
                                "aria-hidden": "true"
                              }))
                            ])
                          ]),
                          createVNode("div", { class: "mt-6" }, [
                            createVNode("h3", { class: "text-lg font-medium text-white" }, toDisplayString(feature.name), 1),
                            createVNode("p", { class: "mt-2 text-base text-blue-200" }, toDisplayString(feature.description), 1)
                          ])
                        ]);
                      }), 64))
                    ])
                  ])
                ]),
                createVNode("div", { class: "relative bg-gray-900 nightwind-prevent nightwind-prevent-block" }, [
                  createVNode("div", { class: "absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full" }, [
                    createVNode("div", { class: "h-full w-full xl:grid xl:grid-cols-2" }, [
                      createVNode("div", { class: "h-full xl:relative xl:col-start-2" }, [
                        createVNode("img", {
                          class: "h-full w-full object-cover opacity-25 xl:absolute xl:inset-0",
                          src: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100",
                          alt: "People working on laptops"
                        }),
                        createVNode("div", {
                          "aria-hidden": "true",
                          class: "absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                        })
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8" }, [
                    createVNode("div", { class: "relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24" }, [
                      createVNode("h2", { class: "text-base font-semibold" }, [
                        createVNode("span", { class: "bg-gradient-to-r from-blue-300 to-primary-300 bg-clip-text text-transparent" }, "Valuable Metrics")
                      ]),
                      createVNode("p", { class: "mt-3 text-3xl font-bold tracking-tight text-white" }, "Get actionable data that will help grow your business"),
                      createVNode("p", { class: "mt-5 text-lg text-gray-300" }, "Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at."),
                      createVNode("div", { class: "mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2" }, [
                        (openBlock(), createBlock(Fragment, null, renderList(metrics, (item) => {
                          return createVNode("p", {
                            key: item.id
                          }, [
                            createVNode("span", { class: "block text-2xl font-bold text-white" }, toDisplayString(item.stat), 1),
                            createVNode("span", { class: "mt-1 block text-base text-gray-300" }, [
                              createVNode("span", { class: "font-medium text-white" }, toDisplayString(item.emphasis), 1),
                              createTextVNode(" " + toDisplayString(item.rest), 1)
                            ])
                          ]);
                        }), 64))
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white" }, [
                  createVNode("div", { class: "mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8" }, [
                    createVNode("h2", { class: "text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl" }, [
                      createVNode("span", { class: "block" }, "Ready to get started?"),
                      createVNode("span", { class: "-mb-1 block bg-gradient-to-r from-blue-600 to-primary-600 bg-clip-text pb-1 text-transparent" }, "Get in touch or create an account.")
                    ]),
                    createVNode("div", { class: "mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5" }, [
                      createVNode(_sfc_main$2, null, {
                        default: withCtx(() => [
                          createTextVNode("Learn more")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$3, null, {
                        default: withCtx(() => [
                          createTextVNode("Get started")
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ])
              ]),
              createVNode("footer", {
                class: "bg-white",
                "aria-labelledby": "footer-heading"
              }, [
                createVNode("h2", {
                  id: "footer-heading",
                  class: "sr-only"
                }, "Footer"),
                createVNode("div", { class: "mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8 lg:pt-24" }, [
                  createVNode("div", { class: "xl:grid xl:grid-cols-3 xl:gap-8" }, [
                    createVNode("div", { class: "grid grid-cols-2 gap-8 xl:col-span-2" }, [
                      createVNode("div", { class: "md:grid md:grid-cols-2 md:gap-8" }, [
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-base font-medium text-gray-900" }, "Solutions"),
                          createVNode("ul", {
                            role: "list",
                            class: "mt-4 space-y-4"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(footerNavigation.solutions, (item) => {
                              return openBlock(), createBlock("li", {
                                key: item.name
                              }, [
                                createVNode("a", {
                                  href: item.href,
                                  class: "text-base text-gray-500 hover:text-gray-900"
                                }, toDisplayString(item.name), 9, ["href"])
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "mt-12 md:mt-0" }, [
                          createVNode("h3", { class: "text-base font-medium text-gray-900" }, "Support"),
                          createVNode("ul", {
                            role: "list",
                            class: "mt-4 space-y-4"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(footerNavigation.support, (item) => {
                              return openBlock(), createBlock("li", {
                                key: item.name
                              }, [
                                createVNode("a", {
                                  href: item.href,
                                  class: "text-base text-gray-500 hover:text-gray-900"
                                }, toDisplayString(item.name), 9, ["href"])
                              ]);
                            }), 128))
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "md:grid md:grid-cols-2 md:gap-8" }, [
                        createVNode("div", null, [
                          createVNode("h3", { class: "text-base font-medium text-gray-900" }, "Company"),
                          createVNode("ul", {
                            role: "list",
                            class: "mt-4 space-y-4"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(footerNavigation.company, (item) => {
                              return openBlock(), createBlock("li", {
                                key: item.name
                              }, [
                                createVNode("a", {
                                  href: item.href,
                                  class: "text-base text-gray-500 hover:text-gray-900"
                                }, toDisplayString(item.name), 9, ["href"])
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "mt-12 md:mt-0" }, [
                          createVNode("h3", { class: "text-base font-medium text-gray-900" }, "Legal"),
                          createVNode("ul", {
                            role: "list",
                            class: "mt-4 space-y-4"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(footerNavigation.legal, (item) => {
                              return openBlock(), createBlock("li", {
                                key: item.name
                              }, [
                                createVNode("a", {
                                  href: item.href,
                                  class: "text-base text-gray-500 hover:text-gray-900"
                                }, toDisplayString(item.name), 9, ["href"])
                              ]);
                            }), 128))
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mt-12 xl:mt-0" }, [
                      createVNode("h3", { class: "text-base font-medium text-gray-900" }, "Waykapay"),
                      createVNode("p", { class: "mt-4 text-base text-gray-500" }, "CV Cahaya Matahari Dunia"),
                      createVNode("p", { class: "mt-4 text-sm text-gray-500" }, "Way Kanan, Lampung")
                    ])
                  ]),
                  createVNode("div", { class: "mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16" }, [
                    createVNode("div", { class: "flex space-x-6 md:order-2" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(footerNavigation.social, (item) => {
                        return openBlock(), createBlock("a", {
                          key: item.name,
                          href: item.href,
                          class: "text-gray-400 hover:text-gray-500"
                        }, [
                          createVNode("span", { class: "sr-only" }, toDisplayString(item.name), 1),
                          (openBlock(), createBlock(resolveDynamicComponent(item.icon), {
                            class: "h-6 w-6",
                            "aria-hidden": "true"
                          }))
                        ], 8, ["href"]);
                      }), 128))
                    ]),
                    createVNode("p", { class: "mt-8 text-base text-gray-400 md:order-1 md:mt-0" }, "© 2023 Waykapay. All rights reserved.")
                  ])
                ])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Landing/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
