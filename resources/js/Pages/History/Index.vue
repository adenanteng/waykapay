<script setup>
import {ref} from "vue";
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import SectionTitle from "@/Components/SectionTitle.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import moment from "moment";

const props = defineProps({
    users: Object,
    history: Object
})

const passwordInput = ref(null);

const form = useForm({
    id: null,
});

const deposit = (status) => {
    form.status = status
    form.post(route('deposit.confirm', form), {
        preserveScroll: true,
        onSuccess: () => {
            console.log('hahahaha')
        },
        // onError: () => passwordInput.value.focus(),
        // onFinish: () => form.reset(),
    });
};

function formattedDate(value) {
    return moment(value).format('DD MMM Y')
}

function formattedTime(value) {
    return moment(value).format('HH:m')
}

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <AppLayout title="Riwayat"
               name="Riwayat"
               desc="Lorem ipsum dolor sit amet"
    >

        <div class="rounded-3xl bg-white bg-opacity-50 backdrop-blur-2xl overflow-hidden shadow-lg border border-gray-300">
            <ul role="list" class="divide-y divide-gray-300 dark:divide-gray-600">
                <template v-for="history in $page.props.history">
                        <li>
<!--                            :href="history.redirect_url"-->
                            <Link :href="route('history.show', history)" class="block hover:bg-primary-50" >
                                <div class="px-4 py-4 sm:px-6">
                                    <div class="flex items-center justify-between">
                                        <p class="font-medium text-primary-600 truncate">{{ history.category }}</p>
                                        <div class="ml-2 flex-shrink-0 flex">
                                            <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "
                                                :class="history.status_id == 1 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                                            >
                                                {{ history.status }}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="mt-2 sm:flex sm:justify-between">
                                        <div class="sm:flex">
                                            <p class="flex items-center text-sm text-gray-900">
<!--                                                <i class="fa-regular text-gray-500 pr-2" :class="history.category_id == 1 ? 'fa-plus' : 'fa-minus' " />-->
                                                Rp {{ formatPrice(history.amount) }}
                                            </p>
                                            <p class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
<!--                                                <i class="fa-regular fa-down-to-bracket text-gray-500 pr-2" />-->
                                                {{ history.order_id }}
                                            </p>
                                        </div>
                                        <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                            <i class="fa-regular fa-calendar text-gray-500 pr-2" />
                                            <p>
                                                {{ formattedDate(history.created_at) }}
                                            </p>
                                            <p class="text-gray-900 ml-2">
                                                {{ formattedTime(history.created_at) }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>

                    </template>
            </ul>
        </div>

        <MobileMenu/>
    </AppLayout>
</template>
