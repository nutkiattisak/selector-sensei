import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Selector Sensei",
  description: "Learning CSS Selector",
  head: [["link", { rel: "icon", href: "/assets/selector-sensei-logo.png" }]],
  rewrites: {
    "th/:rest*": ":rest*",
  },
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  locales: {
    root: {
      label: "ภาษาไทย",
      lang: "th",
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en",
    },
  },
  themeConfig: {
    logo: "/assets/selector-sensei-logo.png",
    nav: [{ text: "เข้าสู่บทเรียน", link: "/content" }],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "[DRAFT] Intro to CSS Selectors",
        link: "/content",
        items: [
          {
            text: "General Selectors",
            collapsed: true,
            items: [
              {
                text: "Universal Selector",
                link: "/content/general-selectors/universal-selector",
              },
              {
                text: "Type Selector",
                link: "/content/general-selectors/type-selector",
              },
              {
                text: "Class Selector",
                link: "/content/general-selectors/class-selector",
              },
              {
                text: "ID Selector",
                link: "/content/general-selectors/id-selector",
              },
            ],
          },
          {
            text: "Combinator Selectors",
            collapsed: true,
            items: [
              {
                text: "Descendant Selector",
                link: "/content/combinator-selectors/descendant-selector",
              },
              {
                text: "Child Selector",
              },
              {
                text: "🚧 Adjacent Sibling Selector",
              },
              {
                text: "🚧 General Sibling Selector",
              },
            ],
          },
          {
            text: "Pseudo-class Selectors",
            collapsed: true,
            items: [
              {
                text: "🚧 Dynamic Pseudo-classes",
              },
              {
                text: "🚧 User Action Pseudo-classes",
              },
              {
                text: "🚧 Target Pseudo-class",
              },
              {
                text: "🚧 Structural Pseudo-classes",
              },
            ],
          },
          {
            text: "Pseudo-element Selectors",
            collapsed: true,
            items: [
              {
                text: "🚧 Pseudo-element",
              },
            ],
          },
          {
            text: "Attribute Selectors",
            collapsed: true,
            items: [
              {
                text: "🚧 Existence Attribute Selector",
              },
              {
                text: "🚧 Equality Attribute Selector",
              },
              {
                text: "🚧 Substring Attribute Selector",
              },
              {
                text: "🚧 Prefix Attribute Selector",
              },
              {
                text: "🚧 Suffix Attribute Selector",
              },
              {
                text: "🚧 Substring Attribute Selector",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/nutkiattisak/selector-sensei",
      },
    ],
  },
})
