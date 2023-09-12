<script setup>
import {ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import moment from "moment";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import {Vue3Lottie} from "vue3-lottie";

const props = defineProps({
    users: Object,
    carousel: Object,
})

function formattedDate(value) {
    return moment(value).format('DD MMM Y')
}

function formattedTime(value) {
    return moment(value).format('HH:m')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const breakpoints = {
    500: {
        itemsToShow: 2,
        snapAlign: 'center',
    },
    700: {
        itemsToShow: 2,
        snapAlign: 'center',
    },
    // 1024 and up
    1024: {
        itemsToShow: 3,
        snapAlign: 'center',
    },
}

const menus = [
    {
        name: 'Isi ulang pulsa',
        href: 'pulsa.index',
        icon: 'fa-mobile',
        bg: 'from-green-600'
    },
    {
        name: 'Beli Token Listrik',
        href: 'pln.index',
        icon: 'fa-lightbulb',
        bg: 'from-amber-600'
    },
    {
        name: 'Diamond Games',
        href: 'games.index',
        icon: 'fa-gamepad-modern',
        bg: 'from-blue-600'
    },
    {
        name: 'Topup Saldo E-Money',
        href: 'emoney.index',
        icon: 'fa-wallet',
        bg: 'from-red-600'
    },
    {
        name: 'TV Berlangganan',
        href: 'television.index',
        icon: 'fa-tv-retro',
        bg: 'from-indigo-600'
    },
    {
        name: 'Tagihan Internet',
        href: 'internet.index',
        icon: 'fa-router',
        bg: 'from-primary-600'
    },
]

const onSwiper = (swiper) => {
    // console.log(swipeMenu);
};
const onSlideChange = (swiper) => {
    // console.log(swipeMenu);
};

</script>

<template>
    <AppLayout title="Beranda"
               greeting="Selamat datang kembali,"
               :name="$page.props.user.name"
               :desc="$page.props.user.email"
               :avatar="$page.props.user.profile_photo_url"
    >
        <div class="rounded-3xl bg-gradient-to-br from-primary-600 overflow-hidden shadow-lg">
            <div class="py-4 px-4 sm:px-6 lg:py-8 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <div class="tracking-tight nightwind-prevent-block" >
                    <span class="block text-sm font-medium text-white">
                        Saldo Rekening
                    </span>
                    <span class="block text-lg font-bold text-white">
                        <span class="text-sm font-medium">Rp</span> {{ formatPrice($page.props.user.wallet_balance) }}
                    </span>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2">
<!--                    <Link :href="route('deposit.index')" class="text-white text-sm gap-y-1 flex flex-col justify-center items-center">-->
<!--                        <i class="fa-solid fa-circle-plus text-xl" />-->
<!--                        Top Up-->
<!--                    </Link>-->

<!--                    <Link :href="route('money-transfer.index')" class="text-white text-sm gap-y-1 flex flex-col justify-center items-center">-->
<!--                        <i class="fa-solid fa-circle-up text-xl" />-->
<!--                        Transfer-->
<!--                    </Link>-->

                    <PrimaryButton as="a" :href="route('deposit.index')" class="text-sm">
                        <i class="fa-solid fa-circle-plus mr-2" />
                        Isi Ulang
                    </PrimaryButton>

                    <SecondaryButton as="a" :href="route('money-transfer.index')" class="text-sm nightwind-prevent">
                        <i class="fa-solid fa-circle-up mr-2" />
                        Kirim Uang
                    </SecondaryButton>
                </div>
            </div>
        </div>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg">
            <div class="p-6 flex gap-6">
                <div class="flex-none flex items-center">
<!--                    <Vue3Lottie-->
<!--                        animation-link="https://lottie.host/2931601b-3cd5-49f3-a709-ebb26aeab426/60gPnD5Xwz.json"-->
<!--                        :height="80"-->
<!--                    />-->
                    <i class="fa-duotone fa-ghost text-7xl text-primary-600" />
                </div>
                <div class="grow">
                    <h4 class="text-gray-900 font-semibold">Selamat Bergabung!</h4>
                    <p class="text-sm text-gray-600">Yuk, upgrade ke Waykapay Premium! Nikmatin akses dan benefit lengkap dari Waykapay!</p>
                    <Link href="" class="text-sm text-primary-600 font-medium">Upgrade <i class="fa-regular fa-arrow-right" /></Link>
                </div>
            </div>
        </div>

        <div class="">
            <div class="py-6">
                <div class="gap-x-6 gap-y-10 grid grid-cols-4 lg:grid-cols-6 lg:gap-x-8">
                    <Link :href="route('pulsa.index')" class="group flex flex-col justify-center items-center">
                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">
                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-sky-50"></i>
                            <i class="fa-stack-1x fa-duotone fa-mobile text-sky-600 group-hover:text-sky-800"></i>
                        </span>
                        <h3 class="mt-2 text-sm text-gray-700">Pulsa</h3>
                    </Link>

                    <Link :href="route('pln.index')" class="group flex flex-col justify-center items-center">
                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">
                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-amber-50"></i>
                            <i class="fa-stack-1x fa-duotone fa-lightbulb text-amber-600 group-hover:text-amber-800"></i>
                        </span>
                        <h3 class="mt-2 text-sm text-gray-700">Listrik</h3>
                    </Link>

                    <Link :href="route('games.index')" class="group flex flex-col justify-center items-center">
                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">
                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-teal-50"></i>
                            <i class="fa-stack-1x fa-duotone fa-gamepad-modern text-teal-600 group-hover:text-teal-800"></i>
                        </span>
                        <h3 class="mt-2 text-sm text-gray-700">Games</h3>
                    </Link>

                    <Link :href="route('emoney.index')" class="group flex flex-col justify-center items-center">
                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">
                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-50"></i>
                            <i class="fa-stack-1x fa-duotone fa-wallet text-blue-600 group-hover:text-blue-800"></i>
                        </span>
                        <h3 class="mt-2 text-sm text-gray-700">E-Money</h3>
                    </Link>

                    <Link :href="route('television.index')" class="group flex flex-col justify-center items-center">
                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">
                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-green-50"></i>
                            <i class="fa-stack-1x fa-duotone fa-tv-retro text-green-600 group-hover:text-green-800"></i>
                        </span>
                        <h3 class="mt-2 text-sm text-gray-700">TV</h3>
                    </Link>

                    <Link :href="route('internet.index')" class="group flex flex-col justify-center items-center">
                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">
                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-red-50"></i>
                            <i class="fa-stack-1x fa-duotone fa-router text-red-600 group-hover:text-red-800"></i>
                        </span>
                        <h3 class="mt-2 text-sm text-gray-700">Internet</h3>
                    </Link>
                </div>
            </div>
        </div>

<!--        <swiper-->
<!--            :modules="[FreeMode]"-->
<!--            slides-per-view="2.5"-->
<!--            :space-between="10"-->
<!--            @swiper="onSwiper"-->
<!--            @slideChange="onSlideChange"-->
<!--            :freeMode="true"-->
<!--            :breakpoints="{-->
<!--                '640': {-->
<!--                    slidesPerView: 3,-->
<!--                    spaceBetween: 10,-->
<!--                },-->
<!--                '768': {-->
<!--                    slidesPerView: 4,-->
<!--                    spaceBetween: 10,-->
<!--                },-->
<!--                '1024': {-->
<!--                    slidesPerView: 5,-->
<!--                    spaceBetween: 10,-->
<!--                },-->
<!--            }"-->
<!--        >-->
<!--            <template v-for="menu in menus" :key="menu.name">-->
<!--                <SwiperSlide>-->
<!--                    <Link :href="route(menu.href)" class="text-right" preserve-scroll>-->
<!--                        <div class="px-5 py-3 rounded-3xl bg-gradient-to-br overflow-hidden nightwind-prevent-block aspect-square sm:aspect-auto relative" :class="menu.bg">-->
<!--                            <h3 class="text-sm text-white text-left font-semibold">{{ menu.name }}</h3>-->
<!--                            <i class="mt-2 fa-regular text-4xl text-white absolute sm:relative bottom-5 sm:bottom-0 right-5 sm:right-0" :class="menu.icon" />-->
<!--                        </div>-->
<!--                    </Link>-->
<!--                </SwiperSlide>-->
<!--            </template>-->
<!--        </swiper>-->

        <swiper
            :modules="[Autoplay]"
            :slides-per-view="1"
            :space-between="10"
            :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
            }"
            :breakpoints="{
                '640': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '768': {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                '1024': {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            }"
        >
            <template v-for="slide in props.carousel" :key="slide.id" >
                <SwiperSlide>
                    <Link :href="slide.href" >
                        <img :src="slide.media[0].original_url" alt="" class="rounded-3xl w-full h-auto aspect-video object-cover p-1">
                    </Link>
                </SwiperSlide>
            </template>
        </swiper>

        <MobileMenu/>
    </AppLayout>
</template>
