<script setup>
import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import moment from "moment";
import PreviousButton from "@/Components/PreviousButton.vue"
import Badge from "../../Components/Badge.vue";
import { toClipboard } from '@soerenmartius/vue3-clipboard'
import Popper from "vue3-popper";
import {Link} from "@inertiajs/vue3";
import VueQrcode from "@chenfengyuan/vue-qrcode";

const props = defineProps({
    users: Object,
    history: Object
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

</script>

<template>
    <AppLayout :title="props.history.product_name"
               :name="props.history.product_name"
               desc="lorem ipsum dolor sit"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Detail Transaksi</h3>
<!--                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2">
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm font-medium text-gray-500">Waktu Transaksi</div>
                            <div class="text-sm text-gray-900">
                                <div class="flex items-center text-sm text-gray-500 sm:mt-0">
                                    <p>
                                        {{ formattedDate(props.history.created_at) }}
                                    </p>
                                    <p class="text-gray-900 ml-2">
                                        {{ formattedTime(props.history.created_at) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm font-medium text-gray-500">Id Transaksi</div>
                            <div class="text-sm text-gray-900">{{ props.history.order_id }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm font-medium text-gray-500">Kategori</div>
                            <div class="text-sm text-gray-900">{{ props.history.category }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm font-medium text-gray-500">Produk</div>
                            <div class="text-sm text-gray-900">{{ props.history.product_name }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm font-medium text-gray-500">No. Kustomer</div>
                            <div class="text-sm text-gray-900">{{ props.history.customer_no }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm font-medium text-gray-500">Status</div>
                            <div class="text-sm text-gray-900"><Badge :name="props.history.status" /></div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm font-medium text-gray-500">Bayar</div>
                            <div class="text-sm text-gray-900">Rp {{ props.history.category_id == 1 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount) }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm font-medium text-gray-500">Biaya Admin</div>
                            <div class="text-sm text-gray-900">Rp {{ props.history.category_id == 1 ? formatPrice(props.history.admin_fee) : '0' }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm font-medium text-gray-500">Total Bayar</div>
                            <div class="text-sm text-gray-900">Rp {{ formatPrice(props.history.gross_amount) }}</div>
                        </div>
                        <div class="sm:col-span-2 flex sm:block justify-between">
                            <div class="text-sm font-medium text-gray-500">Ket</div>
                            <div class="text-sm text-gray-900">{{ props.history.desc ?? '-' }}</div>
                        </div>
                    </div>

            </div>
        </div>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <div class="px-4 py-5 sm:px-6">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Detail Pembayaran</h3>
<!--                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2">

                    <template v-if="props.history.virtual_account">
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <dt class="text-sm font-medium text-gray-500">Bank</dt>
                            <dd class="text-sm text-gray-900 uppercase">{{ props.history.virtual_account.bank }}</dd>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <dt class="text-sm font-medium text-gray-500">No. VA</dt>
                            <dd class="text-sm text-gray-900">
                                {{ props.history.virtual_account.va_number }}
                                <Popper class="text-sm text-primary-700 font-normal lowercase" content="Sukses copy" arrow placement="right-end">
                                    <button class="" @click="toClipboard(props.history.virtual_account.va_number)">
                                        <i class="fa-duotone fa-paste ml-2" />
                                    </button>
                                </Popper>
                            </dd>
                        </div>
                    </template>

                    <template v-if="props.history.wallet_account">
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <dt class="text-sm font-medium text-gray-500">Metode Pembayaran</dt>
                            <dd class="text-sm text-gray-900 uppercase">{{ props.history.wallet_account.bank }}</dd>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <dt class="text-sm font-medium text-gray-500">Qris</dt>
                            <dd class="text-sm text-gray-900 uppercase">
                                    <VueQrcode
                                    :value="props.history.wallet_account.qr_code"
                                    tag="svg"
                                    :options="{
                                                width: 200,
                                                color: {
                                                    dark: '#000',
                                                    light: '#fff',
                                                },
                                              }"
                                ></VueQrcode>
                            </dd>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <dt class="text-sm font-medium text-gray-500">Deeplink</dt>
                            <dd class="text-sm text-gray-900 uppercase"><a target="_blank" :href="props.history.wallet_account.payment_url" >Bayar</a></dd>
                        </div>
                    </template>
                </dl>
            </div>
        </div>

        <!--        <MobileMenu/>-->
    </AppLayout>
</template>
