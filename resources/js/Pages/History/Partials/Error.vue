<script setup>

import ApplicationLogoTitle from "../../../Components/ApplicationLogoTitle.vue";
import moment from "moment/moment";

const props = defineProps({
    history: Object,
})

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}
</script>

<template>
    <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300">
        <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
            <!--                        <ApplicationLogo class="block sm:hidden" />-->
            <ApplicationLogoTitle class="block sm:hidden" />
            <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Transaksi {{ props.history.status }}</h3>
            <!--                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
        </div>
        <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6">
            <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900">
                <div class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Tanggal</div>
                    <div class="text-sm font-semibold">{{ formattedDate(props.history.updated_at) }}</div>
                </div>
                <div class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Kode Referensi</div>
                    <div class="text-sm font-semibold w-1/2 truncate">{{ props.history.order_id }}</div>
                </div>

                <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                <div class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Kategori</div>
                    <div class="text-sm font-semibold">{{ props.history.category }}</div>
                </div>

                <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.history.category_id == 1">
                    <div class="text-sm ">Sumber Dana</div>
                    <template v-if="props.history.virtual_account">
                        <div class="text-sm font-semibold uppercase">{{ props.history.virtual_account.bank }}</div>
                    </template>
                    <template v-else-if="props.history.wallet_account">
                        <div class="text-sm font-semibold uppercase">{{ props.history.wallet_account.bank }}</div>
                    </template>
                    <template v-else-if="props.history.offline_account">
                        <div class="text-sm font-semibold uppercase">{{ props.history.offline_account.bank }}</div>
                    </template>
                    <template v-else-if="props.history.manual_account">
                        <div class="text-sm font-semibold uppercase">{{ props.history.manual_account.bank }}</div>
                    </template>
                </div>

                <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.history.category_id != 99 || props.history.category_id != 1">
                    <div class="text-sm ">Produk</div>
                    <div class="text-sm font-semibold">{{ props.history.product_name.replaceAll("-", " ") }}</div>
                </div>

                <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.history.category_id != 99 || props.history.category_id != 1">
                    <div class="text-sm ">No. Kustomer</div>
                    <div class="text-sm font-semibold">{{ props.history.customer_no }}</div>
                </div>
                <!--                        <div class="sm:col-span-1 flex sm:block justify-between">-->
                <!--                            <div class="text-sm ">Status</div>-->
                <!--                            <div class="text-sm font-semibold"><Badge :name="props.history.status" /></div>-->
                <!--                        </div>-->
                <div class="sm:col-span-2 flex sm:block justify-between">
                    <div class="text-sm ">Keterangan</div>
                    <div class="text-sm font-semibold text-right sm:text-left">{{ props.history.desc ?? '-' }}</div>
                </div>

                <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                <!--                            <div class="sm:col-span-1 flex sm:block justify-between">-->
                <!--                                <div class="text-sm ">Nominal</div>-->
                <!--                                <div class="text-sm font-semibold">Rp {{ props.history.category_id == 1 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount) }}</div>-->
                <!--                            </div>-->
                <!--                            <div class="sm:col-span-1 flex sm:block justify-between">-->
                <!--                                <div class="text-sm ">Biaya Admin</div>-->
                <!--                                <div class="text-sm font-semibold">Rp {{ props.history.category_id == 1 ? formatPrice(props.history.admin_fee) : '0' }}</div>-->
                <!--                            </div>-->

                <!--                            <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />-->

                <!--                            <div class="sm:col-span-1 flex sm:block justify-between">-->
                <!--                                <div class="text-sm font-bold">Total</div>-->
                <!--                                <div class="text-sm font-bold">Rp {{ formatPrice(props.history.gross_amount) }}</div>-->
                <!--                            </div>-->
            </div>
        </div>
    </div>
</template>
