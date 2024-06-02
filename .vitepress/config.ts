import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'HiFan',
  description: 'HiFan Docs',
  srcDir: 'docs',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
    ['meta', { property: 'og:url', content: 'https://hifan.shiux.com' }],
    ['meta', { property: 'og:image', content: 'https://haifan.shiux.com/logo.svg' }],
    ['meta', { property: 'og:type', content: 'website' }]
  ],
  lastUpdated: true,
  cleanUrls: true,
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      description: 'Time tracker | 时间追踪软件',
      themeConfig: {
        sidebar: {
          '/guide/': {
            base: '/guide/',
            items: [
              {
                text: 'Guide',
                items: [
                  {
                    text: 'What is shion?',
                    link: '/what-is-shion'
                  },
                  {
                    text: 'Feature',
                    collapsed: false,
                    items: [
                      {
                        text: 'Overview',
                        link: 'overview'
                      },
                      {
                        text: 'Timeline',
                        link: 'timeline'
                      },
                      {
                        text: 'Collection',
                        link: 'collection'
                      },
                      {
                        text: 'Record',
                        link: 'record'
                      },
                      {
                        text: 'Browser history',
                        link: 'history'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        nav: [
          { text: 'Guide', link: '/guide/what-is-shion' },
          { text: 'Download', link: '/download' }
        ]
      }
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh/',
      description: '时间追踪软件',
      themeConfig: {
        sidebar: {
          '/zh/guide/': {
            base: '/zh/guide/',
            items: [
              {
                text: '指南',
                items: [
                  {
                    text: '什么是 shion?',
                    link: '/what-is-shion'
                  },
                  {
                    text: '功能',
                    collapsed: false,
                    items: [
                      {
                        text: '总览',
                        link: 'overview'
                      },
                      {
                        text: '时间线',
                        link: 'timeline'
                      },
                      {
                        text: '数据集合',
                        link: 'collection'
                      },
                      {
                        text: '记录',
                        link: 'record'
                      },
                      {
                        text: '浏览器历史记录',
                        link: 'history'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        },
        nav: [
          { text: '指南', link: '/zh/guide/what-is-shion' },
          { text: '下载', link: '/zh/download' }
        ]
      }
    }
  },
  themeConfig: {
    logo: '/logo.svg',
    socialLinks: [{ icon: 'github', link: 'https://github.com/hifan-app/hifan' }],
    editLink: {
      pattern: 'https://github.com/hifan-app/docs/tree/main/docs/:path'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    footer: {
      copyright: 'Copyright © 2024 hifan-app'
    }
  }
})
