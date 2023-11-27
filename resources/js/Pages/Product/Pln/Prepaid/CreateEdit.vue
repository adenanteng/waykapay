<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, router, useForm, usePage} from "@inertiajs/vue3";
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
import Loading from "../../Loading.vue";
import {Vue3Lottie} from "vue3-lottie";

const props = defineProps({
    users: Object,
    response: undefined,
    customer: Object,
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
    // console.log('pln');
    router.reload({ only: ['response'] })
})

const form = useForm({
    user_id: props.users.id ?? null,
    customer_no: props.customer.data.customer_no,
    product_name: '',
    sku: '',
    amount: '',
    category_id: '',
    fee: null
});

const {...userInfo} = computed(() => usePage().props.user).value;
// console.log(userInfo.name); // Show my user name

const storeInformation = () => {
    if (fee.value != null) {
        form.fee = fee.value
    }

    if (userInfo.pin) {
        form.post(route('pin.topup'), {
            errorBag: 'storeInformation',
            preserveScroll: true,
            onSuccess: () => closeModal(),
            // onError: () => passwordInput.value.focus(),
            // onFinish: () => form.reset(),
        });
    } else {
        form.post(route('product.topup'), {
            errorBag: 'storeInformation',
            preserveScroll: true,
            onSuccess: () => closeModal()
        });
    }

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
        form.category_id = 5;

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

const closeModal = () => {
    confirmingModal.value = false;
    // form.reset();
};

</script>

<template>
    <AppLayout title="PLN Prepaid"
               name="PLN Prepaid"
               desc="Masukkan nomor"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <FormSection class="sticky top-0 z-40">
            <template #title>
                Token PLN Prepaid
            </template>

            <template #description>
                * Saldo Rekening Rp {{ formatPrice($page.props.user.wallet_balance) }}
            </template>

            <template #form>
                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="No. Tujuan"/>
                    <div class="font-semibold text-gray-900">
                        {{ props.customer.data.customer_no }}
                    </div>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="Nama Pelanggan"/>
                    <div class="font-semibold text-gray-900">
                        {{ props.customer.data.name }}
                    </div>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="Stand Meter"/>
                    <div class="font-semibold text-gray-900">
                        {{ props.customer.data.segment_power }}
                    </div>
                </div>
            </template>
        </FormSection>


        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <template v-if="props.response === undefined">
                <Loading />
            </template>

<!--            <template v-else-if="props.response.data.rc==83">-->
<!--                <div class="grid justify-center">-->
<!--                    <Vue3Lottie-->
<!--                        animation-link="https://lottie.host/847b8a44-3ca7-458b-a9b8-32c1c5d63308/ABskoUU2IH.json"-->
<!--                        :height="200"-->
<!--                        :width="200"-->
<!--                    />-->
<!--                    <span class="text-sm text-gray-600 text-center">Ada yang salah, coba beberapa saat lagi.</span>-->
<!--                </div>-->
<!--            </template>-->

            <template v-else v-for="data in sort(props.response.data)" >
                <template v-if="data.category == 'PLN'" >
                        <div class="relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50">
                            <div class="flex-shrink-0">
                                <img class="h-10 w-10" :src=" '/img/vendor/'+data.brand+'.svg' " alt="">
                            </div>
                            <div class="flex-1 min-w-0">
                                <template v-if="Number(data.price) < Number($page.props.digiflazz_saldo) && data.buyer_product_status">
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
                        </div>
                </template>
            </template>
        </div>

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
                        No. Tujuan
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
                <div class="flex items-center">
                    <ActionMessage :on="$page.props.user.wallet_balance <= productPrice" class="mr-3">
                        Saldo anda kurang
                    </ActionMessage>

                    <PrimaryButton
                        :class="{ 'opacity-25': form.processing }"
                        :disabled="form.processing || $page.props.user.wallet_balance <= productPrice"
                        @click="storeInformation"
                    >
                        Beli
                    </PrimaryButton>
                </div>
            </template>
        </DialogModal>


<!--        <MobileMenu />-->
    </AppLayout>
</template>
