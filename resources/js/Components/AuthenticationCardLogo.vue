<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
<!--    <Link :href="route('welcome')">-->
    <template v-if="$page.props.appSetting != null" >
        <img :src="$page.props.appSetting.media[0].original_url" class="h-20 w-auto" />
    </template>
<!--    </Link>-->
</template>
