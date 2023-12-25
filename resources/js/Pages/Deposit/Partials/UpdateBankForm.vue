<script setup>
import {Link, useForm, usePage} from '@inertiajs/vue3';
import {computed, ref} from 'vue'
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'

const props = defineProps({
    users: Object | String,
    response: Object | String,
    amount: String,
});

const form = useForm({
    user_id: props.users.id ?? null,
    amount: props.amount,
    method: null,
});

const storeInformation = () => {
    form.post(route('deposit.create'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        replace: true,
        onSuccess: () => {
        }
    });
};

const formReset = () => {
    form.defaults({
        user_id: null,
        amount: null,
    })
    form.reset()
}

const mailingLists = [
    // { id: 1, name: 'bca', logo: '/img/vendor/BCA.svg', adminFee: 'Biaya admin Rp 4.000' },
    { id: 2, name: 'bni', logo: '/img/vendor/BNI.svg', adminFee: 'Biaya admin Rp 4.000' },
    { id: 3, name: 'bri', logo: '/img/vendor/BRI.svg', adminFee: 'Biaya admin Rp 4.000' },
    { id: 4, name: 'mandiri', logo: '/img/vendor/MANDIRI.svg', adminFee: 'Biaya admin Rp 4.000' },
    { id: 5, name: 'permata', logo: '/img/vendor/PERMATA.svg', adminFee: 'Biaya admin Rp 4.000' },
    { id: 6, name: 'bsi', logo: '/img/vendor/BSI.svg', adminFee: 'Biaya admin Rp 4.000' },
    // { id: 7, name: 'qris', logo: '/img/vendor/QRIS.svg', adminFee: 'Biaya admin 2%' },
    // { id: 8, name: 'ovo', logo: '/img/vendor/OVO.svg', adminFee: 'Biaya admin 2%' },
    // { id: 9, name: 'shopeepay_app', logo: '/img/vendor/SHOPEEPAY.svg', adminFee: 'Biaya admin 2%' },
    // { id: 10, name: 'linkaja_app', logo: '/img/vendor/LINKAJA.svg', adminFee: 'Biaya admin 2%' },
    // { id: 11, name: 'dana', logo: '/img/vendor/DANA.svg', adminFee: 'Biaya admin 2%' },
    // { id: 12, name: 'gopay', logo: '/img/vendor/GOPAY.svg', adminFee: 'Biaya admin 2%' },
    { id: 13, name: 'alfamart', logo: '/img/vendor/ALFAMART.svg', adminFee: 'Biaya admin Rp 4.000' },
    // { id: 14, name: 'indomaret', logo: '/img/vendor/ALFAMART.svg', adminFee: 'Biaya admin Rp 4.000' },
    // { id: 15, name: 'transfer bca', logo: '/img/vendor/ALFAMART.svg', adminFee: 'Biaya admin Rp 4.000' },
    // { id: 16, name: 'transfer bri', logo: '/img/vendor/ALFAMART.svg', adminFee: 'Biaya admin Rp 4.000' },
]

const category = ref()

const categoryLists = [
    { id: 1, name: 'Virtual Account', logo: '/img/vendor/BCA.svg', icon: 'fa-wallet', desc: 4000, disabled: false },
    { id: 2, name: 'Manual Transfer', logo: '/img/vendor/WAYKAPAY.svg', icon: 'fa-bank', desc: 0, disabled: false },
    { id: 3, name: 'Retail Offline', logo: '/img/vendor/WAYKAPAY.svg', icon: 'fa-bank', desc: 0, disabled: false },
    // { id: 4, name: 'Agen Waykapay', logo: '/img/vendor/WAYKAPAY.svg', icon: 'fa-bank', desc: 0, disabled: false },
]

const virtualAccount = [
    // { id: 1, name: 'bca', logo: '/img/vendor/BCA.svg', adminFee: 'Biaya admin Rp 3.000' },
    { id: 2, name: 'bni', logo: '/img/vendor/BNI.svg', adminFee: 'Biaya admin Rp3.000' },
    { id: 3, name: 'bri', logo: '/img/vendor/BRI.svg', adminFee: 'Biaya admin Rp3.000' },
    { id: 4, name: 'mandiri', logo: '/img/vendor/MANDIRI.svg', adminFee: 'Biaya admin Rp3.000' },
    { id: 5, name: 'permata', logo: '/img/vendor/PERMATA.svg', adminFee: 'Biaya admin Rp3.000' },
    { id: 6, name: 'bsi', logo: '/img/vendor/BSI.svg', adminFee: 'Biaya admin Rp3.000' },
]

const offlineAccount = [
    { id: 13, name: 'alfamart', logo: '/img/vendor/ALFAMART.svg', adminFee: 'Biaya admin Rp4.000' },
]

const manualTransfer = [
    // { id: 15, name: 'bca', logo: '/img/vendor/BCA.svg', adminFee: 'Biaya admin Rp 4.000' },
    { id: 16, name: 'bri', logo: '/img/vendor/BRI.svg', adminFee: 'Bebas biaya admin' },
]

const codAccount = [
    { id: 20, name: 'waykapay', logo: '/img/vendor/WAYKAPAY.svg', adminFee: 'Bebas biaya admin' },
]

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const amount = formatPrice(props.amount)
</script>

<template>
    <FormSection >
        <template #title>

        </template>

        <template #description>

        </template>

        <template #form>
            <div class="col-span-6 sm:col-span-3">
                <InputLabel for="amount" value="Jumlah Saldo"/>
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        id="amount"
                        v-model="amount"
                        type="text"
                        class="mt-1 block w-full rounded-l-none"
                        disabled
                    />
                </div>
            </div>
        </template>
    </FormSection>

    <FormSection>
        <template #title>
            Pilih metode pembayaranmu.
        </template>

        <template #description>

        </template>

        <template #form>
            <div class="col-span-6">
                <RadioGroup >
                    <div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4">
                        <RadioGroupOption
                            @click="category=item.id; form.method=null"
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
            Virtual Account
        </template>

        <template #description>

        </template>

        <template #form>
            <div class="col-span-6">
                <RadioGroup v-model="form.method">
                    <div class="">
                        <div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4">
                            <RadioGroupOption as="template" v-for="mailingList in virtualAccount" :key="mailingList.id" :value="mailingList" v-slot="{ checked, active }">
                                <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-primary-500 ring-2 ring-primary-500' : '', 'relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none']">
                                    <div class="flex flex-1 justify-center">
                                        <div class="flex flex-col items-center">
                                            <img :src="mailingList.logo" class="h-7" alt="" />
                                            <RadioGroupDescription as="span" class="mt-1 flex text-xs text-gray-500">{{ mailingList.adminFee }}</RadioGroupDescription>
                                        </div>
                                    </div>
                                    <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600']" aria-hidden="true" />
                                    <span :class="[active ? 'border' : 'border-2', checked ? 'border-primary-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-3xl']" aria-hidden="true" />
                                </div>
                            </RadioGroupOption>
                        </div>
                    </div>
                </RadioGroup>

                <InputError :message="form.errors.method" class="mt-2"/>
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.method === null ">
                Konfirmasi
            </PrimaryButton>
        </template>
    </FormSection>

    <FormSection @submitted="storeInformation" v-if="category==2">
        <template #title>
            Manual Transfer
        </template>

        <template #description>

        </template>

        <template #form>
            <div class="col-span-6">
                <RadioGroup v-model="form.method">
                    <div class="">
                        <div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4">
                            <RadioGroupOption as="template" v-for="mailingList in manualTransfer" :key="mailingList.id" :value="mailingList" v-slot="{ checked, active }">
                                <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-primary-500 ring-2 ring-primary-500' : '', 'relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none']">
                                    <div class="flex flex-1 justify-center">
                                        <div class="flex flex-col items-center">
                                            <img :src="mailingList.logo" class="h-7" alt="" />
                                            <RadioGroupDescription as="span" class="mt-1 flex text-xs text-gray-500">{{ mailingList.adminFee }}</RadioGroupDescription>
                                        </div>
                                    </div>
                                    <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600']" aria-hidden="true" />
                                    <span :class="[active ? 'border' : 'border-2', checked ? 'border-primary-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-3xl']" aria-hidden="true" />
                                </div>
                            </RadioGroupOption>
                        </div>
                    </div>
                </RadioGroup>

                <InputError :message="form.errors.method" class="mt-2"/>
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.method === null ">
                Konfirmasi
            </PrimaryButton>
        </template>
    </FormSection>

    <FormSection @submitted="storeInformation" v-if="category==3">
        <template #title>
            Retail Offline
        </template>

        <template #description>

        </template>

        <template #form>
            <div class="col-span-6">
                <RadioGroup v-model="form.method">
                    <div class="">
                        <div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4">
                            <RadioGroupOption as="template" v-for="mailingList in offlineAccount" :key="mailingList.id" :value="mailingList" v-slot="{ checked, active }">
                                <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-primary-500 ring-2 ring-primary-500' : '', 'relative flex cursor-pointer rounded-3xl border p-4 shadow-sm focus:outline-none']">
                                    <div class="flex flex-1 justify-center">
                                        <div class="flex flex-col items-center">
                                            <img :src="mailingList.logo" class="h-7" alt="" />
                                            <RadioGroupDescription as="span" class="mt-1 flex text-xs text-gray-500">{{ mailingList.adminFee }}</RadioGroupDescription>
                                        </div>
                                    </div>
                                    <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600']" aria-hidden="true" />
                                    <span :class="[active ? 'border' : 'border-2', checked ? 'border-primary-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-3xl']" aria-hidden="true" />
                                </div>
                            </RadioGroupOption>
                        </div>
                    </div>
                </RadioGroup>

                <InputError :message="form.errors.method" class="mt-2"/>
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.method === null ">
                Konfirmasi
            </PrimaryButton>
        </template>
    </FormSection>

</template>
