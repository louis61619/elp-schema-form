// const { path } = require('@vuepress/utils')
import { path } from '@vuepress/utils'
import { demoBlockPlugin } from '../plugin'

export default {
  title: '@l-lib', // 顶部左侧标题
  description: 'Vue3 + ElementPlus 组件库',
  bundler: '@vuepress/webpack',
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
  alias: {
    'elp-json-schema': path.resolve(__dirname, '../../packages')
  },

  plugins: [[demoBlockPlugin]],

  markdown: {
    code: {
      lineNumbers: false
    }
    // config: (md) => mdPlugin(md)
  },

  themeConfig: {
    // logo: '/logo.png',
    repo: 'https://github.com/louis61619/elp-schema-form',
    darkMode: false,
    // editLink: false,

    navbar: [
      { text: '介紹', link: '/' },
      {
        text: '组件',
        link: '/components/form'
      }
    ],

    sidebar: {
      '/': [
        {
          text: '介紹',
          children: ['/README.md']
        }
        // {
        //   text: '組件',
        //   children: ['/components/form.md']
        // }
      ],
      '/components/': [
        '/components/overview.md',
        {
          text: '組件',
          children: ['/components/form.md']
        }
      ]
    }
  }
}
