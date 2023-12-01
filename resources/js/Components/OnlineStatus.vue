<script setup>
import { computed } from 'vue'
import { useOnline } from '@vueuse/core'

const online = useOnline()

const clazz = computed(() => online.value ? 'text-white' : 'text-white')
const text = computed(() => online.value ? 'Online' : 'Koneksi terputus')
</script>

<template>
    <div class="bg-red-600" v-if="!online">
        <div class=" py-2 px-4 lg:px-8 max-w-7xl mx-auto">
            <p class="font-medium" :class="clazz">
                <i class="fa-regular fa-wifi-slash mr-2" />{{ text }}
            </p>
        </div>
    </div>

</template>
