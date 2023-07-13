<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import {Link, useForm, router, usePage} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {computed, ref} from "vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import PreviousButton from "@/Components/PreviousButton.vue";
import ActionMessage from "@/Components/ActionMessage.vue";
import FormSection from "@/Components/FormSection.vue";

const props = defineProps({
    users: Object,
    history: Object,
    response: Object,
    amount: String,
    order_id: String,
})

const passwordInput = ref(null);

const form = useForm({
    user_id: props.users.id,
    amount: props.amount,
    token: props.response.token,
    redirect_url: props.response.redirect_url,
    status: null,
    order_id: props.order_id
});

const page = usePage()

const response = computed(() => page.props.response)

function formatPrice(value) {
    let val = (value/1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const deposit = (status) => {
    form.status = status
    form.post(route('deposit.confirm', form), {
        preserveScroll: true,
        onSuccess: () => {
            console.log('sukses')
        },
        onError: () => console.log('error'),
        onFinish: () => console.log('finish'),
    });
};

const confirm = () => {
    snap.pay(props.response.token, {
        onSuccess: function(result){
            console.log('success');
            // console.log(result);
            deposit('success')
        },
        onPending: function(result){
            console.log('pending');
            // console.log(result);
            deposit('pending')
        },
        onError: function(result){
            console.log('error');
            // console.log(result);
            deposit('error')
        },
        onClose: function(){
            console.log('customer closed the popup without finishing the payment');
            deposit('close')
            // confirm()
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
