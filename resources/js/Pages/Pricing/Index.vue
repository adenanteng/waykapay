<script setup>
import {computed, onMounted, onUnmounted, ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import moment from "moment";
import Loading from "../Product/Loading.vue";
import PriceList from "./Partials/PriceList.vue";

const props = defineProps({
    product_count: undefined,
    pulsa: undefined,
    data: undefined,
    emoney: undefined,
    voucher: undefined,
    games: undefined,
    tv: undefined,
    pln: undefined,
    // product: {
    //     type: Object,
    //     default: () => ({}),
    // },
    // filters: {
    //     type: Object,
    //     default: () => ({}),
    // },
})

onMounted(() => {
    router.reload({only: ['product_count', 'pulsa', 'data', 'emoney', 'voucher', 'games', 'tv', 'pln']})
})


function formatDateNow() {
    return moment().format('DD MMM Y HH:mm')
}

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formatPrice(value) {
    let val = (value / 1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function sort(arr) {
    return arr.slice().sort(function (a, b) {
        return a.price - b.price;
    });
}

const tab = ref('Semua')

const lists = [
    {
        name: 'Semua',
        slug: null,
        icon: 'fa-cube',
    },
    {
        name: 'Pulsa',
        slug: 'pulsa',
        icon: 'fa-mobile',
    },
    {
        name: 'Data',
        slug: 'pulsa',
        icon: 'fa-mobile',
    },
    {
        name: 'E-Money',
        slug: 'emoney',
        icon: 'fa-wallet',
    },
    {
        name: 'Voucher',
        slug: 'voucher',
        icon: 'fa-ticket',
    },
    {
        name: 'Games',
        slug: 'games',
        icon: 'fa-gamepad-modern',
    },
    {
        name: 'TV',
        slug: 'tv',
        icon: 'fa-tv-retro',
    },
    {
        name: 'PLN',
        slug: 'pln',
        icon: 'fa-lightbulb',
    },
]
</script>

<template>
    <AppLayout title="Daftar Harga"
               name="Daftar Harga"
               desc="Daftar harga produk per"
    >
        <div
            class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300">
            <div class="flex w-full items-center justify-between space-x-6 p-6">
                <div class="flex-1 truncate">
                    <div class="flex items-center space-x-3">
                        <h3 class="truncate text-sm text-gray-600">Total Produk</h3>
                        <!--                        <span class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">-->
                        <!--                            {{ props.product.total }} Transaksi-->
                        <!--                        </span>-->
                    </div>
                    <p class="mt-1 truncate text-sm font-medium text-gray-900">
                        {{ props.product_count }}</p>
                </div>
                <i class="fa-duotone fa-cube text-green-600 text-3xl flex-shrink-0"/>
            </div>
            <div>
                <div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600">
<!--                    <div class="flex w-0 flex-1">-->
<!--                        <div-->
<!--                            class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4">-->
<!--                            &lt;!&ndash;                            <i class="fa-duotone fa-money-bill-wave text-green-400"/>&ndash;&gt;-->
<!--                            <div class="ml-3">-->
<!--                                <div class="text-xs text-gray-500">Modal</div>-->
<!--                                <div class="text-sm font-medium text-gray-700">Rp</div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                    <div class="flex w-0 flex-1">
                        <div
                            class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4">
                            <!--                            <i class="fa-duotone fa-coins text-amber-400"/>-->
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Harga per tanggal</div>
                                <div class="text-sm font-medium text-gray-700">{{ formatDateNow() }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid sm:grid-cols-6 gap-5">
            <div class="sm:col-span-2">
                <div class="bg-white bg-opacity-50 border border-gray-300 rounded-3xl shadow-lg">
                    <div class="px-3 py-5 grid gap-3 ">
                        <h3 class="font-semibold text-gray-900 ml-2">
                            Produk Prabayar
                        </h3>

                        <template v-for="(list, listIdx) in lists" :key="list.id">
                            <button @click="tab=list.name">
                                <div
                                    class="rounded-3xl py-3 px-5 text-left"
                                    :class="tab==list.name ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-900' "
                                >
                                    <i class="fa-duotone mr-1 w-5" :class="list.icon" />
                                    {{ list.name }}
                                </div>
                            </button>
                        </template>

                    </div>
                </div>
            </div>

            <template v-if="props.pulsa === undefined">
                <Loading/>
            </template>

            <div v-else class="grid sm:col-span-4 gap-5">
<!--                <template v-for="list in lists">-->
<!--                    <PriceList :title="list.name" :slug="list.slug" :list="list.item" />-->
<!--                </template>-->

                <PriceList title="PULSA" slug="pulsa" :list="props.pulsa" v-if="tab=='Pulsa' || tab=='Semua' " />
                <PriceList title="DATA" slug="pulsa" :list="props.data" v-if="tab=='Data' || tab=='Semua' " />
                <PriceList title="E-MONEY" slug="emoney" :list="props.emoney" v-if="tab=='E-Money' || tab=='Semua' " />
                <PriceList title="VOUCHER" slug="voucher" :list="props.voucher" v-if="tab=='Voucher' || tab=='Semua' " />
                <PriceList title="GAMES" slug="games" :list="props.games" v-if="tab=='Games' || tab=='Semua' " />
                <PriceList title="TV" slug="tv" :list="props.tv" v-if="tab=='TV' || tab=='Semua' " />
                <PriceList title="PLN" slug="pln" :list="props.pln" v-if="tab=='PLN' || tab=='Semua' " />
            </div>
        </div>



        <!--        <Pagination :pagination="props.product" />-->

    </AppLayout>
</template>
