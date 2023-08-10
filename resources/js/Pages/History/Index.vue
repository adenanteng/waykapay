<script setup>
import {ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import SectionTitle from "@/Components/SectionTitle.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import moment from "moment";

const props = defineProps({
    users: Object,
    history: Object,
    in_count: Number,
    out_count: Number
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

router.reload({ only: ['history'] })

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
                                <div class="text-sm font-medium text-gray-700">Rp {{ formatPrice(props.in_count) }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="-ml-px flex w-0 flex-1">
                        <div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4">
                            <i class="fa-duotone fa-up text-amber-400"/>
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Uang Keluar</div>
                                <div class="text-sm font-medium text-gray-700">Rp {{ formatPrice(props.out_count) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="border-b border-gray-200">
            <nav class="-mb-px flex" aria-label="Tabs">
<!--                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"-->
<!--                        :class="tabHistory==1 ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:border-gray-300' "-->
<!--                        @click="tabHistory=1"-->
<!--                >-->
<!--                    Sukses-->
<!--                </button>-->

                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tabHistory==2 ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:border-gray-300' "
                        @click="tabHistory=2"
                >
                    Proses
                </button>

                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tabHistory==99 ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:border-gray-300 ' "
                        @click="tabHistory=99"
                >
                    Semua
                </button>
            </nav>
        </div>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <template v-for="history in $page.props.history">
                    <template v-if="history.status_id == tabHistory || tabHistory==99">
                        <li>
                            <Link preserve-scroll :href="route('history.show', history)" class="block hover:bg-primary-50" >
                                <div class="px-4 py-4 sm:px-6">
                                    <div class="flex items-center justify-between">
                                        <p class="font-medium text-primary-600 truncate">{{ history.product_name }}</p>
                                        <div class="ml-2 flex-shrink-0 flex">
                                            <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                                                :class="history.status_id == 1 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                                            >
                                                {{ history.status }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-2 sm:flex sm:justify-between">
                                        <div class="sm:flex">
                                            <p class="flex items-center text-sm text-gray-900">
    <!--                                                <i class="fa-regular text-gray-500 pr-2" :class="history.category_id == 1 ? 'fa-plus' : 'fa-minus' " />-->
                                                {{ history.category_id == 1 ? '+' : '-' }} Rp {{ history.category_id == 1 ? formatPrice(history.amount) : formatPrice(history.gross_amount) }}
                                            </p>
    <!--                                        <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">-->
    <!--&lt;!&ndash;                                                <i class="fa-regular fa-down-to-bracket text-gray-500 pr-2" />&ndash;&gt;-->
    <!--                                            {{ history.order_id }}-->
    <!--                                        </p>-->
                                        </div>
                                        <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                            <i class="fa-regular fa-calendar text-gray-500 pr-2" />
                                            <p>
                                                {{ formattedDate(history.created_at) }}
                                            </p>
                                            <p class="text-gray-900 ml-2">
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

        <MobileMenu/>
    </AppLayout>
</template>
