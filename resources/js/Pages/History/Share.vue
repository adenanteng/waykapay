<script setup>
import {onMounted, ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import moment from "moment";
import PreviousButton from "@/Components/PreviousButton.vue"
import Badge from "../../Components/Badge.vue";
import { toClipboard } from '@soerenmartius/vue3-clipboard'
import Popper from "vue3-popper";
import {Link, useForm} from "@inertiajs/vue3";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import SecondaryButton from "../../Components/SecondaryButton.vue";
import ApplicationLogoTitle from "../../Components/ApplicationLogoTitle.vue";
import {Vue3Lottie} from "vue3-lottie";
import { useShare } from '@vueuse/core'
import BlankLayout from "../../Layouts/BlankLayout.vue";

const props = defineProps({
    // users: Object,
    history: Object,
})

const { share, isSupported } = useShare()

onMounted(() => {
    isSupported ? startShare() : ''
})

function startShare() {
    share({
        title: 'Hello',
        text: 'Hello my friend!',
        url: location.href,
    })
}

const shareData = {
    title: "MDN",
    text: "Learn web development on MDN!",
    url: "https://developer.mozilla.org",
};

function shareButton() {
    navigator.share(shareData)
}

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <BlankLayout :title="props.history.product_name"
               :name="props.history.product_name"
               desc="lorem ipsum dolor sit"
    >

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
                <ApplicationLogoTitle class="block sm:hidden" />
                <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Transaksi Berhasil</h3>
            </div>
            <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6">
                <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900">
                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm ">Tanggal</div>
                        <div class="text-sm font-semibold">{{ formattedDate(props.history.updated_at) }}</div>
                    </div>
                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm ">Kode Referensi</div>
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
                            <template v-if="props.history.offline_account">
                                <div class="text-sm font-semibold uppercase">{{ props.history.offline_account.bank }}</div>
                            </template>
                        </div>
                    </template>

                    <template v-if="props.history.category_id == 99">
                        <div class="sm:col-span-1 flex sm:block justify-between" >
                            <div class="text-sm ">Jenis Transaksi</div>
                            <div class="text-sm font-semibold uppercase">{{ props.history.product_name }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between" >
                            <div class="text-sm ">Bank Tujuan</div>
                            <div class="text-sm font-semibold uppercase">{{ props.history.money_transfer?.bank }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between" >
                            <div class="text-sm ">Nama Tujuan</div>
                            <div class="text-sm font-semibold uppercase">{{ props.history.money_transfer?.to?.name }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between" >
                            <div class="text-sm ">No. Rekening Tujuan</div>
                            <div class="text-sm font-semibold uppercase">{{ props.history.money_transfer?.to?.phone }}</div>
                        </div>
                    </template>

                    <template v-if="props.history.category_id != 99 && props.history.category_id != 1">
                        <div class="sm:col-span-1 flex sm:block justify-between" >
                            <div class="text-sm ">Produk</div>
                            <div class="text-sm font-semibold uppercase">{{ props.history.product_name }}</div>
                        </div>
                    </template>

                    <template v-if="props.history.category_id != 99 && props.history.category_id != 1">
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
                        <div class="sm:col-span-2 flex sm:block justify-between gap-5">
                            <div class="text-sm ">Keterangan</div>
                            <div class="text-sm font-semibold text-right sm:text-left truncate">{{ props.history.desc ?? '-' }}</div>
                        </div>
                    </template>

                    <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm ">Nominal</div>
                        <div class="text-sm font-semibold">
                            Rp {{ props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount) }}
                        </div>
                    </div>
                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm ">Biaya Admin</div>
                        <div class="text-sm font-semibold">
                            Rp {{ props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.admin_fee) : '0' }}
                        </div>
                    </div>
                    <div v-if="props.history.agent_commission" class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm ">Komisi</div>
                        <div class="text-sm font-semibold">
                            Rp {{ formatPrice(props.history.agent_commission) }}
                        </div>
                    </div>

                    <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                    <div class="sm:col-span-1 flex sm:block justify-between">
                        <div class="text-sm font-bold">Total</div>
                        <div class="text-sm font-bold">Rp {{ formatPrice(Number(props.history.gross_amount) + Number(props.history.agent_commission)) }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!--        <MobileMenu/>-->
    </BlankLayout>
</template>
