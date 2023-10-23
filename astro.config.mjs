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




// https://astro.build/config
export default defineConfig({
	site: 'https://joviisaus.github.io',
	markdown:{
		remarkPlugins: [remarkParse,remarkMath,remarkRehype,[remarkToc, { heading: "contents" }]],
		rehypePlugins: [rehypeKatex,rehypeStringify,rehypeHeadingIds,rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'append'}]],
	},
	integrations: [mdx(), sitemap()],

});
