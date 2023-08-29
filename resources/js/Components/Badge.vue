<script setup>

const props = defineProps({
    name: String | Number,
    class: {
        type: String,
        default: "bg-primary-100 text-primary-800"
    },
    dot: {
        type: Boolean,
        default: false
    }
});

</script>

<template>
    <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium" :class="props.class" >
        <svg v-if="dot" class="-ml-1 mr-1.5 h-2 w-2 opacity-50" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3"/>
        </svg>
        {{ name }}
    </span>
</template>
