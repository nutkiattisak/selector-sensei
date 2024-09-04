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
