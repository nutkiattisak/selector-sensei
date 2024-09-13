import { defineConfig } from "vitepress"
import { shared } from "./shared"
import { en } from "./en"
import { th } from "./th"

export default defineConfig({
  ...shared,
  locales: {
    root: {
      label: "ภาษาไทย",
      ...th,
    },
    en: {
      label: "English",
      ...en,
    },
  },
})
