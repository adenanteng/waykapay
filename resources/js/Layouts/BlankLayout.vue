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
import {useMouse, useWindowSize} from "@vueuse/core/index";
import BackgroundParticle from "../Components/BackgroundParticle.vue";

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
    <div class="relative overflow-hidden transition duration-1000" :class="darkMode ? 'nightwind dark' : 'nightwind' ">
        <Head :title="title + ' - ' + $page.props.appSetting?.name"/>

        <div class="sticky top-0 z-50">
            <OnlineStatus />
        </div>

        <div class="sticky top-0 z-50">
            <Banner/>
        </div>

        <div class="min-h-screen bg-white relative isolate transition duration-1000 flex justify-center items-center">
            <div class="-z-10">
                <BackgroundParticle />
            </div>

            <slot/>
        </div>
    </div>

</template>
