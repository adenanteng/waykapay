<script setup>
import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import moment from "moment";
import PreviousButton from "@/Components/PreviousButton.vue";
import BlankLayout from "@/Layouts/BlankLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import Badge from "@/Components/Badge.vue";
import {useForm} from "@inertiajs/vue3";

const props = defineProps({
    transaction: Object
})

const form = useForm({
    transaction: props.transaction,
});

const storeInformation = () => {

    form.put(route('product.status', form), {
        errorBag: 'updateInformation',
        preserveScroll: true,
        onSuccess: () => {}
    });
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
    <BlankLayout title="Gagal" >

        <div class="pt-16 pb-12">
            <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
                <div class="flex flex-shrink-0 justify-center">
                    <ApplicationLogo />
                </div>
                <div class="mt-5">
                    <div class="text-center">
<!--                        <p class="text-base font-semibold text-indigo-600">Lorem ipsum</p>-->
                        <h1 class="text-2xl font-bold tracking-tight text-gray-900">Transaksi Gagal</h1>

                        <div class="">
                            <div class="text-sm text-gray-900">
                                <span class="class text-gray-600">
                                    ({{ props.transaction.rc }})
                                </span>
                                {{ props.transaction.message }}
                            </div>
                        </div>

                        <div class="mt-5 space-x-2">
                            <PrimaryButton as="a" :href="route('dashboard')" >
                                Ke Beranda
                            </PrimaryButton>

<!--                            <PrimaryButton v-if="props.transaction.category_id != 1" @click="storeInformation" >-->
<!--                                Cek Status-->
<!--                            </PrimaryButton>-->
                        </div>
                    </div>
                </div>
            </main>
        </div>

<!--        <MobileMenu/>-->
    </BlankLayout>
</template>
