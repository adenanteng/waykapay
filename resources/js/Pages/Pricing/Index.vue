<script setup>
import {computed, onMounted, onUnmounted, ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import moment from "moment";
import { Vue3Lottie } from 'vue3-lottie'
import Badge from "../../Components/Badge.vue";
import PrimaryButton from "../../Components/PrimaryButton.vue";
import TextInput from "../../Components/TextInput.vue";
import Pagination from "../../Components/Pagination.vue";
import SelectInput from "../../Components/SelectInput.vue";
import Loading from "../Product/Loading.vue";

const props = defineProps({
    // product: undefined,
    product: {
        type: Object,
        default: () => ({}),
    },
    // filters: {
    //     type: Object,
    //     default: () => ({}),
    // },
})

// onMounted(() => {
//     router.reload({ only: ['product'] })
// })

// let search = ref(props.filters.search);
// let filter = ref(props.filters.filter);
// watch([search, filter], ([value, valueF]) => {
//     router.get(
//         route('product.index'),
//         { search: value, filter: valueF },
//         {
//             preserveState: true,
//             replace: true,
//         }
//     )
// });


// watch(filter, (value) => {
//     router.get(
//         route('product.index'),
//         { filter: value },
//         {
//             preserveState: true,
//             replace: true,
//         }
//     );
// });


function formatDateNow() {
    return moment().format('DD MMM Y HH:mm')
}

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

// const sort = computed(() =>
//     props.product.data.slice()
//     .sort((a, b) => a.category.localeCompare(b.category))
//     .sort((a, b) => a.brand.localeCompare(b.brand))
//     .sort((a, b) => a.price - b.price)
// );

const order = (unordered) => Object.keys(unordered).sort().reduce(
    (obj, key) => {
        obj[key] = unordered[key];
        return obj;
    }, {}
);

const sortObjectDeeply = (object) => {
    for (let [key, value] of Object.entries(object)) {
        if (typeof(value) === "object") {
            object[key] = sortObjectDeeply(value)
        }
    }
    return order(object)
}

function sort(arr) {
    return arr.slice().sort(function (a, b) {
        return a.price - b.price;
    });
}

</script>

<template>
    <AppLayout title="Daftar Harga"
               name="Daftar Harga"
               desc="Daftar harga produk per"
    >

<!--        {{ sortObjectDeeply(props.product.data) }}-->
        <div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300">
            <div class="flex w-full items-center justify-between space-x-6 p-6">
                <div class="flex-1 truncate">
                    <div class="flex items-center space-x-3">
                        <h3 class="truncate text-sm text-gray-600">Total Produk</h3>
<!--                        <span class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">-->
<!--                            {{ props.product.total }} Transaksi-->
<!--                        </span>-->
                    </div>
<!--                    <p class="mt-1 truncate text-sm font-medium text-gray-900" v-if="props.product">{{ props.product.data.length }}</p>-->
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
                                <div class="text-sm font-medium text-gray-700">Rp </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex w-0 flex-1">
                        <div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4">
<!--                            <i class="fa-duotone fa-coins text-amber-400"/>-->
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Tanggal</div>
                                <div class="text-sm font-medium text-gray-700">{{ formatDateNow() }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

<!--        <div class="flex justify-between gap-3">-->
<!--            <div class="">-->
<!--                <TextInput-->
<!--                    type="text"-->
<!--                    v-model="search"-->
<!--                    placeholder="Cari disini"-->
<!--                    class="block w-full lg:w-96 shadow"-->
<!--                />-->
<!--            </div>-->

<!--            <div class="">-->
<!--                <SelectInput-->
<!--                    v-model:model-value.number="filter"-->
<!--                    :option="$page.props.selectCategory"-->
<!--                    class="block w-full lg:w-96 shadow"-->
<!--                />-->
<!--            </div>-->
<!--        </div>-->

<!--        <template v-if="props.product === undefined">-->
<!--            <div class="animate-pulse rounded-3xl bg-white shadow-lg border border-gray-300 divide-y divide-gray-300">-->
<!--                <div v-for="loader in 4" class="px-4 py-4 sm:px-6">-->
<!--                    <div class="flex items-center justify-between">-->
<!--                        <p class="bg-gray-300 text-gray-300 w-full rounded-3xl">a</p>-->
<!--                        <div class="ml-2 flex-shrink-0 flex">-->
<!--                            <p class="px-2 bg-gray-300 text-gray-300 rounded-full w-20">b</p>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                    <div class="mt-2 sm:flex sm:justify-between">-->
<!--                        <p class="flex items-center bg-gray-300 text-gray-300 w-1/2 rounded-3xl" >c</p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </template>-->

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <template v-if="props.product === undefined">
                <Loading />
            </template>

            <!--            <template v-else-if="props.response.data?.rc==83">-->
            <!--                <div class="grid justify-center">-->
            <!--                    <Vue3Lottie-->
            <!--                        animation-link="https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json"-->
            <!--                        :height="200"-->
            <!--                        :width="200"-->
            <!--                    />-->
            <!--                    <span class="text-sm text-gray-600 text-center">Ada yang salah, coba beberapa saat lagi.</span>-->
            <!--                </div>-->
            <!--            </template>-->

<!--            <template v-for="data in sortPrice" >-->
<!--&lt;!&ndash;                <template v-if="data.brand == props.product">&ndash;&gt;-->
<!--                    <div class="relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50">-->
<!--                        <div class="flex-shrink-0">-->
<!--&lt;!&ndash;                            <img class="w-10" :src="'/img/vendor/' + data.brand + '.svg'" alt="">&ndash;&gt;-->
<!--                        </div>-->
<!--                        <div class="flex-1 min-w-0">-->
<!--                            <template v-if="data.buyer_product_status">-->
<!--                                <button class="focus:outline-none text-left">-->
<!--                                    <span class="absolute inset-0" aria-hidden="true"></span>-->
<!--                                    <p class="text-sm font-medium text-gray-900">{{ data.product_name }}</p>-->
<!--                                    <p class="text-sm text-gray-500 truncate">-->
<!--                                        Rp {{ formatPrice(Number(data.price)) }}-->
<!--                                    </p>-->
<!--                                </button>-->
<!--                            </template>-->

<!--                            <template v-else>-->
<!--                                <div class="focus:outline-none text-left">-->
<!--                                    <p class="text-sm font-medium text-gray-500">{{ data.product_name }}</p>-->
<!--                                    <p class="text-sm text-gray-500 truncate">Tidak tersedia</p>-->
<!--                                </div>-->
<!--                            </template>-->
<!--                        </div>-->
<!--                    </div>-->
<!--&lt;!&ndash;                </template>&ndash;&gt;-->
<!--            </template>-->
        </div>

<!--        <Pagination :pagination="props.product" />-->

    </AppLayout>
</template>
