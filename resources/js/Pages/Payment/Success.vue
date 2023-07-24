<script setup>
import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import moment from "moment";
import PreviousButton from "@/Components/PreviousButton.vue";
import BlankLayout from "@/Layouts/BlankLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";

const props = defineProps({
    users: Object,
    history: Object
})

</script>

<template>
    <BlankLayout title="Sukses" >

        <div class="pt-16 pb-12">
            <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
                <div class="flex flex-shrink-0 justify-center">
                    <ApplicationLogo />
                </div>
                <div class="py-16">
                    <div class="text-center">
                        <p class="text-base font-semibold text-indigo-600">Lorem ipsum</p>
                        <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Transaksi Berhasil</h1>
                        <p class="mt-2 text-base text-gray-500">Lorem ipsum dolor sit amet.</p>
                        <div class="mt-6">
                            <PrimaryButton as="a" :href="route('dashboard')" >
                                Kembali ke Beranda
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="mx-auto w-full max-w-7xl flex-shrink-0 px-6 lg:px-8">
                <nav class="flex justify-center space-x-4">
                    <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Contact Support</a>
                    <span class="inline-block border-l border-gray-300" aria-hidden="true" />
                    <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Status</a>
                    <span class="inline-block border-l border-gray-300" aria-hidden="true" />
                    <a href="#" class="text-sm font-medium text-gray-500 hover:text-gray-600">Twitter</a>
                </nav>
            </footer>
        </div>

<!--        <MobileMenu/>-->
    </BlankLayout>
</template>
