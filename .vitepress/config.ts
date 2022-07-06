import { defineConfig } from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { demoBlockPlugin } from 'vitepress-theme-demoblock'

export default defineConfig({
  lang: 'zh-CN',
  title: 'hbs-design',
  description: 'A component library for Vue 3.',

  srcDir: './src',
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: '组件', link: '/components/button/' }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/Hongbusi' },
      { icon: 'github', link: 'https://github.com/Hongbusi/hbs-design' }
    ],

    editLink: {
      pattern: 'https://github.com/Hongbusi/hbs-design/edit/main/src/:path',
      text: '建议更改此页面'
    },

    footer: {
      copyright: 'Copyright © 2022-present Hongbusi.'
    }
  },

  markdown: {
    config: (md) => {
      md.use(demoBlockPlugin)
    }
  },

  vite: {
    plugins: [
      vueJsx()
    ]
  }
})
