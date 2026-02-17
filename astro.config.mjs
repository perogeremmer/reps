// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
  theme: 'github-dark',
  keepBackground: false,
  defaultLang: 'plaintext',
  transformers: [
    {
      pre(node) {
        node.properties['data-theme'] = 'dark';
      },
    },
  ],
};

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  markdown: {
    syntaxHighlight: false, // Disable default Shiki
    rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
  },
});
