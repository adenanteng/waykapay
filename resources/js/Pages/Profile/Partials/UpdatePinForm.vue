<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const pinInput = ref(null);
const currentPinInput = ref(null);

const form = useForm({
    current_pin: '',
    pin: '',
    pin_confirmation: '',
});

const updatePassword = () => {
    form.put(route('pin.store'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
            if (form.errors.pin) {
                form.reset('pin', 'pin_confirmation');
                pinInput.value.focus();
            }

            if (form.errors.current_pin) {
                form.reset('current_pin');
                currentPinInput.value.focus();
            }
        },
    });
};

const showPin = ref(false)
const showPinNew = ref(false)
const showPinConfirm = ref(false)

</script>

<template>
    <FormSection @submitted="updatePassword">
        <template #title>
            Pin Transaksi
        </template>

        <template #description>
            Pastikan akun kamu menggunakan pin acak agar tetap aman.
        </template>

        <template #form>

        </template>

        <template #actions>
<!--            <ActionMessage :on="form.recentlySuccessful" class="mr-3">-->
<!--                Berhasil disimpan.-->
<!--            </ActionMessage>-->

<!--            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">-->
<!--                Simpan-->
<!--            </PrimaryButton>-->
            <PrimaryButton
                as="a"
                :href="route('pin.create')"
                v-if="$page.props.user.pin != null"
            >
                Ubah Pin
            </PrimaryButton>

            <PrimaryButton
                as="a"
                :href="route('pin.create')"
                v-else
            >
                Buat Pin
            </PrimaryButton>
        </template>
    </FormSection>
</template>
