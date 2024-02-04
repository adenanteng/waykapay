<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import moment from "moment";
import Badge from "../../Components/Badge.vue";
import PrimaryButton from "../../Components/PrimaryButton.vue";
import TextInput from "../../Components/TextInput.vue";
import Pagination from "../../Components/Pagination.vue";
import SelectInput from "../../Components/SelectInput.vue";
import VueDatePicker from '@vuepic/vue-datepicker';
// import '@vuepic/vue-datepicker/dist/main.css'
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import {Vue3Lottie} from "vue3-lottie";

const props = defineProps({
    transaction: undefined,
    // transaction: {
    //     type: Object,
    //     default: () => ({}),
    // },
    filters: {
        type: Object,
        default: () => ({}),
    },

    // amount: Number,
    // gross_amount: Number,
})

let search = ref(props.filters.search);
let filterStatus = ref(props.filters.filterStatus);
let filterCategory = ref(props.filters.filterCategory);
let filterPaginate = ref(props.filters.filterPaginate ?? 20);
const date = ref([]);

onMounted(() => {
    router.reload({ only: ['transaction', 'transactionCount', 'filters'] })
})

watch([search, filterStatus, filterCategory, filterPaginate, date], ([value, valueFS, valueFC, valueP, valueD]) => {
    // console.log(date)
    router.get(
        route('transaction.detail'),
        {
            search: value,
            filter_status: valueFS,
            filter_category: valueFC,
            filter_paginate: valueP,
            date_start: valueD ? valueD[0] : null,
            date_end: valueD ? valueD[1] : null
        },
        {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            only: ['transaction', 'transactionCount', 'filters']
        }
    )
});

const formatter = ref({
    date: 'YYYY-MM-DD',
    month: 'MMM',
})

const options = ref({
    shortcuts: {
        today: "Hari ini",
        yesterday: "Kemarin",
        past: (period) => period + " hari terakhir",
        currentMonth: "Bulan ini",
        pastMonth: "Bulan lalu",
    },
    footer: {
        apply: "Terapkan",
        cancel: "Batal",
    },
});

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

// const tabHistory = ref(JSON.parse(localStorage.getItem('tabHistory')) ?? 2)
//
// watch(tabHistory, (newTabHistory) => {
//     console.log(`tab is ${newTabHistory}`)
//     localStorage.setItem('tabHistory', JSON.stringify(newTabHistory))
// })

</script>

<template>
    <AppLayout title="Transaksi"
               name="Transaksi"
               desc="Riwayat transaksi semua pengguna"
    >

        <div class="">
            <div class="w-full">
                <TextInput
                    type="text"
                    v-model="search"
                    placeholder="Cari disini"
                    class="block w-full lg:w-96 shadow"
                />
            </div>
        </div>

        <div class="grid lg:flex space-y-5 lg:space-y-0 lg:gap-3">
            <div class="w-full ">
                <!--                <VueDatePicker-->
                <!--                    v-model="date"-->
                <!--                    locale="id"-->
                <!--                    cancelText="Batal"-->
                <!--                    selectText="Pilih"-->
                <!--                    :enable-time-picker="false"-->
                <!--                    month-name-format="long"-->
                <!--                    hide-input-icon-->
                <!--                    range-->
                <!--                />-->

                <vue-tailwind-datepicker
                    v-model="date"
                    input-classes="bg-white text-black border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm rounded-full "
                    :options="options"
                    :formatter="formatter"
                    placeholder="Bulan"
                    separator=" - "
                    use-range
                    as-single
                    i18n="id"
                />
            </div>

            <div class="grid grid-cols-2 gap-2 w-full">
                <SelectInput
                    v-model:model-value.number="filterStatus"
                    :option="$page.props.selectStatus"
                    class="block w-full shadow"
                />

                <SelectInput
                    v-model:model-value.number="filterCategory"
                    :option="$page.props.selectCategory"
                    class="block w-full shadow"
                />

            </div>
        </div>

        <template v-if="props.transaction === undefined">
            <div class="animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300">
                <div v-for="loader in 4" class="px-4 py-4 sm:px-6">
                    <div class="flex items-center justify-between">
                        <p class="bg-gray-300 text-gray-300 w-full rounded-3xl">a</p>
                        <div class="ml-2 flex-shrink-0 flex">
                            <p class="px-2 bg-gray-300 text-gray-300 rounded-full w-20">b</p>
                        </div>
                    </div>
                    <div class="mt-2 sm:flex sm:justify-between">
                        <p class="flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl" >c</p>
                    </div>
                </div>
            </div>
        </template>

        <div v-else class="">
<!--            <template v-for="(date, index) in props.transaction.items">-->
<!--                <h3 class="text-sm text-gray-500 font-medium ml-5 mt-5 mb-1">{{ index }}</h3>-->

            <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300">
                    <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                        <template v-for="history in props.transaction.data" :key="history.id">
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
                                        <div class="flex items-end" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                            <p class="font-medium text-sm mr-2">{{ history.user.name }}</p>
                                            <p class="text-xs">#{{ history.user.slug }}</p>
                                        </div>
                                        <div class=" flex justify-between">
                                            <div class="flex">
<!--                                                <p class="flex items-center text-sm mr-2" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">-->
<!--                                                    #{{ history.order_id }}-->
<!--                                                </p>-->
                                                <p class="flex items-center text-xs" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                                    <!--                                            {{ history.category_id == 1 || history.user_id != $page.props.user.id ? '+' : '-' }}-->
                                                    Rp {{ history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount) }}
                                                </p>
                                                <!--                                            <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">-->
                                                <!--                                                <i class="fa-regular fa-down-to-bracket text-gray-500 pr-2" />-->
                                                <!--                                                {{ history.customer_no }}-->
                                                <!--                                            </p>-->
                                            </div>
                                            <div class="flex items-center text-xs" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                                <!--                                            <i class="fa-regular fa-calendar pr-2" />-->
                                                {{ formattedDate(history.created_at) }}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        </template>
                    </ul>
                </div>

<!--            </template>-->
        </div>

        <div class="">
            <div class="text-sm text-center text-gray-600 mb-5">
                Menampilkan <strong>{{ filterPaginate }}</strong> dari <strong>{{ $page.props.transactionCount }}</strong> hasil
            </div>

            <button class="w-full grid text-gray-900 font-medium"
                    @click="filterPaginate+=20"
                    v-if="filterPaginate <= $page.props.transactionCount"
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

<!--        <Pagination :pagination="props.transaction" >-->
<!--            <template #select>-->
<!--                <SelectInput-->
<!--                    v-model:model-value.number="filterPaginate"-->
<!--                    :option="$page.props.selectPaginate"-->
<!--                    class="block text-center shadow"-->
<!--                />-->
<!--            </template>-->
<!--        </Pagination>-->

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

<!--        <MobileMenu/>-->
    </AppLayout>
</template>
