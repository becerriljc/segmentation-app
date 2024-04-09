import path from 'node:path'
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

const includeAssets = ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg']
const manifest = {
    name: 'Sistema de Control de Incidencias',
    short_name: 'SDIapp',
    description: 'Plataforma de prevención de robos',
    theme_color: '#246D00',
    background_color: '#246D00',
    display: 'fullscreen',
    scope: '/',
    start_url: '/',
    orientation: 'portrait',
    prefer_related_applications: false,
    icons: [ {
        src: 'icons/android-48.png',
        sizes: '48x48',
        type: 'image/png'
    }, {
        src: 'icons/android-72.png',
        sizes: '72x72',
        type: 'image/png'
    }, {
        src: 'icons/android-96.png',
        sizes: '96x96',
        type: 'image/png'
    }, {
        src: 'icons/android-144.png',
        sizes: '144x144',
        type: 'image/png'
    }, {
        src: 'icons/android-192.png',
        sizes: '192x192',
        type: 'image/png'
    }, {
        src: 'icons/android-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
    }, {
        src: 'icons/ios-40.png',
        sizes: '40x40',
        type: 'image/png'
    }, {
        src: 'icons/ios-50.png',
        sizes: '50x50',
        type: 'image/png'
    }, {
        src: 'icons/ios-64.png',
        sizes: '64x64',
        type: 'image/png'
    }, {
        src: 'icons/ios-72.png',
        sizes: '72x72',
        type: 'image/png'
    }, {
        src: 'icons/ios-87.png',
        sizes: '87x87',
        type: 'image/png'
    }, {
        src: 'icons/ios-100.png',
        sizes: '100x100',
        type: 'image/png'
    }, {
        src: 'icons/ios-144.png',
        sizes: '144x144',
        type: 'image/png'
    }, {
        src: 'icons/ios-180.png',
        sizes: '180x180',
        type: 'image/png'
    }, {
        src: 'icons/ios-192.png',
        sizes: '192x192',
        type: 'image/png'
    }, {
        src: 'icons/ios-256.png',
        sizes: '256x256',
        type: 'image/png'
    }, {
        src: 'icons/ios-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable'
    }, {
        src: 'icons/ios-1024.png',
        sizes: '1024x1024',
        type: 'image/png'
    }, {
        src: 'icons/logo.png',
        sizes: '594x594',
        type: 'image/png',
        purpose: 'any maskable',
    } ],
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA( {
            registerType: 'autoUpdate',
            devOptions: {
                enabled: false,
            },
            includeAssets,
            manifest,
        } ),
    ],
    resolve: {
        alias: {
            '@apis': path.resolve( __dirname, 'src/apis' ),
            '@images': path.resolve( __dirname, 'src/assets/images' ),
            '@sounds': path.resolve( __dirname, 'src/assets/sounds' ),
            '@components': path.resolve( __dirname, 'src/components' ),
            '@constants': path.resolve( __dirname, 'src/constants' ),
            '@context': path.resolve( __dirname, 'src/context' ),
            '@data': path.resolve( __dirname, 'src/data' ),
            '@hooks': path.resolve( __dirname, 'src/hooks' ),
            '@layouts': path.resolve( __dirname, 'src/layouts' ),
            '@pages': path.resolve( __dirname, 'src/pages' ),
            '@redux': path.resolve( __dirname, 'src/redux' ),
            '@routes': path.resolve( __dirname, 'src/routes' ),
            '@styles': path.resolve( __dirname, 'src/styles' ),
            '@types': path.resolve( __dirname, 'src/types' ),
            '@utils': path.resolve( __dirname, 'src/utils' ),
        }
    }
})
