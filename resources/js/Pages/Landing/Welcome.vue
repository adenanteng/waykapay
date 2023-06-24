<script setup>
import LandingLayout from "@/Layouts/LandingLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "../../Components/SecondaryButton.vue";

// const props = defineProps({
//     trip: Object,
// });

function formatPrice(value) {
    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

</script>

<template>
    <LandingLayout title="Beranda" desc="Lorem ipsum">

        <main class="mx-auto max-w-7xl px-4 h-screen flex justify-center items-center">
            <div class="text-center">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span class="">Wayka</span>
                    <span class="text-primary-600">pay</span>
                </h1>
                <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 gap-5">
                    <PrimaryButton as="a" :href="route('dashboard')">
                        Dashboard
                    </PrimaryButton>

<!--                    <SecondaryButton>-->
<!--                        Live Demo-->
<!--                    </SecondaryButton>-->
                </div>
            </div>
        </main>

<!--        <div class="">-->
<!--            <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">-->
<!--                <div class="lg:grid lg:grid-cols-2 lg:gap-8">-->
<!--                    <h2 class="max-w-md mx-auto text-3xl font-extrabold text-indigo-900 text-center lg:max-w-xl lg:text-left">The world's most innovative companies use Workflow</h2>-->
<!--                    <div class="flow-root self-center mt-8 lg:mt-0">-->
<!--                        <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">-->
<!--                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">-->
<!--                                <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg" alt="Workcation" />-->
<!--                            </div>-->
<!--                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">-->
<!--                                <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-900.svg" alt="Tuple" />-->
<!--                            </div>-->
<!--                            <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">-->
<!--                                <img class="h-12" src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg" alt="Level" />-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

    </LandingLayout>

</template>
