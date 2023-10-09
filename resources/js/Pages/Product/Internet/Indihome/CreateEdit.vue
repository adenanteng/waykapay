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
    customer: Object,
    fee: Number
});

const form = useForm({
    user_id: props.users.id ?? null,
    order_id: props.customer.data.ref_id,
    customer_no: props.customer.data.customer_no,
    product_name: props.customer.data.customer_name,
    sku: props.customer.data.buyer_sku_code,
    admin: props.customer.data.admin,
    price: props.customer.data.price,
    selling_price: props.customer.data.selling_price,
    category_id: 12,
});

const storeInformation = () => {
    form.post(route('product.topup.pasca', form), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        // onSuccess: () => closeModal(),
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
        form.category_id = 12;

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

const tabs = ref('Pulsa')

</script>

<template>
    <AppLayout title="PLN Postpaid"
               name="PLN Postpaid"
               desc="Masukkan nomor"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <FormSection >
            <template #title>
                PLN Postpaid
            </template>

            <template #description>
                * Saldo Rekening Rp {{ formatPrice($page.props.user.wallet_balance) }}
            </template>

            <template #form>
                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="No. Pelanggan"/>
                    <div class="font-semibold text-gray-900">
                        {{ props.customer.data.customer_no }}
                    </div>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="Nama Pelanggan"/>
                    <div class="font-semibold text-gray-900">
                        {{ props.customer.data.customer_name }}
                    </div>
                </div>

<!--                <div class="col-span-6 sm:col-span-3">-->
<!--                    <InputLabel for="number" value="Stand Meter"/>-->
<!--                    <div class="font-semibold text-gray-900">-->
<!--                        {{ props.customer.data.desc.tarif }}-->
<!--                    </div>-->
<!--                </div>-->

                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="Lembar Tagihan"/>
                    <div class="font-semibold text-gray-900">
                        {{ props.customer.data.desc.lembar_tagihan }}
                    </div>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="Harga"/>
                    <div class="font-semibold text-gray-900">
                        Rp {{ formatPrice(props.customer.data.price) }}
                    </div>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="Biaya Admin"/>
                    <div class="font-semibold text-gray-900">
                        Rp {{ formatPrice(props.customer.data.admin) }}
                    </div>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="Total"/>
                    <div class="font-semibold text-gray-900">
                        Rp {{ formatPrice(props.customer.data.selling_price) }}
                    </div>
                </div>


            </template>
        </FormSection>


        <div class="grid">
            <template v-if="Number(props.customer.data.buyer_last_saldo) >= Number(props.customer.data.selling_price)">
                <PrimaryButton
                    class="w-full justify-center"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing || $page.props.user.wallet_balance <= props.customer.data.selling_price"
                    @click="storeInformation"
                >
                    Bayar
                </PrimaryButton>

                <ActionMessage :on="$page.props.user.wallet_balance <= props.customer.data.selling_price" class="mr-3">
                    Saldo anda kurang
                </ActionMessage>
            </template>

            <template v-else>
                <PrimaryButton
                    class="w-full justify-center"
                    disabled
                >
                    Tidak Tersedia
                </PrimaryButton>
            </template>

        </div>


<!--        <MobileMenu />-->
    </AppLayout>
</template>
