import svgLoader from 'vite-svg-loader';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // app: {
  //   head: {
  //     link
  //   }
  // }
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables.scss" as *;\n',
        },
      },
    },
    plugins: [svgLoader()],
  },
  devServer: {
    host: '0.0.0.0', // Разрешить доступ из локальной сети
    port: 3000,
  },
});
