<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import DarkmodeToggle from "@/Components/DarkmodeToggle.vue";
import DangerButton from "@/Components/DangerButton.vue";
import {onMounted, ref, watch} from "vue";
import moment from "moment/moment";

const props = defineProps({
    history: Object,
    // flip_saldo: undefined,
    digiflazz_saldo: undefined,
})

onMounted(() => {
    // console.log('dana');
    router.reload({ only: ['digiflazz_saldo'] })
})

const darkMode = ref(false)
if (typeof window !== 'undefined') {
    darkMode.value = JSON.parse(localStorage.getItem('darkmode')) ?? false

    watch(darkMode, (newDarkMode) => {
        console.log(`darkmode is ${newDarkMode}`)
        localStorage.setItem('darkmode', JSON.stringify(newDarkMode))
    })
}

const logout = () => {
    router.post(route('logout'));
};

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
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

        <div class="col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300">
            <div class="md:hidden relative">
                <img :src="$page.props.user.profile_photo_url" class="w-full object-cover rounded-t-3xl aspect-video" loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-tl from-gray-50 dark:from-gray-900 via-transparent via-35% flex justify-end items-end rounded-t-3xl">
                    <div class="pb-2 pr-5 text-right">
<!--                        <h3 class="font-semibold text-gray-900 ">-->
<!--                            # {{ $page.props.user.slug }}-->
<!--                        </h3>-->
                        <h3 class="font-semibold text-gray-900 ">
                            {{ $page.props.user.phone }}
                        </h3>
                        <p class="text-xs text-gray-700">Akun {{ $page.props.user.role }}</p>
                    </div>

                </div>
            </div>
            <div>
                <div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600">
                    <div class="flex w-0 flex-1">
                        <div class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4">
                            <i class="fa-duotone fa-money-bill-wave text-green-400"/>
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Saldo Rekening</div>
                                <div class="text-sm font-medium text-gray-700">Rp {{ formatPrice($page.props.user.wallet_balance) }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="-ml-px flex w-0 flex-1">
                        <div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4">
                            <i class="fa-duotone fa-coins text-amber-400"/>
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Poin</div>
                                <div class="text-sm font-medium text-gray-700">{{ formatPrice($page.props.user.coin) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm border border-gray-300 overflow-hidden shadow-lg">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <li>
                    <Link :href="route('profile.show')" class="flex justify-between px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Ubah data profil</p>
                        <i class="fa-regular fa-angle-right text-gray-900" />
                    </Link>
                </li>
                <li v-if="$page.props.user.role_id!=3">
                    <Link :href="route('report.index')" class="flex justify-between px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Laporan</p>
                        <i class="fa-regular fa-angle-right text-gray-900" />
                    </Link>
                </li>
                <li >
                    <Link :href="route('pricing.index')" class="flex justify-between px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Daftar harga</p>
                        <i class="fa-regular fa-angle-right text-gray-900" />
                    </Link>
                </li>
                <li class="block lg:hidden">
                    <Link :href="route('profile.index')" @click="darkMode=!darkMode" class="flex justify-between px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Mode {{ darkMode ? 'gelap' : 'terang' }}</p>
                        <i class="fa-regular text-gray-900" :class="darkMode ? 'fa-moon' : 'fa-sun-bright' " />
                    </Link>
                </li>
                <li>
                    <Link :href="route('transaction-customer.index')" class="flex justify-between px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Nomor tersimpan</p>
                        <i class="fa-regular fa-angle-right text-gray-900" />
                    </Link>
                </li>
                <li>
                    <Link :href="route('device.index')" class="flex justify-between px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Perangkat</p>
                        <i class="fa-regular fa-angle-right text-gray-900" />
                    </Link>
                </li>
            </ul>
        </div>

        <div class="col-span-1 divide-y md:divide-none divide-gray-300 dark:divide-gray-600 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300" v-if="$page.props.user.role_id==1">
            <div>
                <div class="-mt-px flex divide-x divide-gray-300 dark:divide-gray-600">
<!--                    <div class="flex w-0 flex-1">-->
<!--                        <div class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4">-->
<!--                            <i class="fa-duotone fa-money-bill-wave text-green-400"/>-->
<!--                            <div class="ml-3">-->
<!--                                <div class="text-xs text-gray-500">Flip Saldo</div>-->
<!--                                <div class="text-sm font-medium text-gray-700">Rp {{ formatPrice(props.flip_saldo ?? 0) }}</div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
                    <div class="-ml-px flex w-0 flex-1">
                        <div class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4">
                            <i class="fa-duotone fa-money-bill-1-wave text-green-400"/>
                            <div class="ml-3">
                                <div class="text-xs text-gray-500">Digiflazz Saldo</div>
                                <div class="text-sm font-medium text-gray-700">Rp {{ formatPrice(props.digiflazz_saldo) }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm border border-gray-300 overflow-hidden shadow-lg" v-if="$page.props.user.role_id==1">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <li>
                    <Link :href="route('setting.index')" class="flex justify-between px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Pengaturan aplikasi</p>
                        <i class="fa-regular fa-angle-right text-gray-900" />
                    </Link>
                </li>
                <li>
                    <Link :href="route('transaction.index')" class="flex justify-between px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Transaksi</p>
                        <i class="fa-regular fa-angle-right text-gray-900" />
                    </Link>
                </li>
                <li>
                    <Link :href="route('carousel.index')" class="flex justify-between px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Carousel</p>
                        <i class="fa-regular fa-angle-right text-gray-900" />
                    </Link>
                </li>
                <li>
                    <Link :href="route('user.index')" class="flex justify-between px-6 py-4" >
                        <p class="text-sm font-medium text-gray-900">Data pengguna</p>
                        <i class="fa-regular fa-angle-right text-gray-900" />
                    </Link>
                </li>
            </ul>
        </div>

        <div class="rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm border border-gray-300 overflow-hidden shadow-lg">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <li>
                    <Link :href="route('terms.show')" class="block px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Ketentuan layanan</p>
                    </Link>
                </li>

                <li>
                    <Link :href="route('policy.show')" class="block px-6 py-4">
                        <p class="text-sm font-medium text-gray-900">Kebijakan privasi</p>
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
