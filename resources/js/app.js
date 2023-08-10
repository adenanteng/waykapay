import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import { VueClipboard } from '@soerenmartius/vue3-clipboard';
import VueQrcode from '@chenfengyuan/vue-qrcode';

import {Ziggy} from "./ziggy";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    // title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue, Ziggy, VueClipboard, VueQrcode)
            .mount(el);
    },
    progress: {
        color: '#fe2c2c',

        // // Whether to include the default NProgress styles...
        // includeCSS: true,
        //
        // // Whether the NProgress spinner will be shown...
        // showSpinner: true,
    },
});
