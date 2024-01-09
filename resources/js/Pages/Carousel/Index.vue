<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import DarkmodeToggle from "@/Components/DarkmodeToggle.vue";
import DangerButton from "@/Components/DangerButton.vue";
import PrimaryButton from "../../Components/PrimaryButton.vue";

const props = defineProps({
    carousel: Object,
});

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <AppLayout title="Carousel"
               name="Carousel"
               desc="Carousel slider"
    >

        <div class="flex justify-between">
            <div class="">
<!--                <form id="search">-->
<!--                    <TextInput-->
<!--                        name="query"-->
<!--                        v-model="searchQuery"-->
<!--                        type="text"-->
<!--                        class="block w-full lg:w-96 mb-5 shadow"-->
<!--                        placeholder="Cari disini"-->
<!--                    />-->
<!--                </form>-->
            </div>

            <div class="">
                <PrimaryButton as="a" :href="route('carousel.create')" >Tambah</PrimaryButton>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">

            <template v-for="data in props.carousel" >
                <div class="relative items-center bg-white bg-opacity-20 backdrop-blur-sm border border-gray-300 shadow-lg rounded-3xl">
                        <img class="h-auto w-full aspect-video object-cover rounded-t-3xl" :src="data.media[0].original_url" alt="" loading="lazy">

                        <Link :href="route('carousel.edit', data)" class="focus:outline-none text-left">
                            <span class="absolute inset-0" aria-hidden="true"></span>
                            <p class="text-sm font-medium text-gray-900 px-3 py-2">{{ data.href }}</p>
                        </Link>

                </div>
            </template>
        </div>

<!--        <MobileMenu />-->
    </AppLayout>
</template>
