<script setup>
import {Link} from "@inertiajs/vue3";

const props = defineProps({
    pagination: Object
})
</script>

<template>
    <div class="px-4 py-0 flex items-center justify-between sm:px-6">
        <div class="grid w-full sm:hidden">
            <div class="mb-3 text-center">
                <p class="text-sm text-gray-700">
                    Menampilkan
                    {{ ' ' }}
                    <span class="font-medium">{{ props.pagination.from }}</span>
                    {{ ' ' }}
                    sampai
                    {{ ' ' }}
                    <span class="font-medium">{{ props.pagination.to }}</span>
                    {{ ' ' }}
                    dari
                    {{ ' ' }}
                    <span class="font-medium">{{ props.pagination.total }}</span>
                    {{ ' ' }}
                    hasil
                </p>
            </div>

            <div class="flex justify-between">
                <Link replace :href="props.pagination.prev_page_url ?? ''"
                      class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"> Previous </Link>

                <slot name="select" />

                <Link replace :href="props.pagination.next_page_url ?? ''"
                      class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"> Next </Link>
            </div>
        </div>

        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Menampilkan
                    {{ ' ' }}
                    <span class="font-medium">{{ props.pagination.from }}</span>
                    {{ ' ' }}
                    sampai
                    {{ ' ' }}
                    <span class="font-medium">{{ props.pagination.to }}</span>
                    {{ ' ' }}
                    dari
                    {{ ' ' }}
                    <span class="font-medium">{{ props.pagination.total }}</span>
                    {{ ' ' }}
                    hasil
                </p>
            </div>
            <div>
                <nav class="relative z-0 inline-flex -space-x-px" aria-label="Pagination">
                    <div class="mr-5">
                        <slot name="select" />
                    </div>
                    <template v-for="link in props.pagination.links">
                        <Link
                            replace
                            :href="link.url ?? '' "
                            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium rounded-full shadow-lg"
                            :class="link.active ? 'z-10 bg-primary-50 border-primary-500 text-primary-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 ' "
                        >
                            <span v-html="link.label"></span>
                        </Link>
                    </template>
                </nav>
            </div>
        </div>
    </div>
</template>
