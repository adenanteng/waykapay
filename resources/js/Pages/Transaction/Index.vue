<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router, usePage} from "@inertiajs/vue3";
import moment from "moment";

const props = defineProps({
    // transaction: undefined,
    trx: undefined,
    admin: undefined,
    amount: undefined,
    gross_amount: undefined,
    prev_trx: undefined,
    prev_amount: undefined,
    prev_gross_amount: undefined,
})

onMounted(() => {
    router.reload({ only: ['trx', 'admin', 'amount', 'gross_amount', 'prev_trx', 'prev_amount', 'prev_gross_amount'] })

})

let stats = []

// Watch for set Reload prop. If True Partial lazy Load Reload.
watch(() => props.amount,
    () => {
        console.log(props.prev_amount);
        if (props.amount) {
            stats = [
                {
                    name: 'Total Keuntungan',
                    stat: 'Rp ' + formatPrice(Number(props.gross_amount) - Number(props.amount)),
                    previousStat: 'Rp ' + formatPrice(Number(props.prev_gross_amount) - Number(props.prev_amount)),
                    change: '12%',
                    changeType: 'increase'
                },
                {
                    name: 'Transaksi Sukses',
                    stat: props.trx,
                    previousStat: props.prev_trx,
                    change: '12%',
                    changeType: 'increase'
                },
                {
                    name: 'Modal',
                    stat: 'Rp ' + formatPrice(Number(props.amount)),
                    previousStat: 'Rp ' + formatPrice(Number(props.prev_amount)),
                    change: '2.02%',
                    changeType: 'increase'
                },
                {
                    name: 'Omzet',
                    stat: 'Rp ' + formatPrice(Number(props.gross_amount)),
                    previousStat: 'Rp ' + formatPrice(Number(props.prev_gross_amount)),
                    change: '4.05%',
                    changeType: 'decrease'
                },
            ]
        }
    }
)

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <AppLayout title="Transaksi"
               name="Transaksi"
               desc="Riwayat transaksi semua pengguna"
    >
        <div>
            {{ props.admin }}
            <h3 class="font-medium text-gray-900">Bulan ini</h3>
            <dl class="mt-2 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 overflow-hidden rounded-3xl bg-white bg-opacity-50 backdrop-blur border border-gray-300 shadow-lg md:grid-cols-4 md:divide-y-0 md:divide-x">
                <div v-for="item in stats" :key="item.name" class="px-4 py-5 sm:p-6">
                    <dt class="text-sm font-normal text-gray-900">{{ item.name }}</dt>
                    <dd class="mt-1 flex items-end justify-between md:block lg:flex">
                        <div class="grid items-baseline text-lg font-semibold text-primary-600">
                            {{ item.stat }}
                            <span class="text-xs font-medium text-gray-500">dari {{ item.previousStat }}</span>
                        </div>

                        <div :class="[item.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800', 'inline-flex items-baseline px-2.5 py-0.5 rounded-full text-sm font-medium md:mt-2 lg:mt-0']">
                            <i class="mr-2 text-xs text-green-500 fa-regular fa-arrow-up" v-if="item.changeType === 'increase'" />
                            <i class="mr-2 text-xs text-red-500 fa-regular fa-arrow-down" v-else />
                            {{ item.change }}
                        </div>
                    </dd>
                </div>
            </dl>
        </div>

        <div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300">
            <div class="flex w-full items-center justify-between space-x-6 p-6">
                <div class="flex-1 truncate">
                    <div class="flex items-center space-x-3">
                        <h3 class="truncate text-sm text-gray-600">Total Laba</h3>
<!--                        <span class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">-->
<!--                            {{ props.transaction.total }} Transaksi-->
<!--                        </span>-->
                    </div>
                    <p class="mt-1 truncate text-sm font-medium text-gray-900">Rp {{ formatPrice(Number(props.gross_amount) - Number(props.amount)) }}</p>
                </div>
                <i class="fa-duotone fa-money-bill-1-wave text-green-600 text-3xl flex-shrink-0" />
            </div>
            <div>
                <div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600">
                    <div class="flex w-0 flex-1">
                        <div class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4">
<!--                            <i class="fa-duotone fa-money-bill-wave text-green-400"/>-->
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Modal</div>
                                <div class="text-sm font-medium text-gray-700">Rp {{ formatPrice(Number(props.amount)) }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-0 flex-1">
                        <div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4">
<!--                            <i class="fa-duotone fa-coins text-amber-400"/>-->
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Omzet</div>
                                <div class="text-sm font-medium text-gray-700">Rp {{ formatPrice(Number(props.gross_amount)) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Link :href="route('transaction.detail')">Detail -></Link>


    </AppLayout>
</template>
