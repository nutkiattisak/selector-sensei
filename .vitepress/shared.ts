import { defineConfig, type HeadConfig } from "vitepress"

export const shared = defineConfig({
  title: "Selector Sensei",
  head: [["link", { rel: "icon", href: "/assets/selector-sensei-logo.png" }]],
})
