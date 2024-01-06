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

        <ul role="list" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <li class="relative">
                <Link :href="route('television.show', 'K-VISION dan GOL')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/K-VISION%20dan%20GOL.svg" alt="" class="w-20">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">K-Vision</h3>
                        </div>
                        <p class="text-sm text-gray-500">Beli paket K-Vision</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('television.show', 'Nex Parabola')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/Nex%20Parabola.svg" alt="" class="w-20">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Nex Parabola</h3>
                        </div>
                        <p class="text-sm text-gray-500">Beli paket Nex Parabola</p>
                    </div>
                </div>
            </li>
            <li class="relative">
                <Link :href="route('television.show', 'Transvision')" class="absolute inset-0" />
                <div class="flex w-full items-center justify-between space-x-6 p-6">
                    <img src="/img/vendor/Transvision.svg" alt="" class="w-20">
                    <div class="flex-1">
                        <div class="flex items-center space-x-3">
                            <h3 class="text-sm font-medium text-gray-900">Transvision</h3>
                        </div>
                        <p class="text-sm text-gray-500">Beli paket Transvision</p>
                    </div>
                </div>
            </li>
        </ul>

<!--        <ul role="list" class="grid grid-cols-2 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-x-6 lg:grid-cols-6 xl:gap-x-8">-->
<!--            <li class="relative">-->
<!--                <div class="group w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg flex items-center">-->
<!--                    <img src="/img/vendor/K-VISION%20dan%20GOL.svg" alt=""-->
<!--                         class="h-auto w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('television.show', 'K-VISION dan GOL')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--&lt;!&ndash;                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">K-Vision</p>&ndash;&gt;-->
<!--            </li>-->
<!--            <li class="relative">-->
<!--                <div class="group w-full aspect-video border border-gray-300 rounded-3xl overflow-hidden shadow-lg flex items-center">-->
<!--                    <img src="/img/vendor/Nex%20Parabola.svg" alt=""-->
<!--                         class="h-auto w-full pointer-events-none group-hover:opacity-75 p-3">-->
<!--                    <Link :href="route('television.show', 'Nex Parabola')" class="absolute inset-0 focus:outline-none"></Link>-->
<!--                </div>-->
<!--                &lt;!&ndash;                <p class="mt-1 block text-sm text-gray-900 truncate pointer-events-none">K-Vision</p>&ndash;&gt;-->
<!--            </li>-->
<!--        </ul>-->

        <!--        <MobileMenu />-->
    </AppLayout>
</template>
