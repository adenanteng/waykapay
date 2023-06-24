<script setup>
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    href: String
});
</script>

<template>
    <Link :href="props.href">
        <i class="fa-regular fa-arrow-left text-lg text-white nightwind-prevent p-2" />
    </Link>
</template>
