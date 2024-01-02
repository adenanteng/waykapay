<script setup>
import {computed, ref, useSlots, watch} from 'vue';
// import {Inertia} from '@inertiajs/inertia';
import {router, Head, Link} from '@inertiajs/vue3';
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLinkAlt from '@/Components/NavLinkAlt.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import DarkmodeToggle from "@/Components/DarkmodeToggle.vue";
import FlyoutMenu from "@/Components/FlyoutMenu.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import OnlineStatus from "../Components/OnlineStatus.vue";

const props = defineProps({
    title: String,
    darkMode: Boolean,
    greeting: String,
    name: String,
    desc: String,
    avatar: String
});

const darkMode = ref(false)
if (typeof window !== 'undefined') {
    darkMode.value = JSON.parse(localStorage.getItem('darkmode')) ?? false

    watch(darkMode, (newDarkMode) => {
        console.log(`darkmode is ${newDarkMode}`)
        localStorage.setItem('darkmode', JSON.stringify(newDarkMode))
    })
}

const showingNavigationDropdown = ref(false);

const hasAction = computed(() => !! useSlots().action);
const hasPrevious = computed(() => !! useSlots().previous);

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div class="transition duration-1000" :class="darkMode ? 'nightwind dark' : 'nightwind' ">
        <Head :title="title + ' - ' + $page.props.appSetting?.name"/>

        <div class="sticky top-0 z-50">
            <OnlineStatus />
        </div>

        <div class="sticky top-0 z-50">
            <Banner/>
        </div>

        <div class="min-h-screen bg-white relative isolate flex justify-center items-center">
            <div class="fixed inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 dark:from-primary-700 to-primary-400 dark:to-primary-900 opacity-75 sm:left-[calc(50%-30rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>

            <div class="fixed inset-x-0 -bottom-32 -z-10 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 dark:from-primary-700 to-primary-400 dark:to-primary-900 opacity-75 sm:left-[calc(50%+36rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>

            <slot/>
        </div>
    </div>

</template>
