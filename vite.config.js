import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    server: {
        port: 3000,
        host: true,
        hmr: {
            host: 'localhost',
        }
    },
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
                compilerOptions: { // here
                    isCustomElement: tag => tag === 'lottie-player'
                }
            },
        }),
    ],
});
