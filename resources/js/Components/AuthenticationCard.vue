<script setup>
import {ref, watch} from "vue";

defineProps({
    darkMode: Boolean,
});

const darkMode = ref(JSON.parse(localStorage.getItem('darkmode')) ?? false)

watch(darkMode, (newDarkMode) => {
    console.log(`darkmode is ${newDarkMode}`)
    localStorage.setItem('darkmode', JSON.stringify(newDarkMode))
})
</script>

<template>

    <div class="" :class="darkMode ? 'nightwind dark' : 'nightwind' ">
        <div class="min-h-screen flex bg-white bg-glass bg-fixed" >
        <div class="min-h-screen mb-80 lg:mb-0 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96 py-10">
                <div>
                    <button @click="darkMode = ! darkMode">
                        <slot name="logo" />
                    </button>
                    <h2 class="mt-6 text-3xl font-extrabold text-gray-900">Selamat Datang</h2>
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
