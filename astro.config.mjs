import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import { remarkReadingTime } from './config.plugin/remark-reading-time.mjs';
import { remarkModifiedTime } from './config.plugin/remark-modified-time.mjs';
import 'animate.css';

import astroExpressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: 'https://viisaus.tech',
  markdown: {
    shikiConfig: {
      // 选择 Shiki 内置的主题（或添加你自己的主题）
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'dracula',
      // 另外，也提供了多种主题
      // https://github.com/antfu/shikiji#lightdark-dual-themes
      experimentalThemes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      // 添加自定义语言
      // 注意：Shiki 内置了无数语言，包括 .astro！
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: ['java','c','c++','py'],
      // 启用自动换行，以防止水平滚动
      wrap: true,
    },
    remarkPlugins: [remarkParse, remarkMath, remarkRehype, [remarkToc, {
      heading: "contents"
    }], remarkReadingTime, remarkModifiedTime],
    rehypePlugins: [rehypeKatex, rehypeStringify, rehypeHeadingIds, rehypeSlug, [rehypeAutolinkHeadings, {
      behavior: 'append'
    }]],
    extendDefaultPlugins: true
  },
  integrations: [ astroExpressiveCode(), mdx(), sitemap()]
});