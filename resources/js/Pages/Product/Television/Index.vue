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
    <AppLayout title="Televisi"
               name="Televisi"
               desc="Summertime sadness"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">

            <li class="relative">
                <div class="group block w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg flex items-center">
                    <img src="/img/vendor/K-VISION.png" alt=""
                         class="h-auto w-full pointer-events-none group-hover:opacity-75 p-3">
                    <Link :href="route('television.kvision')" class="absolute inset-0 focus:outline-none"></Link>
                </div>
<!--                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">K-Vision</p>-->
            </li>

        </ul>

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
