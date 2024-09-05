import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Selector Sensei",
  description: "Learning CSS Selector",
  head: [["link", { rel: "icon", href: "/assets/selector-sensei-logo.png" }]],
  themeConfig: {
    logo: "/assets/selector-sensei-logo.png",
    nav: [{ text: "เข้าสู่บทเรียน", link: "/content" }],
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "[DRAFT] Intro to CSS Selectors",
        items: [
          {
            text: "ยินดีต้อนรับ",
            link: "/content/welcome",
          },
          {
            text: "General Selectors",
            items: [
              {
                text: "🚧 Universal Selector",
              },
              {
                text: "🚧 Type Selector",
              },
              {
                text: "🚧 Class Selector",
              },
              {
                text: "🚧 ID Selector",
              },
            ],
          },
          {
            text: "Combinator Selectors",
            items: [
              {
                text: "🚧 Descendant Selector",
              },
              {
                text: "🚧 Child Selector",
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
            items: [
              {
                text: "🚧 Pseudo-element",
              },
            ],
          },
          {
            text: "Attribute Selectors",
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
