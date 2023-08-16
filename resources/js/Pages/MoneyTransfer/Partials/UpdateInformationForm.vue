<script setup>
import {Link, useForm, usePage} from '@inertiajs/vue3';
import {computed, ref} from 'vue'
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import ActionSection from "../../../Components/ActionSection.vue";

const props = defineProps({
    users: Object | String,
    response: Object | String,
    bank: Object,
    account_no: String,
});

const form = useForm({
    // user_id: props.users.id ?? null,
    amount: null,
    bank: props.bank,
    account_no: props.account_no,
});

const storeInformation = () => {
    form.post(route('money-transfer.confirm', form), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => {
        }
    });
};

</script>

<template>
    <ActionSection>
        <template #title>

        </template>

        <template #description>

        </template>

        <template #content>
            <div class="flex items-center px-5">
                <div class="flex-shrink-0">
                    <img class="h-12 w-12 rounded-full object-cover"
                         :src="$page.props.user.profile_photo_url"
                         :alt="$page.props.user.name"/>
                </div>
                <div class="ml-3 min-w-0 flex-1">
                    <div class="text-base font-medium text-gray-800 truncate capitalize">
<!--                        {{ $page.props.user.name }}-->
                        John Doe
                    </div>
                    <div class="text-sm font-medium text-gray-500 truncate">
                        {{ props.account_no }}
                    </div>
                </div>
            </div>
        </template>
    </ActionSection>

    <FormSection @submitted="storeInformation">
        <template #title>
            Mau Transfer berapa?
        </template>

        <template #description>

        </template>

        <template #form>
            <div class="col-span-6 sm:col-span-3">
                <InputLabel for="amount" value="Nominal"/>
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