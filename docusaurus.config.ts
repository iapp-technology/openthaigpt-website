import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenThaiGPT',
  tagline: 'โมเดลภาษาขนาดใหญ่ Free และ Opensource เพื่อคนไทยทุกคน',
  favicon: 'img/favicon.png',

  url: 'https://openthaigpt.aieat.or.th',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // Content is Thai-first (the old GitBook wrongly declared lang="en").
  i18n: {
    defaultLocale: 'th',
    locales: ['th'],
  },

  // .md files (the converted GitBook content) are parsed as CommonMark so the
  // exported raw HTML (tables, <mark style>, <br>) works without MDX escaping.
  markdown: {
    format: 'detect',
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  future: {
    v4: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        // lunr-languages' Thai tokenizer crashes lunr at index time
        // (token.update is not a function); whitespace tokenization still
        // indexes Thai text with acceptable recall.
        language: ['en'],
        docsRouteBasePath: '/',
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig: {
    image: 'img/otg-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'otg-1-6-r1',
      content:
        '🚀 OpenThaiGPT 1.6 72b และ OpenThaiGPT R1 32b เปิดให้ใช้งานแล้ว — <a target="_blank" rel="noopener noreferrer" href="https://huggingface.co/openthaigpt">ดาวน์โหลดที่ Hugging Face</a>',
      backgroundColor: '#101b3f',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'OpenThaiGPT',
      logo: {
        alt: 'OpenThaiGPT',
        src: 'img/logo.png',
      },
      items: [
        {to: '/web-demo', label: 'Web Demo', position: 'right'},
        {
          href: 'https://huggingface.co/openthaigpt',
          label: 'Hugging Face',
          position: 'right',
        },
        {
          href: 'https://github.com/OpenThaiGPT',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'เอกสาร',
          items: [
            {label: 'หน้าแรก', to: '/'},
            {label: 'OpenThaiRAG', to: '/openthairag'},
            {label: 'Colab Demo', to: '/colab-demo'},
          ],
        },
        {
          title: 'ชุมชน',
          items: [
            {label: 'Discord', href: 'https://discord.gg/CyJPrkZ2Ku'},
            {
              label: 'Facebook Group',
              href: 'https://web.facebook.com/groups/openthaigpt',
            },
            {
              label: 'Hugging Face',
              href: 'https://huggingface.co/openthaigpt',
            },
          ],
        },
        {
          title: 'องค์กร',
          items: [
            {label: 'AIEAT', href: 'https://aieat.or.th'},
            {label: 'iApp Technology', href: 'https://iapp.co.th'},
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} สมาคมผู้ประกอบการปัญญาประดิษฐ์ประเทศไทย (AIEAT) · OpenThaiGPT — Free and Open-source Thai LLM`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
