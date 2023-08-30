<script setup>


</script>

<template>
<!--    <div class="relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3">-->
<!--        &lt;!&ndash;                    <div class="flex-shrink-0">&ndash;&gt;-->
<!--        &lt;!&ndash;                        <img class="h-10 w-10" src="/img/vendor/icon/DANA.svg" alt="">&ndash;&gt;-->
<!--        &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--        <div class="flex-1 min-w-0">-->
<!--            <div class="text-center">-->
<!--                <p class="text-sm font-medium text-gray-500">Tunggu sebentar</p>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->

    <div v-for="loader in 2" class="animate-pulse relative rounded-3xl border border-gray-300 bg-white bg-opacity-50 backdrop-blur-2xl px-6 py-5 shadow-lg flex items-center space-x-3">
        <div class="flex-shrink-0">
            <div class="h-10 w-10 rounded-full bg-gray-300" ></div>
        </div>
        <div class="flex-1 min-w-0">
            <div class="space-y-1">
                <div class="text-gray-300 bg-gray-300 w-full rounded-3xl">a</div>
                <div class="text-gray-300 bg-gray-300 w-1/2 rounded-3xl">a</div>
            </div>
        </div>
    </div>

</template>
