<script setup>
const props = defineProps({
    price: Number
})
function formatPrice(value) {
    let val = (value / 1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <template v-if="Number(props.price) < 1000">
        Rp {{ formatPrice(Number(props.price)) }}
    </template>
    <template v-else-if="Number(props.price) < 25000">
        Rp {{ formatPrice(Number(props.price) + Number($page.props.appSetting?.voucher_25)) }}
    </template>
    <template v-else-if="Number(props.price) < 50000">
        Rp {{ formatPrice(Number(props.price) + Number($page.props.appSetting?.voucher_50)) }}
    </template>
    <template v-else-if="Number(props.price) < 75000">
        Rp {{ formatPrice(Number(props.price) + Number($page.props.appSetting?.voucher_75)) }}
    </template>
    <template v-else-if="Number(props.price) < 100000">
        Rp {{ formatPrice(Number(props.price) + Number($page.props.appSetting?.voucher_100)) }}
    </template>
    <template v-else-if="Number(props.price) < 200000">
        Rp {{ formatPrice(Number(props.price) + Number($page.props.appSetting?.voucher_200)) }}
    </template>
    <template v-else-if="Number(props.price) < 500000">
        Rp {{ formatPrice(Number(props.price) + Number($page.props.appSetting?.voucher_500)) }}
    </template>
    <template v-else-if="Number(props.price) < 1000000">
        Rp {{ formatPrice(Number(props.price) + Number($page.props.appSetting?.voucher_1000)) }}
    </template>
    <template v-else>
        Rp {{ formatPrice(Number(props.price) + Number($page.props.appSetting?.voucher_max)) }}
    </template>
</template>
