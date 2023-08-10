<script setup>
import { ref, computed } from 'vue'
import {Link} from '@inertiajs/vue3';

const props = defineProps({
    title: Array,
    data: Array,
    columns: Array,
    filterKey: String,
    routes: String,
    paginate: Object,
    slug: {
        type: Boolean,
        default: false
    },
    view: {
        type: Boolean,
        default: false
    },
    edit: {
        type:Boolean,
        default: false
    }
})

const sortKey = ref('')
const sortOrders = ref(
    props.columns.reduce((o, key) => ((o[key] = 1), o), {})
)

const filteredData = computed(() => {
    let { data, filterKey } = props
    if (filterKey) {
        filterKey = filterKey.toLowerCase()
        data = data.filter((row) => {
            return Object.keys(row).some((key) => {
                return String(row[key]).toLowerCase().indexOf(filterKey) > -1
            })
        })
    }
    const key = sortKey.value
    if (key) {
        const order = sortOrders.value[key]
        data = data.slice().sort((a, b) => {
            a = a[key]
            b = b[key]
            return (a === b ? 0 : a > b ? 1 : -1) * order
        })
    }
    return data
})

function sortBy(key) {
    sortKey.value = key
    sortOrders.value[key] *= -1
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
    <div class="bg-white bg-opacity-50 -mx-4 shadow-lg border border-gray-300 ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 rounded-3xl overflow-auto">
        <table v-if="filteredData.length" class="table-auto min-w-full divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl">
            <thead>
            <tr >
                <th v-for="(key, index) in columns"
                    @click="sortBy(key)"
                    :class="{ active: sortKey == key }"
                    class="py-3.5 pl-4 text-left text-sm font-semibold text-gray-900"
                >
                    <div class="flex items-center">
                        {{ capitalize(title[index]) }}
                        <span class="fa-regular ml-1 text-xs"
                              :class="sortOrders[key] > 0 ? 'fa-angle-down' : 'fa-angle-up'" />
                    </div>

                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="entry in filteredData">
                <td v-for="key in columns" class="px-3 py-4 text-sm text-gray-700">
                    {{ entry[key] ?? ' - ' }}
                </td>

                <td v-if="routes" class="pl-3 pr-4 text-right text-sm font-medium">
                    <template v-if="slug">
                        <Link v-if="view"
                              :href="route(routes+'.show', entry.slug)"
                              class="text-primary-600 hover:text-primary-900">
                            Lihat
                        </Link>
                        <Link v-if="edit"
                              :href="route(routes+'.edit', entry.slug)"
                              class="text-primary-600 hover:text-primary-900">
                            Ubah
                        </Link>
                    </template>

                    <template v-else>
                        <Link v-if="view"
                              :href="route(routes+'.show', entry)"
                              class="text-primary-600 hover:text-primary-900">
                            Lihat
                        </Link>
                        <Link v-if="edit"
                              :href="route(routes+'.edit', entry)"
                              class="text-primary-600 hover:text-primary-900">
                            Ubah
                        </Link>
                    </template>

<!--                    <div class="relative">-->
<!--                        <Dropdown align="right" width="48">-->
<!--                            <template #trigger>-->
<!--                                <button class="text-primary-600 hover:text-primary-900">-->
<!--                                    Aksi-->
<!--                                </button>-->
<!--                            </template>-->

<!--                            <template #content>-->
<!--                                &lt;!&ndash; Account Management &ndash;&gt;-->
<!--                                <template v-if="slug">-->
<!--                                    <DropdownLink v-if="view" :href="route(routes+'.show', entry.slug)">-->
<!--                                        Lihat-->
<!--                                    </DropdownLink>-->

<!--                                    <DropdownLink v-if="edit" :href="route(routes+'.edit', entry.slug)">-->
<!--                                        Ubah-->
<!--                                    </DropdownLink>-->
<!--                                </template>-->

<!--                                <template v-else>-->
<!--                                    <DropdownLink v-if="view" :href="route(routes+'.show', entry)">-->
<!--                                        Lihat-->
<!--                                    </DropdownLink>-->

<!--                                    <DropdownLink v-if="edit" :href="route(routes+'.edit', entry)">-->
<!--                                        Ubah-->
<!--                                    </DropdownLink>-->
<!--                                </template>-->

<!--                            </template>-->
<!--                        </Dropdown>-->
<!--                    </div>-->
                </td>
            </tr>
            </tbody>
        </table>
        <p v-else class="p-2 text-gray-900">Tidak ada data ditemukan.</p>
    </div>

    <div v-if="props.paginate" class="px-4 py-0 flex items-center justify-between sm:px-6">
        <div class="flex-1 flex justify-between sm:hidden">
            <Link :href="props.paginate.prev_page_url ?? ''"
                  class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"> Previous </Link>
            <Link :href="props.paginate.next_page_url ?? ''"
                  class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-full shadow-lg text-gray-700 bg-white hover:bg-gray-50"> Next </Link>
        </div>
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
                <p class="text-sm text-gray-700">
                    Menampilkan
                    {{ ' ' }}
                    <span class="font-medium">{{ props.paginate.from }}</span>
                    {{ ' ' }}
                    sampai
                    {{ ' ' }}
                    <span class="font-medium">{{ props.paginate.to }}</span>
                    {{ ' ' }}
                    dari
                    {{ ' ' }}
                    <span class="font-medium">{{ props.paginate.total }}</span>
                    {{ ' ' }}
                    hasil
                </p>
            </div>
            <div>
                <nav class="relative z-0 inline-flex -space-x-px" aria-label="Pagination">
                    <template v-for="link in props.paginate.links">
                        <Link
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
