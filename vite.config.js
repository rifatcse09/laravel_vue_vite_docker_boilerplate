import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

import vue from '@vitejs/plugin-vue'
const path = require('path')

export default defineConfig({
    plugins: [
         vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            "@image": path.resolve(__dirname, '/resources/images'),
            "@css": path.resolve(__dirname, '/resources/css'),
        }
    },
    build: {
        target: 'esnext',
    }
});
