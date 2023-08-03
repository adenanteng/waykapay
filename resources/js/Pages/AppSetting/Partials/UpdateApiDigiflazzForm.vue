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
    digiflazz_username: props.setting.digiflazz_username ?? null,
    digiflazz_key: props.setting.digiflazz_key ?? null,
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
            API Digiflazz
        </template>

        <template #description>
            Informasi autentikasi API Digiflazz
        </template>

        <template #form>
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="digiflazzUsername" value="Username" />
                <TextInput
                    id="digiflazzUsername"
                    v-model="form.digiflazz_username"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.digiflazz_username" class="mt-2" />
            </div>

            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="digiflazzKey" value="Key" />
                <TextInput
                    id="digiflazzKey"
                    v-model="form.digiflazz_key"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.digiflazz_key" class="mt-2" />
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
