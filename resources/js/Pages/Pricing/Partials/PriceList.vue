<script setup>
import moment from "moment/moment";
import {computed} from "vue";
import {usePage} from "@inertiajs/vue3";
import FormatEmoney from "./FormatEmoney.vue";
import FormatPulsa from "./FormatPulsa.vue";
import Loading from "../../Product/Loading.vue";
import FormatVoucher from "./FormatVoucher.vue";
import FormatGames from "./FormatGames.vue";
import FormatTV from "./FormatTV.vue";
import FormatPln from "./FormatPln.vue";

const props = defineProps({
    list: Object,
    slug: String,
    title: String
})

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

// const {...appSetting} = computed(() => usePage().props.appSetting).value;

</script>

<template>
<!--    <template v-if="props.list === undefined">-->
<!--        <Loading/>-->
<!--    </template>-->

    <div v-for="(data, index) in props.list">
        <h3 class="text-gray-900 text-sm font-medium mx-5 mt-5 mb-2">{{ props.title }} {{ index }}</h3>
        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <li v-for="item in sort(data)">
                    <div class="relative px-6 py-5 flex items-center space-x-3">
                        <div class="flex-shrink-0">
                            <img
                                class="h-6"
                                :src="'/img/vendor/' + item.brand + '.svg'"
                                alt=""
                            >
<!--                            <img-->
<!--                                class="w-10 h-7"-->
<!--                                :src="'/img/games/icons/' + item.brand + '.png'"-->
<!--                                alt=""-->
<!--                            >-->
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="focus:outline-none text-left">
                                <span class="absolute inset-0" aria-hidden="true"></span>
                                <p class="text-sm font-medium text-gray-900">{{ item.product_name }}</p>
                                <p class="text-sm text-gray-500 truncate">
                                    <FormatPulsa :price="item.price" v-if="props.slug=='pulsa'" />
                                    <FormatEmoney :price="item.price" v-else-if="props.slug=='emoney'" />
                                    <FormatVoucher :price="item.price" v-else-if="props.slug=='voucher'" />
                                    <FormatGames :price="item.price" v-else-if="props.slug=='games'" />
                                    <FormatTV :price="item.price" v-else-if="props.slug=='tv'" />
                                    <FormatPln :price="item.price" v-else-if="props.slug=='pln'" />
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
