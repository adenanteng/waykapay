<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import nightwind from "nightwind/helper";

defineProps({
    darkMode: Boolean,
});

</script>

<template>
<!--    <button >-->
        <Switch :class="[darkMode ? 'bg-primary-600' : 'bg-gray-200', 'block inline-flex items-center h-10 w-16 rounded-full cursor-pointer transition-colors ease-in-out duration-200 hover:bg-primary-700 active:bg-primary-900 focus:outline-none focus:border-primary-900 focus:ring focus:ring-primary-300']">
            <span :class="[darkMode ? 'translate-x-6' : 'translate-x-0', 'flex justify-center items-center pointer-events-none inline-block h-8 w-8 m-1 rounded-full bg-white shadow transform transition ease-in-out duration-500']">
                <i class="fa-light text-black" :class="darkMode ? 'fa-moon' : 'fa-sun-bright' " />
            </span>
        </Switch>
<!--    </button>-->
</template>
