import path from 'path'
import fs from 'fs'
import { parse } from '@vue/compiler-sfc'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
// import { highlight } from 'vitepress/dist/node/markdown/plugins/highlight'
// import { docRoot } from '../utils/paths'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'
import { shikiPlugin } from '@vuepress/plugin-shiki'

// const localMd = MarkdownIt()
// const scriptSetupRE = /<\s*script[^>]*\bsetup\b[^>]*/

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(tokens: Token[], index: number, options: any, env: any, self: Renderer): string
}

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render(tokens, idx) {
      // console.log(tokens)
      const data = (md as any).__data || {}
      const hoistedTags: string[] = data.hoistedTags || (data.hoistedTags = [])

      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        console.log(sourceFile)

        if (sourceFileToken.type === 'inline') {
          source = fs.readFileSync(
            path.resolve(__dirname, '../examples', `${sourceFile}.vue`),
            'utf-8'
          )
          // console.log(source)
          //       const existingScriptIndex = hoistedTags.findIndex((tag) => {
          //         return scriptSetupRE.test(tag)
          //       })
          //       if (existingScriptIndex === -1) {
          //         hoistedTags.push(`
          // <script setup>
          // const demos = import.meta.globEager('../../examples/${sourceFile.split('/')[0]}/*.vue')
          // </script>`)
          //       }
        }
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)

        const code = md.options.highlight && md.options.highlight(source, 'vue', '')

        // const { html, js, css, cssPreProcessor, jsPreProcessor } = generateCodePenSnippet(source)
        return `<Demo source="${encodeURIComponent(code || '')}" path="${sourceFile}">
        `
      } else {
        return '</Demo>'
      }
    }
  } as ContainerOpts)
}

function generateCodePenSnippet(source: string) {
  const { template, script, styles } = parse(source).descriptor
  const css = styles.pop()
  return {
    html: encodeURIComponent(template?.content ?? ''),
    js: encodeURIComponent((script || { content: '' }).content),
    css: encodeURIComponent(css?.content || ''),
    cssPreProcessor: css?.lang || 'none',
    jsPreProcessor: script?.lang || 'none'
  }
}

// export const demoblockPlugin = (
//   { locales = {}, theme = 'github-dark', langs = [], lang = 'vue', scriptImports = [] },
//   app
// ) => {
//   return {
//     name: 'vuepress-plugin-demoblock-plus',
//     // clientAppEnhanceFiles: path.resolve(__dirname, '../client/clientAppEnhance.js'),
//     extendsMarkdown: async (md) => {
//       // await shiki({ theme, langs }).extendsMarkdown(md)
//       md.use(mdPlugin)
//     }
//     // define: {
//     //   __DEMOBLOCK_LOCALES__: { ...defaultLocales, ...locales }
//     // }
//   }
// }

export const demoBlockPlugin = {
  extendsMarkdown: async (md) => {
    const shiki = shikiPlugin as any
    await shiki({ theme: 'github-dark', lang: 'vue' }).extendsMarkdown(md)
    md.use(mdPlugin)
  }
}
