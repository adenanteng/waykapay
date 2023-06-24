<script setup>
import { Link } from '@inertiajs/vue3';

defineProps({
    href: String,
    as: String,
});
</script>

<template>
    <div>
        <button v-if="as === 'button'" type="submit" class="rounded-3xl block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-300 hover:bg-opacity-50 focus:outline-none transition">
            <slot />
        </button>

        <a v-else-if="as === 'a'" :href="href" class="block px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-300 hover:bg-opacity-50 focus:outline-none transition">
            <slot />
        </a>

        <Link v-else :href="href" class="rounded-3xl block px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-300 hover:bg-opacity-50 focus:outline-none transition">
            <slot />
        </Link>
    </div>
</template>
