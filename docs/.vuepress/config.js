module.exports = {
  bundler: '@vuepress/bundler-vite',
  themeConfig: {
    logo: '/logo_soul.png',
    repo: 'https://gitee.com/jsdawn/soul-plus.git',
    editLink: false,

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
