<script setup>
import { ref } from 'vue';
import { Link, useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    setting: Object,
});

const form = useForm({
    voucher_25: props.setting.voucher_25 ?? null,
    voucher_50: props.setting.voucher_50 ?? null,
    voucher_75: props.setting.voucher_75 ?? null,
    voucher_100: props.setting.voucher_100 ?? null,
    voucher_200: props.setting.voucher_200 ?? null,
    voucher_500: props.setting.voucher_500 ?? null,
    voucher_1000: props.setting.voucher_1000 ?? null,
    voucher_max: props.setting.voucher_max ?? null,
});

const updateSettingInformation = () => {
    form.post(route('setting.store'), {
        errorBag: 'storeSettingInformation',
        preserveScroll: true,
        // onSuccess: () => clearPhotoFileInput(),
    });


};

</script>

<template>
    <FormSection @submitted="updateSettingInformation">
        <template #title>
            Informasi Biaya Voucher
        </template>

        <template #description>
            Informasi biaya voucher
        </template>

        <template #form>
            <div class="col-span-2">
                <InputLabel value="Rp 25.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.voucher_25"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.voucher_25" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 50.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.voucher_50"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.voucher_50" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 75.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.voucher_75"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.voucher_75" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 100.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.voucher_100"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.voucher_100" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 200.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.voucher_200"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.voucher_200" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 500.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.voucher_500"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.voucher_500" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 1.000.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.voucher_1000"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.voucher_1000" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Max" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.voucher_max"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.voucher_max" class="mt-2" />
            </div>


        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Berhasil disimpan.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Simpan
            </PrimaryButton>
        </template>
    </FormSection>
</template>
