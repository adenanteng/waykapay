<script setup>
import {computed, ref, useSlots, watch} from 'vue';
// import {Inertia} from '@inertiajs/inertia';
import {router, Head, Link} from '@inertiajs/vue3';

const props = defineProps({
    title: String,
    darkMode: Boolean,
    greeting: String,
    name: String,
    desc: String,
    avatar: String
});

</script>

<template>
    <div class="transition duration-1000" >
        <template v-if="$page.props.appSetting">
            <Head :title="title + ' - ' + $page.props.appSetting.name"/>
        </template>

        <template v-else>
            <Head :title="title"/>
        </template>

        <div class="flex justify-center items-center py-5 max-w-sm mx-auto">
            <slot/>
        </div>
    </div>

</template>
