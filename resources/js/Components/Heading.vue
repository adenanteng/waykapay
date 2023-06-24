<script setup>

</script>

<template>
    <div class="px-4 mt-20 mb-10 lg:flex lg:items-center lg:justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-xl font-bold text-gray-900 sm:text-2xl capitalize">
            <slot name="header" />
        </h2>
        <div v-if="$slots.action" class="mt-8 flex lg:mt-0 lg:flex-shrink-0 space-x-2">
            <slot name="action" />
        </div>
    </div>
</template>
