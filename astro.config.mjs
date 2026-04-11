import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import webmanifest from "astro-webmanifest";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), webmanifest({
    name: 'InNCAFA Trilogi 2024',
    short_name: 'InNCAFA 2024',
    description: 'The International and National Conference on Accounting & Fraud Auditing (NCAFA) is a national level conference in the field of accounting and auditing which has a series of Call for Paper and Seminar activities.',
    theme_color: "rgba(86,182,74,1)",
    background_color: '#ffffff',
    start_url: '/',
    display: 'standalone',
    icons: [{
      "src": "icon/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    }, {
      "src": "icon/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    }, {
      "src": "icon/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    }, {
      "src": "icon/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }]
  })],
  output: "server",
  adapter: netlify()
});