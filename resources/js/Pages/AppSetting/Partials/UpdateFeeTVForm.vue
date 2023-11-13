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
    tv_25: props.setting.tv_25 ?? null,
    tv_50: props.setting.tv_50 ?? null,
    tv_75: props.setting.tv_75 ?? null,
    tv_100: props.setting.tv_100 ?? null,
    tv_200: props.setting.tv_200 ?? null,
    tv_500: props.setting.tv_500 ?? null,
    tv_1000: props.setting.tv_1000 ?? null,
    tv_max: props.setting.tv_max ?? null,
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
            Informasi Biaya TV
        </template>

        <template #description>
            Informasi biaya tv
        </template>

        <template #form>
            <div class="col-span-2">
                <InputLabel value="Rp 25.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.tv_25"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.tv_25" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 50.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.tv_50"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.tv_50" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 75.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.tv_75"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.tv_75" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 100.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.tv_100"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.tv_100" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 200.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.tv_200"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.tv_200" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 500.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.tv_500"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.tv_500" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Rp 1.000.000" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.tv_1000"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.tv_1000" class="mt-2" />
            </div>

            <div class="col-span-2">
                <InputLabel value="Max" />
                <div class="flex">
                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">
                        Rp
                    </span>
                    <TextInput
                        v-model="form.tv_max"
                        type="number"
                        class="mt-1 block w-full rounded-l-none"
                    />
                </div>
                <InputError :message="form.errors.tv_max" class="mt-2" />
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
