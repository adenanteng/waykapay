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

const walletLists = [
    { id: 1, name: 'wkp', logo: '/img/vendor/WAYKAPAY.svg', admin: 0, disabled: false },
]

const form = useForm({
    user_id: props.users.id ?? null,
    bank: walletLists[0],
    account_no: '',
});

const storeInformation = () => {
    // form.account_no = '08'+form.account_no
    form.post(route('money-transfer.amount'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        replace: true,
        onSuccess: () => {
        }
    });
};

import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import moment from "moment";

const category = ref()

const categoryLists = [
    { id: 1, name: 'Transfer Waykapay', logo: '/img/vendor/BCA.svg', icon: 'fa-wallet', desc: 4000, disabled: false },
    { id: 2, name: 'Transfer Bank', logo: '/img/vendor/WAYKAPAY.svg', icon: 'fa-bank', desc: 0, disabled: false },
]

const bankLists = [
    // { id: 1, name: 'wkp', logo: '/img/vendor/WAYKAPAY.svg', admin: 0, disabled: false },
    { id: 2, name: 'bca', logo: '/img/vendor/BCA.svg', admin: 4000, disabled: true },
    { id: 3, name: 'bni', logo: '/img/vendor/BNI.svg', admin: 4000, disabled: true },
    { id: 4, name: 'bri', logo: '/img/vendor/BRI.svg', admin: 4000, disabled: true },
    { id: 5, name: 'mandiri', logo: '/img/vendor/MANDIRI.svg', admin: 4000, disabled: true },
    { id: 6, name: 'permata', logo: '/img/vendor/PERMATA.svg', admin: 4000, disabled: true },
    { id: 7, name: 'bsm', logo: '/img/vendor/BSI.svg', admin: 4000, disabled: true },
]

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const clock = moment().format('HH')
</script>

<template>
    <FormSection>
        <template #title>
            Mau transfer kemana?
        </template>

        <template #description>

        </template>

        <template #form>
            <div class="col-span-6">
                <RadioGroup >
                    <div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4">
                        <RadioGroupOption
                            @click="category=item.id"
                            as="template"
                            v-for="item in categoryLists"
                            :key="item.id"
                            :value="item"
                            v-slot="{ checked, active }"
                            :disabled="item.disabled"
                            :class="item.disabled ? 'bg-gray-200 opacity-75' : '' "
                        >
                            <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-primary-500 ring-2 ring-primary-500' : '', 'relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none']">
                                <div class="flex flex-1 justify-center items-center h-full">
                                    <div class="inline-flex items-center">
<!--                                    <img :src="item.logo" class="h-7" alt=""/>-->
                                        <i class="fa-duotone text-primary-600 text-lg mr-2" :class="item.icon" />
                                        <RadioGroupDescription as="span" class="flex text-sm font-medium text-gray-900">{{ item.name }}</RadioGroupDescription>
                                    </div>
                                </div>
                                <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600']" aria-hidden="true" />
                                <span :class="[active ? 'border' : 'border-2', checked ? 'border-primary-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-3xl']" aria-hidden="true" />
                            </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>
            </div>
        </template>
    </FormSection>

    <FormSection @submitted="storeInformation" v-if="category==1">
        <template #title>
            Nomor handphone tujuan
        </template>

        <template #description>

        </template>

        <template #form>
            <div class="col-span-6" >
                <InputLabel for="amount" value="Nomor handphone tujuan"/>
                <!--                <div class="flex">-->
                <!--                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">-->
                <!--                        08-->
                <!--                    </span>-->
                <TextInput
                    id="account_no"
                    v-model="form.account_no"
                    type="number"
                    class="mt-1 block w-full"
                    required
                />
                <!--                </div>-->
                <InputError :message="form.errors.account_no" class="mt-2"/>
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <ActionMessage :on="clock>=23" class="mr-3">
                Sistem cut off.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.account_no === ''  ">
                Lanjutkan
            </PrimaryButton>
        </template>
    </FormSection>

    <FormSection @submitted="storeInformation" v-if="category==2">
        <template #title>
            Bank dan nomor rekening tujuan
        </template>

        <template #description>

        </template>

        <template #form>
            <div class="col-span-6">
<!--                <InputLabel for="amount" value="Jumlah Saldo"/>-->

                <RadioGroup v-model="form.bank">
                    <div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4">
                        <RadioGroupOption
                            as="template"
                            v-for="item in bankLists"
                            :key="item.id"
                            :value="item"
                            v-slot="{ checked, active }"
                            :disabled="item.disabled"
                            :class="item.disabled ? 'bg-gray-200 opacity-75' : '' "
                        >
                            <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-primary-500 ring-2 ring-primary-500' : '', 'relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none']">
                                <div class="flex flex-1 justify-center items-center h-full">
<!--                                    <div class="flex flex-col items-center">-->
                                        <img :src="item.logo" class="h-7" alt=""/>
    <!--                                    <RadioGroupDescription as="span" class="mt-1 flex text-sm text-gray-500">{{ item.adminFee }}</RadioGroupDescription>-->
    <!--                                    <RadioGroupDescription as="span" class="mt-1 flex text-sm text-gray-500">{{ mailingList.adminFee }}</RadioGroupDescription>-->
<!--                                    </div>-->
                                </div>
                                <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600']" aria-hidden="true" />
                                <span :class="[active ? 'border' : 'border-2', checked ? 'border-primary-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-3xl']" aria-hidden="true" />
                            </div>
                        </RadioGroupOption>
                    </div>
                </RadioGroup>

                <InputError :message="form.errors.bank" class="mt-2"/>
            </div>

<!--            <div class="col-span-6" v-if="form.bank?.id==1">-->
<!--                <InputLabel for="amount" value="Nomor handphone tujuan"/>-->
<!--&lt;!&ndash;                <div class="flex">&ndash;&gt;-->
<!--&lt;!&ndash;                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">&ndash;&gt;-->
<!--&lt;!&ndash;                        08&ndash;&gt;-->
<!--&lt;!&ndash;                    </span>&ndash;&gt;-->
<!--                    <TextInput-->
<!--                        id="account_no"-->
<!--                        v-model="form.account_no"-->
<!--                        type="number"-->
<!--                        class="mt-1 block w-full"-->
<!--                        required-->
<!--                    />-->
<!--&lt;!&ndash;                </div>&ndash;&gt;-->
<!--                <InputError :message="form.errors.account_no" class="mt-2"/>-->
<!--            </div>-->

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <ActionMessage :on="clock>=23" class="mr-3">
                Sistem cut off.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.bank === null || form.account_no === ''  || clock>=23">
                Lanjutkan
            </PrimaryButton>
        </template>
    </FormSection>

</template>
