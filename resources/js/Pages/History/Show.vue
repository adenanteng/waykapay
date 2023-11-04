<script setup>
import {ref} from "vue";
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


const props = defineProps({
    users: Object,
    history: Object
})

const form = useForm({
    agent_commission: null,
});

const storeInformation = () => {
    form.patch(route('transaction.update', props.history), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
        }
    });
};

const printDiv = (divName) => {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;

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
    <AppLayout :title="props.history.product_name"
               :name="props.history.product_name"
               desc="lorem ipsum dolor sit"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <template v-if="props.history.status_id == 1">

            <div id='printMe' class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
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
                                <template v-if="props.history.offline_account">
                                    <div class="text-sm font-semibold uppercase">{{ props.history.offline_account.bank }}</div>
                                </template>
                            </div>
                        </template>

                        <template v-if="props.history.category_id == 0">
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
                                <div class="text-sm font-semibold uppercase">{{ props.history.money_transfer?.to?.slug }}</div>
                            </div>
                        </template>

                        <template v-if="props.history.category_id != 0 && props.history.category_id != 1">
                            <div class="sm:col-span-1 flex sm:block justify-between" >
                                <div class="text-sm ">Produk</div>
                                <div class="text-sm font-semibold uppercase">{{ props.history.product_name }}</div>
                            </div>
                        </template>

                        <template v-if="props.history.category_id != 0 && props.history.category_id != 1">
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
                                <div class="text-sm font-semibold text-right sm:text-left">{{ props.history.desc ?? '-' }}</div>
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

            <template v-if="props.history.category_id!=0 && props.history.category_id!=1 && $page.props.user.role_id!=3">
                <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
                    <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
                        <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Komisi Agen</h3>
                    </div>
                    <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6">
                        <form @submit.prevent="storeInformation">
                            <div class="grid grid-cols-6">
                                <div class="col-span-6 sm:col-span-3">
                                    <InputLabel for="amount" value="Harga Jual"/>
                                    <div class="flex">
                                        <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                                            Rp
                                        </span>
                                        <TextInput
                                            id="amount"
                                            v-model="form.agent_commission"
                                            type="number"
                                            class="mt-1 block w-full rounded-l-none"
                                            :min="Number(props.history.gross_amount)"
                                            max="100000"
                                            required
                                        />
                                    </div>
                                    <InputError :message="form.errors.agent_commission" class="mt-2"/>
                                </div>

                                <div class="col-span-6 mt-3 flex justify-between items-center">
                                    <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                                        Berhasil disimpan.
                                    </ActionMessage>

                                    <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                        Konfirmasi
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </template>

            <div class="flex justify-center gap-2">
                <SecondaryButton
                    as="a"
                    :href="route('dashboard')"
                    class="justify-center w-full border border-gray-300 nightwind-prevent"
                >
                    Beranda
                </SecondaryButton>

                <PrimaryButton
                    v-if="props.history.user_id == $page.props.user.id && props.history.category_id!=1"
                    as="a"
                    :href="route('transaction.print', props.history)"
                    class="justify-center w-full"
                >
                    Bagikan
                </PrimaryButton>
            </div>


            <div class="pb-80 lg:pb-0" />

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

                        <template v-else-if="props.history.offline_account">
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm">Metode Pembayaran</div>
                                <div class="text-sm font-semibold uppercase">{{ props.history.offline_account.bank }}</div>
                            </div>
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm">No. Pembayaran</div>
                                <div class="text-sm font-semibold">
                                    {{ props.history.offline_account.payment_code }}
                                    <Popper class="text-sm text-primary-700 font-normal lowercase" content="Sukses Copy" arrow placement="right-end">
                                        <button class="" @click="toClipboard(props.history.offline_account.payment_code)">
                                            <i class="fa-duotone fa-paste ml-2" />
                                        </button>
                                    </Popper>
                                </div>
                            </div>
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm">Cara bayar</div>
                                <div class="text-sm font-semibold text-primary-600 underline">
                                    <a target="_blank" :href="props.history.offline_account.payment_url" >
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

        <template v-else>
            <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
                <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
                    <ApplicationLogo class="block sm:hidden" />
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
                            <div class="text-sm ">No. Referensi</div>
                            <div class="text-sm font-semibold ">{{ props.history.order_id }}</div>
                        </div>

                        <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Kategori</div>
                            <div class="text-sm font-semibold">{{ props.history.category }}</div>
                        </div>

                        <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.history.category_id == 0 || props.history.category_id != 1">
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
<!--                            <template v-else-if="props.history.offline_account">-->
<!--                                <div class="text-sm font-semibold uppercase">{{ props.history.offline_account.bank }}</div>-->
<!--                            </template>-->
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.history.category_id != 0 || props.history.category_id != 1">
                            <div class="text-sm ">Produk</div>
                            <div class="text-sm font-semibold">{{ props.history.product_name }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.history.category_id != 0 || props.history.category_id != 1">
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

<!--        <template v-else>-->
<!--            {{ props.history.status }}-->
<!--        </template>-->


        <!--        <MobileMenu/>-->
    </AppLayout>
</template>
