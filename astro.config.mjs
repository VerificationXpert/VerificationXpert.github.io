import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: "https://www.verificationxpert.com",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
    sitemap(),
    partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ],
  redirects: {
    '/courses.html': '/courses'
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});