<script setup>
import SectionTitle from './SectionTitle.vue';
</script>

<template>
    <div class="md:grid md:grid-cols-4 md:gap-6 mb-10 sm:mt-0">
        <SectionTitle class="pl-3">
            <template #title>
                <slot name="title" />
            </template>
            <template #description>
                <slot name="description" />
            </template>
        </SectionTitle>

        <div class="mt-5 md:mt-0 md:col-span-3">
            <div class="px-4 py-5 sm:p-6 bg-white bg-opacity-50 shadow-lg rounded-3xl border border-gray-300">
                <slot name="content" />
            </div>
        </div>
    </div>
</template>
