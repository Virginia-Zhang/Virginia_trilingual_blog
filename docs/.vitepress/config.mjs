import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Blog",
  description: "Virginia's awesome tech blog world",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/hot.png",
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
    // 页脚
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025 Virginia Zhang",
    },

    // 搜索
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
          ja: {
            translations: {
              button: {
                buttonText: "ドキュメントを検索",
                buttonAriaLabel: "ドキュメントを検索",
              },
              modal: {
                noResultsText: "関連する結果が見つかりません",
                resetButtonTitle: "検索条件をクリア",
                footer: {
                  selectText: "選択",
                  navigateText: "切り替え",
                },
              },
            },
          },
        },
      },
    },
  },
  // 多语言配置
  locales: {
    root: {
      label: "中文",
      lang: "zh-CN",
      title: "我的个人博客",
      description: "分享技术与生活",
      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "关于", link: "/about" },
          { text: "文章", link: "/posts/" },
        ],
        sidebar: [
          {
            text: "最新文章",
            items: [{ text: "欢迎来到我的博客", link: "/posts/welcome" }],
          },
        ],
      },
    },
    ja: {
      label: "日本語",
      lang: "ja-JP",
      title: "マイブログ",
      description: "テクノロジーと生活をシェア",
      themeConfig: {
        nav: [
          { text: "ホーム", link: "/ja/" },
          { text: "について", link: "/ja/about" },
          { text: "記事", link: "/ja/posts/" },
        ],
        sidebar: [
          {
            text: "最新記事",
            items: [{ text: "ブログへようこそ", link: "/ja/posts/welcome" }],
          },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      title: "My Blog",
      description: "Sharing tech and life",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "About", link: "/en/about" },
          { text: "Posts", link: "/en/posts/" },
        ],
        sidebar: [
          {
            text: "Latest Posts",
            items: [{ text: "Welcome to My Blog", link: "/en/posts/welcome" }],
          },
        ],
      },
    },
  },
});
