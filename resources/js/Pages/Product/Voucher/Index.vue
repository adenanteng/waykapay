<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PreviousButton from "../../../Components/PreviousButton.vue";

const props = defineProps({
    // user: Object,
});

const form = useForm({
    name: null,
    email: null,
});

</script>

<template>
    <AppLayout title="Voucher"
               name="Voucher"
               desc="Summertime sadness"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">
            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/vendor/SPOTIFY.svg" alt=""
                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('emoney.show', 'SPOTIFY')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
            </li>
            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/vendor/e-Meterai.svg" alt=""
                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('emoney.show', 'e-Meterai')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
            </li>
            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/vendor/TIX%20ID.svg" alt=""
                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('emoney.show', 'TIX ID')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
            </li>
            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/vendor/M-Tix.svg" alt=""
                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('emoney.show', 'M-Tix')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
            </li>

        </ul>

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
