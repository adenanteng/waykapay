<script setup>
import {defineComponent, h, ref} from 'vue'
import LandingLayout from "@/Layouts/LandingLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "../../Components/SecondaryButton.vue";
import ApplicationLogo from "../../Components/ApplicationLogo.vue";

import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
    ArrowUturnLeftIcon,
    Bars3Icon,
    ChatBubbleBottomCenterTextIcon,
    ChatBubbleLeftEllipsisIcon,
    ChatBubbleLeftRightIcon,
    DocumentChartBarIcon,
    HeartIcon,
    InboxIcon,
    PencilSquareIcon,
    QuestionMarkCircleIcon,
    SparklesIcon,
    TrashIcon,
    UsersIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'

// const props = defineProps({
//     trip: Object,
// });

function formatPrice(value) {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

const solutions = [
    {
        name: 'Inbox',
        description: 'Get a better understanding of where your traffic is coming from.',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'Messaging',
        description: 'Speak directly to your customers in a more meaningful way.',
        href: '#',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Live Chat',
        description: "Your customers' data will be safe and secure.",
        href: '#',
        icon: ChatBubbleLeftRightIcon,
    },
    {
        name: 'Knowledge Base',
        description: "Connect with third-party tools that you're already using.",
        href: '#',
        icon: QuestionMarkCircleIcon,
    },
]
const features = [
    {
        name: 'Unlimited Inboxes',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: InboxIcon,
    },
    {
        name: 'Manage Team Members',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: UsersIcon,
    },
    {
        name: 'Spam Report',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: TrashIcon,
    },
    {
        name: 'Compose in Markdown',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: PencilSquareIcon,
    },
    {
        name: 'Team Reporting',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'Saved Replies',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ArrowUturnLeftIcon,
    },
    {
        name: 'Email Commenting',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ChatBubbleLeftEllipsisIcon,
    },
    {
        name: 'Connect with Customers',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: HeartIcon,
    },
]
const metrics = [
    { id: 1, stat: '8K+', emphasis: 'Companies', rest: 'use laoreet amet lacus nibh integer quis.' },
    { id: 2, stat: '25K+', emphasis: 'Countries around the globe', rest: 'lacus nibh integer quis.' },
    { id: 3, stat: '98%', emphasis: 'Customer satisfaction', rest: 'laoreet amet lacus nibh integer quis.' },
    { id: 4, stat: '12M+', emphasis: 'Issues resolved', rest: 'lacus nibh integer quis.' },
]
const footerNavigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Twitter',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
                        }),
                    ]),
            }),
        },
        {
            name: 'GitHub',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
        {
            name: 'Dribbble',
            href: '#',
            icon: defineComponent({
                render: () =>
                    h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
                        h('path', {
                            'fill-rule': 'evenodd',
                            d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z',
                            'clip-rule': 'evenodd',
                        }),
                    ]),
            }),
        },
    ],
}


</script>

<template>
    <LandingLayout title="Beranda" desc="Lorem ipsum">

        <main>
            <!-- Hero section -->
            <div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40" >
                <div class="mx-auto max-w-2xl lg:mx-0 lg:flex-auto"  >

                    <div class="flex">
                        <div class="relative flex items-center gap-x-4 rounded-full py-1 px-4 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            <span class="font-semibold text-primary-600">We’re hiring</span>
                            <span class="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                            <a href="#" class="flex items-center gap-x-1">
                                <span class="absolute inset-0" aria-hidden="true" />
                                See open positions
                                <i class="fa-regular fa-angle-right text-gray-400 ml-1" />
                            </a>
                        </div>
                    </div>
                    <h1 class="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Waykapay</h1>
                    <p class="mt-6 text-lg leading-8 text-gray-600">
                        Satu aplikasi untuk transfer apa aja, bayar apa aja dan kapan aja. <br>
                        Unduh aplikasi Waykapay sekarang!
                    </p>
                    <div class="mt-10 flex items-center gap-x-3">
                        <a
                            target="_blank"
                            href='https://play.google.com/store/apps/details?id=com.anteng.waykapay&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
                        >
                            <img
                                alt='Temukan di Google Play'
                                src='https://play.google.com/intl/id/badges/static/images/badges/id_badge_web_generic.png'
                                class="h-16"
                            />
                        </a>
<!--                        <PrimaryButton >-->
<!--                            Dasbor-->
<!--                        </PrimaryButton>-->
<!--                        <SecondaryButton >-->
<!--                            Lorem ipsum-->
<!--                        </SecondaryButton>-->
                    </div>
                </div>
                <div class="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow" >

                    <div class="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
                        <div class="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                        <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                        <div class="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                        <div class="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                        <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                            <img src="/img/landing/dashboard-dark.png" class="dark:hidden w-[272px] h-[572px]" alt="">
                            <img src="/img/landing/dashboard-light.png" class="hidden dark:block w-[272px] h-[572px]" alt="">
                        </div>
                    </div>

<!--                    <svg viewBox="0 0 366 729" role="img" class="mx-auto w-[22.875rem] max-w-full drop-shadow-xl" >-->
<!--                        <title>App screenshot</title>-->
<!--                        <defs>-->
<!--                            <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">-->
<!--                                <rect width="316" height="684" rx="36" />-->
<!--                            </clipPath>-->
<!--                        </defs>-->
<!--                        <path fill="#4B5563" d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z" />-->
<!--                        <path fill="#343E4E" d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z" />-->
<!--                        <foreignObject width="316" height="684" transform="translate(24 24)" clip-path="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)">-->
<!--                            <img src="/img/landing/dashboard-dark.png" alt="" />-->
<!--                        </foreignObject>-->
<!--                    </svg>-->

                </div>
            </div>

            <div class="">
                <div class="mx-auto max-w-7xl py-12 px-6 lg:py-16 lg:px-8">
                    <p class="text-center text-lg font-semibold text-gray-600">Topup e-wallet, games, voucher, internet dan isi pulsa</p>
                    <div class="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
                        <div class="col-span-1 flex justify-center bg-gray-100 bg-opacity-20 backdrop-blur-sm py-8 px-8">
                            <img class="max-h-12" src="/img/vendor/AXIS.svg" alt="" />
                        </div>
                        <div class="col-span-1 flex justify-center bg-gray-100 bg-opacity-20 backdrop-blur-sm py-8 px-8">
                            <img class="max-h-12" src="/img/vendor/TIX%20ID.svg" alt="" />
                        </div>
                        <div class="col-span-1 flex justify-center bg-gray-100 bg-opacity-20 backdrop-blur-sm py-8 px-8">
                            <img class="max-h-12" src="/img/vendor/INDIHOME.svg" alt="" />
                        </div>
                        <div class="col-span-1 flex justify-center bg-gray-100 bg-opacity-20 backdrop-blur-sm py-8 px-8">
                            <img class="max-h-12" src="/img/vendor/SPOTIFY.svg" alt="" />
                        </div>
                        <div class="col-span-1 flex justify-center bg-gray-100 bg-opacity-20 backdrop-blur-sm py-8 px-8">
                            <img class="max-h-12" src="/img/vendor/DANA.svg" alt="" />
                        </div>
                        <div class="col-span-1 flex justify-center bg-gray-100 bg-opacity-20 backdrop-blur-sm py-8 px-8">
                            <img class="max-h-12" src="/img/vendor/SHOPEE%20PAY.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Alternating Feature Sections -->
            <div class="relative overflow-hidden pt-16 pb-32" >
<!--                <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100" />-->
                <div class="relative">
                    <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div class="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                            <div>
                                <div>
                                  <span class="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-primary-600">
                                      <i class="fa-regular fa-wallet text-xl text-white nightwind-prevent" />
                                  </span>
                                </div>
                                <div class="mt-6">
                                    <h2 class="text-3xl font-bold tracking-tight text-gray-900">Seperti dompetmu, tapi lebih canggih</h2>
                                    <p class="mt-4 text-lg text-gray-500">
                                        Waykapay bikin kamu lebih mudah untuk akses semua kebutuhan transaksi dan mulai berinvestasi.
                                    </p>
                                    <div class="mt-6">
<!--                                        <PrimaryButton>Get started</PrimaryButton>-->
                                   </div>
                                </div>
                            </div>
                            <div class="mt-8 border-t border-gray-200 pt-6">
                                <blockquote>
                                    <div>
                                        <p class="text-base text-gray-500">&ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;</p>
                                    </div>
                                    <footer class="mt-3">
                                        <div class="flex items-center space-x-3">
                                            <div class="flex-shrink-0">
                                                <img class="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80" alt="" />
                                            </div>
                                            <div class="text-base font-medium text-gray-700">Marcia Hill, Digital Marketing Manager</div>
                                        </div>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                        <div class="mt-12 sm:mt-16 lg:mt-0">
                            <div class="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img class="w-full rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg" alt="Inbox user interface" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-24">
                    <div class="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                        <div class="mx-auto max-w-xl px-6 lg:col-start-2 lg:mx-0 lg:max-w-none lg:py-32 lg:px-0">
                            <div>
                                <div>
                                  <span class="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-primary-600">
                                      <i class="fa-regular fa-shield-check text-xl text-white nightwind-prevent" />
                                  </span>
                                </div>
                                <div class="mt-6">
                                    <h2 class="text-3xl font-bold tracking-tight text-gray-900">Perlindungan dengan Waykapay Protection</h2>
                                    <p class="mt-4 text-lg text-gray-500">
                                        Dengan standar keamanan PCI DSS & ISO 27001, Waykapay mengamankan data pembayaran dan informasi milikmu. Garansi berlaku saat ada kehilangan uang di Saldo Waykapay & sumber uang lainnya yang tersimpan di Waykapay.
                                    </p>
                                    <div class="mt-6">
<!--                                        <PrimaryButton>Get started</PrimaryButton>-->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-12 sm:mt-16 lg:col-start-1 lg:mt-0">
                            <div class="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                <img class="w-full rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none" src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg" alt="Customer profile user interface" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Gradient Feature Section -->
            <div class="bg-gradient-to-r from-blue-800 to-primary-700 nightwind-prevent-block">
                <div class="mx-auto max-w-4xl py-16 px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:px-8 lg:pt-24">
                    <h2 class="text-3xl font-bold tracking-tight text-white">Inbox support built for efficiency</h2>
                    <p class="mt-4 max-w-3xl text-lg text-blue-200">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis. Blandit aliquam sit nisl euismod mattis in.</p>
                    <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
                        <div v-for="feature in features" :key="feature.name">
                            <div>
                                <span class="flex h-12 w-12 items-center justify-center rounded-3xl bg-white bg-opacity-10">
                                  <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                                </span>
                            </div>
                            <div class="mt-6">
                                <h3 class="text-lg font-medium text-white">{{ feature.name }}</h3>
                                <p class="mt-2 text-base text-blue-200">{{ feature.description }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Stats section -->
            <div class="relative bg-gray-900 nightwind-prevent nightwind-prevent-block">
                <div class="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
                    <div class="h-full w-full xl:grid xl:grid-cols-2">
                        <div class="h-full xl:relative xl:col-start-2">
                            <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops" />
                            <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r" />
                        </div>
                    </div>
                </div>
                <div class="mx-auto max-w-4xl px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
                    <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                        <h2 class="text-base font-semibold">
                            <span class="bg-gradient-to-r from-blue-300 to-primary-300 bg-clip-text text-transparent">Valuable Metrics</span>
                        </h2>
                        <p class="mt-3 text-3xl font-bold tracking-tight text-white">Get actionable data that will help grow your business</p>
                        <p class="mt-5 text-lg text-gray-300">Rhoncus sagittis risus arcu erat lectus bibendum. Ut in adipiscing quis in viverra tristique sem. Ornare feugiat viverra eleifend fusce orci in quis amet. Sit in et vitae tortor, massa. Dapibus laoreet amet lacus nibh integer quis. Eu vulputate diam sit tellus quis at.</p>
                        <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                            <p v-for="item in metrics" :key="item.id">
                                <span class="block text-2xl font-bold text-white">{{ item.stat }}</span>
                                <span class="mt-1 block text-base text-gray-300"
                                ><span class="font-medium text-white">{{ item.emphasis }}</span> {{ item.rest }}</span
                                >
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA Section -->
            <div class="bg-white">
                <div class="mx-auto max-w-4xl py-16 px-6 sm:py-24 lg:flex lg:max-w-7xl lg:items-center lg:justify-between lg:px-8">
                    <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <span class="block">Ready to get started?</span>
                        <span class="-mb-1 block bg-gradient-to-r from-blue-600 to-primary-600 bg-clip-text pb-1 text-transparent">Get in touch or create an account.</span>
                    </h2>
                    <div class="mt-6 space-y-4 sm:flex sm:space-y-0 sm:space-x-5">
                        <PrimaryButton>Learn more</PrimaryButton>
                        <SecondaryButton>Get started</SecondaryButton>
                    </div>
                </div>
            </div>
        </main>

        <footer class="bg-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" class="sr-only">Footer</h2>
            <div class="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8 lg:pt-24">
                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div class="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 class="text-base font-medium text-gray-900">Solutions</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li v-for="item in footerNavigation.solutions" :key="item.name">
                                        <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-12 md:mt-0">
                                <h3 class="text-base font-medium text-gray-900">Support</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li v-for="item in footerNavigation.support" :key="item.name">
                                        <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 class="text-base font-medium text-gray-900">Company</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li v-for="item in footerNavigation.company" :key="item.name">
                                        <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-12 md:mt-0">
                                <h3 class="text-base font-medium text-gray-900">Legal</h3>
                                <ul role="list" class="mt-4 space-y-4">
                                    <li v-for="item in footerNavigation.legal" :key="item.name">
                                        <a :href="item.href" class="text-base text-gray-500 hover:text-gray-900">{{ item.name }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mt-12 xl:mt-0">
                        <h3 class="text-base font-medium text-gray-900">Waykapay</h3>
                        <p class="mt-4 text-base text-gray-500">CV Cahaya Matahari Dunia</p>
                        <p class="mt-4 text-sm text-gray-500">Way Kanan, Lampung</p>

                    </div>
                </div>
                <div class="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
                    <div class="flex space-x-6 md:order-2">
                        <a v-for="item in footerNavigation.social" :key="item.name" :href="item.href" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">{{ item.name }}</span>
                            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
                        </a>
                    </div>
                    <p class="mt-8 text-base text-gray-400 md:order-1 md:mt-0">&copy; 2023 Waykapay. All rights reserved.</p>
                </div>
            </div>
        </footer>

    </LandingLayout>

</template>
