<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import DarkmodeToggle from "@/Components/DarkmodeToggle.vue";
import DangerButton from "@/Components/DangerButton.vue";
import {ref, watch} from "vue";
import moment from "moment/moment";

const props = defineProps({
    users: Object,
    history: Object,
    in_count: Number,
    out_count: Number
})

const logout = () => {
    router.post(route('logout'));
};

function formattedDate(value) {
    return moment(value).format('DD MMM Y')
}

function formattedTime(value) {
    return moment(value).format('HH:mm')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <AppLayout title="Saya"
               :name="$page.props.user.name"
               :desc="$page.props.user.email"
               :avatar="$page.props.user.profile_photo_url"
    >

        <div class="col-span-1 divide-y divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-50 shadow-lg border border-gray-300">
            <div class="flex w-full items-center justify-between space-x-6 px-6 py-4">
                <div class="">
                    <img :src="$page.props.user.profile_photo_url" class="rounded-full h-12 w-12 object-cover">
                </div>
                <div class="flex-1 truncate">
                    <div class="flex items-center space-x-3">
                        <h3 class="truncate text-sm font-medium text-gray-900">
                            {{ $page.props.user.name }}
                        </h3>
<!--                        <span class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">-->
<!--                            Aktif-->
<!--                        </span>-->
                    </div>
                    <p class="mt-1 truncate text-sm text-gray-500">Lorem ipsum dolor</p>
                </div>
            </div>
            <div>
                <div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600">
                    <div class="flex w-0 flex-1">
                        <div class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4">
                            <i class="fa-duotone fa-down text-primary-400"/>
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Uang masuk</div>
                                <div class="text-sm font-medium text-gray-700">Rp {{ formatPrice(props.in_count) }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="-ml-px flex w-0 flex-1">
                        <div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4">
                            <i class="fa-duotone fa-up text-amber-400"/>
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Uang Keluar</div>
                                <div class="text-sm font-medium text-gray-700">Rp {{ formatPrice(props.out_count) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <li>
                    <Link :href="route('profile.show')" class="block px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Pengaturan Profil</p>
                    </Link>
                </li>
            </ul>
        </div>

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg" v-if="$page.props.user.role_id==1">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <li>
                    <Link :href="route('setting.index')" class="block px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Pengaturan Aplikasi</p>
                    </Link>
                </li>

                <li>
                    <Link :href="route('carousel.index')" class="block px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Pengaturan Carousel</p>
                    </Link>
                </li>

                <li>
                    <Link :href="route('user.index')" class="block px-6 py-4" >
                        <p class="text-sm font-medium text-gray-900">Pengaturan Pengguna</p>
                    </Link>
                </li>
            </ul>
        </div>

<!--        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg">-->
<!--            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">-->
<!--                <li>-->
<!--                    <Link :href="route('terms.show')" class="block px-6 py-4">-->
<!--                        <p class="text-sm font-medium text-gray-900">Ketentuan Layanan</p>-->
<!--                    </Link>-->
<!--                </li>-->

<!--                <li>-->
<!--                    <Link :href="route('policy.show')" class="block px-6 py-4">-->
<!--                        <p class="text-sm font-medium text-gray-900">Kebijakan Privasi</p>-->
<!--                    </Link>-->
<!--                </li>-->
<!--            </ul>-->
<!--        </div>-->

        <form method="POST" @submit.prevent="logout">
            <DangerButton type="submit" class="w-full">
                Keluar
            </DangerButton>
        </form>

        <MobileMenu />
    </AppLayout>
</template>
