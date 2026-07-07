import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configure as static site generator
  output: 'static',
  
  // GitHub Pages base path - adjust if using a project repository
  // For user/org pages, use '/'
  // For project pages, use '/repository-name/'
  base: '/',

  // Enable strict mode for better error checking
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});
