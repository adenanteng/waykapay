<script setup>
import {computed, onMounted, onUnmounted, ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router, usePage} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import moment from "moment";
import { Vue3Lottie } from 'vue3-lottie'
import Badge from "../../Components/Badge.vue";
import Pusher from "pusher-js";
import Echo from "laravel-echo";

const props = defineProps({
    history: undefined,
    in_count: undefined,
    out_count: undefined,
    all_process: undefined,
    filters: {
        type: Object,
        default: () => ({}),
    },
})

onMounted(() => {
    router.reload({ only: ['history', 'history_count', 'in_count', 'out_count', 'all_process', 'filters'] })
})

onUnmounted(() => {
    // clearInterval(interval)
    window.Echo.leave('transaction-channel')
})

// const interval = setInterval(() => {
//     console.log('interval');
//     router.reload({ only: ['history', 'in_count', 'out_count', 'all_process'] })
// }, 10000)

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

// if (typeof window !== 'undefined') {
//     const tabHistory = ref(JSON.parse(localStorage.getItem('tabHistory')) ?? 2)
//
//     watch(tabHistory, (newTabHistory) => {
//         console.log(`tab is ${newTabHistory}`)
//         localStorage.setItem('tabHistory', JSON.stringify(newTabHistory))
//     })
// }

const {...userInfo} = computed(() => usePage().props.user).value;
// console.log(userInfo.name); // Show my user name

if (typeof window !== 'undefined') {
    window.Pusher = Pusher;

    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: import.meta.env.VITE_PUSHER_APP_KEY,
        cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
        forceTLS: true
    });

    let channel = window.Echo.channel('transaction-channel');
    channel.listen('.transaction-event', function (data) {
        if (data.action === 'reload' && data.user === userInfo.slug) {
            router.reload({ only: ['history', 'in_count', 'out_count', 'all_process'] })
            console.log(data.action, data.user)
        } else {
            console.log(data)
        }
    });
}

let filterPaginate = ref(props.filters.filterPaginate ?? 20);

watch([filterPaginate], ([valueP]) => {
    // console.log(date)
    router.get(
        route('history.index'),
        {
            filter_paginate: valueP,
        },
        {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            only: ['history', 'history_count', 'in_count', 'out_count', 'all_process', 'filters']
        }
    );
});

</script>

<template>
    <AppLayout title="Riwayat"
               name="Riwayat"
               desc="Riwayat transaksi kamu"
    >

        <div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300">
            <div class="flex w-full items-center justify-between space-x-6 p-6">
                <div class="flex-1 truncate">
                    <p class="mt-1 truncate text-sm text-gray-500">Bulan ini</p>
                    <h3 class="truncate text-sm font-medium text-gray-900">
                        {{ props.all_process }}
                        <span class="truncate text-xs text-gray-500">transaksi sukses</span>
                    </h3>
                </div>
            </div>
            <div>
                <div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600">
                    <div class="flex w-0 flex-1">
                        <div class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4">
                            <i class="fa-duotone fa-down text-primary-400"/>
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Uang Masuk</div>
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

<!--        <div class="sticky top-0 z-40 backdrop-blur border-b border-gray-200">-->
<!--            <nav class="-mb-px flex" aria-label="Tabs">-->
<!--&lt;!&ndash;                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"&ndash;&gt;-->
<!--&lt;!&ndash;                        :class="tabHistory==1 ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:border-gray-300' "&ndash;&gt;-->
<!--&lt;!&ndash;                        @click="tabHistory=1"&ndash;&gt;-->
<!--&lt;!&ndash;                >&ndash;&gt;-->
<!--&lt;!&ndash;                    Sukses&ndash;&gt;-->
<!--&lt;!&ndash;                </button>&ndash;&gt;-->

<!--                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"-->
<!--                        :class="tabHistory==2 ? 'border-primary-600 text-primary-600' : 'text-gray-500 border-gray-300' "-->
<!--                        @click="tabHistory=2"-->
<!--                >-->
<!--                    Proses <Badge class="ml-1 bg-primary-600 text-white" :name="props.on_process ?? 0" />-->
<!--                </button>-->

<!--                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"-->
<!--                        :class="tabHistory==99 ? 'border-green-600 text-green-600' : 'text-gray-500 border-gray-300 ' "-->
<!--                        @click="tabHistory=99"-->
<!--                >-->
<!--                    Semua <Badge class="ml-1 bg-green-600 text-white" :name="props.all_process ?? 0" />-->
<!--                </button>-->
<!--            </nav>-->
<!--        </div>-->

        <template v-if="props.history === undefined">
            <div class="animate-pulse rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y divide-gray-300">
                <div v-for="loader in 6" class="px-4 py-4 sm:px-6">
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

        <div v-else class="">
            <template v-for="(date, index) in props.history">
                <h3 class="text-sm text-gray-500 font-medium ml-5 mt-5 mb-1 flex items-center">
                    {{ index }}
                    <Badge :name="date.length + ' transaksi' " class="ml-3 text-xs text-primary-600 bg-primary-100" />
                </h3>
                <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300">
                    <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                        <template v-for="history in date" :key="history.id">
<!--                            <template v-if="history.status_id == tabHistory || tabHistory==99">-->
                            <li>
                                <Link preserve-scroll :href="route('history.show', history.order_id)" class="block hover:bg-primary-50" >
                                    <div class="px-4 py-4 sm:px-6">
                                        <div class="flex items-center justify-between">
                                            <p class="text-sm font-medium truncate capitalize"
                                               :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                                {{ history.product_name.replaceAll("-", " ") }}
                                                <template v-if="history.virtual_account">{{ history.virtual_account.bank }}</template>
                                                <template v-else-if="history.wallet_account">{{ history.wallet_account.bank }}</template>
                                                <template v-else-if="history.offline_account">{{ history.offline_account.bank }}</template>
                                                <template v-else-if="history.manual_account">{{ history.manual_account.bank }}</template>
                                                <template v-else-if="history.money_transfer">
                                                    <template v-if="history.user_id == $page.props.user.id">
                                                        ke {{ history.money_transfer?.to_name }}
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
<!--                            </template>-->
                        </template>
                    </ul>
                </div>
            </template>

            <div class="mt-10">
                <div class="text-sm text-center text-gray-600 mb-5">
                    Menampilkan <strong>{{ filterPaginate }}</strong> dari <strong>{{ $page.props.history_count }}</strong> hasil
                </div>

                <button class="w-full grid text-gray-900 font-medium"
                        @click="filterPaginate+=20"
                        v-if="filterPaginate <= $page.props.history_count"
                >
                    Selanjutnya
                    <i class="fa-regular fa-angle-down animate-bounce mt-1" />
                </button>

                <div class="px-4 py-4 sm:px-6 text-center text-gray-900 text-sm" v-else>
                    <Vue3Lottie
                        animation-link="https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json"
                        :height="200"
                        :width="200"
                    />
                    Eits, udah mentok hehe
                </div>
            </div>
        </div>


<!--        <template v-if="!on_process && on_process!==undefined && tabHistory==2" >-->
<!--            <div class="px-4 py-4 sm:px-6 text-center text-gray-900" >-->
<!--                <Vue3Lottie-->
<!--                    animation-link="https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json"-->
<!--                    :height="200"-->
<!--                    :width="200"-->
<!--                />-->
<!--                Tidak ada transaksi-->
<!--            </div>-->
<!--        </template>-->

<!--        <template v-if="!all_process && all_process!==undefined && tabHistory==99" >-->
<!--            <div class="px-4 py-4 sm:px-6 text-center text-gray-900" >-->
<!--                <Vue3Lottie-->
<!--                    animation-link="https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json"-->
<!--                    :height="200"-->
<!--                    :width="200"-->
<!--                />-->
<!--                Tidak ada transaksi-->
<!--            </div>-->
<!--        </template>-->

        <MobileMenu/>
    </AppLayout>
</template>
