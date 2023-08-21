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
        form.category_id = 6;

        productSku = data.buyer_sku_code;
        productName = data.product_name;
        productBrand = data.brand;
        productPrice = Number(data.price) + (Number((props.fee / 100) * data.price));
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
    <AppLayout title="Gopay"
               name="Gopay"
               desc="Lorem ipsum"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <FormSection >
            <template #title>
                Gopay
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
                        minlength="8"
                        required
                    />
                    <InputError :message="form.errors.customer_no" class="mt-2"/>
                </div>

            </template>
        </FormSection>


        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">

            <template v-for="data in sort(props.response.data)" >
                <template v-if="data.category == 'E-Money'">

                    <template v-if="data.brand == 'GO PAY'">
                        <div class="relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3 focus-within:border-primary-300 focus-within:ring focus-within:ring-primary-200 focus-within:ring-opacity-50">
                            <div class="flex-shrink-0">
                                <img class="h-10 w-10" src="/img/vendor/icon/GOPAY.svg" alt="">
                            </div>
                            <div class="flex-1 min-w-0">
                                <template v-if="Number(data.price) < Number($page.props.digiflazz_saldo)">
                                    <button @click="confirmModal(data)" class="focus:outline-none text-left">
                                        <span class="absolute inset-0" aria-hidden="true"></span>
                                        <p class="text-sm font-medium text-gray-900">{{ data.product_name }}</p>
                                        <p class="text-sm text-gray-500 truncate">Rp {{ formatPrice(Number(data.price) + (Number((props.fee / 100) * data.price))) }}</p>
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
                        Id Player
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
