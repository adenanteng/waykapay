<script setup>
defineProps({
    title: String,
    icon: String,
    active: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <button type="button"
            class="relative block w-full p-12 text-center border-2 border-gray-400 border-dashed focus:bg-primary-100 hover:bg-primary-100 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm"
            :class="active ? 'bg-primary-100' : '' ">
        <i class="fa-duotone text-primary-500 text-5xl" :class="icon"></i>
        <span class="mt-2 block text-sm font-medium text-gray-900">{{ title }}</span>
    </button>
</template>
