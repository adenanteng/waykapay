<script setup>

</script>

<template>
    <div class="bg-white bg-opacity-50 shadow-lg border border-gray-300 overflow-hidden rounded-3xl">
        <div class="px-4 py-5 sm:px-6 flex justify-between">
            <div class="">
                <h3 class="text-lg leading-6 font-medium text-gray-900"><slot name="title" /></h3>
                <p class="mt-1 max-w-2xl text-sm text-gray-500"><slot name="description" /></p>
            </div>
            <div class="">
                <slot name="action" />
            </div>
        </div>
        <div class="border-t border-gray-300 px-4 py-5 sm:px-6">
            <slot name="content" />
        </div>
    </div>
</template>
