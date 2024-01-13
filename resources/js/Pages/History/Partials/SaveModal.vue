<script setup>
import DialogModal from "../../../Components/DialogModal.vue";
import {ref} from "vue";
import {useForm} from "@inertiajs/vue3";
import InputLabel from "../../../Components/InputLabel.vue";
import TextInput from "../../../Components/TextInput.vue";
import InputError from "../../../Components/InputError.vue";
import ActionMessage from "../../../Components/ActionMessage.vue";
import PrimaryButton from "../../../Components/PrimaryButton.vue";

const props = defineProps({
    history: Object,
})

const form = useForm({
    customer_name: null,
    customer_no: props.history.customer_no,
    brand: props.history.brand,
    history_id: props.history.order_id
});

const storeInformation = () => {
    form.post(route('transaction-customer.store'), {
        errorBag: 'storeInformation',
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
        }
    });
};

const saveModal = ref(true);
const closeModal = () => {
    saveModal.value = false;
};

</script>

<template>
    <DialogModal :show="saveModal" @close="closeModal">
        <template #title>
            <div class="w-full text-center">
                Simpan Nomor {{ form.brand }}
            </div>

        </template>

        <template #content>
            <div class="space-y-5">
                <div class="">
                    <InputLabel for="customer_name" value="Nama" />
                    <TextInput
                        id="customer_name"
                        v-model="form.customer_name"
                        type="text"
                        class="mt-1 block w-full capitalize"
                        required
                        autofocus
                    />
                    <InputError :message="form.errors.customer_name" class="mt-2" />
                </div>

                <div class="">
                    <InputLabel for="customer_no" value="Nomor" />
                    <TextInput
                        id="customer_no"
                        v-model="form.customer_no"
                        type="text"
                        class="mt-1 block w-full text-gray-500"
                        required
                        disabled
                    />
                    <InputError :message="form.errors.customer_no" class="mt-2" />
                </div>
            </div>

        </template>

        <template #footer>
            <div class="grid items-center w-full">
                <PrimaryButton
                    class="w-full justify-center"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                    @click="storeInformation"
                >
                    Simpan
                </PrimaryButton>
            </div>
        </template>
    </DialogModal>

</template>
