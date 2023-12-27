<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, usePage} from "@inertiajs/vue3";
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
import {computed, ref} from "vue";

const props = defineProps({
    users: Object,
    // response: Object,
    customer: Object,
    // fee: Number
});

const form = useForm({
    // user_id: props.users.id ?? null,
    order_id: props.customer.data.ref_id,
    customer_no: props.customer.data.customer_no,
    sku: props.customer.data.buyer_sku_code,
    selling_price: props.customer.data.selling_price,
    // category_id: 9,
});

const {...userInfo} = computed(() => usePage().props.user).value;
const storeInformation = () => {
    if (userInfo.pin) {
        form.post(route('pin.topupPasca'), {
            errorBag: 'storeInformation',
            preserveScroll: true,
            // onSuccess: () => closeModal(),
            // onError: () => passwordInput.value.focus(),
            // onFinish: () => form.reset(),
        });
    } else {
        form.post(route('product.topup.pasca'), {
            errorBag: 'storeInformation',
            preserveScroll: true,
            replace: true
            // onSuccess: () => closeModal(),
            // onError: () => passwordInput.value.focus(),
            // onFinish: () => form.reset(),
        });
    }
};

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function sort(arr) {
    // Set slice() to avoid to generate an infinite loop!
    return arr.slice().sort(function (a, b) {
        return a.price - b.price;
    });
}

</script>

<template>
    <AppLayout :title="props.customer.data.buyer_sku_code.replaceAll('-', ' ')"
               :name="props.customer.data.buyer_sku_code.replaceAll('-', ' ')"
               desc="Masukkan nomor"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <FormSection >
            <template #title>
                <span class="capitalize">
                    {{ props.customer.data.buyer_sku_code.replaceAll("-", " ") }}
                </span>

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

                <div class="col-span-6 sm:col-span-3" v-if="props.customer.data.desc?.tarif">
                    <InputLabel for="number" value="Stand Meter"/>
                    <div class="font-semibold text-gray-900">
                        {{ props.customer.data.desc.tarif }} {{ props.customer.data.desc.daya ?? ' ' }}
                    </div>
                </div>

<!--                <div class="col-span-6 sm:col-span-3">-->
<!--                    <InputLabel for="number" value="Lembar Tagihan"/>-->
<!--                    <div class="font-semibold text-gray-900">-->
<!--                        {{ props.customer.data.desc.lembar_tagihan }}-->
<!--                    </div>-->
<!--                </div>-->

                <div class="col-span-6 sm:col-span-3 space-y-5 py-5 border-y border-gray-600 border-dashed"
                     v-if="props.customer.data.desc?.detail"
                     v-for="(item, index) in props.customer.data.desc.detail"
                >
                    <div>
                        <InputLabel for="number" :value="'Periode ' + Number(index + 1)"/>
                        <div class="font-semibold text-gray-900">
                            {{ item.periode }}
                        </div>
                    </div>

                    <div>
                        <InputLabel for="number" value="Nilai Tagihan" v-if="item?.nilai_tagihan" />
                        <div class="font-semibold text-gray-900">
                            Rp {{ formatPrice(item.nilai_tagihan) }}
                        </div>
                    </div>

                    <div>
                        <InputLabel for="number" value="Denda" v-if="item?.denda" />
                        <div class="font-semibold text-gray-900">
                            Rp {{ formatPrice(item.denda) }}
                        </div>
                    </div>

                </div>

<!--                <div class="col-span-6 sm:col-span-3">-->
<!--                    <InputLabel for="number" value="Harga"/>-->
<!--                    <div class="font-semibold text-gray-900">-->
<!--                        Rp {{ formatPrice(props.customer.data.price) }}-->
<!--                    </div>-->
<!--                </div>-->

                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="Biaya Admin"/>
                    <div class="font-semibold text-gray-900">
                        Rp {{ formatPrice(Number(props.customer.data.selling_price) - Number(props.customer.data.price)) }}
<!--                        {{ formatPrice(props.customer.data.admin) }}-->
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
