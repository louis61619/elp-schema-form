# elp-schema-form

this is a component lib base on element-plus

## how to use

```
npm i @l-lib/elps
```

then you can copy this code or see [example](https://louis61619.github.io/elp-schema-form/)

```vue
<template>
  <Form v-model="modelValue" v-bind="formConfig"></Form>
</template>

<script>
import { ref } from 'vue'
import { Form } from '@l-lib/elps'

export default {
  components: {
    Form
  },
  setup() {
    const modelValue = ref({})

    const formConfig = {
      formOptions: {
        hideRequiredAsterisk: true,
        labelPosition: 'top'
      },
      colLayout: {
        span: 24
      },
      formItems: [
        {
          field: 'email',
          label: 'E-mail',
          placeholder: '請輸入E-mail',
          rules: [
            { required: true, trigger: 'blur', message: 'E-mail是必填內容' },
            {
              type: 'email',
              message: '請輸入正確的郵箱地址',
              trigger: 'blur'
            }
          ]
        },
        {
          field: 'account',
          label: '帳號',
          placeholder: '請輸入帳號',
          rules: [
            { required: true, trigger: 'blur', message: '帳號是必填內容' },
            {
              pattern: /^[0-9]{10}$/,
              message: '帳號必須是10位數字',
              trigger: 'blur'
            }
          ]
        },
        {
          field: 'password',
          label: '密碼',
          type: 'password',
          placeholder: '請輸入密碼',
          rules: [
            { required: true, trigger: 'blur', message: '密碼是必填內容' },
            {
              pattern: /^[0-9]{10}$/,
              message: '密碼必須是10位數字',
              trigger: 'blur'
            }
          ]
        }
      ]
    }

    return {
      modelValue,
      formConfig
    }
  }
}
</script>
```

## test in local

if you want test in local with npm link

you need add this in vue.config.js

```js
const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.symlinks(false)
    config.resolve.alias.set('vue', path.resolve('./node_modules/vue'))
    config.module
      .rule('eslint')
      .exclude.add(/@l-lib/)
      .end()
  }
}
```
