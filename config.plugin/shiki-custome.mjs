
export function shikicustome(){
    return {
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
            langs: ['java','c++','python'],
            // 启用自动换行，以防止水平滚动
            wrap: true,
          },
    }
}
