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
    <AppLayout title="Voucher Games"
               name="Voucher Games"
               desc="Summertime sadness"
    >
        <template #previous>
            <PreviousButton :href="route('dashboard')"/>
        </template>

        <ul role="list" class="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">

            <li class="relative">
                <div class="group block w-full aspect-video rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/games/pubg.jpg" alt=""
                         class="h-full w-full object-cover pointer-events-none group-hover:opacity-75">
                    <Link :href="route('product.gamePubgm')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
                <p class="mt-1 block text-lg font-medium text-gray-900 truncate pointer-events-none">PUBG Mobile</p>
            </li>

            <li class="relative">
                <div class="group block w-full aspect-video rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/games/mobile-legends.jpg" alt=""
                         class="h-full w-full object-cover pointer-events-none group-hover:opacity-75">
                    <Link :href="route('dashboard')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
                <p class="mt-1 block text-lg font-medium text-gray-900 truncate pointer-events-none">Mobile Legends</p>
            </li>

            <li class="relative">
                <div class="group block w-full aspect-video rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/games/free-fire.jpg" alt=""
                         class="h-full w-full object-cover pointer-events-none group-hover:opacity-75">
                    <Link :href="route('dashboard')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
                <p class="mt-1 block text-lg font-medium text-gray-900 truncate pointer-events-none">Free Fire</p>
            </li>

        </ul>

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
