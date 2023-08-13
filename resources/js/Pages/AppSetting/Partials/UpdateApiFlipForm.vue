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
    flip_secret: props.setting.flip_secret ?? null,
    flip_token: props.setting.flip_token ?? null,
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
            API Flip
        </template>

        <template #description>
            Informasi autentikasi API Flip
        </template>

        <template #form>
            <div class="col-span-6">
                <InputLabel for="flipSecret" value="Flip Secret" />
                <TextInput
                    id="flipSecret"
                    v-model="form.flip_secret"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.flip_secret" class="mt-2" />
            </div>

            <div class="col-span-6">
                <InputLabel for="flipToken" value="Flip Token" />
                <TextInput
                    id="flipToken"
                    v-model="form.flip_token"
                    type="text"
                    class="mt-1 block w-full"
                    required
                />
                <InputError :message="form.errors.flip_token" class="mt-2" />
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
