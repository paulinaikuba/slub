import { defineConfig } from 'vite'

export default defineConfig({
    base: './',
    root: 'src',
    build: {
        outDir: '../dist'
    },
    server: {
        port: 3000,
        open: true
    },
    // resolve: {
    //     alias: {
    //         "@": fileURLToPath(new URL("./src", import.meta.url)),
    //     },
    // },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `@import "@/assets/scss/global.scss";`,
    //         },
    //     },
    // }
})
