<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router, usePage} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {computed, ref} from "vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import PreviousButton from "@/Components/PreviousButton.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import InputError from "@/Components/InputError.vue";
import TextInput from "@/Components/TextInput.vue";
import InputLabel from "@/Components/InputLabel.vue";
import FormSection from "@/Components/FormSection.vue";

const props = defineProps({
    users: Object,
    history: Object,
    response: Object,
    amount: String,
})

const passwordInput = ref(null);

const form = useForm({
    id: props.users.id,
    amount: props.amount
});

const page = usePage()

const response = computed(() => page.props.response)

const deposit = () => {

    form.post(route('deposit.show', form), {
        preserveScroll: true,
    onSuccess: () => {},
    // onError: () => passwordInput.value.focus(),
    // onFinish: () => form.reset(),
    });
};


function formatPrice(value) {
    let val = (value/1).toFixed(2).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const confirm = () => {
    snap.pay(props.response.token, {
        onSuccess: function(result){
            console.log('success');
            console.log(result);
            deposit()

        },
        onPending: function(result){
            console.log('pending');
            console.log(result);
        },
        onError: function(result){
            console.log('error');
            console.log(result);
        },
        onClose: function(){
            console.log('customer closed the popup without finishing the payment');
        }
    })
}

</script>

<template>
    <AppLayout title="Konfirmasi Deposit"
               name="Konfirmasi Deposit"
               desc="Lorem ipsum dolor sit amet"
    >

        <template #previous>
            <PreviousButton :href="route('deposit.index')" />
        </template>

        <FormSection @submitted="confirm">
            <template #title>
                Konfirmasi Deposit
            </template>

            <template #description>
                Perbarui informasi profil akun dan alamat email pengguna.
            </template>

            <template #form>
                <div class="col-span-6 sm:col-span-3">
                    <h2 class="tracking-tight">
                        <span class="block text-sm font-medium text-gray-600">
                            Jumlah Pembayaran
                        </span>
                        <span class="block text-xl font-extrabold text-primary-600">
                        Rp {{ formatPrice(props.amount) }}
                        </span>
<!--                        <span class="block text-sm font-medium text-gray-600">-->
<!--                            {{ props.users.name }}-->
<!--                        </span>-->
                        <span class="block text-sm font-medium text-gray-600">
                            {{ props.response.token }}
                        </span>
                    </h2>
                </div>

            </template>

            <template #actions>
                <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                    Berhasil disimpan.
                </ActionMessage>

                <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Bayar
                </PrimaryButton>
            </template>
        </FormSection>

    </AppLayout>
</template>
