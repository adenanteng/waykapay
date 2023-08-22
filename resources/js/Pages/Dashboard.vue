<script setup>
import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import SectionTitle from "@/Components/SectionTitle.vue";
import moment from "moment";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
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




        <div
            class="rounded-3xl bg-gradient-to-bl from-primary-50 to-primary-300 bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg nightwind-prevent-block">
            <div class="py-4 px-4 sm:px-6 lg:py-8 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 class="tracking-tight">
                    <span class="block text-sm font-medium text-gray-600">Saldo Rekening</span>
                    <span class="block text-xl font-extrabold text-primary-600">
                        Rp {{ formatPrice($page.props.user.wallet_balance) }}
                    </span>
                </h2>
                <div class="mt-5 flex lg:mt-0 lg:flex-shrink-0 gap-x-2">
                    <PrimaryButton as="a" :href="route('deposit.index')">
<!--                        <i class="fa-regular fa-coins mr-1"/>-->
                        Deposit
                    </PrimaryButton>

                    <SecondaryButton as="a" :href="route('money-transfer.index')">
<!--                        <i class="fa-regular fa-coins mr-1"/>-->
                        Kirim Uang
                    </SecondaryButton>
                </div>
            </div>
        </div>

        <div
            class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg">
            <div class="p-6">
                <div class="grid grid-cols-4 gap-x-6 gap-y-10 lg:grid-cols-6 lg:gap-x-8">
                    <Link :href="route('pulsa.index')" class="group text-center">
                        <i class="fa-regular fa-mobile text-4xl text-primary-600 group-hover:text-primary-800"/>
                        <h3 class="mt-2 text-sm text-gray-700">Pulsa</h3>
                    </Link>

                    <Link :href="route('pln.index')" class="group text-center">
                        <i class="fa-regular fa-lightbulb text-4xl text-primary-600 group-hover:text-primary-800"/>
                        <h3 class="mt-2 text-sm text-gray-700">Listrik</h3>
                    </Link>

                    <Link :href="route('games.index')" class="group text-center">
                        <i class="fa-regular fa-gamepad-modern text-4xl text-primary-600 group-hover:text-primary-800"/>
                        <h3 class="mt-2 text-sm text-gray-700">Games</h3>
                    </Link>

                    <Link :href="route('emoney.index')" class="group text-center">
                        <i class="fa-regular fa-wallet text-4xl text-primary-600 group-hover:text-primary-800"/>
                        <h3 class="mt-2 text-sm text-gray-700">E-Money</h3>
                    </Link>

                    <Link :href="route('television.index')" class="group text-center">
                        <i class="fa-regular fa-tv-retro text-4xl text-primary-600 group-hover:text-primary-800"/>
                        <h3 class="mt-2 text-sm text-gray-700">TV</h3>
                    </Link>

                    <Link :href="route('internet.index')" class="group text-center">
                        <i class="fa-regular fa-router text-4xl text-primary-600 group-hover:text-primary-800"/>
                        <h3 class="mt-2 text-sm text-gray-700">Internet</h3>
                    </Link>
                </div>
            </div>
        </div>

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
            <template v-for="slide in props.carousel" :key="slide.id">
                <swiper-slide>
                    <Link :href="slide.href">
                        <img :src="slide.media[0].original_url"  alt="" class="rounded-3xl aspect-video object-cover p-1">
                    </Link>
                </swiper-slide>
            </template>
        </swiper>

        <carousel :items-to-show="1" :wrapAround=true :autoplay=5000 :breakpoints="breakpoints">
            <slide v-for="slide in props.carousel" :key="slide.id" class="">
                <Link :href="slide.href">
                    <img :src="slide.media[0].original_url"  alt="" class="rounded-3xl aspect-video object-cover p-1">
                </Link>
            </slide>

            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>

        <MobileMenu/>
    </AppLayout>
</template>
