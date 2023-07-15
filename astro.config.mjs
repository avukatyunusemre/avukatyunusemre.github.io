import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://avyunusemreyasar.com",
  integrations: [sitemap({
    changefreq: "weekly",
    lastmod: new Date()
  })]
});
