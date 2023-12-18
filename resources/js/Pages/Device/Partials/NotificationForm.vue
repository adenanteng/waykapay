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
import TextAreaInput from "../../../Components/TextAreaInput.vue";

const props = defineProps({
    // setting: Object,
});

const form = useForm({
    message: null,
});

const sendNotification = () => {
    form.post(route('device.send'), {
        errorBag: 'storeSettingInformation',
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
        },
    });


};

</script>

<template>
    <FormSection @submitted="sendNotification">
        <template #title>
            Notifikasi
        </template>

        <template #description>
            Kirim notifikasi ke pengguna
        </template>

        <template #form>
            <div class="col-span-6">
                <InputLabel value="Pesan Notifikasi" />
                <TextAreaInput
                    v-model="form.message"
                    type="text"
                    class="mt-1 block w-full"
                    rows="3"
                />
                <InputError :message="form.errors.message" class="mt-2" />
            </div>

        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                <i class="fa-regular fa-paper-plane mr-1" /> Kirim
            </PrimaryButton>
        </template>
    </FormSection>
</template>
