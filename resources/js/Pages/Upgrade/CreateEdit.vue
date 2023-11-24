<script setup>
import {onMounted, ref, watch} from "vue";
import {Link, useForm, router} from "@inertiajs/vue3";
import MobileMenu from "@/Components/MobileMenu.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import moment from "moment";
import {Vue3Lottie} from "vue3-lottie";
import BlankLayout from "../../Layouts/BlankLayout.vue";
import ApplicationLogo from "../../Components/ApplicationLogo.vue";

const props = defineProps({

})

const isCameraOpen = ref(false)
const isPhotoTaken = ref(false)
const isShotPhoto = ref(false)
const isLoading = ref(false)
const link = ref('#')

const camcam = ref(null)

onMounted(() => {
    setTimeout(() => toggleCamera(), 1000);
})

function toggleCamera() {
    if(isCameraOpen.value === true) {
        isCameraOpen.value = false;
        isPhotoTaken.value = false;
        isShotPhoto.value = false;
        stopCameraStream();
    } else {
        isCameraOpen.value = true;
        createCameraElement();
    }
}

function createCameraElement() {
    isLoading.value = true;

    const constraints = (window.constraints = {
        audio: false,
        video: true
    });

    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(stream => {
            isLoading.value = false;
            // this.$refs.camera.srcObject = stream;
            camcam.value.srcObject = stream;
        })
        .catch(error => {
            isLoading.value = false;
            alert("May the browser didn't support or there is some errors.");
        });
}

function stopCameraStream() {
    // let tracks = this.$refs.camera.srcObject.getTracks();
    // let tracks = camcam.value.srcObject.getTracks();
    //
    // tracks.forEach(track => {
    //     track.stop();
    // });
}

function takePhoto() {
    if(!isPhotoTaken) {
        isShotPhoto.value = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
            isShotPhoto.value = false;
        }, FLASH_TIMEOUT);
    }

    isPhotoTaken.value = !isPhotoTaken.value;

    // console.log(camcam.value.srcObject)
    const context = document.getElementById("photoTaken").getContext('2d');
    context.drawImage(camcam.value, 0, 0, 450, 337.5);
}

function downloadImage() {
    const download = document.getElementById("downloadPhoto");
    const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
    download.setAttribute("href", canvas);
}

function formattedDate(value) {
    return moment(value).format('DD MMM Y HH:m')
}

function formatPrice(value) {
    let val = (value / 1).toFixed(0).replace('.', '')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

</script>

<template>
    <BlankLayout title="Upgrade">

        <div class="min-h-screen text-center">
            <div class="">
                <h3>Hello bitch</h3>
            </div>
            <div class="mt-10">
                <div class="">
                    <button type="button" class="" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
                        <span v-if="!isCameraOpen">Open Camera</span>
                        <span v-else>Close Camera</span>
                    </button>
                </div>

                <div v-show="isCameraOpen && isLoading" class="my-10">
                    <i class="fa-duotone fa-loader fa-spin text-3xl" />
                </div>

                <div v-if="isCameraOpen" v-show="!isLoading" class="p-3 rounded-3xl" :class="{ 'flash' : isShotPhoto }">
                    <div class="" :class="{'flash' : isShotPhoto}"></div>
                    <video v-show="!isPhotoTaken" ref="camcam" class="rounded-3xl" :width="450" :height="337.5" autoplay></video>
                    <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" class="p-3 rounded-3xl" :width="450" :height="337.5"></canvas>
                </div>

                <div v-if="isCameraOpen && !isLoading" class="mt-2">
                    <button class="" @click="takePhoto">
                        <i class="fa-regular fa-camera text-3xl" />
                    </button>
                </div>

                <div v-if="isPhotoTaken && isCameraOpen" class="">
                    <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
                        Download
                    </a>
                </div>
            </div>
        </div>



    </BlankLayout>
</template>

<!--<style scoped>-->
<!--body {-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--}-->

<!--.web-camera-container {-->
<!--    margin-top: 2rem;-->
<!--    margin-bottom: 2rem;-->
<!--    padding: 2rem;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    justify-content: center;-->
<!--    align-items: center;-->
<!--    border: 1px solid #ccc;-->
<!--    border-radius: 4px;-->
<!--    width: 500px;-->


<!--    .camera-button {-->
<!--        margin-bottom: 2rem;-->
<!--    }-->

<!--    .camera-box {-->
<!--        .camera-shutter {-->
<!--            opacity: 0;-->
<!--            width: 450px;-->
<!--            height: 337.5px;-->
<!--            background-color: #fff;-->
<!--            position: absolute;-->

<!--            &.flash {-->
<!--                opacity: 1;-->
<!--            }-->
<!--        }-->
<!--    }-->

<!--    .camera-shoot {-->
<!--        margin: 1rem 0;-->

<!--        button {-->
<!--            height: 60px;-->
<!--            width: 60px;-->
<!--            display: flex;-->
<!--            align-items: center;-->
<!--            justify-content: center;-->
<!--            border-radius: 100%;-->

<!--            img {-->
<!--                height: 35px;-->
<!--                object-fit: cover;-->
<!--            }-->
<!--        }-->
<!--    }-->

<!--    .camera-loading {-->
<!--        overflow: hidden;-->
<!--        height: 100%;-->
<!--        position: absolute;-->
<!--        width: 100%;-->
<!--        min-height: 150px;-->
<!--        margin: 3rem 0 0 -1.2rem;-->

<!--        ul {-->
<!--            height: 100%;-->
<!--            position: absolute;-->
<!--            width: 100%;-->
<!--            z-index: 999999;-->
<!--            margin: 0;-->
<!--        }-->

<!--        .loader-circle {-->
<!--            display: block;-->
<!--            height: 14px;-->
<!--            margin: 0 auto;-->
<!--            top: 50%;-->
<!--            left: 100%;-->
<!--            transform: translateY(-50%);-->
<!--            transform: translateX(-50%);-->
<!--            position: absolute;-->
<!--            width: 100%;-->
<!--            padding: 0;-->

<!--            li {-->
<!--                display: block;-->
<!--                float: left;-->
<!--                width: 10px;-->
<!--                height: 10px;-->
<!--                line-height: 10px;-->
<!--                padding: 0;-->
<!--                position: relative;-->
<!--                margin: 0 0 0 4px;-->
<!--                background: #999;-->
<!--                animation: preload 1s infinite;-->
<!--                top: -50%;-->
<!--                border-radius: 100%;-->

<!--                &:nth-child(2) {-->
<!--                    animation-delay: .2s;-->
<!--                }-->

<!--                &:nth-child(3) {-->
<!--                    animation-delay: .4s;-->
<!--                }-->
<!--            }-->
<!--        }-->
<!--    }-->

<!--    @keyframes preload {-->
<!--        0% {-->
<!--            opacity: 1-->
<!--        }-->
<!--        50% {-->
<!--            opacity: .4-->
<!--        }-->
<!--        100% {-->
<!--            opacity: 1-->
<!--        }-->
<!--    }-->
<!--}-->
<!--</style>-->
