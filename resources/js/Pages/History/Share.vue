<script setup>
import {onMounted, ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import moment from "moment";
import { toClipboard } from '@soerenmartius/vue3-clipboard'
import Popper from "vue3-popper";
import {Link, useForm} from "@inertiajs/vue3";
import ApplicationLogoTitle from "../../Components/ApplicationLogoTitle.vue";
import {Vue3Lottie} from "vue3-lottie";
import { useShare } from '@vueuse/core'
import BlankLayout from "@/Layouts/BlankLayout.vue";
import SecondaryButton from "../../Components/SecondaryButton.vue";
import PrimaryButton from "../../Components/PrimaryButton.vue";
import PrintLayout from "../../Layouts/PrintLayout.vue";
import domtoimage from 'dom-to-image-more';

const props = defineProps({
    // users: Object,
    history: Object,
})

const { share, isSupported } = useShare()
const ss = ref(null)

// onMounted(() => {
//     setTimeout(() => startShare(), 500);
//     console.log(babi.value)
//     // imm()
// })

// function startShare() {
//     share({
//         title: 'Hello',
//         text: 'Hello my friend!',
//         // files: window.print(),
//     })
// }

const babi = ref(null)
const output = ref(null)
const file = ref(null)

// function imm() {
//     domtoimage
//         .toPng(babi.value)
//         .then(async function (dataUrl) {
//             var img = new Image();
//             img.src = dataUrl;
//             document.body.appendChild(img);
//             var anj = img.innerHTML
//
//             if (!navigator.canShare) {
//                 output.value = `Your browser doesn't support the Web Share API.`;
//                 return;
//             }
//
//             // if (navigator.canShare({anj})) {
//                 try {
//                     await navigator.share({
//                         files: [
//                             new File([img.innerHTML], 'image.png', {
//                                 type: 'image/png',
//                             }),
//                         ],
//                         title: "Images",
//                         text: "Beautiful images",
//                         url: window.location.href
//                     });
//                     output.value = "Shared!";
//                 } catch (error) {
//                     output.value = `Error: ${error.message}`;
//                 }
//             // } else {
//             //     output.value = 'Your system doesnt support sharing these files.' + anj;
//             // }
//         })
//         .catch(function (error) {
//             console.error('oops, something went wrong!', error);
//             output.value = error
//         });
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

        <div class="">
            <div class="max-w-sm" >
                {{ output }}
            </div>

            <div ref="babi" class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
                <div class="px-4 py-5 flex flex-col justify-center items-center ">
                    <!--                <ApplicationLogo class="" />-->
                    <ApplicationLogoTitle />
                    <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Transaksi Berhasil</h3>
                </div>
                <div class="border-t border-gray-600 border-dashed px-4 py-5 ">
                    <div class="grid grid-cols-1 gap-x-4 gap-y-2 w-72 text-gray-900">
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
            </div>

<!--            <div>-->
<!--                &lt;!&ndash; SOURCE &ndash;&gt;-->
<!--                <div ref="printMe">-->
<!--                    <h1>Print me!</h1>-->
<!--                </div>-->
<!--                &lt;!&ndash; OUTPUT &ndash;&gt;-->
<!--                <img :src="output">-->
<!--                <button @click="printt">Print!</button>-->
<!--            </div>-->
        </div>
    </PrintLayout>
</template>
