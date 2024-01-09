<script setup>
import {computed, onMounted, ref, watch} from 'vue';
import { router, Head, Link} from '@inertiajs/vue3';
import nightwind from "nightwind/helper";
import ApplicationMark from '@/Components/ApplicationMark.vue';
import Banner from '@/Components/Banner.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import DarkmodeToggle from "@/Components/DarkmodeToggle.vue";
import OnlineStatus from "@/Components/OnlineStatus.vue";
import {useMouse, useWindowSize} from "@vueuse/core/index";

const props = defineProps({
    title: String,
    darkMode: Boolean,
    header: String,
    desc: String,
    img: String,
    page: Object,
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

const logout = () => {
    router.post(route('logout'));
};

const headRef = ref(null); // obtain the reference

onMounted(() => {
    var prev = window.pageYOffset;
    window.addEventListener("scroll", () => {
        if (headRef.value != null) {
            var curr = window.pageYOffset;
            if (prev > curr) {
                headRef.value.classList.add("scrolled");
                headRef.value.classList.remove("scrollDown");
            } else {
                headRef.value.classList.add('bg-white', 'bg-opacity-20', 'backdrop-blur-sm', 'border', 'border-gray-300', 'rounded-full');
                headRef.value.classList.remove("scrolled");
            }
            if (curr === 0) {
                headRef.value.classList.remove('bg-white', 'bg-opacity-20', 'backdrop-blur-sm', 'border', 'border-gray-300', 'rounded-full');
                headRef.value.classList.remove("scrolled");
            }
            prev = curr;

        }
    });
});

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const dx = computed(() => Math.abs(x.value - width.value / 2))
const dy = computed(() => Math.abs(y.value - height.value / 2))
const distance = computed(() =>
    Math.sqrt(dx.value * dx.value + dy.value * dy.value)
)

const size = computed(() => Math.max(300 - distance.value / 3, 160))
const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.7), 1))


</script>

<template>
    <div class="transition duration-1000 nightwind" :class="darkMode ? 'dark' : '' ">
        <Head :title="title + ' - ' + $page.props.appSetting?.name"/>

        <div class="sticky top-0 z-50">
            <OnlineStatus />
        </div>

        <div class="sticky top-0 z-50">
            <Banner/>
        </div>

        <div class="min-h-screen bg-white relative isolate overflow-hidden transition duration-1000">
<!--            <div class="fixed inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">-->
<!--                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 dark:from-primary-700 to-primary-400 dark:to-primary-900 opacity-75 sm:left-[calc(50%-30rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>-->
<!--            </div>-->

            <div
                class="absolute bg-primary-400 -z-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-2xl"
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

            <div class="fixed inset-x-0 -bottom-32 -z-10 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 dark:from-primary-700 to-primary-400 dark:to-primary-900 opacity-75 sm:left-[calc(50%+36rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
            </div>

<!--            <div class="fixed inset-0">-->

<!--            </div>-->

            <nav class="px-3 mb-3 pt-3 w-full z-50 fixed top-0" >
                <!-- Primary Navigation Menu -->
                <div class="px-3 max-w-screen-xl mx-auto" ref="headRef">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <!--                                <Link :href="route('welcome')">-->
                                <ApplicationMark class="block h-10 w-auto"/>
                                <!--                                </Link>-->
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 lg:flex">
                                <NavLink :href="route('landing.welcome')"
                                         :active="route().current('landing.welcome')" >
                                    Beranda
                                </NavLink>

<!--                                <NavLink :href="route('landing.gallery')" :active="$page.url.startsWith('/galeri')" >-->
<!--                                    Galeri-->
<!--                                </NavLink>-->


                            </div>
                        </div>

                        <div class="hidden lg:flex sm:items-center sm:ml-6">
                            <div class="ml-3 relative" v-if="$page.props.user == null">
                                <NavLink :href="route('login')">
                                    Login
                                </NavLink>
                            </div>

                            <div class="ml-3 relative">
                                <DarkmodeToggle :darkMode="darkMode" @click="darkMode = ! darkMode"/>
                            </div>

                            <!-- Settings Dropdown -->
<!--                            <div class="ml-3 relative" v-if="$page.props.user == null">-->
<!--                                <a-->
<!--                                    class="nightwind-prevent inline-flex items-center px-4 py-2 bg-primary-600 border border-transparent rounded-full font-semibold text-base text-white hover:bg-primary-700 active:bg-primary-900 focus:outline-none focus:border-primary-900 focus:ring focus:ring-primary-300 disabled:opacity-25 transition"-->
<!--                                    target="_blank"-->
<!--                                    href="https://api.whatsapp.com/send?phone=6285156875180&text=Halo%20Admin%20Myonetwotrip%20saya%20mau%20order"-->
<!--                                >-->
<!--                                    <i class="fa-regular fa-paper-plane mr-1"/> Pesan Tiket-->
<!--                                </a>-->
<!--                            </div>-->

                            <div class="ml-3 relative" v-if="$page.props.user">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <button
                                            class="flex text-sm border-transparent rounded-full focus:outline-none focus:ring focus:ring-primary-300 transition">
                                            <img v-if="$page.props.user" class="h-10 w-10 rounded-full object-cover"
                                                 :src="$page.props.user.profile_photo_url"
                                                 :alt="$page.props.user.name">
                                            <span v-else
                                                  class="block h-10 w-10 bg-primary-100 flex items-center justify-center rounded-full">
                                                <i class="fa-duotone fa-user text-2xl text-primary-400"></i>
                                            </span>
                                        </button>
                                    </template>

                                    <template #content>
                                        <!-- Account Management -->
                                        <DropdownLink :href="route('dashboard')">
                                            Dasbor
                                        </DropdownLink>

                                        <DropdownLink :href="route('profile.show')">
                                            Profil
                                        </DropdownLink>

                                        <div class="border-t border-gray-100"/>

                                        <!-- Authentication -->
                                        <form @submit.prevent="logout">
                                            <DropdownLink as="button">
                                                Keluar
                                            </DropdownLink>
                                        </form>
                                    </template>
                                </Dropdown>
                            </div>

                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center lg:hidden">
                            <DarkmodeToggle :darkMode="darkMode" @click="darkMode = ! darkMode"/>
                            <button
                                class="inline-flex items-center justify-center ml-2 p-2 rounded-3xl text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
                                @click="showingNavigationDropdown = ! showingNavigationDropdown">
                                <svg
                                    class="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Responsive Navigation Menu -->
                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="lg:hidden mt-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-3xl border border-gray-300">
                    <div class="pt-2 pb-3 space-y-1">
                        <ResponsiveNavLink :href="route('landing.welcome')"
                                           :active="route().current('landing.welcome')">
                            Beranda
                        </ResponsiveNavLink>

<!--                        <ResponsiveNavLink :href="route('landing.bali')" :active="$page.url.startsWith('/bali')" >-->
<!--                            Bali-->
<!--                        </ResponsiveNavLink>-->

                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div v-if="$page.props.user" class="flex items-center px-4 mb-3">
                            <div class="shrink-0 mr-3">
                                <img class="h-10 w-10 rounded-full object-cover"
                                     :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name">
                            </div>

                            <div>
                                <div class="font-medium text-base text-gray-800">
                                    {{ $page.props.user.name }}
                                </div>
                                <div class="font-medium text-sm text-gray-500">
                                    {{ $page.props.user.email }}
                                </div>
                            </div>
                        </div>

                        <div class="space-y-1">
                            <!-- Team Management -->
                            <template v-if="$page.props.user">
                                <ResponsiveNavLink :href="route('dashboard')"
                                                   :active="route().current('dashboard')">
                                    Dasbor
                                </ResponsiveNavLink>

                                <ResponsiveNavLink :href="route('profile.show')"
                                                   :active="route().current('profile.show')">
                                    Profil
                                </ResponsiveNavLink>

                                <!-- Authentication -->
                                <form method="POST" @submit.prevent="logout">
                                    <ResponsiveNavLink as="button">
                                        Keluar
                                    </ResponsiveNavLink>
                                </form>

                            </template>


                            <template v-else>
                                <ResponsiveNavLink :href="route('login')">
                                    Masuk
                                </ResponsiveNavLink>

                                <ResponsiveNavLink :href="route('register')">
                                    Daftar
                                </ResponsiveNavLink>
                            </template>
                        </div>
                    </div>
                </div>
            </nav>

            <main class="">
                <div v-if="props.header" class=" relative ">

                    <img class="object-cover w-full h-screen " :src="props.img">

                    <div class="absolute w-full bottom-0 top-0 flex justify-center items-center bg-gradient-to-tr to-transparent from-gray-800 dark:from-gray-800">
                        <div class="text-left justify-start max-w-screen-xl w-full px-10 2xl:px-0">
                            <h1 class="max-w-2xl text-white text-4xl lg:text-6xl font-bold capitalize nightwind-prevent">
                                {{ props.header }}
                            </h1>
                            <p class="max-w-xl text-gray-100 text-base mt-1 nightwind-prevent">
                                {{ props.desc }}
                            </p>
                        </div>
                    </div>
                </div>

                <slot />
            </main>

            <div class="sticky inset-x-0 bottom-0 nightwind-prevent-block">
                <div class="bg-primary-600 bg-opacity-20 backdrop-blur-sm">
                    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                        <div class="flex items-center justify-between flex-wrap">
                            <div class="w-0 flex-1 flex items-center">
                                <span class="flex p-2 rounded-lg bg-primary-800">
                                    <i class="fa-regular fa-bullhorn text-white" />
                                </span>
                                <p class="ml-3 font-medium text-white truncate">
                                    <span class="md:hidden">Website dalam tahap pengembangan! </span>
                                    <span class="hidden md:inline">Website ini masih dalam tahap pengembangan. </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

<!--            <Footer />-->
        </div>
    </div>
</template>
