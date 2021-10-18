test in local

if you want test in local with npm link

you need add this in vue.config.js

```
const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
    config.resolve.alias.set('vue', path.resolve('./node_modules/vue'))
    config.module
      .rule('eslint')
      .exclude.add(/elp-schema-form/)
      .end()
  }
}

```
