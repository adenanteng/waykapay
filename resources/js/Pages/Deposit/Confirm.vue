<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router, usePage} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {computed, onMounted, ref} from "vue";
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

onMounted(() => {
    console.log(`the component is now mounted.`)
    if (props.virtual_account.payment_url) {
        window.open(props.virtual_account.payment_url)
    } else if (props.wallet_account.payment_url) {
        window.open(props.wallet_account.payment_url)
    }
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
                <div class="col-span-6 ">
                    <div class="grid grid-cols-1 gap-x-4 gap-y-2 sm:gap-y-8 sm:grid-cols-2 text-gray-900">
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Nominal</div>
                            <div class="text-sm font-semibold ">Rp {{ formatPrice(props.transaction.amount) }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Biaya Admin</div>
                            <div class="text-sm font-semibold ">Rp {{ formatPrice(props.transaction.admin_fee) }}</div>
                        </div>
                        <div class="sm:col-span-1 flex sm:block justify-between">
                            <div class="text-sm ">Total</div>
                            <div class="text-sm font-semibold ">Rp {{ formatPrice(props.transaction.gross_amount) }}</div>
                        </div>

                        <template v-if="props.virtual_account">
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm ">Bank</div>
                                <div class="text-sm font-semibold ">{{ props.virtual_account.bank }}</div>
                            </div>
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm ">No. Virtual Account</div>
                                <div class="text-sm font-semibold ">{{ props.virtual_account.va_number }}
                                    <Popper class="text-sm text-primary-900 font-normal lowercase" content="Sukses copy" arrow placement="right-end">
                                        <button class="" @click="toClipboard(props.virtual_account.va_number)">
                                            <i class="fa-duotone fa-paste ml-2" />
                                        </button>
                                    </Popper>
                                </div>
                            </div>
                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm ">Deeplink</div>
                                <div class="text-sm font-semibold text-primary-600 underline">
                                    <a target="_blank" :href="props.virtual_account.payment_url" >Bayar</a>
                                </div>
                            </div>
                        </template>

                        <template v-if="props.wallet_account">
                            <template v-if="props.wallet_account.qr_code !== '-'">
                                <div class="sm:col-span-2 flex flex-col items-center my-5 gap-3">
                                    <div class="text-sm ">
                                        <img src="/img/vendor/QRIS.svg" class="h-8 w-auto" alt="QRIS">
                                    </div>
                                    <div class="text-sm font-semibold ">
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
                                    </div>
                                </div>
                            </template>

                            <div class="sm:col-span-1 flex sm:block justify-between">
                                <div class="text-sm ">Deeplink</div>
                                <div class="text-sm font-semibold text-primary-600 underline">
                                    <a target="_blank" :href="props.wallet_account.payment_url" >Bayar</a>
                                </div>
                            </div>

                            <!--                            <span class="block text-sm font-medium text-gray-600 mt-5">-->
                            <!--                                Kadaluarsa-->
                            <!--                            </span>-->
                            <!--                            <span class="block text-xl font-extrabold text-primary-600 uppercase">-->
                            <!--                                {{ formattedDateTime(props.wallet_account.exp_time) }}-->
                            <!--                            </span>-->
                        </template>
                    </div>
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
