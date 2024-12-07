import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://jeremyliguori.com',
    image: {
        domains: ['admin.jeremyliguori.com']
    }
});