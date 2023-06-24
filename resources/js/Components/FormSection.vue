<script setup>
import { computed, useSlots } from 'vue';
import SectionTitle from './SectionTitle.vue';

defineEmits(['submitted']);

const hasActions = computed(() => !! useSlots().actions);
const hasTitle = computed(() => !! useSlots().title)
</script>

<template>
    <div class="mb-5 sm:mt-0 backdrop-blur-2xl" :class="hasTitle ? 'md:grid md:grid-cols-4 md:gap-6' : '' ">
        <SectionTitle v-if="hasTitle" class="pl-3">
            <template #title>
                <slot name="title" />
            </template>
            <template #description>
                <slot name="description" />
            </template>
        </SectionTitle>

        <div class="mt-5 md:mt-0 md:col-span-3">

            <form @submit.prevent="$emit('submitted')">
                <div
                    class="px-4 py-5 bg-white bg-opacity-50 sm:p-6 shadow-lg border border-gray-300"
                    :class="hasActions ? 'rounded-tl-3xl rounded-tr-3xl' : 'rounded-3xl'"
                >
                    <div class="grid grid-cols-6 gap-6">
                        <slot name="form" />
                    </div>
                </div>

                <div v-if="hasActions" class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow-lg rounded-bl-3xl rounded-br-3xl border-b border-x border-gray-300">
                    <slot name="actions" />
                </div>
            </form>
        </div>
    </div>
</template>
