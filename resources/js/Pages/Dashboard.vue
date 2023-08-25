<script setup>
import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import moment from "moment";
import 'vue3-carousel/dist/carousel.css'
// import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

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
        name: 'Topup Games',
        href: 'games.index',
        icon: 'fa-gamepad-modern',
        bg: 'from-blue-600'
    },
    {
        name: 'Topup E-Money',
        href: 'emoney.index',
        icon: 'fa-wallet',
        bg: 'from-red-600'
    },
    {
        name: 'Langganan TV',
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
    // console.log(swiper);
};
const onSlideChange = () => {
    // console.log('slide change');
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
                <h2 class="tracking-tight nightwind-prevent-block">
                    <span class="block text-sm font-medium text-gray-200">Saldo Rekening</span>
                    <span class="block text-xl font-extrabold text-white">
                        Rp {{ formatPrice($page.props.user.wallet_balance) }}
                    </span>
                </h2>
                <div class="mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2">
                    <PrimaryButton as="a" :href="route('deposit.index')" class="">
<!--                        <i class="fa-regular fa-coins mr-1"/>-->
                        Isi Ulang
                    </PrimaryButton>

                    <SecondaryButton as="a" :href="route('money-transfer.index')" class="nightwind-prevent">
<!--                        <i class="fa-regular fa-coins mr-1"/>-->
                        Kirim Uang
                    </SecondaryButton>
                </div>
            </div>
        </div>

<!--        <div-->
<!--            class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg">-->
<!--            <div class="p-6">-->
<!--                <div class="grid grid-cols-4 gap-x-6 gap-y-10 lg:grid-cols-6 lg:gap-x-8">-->
<!--                    <Link :href="route('pulsa.index')" class="group text-center">-->
<!--                        <i class="fa-regular fa-mobile text-4xl text-primary-600 group-hover:text-primary-800"/>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">Pulsa</h3>-->
<!--                    </Link>-->

<!--                    <Link :href="route('pln.index')" class="group text-center">-->
<!--                        <i class="fa-regular fa-lightbulb text-4xl text-primary-600 group-hover:text-primary-800"/>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">Listrik</h3>-->
<!--                    </Link>-->

<!--                    <Link :href="route('games.index')" class="group text-center">-->
<!--                        <i class="fa-regular fa-gamepad-modern text-4xl text-primary-600 group-hover:text-primary-800"/>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">Games</h3>-->
<!--                    </Link>-->

<!--                    <Link :href="route('emoney.index')" class="group text-center">-->
<!--                        <i class="fa-regular fa-wallet text-4xl text-primary-600 group-hover:text-primary-800"/>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">E-Money</h3>-->
<!--                    </Link>-->

<!--                    <Link :href="route('television.index')" class="group text-center">-->
<!--                        <i class="fa-regular fa-tv-retro text-4xl text-primary-600 group-hover:text-primary-800"/>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">TV</h3>-->
<!--                    </Link>-->

<!--                    <Link :href="route('internet.index')" class="group text-center">-->
<!--                        <i class="fa-regular fa-router text-4xl text-primary-600 group-hover:text-primary-800"/>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">Internet</h3>-->
<!--                    </Link>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <carousel :items-to-show="1" :breakpoints="breakpoints">-->
<!--            <slide>-->
<!--                <Link :href="route('pulsa.index')" class="group rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg">-->
<!--                    <div class="">-->
<!--                        <i class="fa-regular fa-tv-retro text-4xl text-primary-600 group-hover:text-primary-800"/>-->
<!--                        <h3 class="mt-2 text-sm text-gray-700">TV</h3>-->
<!--                    </div>-->
<!--                </Link>-->
<!--            </slide>-->
<!--        </carousel>-->

        <swiper
            :modules="modules"
            :slides-per-view="2.5"
            :space-between="10"
            :breakpoints="{
                '640': {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                '768': {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
                '1024': {
                    slidesPerView: 5,
                    spaceBetween: 10,
                },
            }"
        >
            <template v-for="menu in menus" :key="menu.name">
                <SwiperSlide >
                    <Link :href="route(menu.href)" class="text-right">
                        <div class="px-5 py-3 rounded-3xl bg-gradient-to-br overflow-hidden nightwind-prevent-block" :class="menu.bg">
                            <h3 class="text-sm text-white text-left font-semibold">{{ menu.name }}</h3>
                            <i class="mt-2 fa-regular text-4xl text-white" :class="menu.icon" />
                        </div>
                    </Link>
                </SwiperSlide>
            </template>

        </swiper>

        <swiper
            :slides-per-view="1"
            :space-between="10"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
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
                    <Link :href="slide.href">
                        <img :src="slide.media[0].original_url"  alt="" class="rounded-3xl aspect-video object-cover p-1">
                    </Link>
                </SwiperSlide>
            </template>

        </swiper>

<!--        <Carousel :items-to-show="1" :wrapAround=true :autoplay=5000 :breakpoints="breakpoints">-->
<!--            <Slide v-for="slide in props.carousel" :key="slide.id" class="">-->
<!--                <Link :href="slide.href">-->
<!--                    <img :src="slide.media[0].original_url"  alt="" class="rounded-3xl aspect-video object-cover p-1">-->
<!--                </Link>-->
<!--            </Slide>-->

<!--            <template #addons>-->
<!--&lt;!&ndash;                <navigation />&ndash;&gt;-->
<!--&lt;!&ndash;                <pagination />&ndash;&gt;-->
<!--            </template>-->
<!--        </Carousel>-->

        <MobileMenu/>
    </AppLayout>
</template>
