<script setup>
import {onMounted, ref, watch} from "vue";
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
    return moment(value).format('DD MMM Y HH:m')
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

const onSwiper = (swiper) => {
    // console.log(swipeMenu);
};
const onSlideChange = (swiper) => {
    // console.log(swipeMenu);
};

// function halo() {
//     try {
//         // eslint-disable-next-line no-undef
//         if (AndroidBridge) {
//             // eslint-disable-next-line no-undef
//             console.log("Trying to call AndroidBridge.sendDataToKotlin");
//             AndroidBridge.sendDataToKotlin("Data yang ingin Anda bagikan");
//         }
//     } catch (error) {
//         console.error(error.message);
//     }
// }



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

                    <SecondaryButton as="a" :href="route('money-transfer.index')" class="text-sm border border-gray-900 dark:border-white nightwind-prevent">
                        <i class="fa-solid fa-circle-up mr-2" />
                        Kirim Uang
                    </SecondaryButton>
                </div>
            </div>
        </div>

<!--        <div class="border-l-4 border-primary-400 bg-primary-100 rounded-3xl p-4" v-if="$page.props.user.role_id==3">-->
<!--            <div class="flex">-->
<!--                <div class="flex-shrink-0 flex items-center">-->
<!--                    <i class="fa-regular fa-stars text-primary-700 h-5 w-5" />-->
<!--                </div>-->
<!--                <div class="ml-3">-->
<!--                    <p class="text-sm text-primary-700">-->
<!--                        Selamat bergabung, yuk-->
<!--                        {{ ' ' }}-->
<!--                        <Link :href="route('landing.upgrade')" class="font-medium text-primary-700 underline hover:text-primary-600">upgrade ke Waykapay Premium!</Link>-->
<!--                        {{ ' ' }}-->
<!--                        Nikmatin akses dan benefit lengkap dari Waykapay!-->
<!--                    </p>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

        <div class="border-l-4 border-yellow-400 bg-yellow-100 rounded-3xl p-4" v-if="$page.props.user.pin==null">
            <div class="flex">
                <div class="flex-shrink-0 flex items-center">
                    <i class="fa-regular fa-triangle-exclamation text-yellow-700 h-5 w-5" />
                </div>
                <div class="ml-3">
                    <p class="text-sm text-yellow-700">
                        Pin kamu belum aktif, yuk
                        {{ ' ' }}
                        <Link :href="route('pin.create')" class="font-medium text-yellow-700 underline hover:text-yellow-600">buat pin untuk keamanan transaksi.</Link>
                    </p>
                </div>
            </div>
        </div>

        <div class="border-l-4 border-green-400 bg-green-100 rounded-3xl p-4" >
            <div class="flex">
                <div class="flex-shrink-0 flex items-center">
                    <i class="fa-regular fa-triangle-exclamation text-green-700 h-5 w-5" />
                </div>
                <div class="ml-3">
                    <p class="text-sm text-green-700">
                        Notifikasi perangkat kamu belum aktif, yuk
                        {{ ' ' }}
                        <Link :href="route('device.index')" class="font-medium text-green-700 underline hover:text-green-600">aktifin notifikasi</Link>
                        {{ '' }}
                        perangkat kamu.
                    </p>
                </div>
            </div>
        </div>

        <div class="">
            <div class="grid grid-cols-3 grid-rows-6 grid-flow-col gap-4">
                <Link :href="route('pulsa.index')" class="row-span-4 flex justify-center items-center rounded-3xl bg-gradient-to-br from-sky-300 dark:from-sky-700 shadow-lg">
                    <div class="text-center">
                        <i class="fa-regular fa-mobile text-5xl text-sky-600 dark:text-gray-900" />
                        <p class="text-xs text-sky-600 dark:text-gray-900 mt-1">Pulsa & Data</p>
                    </div>
                </Link>
                <Link :href="route('pln.index')" class="row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-amber-300 dark:from-amber-700 shadow-lg">
                    <div class="text-center">
                        <i class="fa-regular fa-lightbulb text-2xl text-amber-600 dark:text-gray-900" />
                        <p class="text-xs text-amber-600 dark:text-gray-900">Listrik</p>
                    </div>
                </Link>
                <Link :href="route('games.index')" class="row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-teal-300 dark:from-teal-700 shadow-lg">
                    <div class="text-center">
                        <i class="fa-regular fa-gamepad-modern text-2xl text-teal-600 dark:text-gray-900" />
                        <p class="text-xs text-teal-600 dark:text-gray-900">Games</p>
                    </div>
                </Link>
                <Link :href="route('voucher.index')" class="row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-violet-300 dark:from-violet-700 shadow-lg">
                    <div class="text-center">
                        <i class="fa-regular fa-ticket text-2xl text-violet-600 dark:text-gray-900" />
                        <p class="text-xs text-violet-600 dark:text-gray-900">Voucher</p>
                    </div>
                </Link>
                <Link :href="route('emoney.index')" class="row-span-2  col-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-blue-300 dark:from-blue-700 shadow-lg">
                    <div class="text-center">
                        <i class="fa-regular fa-wallet text-2xl text-blue-600 dark:text-gray-900" />
                        <p class="text-xs text-blue-600 dark:text-gray-900">E-Money</p>
                    </div>
                </Link>
                <Link :href="route('television.index')" class="row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-green-300 dark:from-green-700 shadow-lg">
                    <div class="text-center">
                        <i class="fa-regular fa-tv-retro text-2xl text-green-600 dark:text-gray-900" />
                        <p class="text-xs text-green-600 dark:text-gray-900">TV</p>
                    </div>
                </Link>
                <Link :href="route('etoll.index')" class="row-span-2 py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-red-300 dark:from-red-700 shadow-lg">
                    <div class="text-center">
                        <i class="fa-regular fa-cards-blank text-2xl text-red-600 dark:text-gray-900" />
                        <p class="text-xs text-red-600 dark:text-gray-900">E-Toll</p>
                    </div>
                </Link>
            </div>
        </div>

        <div class="">
            <h3 class="text-gray-700 text-sm ml-3 mt-2 mb-1">Pascabayar</h3>
            <div class="grid grid-cols-3 gap-4">
                <Link :href="route('pasca.bpjs.index')" class="py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-green-300 dark:from-green-700 shadow-lg">
                    <div class="text-center">
                        <i class="fa-regular fa-heart-pulse text-2xl text-green-600 dark:text-green-900" />
                        <p class="text-xs text-green-600 dark:text-gray-900">BPJS</p>
                    </div>
                </Link>

                <Link :href="route('pasca.internet.index')" class="py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-red-300 dark:from-red-700 shadow-lg">
                    <div class="text-center">
                        <i class="fa-regular fa-router text-2xl text-red-600 dark:text-gray-900" />
                        <p class="text-xs text-red-600 dark:text-gray-900">Internet</p>
                    </div>
                </Link>

<!--                <Link :href="route('internet.index')" class="py-3 flex justify-center items-center rounded-3xl bg-gradient-to-br from-red-300 dark:from-red-700 shadow-lg">-->
<!--                    <div class="text-center">-->
<!--                        <i class="fa-regular fa-car-side text-2xl text-red-600 dark:text-gray-900" />-->
<!--                        <p class="text-xs text-red-600 dark:text-gray-900">Multifinance</p>-->
<!--                    </div>-->
<!--                </Link>-->


            </div>
        </div>

<!--        <div class="">-->
<!--            <div class="py-6">-->
<!--                <div class="gap-x-6 gap-y-10 grid grid-cols-4 lg:grid-cols-6 lg:gap-x-8">-->
<!--                    <Link :href="route('pulsa.index')" class="group flex flex-col justify-center items-center">-->
<!--                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">-->
<!--                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-sky-300 to-sky-50"></i>-->
<!--                            <i class="fa-stack-1x fa-duotone fa-mobile text-sky-600 group-hover:text-sky-800"></i>-->
<!--                        </span>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">Pulsa</h3>-->
<!--                    </Link>-->

<!--                    <Link :href="route('pln.index')" class="group flex flex-col justify-center items-center">-->
<!--                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">-->
<!--                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-amber-300 to-amber-50"></i>-->
<!--                            <i class="fa-stack-1x fa-duotone fa-lightbulb text-amber-600 group-hover:text-amber-800"></i>-->
<!--                        </span>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">Listrik</h3>-->
<!--                    </Link>-->

<!--                    <Link :href="route('games.index')" class="group flex flex-col justify-center items-center">-->
<!--                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">-->
<!--                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-teal-300 to-teal-50"></i>-->
<!--                            <i class="fa-stack-1x fa-duotone fa-gamepad-modern text-teal-600 group-hover:text-teal-800"></i>-->
<!--                        </span>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">Games</h3>-->
<!--                    </Link>-->

<!--                    <Link :href="route('emoney.index')" class="group flex flex-col justify-center items-center">-->
<!--                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">-->
<!--                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-blue-50"></i>-->
<!--                            <i class="fa-stack-1x fa-duotone fa-wallet text-blue-600 group-hover:text-blue-800"></i>-->
<!--                        </span>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">E-Money</h3>-->
<!--                    </Link>-->

<!--                    <Link :href="route('voucher.index')" class="group flex flex-col justify-center items-center">-->
<!--                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">-->
<!--                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-violet-300 to-violet-50"></i>-->
<!--                            <i class="fa-stack-1x fa-duotone fa-ticket text-violet-600 group-hover:text-violet-800"></i>-->
<!--                        </span>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">Voucher</h3>-->
<!--                    </Link>-->

<!--                    <Link :href="route('television.index')" class="group flex flex-col justify-center items-center">-->
<!--                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">-->
<!--                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-green-50"></i>-->
<!--                            <i class="fa-stack-1x fa-duotone fa-tv-retro text-green-600 group-hover:text-green-800"></i>-->
<!--                        </span>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">TV</h3>-->
<!--                    </Link>-->

<!--                    <Link :href="route('internet.index')" class="group flex flex-col justify-center items-center">-->
<!--                        <span class="fa-stack fa-2x flex justify-center items-center nightwind-prevent-block">-->
<!--                            <i class="fa-stack-2x fa-solid fa-circle text-6xl text-transparent bg-clip-text bg-gradient-to-br from-red-300 to-red-50"></i>-->
<!--                            <i class="fa-stack-1x fa-duotone fa-router text-red-600 group-hover:text-red-800"></i>-->
<!--                        </span>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">Internet</h3>-->
<!--                    </Link>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

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
