<!--<script setup>-->
<!--import {-->
<!--    Listbox,-->
<!--    ListboxButton,-->
<!--    ListboxOptions,-->
<!--    ListboxOption,-->
<!--} from '@headlessui/vue'-->

<!--defineProps({-->
<!--    modelValue: String | Number,-->
<!--    option: Object,-->
<!--});-->


<!--defineEmits(['update:modelValue']);-->

<!--</script>-->

<!--<template>-->

<!--    <Listbox-->
<!--        :value="modelValue"-->
<!--        @input="$emit('update:modelValue', $event.target.value)"-->
<!--        :horizontal="true"-->
<!--    >-->
<!--        <div class="relative mt-1 block">-->
<!--            <ListboxButton-->
<!--                class="bg-white relative w-full flex justify-between cursor-default py-2 pl-3 pr-4 text-left border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm"-->
<!--            >-->
<!--                <span class="block truncate capitalize text-gray-900" >-->
<!--                    {{ option[modelValue] }}-->
<!--                </span>-->
<!--                &lt;!&ndash;                <span class="block truncate" v-else>&ndash;&gt;-->

<!--                &lt;!&ndash;                </span>&ndash;&gt;-->
<!--                <span class="pointer-events-none inset-y-0 block items-center ">-->
<!--                    <i class="fa-regular fa-angle-down text-gray-900"></i>-->
<!--                </span>-->
<!--            </ListboxButton>-->

<!--            <transition-->
<!--                leave-active-class="transition duration-100 ease-in"-->
<!--                leave-from-class="opacity-100"-->
<!--                leave-to-class="opacity-0"-->
<!--            >-->
<!--                <ListboxOptions-->
<!--                    class="z-40 absolute mt-2 max-h-60 w-full overflow-auto rounded-3xl bg-white bg-opacity-25 backdrop-blur text-base shadow-lg focus:outline-none sm:text-sm border border-gray-300"-->
<!--                >-->
<!--                    <ListboxOption-->
<!--                        v-slot="{ active, selected }"-->
<!--                        v-for="(list, index) in option"-->
<!--                        :key="index"-->
<!--                        :value="index"-->
<!--                        class="inline-flex"-->
<!--                    >-->
<!--                        <li :class="[-->
<!--                                active ? 'bg-primary-100 text-primary-900' : 'text-gray-900',-->
<!--                                'capitalize relative cursor-default select-none py-2 px-3 m-1 pr-4 inline-flex rounded-3xl focus:ring focus:ring-primary-200 focus:ring-opacity-50',]"-->
<!--                        >-->
<!--                                <span :class="[ selected ? 'font-medium' : 'font-normal', 'block truncate',]">-->
<!--                                    {{ list }}-->
<!--                                </span>-->

<!--                            <span v-if="selected" class="inset-y-0 left-0 flex items-center pl-1.5">-->
<!--                                    <i class="fa-solid fa-check text-primary-600"></i>-->
<!--                                </span>-->
<!--                        </li>-->
<!--                    </ListboxOption>-->
<!--                </ListboxOptions>-->
<!--            </transition>-->
<!--        </div>-->
<!--    </Listbox>-->
<!--</template>-->

<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String | Number,
    option: Object | Array
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <select
        ref="input"
        class="bg-white text-black border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
        <template v-for="(list, index) in option">
            <option :value="index">{{ list }}</option>
        </template>
    </select>
</template>
