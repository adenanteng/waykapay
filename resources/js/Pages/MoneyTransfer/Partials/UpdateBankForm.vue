<script setup>
import {Link, router, useForm, usePage} from '@inertiajs/vue3';
import {computed, onMounted, ref} from 'vue'
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import moment from "moment";
import Loading from "../../Product/Loading.vue";

const props = defineProps({
    users: Object | String,
    response: Object | String,
    customer_list: undefined,
});

onMounted(() => {
    router.reload({ only: ['customer_list'] })
})

const category = ref()

const categoryLists = [
    { id: 1, name: 'Transfer Waykapay', logo: '/img/vendor/BCA.svg', icon: 'fa-wallet', desc: 4000, disabled: false },
    { id: 2, name: 'Transfer Bank', logo: '/img/vendor/WAYKAPAY.svg', icon: 'fa-bank', desc: 0, disabled: false },
]

const walletLists = [
    { id: 1, name: 'wkp', logo: '/img/vendor/WAYKAPAY.svg', admin: 0, disabled: false },
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
        // replace: true,
        onSuccess: () => {
        }
    });
};

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

    <template v-if="category==1">
        <FormSection @submitted="storeInformation" >
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

                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.account_no === ''  || clock>=23">
                    Lanjutkan
                </PrimaryButton>
            </template>
        </FormSection>

        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <template v-if="props.customer_list === undefined">
                <Loading />
            </template>

            <template v-else-if="form.account_no.length <= 1" v-for="cust in props.customer_list">
                <li class="relative px-6 py-5 flex items-center space-x-3">
                    <div class="flex-shrink-0" >
                        <img class="w-10" :src="'/img/vendor/' + cust.brand + '.png'" alt="">
<!--                        <img class="w-10" :src="'/img/vendor/' + cust.brand + '.svg'" alt="">-->
                    </div>

                    <div @click="form.account_no = cust.customer_no" class="flex-1 min-w-0">
                        <button @click="" class="focus:outline-none text-left">
                            <span class="absolute inset-0" aria-hidden="true"></span>
                            <p class="text-sm font-medium text-gray-900">{{ cust.customer_name }}</p>
                            <p class="text-sm text-gray-500 truncate">{{ cust.customer_no }}</p>
                        </button>
                    </div>
                </li>
            </template>
        </ul>

    </template>

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
