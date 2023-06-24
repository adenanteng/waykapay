<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import ActionSection from '@/Components/ActionSection.vue';
import DangerButton from '@/Components/DangerButton.vue';
import DialogModal from '@/Components/DialogModal.vue';
import InputError from '@/Components/InputError.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import PrimaryButton from "@/Components/PrimaryButton.vue";
import ActionMessage from '@/Components/ActionMessage.vue';

const props = defineProps({
    users: Object
})

const passwordInput = ref(null);

const form = useForm({
    id: props.users.id,
});

const passwordReset = () => {
    form.post(route('user.passwordReset', props.users), {
        preserveScroll: true,
        // onSuccess: () => closeModal(),
        // onError: () => passwordInput.value.focus(),
        // onFinish: () => form.reset(),
    });
};

</script>

<template>
    <ActionSection>
        <template #title>
            Reset Password Pengguna
        </template>

        <template #description>
            Reset password pengguna secara permanen
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                Setelah reset password, password akan diganti secara permanen.
            </div>

            <div class="mt-5 flex items-center gap-3">
                <PrimaryButton class="" @click="passwordReset">
                    Reset Password
                </PrimaryButton>

                <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                    Berhasil reset password.
                </ActionMessage>
            </div>

        </template>
    </ActionSection>
</template>
