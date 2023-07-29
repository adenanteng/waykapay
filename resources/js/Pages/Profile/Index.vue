<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import DarkmodeToggle from "@/Components/DarkmodeToggle.vue";
import DangerButton from "@/Components/DangerButton.vue";

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <AppLayout title="Saya"
               :name="$page.props.user.name"
               :desc="$page.props.user.email"
               :avatar="$page.props.user.profile_photo_url"
    >

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl border border-gray-300 overflow-hidden shadow-lg">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <li>
                    <Link :href="route('profile.show')" class="block px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Pengaturan Profil</p>
                    </Link>
                </li>

                <li>
                    <Link :href="route('setting.index')" class="block px-6 py-4" v-if="$page.props.user.role_id==1">
                        <p class="text-sm font-medium text-gray-900">Pengaturan Aplikasi</p>
                    </Link>
                </li>
            </ul>
        </div>

        <form method="POST" @submit.prevent="logout">
            <DangerButton type="submit" class="w-full">
                Keluar
            </DangerButton>
        </form>

        <MobileMenu />
    </AppLayout>
</template>
