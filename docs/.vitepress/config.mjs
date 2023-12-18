import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/0xlinxiuzhu",
  title: "",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '小小的我', link: 'https://0xlinxiuzhu.github.io/collection/' },
      //{ text: 'Examples', link: '/markdown-examples' }
    ],

    //sidebar: [
    //  {
    //    text: 'Examples',
    //    items: [
    //      { text: 'Markdown Examples', link: '/markdown-examples' },
    //      { text: 'Runtime API Examples', link: '/api-examples' }
    //    ]
    //  }
    //],

    //socialLinks: [
    //  { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    //]
  }
})
