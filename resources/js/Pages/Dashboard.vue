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


const props = defineProps({
    users: Object,
    history: Object,
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
        itemsToShow: 3,
        snapAlign: 'center',
    },
    // 1024 and up
    1024: {
        itemsToShow: 4,
        snapAlign: 'center',
    },
}

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
                        <i class="fa-regular fa-coins mr-1"/>
                        Deposit
                    </PrimaryButton>

<!--                    <SecondaryButton >-->
<!--                        <i class="fa-regular fa-coins mr-1"/>-->
<!--                        Withdraw-->
<!--                    </SecondaryButton>-->
                </div>
            </div>
        </div>

        <div
            class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg">
            <div class="p-6">
                <div class="grid grid-cols-4 gap-x-6 gap-y-10 xl:grid-cols-4 xl:gap-x-8">
                    <Link :href="route('product.pulsa')" class="group text-center">
                        <i class="fa-duotone fa-mobile text-4xl text-primary-600 group-hover:text-primary-800"/>
                        <h3 class="mt-2 text-sm text-gray-700">Pulsa</h3>
                    </Link>

                    <Link :href="route('product.pln')" class="group text-center">
                        <i class="fa-duotone fa-lightbulb text-4xl text-primary-600 group-hover:text-primary-800"/>
                        <h3 class="mt-2 text-sm text-gray-700">Listrik</h3>
                    </Link>

                    <Link :href="route('product.games')" class="group text-center">
                        <i class="fa-duotone fa-gamepad-modern text-4xl text-primary-600 group-hover:text-primary-800"/>
                        <h3 class="mt-2 text-sm text-gray-700">Games</h3>
                    </Link>

                    <Link :href="route('product.emoney')" class="group text-center">
                        <i class="fa-duotone fa-wallet text-4xl text-primary-600 group-hover:text-primary-800"/>
                        <h3 class="mt-2 text-sm text-gray-700">Topup</h3>
                    </Link>
                </div>
            </div>
        </div>

        <carousel :items-to-show="1" :wrapAround=true :autoplay=5000 :breakpoints="breakpoints">
            <slide v-for="slide in props.carousel" :key="slide.id" class="">
                <Link :href="slide.href">
                    <img :src="slide.media[0].original_url"  alt="" class="rounded-3xl aspect-video object-cover p-1">
                </Link>
            </slide>

<!--            <template #addons>-->
<!--                <navigation />-->
<!--                <pagination />-->
<!--            </template>-->
        </carousel>

<!--        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">-->
<!--            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">-->
<!--                <template v-for="history in $page.props.history">-->
<!--                        <li>-->
<!--                            <Link preserve-scroll :href="route('history.show', history)" class="block hover:bg-primary-50" >-->
<!--                                <div class="px-4 py-4 sm:px-6">-->
<!--                                    <div class="flex items-center justify-between">-->
<!--                                        <p class="font-medium text-primary-600 truncate">{{ history.product_name }}</p>-->
<!--                                        <div class="ml-2 flex-shrink-0 flex">-->
<!--                                            <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "-->
<!--                                                :class="history.status_id == 1 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"-->
<!--                                            >-->
<!--                                                {{ history.status }}-->
<!--                                            </p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                    <div class="mt-2 sm:flex sm:justify-between">-->
<!--                                        <div class="sm:flex">-->
<!--                                            <p class="flex items-center text-sm text-gray-900">-->
<!--&lt;!&ndash;                                                <i class="fa-regular text-gray-500 pr-2" :class="history.category_id == 1 ? 'fa-plus' : 'fa-minus' " />&ndash;&gt;-->
<!--                                                {{ history.category_id == 1 ? '+' : '-' }} Rp {{ formatPrice(history.amount) }}-->
<!--                                            </p>-->
<!--&lt;!&ndash;                                            <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">&ndash;&gt;-->
<!--&lt;!&ndash;                                                <i class="fa-regular fa-down-to-bracket text-gray-500 pr-2" />&ndash;&gt;-->
<!--&lt;!&ndash;                                                Remote&ndash;&gt;-->
<!--&lt;!&ndash;                                            </p>&ndash;&gt;-->
<!--                                        </div>-->
<!--                                        <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">-->
<!--                                            <i class="fa-regular fa-calendar text-gray-500 pr-2" />-->
<!--                                            <p>-->
<!--                                                {{ formattedDate(history.created_at) }}-->
<!--                                            </p>-->
<!--                                            <p class="text-gray-900 ml-2">-->
<!--                                                {{ formattedTime(history.created_at) }}-->
<!--                                            </p>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </Link>-->
<!--                        </li>-->

<!--                    </template>-->
<!--            </ul>-->
<!--        </div>-->

        <MobileMenu/>
    </AppLayout>
</template>
