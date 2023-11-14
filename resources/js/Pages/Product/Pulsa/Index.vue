<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, router, useForm} from "@inertiajs/vue3";
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
import {onMounted, ref, watch} from "vue";
import {value} from "lodash/seq";
import Loading from "../Loading.vue";

const props = defineProps({
    users: Object,
    response: undefined,
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
    user_id: props.users.id ?? null,
    customer_no: '',
    product_name: '',
    sku: '',
    amount: '',
    category_id: '',
    fee: null
});

const storeInformation = () => {
    if (fee.value != null) {
        form.fee = fee.value
    }

    form.post(route('product.topup'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => closeModal(),
        // onError: () => passwordInput.value.focus(),
        // onFinish: () => form.reset(),
    });
};

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function provider(value) {
    if (
        value.substring(0, 4) === '0852' ||
        value.substring(0, 4) === '0853' ||
        value.substring(0, 4) === '0811' ||
        value.substring(0, 4) === '0812' ||
        value.substring(0, 4) === '0813' ||
        value.substring(0, 4) === '0821' ||
        value.substring(0, 4) === '0822' ||
        value.substring(0, 4) === '0823' ||
        value.substring(0, 4) === '0852'
        )
    { return 'TELKOMSEL' }

    else if (
        value.substring(0, 4) === '0851'
        )
    { return 'by.U'}

    else if (
        value.substring(0, 4) === '0815' ||
        value.substring(0, 4) === '0857' ||
        value.substring(0, 4) === '0856'
        )
    { return 'INDOSAT'}


    else if (
        value.substring(0, 4) === '0896' ||
        value.substring(0, 4) === '0895' ||
        value.substring(0, 4) === '0897' ||
        value.substring(0, 4) === '0898' ||
        value.substring(0, 4) === '0899'
        )
    { return 'TRI'}

    else if (
        value.substring(0, 4) === '0817' ||
        value.substring(0, 4) === '0818' ||
        value.substring(0, 4) === '0819' ||
        value.substring(0, 4) === '0859' ||
        value.substring(0, 4) === '0877' ||
        value.substring(0, 4) === '0878'
        )
    { return 'XL'}

    else if (
        value.substring(0, 4) === '0832' ||
        value.substring(0, 4) === '0833' ||
        value.substring(0, 4) === '0838'
        )
    { return 'AXIS'}

    else if (
        value.substring(0, 4) === '0881' ||
        value.substring(0, 4) === '0882' ||
        value.substring(0, 4) === '0883' ||
        value.substring(0, 4) === '0884' ||
        value.substring(0, 4) === '0885' ||
        value.substring(0, 4) === '0886' ||
        value.substring(0, 4) === '0887' ||
        value.substring(0, 4) === '0888' ||
        value.substring(0, 4) === '0889'
        )
    { return 'SMARTFREN'}
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
        form.category_id = tabPulsa === 'Pulsa' ? 2 : 3;

        productSku = data.buyer_sku_code;
        productName = data.product_name;
        productBrand = data.brand;

        if (Number(data.price) < 25000) {
            fee.value = Number(data.price) + Number(props.fee_25)
        } else if (Number(data.price) < 50000) {
            fee.value = Number(data.price) + Number(props.fee_50)
        } else if (Number(data.price) < 75000) {
            fee.value = Number(data.price) + Number(props.fee_75)
        } else if (Number(data.price) < 100000) {
            fee.value = Number(data.price) + Number(props.fee_100)
        } else if (Number(data.price) < 200000) {
            fee.value = Number(data.price) + Number(props.fee_200)
        } else if (Number(data.price) < 500000) {
            fee.value = Number(data.price) + Number(props.fee_500)
        } else if (Number(data.price) < 1000000) {
            fee.value = Number(data.price) + Number(props.fee_1000)
        } else {
            fee.value = Number(data.price) + Number(props.fee_max)
        }

        productPrice = fee.value;
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

const tabPulsa = ref(JSON.parse(localStorage.getItem('tabPulsa')) ?? 'Pulsa')

watch(tabPulsa, (newTabPulsa) => {
    console.log(`tab is ${newTabPulsa}`)
    localStorage.setItem('tabPulsa', JSON.stringify(newTabPulsa))
})

</script>

<template>
    <AppLayout title="Pulsa"
               name="Pulsa"
               desc="Masukkan nomor"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <FormSection class="sticky top-0 z-40">
            <template #title>
                Pulsa
            </template>

            <template #description>
                * Saldo Rekening Rp {{ formatPrice($page.props.user.wallet_balance) }}
            </template>

            <template #form>
                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="Nomor HP"/>
                    <TextInput
                        id="number"
                        v-model="form.customer_no"
                        type="number"
                        class="mt-1 block w-full"
                        minlength="10"
                        required
                        autofocus
                    />
                    <InputError :message="form.errors.customer_no" class="mt-2"/>
                </div>

            </template>
        </FormSection>


        <div class="border-b border-gray-200" v-show="form.customer_no.length >= 4 ">
            <nav class="-mb-px flex" aria-label="Tabs">
                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tabPulsa=='Pulsa' ? 'border-primary-500 text-primary-600' : 'text-gray-500 border-gray-300' "
                        @click="tabPulsa='Pulsa'"
                >
                    Pulsa
                </button>

                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tabPulsa=='Data' ? 'border-primary-500 text-primary-600' : 'text-gray-500 border-gray-300' "
                        @click="tabPulsa='Data'"
                >
                    Data
                </button>
            </nav>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <template v-if="props.response === undefined">
<!--                <Loading />-->
            </template>

            <template v-if="props.response.data.rc==83">
                Refresh halaman
            </template>

            <template v-else v-for="data in sort(props.response.data)" >

                <template v-if="tabPulsa=='Pulsa'" >
                    <template v-if="data.category == 'Pulsa'" >
                        <template v-if="data.brand == provider(form.customer_no)">
                            <div class="relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50">
                                <div class="flex-shrink-0">
                                    <img class="h-10 w-10" :src=" '/img/vendor/'+data.brand+'.svg' " alt="">
                                </div>
                                <div class="flex-1 min-w-0">
                                    <template v-if="Number(data.price) < Number($page.props.digiflazz_saldo)">
                                        <button @click="confirmModal(data)" class="focus:outline-none text-left">
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            <p class="text-sm font-medium text-gray-900">{{ data.product_name }}</p>
                                            <p class="text-sm text-gray-500 truncate">
                                                <template v-if="Number(data.price) < 25000">
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
                </template>

                <template v-if="tabPulsa=='Data'" >
                    <template v-if="data.category == 'Data'" >
                        <template v-if="data.brand == provider(form.customer_no)">
                            <div class="relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50">
                                <div class="flex-shrink-0">
                                    <img class="h-10 w-10" :src=" '/img/vendor/'+data.brand+'.svg' " alt="">
                                </div>
                                <div class="flex-1 min-w-0">
                                    <template v-if="Number(data.price) < Number($page.props.digiflazz_saldo)">
                                        <button @click="confirmModal(data)" class="focus:outline-none text-left">
                                            <span class="absolute inset-0" aria-hidden="true"></span>
                                            <p class="text-sm font-medium text-gray-900">{{ data.product_name }}</p>
                                            <p class="text-sm text-gray-500 truncate">
                                                <template v-if="Number(data.price) < 25000">
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
