<script setup>
import {computed} from "vue";

const classes = computed(() => {
    return '-ml-px relative disabled:opacity-50 inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500';
});

</script>

<template>
    <button type="button" :class="classes">
        <slot />
    </button>
</template>
