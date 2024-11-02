import { FlatCompat } from "@eslint/eslintrc"
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const configs = [
  eslintPluginPrettierRecommended,

  {
    ignores: [
      "**/node_modules/*",
      "**/out/*",
      "**/.next/*",
      "**/coverage",
      "tailwind.config.js",
      "app/styles/global.css",
    ],
    files: [
      "app/**/*.{ts,tsx}",
      "content/**/*.{ts,tsx}",
      "mijn-ui/**/*.{ts,tsx}",
      "examples/**/*.{ts,tsx}",
    ],
  },

  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next/typescript"),
]

export default configs
