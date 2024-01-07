<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, router, useForm, usePage} from "@inertiajs/vue3";
import bcrypt from 'bcryptjs';
import MobileMenu from "@/Components/MobileMenu.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PreviousButton from "@/Components/PreviousButton.vue";
import FormSection from "@/Components/FormSection.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputLabel from "@/Components/InputLabel.vue";
import ActionSection from "@/Components/ActionSection.vue";
import DialogModal from "@/Components/DialogModal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import {computed, onMounted, ref} from "vue";
import VOtpInput from "vue3-otp-input";
import Loading from "./Loading.vue";

const props = defineProps({
    response: undefined,
    category_id: Number,
    product: String,
    fee_25: Number,
    fee_50: Number,
    fee_75: Number,
    fee_100: Number,
    fee_200: Number,
    fee_500: Number,
    fee_1000: Number,
    fee_max: Number,
});

onMounted(() => {
    // console.log('dana');
    router.reload({ only: ['response'] })
})

const form = useForm({
    customer_no: '',
    product_name: '',
    sku: '',
    amount: '',
    category_id: props.category_id ?? 90,
    fee: null,
    pin: null,
});

const {...userInfo} = computed(() => usePage().props.user).value;
// console.log(userInfo.name); // Show my user name

const storeInformation = () => {
    if (fee.value != null) {
        form.fee = fee.value
    }

    form.post(route('product.topup'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => closeModal()
    });

};

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const confirmingModal = ref(false);

let productSku = ref(null);
let productName = ref(null);
let productBrand = ref(null);
let productPrice = ref(null);
let productDesc = ref(null);
const fee = ref(null)

const confirmModal = (data) => {

    if (form.customer_no !== '') {
        confirmingModal.value = true;
        form.sku = data.buyer_sku_code;
        form.amount = data.price;
        form.product_name = data.product_name;

        productSku = data.buyer_sku_code;
        productName = data.product_name;
        productBrand = data.brand;

        if (Number(data.price) < 1000) {
            fee.value = 0
        } else if (Number(data.price) < 25000) {
            fee.value = Number(props.fee_25)
        } else if (Number(data.price) < 50000) {
            fee.value = Number(props.fee_50)
        } else if (Number(data.price) < 75000) {
            fee.value = Number(props.fee_75)
        } else if (Number(data.price) < 100000) {
            fee.value = Number(props.fee_100)
        } else if (Number(data.price) < 200000) {
            fee.value = Number(props.fee_200)
        } else if (Number(data.price) < 500000) {
            fee.value = Number(props.fee_500)
        } else if (Number(data.price) < 1000000) {
            fee.value = Number(props.fee_1000)
        } else {
            fee.value = Number(props.fee_max)
        }

        productPrice = Number(fee.value) + Number(data.price);
        productDesc = data.desc;
    }

    // setTimeout(() => passwordInput.value.focus(), 250);
};

function sort(arr) {
    // Set slice() to avoid to generate an infinite loop!
    return arr.slice().sort(function (a, b) {
        return a.price - b.price;
    });
}

const handleModal = () => {
    if (userInfo.pin) {
        confirmingModal.value=false
        pinModal.value=true
    } else {
        storeInformation()
    }
};

const closeModal = () => {
    confirmingModal.value = false;
    pinModal.value = false;
    otpInput.value?.clearInput();
    // form.reset();
};

const tab = ref('Umum' )

const pinModal = ref(false);
const otpInput = ref(VOtpInput | null);
const bindModal = ref("");
const msgError = ref(false);

const handleOnComplete = (value) => {
    let hash = value;
    hash = hash.replace(/^\$2y(.+)$/i, '$2a$1');
    bcrypt.compare(hash, userInfo.pin, function(err, res) {
        if (res) {
            storeInformation()
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

</script>

<template>
    <AppLayout :title="props.product"
               :name="props.product"
               desc="Lorem ipsum"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <FormSection class="sticky top-0 z-40">
            <template #title>
                {{ props.product }}
            </template>

            <template #description>
                * Saldo Rekening Rp {{ formatPrice($page.props.user.wallet_balance) }}
            </template>

            <template #form>
                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="No Kustomer"/>
                    <TextInput
                        id="number"
                        v-model="form.customer_no"
                        type="number"
                        class="mt-1 block w-full"
                        minlength="8"
                        required
                        autofocus
                    />
                    <InputError :message="form.errors.customer_no" class="mt-2"/>
                </div>

            </template>
        </FormSection>

        <div class="border-b border-gray-300" v-if="props.response !== undefined">
            <nav class="-mb-px flex" aria-label="Tabs">
                <button class="w-full py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tab=='Umum' ? 'border-primary-500 text-primary-600' : 'text-gray-500 border-gray-300' "
                        @click="tab='Umum'"
                >
                    Umum
                </button>

                <button class="w-full py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tab=='Customer' ? 'border-primary-500 text-primary-600' : 'text-gray-500 border-gray-300' "
                        @click="tab='Customer'"
                        v-if="props.product == 'GO PAY' || props.product == 'MAXIM' "
                >
                    Customer
                </button>

                <button class="w-full py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tab=='Driver' ? 'border-primary-500 text-primary-600' : 'text-gray-500 border-gray-300' "
                        @click="tab='Driver'"
                        v-if="props.product == 'GO PAY' || props.product == 'MAXIM' "
                >
                    Driver
                </button>

                <button class="w-full py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tab=='Tanaka HD' ? 'border-primary-500 text-primary-600' : 'text-gray-500 border-gray-300' "
                        @click="tab='Tanaka HD'"
                        v-if="props.product == 'Transvision'"
                >
                    Tanaka HD
                </button>
            </nav>
        </div>

        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <template v-if="props.response === undefined">
                <Loading />
            </template>

            <template v-else-if="props.response.data?.rc">
                <div class="grid justify-center text-center px-5 py-3">
                    <i class="fa-regular fa-exclamation-triangle text-2xl text-red-600" />
                    <p class="text-sm text-gray-600">Produk sedang tidak tersedia, coba beberapa saat lagi.</p>
                </div>
            </template>

<!--            v-if="props.response !== undefined && form.customer_no.length >= 6" -->

            <template v-else v-for="data in sort(props.response.data)" >
                <template v-if="data.brand == props.product">
                    <template v-if="data.type == tab">
                        <li class="relative px-6 py-5 flex items-center space-x-3">
                            <div class="flex-shrink-0">
                                <img class="w-10" :src="'/img/vendor/' + props.product + '.svg'" alt="">
                            </div>
                            <div class="flex-1 min-w-0">
                                <template v-if="Number(data.price) < Number($page.props.digiflazz_saldo) && data.buyer_product_status && data.seller_product_status">
                                    <button @click="confirmModal(data)" class="focus:outline-none text-left">
                                        <span class="absolute inset-0" aria-hidden="true"></span>
                                        <p class="text-sm font-medium text-gray-900">{{ data.product_name }}</p>
                                        <p class="text-sm text-gray-500 truncate">
                                            <template v-if="Number(data.price) < 1000">
                                                Rp {{ formatPrice(Number(data.price)) }}
                                            </template>
                                            <template v-else-if="Number(data.price) < 25000">
                                                Rp {{ formatPrice(Number(data.price) + Number(props.fee_25)) }}
                                            </template>
                                            <template v-else-if="Number(data.price) < 50000">
                                                Rp {{ formatPrice(Number(data.price) + Number(props.fee_50)) }}
                                            </template>
                                            <template v-else-if="Number(data.price) < 75000">
                                                Rp {{ formatPrice(Number(data.price) + Number(props.fee_75)) }}
                                            </template>
                                            <template v-else-if="Number(data.price) < 100000">
                                                Rp {{ formatPrice(Number(data.price) + Number(props.fee_100)) }}
                                            </template>
                                            <template v-else-if="Number(data.price) < 200000">
                                                Rp {{ formatPrice(Number(data.price) + Number(props.fee_200)) }}
                                            </template>
                                            <template v-else-if="Number(data.price) < 500000">
                                                Rp {{ formatPrice(Number(data.price) + Number(props.fee_500)) }}
                                            </template>
                                            <template v-else-if="Number(data.price) < 1000000">
                                                Rp {{ formatPrice(Number(data.price) + Number(props.fee_1000)) }}
                                            </template>
                                            <template v-else>
                                                Rp {{ formatPrice(Number(data.price) + Number(props.fee_max)) }}
                                            </template>
                                        </p>
                                    </button>
                                </template>

                                <template v-else>
                                    <div class="focus:outline-none text-left">
                                        <p class="text-sm font-medium text-gray-500">{{ data.product_name }}</p>
                                        <p class="text-sm text-gray-500 truncate">Tidak tersedia</p>
                                    </div>
                                </template>
                            </div>
                        </li>
                    </template>
                </template>
            </template>
        </ul>

<!--        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">-->
<!--            <li class="relative px-6 py-5 flex items-center space-x-3">-->
<!--                <div class="flex-shrink-0">-->
<!--                    <img class="w-10" :src="'/img/vendor/' + props.product + '.svg'" alt="">-->
<!--                </div>-->
<!--                <div class="flex-1 min-w-0">-->
<!--                    <button class="focus:outline-none text-left">-->
<!--                        <span class="absolute inset-0" aria-hidden="true"></span>-->
<!--                        <p class="text-sm font-medium text-gray-900">Aden Anteng</p>-->
<!--                        <p class="text-sm text-gray-500 truncate">lalalalla</p>-->
<!--                    </button>-->
<!--                </div>-->
<!--            </li>-->
<!--        </ul>-->

        <DialogModal :show="confirmingModal" @close="closeModal">
            <template #title>
                Lanjutkan Pembayaran
            </template>

            <template #content>
                <div class="grid grid-cols-2 justify-between gap-2">
                    <div class="">
                        Produk
                    </div>
                    <div class="text-right font-medium">
                        {{ productName }}
                    </div>

                    <div class="">
                        No Customer
                    </div>
                    <div class="text-right font-medium">
                        {{ form.customer_no }}
                    </div>

                    <div class="">
                        Harga
                    </div>
                    <div class="text-right font-medium">
                        Rp {{ formatPrice(productPrice) }}
                    </div>

                    <div class="">
                        Detail Produk
                    </div>
                </div>
                <div class="border border-gray-300 rounded-3xl p-2 mt-2">
                    {{ productDesc }}
                </div>
            </template>

            <template #footer>
                <div class="grid items-center w-full">
                    <ActionMessage :on="$page.props.user.wallet_balance <= productPrice" class="mr-3">
                        Saldo anda kurang
                    </ActionMessage>

<!--                    <PrimaryButton-->
<!--                        class="w-full justify-center"-->
<!--                        :class="{ 'opacity-25': form.processing }"-->
<!--                        :disabled="form.processing || $page.props.user.wallet_balance <= productPrice"-->
<!--                        @click="storeInformation"-->
<!--                    >-->
<!--                        Beli-->
<!--                    </PrimaryButton>-->

                    <PrimaryButton
                        class="w-full justify-center"
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing || $page.props.user.wallet_balance <= productPrice"
                        @click="handleModal"
                    >
                        Beli
                    </PrimaryButton>
                </div>
            </template>
        </DialogModal>

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

<!--        <MobileMenu />-->
    </AppLayout>
</template>
