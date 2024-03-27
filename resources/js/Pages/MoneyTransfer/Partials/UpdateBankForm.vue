<script setup>
import {Link, router, useForm, usePage} from '@inertiajs/vue3';
import {computed, onMounted, ref} from 'vue'
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import {RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption} from '@headlessui/vue'
import {CheckCircleIcon} from '@heroicons/vue/20/solid'
import moment from "moment";
import Loading from "../../Product/Loading.vue";

const props = defineProps({
  response: Object | String,
  customer_list: undefined,
});

onMounted(() => {
  router.reload({only: ['customer_list']})
})

const category = ref()
const handleCategoryTab = (value) => {
  category.value = value;
  form.reset()
}

const categoryLists = [
  {id: 1, name: 'Sesama Waykapay', icon: 'fa-wallet', desc: 0, disabled: false},
  {id: 2, name: 'Transfer Bank', icon: 'fa-bank', desc: 0, disabled: false},
]

const walletLists = [
  {id: 1, name: 'wkp', title: 'Waykapay', logo: '/img/vendor/WAYKAPAY-LONG.svg', admin: 0, disabled: false},
]

const bankLists = [
  // { id: 1, name: 'wkp', logo: '/img/vendor/WAYKAPAY.svg', admin: 0, disabled: false },
    {id: 2, name: 'CENAIDJA', title: 'BCA', logo: '/img/vendor/BCA.svg', admin: 665, service:335, disabled: false},
    {id: 3, name: 'BNINIDJA', title: 'BNI', logo: '/img/vendor/BNI.svg', admin: 665, service:335, disabled: false},
    {id: 4, name: 'BRINIDJA', title: 'BRI', logo: '/img/vendor/BRI.svg', admin: 665, service:335, disabled: false},
    {id: 5, name: 'BMRIIDJA', title: 'Mandiri', logo: '/img/vendor/MANDIRI.svg', admin: 665, service:335, disabled: false},
    {id: 6, name: 'BBBAIDJA', title: 'Permata Bank', logo: '/img/vendor/PERMATA.svg', admin: 665, service:335, disabled: false},
    {id: 7, name: 'BSMDIDJA', title: 'BSI', logo: '/img/vendor/BSI.svg', admin: 665, service:335, disabled: false},

    {id: 10, name: 'PDLPIDJ1', title: 'BPD Lampung', logo: '/img/vendor/BSI.svg', admin: 665, service:335, disabled: false},

    {id: 100, name: 'APIDIDJ1', title: 'ShopeePay', logo: '/img/vendor/BSI.svg', admin: 665, service:335, disabled: false},
    {id: 101, name: 'DANAIDJ1', title: 'Dana', logo: '/img/vendor/BSI.svg', admin: 665, service:335, disabled: false},
    {id: 103, name: 'ACRIOVO1', title: 'OVO', logo: '/img/vendor/BSI.svg', admin: 665, service:335, disabled: false},
    {id: 104, name: 'ACRIGPY1', title: 'Gopay', logo: '/img/vendor/BSI.svg', admin: 665, service:335, disabled: false},
]

const form = useForm({
  bank: null,
  account_no: '',
});

const storeInformation = () => {
  if (form.bank == null) {
    form.bank = walletLists[0]
  }
  form.post(route('money-transfer.amount'), {
    errorBag: 'storeInformation',
    preserveScroll: true,
    // replace: true,
    onSuccess: () => {
    }
  });
};

function formatPrice(value) {
  let val = (value / 1).toFixed(0).replace('.', '')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

const clock = moment().format('HH')

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue'

</script>

<template>
  <FormSection>
    <template #title>
      Mau transfer kemana?
    </template>

    <template #description>

    </template>

    <template #form>
      <div class="col-span-6">
        <RadioGroup>
          <div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4">
            <RadioGroupOption
                @click="handleCategoryTab(item.id)"
                as="template"
                v-for="item in categoryLists"
                :key="item.id"
                :value="item"
                v-slot="{ checked, active }"
                :disabled="item.disabled"
                :class="item.disabled ? 'bg-gray-200 opacity-75' : '' "
            >
              <div
                  :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-primary-500 ring-2 ring-primary-500' : '', 'relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none']">
                <div class="flex flex-1 justify-center items-center h-full">
                  <div class="inline-flex items-center">
                    <!--                                    <img :src="item.logo" class="h-7" alt=""/>-->
                    <i class="fa-duotone text-primary-600 text-lg mr-2" :class="item.icon"/>
                    <RadioGroupDescription as="span" class="flex text-sm font-medium text-gray-900">{{
                        item.name
                      }}
                    </RadioGroupDescription>
                  </div>
                </div>
                <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600']" aria-hidden="true"/>
                <span
                    :class="[active ? 'border' : 'border-2', checked ? 'border-primary-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-3xl']"
                    aria-hidden="true"/>
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
      </div>
    </template>
  </FormSection>

  <template v-if="category==1">
    <FormSection @submitted="storeInformation">
      <template #title>
        Nomor handphone tujuan
      </template>

      <template #description>

      </template>

      <template #form>
        <div class="col-span-6">
          <InputLabel for="amount" value="Nomor handphone tujuan"/>
          <!--                <div class="flex">-->
          <!--                    <span class="flex items-center bg-white text-black border border-gray-300 border-r-0 rounded-3xl rounded-r-none shadow-sm mt-1 px-3 ">-->
          <!--                        08-->
          <!--                    </span>-->
          <TextInput
              id="account_no"
              v-model="form.account_no"
              type="number"
              class="mt-1 block w-full"
              required
          />
          <!--                </div>-->
          <InputError :message="form.errors.account_no" class="mt-2"/>
        </div>

      </template>

      <template #actions>
        <ActionMessage :on="form.recentlySuccessful" class="mr-3">
          Berhasil disimpan.
        </ActionMessage>

        <ActionMessage :on="clock>=23" class="mr-3">
          Sistem cut off.
        </ActionMessage>

        <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.account_no === ''  || clock>=23">
          Lanjutkan
        </PrimaryButton>
      </template>
    </FormSection>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 rounded-3xl bg-white bg-opacity-20 backdrop-blur-sm shadow-lg border border-gray-300 divide-y sm:divide-y-0 divide-gray-300 dark:divide-gray-600">
      <template v-if="props.customer_list === undefined">
        <Loading/>
      </template>

      <template v-else-if="form.account_no.length <= 1" v-for="cust in props.customer_list">
        <li class="relative px-6 py-5 flex items-center space-x-3">
          <div class="flex-shrink-0">
            <img class="w-10" :src="'/img/vendor/' + cust.brand + '.png'" alt="">
            <!--                        <img class="w-10" :src="'/img/vendor/' + cust.brand + '.svg'" alt="">-->
          </div>

          <div @click="form.account_no = cust.customer_no" class="flex-1 min-w-0">
            <button @click="" class="focus:outline-none text-left">
              <span class="absolute inset-0" aria-hidden="true"></span>
              <p class="text-sm font-medium text-gray-900">{{ cust.customer_name }}</p>
              <p class="text-sm text-gray-500 truncate">{{ cust.customer_no }}</p>
            </button>
          </div>
        </li>
      </template>
    </ul>

  </template>

  <FormSection @submitted="storeInformation" v-if="category==2">
    <template #title>
      Bank dan nomor rekening tujuan
    </template>

    <template #description>

    </template>

    <template #form>
      <div class="col-span-6">
        <InputLabel for="amount" value="Bank tujuan"/>
        <Listbox v-model="form.bank">
          <div class="relative mt-1">
            <ListboxButton class="relative w-full cursor-pointer text-left bg-white py-2 pl-3 pr-10 text-black border border-gray-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 rounded-3xl shadow-sm">
              <span class="block truncate">{{ form.bank?.title ?? 'Pilih Bank' }}</span>
              <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <i class="fa-regular fa-arrows-up-down text-gray-400 mr-2"/>
              </span>
            </ListboxButton>

<!--            <transition-->
<!--                leave-active-class="transition duration-100 ease-in"-->
<!--                leave-from-class="opacity-100"-->
<!--                leave-to-class="opacity-0"-->
<!--            >-->
              <ListboxOptions class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-3xl bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                <ListboxOption
                    v-slot="{ active, selected }"
                    v-for="person in bankLists"
                    :key="person.name"
                    :value="person"
                    as="template"
                    :disabled="person.disabled"
                >
                  <li :class="[ active ? 'bg-primary-100 text-primary-900' : 'text-gray-900', 'relative cursor-pointer select-none py-2 pl-10 pr-4', ]">
<!--                    <img :src="person.logo" class="h-5" alt="" />-->
                    <span :class="[selected ? 'font-medium' : 'font-normal', 'block truncate',]">{{ person.title }}</span>
                    <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3 text-primary-600">
                      <i class="fa-duotone fa-check" />
                    </span>
                    <span v-if="person.disabled" class="absolute inset-y-0 flex items-center right-0 pr-3 text-xs text-red-400 font-medium">Tidak tersedia</span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
<!--            </transition>-->
          </div>
        </Listbox>


<!--        <RadioGroup v-model="form.bank">-->
<!--          <div class="mt-4 grid grid-cols-2 gap-y-6 sm:grid-cols-3 gap-x-4">-->
<!--            <RadioGroupOption-->
<!--                as="template"-->
<!--                v-for="item in bankLists"-->
<!--                :key="item.id"-->
<!--                :value="item"-->
<!--                v-slot="{ checked, active }"-->
<!--                :disabled="item.disabled"-->
<!--                :class="item.disabled ? 'bg-gray-200 opacity-75' : '' "-->
<!--            >-->
<!--              <div-->
<!--                  :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'border-primary-500 ring-2 ring-primary-500' : '', 'relative flex py-4 px-2 cursor-pointer rounded-3xl border shadow-sm focus:outline-none']">-->
<!--                <div class="flex flex-1 justify-center items-center h-full">-->
<!--                  &lt;!&ndash;                                    <div class="flex flex-col items-center">&ndash;&gt;-->
<!--                  <img :src="item.logo" class="h-7" alt=""/>-->
<!--                  &lt;!&ndash;                                    <RadioGroupDescription as="span" class="mt-1 flex text-sm text-gray-500">{{ item.adminFee }}</RadioGroupDescription>&ndash;&gt;-->
<!--                  &lt;!&ndash;                                    <RadioGroupDescription as="span" class="mt-1 flex text-sm text-gray-500">{{ mailingList.adminFee }}</RadioGroupDescription>&ndash;&gt;-->
<!--                  &lt;!&ndash;                                    </div>&ndash;&gt;-->
<!--                </div>-->
<!--                <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-primary-600']" aria-hidden="true"/>-->
<!--                <span-->
<!--                    :class="[active ? 'border' : 'border-2', checked ? 'border-primary-500' : 'border-transparent', 'pointer-events-none absolute -inset-px rounded-3xl']"-->
<!--                    aria-hidden="true"/>-->
<!--              </div>-->
<!--            </RadioGroupOption>-->
<!--          </div>-->
<!--        </RadioGroup>-->

        <InputError :message="form.errors.bank" class="mt-2"/>

        <div class="col-span-6 mt-5" >
          <InputLabel for="amount" value="Nomor rekening tujuan"/>
          <TextInput
              id="account_no"
              v-model="form.account_no"
              type="number"
              class="mt-1 block w-full"
              required
          />
          <InputError :message="form.errors.account_no" class="mt-2"/>
        </div>
      </div>

    </template>

    <template #actions>
      <ActionMessage :on="form.recentlySuccessful" class="mr-3">
        Berhasil disimpan.
      </ActionMessage>

      <ActionMessage :on="clock>=23" class="mr-3">
        Sistem cut off.
      </ActionMessage>

      <PrimaryButton :class="{ 'opacity-25': form.processing }"
                     :disabled="form.bank === null || form.account_no === ''  || clock>=23">
        Lanjutkan
      </PrimaryButton>
    </template>
  </FormSection>

</template>
