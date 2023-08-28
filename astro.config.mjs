import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'


// https://astro.build/config
export default defineConfig({
	site: 'https://joviisaus.github.io',
	markdown:{
		remarkPlugins: [remarkParse,remarkMath,remarkRehype],
		rehypePlugins: [rehypeKatex,rehypeStringify]
	  },
	integrations: [mdx(), sitemap()],

});
