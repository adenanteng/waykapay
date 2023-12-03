<script setup>
import {onMounted, ref} from "vue";
import moment from "moment";
import { toClipboard } from '@soerenmartius/vue3-clipboard'
import Popper from "vue3-popper";
import PrintLayout from "@/Layouts/PrintLayout.vue";
import ApplicationLogoTitle from "@/Components/ApplicationLogoTitle.vue";


const props = defineProps({
    users: Object,
    history: Object
})

onMounted(() => {
    window.print()
    // setTimeout(() => {
    //     history.back();
    //     return false;
    // }, 500);
    // document.execCommand('print');
})
// const printInvoice = () => {
//     window.print()
// }

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <PrintLayout :title="props.history.product_name"
               :name="props.history.product_name"
               desc="lorem ipsum dolor sit"
    >

        <div class="border border-gray-300 my-5">
            <div class="px-4 py-5 flex flex-col justify-center items-center ">
<!--                <ApplicationLogo class="" />-->
                <ApplicationLogoTitle />
                <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Transaksi Berhasil</h3>
            </div>
            <div class="border-t border-gray-600 border-dashed px-4 py-5 ">
                <div class="grid grid-cols-1 gap-x-4 gap-y-2 text-gray-900">
                    <div class=" flex justify-between">
                        <div class="text-sm ">Tanggal</div>
                        <div class="text-sm font-semibold">{{ formattedDate(props.history.updated_at) }}</div>
                    </div>
                    <div class=" flex justify-between">
                        <div class="text-sm ">Kode Referensi</div>
                        <div class="text-sm font-semibold ">{{ props.history.order_id }}</div>
                    </div>

                    <span class="my-2 border-t border-gray-600 border-dashed block" />

                    <template v-if="props.history.category_id == 1">
                        <div class="flex justify-between" >
                            <div class="text-sm ">Kategori</div>
                            <div class="text-sm font-semibold">{{ props.history.category }}</div>
                        </div>
                    </template>

                    <template v-if="props.history.category_id == 1">
                        <div class="flex justify-between" >
                            <div class="text-sm ">Sumber Dana</div>
                            <template v-if="props.history.virtual_account">
                                <div class="text-sm font-semibold uppercase">{{ props.history.virtual_account.bank }}</div>
                            </template>
                            <template v-if="props.history.wallet_account">
                                <div class="text-sm font-semibold uppercase">{{ props.history.wallet_account.bank }}</div>
                            </template>
                            <template v-if="props.history.offline_account">
                                <div class="text-sm font-semibold uppercase">{{ props.history.offline_account.bank }}</div>
                            </template>
                        </div>
                    </template>

                    <template v-if="props.history.category_id == 99">
                        <div class="flex justify-between" >
                            <div class="text-sm ">Jenis Transaksi</div>
                            <div class="text-sm font-semibold uppercase">{{ props.history.product_name }}</div>
                        </div>
                        <div class="flex justify-between" >
                            <div class="text-sm ">Bank Tujuan</div>
                            <div class="text-sm font-semibold uppercase">{{ props.history.money_transfer?.bank }}</div>
                        </div>
                        <div class="flex justify-between" >
                            <div class="text-sm ">Nama Tujuan</div>
                            <div class="text-sm font-semibold uppercase">{{ props.history.money_transfer?.to?.name }}</div>
                        </div>
                        <div class="flex justify-between" >
                            <div class="text-sm ">No. Rekening Tujuan</div>
                            <div class="text-sm font-semibold uppercase">{{ props.history.money_transfer?.to?.phone }}</div>
                        </div>
                    </template>

                    <template v-if="props.history.category_id != 99 && props.history.category_id != 1">
                        <div class="flex justify-between" >
                            <div class="text-sm ">Produk</div>
                            <div class="text-sm font-semibold uppercase">{{ props.history.product_name }}</div>
                        </div>
                    </template>

                    <template v-if="props.history.category_id != 99 && props.history.category_id != 1">
                        <div class="flex justify-between" >
                            <div class="text-sm">No. Kustomer</div>
                            <div class="text-sm font-semibold">{{ props.history.customer_no }}</div>
                        </div>
                    </template>

                    <template v-if="props.history.category_id == 5">
                        <div class="flex justify-between">
                            <div class="text-sm">Nama Kustomer</div>
                            <div class="text-sm font-semibold">{{ props.history.desc.split('/')[1] }}</div>
                        </div>
                        <div class="flex justify-between" >
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
                        <div class="flex justify-between gap-5">
                            <div class="text-sm ">Keterangan</div>
                            <div class="text-sm font-semibold text-right truncate">{{ props.history.desc ?? '-' }}</div>
                        </div>
                    </template>

                    <span class="my-2 border-t border-gray-600 border-dashed block" />

                    <div class="flex justify-between">
                        <div class="text-sm ">Nominal</div>
                        <div class="text-sm font-semibold">
                            Rp {{ props.history.category_id == 1 ||
                            props.history.category_id >= 8 ?
                            formatPrice(Number(props.history.amount) + Number(props.history.agent_commission)) :
                            formatPrice(Number(props.history.gross_amount) + Number(props.history.agent_commission)) }}
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="text-sm ">Biaya Admin</div>
                        <div class="text-sm font-semibold">
                            Rp {{ props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.admin_fee) : '0' }}
                        </div>
                    </div>
<!--                    <div v-if="props.history.agent_commission" class="flex justify-between">-->
<!--                        <div class="text-sm ">Komisi</div>-->
<!--                        <div class="text-sm font-semibold">-->
<!--                            Rp {{ formatPrice(props.history.agent_commission) }}-->
<!--                        </div>-->
<!--                    </div>-->

                    <span class="my-2 border-t border-gray-600 border-dashed block" />

                    <div class="flex justify-between">
                        <div class="text-sm font-bold">Total</div>
                        <div class="text-sm font-bold">Rp {{ formatPrice(Number(props.history.gross_amount) + Number(props.history.agent_commission)) }}</div>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-600 border-dashed px-4 py-5 text-xs text-gray-500">
                <p>CV Cahaya Matahari Dunia</p>
                <p>NPWP: 50.079.228.8-326.000</p>
                <p>Jl. Lintas Sumatera, Campur Asri, Baradatu, Way Kanan, Lampung - 34761</p>
            </div>
        </div>
    </PrintLayout>
</template>
