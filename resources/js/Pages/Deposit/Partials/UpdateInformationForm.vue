<script setup>
import {Link, useForm, usePage} from '@inertiajs/vue3';
import {computed, ref, watch} from 'vue'
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import moment from "moment/moment";
import SecondaryButton from "../../../Components/SecondaryButton.vue";

const props = defineProps({
    users: Object | String,
    response: Object | String,
});

const form = useForm({
    // user_id: props.users.id ?? null,
    amount: null,
});

const storeInformation = () => {
    form.amount = amount.value.replaceAll(".", "")
    form.post(route('deposit.method'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        // replace: true,
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

const clock = moment().format('HH')

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

// function formatPrice(value) {
//     return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
// }

const amount = ref(null)

watch(amount, (newAmount) => {
    amount.value = newAmount.toString()
        .replace(/\D/g, '')
        .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    // console.log(amount.value)
})

</script>

<template>
    <FormSection @submitted="storeInformation">
        <template #title>
            Mau isi saldo berapa?
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
                        type="tel"
                        class="mt-1 block w-full rounded-l-none"
                        min="1"
                        max="5000000"
                        required
                        autofocus
                    />
                </div>
                <InputError :message="form.errors.amount" class="mt-2"/>
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <ActionMessage :on="clock>=23" class="mr-3">
                Sistem cut off.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing || clock>=23">
                Konfirmasi
            </PrimaryButton>
        </template>
    </FormSection>

    <div class="grid grid-cols-3 lg:grid-cols-6 gap-3">
        <SecondaryButton class="border border-gray-300 justify-center" @click="amount=10000">10.000</SecondaryButton>
        <SecondaryButton class="border border-gray-300 justify-center" @click="amount=50000">50.000</SecondaryButton>
        <SecondaryButton class="border border-gray-300 justify-center" @click="amount=100000">100.000</SecondaryButton>
        <SecondaryButton class="border border-gray-300 justify-center" @click="amount=150000">150.000</SecondaryButton>
        <SecondaryButton class="border border-gray-300 justify-center" @click="amount=200000">200.000</SecondaryButton>
        <SecondaryButton class="border border-gray-300 justify-center" @click="amount=500000">500.000</SecondaryButton>
        <SecondaryButton class="border border-gray-300 justify-center" @click="amount=1000000">1.000.000</SecondaryButton>
        <SecondaryButton class="border border-gray-300 justify-center" @click="amount=2000000">2.000.000</SecondaryButton>
        <SecondaryButton class="border border-gray-300 justify-center" @click="amount=5000000">5.000.000</SecondaryButton>
    </div>

</template>
