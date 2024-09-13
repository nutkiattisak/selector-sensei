import { defineConfig, type HeadConfig } from "vitepress"

export const shared = defineConfig({
  title: "Selector Sensei",
  head: [["link", { rel: "icon", href: "/assets/selector-sensei-logo.png" }]],
  rewrites: {
    "th/:rest*": ":rest*",
  },
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  themeConfig: {
    logo: "/assets/selector-sensei-logo.png",
    search: {
      provider: "local",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/nutkiattisak/selector-sensei",
      },
    ],
  },
})
