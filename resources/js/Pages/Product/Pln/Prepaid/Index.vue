<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, router, useForm} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import PreviousButton from "@/Components/PreviousButton.vue";
import FormSection from "@/Components/FormSection.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import InputLabel from "@/Components/InputLabel.vue";
import ActionSection from "@/Components/ActionSection.vue";
import DialogModal from "@/Components/DialogModal.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import {onMounted, ref} from "vue";
import Loading from "../../Loading.vue";

const props = defineProps({
    // users: Object,
    customer_list: undefined,
});

onMounted(() => {
    // console.log('dana');
    router.reload({ only: ['customer_list'] })
})

const form = useForm({
    brand: 'PLN',
    customer_no: '',
});

const storeInformation = () => {
    form.get(route('pln.prepaid.inquiry', form), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        // onSuccess: () => closeModal(),
        // onError: () => passwordInput.value.focus(),
        // onFinish: () => form.reset(),
    });
};

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const tabs = ref('Pulsa')

</script>

<template>
    <AppLayout title="PLN Prepaid"
               name="PLN Prepaid"
               desc="Masukkan nomor meter"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <FormSection @submitted="storeInformation">
            <template #title>
                Token PLN Prepaid
            </template>

            <template #description>
                * Saldo Rekening Rp {{ formatPrice($page.props.user.wallet_balance) }}
            </template>

            <template #form>
                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="Masukkan no. meter / id pelanggan"/>
                    <TextInput
                        id="number"
                        v-model="form.customer_no"
                        type="number"
                        class="mt-1 block w-full"
                        minlength="5"
                        required
                        autofocus
                    />
                    <InputError :message="form.errors.customer_no" class="mt-2"/>
                </div>

            </template>

            <template #actions>
                <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                    Berhasil disimpan.
                </ActionMessage>

                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Cek
                </PrimaryButton>
            </template>
        </FormSection>


        <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
            <template v-if="props.customer_list === undefined">
                <Loading />
            </template>

            <template v-else v-for="cust in props.customer_list">
                <li class="relative px-6 py-5 flex items-center space-x-3">
                    <div class="flex-shrink-0" >
                        <img class="w-10" :src="'/img/vendor/' + cust.brand + '.png'" alt="">
                        <img class="w-10" :src="'/img/vendor/' + cust.brand + '.svg'" alt="">
                    </div>

                    <div @click="form.customer_no = cust.customer_no" class="flex-1 min-w-0">
                        <button @click="" class="focus:outline-none text-left">
                            <span class="absolute inset-0" aria-hidden="true"></span>
                            <p class="text-sm font-medium text-gray-900">{{ cust.customer_name }}</p>
                            <p class="text-sm text-gray-500 truncate">{{ cust.customer_no }}</p>
                        </button>
                    </div>
                </li>
            </template>
        </ul>

<!--        <MobileMenu />-->
    </AppLayout>
</template>
