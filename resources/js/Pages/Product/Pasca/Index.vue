<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm} from "@inertiajs/vue3";
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
import {ref} from "vue";

const props = defineProps({
    sku: String,
});

const form = useForm({
    customer_no: '',
    sku: props.sku,
});

const storeInformation = () => {
    form.post(route('pasca.inquiry'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        replace: true
        // onSuccess: () => closeModal(),
        // onError: () => passwordInput.value.focus(),
        // onFinish: () => form.reset(),
    });
};

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <AppLayout :title="props.sku"
               :name="props.sku"
               desc="Masukkan nomor meter"
    >
        <template #previous>
            <PreviousButton />
        </template>

        <FormSection @submitted="storeInformation">
            <template #title>
                Tagihan <span class="capitalize">{{ props.sku.replaceAll("-", " ") }}</span>
            </template>

            <template #description>
                * Saldo Rekening Rp {{ formatPrice($page.props.user.wallet_balance) }}
            </template>

            <template #form>
                <div class="col-span-6 sm:col-span-3">
                    <InputLabel for="number" value="Masukkan nomor pelanggan"/>
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

<!--        <MobileMenu />-->
    </AppLayout>
</template>
