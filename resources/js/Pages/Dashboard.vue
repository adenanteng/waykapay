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
// import {Vue3Lottie} from "vue3-lottie";

const props = defineProps({
    carousel: undefined,
    history: undefined,
})

onMounted(() => {
    router.reload({ only: ['history', 'carousel'] })
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

function greeting() {
    if (moment().format('HH') < 10) {
        return  "Selamat pagi, jangan lupa sarapan ya.";
    } else if (moment().format('HH') < 15) {
        return  "Selamat siang, semangat ya beraktivitasnya.";
    } else if (moment().format('HH') < 19) {
        return  "Selamat sore, gimana? hari ini lancar?";
    } else {
        return  "Selamat malam, selamat beristirahat.";
    }
}

</script>

<template>
    <AppLayout title="Beranda"
               greeting="Selamat datang kembali,"
               :name="$page.props.user.name"
               :desc="greeting()"
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

                    <PrimaryButton
                        as="a"
                        :href="route('deposit.index')"
                        class="text-sm"
                    >
                        <i class="fa-solid fa-circle-plus mr-2" />
                        Isi Ulang
                    </PrimaryButton>

                    <SecondaryButton
                        as="a"
                        :href="route('money-transfer.index')"
                        class="text-sm border border-gray-900 dark:border-white nightwind-prevent"
                    >
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

        <div class="border-l-4 border-green-400 bg-green-100 rounded-3xl p-4" v-if="$page.props.user.device_token==null">
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
            <h3 class="text-gray-700 text-sm ml-3 mb-1">Prabayar</h3>
            <div class="grid grid-cols-3 grid-rows-6 grid-flow-col bg-white bg-opacity-50 backdrop-blur-2xl rounded-3xl shadow-lg border border-gray-300">
                <Link :href="route('pulsa.index')" class="row-span-4 flex justify-center items-center border-b border-r border-gray-300">
                    <div class="text-center">
                        <i class="fa-regular fa-mobile text-5xl text-sky-600" />
                        <p class="text-xs text-sky-600 dark:text-gray-900 mt-1">Pulsa & Data</p>
                    </div>
                </Link>
                <Link :href="route('pln.index')" class="row-span-2 py-3 flex justify-center items-center border-r border-gray-300">
                    <div class="text-center">
                        <i class="fa-regular fa-lightbulb text-2xl text-amber-600" />
                        <p class="text-xs text-amber-600 dark:text-gray-900">Listrik</p>
                    </div>
                </Link>
                <Link :href="route('games.index')" class="row-span-2 py-3 flex justify-center items-center border-b border-r border-gray-300">
                    <div class="text-center">
                        <i class="fa-regular fa-gamepad-modern text-2xl text-teal-600" />
                        <p class="text-xs text-teal-600 dark:text-gray-900">Games</p>
                    </div>
                </Link>
                <Link :href="route('voucher.index')" class="row-span-2 py-3 flex justify-center items-center border-b border-r border-gray-300">
                    <div class="text-center">
                        <i class="fa-regular fa-ticket text-2xl text-violet-600" />
                        <p class="text-xs text-violet-600 dark:text-gray-900">Voucher</p>
                    </div>
                </Link>
                <Link :href="route('emoney.index')" class="row-span-2  col-span-2 py-3 flex justify-center items-center">
                    <div class="text-center">
                        <i class="fa-regular fa-wallet text-2xl text-blue-600" />
                        <p class="text-xs text-blue-600 dark:text-gray-900">E-Money</p>
                    </div>
                </Link>
                <Link :href="route('television.index')" class="row-span-2 py-3 flex justify-center items-center border-b border-gray-300">
                    <div class="text-center">
                        <i class="fa-regular fa-tv-retro text-2xl text-green-600" />
                        <p class="text-xs text-green-600 dark:text-gray-900">TV</p>
                    </div>
                </Link>
                <Link :href="route('etoll.index')" class="row-span-2 py-3 flex justify-center items-center border-b border-gray-300">
                    <div class="text-center">
                        <i class="fa-regular fa-cards-blank text-2xl text-red-600" />
                        <p class="text-xs text-red-600 dark:text-gray-900">E-Toll</p>
                    </div>
                </Link>
            </div>
        </div>

        <div class="">
            <h3 class="text-gray-700 text-sm ml-3 mb-1">Pascabayar</h3>
            <div class="grid grid-cols-3 bg-white bg-opacity-50 backdrop-blur-2xl rounded-3xl shadow-lg border border-gray-300">
                <Link :href="route('pasca.bpjs.index')" class="py-3 rounded-l-3xl flex justify-center items-center border-r border-gray-300">
                    <div class="text-center">
                        <i class="fa-regular fa-heart-pulse text-2xl text-green-600" />
                        <p class="text-xs text-green-600 dark:text-gray-900">BPJS</p>
                    </div>
                </Link>

                <Link :href="route('pasca.internet.index')" class="py-3 flex justify-center items-center border-r border-gray-300">
                    <div class="text-center">
                        <i class="fa-regular fa-router text-2xl text-red-600" />
                        <p class="text-xs text-red-600 dark:text-gray-900">Internet</p>
                    </div>
                </Link>

                <Link :href="route('pasca.multifinance.index')" class="py-3 rounded-r-3xl flex justify-center items-center">
                    <div class="text-center">
                        <i class="fa-regular fa-credit-card text-2xl text-blue-600" />
                        <p class="text-xs text-blue-600 dark:text-gray-900">Cicilan</p>
                    </div>
                </Link>
            </div>
        </div>

        <div class="">
            <div class="flex mx-3 mb-1">
                <h3 class="flex-1 text-gray-700 text-sm">Riwayat Transaksi</h3>
                <Link
                    class="text-primary-600 text-xs"
                    :href="route('history.index')"
                >
                    Lihat Semua <i class="fa-regular fa-arrow-right "/>
                </Link>
            </div>

            <template v-if="props.history === undefined">
                <div class="animate-pulse rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl shadow-lg border border-gray-300 divide-y divide-gray-300">
                    <div v-for="loader in 5" class="px-4 py-4 sm:px-6">
                        <div class="flex items-center justify-between">
                            <p class="bg-gray-300 text-gray-300 w-full rounded-3xl">a</p>
                            <div class="ml-2 flex-shrink-0 flex">
                                <p class="px-2 bg-gray-300 text-gray-300 rounded-full w-20">b</p>
                            </div>
                        </div>
                        <div class="sm:flex sm:justify-between">
                            <p class="flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl" >c</p>
                        </div>
                    </div>
                </div>
            </template>

            <template v-else>
                <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
                    <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                        <template v-for="history in props.history.data" :key="history.id">
                            <li>
                                <Link :href="route('history.show', history.order_id)" class="block hover:bg-primary-50" >
                                    <div class="px-4 py-4 sm:px-6">
                                        <div class="flex items-center justify-between">
                                            <p class="text-sm font-medium truncate capitalize"
                                               :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                                {{ history.product_name }}
                                                <template v-if="history.virtual_account">{{ history.virtual_account.bank }}</template>
                                                <template v-else-if="history.wallet_account">{{ history.wallet_account.bank }}</template>
                                                <template v-else-if="history.offline_account">{{ history.offline_account.bank }}</template>
                                                <template v-else-if="history.manual_account">{{ history.manual_account.bank }}</template>

                                                <template v-else-if="history.money_transfer">
                                                    <template v-if="history.user_id == $page.props.user.id">
                                                        ke {{ history.money_transfer.to.name }}
                                                    </template>
                                                    <template v-else>
                                                        dari {{ history.user.name }}
                                                    </template>
                                                </template>
                                            </p>
                                            <div class="ml-2 flex-shrink-0 flex">
                                                <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                                                   :class="history.color"
                                                >
                                                    {{ history.status }}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="flex justify-between">
                                            <div class="flex">
                                                <p class="flex items-center text-xs" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                                    {{ history.category_id == 1 || history.user_id != $page.props.user.id ? '+' : '-' }}
                                                    Rp {{ history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount) }}
                                                </p>
                                            </div>
                                            <div class="flex items-center text-xs" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                                {{ formattedDate(history.created_at) }}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </template>
                    </ul>
                </div>
            </template>

        </div>

        <div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300">
            <div class="flex w-full items-center justify-between space-x-6 p-3">
                <div class="flex-1 truncate">
                    <div class="flex items-center space-x-3">
                        <h3 class="truncate text-sm font-medium text-gray-900">Waykapay Protection</h3>
                        <span class="inline-block flex-shrink-0 rounded-full font-medium text-green-600" >
                            <i class="fa-solid fa-shield-check text-lg" />
                        </span>
                    </div>
                    <!--                    <p class="mt-1 truncate text-sm text-gray-500">bbbbb</p>-->
                </div>
                <!--                <i class="fa-brands fa-whatsapp-square text-3xl flex-shrink-0" />-->
            </div>
            <div>
                <div class="flex justify-between">
                    <div class="flex flex-1">
                        <p class="relative inline-flex flex-1 items-center justify-center py-4 text-xs font-medium text-gray-700">
                            <i class="fa-regular fa-gauge-max text-primary-600"/>
                            <span class="ml-1">Realtime</span>
                        </p>
                    </div>
                    <div class="flex flex-1">
                        <p class="relative inline-flex flex-1 items-center justify-center py-4 text-xs font-medium text-gray-700">
                            <i class="fa-regular fa-clock text-primary-600"/>
                            <span class="ml-1">24 Jam</span>
                        </p>
                    </div>
                    <div class="flex flex-1" >
                        <p class="relative inline-flex flex-1 items-center justify-center py-4 text-xs font-medium text-gray-700">
                            <i class="fa-regular fa-badge-check text-primary-600"/>
                            <span class="ml-1">Proteksi</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

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
                        <img
                            :src="slide.media[0].original_url"
                            loading="lazy"
                            alt=""
                            class="rounded-3xl w-full h-auto aspect-video object-cover p-1"
                        >
                    </Link>
                </SwiperSlide>
            </template>
        </swiper>

        <MobileMenu/>
    </AppLayout>
</template>
