<script setup>

import {toClipboard} from "@soerenmartius/vue3-clipboard";
import {computed, ref, watch} from "vue";
import Popper from "vue3-popper";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import ApplicationLogoTitle from "../../../Components/ApplicationLogoTitle.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import VOtpInput from "vue3-otp-input";
import bcrypt from "bcryptjs";
import moment from "moment/moment";
import SecondaryButton from "../../../Components/SecondaryButton.vue";
import InputLabel from "../../../Components/InputLabel.vue";
import TextInput from "../../../Components/TextInput.vue";
import InputError from "../../../Components/InputError.vue";
import ActionMessage from "../../../Components/ActionMessage.vue";
import PrimaryButton from "../../../Components/PrimaryButton.vue";
import DialogModal from "../../../Components/DialogModal.vue";

const props = defineProps({
    history: Object,
})

const form = useForm({
    valid: null,
    valid_amount: null
});

const validate = () => {
    form.valid = props.history.order_id
    form.valid_amount = amount.value.replaceAll(".", "")

    form.patch(route('transaction.update', props.history), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
            pinModal.value = false
        }
    });
};

const handleModal = () => {
    if (userInfo.pin) {
        pinModal.value=true
    } else {
        validate()
    }
};

const closeModal = () => {
    pinModal.value = false;
    otpInput.value?.clearInput();
    // form.reset();
};

const pinModal = ref(false);
const otpInput = ref(VOtpInput | null);
const bindModal = ref("");
const msgError = ref(false);

const {...userInfo} = computed(() => usePage().props.user).value;
const message = ref(null)

const handleOnComplete = (value) => {
    let hash = value;
    hash = hash.replace(/^\$2y(.+)$/i, '$2a$1');
    bcrypt.compare(hash, userInfo.pin, function(err, res) {
        if (res) {
            validate()
            // otpInput.value?.clearInput();
        } else {
            msgError.value = true
            otpInput.value?.clearInput();
        }
    });

};

const handleOnChange = (value) => {
    // console.log("OTP changed: ", value);
};

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
    <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300">
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

                <template v-else>
                    <template v-if="props.history.category_id != 99 && props.history.category_id != 1">
                        <div class="sm:col-span-1 flex sm:block justify-between" >
                            <div class="text-sm ">Produk</div>
                            <div class="text-sm font-semibold uppercase">{{ props.history.product_name.replaceAll("-", " ") }}</div>
                        </div>
                    </template>

                    <template v-if="props.history.category_id != 99 && props.history.category_id != 1">
                        <div class="sm:col-span-1 flex sm:block justify-between" >
                            <div class="text-sm ">No. Kustomer</div>
                            <div class="text-sm font-semibold">{{ props.history.customer_no }}</div>
                        </div>
                    </template>

                    <!--                                <template v-else >-->
                    <div class="sm:col-span-2 flex sm:block justify-between gap-5">
                        <div class="text-sm ">Keterangan</div>
                        <div class="text-sm font-semibold text-right sm:text-left ">{{ props.history?.desc?.replaceAll("/", " ") ?? '-' }}</div>
                    </div>
                    <!--                                </template>-->
                </template>

                <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />

                <div class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Nominal</div>
                    <div class="text-sm font-semibold">
                        Rp {{ props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.amount) : formatPrice(props.history.gross_amount) }}
                    </div>
                </div>

                <div class="sm:col-span-1 flex sm:block justify-between" v-if="props.history.manual_account">
                    <div class="text-sm ">Kode Unik</div>
                    <div class="text-sm font-semibold ">{{ Number(props.history.gross_amount) - Number(props.history.amount) }}</div>
                </div>

                <div class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Biaya Admin</div>
                    <div class="text-sm font-semibold">
                        Rp {{ props.history.category_id == 1 || props.history.category_id >= 8 ? formatPrice(props.history.admin_fee) : '0' }}
                    </div>
                </div>

                <div v-if="props.history.service_fee!=0" class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm ">Biaya Layanan</div>
                    <div class="text-sm font-semibold">
                        Rp {{ formatPrice(props.history.service_fee) }}
                    </div>
                </div>

                <div class="sm:col-span-1 flex sm:block justify-between">
                    <div class="text-sm font-bold">Total</div>
                    <div class="text-lg font-bold">Rp {{ formatPrice(Number(props.history.gross_amount)) }}</div>
                </div>

                <div class="" v-if="props.history.manual_account">
                    <span class="my-2 border-t border-gray-600 border-dashed block sm:hidden" />
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
            class="border border-gray-600 dark:border-white"
            v-if="props.manual_account && props.history.user_id == $page.props.user.id"
            as="outside"
            href="https://api.whatsapp.com/send?phone=6285839036717&text=Halo%20admin%20Waykapay.%20Saya%20ingin%20mengirimkan%20bukti%20transfer"
            target="_blank"
            replace
        >
            Kirim bukti tf
        </SecondaryButton>

        <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm overflow-hidden shadow-lg border border-gray-300" v-if="$page.props.user.role_id==1">
            <div class="px-4 py-5 sm:px-6 flex flex-col justify-center items-center sm:items-start">
                <h3 class="mt-1 text-lg font-bold leading-6 text-gray-900">Validasi</h3>
            </div>
            <div class="border-t border-gray-600 border-dashed px-4 py-5 sm:px-6">
                <form @submit.prevent="handleModal">
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

    <DialogModal :show="pinModal" @close="closeModal">
        <template #title>
            <div class="w-full text-center">
                Masukkan PIN transaksi kamu
            </div>

        </template>

        <template #content>
            <div class="grid justify-center">
                <VOtpInput
                    ref="otpInput"
                    v-model:value="bindModal"
                    input-classes="otp-input"
                    separator=""
                    :num-inputs="6"
                    :should-auto-focus="true"
                    input-type="letter-numeric"
                    :conditionalClass="['one', 'two', 'three', 'four', 'five', 'six']"
                    @on-change="handleOnChange"
                    @on-complete="handleOnComplete"
                />
                <!--                    <InputError :message="form.errors.pin" class="mt-2"/>-->
                <p v-if="msgError" class="w-full text-center text-sm text-red-600 mt-2">Pin salah, silahkan coba lagi.</p>

            </div>
        </template>

        <!--            <template #footer>-->
        <!--                <div class="grid items-center w-full">-->
        <!--                    <ActionMessage :on="$page.props.user.wallet_balance <= productPrice" class="mr-3">-->
        <!--                        Saldo anda kurang-->
        <!--                    </ActionMessage>-->

        <!--                    <PrimaryButton-->
        <!--                        class="w-full justify-center"-->
        <!--                        :class="{ 'opacity-25': form.processing }"-->
        <!--                        :disabled="form.processing || $page.props.user.wallet_balance <= productPrice"-->
        <!--                        @click="storeInformation"-->
        <!--                    >-->
        <!--                        Beli-->
        <!--                    </PrimaryButton>-->
        <!--                </div>-->
        <!--            </template>-->
    </DialogModal>

</template>
