<script setup>
import {onMounted, onUnmounted, ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router, usePage} from "@inertiajs/vue3";
import moment from "moment";
import PrimaryButton from "../../Components/PrimaryButton.vue";

const props = defineProps({
    // transaction: undefined,
    trx: undefined,
    gross_amount: undefined,
    agent_commission: undefined,

    prev_trx: undefined,
    prev_gross_amount: undefined,
    prev_agent_commission: undefined,
})

onMounted(() => {
    // router.reload({ only: ['trx'] })
})

const stats = [
    {
        name: 'Total Keuntungan',
        stat: 'Rp ' + formatPrice(props.agent_commission),
        previousStat: 'Rp ' + formatPrice(props.prev_agent_commission),
        change: 'Rp ' + formatPrice( Math.round((Number(props.agent_commission) - Number(props.prev_agent_commission)) ) ),
        changeType: Number(props.agent_commission) >= Number(props.prev_agent_commission) ? 'increase' : 'decrease',
    },
    {
        name: 'Transaksi Sukses',
        stat: props.trx,
        previousStat: props.prev_trx,
        change: Math.round((Number(props.trx) - Number(props.prev_trx))),
        changeType: Number(props.trx) >= Number(props.prev_trx) ? 'increase' : 'decrease',
    },
    {
        name: 'Perputaran Uang',
        stat: 'Rp ' + formatPrice(Number(props.gross_amount)),
        previousStat: 'Rp ' + formatPrice(Number(props.prev_gross_amount)),
        change: 'Rp ' + formatPrice( Math.round((Number(props.gross_amount) - Number(props.prev_gross_amount)) ) ),
        changeType: Number(props.gross_amount) >= Number(props.prev_gross_amount) ? 'increase' : 'decrease',
    },
]

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <AppLayout title="Laporan"
               name="Laporan"
               desc="Laporan transaksi bulan ini"
    >
        <div>
            <dl class="mt-2 grid grid-cols-1 divide-y divide-gray-300 dark:divide-gray-600 overflow-hidden rounded-3xl bg-white bg-opacity-50 backdrop-blur border border-gray-300 shadow-lg md:grid-cols-3 md:divide-y-0 md:divide-x">
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

        <PrimaryButton
            as="a"
            :href="route('report.detail')"
            class=""
        >
            Lihat Detail Laporan
            <i class="fa-duotone fa-arrow-right ml-2"/>
        </PrimaryButton>


    </AppLayout>
</template>
