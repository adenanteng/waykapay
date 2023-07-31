<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm} from "@inertiajs/vue3";
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
import {ref} from "vue";

const props = defineProps({
    users: Object,
    response: Object,
    fee: Number
});

const form = useForm({
    user_id: props.users.id ?? null,
    customer_no: '',
    product_name: '',
    sku: '',
    amount: '',
    category_id: '',
});

const storeInformation = () => {
    form.post(route('product.topup', form), {
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
    if (value.substring(0, 4) === '0822') { return 'TELKOMSEL' }
    else if (value.substring(0, 4) === '0813') { return 'TELKOMSEL'}
    else if (value.substring(0, 4) === '0823') { return 'TELKOMSEL'}
    else if (value.substring(0, 4) === '0852') { return 'TELKOMSEL'}
    else if (value.substring(0, 4) === '0851') { return 'by.U'}
    else if (value.substring(0, 4) === '0877') { return 'XL'}
}

const confirmingModal = ref(false);
let productSku = ref(null);
let productName = ref(null);
let productBrand = ref(null);
let productPrice = ref(null);
let productDesc = ref(null);

const confirmModal = (data) => {

    if (form.customer_no !== '') {
        confirmingModal.value = true;
        form.sku = data.buyer_sku_code;
        form.amount = data.price;
        form.product_name = data.product_name;
        form.category_id = 2;

        productSku = data.buyer_sku_code;
        productName = data.product_name;
        productBrand = data.brand;
        productPrice = Number(data.price + props.fee);
        productDesc = data.desc;
    }
    // setTimeout(() => passwordInput.value.focus(), 250);
};

const closeModal = () => {
    confirmingModal.value = false;
    // form.reset();
};

const tabs = ref('Pulsa')

</script>

<template>
    <AppLayout title="Pulsa"
               name="Pulsa"
               desc="Masukkan nomor"
    >
        <template #previous>
            <PreviousButton :href="route('dashboard')" />
        </template>

<!--        <template #action>-->
<!--            <TextInput-->
<!--                id="name"-->
<!--                v-model="form.number"-->
<!--                type="tel"-->
<!--                class="mt-1 block w-full"-->
<!--                placeholder="08xx-xxxx-xxxx"-->
<!--                required-->
<!--            />-->
<!--            <InputError :message="form.errors.number" class="mt-2" />-->
<!--        </template>-->

<!--        @submitted="storeInformation" -->
        <FormSection >
            <template #title>
                Masukkan nomor HP
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
                        type="tel"
                        class="mt-1 block w-full"
                        minlength="10"
                        required
                    />
                    <InputError :message="form.errors.customer_no" class="mt-2"/>
                </div>

            </template>
        </FormSection>


        <div class="border-b border-gray-200">
            <nav class="-mb-px flex" aria-label="Tabs">
                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tabs=='Pulsa' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:border-gray-300' "
                        @click="tabs='Pulsa'"
                >
                    Pulsa
                </button>

                <button class=" w-1/2 py-4 px-1 text-center border-b-2 font-medium text-sm"
                        :class="tabs=='Data' ? 'border-primary-500 text-primary-600' : 'border-transparent text-gray-500 hover:border-gray-300 ' "
                        @click="tabs='Data'"
                >
                    Data
                </button>
            </nav>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <template v-for="data in props.response.data" >

                <template v-if="tabs=='Pulsa'" >
                    <template v-if="data.category == 'Pulsa'" >
                        <template v-if="data.brand == provider(form.customer_no)">
                            <div class="relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50">
                                <div class="flex-shrink-0">
                                    <img class="h-10 w-10" :src=" '/img/vendor/'+data.brand+'.svg' " alt="">
                                </div>
                                <div class="flex-1 min-w-0">
                                    <button @click="confirmModal(data)" class="focus:outline-none text-left">
                                        <span class="absolute inset-0" aria-hidden="true"></span>
                                        <p class="text-sm font-medium text-gray-900">{{ data.product_name }}</p>
                                        <p class="text-sm text-gray-500 truncate">Rp {{ formatPrice(parseInt(data.price) + props.fee) }}</p>
                                    </button>
                                </div>
                            </div>
                        </template>
                    </template>
                </template>

                <template v-if="tabs=='Data'" >
                    <template v-if="data.category == 'Data'" >
                    <template v-if="data.brand == provider(form.customer_no)">
                        <div class="relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50">
                            <div class="flex-shrink-0">
                                <img class="h-10 w-10" :src=" '/img/vendor/'+data.brand+'.svg' " alt="">
                            </div>
                            <div class="flex-1 min-w-0">
                                <button @click="confirmModal(data)" class="focus:outline-none text-left">
                                    <span class="absolute inset-0" aria-hidden="true"></span>
                                    <p class="text-sm font-medium text-gray-900">{{ data.product_name }}</p>
                                    <p class="text-sm text-gray-500 truncate">Rp {{ formatPrice(Number(data.price + props.fee)) }}</p>
                                </button>
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
<!--                <SecondaryButton @click="closeModal">-->
<!--                    Batal-->
<!--                </SecondaryButton>-->

                <ActionMessage :on="$page.props.user.wallet_balance <= productPrice" class="mr-3">
                    Saldo anda kurang
                </ActionMessage>

                <PrimaryButton
                    class="ml-3"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing || $page.props.user.wallet_balance <= productPrice"
                    @click="storeInformation"
                >
                    Beli
                </PrimaryButton>
            </template>
        </DialogModal>


<!--        <MobileMenu />-->
    </AppLayout>
</template>
