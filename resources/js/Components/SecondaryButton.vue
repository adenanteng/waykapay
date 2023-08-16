<script setup>
import {computed} from "vue";
import {Link} from "@inertiajs/vue3";

defineProps({
    type: {
        type: String,
        default: 'button',
    },
    as: String,
    href: String,
});

const classes = computed(() => {
    return 'inline-flex items-center px-4 py-2 border border-gray-300 rounded-full font-semibold text-base bg-white text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:text-gray-800 disabled:opacity-25 transition';
});
</script>

<template>

    <Link v-if="as === 'a'" :href="href" :class="classes" >
        <slot />
    </Link>

    <button v-else :type="type" :class="classes" >
        <slot />
    </button>
</template>
