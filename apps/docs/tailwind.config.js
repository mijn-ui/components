import { createPreset } from "fumadocs-ui/tailwind-plugin"
import tailwindAnimate from "tailwindcss-animate"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/fumadocs-ui/dist/**/*.js",

    "../../packages/mijn-ui/src/**/*.{ts,tsx}",

    "./app/**/*.{ts,tsx}",
    "./examples/**/*.{ts,html,tsx}",
    "./content/**/*.{ts,tsx,md,mdx}",
  ],
  presets: [createPreset()],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "hsl(var(--mijnui-main) / <alpha-value>)",
          text: "hsl(var(--mijnui-main-text) / <alpha-value>)",
          border: "hsl(var(--mijnui-main-border) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "hsl(var(--mijnui-surface) / <alpha-value>)",
          text: "hsl(var(--mijnui-surface-text) / <alpha-value>)",
        },

        neutral: {
          DEFAULT: "hsl(var(--mijnui-neutral) / <alpha-value>)",
          text: "hsl(var(--mijnui-neutral-text) / <alpha-value>)",
        },

        accent: {
          DEFAULT: "hsl(var(--mijnui-accent) / <alpha-value>)",
          text: "hsl(var(--mijnui-accent-text) / <alpha-value>)",
        },

        primary: {
          DEFAULT: "hsl(var(--mijnui-primary) / <alpha-value>)",
          text: "hsl(var(--mijnui-primary-text) / <alpha-value>)",
        },

        secondary: {
          DEFAULT: "hsl(var(--mijnui-secondary) / <alpha-value>)",
          text: "hsl(var(--mijnui-secondary-text) / <alpha-value>)",
        },

        info: {
          DEFAULT: "hsl(var(--mijnui-info) / <alpha-value>)",
          text: "hsl(var(--mijnui-info-text) / <alpha-value>)",
          "filled-text": "hsl(var(--mijnui-info-filled-text) / <alpha-value>)",
        },

        warning: {
          DEFAULT: "hsl(var(--mijnui-warning) / <alpha-value>)",
          text: "hsl(var(--mijnui-warning-text) / <alpha-value>)",
          "filled-text":
            "hsl(var(--mijnui-warning-filled-text) / <alpha-value>)",
        },

        danger: {
          DEFAULT: "hsl(var(--mijnui-danger) / <alpha-value>)",
          text: "hsl(var(--mijnui-danger-text) / <alpha-value>)",
          "filled-text":
            "hsl(var(--mijnui-danger-filled-text) / <alpha-value>)",
        },

        success: {
          DEFAULT: "hsl(var(--mijnui-success) / <alpha-value>)",
          text: "hsl(var(--mijnui-success-text) / <alpha-value>)",
          "filled-text":
            "hsl(var(--mijnui-success-filled-text) / <alpha-value>)",
        },

        kanban: "hsl(var(--mijnui-kanban) / <alpha-value>)",
        "input-border": "hsl(var(--mijnui-input-border) / <alpha-value>)",
        ring: "hsl(var(--mijnui-ring) / <alpha-value>)",
      },

      borderRadius: {
        default: "0.25rem",
      },

      transitionDuration: {
        400: "400ms",
      },

      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },

          "scale-in": {
            "0%": {
              transform: "scale(.5)",
            },
            "100%": {
              transform: "scale(1)",
            },
          },

          "scale-out": {
            "0%": {
              transform: "scale(1)",
            },
            "100%": {
              transform: "scale(.5)",
            },
          },
        },
        "accordion-expand": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-collapse": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-expand":
          "accordion-expand 0.2s ease-in-out, fade-in 0.4s ease-in-out",
        "accordion-collapse":
          "accordion-collapse 0.2s ease-in-out, fade-out 0.4s ease-in-out",

        "scale-in": "scale-in 0.5s 0.2s ease-out, fade-in 0.4s ease-out",
        "scale-out": "scale-out 0.5s 0.2s ease-out, fade-out 0.4s ease-out",
      },
    },
  },
  plugins: [tailwindAnimate],
}
