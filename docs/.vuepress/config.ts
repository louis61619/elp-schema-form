// const { path } = require('@vuepress/utils')
import { path } from '@vuepress/utils'
import { demoBlockPlugin } from '../plugin'

const locales = {
  '/': {
    'hide-text': 'Hide',
    'show-text': 'Expand',
    'copy-button-text': 'Copy',
    'copy-success-text': 'Copy success'
  },
  '/zh': {
    'hide-text': '隐藏代码',
    'show-text': '显示代码',
    'copy-button-text': '复制代码片段',
    'copy-success-text': '复制成功'
  }
}

export default {
  title: 'elp-schema-form', // 顶部左侧标题
  description: 'Vue3 + ElementPlus 组件库',
  bundler: '@vuepress/webpack',
  clientAppEnhanceFiles: path.resolve(__dirname, './clientAppEnhance.ts'),
  alias: {
    '@elp-json-schema': path.resolve(__dirname, '../../packages'),
    example: path.resolve(__dirname, '../examples')
  },

  plugins: [
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, '../examples')
      }
    ],
    [demoBlockPlugin]
  ],

  // markdown: {
  //   config: (md) => mdPlugin(md)
  // },

  themeConfig: {
    // logo: '/logo_soul.png',
    // repo: 'https://gitee.com/jsdawn/soul-plus.git',
    // editLink: false,

    // navbar: [
    //   { text: '指南', link: '/' },
    //   {
    //     text: '组件',
    //     link: '/components/button',
    //     activeMatch: '/components/'
    //   }
    // ],

    sidebar: {
      '/': [
        {
          text: '指南',
          children: ['/README.md']
        },
        {
          text: '組件',
          children: ['/components/button.md']
        }
      ]
      // '/components/': [
      //   {
      //     text: '組件',
      //     children: ['/components/button.md']
      //   }
      // ]
    }
  }
}
