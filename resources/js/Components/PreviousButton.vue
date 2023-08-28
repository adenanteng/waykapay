<script setup>
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    href: String
});
</script>

<template>
    <Link href="" onclick="history.back();return false;" preserve-scroll>
        <i class="fa-regular fa-arrow-left text-lg text-gray-900 p-2" />
    </Link>
</template>
