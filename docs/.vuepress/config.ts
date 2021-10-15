// const { path } = require('@vuepress/utils')
import { path } from '@vuepress/utils'
import { demoBlockPlugin } from '../plugin'

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

  markdown: {
    code: {
      lineNumbers: false
    }
    // config: (md) => mdPlugin(md)
  },

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
          children: ['/components/form.md']
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
