import { defineConfig, type DefaultTheme } from "vitepress"

export const en = defineConfig({
  lang: "en",
  themeConfig: {
    nav: [
      { text: "Home", link: "/en" },
      { text: "Enter the lesson", link: "/en/content" },
    ],
    sidebar: {
      "/en/content/": { base: "/en/content/", items: sidebarContent() },
    },
    docFooter: {
      next: "Next page",
      prev: "Previous page",
    },
    lastUpdated: {
      text: "Last updated",
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
      text: "Edit this page on GitHub",
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
              link: "/combinator-selectors/descendant-selector",
            },
            {
              text: "Child Selector",
              link: "/combinator-selectors/child-selector",
            },
            {
              text: "Adjacent Sibling Selector",
              link: "/combinator-selectors/adjacent-sibling-selector",
            },
            {
              text: "General Sibling Selector",
              link: "/combinator-selectors/general-sibling-selector",
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
  ]
}
