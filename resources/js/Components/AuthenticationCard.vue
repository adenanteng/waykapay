<script setup>
import {computed, onMounted, ref, watch} from "vue";
import { usePage } from '@inertiajs/vue3';
import Banner from "./Banner.vue";
import {useMouse, useWindowSize} from "@vueuse/core";
import BackgroundParticle from "./BackgroundParticle.vue";

const show = ref(true);
const style = computed(() => usePage().props.jetstream.flash?.bannerStyle || 'success');
const message = computed(() => usePage().props.jetstream.flash?.banner || '');

watch(message, async () => {
    show.value = true;
});

defineProps({
    darkMode: Boolean,
});

const darkMode = ref(false)
if (typeof window !== 'undefined') {
    darkMode.value = JSON.parse(localStorage.getItem('darkmode')) ?? false

    watch(darkMode, (newDarkMode) => {
        console.log(`darkmode is ${newDarkMode}`)
        localStorage.setItem('darkmode', JSON.stringify(newDarkMode))
    })
}

</script>

<template>

    <div class="relative transition duration-1000" :class="darkMode ? 'nightwind dark' : 'nightwind' ">

        <div class="min-h-screen flex bg-white relative isolate" >

            <div class="-z-10">
                <BackgroundParticle />
            </div>

            <div class="min-h-screen flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                <div class="mx-auto w-full max-w-sm lg:w-96 py-10">
                    <div>
                        <button @click="darkMode = ! darkMode">
                            <slot name="logo" />
                        </button>
                        <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Selamat Datang <br> di Waykapay</h2>
                        <p class="mt-2 text-sm text-gray-600"><slot name="title"/></p>
                    </div>

                    <div class="mt-8">
                        <!--                    <div>-->
                        <!--                        <div>-->
                        <!--                            <div class="mt-1 grid grid-cols-3 gap-3">-->
                        <!--                                <div>-->
                        <!--                                    <a href="#" class="w-full inline-flex justify-center py-1 px-4 border border-gray-300 rounded-3xl shadow-sm font-medium text-gray-500 hover:bg-gray-50">-->
                        <!--                                        <i class="fa-brands fa-google-plus-g text-2xl"></i>-->
                        <!--                                    </a>-->
                        <!--                                </div>-->
                        <!--                                <div>-->
                        <!--                                    <a href="#" class="w-full inline-flex justify-center py-1 px-4 border border-gray-300 rounded-3xl shadow-sm font-medium text-gray-500 hover:bg-gray-50">-->
                        <!--                                        <i class="fa-brands fa-facebook text-2xl"></i>-->
                        <!--                                    </a>-->
                        <!--                                </div>-->
                        <!--                                <div>-->
                        <!--                                    <a href="#" class="w-full inline-flex justify-center py-1 px-4 border border-gray-300 rounded-3xl shadow-sm font-medium text-gray-500 hover:bg-gray-50">-->
                        <!--                                        <i class="fa-brands fa-github text-2xl"></i>-->
                        <!--                                    </a>-->
                        <!--                                </div>-->
                        <!--                            </div>-->
                        <!--                        </div>-->

                        <!--                        <div class="mt-6 relative">-->
                        <!--                            <div class="absolute inset-0 flex items-center" aria-hidden="true">-->
                        <!--                                <div class="w-full border-t border-gray-300" />-->
                        <!--                            </div>-->
                        <!--                            <div class="relative flex justify-center text-sm">-->
                        <!--                                <span class="px-2 backdrop-blur text-gray-500"> atau </span>-->
                        <!--                            </div>-->
                        <!--                        </div>-->
                        <!--                    </div>-->

                        <div class="mb-5">
                            <div v-if="show && message" class="bg-red-700 rounded-3xl">
                                <div class="max-w-screen-xl mx-auto py-3 px-3 ">
                                    <div class="flex items-center justify-between flex-wrap">
                                        <div class="w-0 flex-1 flex items-center min-w-0">
                                            <span class="flex bg-red-600 p-2 rounded-3xl" >
                                              <svg
                                                  class="h-5 w-5 text-white"
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  fill="none"
                                                  viewBox="0 0 24 24"
                                                  stroke="currentColor"
                                              >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                                />
                                              </svg>
                                            </span>

                                            <p class="ml-3 font-medium text-sm text-white">
                                                {{ message }}
                                            </p>
                                        </div>

                                        <div class="shrink-0 sm:ml-3 p-2">
                                            <button
                                                type="button"
                                                class="-mr-1 flex p-2 hover:bg-red-600 focus:bg-red-600 rounded-3xl focus:outline-none sm:-mr-2 transition"
                                                aria-label="Dismiss"
                                                @click.prevent="show = false"
                                            >
                                                <svg
                                                    class="h-5 w-5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <slot />
                    </div>
                </div>
            </div>
            <div class="hidden lg:block relative w-0 flex-1 ">
                <img class="absolute inset-0 h-full w-full object-cover" src="/img/minion.jpg" alt="" />
            </div>
        </div>
    </div>
</template>
