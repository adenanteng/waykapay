<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import moment from "moment";
import { Vue3Lottie } from 'vue3-lottie'
import Badge from "../../Components/Badge.vue";

const props = defineProps({
    transaction: undefined,
})

onMounted(() => {
    router.reload({ only: ['transaction'] })
})

// onUnmounted(() => {
//     clearInterval(interval)
// })

// const interval = setInterval(() => {
//     console.log('interval');
//     router.reload({ only: ['transaction'] })
// }, 10000)

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formattedTime(value) {
    return moment(value).format('HH:mm')
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
    <AppLayout title="Riwayat Transaksi"
               name="Riwayat Transaksi"
               desc="Lorem ipsum dolor sit amet"
    >

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

        <div v-else class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <template v-for="history in $page.props.transaction" :key="history.id">
                    <li>
                        <Link preserve-scroll :href="route('history.show', history.order_id)" class="block hover:bg-primary-50" >
                            <div class="px-4 py-4 sm:px-6">
                                <div class="flex items-center justify-between">
                                    <p class="font-medium truncate uppercase"
                                       :class="history.status_id == 1 || history.status_id == 2 ? 'text-primary-600' : 'text-gray-500'">
                                        {{ history.product_name }}
                                        <template v-if="history.virtual_account">{{ history.virtual_account.bank }}</template>
                                        <template v-else-if="history.wallet_account">{{ history.wallet_account.bank }}</template>
                                    </p>
                                    <div class="ml-2 flex-shrink-0 flex">
                                        <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                                            :class="history.color"
                                        >
                                            {{ history.status }}
                                        </p>
                                    </div>
                                </div>
                                <div class=" flex justify-between">
                                    <div class="flex">
                                        <p class="flex items-center text-sm" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
                                            {{ history.user.name }} #{{ history.user.slug }} <br>

                                            {{ history.category_id == 1 ? '+' : '-' }} Rp {{ history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount) }}
                                        </p>
<!--                                            <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">-->
<!--                                                <i class="fa-regular fa-down-to-bracket text-gray-500 pr-2" />-->
<!--                                                {{ history.customer_no }}-->
<!--                                            </p>-->
                                    </div>
                                    <div class="flex items-center text-sm" :class="history.status_id == 1 || history.status_id == 2 ? 'text-gray-900' : 'text-gray-500'">
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
