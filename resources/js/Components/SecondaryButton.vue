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
    return 'inline-flex items-center px-4 py-2 rounded-full font-semibold text-base text-gray-900 dark:text-white hover:text-gray-500 active:text-gray-800 disabled:opacity-25 transition';
});
</script>

<template>

    <Link v-if="as === 'a'" :href="href" :class="classes" >
        <slot />
<!--        <i class="fa-solid fa-arrow-right text-xs ml-1" />-->
    </Link>

    <button v-else :type="type" :class="classes" >
        <slot />
<!--        <i class="fa-solid fa-arrow-right text-xs ml-1" />-->
    </button>
</template>
