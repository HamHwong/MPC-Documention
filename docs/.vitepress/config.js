const vue = require('@vitejs/plugin-vue')
// import { Options as VuePluginOptions } from '@vitejs/plugin-vue'
const ssrTransformCustomDir = () => {
  return {
    props: [],
    needRuntime: true,
  }
}
module.exports = {
  title: 'MpandaStudio Components Library', // 顶部左侧标题
  base: '/', // 项目的根路径
  lang: 'zh-CN',
  head: [
    // 设置 描述 和 关键词
    [
      'meta',
      {
        name: 'keywords',
        content:
          'MPanda Studio Vue3 UI Components Library/MPanda Studio Vue3 UI组件库',
      },
    ],
    [
      'meta',
      {
        name: 'description',
        content:
          '此UI组件库基于Vue3开发, 从之前开发的项目中提取并转换为Vue3组件。',
      },
    ],
  ],
  themeConfig: {
    sidebar: {
      // 侧边栏
      '/': [
        {
          text: 'Introduction 介绍',
          children: [
            { text: "What's MPC 什么是MPC？", link: '/index.html' },
            { text: 'Start 从起步到芜湖', link: '/guide/start.html' },
            // { text: "Configuration 文件配置", link: "/guide/configuration" },
          ],
        },
        {
          text: 'Components 组件',
          children: [
            { text: 'Card 卡片', link: '/guide/Components/Card.html' },
            { text: 'Carousel 轮播图', link: '/guide/Components/Carousel.html' },
            { text: 'Modal 弹窗', link: '/guide/Components/Modal.html' },
            {
              text: 'PDFReader PDF阅读器',
              link: '/guide/Components/PDFReader.html',
            },
            {
              text: 'Waterfall 瀑布流',
              link: '/guide/Components/Waterfall.html',
            },
          ],
        },
        {
          text: 'Directives 命令',
          children: [
            { text: 'Suspend 悬浮', link: '/guide/Directives/Suspend.html' },
            { text: 'Tooltips 提示框', link: '/guide/Directives/Tooltips.html' },
            { text: 'Blur 模糊', link: '/guide/Directives/Blur.html' },
          ],
        },
        {
          text: 'Utils 工具包',
          children: [
            {
              text: 'isElementInViewport ',
              link: '/guide/Utils/isElementInViewport.html',
            },
          ],
        },
      ],
    },
    nav: [
      // 顶部右侧导航栏
      { text: '介绍', link: '/', activeMatch: '^/$|^/guide/' },
      {
        text: '更多',
        link: '/contact/',
      },
    ],
  },
  vue: { 
    ssr: false,
    template: {
      compilerOptions: {
        directiveTransforms: {
          tooltips: ssrTransformCustomDir,
          suspend: ssrTransformCustomDir,
          blur: ssrTransformCustomDir,
        },
      },
    },
  },
}
