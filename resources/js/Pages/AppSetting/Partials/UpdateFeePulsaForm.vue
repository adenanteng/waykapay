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
    pulsa_25: props.setting.pulsa_25 ?? null,
    pulsa_50: props.setting.pulsa_50 ?? null,
    pulsa_75: props.setting.pulsa_75 ?? null,
    pulsa_100: props.setting.pulsa_100 ?? null,
    pulsa_200: props.setting.pulsa_200 ?? null,
    pulsa_500: props.setting.pulsa_500 ?? null,
    pulsa_1000: props.setting.pulsa_1000 ?? null,
    pulsa_max: props.setting.pulsa_max ?? null,
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
            Informasi Biaya Pulsa
        </template>

        <template #description>
            Informasi biaya pulsa
        </template>

        <template #form>
            <div class="col-span-2">
                <InputLabel value="Rp 25.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pulsa_25"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pulsa_25" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 50.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pulsa_50"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pulsa_50" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 75.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pulsa_75"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pulsa_75" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 100.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pulsa_100"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pulsa_100" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 200.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pulsa_200"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pulsa_200" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 500.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pulsa_500"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pulsa_500" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 1.000.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pulsa_1000"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pulsa_1000" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Max" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.pulsa_max"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.pulsa_max" class="mt-2" />
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
