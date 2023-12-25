<script setup>
import {computed, onMounted, onUnmounted, ref, watch} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import moment from "moment";
import PreviousButton from "@/Components/PreviousButton.vue"
import Badge from "../../Components/Badge.vue";
import { toClipboard } from '@soerenmartius/vue3-clipboard'
import Popper from "vue3-popper";
import {Link, router, useForm, usePage} from "@inertiajs/vue3";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import InputLabel from "@/Components/InputLabel.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import SecondaryButton from "../../Components/SecondaryButton.vue";
import ApplicationLogoTitle from "../../Components/ApplicationLogoTitle.vue";
// import {Vue3Lottie} from "vue3-lottie";

const props = defineProps({
    // users: Object,
    history: Object,
    goBack: {
        type: Boolean,
        default: true
    },
    goSuccess: {
        type: Boolean,
        default: false
    }
})

const form = useForm({
    agent_commission: null,
    valid: null,
    valid_amount: null
});

const {...userInfo} = computed(() => usePage().props.user).value;
const message = ref(null)

const storeInformation = () => {
    form.agent_commission = commission.value.replaceAll(".", "")
    form.patch(route('transaction.update', props.history), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
        }
    });
};

const validate = () => {
    form.valid = props.history.order_id
    form.valid_amount = amount.value.replaceAll(".", "")
    if (userInfo.pin) {
        form.post(route('pin.manualTransfer'), {
            errorBag: 'storeInformation',
            preserveScroll: true,
            // replace: true,
            onSuccess: () => {

            }
        });
    } else {
        form.patch(route('transaction.update', props.history), {
            errorBag: 'storeInformation',
            preserveScroll: true,
            onSuccess: () => {
                form.reset()
            }
        });
    }
};

const timerSuccess = ref(props.goSuccess)

// const lala = setTimeout(() => handleClick(), 5000);

onMounted(() => {
    if (timerSuccess.value) {
        console.log('anjir')
        // lala
        setTimeout(() => timerSuccess.value = false, 5000)
    }
})

onUnmounted(() => {
    // clearTimeout(lala)
})

const commission = ref(null)

watch(commission, (newAmount) => {
    commission.value = newAmount.toString()
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    // console.log(amount.value)
})

const amount = ref(props.history.gross_amount.toString()
    .replace(/\D/g, '')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.'))

watch(amount, (newAmount) => {
    amount.value = newAmount.toString()
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    // console.log(amount.value)
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
    <AppLayout :title="props.history.product_name"
               :name="props.history.product_name"
               desc="lorem ipsum dolor sit"
    >

        <template #previous>
            <PreviousButton v-if="props.goBack" />
        </template>

        <template v-if="timerSuccess">
            <div class="pt-16 pb-12">
                <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
                    <div class="flex flex-shrink-0 justify-center">
                        <!--                    <ApplicationLogo />-->
                        <ApplicationLogoTitle />
                    </div>
                    <div class="mt-5">
                        <div class="text-center justify-center">
                            <div class="px-4 sm:px-6 text-center text-gray-900 text-sm" >
<!--                                <Vue3Lottie-->
<!--                                    animation-link="https://lottie.host/a3272d43-4bd3-4974-a125-712019ae512e/mskSUiuPqv.json"-->
<!--                                    :height="200"-->
<!--                                    :width="200"-->
<!--                                />-->
                            </div>

                            <h1 class="text-lg font-bold tracking-tight text-gray-900">Transaksi Berhasil</h1>
                            <p class="text-gray-500 text-sm">Kamu akan dialihkan dalam 5 detik</p>

                            <div class="mt-5 gap-x-2">
                                <PrimaryButton as="a" :href="route('history.show', props.history.order_id)" >
                                    Lihat Transaksi
                                </PrimaryButton>

                                <SecondaryButton as="a" :href="route('dashboard')" >
                                    Ke Beranda <i class="fa-regular fa-arrow-right ml-1 text-xs" />
                                </SecondaryButton>

                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </template>

        <template v-else>
            <template v-if="props.history.status_id == 1">
                <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
                    <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
                        <!--                    <ApplicationLogo class="block sm:hidden" />-->
                        <ApplicationLogoTitle class="block sm:hidden" />
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
                                    <template v-if="props.history.manual_account">
                                        <div class="text-sm font-semibold uppercase">{{ props.history.manual_account.bank }}</div>
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
                                    <div class="text-sm font-semibold text-right sm:text-left ">{{ props.history?.desc?.replaceAll("/", " ") ?? '-' }}</div>
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

                    <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6 text-xs text-gray-500">
                        <p>CV Cahaya Matahari Dunia</p>
                        <p>NPWP: 50.079.228.8-326.000</p>
                        <p>Jl. Lintas Sumatera, Baradatu, Way Kanan, Lampung - 34761</p>
                    </div>
                </div>

                <template v-if="props.history.category_id!=0 && props.history.category_id!=1 && $page.props.user.role_id!=3 && props.history.user_id == $page.props.user.id">
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
                                                v-model="commission"
                                                type="tel"
                                                class="mt-1 block w-full rounded-l-none"
                                                :min="Number(props.history.gross_amount)"
                                                required
                                            />
                                        </div>
                                        <InputError :message="form.errors.agent_commission || message" class="mt-2"/>
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
                    <PrimaryButton
                        v-if="props.history.user_id == $page.props.user.id && props.history.category_id!=1"
                        as="a"
                        :href="route('transaction.print', props.history.order_id)"
                        class="justify-center w-full"
                    >
                        <i class="fa-regular fa-print mr-2" />
                        Cetak
                    </PrimaryButton>

                    <PrimaryButton
                        v-if="props.history.user_id == $page.props.user.id && props.history.category_id!=1"
                        as="a"
                        :href="route('transaction.share', props.history.order_id)"
                        class="justify-center w-full"
                    >
                        <i class="fa-regular fa-share-nodes mr-2" />
                        Bagikan
                    </PrimaryButton>

                </div>

                <div class="">
                    <SecondaryButton
                        v-if="!props.goBack"
                        as="a"
                        :href="route('dashboard')"
                        class="justify-center w-full border border-gray-300 nightwind-prevent"
                    >
                        <i class="fa-regular fa-home mr-2" />
                        Beranda
                    </SecondaryButton>
                </div>

            </template>

            <template v-else-if="props.history.status_id == 2">
                <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
                    <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
<!--                        <ApplicationLogo class="block sm:hidden" />-->
                        <ApplicationLogoTitle class="block sm:hidden" />
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
                                <!--                            <div class="sm:col-span-1 flex sm:block justify-between">-->
                                <!--                                <div class="text-sm">Cara bayar</div>-->
                                <!--                                <div class="text-sm font-semibold text-primary-600 underline">-->
                                <!--                                    <a target="_blank" :href="props.history.virtual_account.payment_url" >-->
                                <!--                                        Bayar-->
                                <!--                                    </a>-->
                                <!--                                </div>-->
                                <!--                            </div>-->
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
<!--                                <div class="sm:col-span-1 flex sm:block justify-between">-->
<!--                                    <div class="text-sm">Deeplink</div>-->
<!--                                    <div class="text-sm font-semibold text-primary-600 underline">-->
<!--                                        <a target="_blank" :href="props.history.wallet_account.payment_url" >-->
<!--                                            Bayar-->
<!--                                        </a>-->
<!--                                    </div>-->
<!--                                </div>-->
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
<!--                                <div class="sm:col-span-1 flex sm:block justify-between">-->
<!--                                    <div class="text-sm">Cara bayar</div>-->
<!--                                    <div class="text-sm font-semibold text-primary-600 underline">-->
<!--                                        <a target="_blank" :href="props.history.offline_account.payment_url" >-->
<!--                                            Bayar-->
<!--                                        </a>-->
<!--                                    </div>-->
<!--                                </div>-->
                            </template>

                            <template v-else-if="props.history.manual_account">
                                <div class="sm:col-span-1 flex sm:block justify-between">
                                    <div class="text-sm">Metode Pembayaran</div>
                                    <div class="text-sm font-semibold uppercase">{{ props.history.manual_account.bank }}</div>
                                </div>
                                <div class="sm:col-span-1 flex sm:block justify-between">
                                    <div class="text-sm">Atas Nama</div>
                                    <div class="text-sm font-semibold uppercase">Agus Suryaman</div>
                                </div>
                                <div class="sm:col-span-1 flex sm:block justify-between">
                                    <div class="text-sm">No. Rekening</div>
                                    <div class="text-sm font-semibold">
                                        {{ props.history.manual_account.payment_code }}
                                        <Popper class="text-sm text-primary-700 font-normal lowercase" content="Sukses Copy" arrow placement="right-end">
                                            <button class="" @click="toClipboard(props.history.manual_account.payment_code)">
                                                <i class="fa-duotone fa-paste ml-2" />
                                            </button>
                                        </Popper>
                                    </div>
                                </div>
<!--                                <div class="sm:col-span-1 flex sm:block justify-between">-->
<!--                                    <div class="text-sm">Cara bayar</div>-->
<!--                                    <div class="text-sm font-semibold text-primary-600 underline">-->
<!--                                        <a target="_blank" :href="props.history.offline_account.payment_url" >-->
<!--                                            Bayar-->
<!--                                        </a>-->
<!--                                    </div>-->
<!--                                </div>-->
                            </template>

                            <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm ">Nominal</div>
                                <div class="text-sm font-semibold ">Rp {{ formatPrice(props.history.amount) }}</div>
                            </div>
                            <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.history.manual_account">
                                <div class="text-sm ">Kode Unik</div>
                                <div class="text-sm font-semibold ">{{ Number(props.history.gross_amount) - Number(props.history.amount) }}</div>
                            </div>
                            <div class="sm:col-span-1 flex sm:block justify-between" v-else>
                                <div class="text-sm ">Biaya Admin</div>
                                <div class="text-sm font-semibold ">Rp {{ formatPrice(props.history.admin_fee) }}</div>
                            </div>
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm ">Total</div>
                                <div class="text-sm font-semibold ">Rp {{ formatPrice(props.history.gross_amount) }}</div>
                            </div>
                            <div class="" v-if="props.history.manual_account">
                                <p class="text-xs text-gray-500">Untuk memudahkan transaksi harap transfer nominal beserta kode uniknya ya.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-5 grid gap-5" v-if="props.history.manual_account">
<!--                    <SecondaryButton-->
<!--                        class="border border-gray-300 w-full justify-center"-->
<!--                        as="outside"-->
<!--                        href="https://api.whatsapp.com/send?phone=6285839036717&text=Halo%20admin%20Waykapay.%20Saya%20ingin%20mengirimkan%20bukti%20transfer"-->
<!--                        target="_blank"-->
<!--                    >-->
<!--                        <i class="fa-brands fa-whatsapp mr-2" />-->
<!--                        Kirim bukti Transfer-->
<!--                    </SecondaryButton>-->

                    <SecondaryButton
                        class="border border-gray-300"
                        v-if="props.manual_account && props.history.user_id == $page.props.user.id"
                        as="outside"
                        href="https://api.whatsapp.com/send?phone=6285839036717&text=Halo%20admin%20Waykapay.%20Saya%20ingin%20mengirimkan%20bukti%20transfer"
                        target="_blank"
                        replace
                    >
                        Kirim bukti tf
                    </SecondaryButton>

                    <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300" v-if="$page.props.user.role_id==1">
                        <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
                            <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Validasi</h3>
                        </div>
                        <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6">
                            <form @submit.prevent="validate">
                                <div class="grid grid-cols-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <InputLabel for="amount" value="Jumlah Validasi"/>
                                        <div class="flex">
                                        <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                                            Rp
                                        </span>
                                            <TextInput
                                                id="amount"
                                                v-model="amount"
                                                type="tel"
                                                class="mt-1 block w-full rounded-l-none"
                                            />
                                        </div>
                                        <InputError :message="form.errors.valid_amount || message" class="mt-2"/>
                                    </div>

                                    <div class="col-span-6 mt-3 flex justify-between items-center">
                                        <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                                            Berhasil disimpan.
                                        </ActionMessage>

                                        <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                            Validasi
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </template>

            <template v-else>
                <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
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
                                <div class="text-sm font-semibold ">{{ props.history.order_id }}</div>
                            </div>

                            <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm ">Kategori</div>
                                <div class="text-sm font-semibold">{{ props.history.category }}</div>
                            </div>

                            <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.history.category_id != 1">
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
                                <div class="text-sm font-semibold">{{ props.history.product_name }}</div>
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
        </template>

<!--        <template v-else>-->
<!--            {{ props.history.status }}-->
<!--        </template>-->


        <!--        <MobileMenu/>-->
    </AppLayout>
</template>
