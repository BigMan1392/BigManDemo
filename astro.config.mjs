import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Get base path from environment variable or use default
const basePath = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  // Configure as static site generator
  output: 'static',
  
  // GitHub Pages base path - can be overridden via BASE_PATH environment variable
  // For user/org pages, use '/'
  // For project pages, use '/repository-name/'
  base: basePath,

  // Enable React integration
  integrations: [react()],

  // Enable strict mode for better error checking
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
