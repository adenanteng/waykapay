<script setup>
import {computed} from "vue";
import { Link } from '@inertiajs/vue3';

defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    as: String,
    href: String,
});

const classes = computed(() => {
    return 'nightwind-prevent inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-full font-semibold text-base text-white hover:bg-primary-700 active:bg-primary-900 focus:outline-none focus:border-primary-900 focus:ring focus:ring-primary-300 disabled:opacity-25 transition';
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
