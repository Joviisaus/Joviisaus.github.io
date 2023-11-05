import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeStringify from 'rehype-stringify'
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import { remarkReadingTime } from './config.plugin/remark-reading-time.mjs';
import { remarkModifiedTime } from './config.plugin/remark-modified-time.mjs';
import 'animate.css'


// https://astro.build/config
export default defineConfig({
	site: 'https://joviisaus.github.io',
	markdown:{
		remarkPlugins: [remarkParse,remarkMath,remarkRehype,[remarkToc, { heading: "contents" }],remarkReadingTime,remarkModifiedTime],
		rehypePlugins: [rehypeKatex,rehypeStringify,rehypeHeadingIds,rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append'}]],
	},
	integrations: [mdx(), sitemap()],

});
