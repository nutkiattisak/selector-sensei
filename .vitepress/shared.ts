import { defineConfig, type HeadConfig } from "vitepress"

export const shared = defineConfig({
  title: "Selector Sensei",
  head: [
    ["link", { rel: "icon", href: "/assets/selector-sensei-logo.png" }],
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=GTM-MK8WHMCS",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GTM-MK8WHMCS');`,
    ],
  ],
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
