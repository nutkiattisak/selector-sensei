import { defineConfig, type DefaultTheme } from "vitepress"

export const th = defineConfig({
  lang: "th",
  themeConfig: {
    nav: [
      { text: "หน้าแรก", link: "/" },
      { text: "เข้าสู่บทเรียน", link: "/content" },
    ],
    sidebar: {
      "/content/": { base: "/content/", items: sidebarContent() },
    },
    outline: {
      label: "สารบัญ",
    },
    docFooter: {
      next: "หน้าถัดไป",
      prev: "หน้าก่อนหน้า",
    },
    lastUpdated: {
      text: "อัปเดตล่าสุดเมื่อวันที่",
      formatOptions: {
        timeZone: "Asia/Bangkok",
        day: "numeric",
        month: "long",
        year: "numeric",
        forceLocale: true,
        hour: "numeric",
        minute: "numeric",
      },
    },
    editLink: {
      pattern:
        "https://github.com/nutkiattisak/selector-sensei/tree/main/:path",
      text: "แก้ไขหน้านี้บน GitHub",
    },
  },
})

function sidebarContent(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "[DRAFT] Intro to CSS Selectors",
      link: "/",
      items: [
        {
          text: "General Selectors",
          collapsed: true,
          items: [
            {
              text: "Universal Selector",
              link: "/general-selectors/universal-selector",
            },
            {
              text: "Type Selector",
              link: "/general-selectors/type-selector",
            },
            {
              text: "Class Selector",
              link: "/general-selectors/class-selector",
            },
            {
              text: "ID Selector",
              link: "/general-selectors/id-selector",
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
              link: "/content/combinator-selectors/child-selector",
            },
            {
              text: "Adjacent Sibling Selector",
              link: "/content/combinator-selectors/adjacent-sibling-selector",
            },
            {
              text: "General Sibling Selector",
              link: "/content/combinator-selectors/general-sibling-selector",
            },
          ],
        },
        {
          text: "Pseudo-class Selectors",
          collapsed: true,
          items: [
            {
              text: "Dynamic Pseudo-classes",
              link: "/pseudo-class-selectors/dynamic-pseudo-classes",
            },
            {
              text: "🚧 User Action Pseudo-classes",
            },
            {
              text: "🚧 Target Pseudo-class",
            },
            {
              text: "🚧 Structural Pseudo-classes",
              link: "/pseudo-class-selectors/structural-pseudo-classes",
            },
          ],
        },
        {
          text: "Pseudo-element Selectors",
          collapsed: true,
          items: [
            {
              text: "Pseudo-element",
              link: "/pseudo-element-selectors/pseudo-element",
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
  ]
}
