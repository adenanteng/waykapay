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
        <Head :title="title + ' - ' + $page.props.appSetting?.name"/>

        <div class="flex justify-center items-center max-w-sm mx-auto">
            <slot/>
        </div>
    </div>

</template>
