import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable strict mode for better error checking
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
