import { defineMDSveXConfig as defineConfig } from "mdsvex";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../");

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

  layout: {
    _: path.join(dirname, "./src/lib/offerLayout.svelte"),
  }
});

export default config;
