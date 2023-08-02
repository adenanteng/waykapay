<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import ActionSection from '@/Components/ActionSection.vue';
import DangerButton from '@/Components/DangerButton.vue';

const props = defineProps({
    carousel: Object | null,
});

const form = useForm({
    id: props.carousel.id,
});

const deleteCarousel = () => {
    form.delete(route('carousel.destroy', props.carousel), {
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
            Hapus Carousel
        </template>

        <template #description>
            Permanently delete your account.
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.
            </div>

            <div class="mt-5">
                <DangerButton @click="deleteCarousel">
                    Hapus Carousel
                </DangerButton>
            </div>
        </template>
    </ActionSection>
</template>
