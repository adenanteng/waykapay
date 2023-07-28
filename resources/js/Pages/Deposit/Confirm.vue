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

const props = defineProps({
    amount: String,
    bank: String,
    va_number: String,
    exp_time: String,
})

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <AppLayout title="Konfirmasi Deposit"
               name="Konfirmasi Deposit"
               desc="Lorem ipsum dolor sit amet"
    >

        <template #previous>
            <PreviousButton :href="route('deposit.index')" />
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
                        <span class="block text-sm font-medium text-gray-600">
                            Jumlah Pembayaran
                        </span>
                        <span class="block text-xl font-extrabold text-primary-600">
                            Rp {{ formatPrice(props.amount) }}
                        </span>

                        <span class="block text-sm font-medium text-gray-600 mt-5">
                            Bank
                        </span>
                        <span class="block text-xl font-extrabold text-primary-600 uppercase">
                            {{ props.bank }}
                        </span>

                        <span class="block text-sm font-medium text-gray-600 mt-5">
                            No. Virtual Account
                        </span>
                        <span class="block text-xl font-extrabold text-primary-600 uppercase">
                            {{ props.va_number }}
                            <Popper class="text-sm text-gray-900 font-normal lowercase" content="Sukses copy" arrow placement="right-end">
                                <button class="" @click="toClipboard(props.va_number)">
                                    <i class="fa-duotone fa-paste ml-2" />
                                </button>
                            </Popper>

<!--                            <Popper content="This is the Popper content">-->
<!--                                <button>Trigger element</button>-->
<!--                          </Popper>-->
                        </span>

                        <span class="block text-sm font-medium text-gray-600 mt-5">
                            Kadaluarsa
                        </span>
                        <span class="block text-xl font-extrabold text-primary-600 uppercase">
                            {{ props.exp_time }}
                        </span>
                    </h2>
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
