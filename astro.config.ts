import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import UnoCSS from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    solidJs({ devtools: true }),
    UnoCSS({
      injectReset: true,
    }),
  ],
});
