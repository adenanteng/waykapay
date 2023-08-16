<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router, usePage} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {computed, ref} from "vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import PreviousButton from "@/Components/PreviousButton.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import FormSection from "@/Components/FormSection.vue";
import { toClipboard } from '@soerenmartius/vue3-clipboard'
import Popper from "vue3-popper";
import VueQrcode from "@chenfengyuan/vue-qrcode";
import moment from "moment/moment";

const props = defineProps({
    transaction: Object,
    virtual_account: Object | String,
    wallet_account: Object | String
})

const form = useForm({
    transaction: props.transaction,
    // bank: props.bank ?? null,
    // gopay: props.gopay ?? null,
});

const storeInformation = () => {

    form.put(route('deposit.confirm', form), {
        errorBag: 'updateInformation',
        preserveScroll: true,
        onSuccess: () => {}
    });
};

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

function formattedDateTime(value) {
    return moment(value).format('DD MMM Y HH:m')
}

</script>

<template>
    <AppLayout title="Konfirmasi Deposit"
               name="Konfirmasi Deposit"
               desc="Lorem ipsum dolor sit amet"
    >

        <template #previous>
            <PreviousButton />
        </template>

        <FormSection >
            <template #title>
                Pembayaran
            </template>

            <template #description>

            </template>

            <template #form>
                <div class="col-span-6 sm:col-span-3">
                    <h2 class="tracking-tight">
                        <span class="block text-sm font-medium text-gray-600 mt-5">
                            Total Pembayaran
                        </span>

                        <span class="block text-xl font-extrabold text-primary-600">
                            Rp {{ formatPrice(props.transaction.gross_amount) }}
                        </span>

                        <template v-if="props.virtual_account">
                            <span class="block text-sm font-medium text-gray-600 mt-5">
                                Bank
                            </span>
                            <span class="block text-xl font-extrabold text-primary-600 uppercase">
                                {{ props.virtual_account.bank }}
                            </span>

                            <span class="block text-sm font-medium text-gray-600 mt-5">
                                No. Virtual Account
                            </span>
                            <span class="block text-xl font-extrabold text-primary-600 uppercase">
                                {{ props.virtual_account.va_number }}
                                <Popper class="text-sm text-gray-900 font-normal lowercase" content="Sukses copy" arrow placement="right-end">
                                    <button class="" @click="toClipboard(props.virtual_account.va_number)">
                                        <i class="fa-duotone fa-paste ml-2" />
                                    </button>
                                </Popper>
                            </span>
                            <span class="block text-sm font-medium text-gray-600 mt-5">
                                Redirect
                            </span>
                            <span class="block text-xl font-extrabold text-primary-600 uppercase">
                                <a target="_blank" :href="props.virtual_account.payment_url" >Bayar</a>
                            </span>

<!--                            <span class="block text-sm font-medium text-gray-600 mt-5">-->
<!--                                Kadaluarsa-->
<!--                            </span>-->
<!--                            <span class="block text-xl font-extrabold text-primary-600 uppercase">-->
<!--                                {{ formattedDateTime(props.virtual_account.exp_time) }}-->
<!--                            </span>-->
                        </template>

                        <template v-if="props.wallet_account">
                            <template v-if="props.wallet_account.qr_code !== '-'">
                                <span class="block text-sm font-medium text-gray-600 mt-5">
                                    Qr Code
                                </span>
                                <span class="block text-xl font-extrabold text-primary-600 uppercase">
                                    <VueQrcode
                                        :value="props.wallet_account.qr_code"
                                        tag="svg"
                                        :options="{
                                            width: 200,
                                            color: {
                                                dark: '#000',
                                                light: '#fff',
                                            },
                                        }"
                                    ></VueQrcode>
                                </span>
                            </template>

                            <span class="block text-sm font-medium text-gray-600 mt-5">
                                Redirect
                            </span>
                            <span class="block text-xl font-extrabold text-primary-600 uppercase">
                                <a target="_blank" :href="props.wallet_account.payment_url" >Bayar</a>
                            </span>

<!--                            <span class="block text-sm font-medium text-gray-600 mt-5">-->
<!--                                Kadaluarsa-->
<!--                            </span>-->
<!--                            <span class="block text-xl font-extrabold text-primary-600 uppercase">-->
<!--                                {{ formattedDateTime(props.wallet_account.exp_time) }}-->
<!--                            </span>-->
                        </template>
                    </h2>
                </div>

            </template>

            <template #actions>
<!--                <ActionMessage :on="form.recentlySuccessful" class="mr-3">-->
<!--                    Berhasil disimpan.-->
<!--                </ActionMessage>-->

<!--                <PrimaryButton as="a" :href="route('dashboard')">-->
<!--                    Kembali ke Beranda-->
<!--                </PrimaryButton>-->

                <PrimaryButton @click="storeInformation" >
                    Kembali ke Beranda
                </PrimaryButton>
            </template>
        </FormSection>

    </AppLayout>
</template>
