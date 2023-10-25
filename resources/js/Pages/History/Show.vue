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
import ApplicationLogo from "../../Components/ApplicationLogo.vue";
import ApplicationMark from "../../Components/ApplicationMark.vue";
import SectionBorder from "../../Components/SectionBorder.vue";
import PrimaryButton from "../../Components/PrimaryButton.vue";

const props = defineProps({
    users: Object,
    history: Object
})

function formattedDate(value) {
    return moment(value).format('DD MMM Y | HH:mm')
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

        <template v-if="props.history.status_id == 1">
            <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
                <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
                    <ApplicationLogo class="block sm:hidden" />
                    <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Transaksi Berhasil</h3>
                    <!--                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
                </div>
                <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6">
                    <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900">
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Tanggal</div>
                            <div class="text-sm font-semibold">{{ formattedDate(props.history.updated_at) }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">No. Referensi</div>
                            <div class="text-sm font-semibold ">{{ props.history.order_id }}</div>
                        </div>

                        <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                        <template v-if="props.history.category_id == 1">
                            <div class="sm:col-span-1 flex sm:block justify-between" >
                                <div class="text-sm ">Kategori</div>
                                <div class="text-sm font-semibold">{{ props.history.category }}</div>
                            </div>
                        </template>

                        <template v-if="props.history.category_id == 1">
                            <div class="sm:col-span-1 flex sm:block justify-between" >
                                <div class="text-sm ">Sumber Dana</div>
                                <template v-if="props.history.virtual_account">
                                    <div class="text-sm font-semibold uppercase">{{ props.history.virtual_account.bank }}</div>
                                </template>
                                <template v-if="props.history.wallet_account">
                                    <div class="text-sm font-semibold uppercase">{{ props.history.wallet_account.bank }}</div>
                                </template>
                            </div>
                        </template>

                        <template v-if="props.history.category_id != 1">
                            <div class="sm:col-span-1 flex sm:block justify-between" >
                                <div class="text-sm ">Produk</div>
                                <div class="text-sm font-semibold uppercase">{{ props.history.product_name }}</div>
                            </div>
                        </template>

                        <template v-if="props.history.category_id != 1">
                            <div class="sm:col-span-1 flex sm:block justify-between" >
                                <div class="text-sm ">No. Kustomer</div>
                                <div class="text-sm font-semibold">{{ props.history.customer_no }}</div>
                            </div>
                        </template>

                        <template v-if="props.history.category_id == 5">
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm ">Nama Kustomer</div>
                                <div class="text-sm font-semibold">{{ props.history.desc.split('/')[1] }}</div>
                            </div>
                            <div class="sm:col-span-1 flex sm:block justify-between" >
                                <div class="text-sm ">Stroom</div>
                                <div class="text-sm font-bold">
                                    <Popper content="Sukses Copy" arrow placement="right-end">
                                        <button
                                            @click="toClipboard(props.history.desc.split('/')[0])"
                                            class=""
                                        >
                                            {{ props.history.desc.split('/')[0] }}
                                        </button>
                                    </Popper>

                                </div>
                            </div>
                        </template>

                        <template v-else >
                            <div class="sm:col-span-2 flex sm:block justify-between">
                                <div class="text-sm ">Keterangan</div>
                                <div class="text-sm font-semibold">{{ props.history.desc ?? '-' }}</div>
                            </div>
                        </template>

                        <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Nominal</div>
                            <div class="text-sm font-semibold">
                                Rp {{ props.history.category_id == 1 || props.history.category_id > 8 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount) }}
                            </div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Biaya Admin</div>
                            <div class="text-sm font-semibold">
                                Rp {{ props.history.category_id == 1 || props.history.category_id > 8 ? formatPrice(props.history.admin_fee) : '0' }}
                            </div>
                        </div>

                        <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm font-bold">Total</div>
                            <div class="text-sm font-bold">Rp {{ formatPrice(props.history.gross_amount) }}</div>
                        </div>
                    </div>
                </div>
            </div>

<!--            <template v-if="props.history.category_id == 5">-->
<!--                <Popper class="w-full mt-5" content="Sukses Copy" arrow placement="right-end">-->
<!--                    <PrimaryButton-->
<!--                        @click="toClipboard(props.history.desc.split('/')[0])"-->
<!--                        class="flex w-full justify-center items-center"-->
<!--                    >-->
<!--                        Copy Kode Stroom-->
<!--                    </PrimaryButton>-->
<!--                </Popper>-->
<!--            </template>-->

        </template>

        <template v-else-if="props.history.status_id == 2">
            <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
                <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
                    <ApplicationLogo class="block sm:hidden" />
                    <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Transaksi Pending</h3>
                    <!--                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
                </div>
                <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6">
                    <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900">

                        <template v-if="props.history.virtual_account">
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm">Bank</div>
                                <div class="text-sm font-semibold uppercase">{{ props.history.virtual_account.bank }}</div>
                            </div>
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm">No. Virtual Account</div>
                                <div class="text-sm font-semibold">
                                    {{ props.history.virtual_account.va_number }}
                                    <Popper class="text-sm text-primary-700 font-normal lowercase" content="Sukses Copy" arrow placement="right-end">
                                        <button class="" @click="toClipboard(props.history.virtual_account.va_number)">
                                            <i class="fa-duotone fa-paste ml-2" />
                                        </button>
                                    </Popper>
                                </div>
                            </div>
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm">Cara bayar</div>
                                <div class="text-sm font-semibold text-primary-600 underline">
                                    <a target="_blank" :href="props.history.virtual_account.payment_url" >
                                        Bayar
                                    </a>
                                </div>
                            </div>
                        </template>

                        <template v-else-if="props.history.wallet_account">
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm">Metode Pembayaran</div>
                                <div class="text-sm font-semibold uppercase">{{ props.history.wallet_account.bank }}</div>
                            </div>
                            <div class="sm:col-span-2 flex flex-col items-center my-5 gap-3">
                                <div class="text-sm ">
                                    <img src="/img/vendor/QRIS.svg" class="h-8 w-auto" alt="QRIS">
                                </div>
                                <div class="text-sm">
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
                                </div>
                                <!--                            <div class="text-sm">-->
                                <!--                                Bayar Sebelum {{ props.history.wallet_account.created_at }}-->
                                <!--                            </div>-->
                            </div>
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm">Deeplink</div>
                                <div class="text-sm font-semibold text-primary-600 underline">
                                    <a target="_blank" :href="props.history.wallet_account.payment_url" >
                                        Bayar
                                    </a>
                                </div>
                            </div>
                        </template>

                        <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Nominal</div>
                            <div class="text-sm font-semibold ">Rp {{ formatPrice(props.history.amount) }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Biaya Admin</div>
                            <div class="text-sm font-semibold ">Rp {{ formatPrice(props.history.admin_fee) }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Total</div>
                            <div class="text-sm font-semibold ">Rp {{ formatPrice(props.history.gross_amount) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-else-if="props.history.status_id == 6">
            <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
                <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
                    <ApplicationLogo class="block sm:hidden" />
                    <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Transaksi Gagal</h3>
                    <!--                <p class="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>-->
                </div>
                <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6">
                    <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900">
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Tanggal</div>
                            <div class="text-sm font-semibold">{{ formattedDate(props.history.updated_at) }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">No. Referensi</div>
                            <div class="text-sm font-semibold ">{{ props.history.order_id }}</div>
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
                            <template v-if="props.history.wallet_account">
                                <div class="text-sm font-semibold uppercase">{{ props.history.wallet_account.bank }}</div>
                            </template>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.history.category_id != 1">
                            <div class="text-sm ">Produk</div>
                            <div class="text-sm font-semibold">{{ props.history.product_name }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.history.category_id != 1">
                            <div class="text-sm ">No. Kustomer</div>
                            <div class="text-sm font-semibold">{{ props.history.customer_no }}</div>
                        </div>
                        <!--                        <div class="sm:col-span-1 flex sm:block justify-between">-->
                        <!--                            <div class="text-sm ">Status</div>-->
                        <!--                            <div class="text-sm font-semibold"><Badge :name="props.history.status" /></div>-->
                        <!--                        </div>-->
                        <div class="sm:col-span-2 flex sm:block justify-between">
                            <div class="text-sm ">Keterangan</div>
                            <div class="text-sm font-semibold">{{ props.history.desc ?? '-' }}</div>
                        </div>

                        <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Nominal</div>
                            <div class="text-sm font-semibold">Rp {{ props.history.category_id == 1 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount) }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Biaya Admin</div>
                            <div class="text-sm font-semibold">Rp {{ props.history.category_id == 1 ? formatPrice(props.history.admin_fee) : '0' }}</div>
                        </div>

                        <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm font-bold">Total</div>
                            <div class="text-sm font-bold">Rp {{ formatPrice(props.history.gross_amount) }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

        <template v-else>
            {{ props.history.status }}
        </template>


        <!--        <MobileMenu/>-->
    </AppLayout>
</template>
