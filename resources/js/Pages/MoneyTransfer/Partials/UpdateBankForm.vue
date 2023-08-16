<script setup>
import {Link, useForm, usePage} from '@inertiajs/vue3';
import {computed, ref} from 'vue'
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    users: Object | String,
    response: Object | String,
});

const form = useForm({
    user_id: props.users.id ?? null,
    bank: null,
    account_no: null,
});

const storeInformation = () => {
    form.post(route('money-transfer.amount', form), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => {
        }
    });
};

import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const mailingLists = [
    { id: 1, name: 'bca', logo: '/img/vendor/BCA.svg', adminFee: 'Biaya admin Rp 4.000' },
    { id: 2, name: 'bni', logo: '/img/vendor/BNI.svg', adminFee: 'Biaya admin Rp 4.000' },
    { id: 3, name: 'bri', logo: '/img/vendor/BRI.svg', adminFee: 'Biaya admin Rp 4.000' },
    { id: 4, name: 'mandiri', logo: '/img/vendor/MANDIRI.svg', adminFee: 'Biaya admin Rp 4.000' },
    { id: 5, name: 'permata', logo: '/img/vendor/PERMATA.svg', adminFee: 'Biaya admin Rp 4.000' },
    { id: 6, name: 'bsm', logo: '/img/vendor/BSI.svg', adminFee: 'Biaya admin Rp 4.000' },
]

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <FormSection @submitted="storeInformation">
        <template #title>
            Pilih Bank.
        </template>

        <template #description>

        </template>

        <template #form>
            <div class="col-span-6">
<!--                <InputLabel for="amount" value="Jumlah Saldo"/>-->

                <RadioGroup v-model="form.bank">
                    <div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4">
                        <RadioGroupOption as="template" v-for="mailingList in mailingLists" :key="mailingList.id" :value="mailingList" v-slot="{ checked, active }">
                            <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-primary-500 ring-2 ring-indigo-500' : '', 'relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none']">
                              <span class="flex flex-1 justify-center">
                                <span class="flex flex-col items-center">
                                    <img :src="mailingList.logo" class="h-7" alt=""/>
<!--                                  <RadioGroupLabel as="span" class="block text-sm font-medium text-gray-900">Biaya admin {{ formatPrice(mailingList.adminFee) }}</RadioGroupLabel>-->
<!--                                    <RadioGroupDescription as="span" class="mt-1 flex text-sm text-gray-500">{{ mailingList.adminFee }}</RadioGroupDescription>-->
<!--                                  <RadioGroupDescription as="span" class="mt-6 text-sm font-medium text-gray-900">{{ mailingList.users }}</RadioGroupDescription>-->
                                </span>
                              </span>
                                <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-indigo-600']" aria-hidden="true" />
                                <span :class="[active ? 'border' : 'border-2', checked ? 'border-primary-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-3xl']" aria-hidden="true" />
                            </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>

                <InputError :message="form.errors.bank" class="mt-2"/>
            </div>

            <div class="col-span-6">
                <InputLabel for="amount" value="Nomor Rekening"/>
                <TextInput
                    id="account_no"
                    v-model="form.account_no"
                    type="number"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.account_no" class="mt-2"/>
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.method === null ">
                Lanjut
            </PrimaryButton>
        </template>
    </FormSection>

</template>
