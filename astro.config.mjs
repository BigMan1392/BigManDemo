import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// Get base path from environment variable or use default
// For project repositories, use '/repository-name/'
// For user/org pages, use '/'
const basePath = process.env.BASE_PATH || '/BigManDemo/';

// https://astro.build/config
export default defineConfig({
  // Configure as static site generator
  output: 'static',

  // GitHub Pages site URL
  site: 'https://bigman1392.github.io',
  
  // GitHub Pages base path - can be overridden via BASE_PATH environment variable
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
