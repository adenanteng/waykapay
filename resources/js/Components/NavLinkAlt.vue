<script setup>
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    href: String,
    active: Boolean,
    icon: String,
    flyout: {
        type: Boolean,
        default: false
    }
});

// const classes = computed(() => {
//     return props.active
//         ? 'inline-flex items-center px-1 pt-1 border-b-2 border-primary-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-primary-700 transition'
//         : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition';
// });

const classes = computed(() => {
    return props.active
        ? ' text-primary-700 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10'
        : ' text-gray-900 text-sm font-medium rounded-3xl bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10';
});
</script>

<template>
    <button v-if="flyout" :class="classes">
        <div class="flex items-center gap-2">
            <i class="fa-duotone" :class="icon" /> <slot />
        </div>
    </button>

    <Link v-else :href="href" :class="classes">
        <div class="flex items-center gap-2">
            <i class="fa-duotone" :class="icon" /> <slot />
        </div>
    </Link>
</template>
