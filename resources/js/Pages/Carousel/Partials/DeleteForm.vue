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
            Hapus permanen carousel
        </template>

        <template #content>
            <div class="max-w-xl text-sm text-gray-600">
                Carousel yang dihapus tidak dapat dipulihkan.
            </div>

            <div class="mt-5">
                <DangerButton @click="deleteCarousel">
                    Hapus Carousel
                </DangerButton>
            </div>
        </template>
    </ActionSection>
</template>
