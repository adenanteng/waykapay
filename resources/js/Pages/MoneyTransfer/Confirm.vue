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
    users: Object,
    to: Object,
    transaction: Object,
})

// const form = useForm({
//     transaction: props.transaction,
//     // bank: props.bank ?? null,
//     // gopay: props.gopay ?? null,
// });

// const storeInformation = () => {
//
//     form.put(route('deposit.confirm', form), {
//         errorBag: 'updateInformation',
//         preserveScroll: true,
//         onSuccess: () => {}
//     });
// };

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
                    {{ props.transaction }}
                </div>

            </template>

            <template #actions>
<!--                <ActionMessage :on="form.recentlySuccessful" class="mr-3">-->
<!--                    Berhasil disimpan.-->
<!--                </ActionMessage>-->

                <PrimaryButton as="a" :href="route('dashboard')">
                    Kembali ke Beranda
                </PrimaryButton>

            </template>
        </FormSection>

    </AppLayout>
</template>
