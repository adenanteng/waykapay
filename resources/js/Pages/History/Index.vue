<script setup>
import {onMounted, ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import moment from "moment";
import { Vue3Lottie } from 'vue3-lottie'
import Badge from "../../Components/Badge.vue";

const props = defineProps({
    history: undefined,
    in_count: undefined,
    out_count: undefined,
    on_process: undefined,
    all_process: undefined
})

onMounted(() => {
    console.log('history');
    router.reload({ only: ['history', 'in_count', 'out_count', 'on_process', 'all_process'] })
})

function formattedDate(value) {
    return moment(value).format('DD MMM Y')
}

function formattedTime(value) {
    return moment(value).format('HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const tabHistory = ref(JSON.parse(localStorage.getItem('tabHistory')) ?? 2)

watch(tabHistory, (newTabHistory) => {
    console.log(`tab is ${newTabHistory}`)
    localStorage.setItem('tabHistory', JSON.stringify(newTabHistory))
})

</script>

<template>
    <AppLayout title="Riwayat"
               name="Riwayat"
               desc="Lorem ipsum dolor sit amet"
    >

        <div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300">
<!--            <div class="flex w-full items-center justify-between space-x-6 p-6">-->
<!--                <div class="flex-1 truncate">-->
<!--                    <div class="flex items-center space-x-3">-->
<!--                        <h3 class="truncate text-sm font-medium text-gray-900">-->
<!--                            Bla bla-->
<!--                        </h3>-->
<!--                        <span class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">-->
<!--                            lorem ipsum-->
<!--                        </span>-->
<!--                    </div>-->
<!--                    <p class="mt-1 truncate text-sm text-gray-500">awww</p>-->
<!--                </div>-->
<!--            </div>-->
            <div>
                <div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600">
                    <div class="flex w-0 flex-1">
                        <div class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4">
                            <i class="fa-duotone fa-down text-primary-400"/>
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Uang masuk</div>
                                <div class="text-sm font-medium text-gray-700">Rp {{ formatPrice(props.in_count ?? 0) }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="-ml-px flex w-0 flex-1">
                        <div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4">
                            <i class="fa-duotone fa-up text-amber-400"/>
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Uang Keluar</div>
                                <div class="text-sm font-medium text-gray-700">Rp {{ formatPrice(props.out_count ?? 0) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sticky top-0 z-40 backdrop-blur border-b border-gray-200">
            <nav class="-mb-px flex" aria-label="Tabs">
<!--                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"-->
<!--                        :class="tabHistory==1 ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:border-gray-300' "-->
<!--                        @click="tabHistory=1"-->
<!--                >-->
<!--                    Sukses-->
<!--                </button>-->

                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tabHistory==2 ? 'border-primary-600 text-primary-600' : 'text-gray-500 border-gray-300' "
                        @click="tabHistory=2"
                >
                    Proses <Badge class="ml-1 bg-primary-600 text-white" :name="props.on_process ?? 0" />
                </button>

                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tabHistory==99 ? 'border-green-600 text-green-600' : 'text-gray-500 border-gray-300 ' "
                        @click="tabHistory=99"
                >
                    Semua <Badge class="ml-1 bg-green-600 text-white" :name="props.all_process ?? 0" />
                </button>
            </nav>
        </div>

        <template v-if="props.history === undefined">
<!--            <div class="px-4 py-4 sm:px-6">-->
<!--                <div class="flex items-center justify-center">-->
<!--                    <p class="text-sm font-medium text-gray-500">Tunggu sebentar</p>-->
<!--                </div>-->
<!--            </div>-->

            <div v-for="loader in 4" class="animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300">
                <div class="px-4 py-4 sm:px-6">
                    <div class="flex items-center justify-between">
                        <p class="bg-gray-300 text-gray-300 w-full rounded-3xl">a</p>
                        <div class="ml-2 flex-shrink-0 flex">
                            <p class="px-2 bg-gray-300 text-gray-300 rounded-full w-20">b</p>
                        </div>
                    </div>
                    <div class="mt-2 sm:flex sm:justify-between">
                        <div class="sm:flex">
                            <p class="flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl" >c</p>
                        </div>
                        <div class="mt-2 flex items-center bg-gray-300 text-gray-300 sm:mt-0 w-2/3 rounded-3xl" >d</div>
                    </div>
                </div>
            </div>
        </template>

        <div v-else class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <template v-for="history in $page.props.history" :key="history.id">
                    <template v-if="history.status_id == tabHistory || tabHistory==99">
                        <li>
                            <Link preserve-scroll :href="route('history.show', history)" class="block hover:bg-primary-50" >
                                <div class="px-4 py-4 sm:px-6">
                                    <div class="flex items-center justify-between">
                                        <p class="font-medium truncate"
                                           :class="history.status_id == 1 || history.status_id == 2 ? 'text-primary-600' : 'text-gray-500'">
                                            {{ history.product_name }}
                                        </p>
                                        <div class="ml-2 flex-shrink-0 flex">
                                            <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                                                :class="history.status_id == 1 || history.status_id == 2 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                                            >
                                                {{ history.status }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-2 sm:flex sm:justify-between">
                                        <div class="sm:flex">
                                            <p class="flex items-center text-sm" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                                {{ history.category_id == 1 ? '+' : '-' }} Rp {{ history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount) }}
                                            </p>
<!--                                            <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">-->
<!--                                                <i class="fa-regular fa-down-to-bracket text-gray-500 pr-2" />-->
<!--                                                {{ history.customer_no }}-->
<!--                                            </p>-->
                                        </div>
                                        <div class="mt-2 flex items-center text-sm sm:mt-0" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                            <i class="fa-regular fa-calendar pr-2" />
                                            <p>
                                                {{ formattedDate(history.created_at) }}
                                            </p>
                                            <p class="ml-2" >
                                                {{ formattedTime(history.created_at) }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </template>
                </template>
            </ul>
        </div>

        <template v-if="!on_process && on_process!==undefined && tabHistory===2" >
            <div class="px-4 py-4 sm:px-6 text-center text-gray-900" >
                <Vue3Lottie
                    animation-link="https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json"
                    :height="200"
                    :width="200"
                />
                Tidak ada transaksi
            </div>
        </template>

        <MobileMenu/>
    </AppLayout>
</template>
