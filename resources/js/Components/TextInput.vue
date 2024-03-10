<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String | Number,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <input
        ref="input"
        class="bg-white text-black border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >

<!--    <div class="relative mt-1 rounded-md shadow-sm">-->
<!--        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">-->
<!--            <i class="fa-regular fa-magnifying-glass" />-->
<!--        </div>-->
<!--        <input type="email" name="email" id="email" class="block w-full rounded-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="you@example.com" />-->
<!--    </div>-->
</template>
