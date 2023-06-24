<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import ActionSection from '@/Components/ActionSection.vue';
import DangerButton from '@/Components/DangerButton.vue';
import DialogModal from '@/Components/DialogModal.vue';
import InputError from '@/Components/InputError.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    users: Object
})

const passwordInput = ref(null);

const form = useForm({
    id: props.users.id,
});

const deletePage = () => {
    form.delete(route('user.destroy', props.users), {
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
            Hapus Pengguna
        </template>

        <template #description>
            Hapus akun secara permanen
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                Setelah akun dihapus, semua sumber daya dan datanya akan dihapus secara permanen.
            </div>

            <div class="mt-5">
                <DangerButton class="" @click="deletePage">
                    Hapus Pengguna
                </DangerButton>
            </div>

        </template>
    </ActionSection>
</template>
