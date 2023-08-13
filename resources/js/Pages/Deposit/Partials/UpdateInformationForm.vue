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
    // user_id: props.users.id ?? null,
    amount: null,
});

const storeInformation = () => {
    form.post(route('deposit.method', form), {
        errorBag: 'storeInformation',
        preserveScroll: true,
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
                        v-model="form.amount"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                        min="10000"
                        max="9999999"
                        required
                    />
                </div>
                <InputError :message="form.errors.amount" class="mt-2"/>
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Konfirmasi
            </PrimaryButton>
        </template>
    </FormSection>

</template>
