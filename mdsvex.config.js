import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    quotes: true,
    ellipses: true,
    // backticks: 'all',
    dashes: 'inverted'
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
