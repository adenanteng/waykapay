<script setup>
import { ref } from 'vue';
import { Link, useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    setting: Object,
});

const form = useForm({
    midtrans_id_merchant: props.setting.midtrans_id_merchant ?? null,
    midtrans_client_key: props.setting.midtrans_client_key ?? null,
    midtrans_server_key: props.setting.midtrans_server_key ?? null,
});

const updateSettingInformation = () => {
    form.post(route('setting.store'), {
        errorBag: 'storeSettingInformation',
        preserveScroll: true,
        // onSuccess: () => clearPhotoFileInput(),
    });


};

</script>

<template>
    <FormSection @submitted="updateSettingInformation">
        <template #title>
            API Midtrans
        </template>

        <template #description>
            Informasi umum tentang aplikasi
        </template>

        <template #form>
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="midtransIdMerchant" value="Id Merchant" />
                <TextInput
                    id="midtransIdMerchant"
                    v-model="form.midtrans_id_merchant"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.midtrans_id_merchant" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="midtransClientKey" value="Client Key" />
                <TextInput
                    id="midtransClientKey"
                    v-model="form.midtrans_client_key"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.midtrans_client_key" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="midtransServerKey" value="Server Key" />
                <TextInput
                    id="midtransServerKey"
                    v-model="form.midtrans_server_key"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.midtrans_server_key" class="mt-2" />
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Simpan
            </PrimaryButton>
        </template>
    </FormSection>
</template>
