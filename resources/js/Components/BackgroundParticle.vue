<script setup>
import {useMouse, useWindowSize} from "@vueuse/core";
import {computed} from "vue";

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const dx = computed(() => Math.abs(x.value - width.value / 2))
const dy = computed(() => Math.abs(y.value - height.value / 2))
const distance = computed(() =>
    Math.sqrt(dx.value * dx.value + dy.value * dy.value)
)

const size = computed(() => Math.max(160 - distance.value / 3, 100))
const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.7), 1))

</script>

<template>
    <!--            <div class="fixed inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">-->
    <!--                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 dark:from-primary-700 to-primary-400 dark:to-primary-900 opacity-75 sm:left-[calc(50%-30rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>-->
    <!--            </div>-->

    <!--            <div class="fixed inset-0 h-56 sm:w-56 bg-yellow-400 -z-10 rounded-full -translate-x-1/2 mt-64 opacity-75 pointer-events-none blur-2xl"/>-->

    <div class="absolute inset-0 overflow-hidden">
        <div class="absolute bg-primary-400 -z-10 rounded-full overflow-hidden -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-2xl"
            :style="{
                        opacity,
                        left: `${x}px`,
                        top: `${y}px`,
                        width: `${size}px`,
                        height: `${size}px`
                      }"
        />

        <div class="fixed inset-0 -z-10 transform-gpu" aria-hidden="true">
            <svg viewBox="0 0 1024 1024" class="absolute -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="#0284c7" fill-opacity="0.7" />
                <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stop-color="#7775D6" />
                        <stop offset="1" stop-color="#E935C1" />
                    </radialGradient>
                </defs>
            </svg>
        </div>

<!--        <div class="fixed inset-x-0 -bottom-32 -z-10 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">-->
<!--            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 dark:from-primary-500 dark:to-primary-700 opacity-75 sm:left-[calc(50%+36rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>-->
<!--        </div>-->
    </div>
</template>
