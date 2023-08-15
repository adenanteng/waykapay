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
    <AppLayout title="E-Money"
               name="E-Money"
               desc="Summertime sadness"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">

            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/vendor/DANA.svg" alt=""
                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('emoney.dana')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">Dana</p>-->
            </li>

            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/img/vendor/GOPAY.svg" alt=""
                         class="h-full w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('emoney.gopay')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
<!--                <p class="mt-1 block text-gray-900 truncate pointer-events-none">Gopay</p>-->
            </li>

        </ul>

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
