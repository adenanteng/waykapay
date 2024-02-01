<script setup>
import AppLayout from "@/Layouts/AppLayout.vue";
import PrimaryButton from "../../Components/PrimaryButton.vue";
import {Link, router} from "@inertiajs/vue3";
import moment from "moment/moment";
import Loading from "../Product/Loading.vue";
import {onMounted} from "vue";
import PreviousButton from "../../Components/PreviousButton.vue";
import Badge from "../../Components/Badge.vue";

const props = defineProps({
    customer: undefined,
});

onMounted(() => {
    router.reload({ only: ['customer'] })
})

const customerDelete = (id) => {
    router.delete(route('transaction-customer.destroy', id), {
        preserveScroll: true,
        onFinish: () => router.reload({ only: ['customer'] }),
    });
};

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:mm')
}

</script>

<template>
    <AppLayout title="Nomor Tersimpan"
               name="Nomor Tersimpan"
               desc="Nomor tersimpan"
    >
        <template #previous>
            <PreviousButton />
        </template>
<!--        <div class="flex justify-between gap-3">-->
<!--            <div class="">-->
<!--                <TextInput-->
<!--                    type="text"-->
<!--                    v-model="search"-->
<!--                    placeholder="Cari disini"-->
<!--                    class="block w-full lg:w-96 shadow"-->
<!--                />-->
<!--            </div>-->

<!--            <div class="">-->
<!--                <PrimaryButton as="a" :href="route('user.create')" >Tambah</PrimaryButton>-->
<!--            </div>-->
<!--        </div>-->

        <div class="">

            <template v-if="props.customer === undefined">
                <Loading />
            </template>

            <template v-else v-for="(brand, index) in props.customer">
                <h3 class="text-sm text-gray-500 font-medium ml-5 mt-5 mb-1 flex items-center uppercase">
                    {{ index.replaceAll("-", " ") }}
                    <Badge :name="brand.length + ' Nomor' " class="ml-3 text-xs text-primary-600 bg-primary-100" />
                </h3>
                <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
                    <template v-for="cust in brand">
                        <li class="relative px-4 py-3 flex items-center space-x-3">
                            <div class="flex-shrink-0" >
                                <img class="w-8" :src="'/img/vendor/' + cust.brand + '.png'" alt="">
                                <img class="w-8" :src="'/img/vendor/' + cust.brand + '.svg'" alt="">
                            </div>

                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-gray-900 capitalize">{{ cust.customer_name }}</p>
                                <p class="text-sm text-gray-500 truncate">{{ cust.customer_no }}</p>
                            </div>

                            <div class="">
                                <button @click="customerDelete(cust)" class="mr-2">
                                    <i class="fa-regular fa-trash text-lg text-red-600" />
                                </button>
                            </div>
                        </li>
                    </template>
                </ul>
            </template>

        </div>
    </AppLayout>



</template>
