<script setup>
import { Link } from '@inertiajs/vue3';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'


const props = defineProps({
    title: String,
    data: Object,
});
</script>

<template>
    <Popover v-slot="{ open }" class="relative">
        <PopoverButton
            :class="open ? '' : ''"
            class="group inline-flex items-center"
        >
            <span>{{ props.title }}</span>

            <i class="ml-2 fa-regular fa-angle-down" />
        </PopoverButton>

        <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
        >
            <PopoverPanel
                class="absolute left-20 z-10 mt-5 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
            >
                <div
                    class="overflow-hidden rounded-3xl shadow-lg border border-gray-300"
                >
                    <div class="relative grid gap-8 bg-white bg-opacity-50 backdrop-blur p-7 lg:grid-cols-2">
                        <Link
                            v-for="item in props.data"
                            :key="item.name"
                            :href="item.href"
                            class="-m-3 flex items-center rounded-3xl p-2 transition duration-150 ease-in-out hover:bg-gray-300 hover:bg-opacity-50"
                        >
                            <i class="fa-regular text-primary-700 dark:text-white text-2xl ml-2" :class="item.icon" />
                            <div class="ml-4 text-left">
                                <p class="text-sm font-medium text-gray-900">
                                    {{ item.name }}
                                </p>
                                <p class="text-sm text-gray-500">
                                    {{ item.desc }}
                                </p>
                            </div>
                        </Link>
                    </div>
                    <div class="bg-gray-50 p-4">
                        <a
                            href="#"
                            class="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                        >
                            <span class="flex items-center">
                                <span class="text-sm font-medium text-gray-900">
                                    Documentation
                                </span>
                            </span>
                            <span class="block text-sm text-gray-500">
                                Start integrating products and tools
                            </span>
                        </a>
                    </div>
                </div>
            </PopoverPanel>
        </transition>
    </Popover>
</template>
