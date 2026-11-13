/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "colors": {
            "on-primary-fixed": "#1d1c17",
            "surface-container-high": "#ebe8e2",
            "on-surface-variant": "#494740",
            "signal-orange-hover": "#E04A12",
            "surface-tint": "#605e59",
            "secondary-fixed": "#ffdbd0",
            "surface-dim": "#dcdad4",
            "tertiary-fixed-dim": "#bdc2ff",
            "tertiary-fixed": "#dfe0ff",
            "surface": "#fcf9f3",
            "outline": "#7a776f",
            "error-container": "#ffdad6",
            "error": "#ba1a1a",
            "on-tertiary-fixed-variant": "#0f28d1",
            "primary-fixed": "#e7e2db",
            "surface-container-highest": "#e5e2dc",
            "secondary-fixed-dim": "#ffb59e",
            "paper-sunken": "#ECE8DF",
            "on-error-container": "#93000a",
            "on-primary-fixed-variant": "#494741",
            "on-primary": "#ffffff",
            "primary": "#000000",
            "on-secondary-fixed": "#3a0b00",
            "background": "#fcf9f3",
            "surface-container-lowest": "#ffffff",
            "on-tertiary": "#ffffff",
            "line": "#D9D4C7",
            "on-error": "#ffffff",
            "on-tertiary-container": "#6576ff",
            "on-secondary-container": "#521300",
            "surface-container-low": "#f6f3ed",
            "inverse-surface": "#31312d",
            "tertiary-container": "#000a64",
            "ink-muted": "#4A483F",
            "on-secondary-fixed-variant": "#852400",
            "primary-fixed-dim": "#cac6bf",
            "surface-container": "#f0eee8",
            "outline-variant": "#cbc6bd",
            "tertiary": "#000000",
            "ink-faint": "#6B685E",
            "surface-variant": "#e5e2dc",
            "on-primary-container": "#86837d",
            "signal-orange-tint": "#FFE6DA",
            "on-tertiary-fixed": "#000a64",
            "on-background": "#1c1c18",
            "secondary": "#ae3200",
            "inverse-on-surface": "#f3f0ea",
            "primary-container": "#1d1c17",
            "status-success": "#1F8A4C",
            "secondary-container": "#fd591e",
            "on-surface": "#1c1c18",
            "on-secondary": "#ffffff",
            "surface-bright": "#fcf9f3",
            "paper-raised": "#FBFAF7",
            "inverse-primary": "#cac6bf"
      },
      "borderRadius": {
            "DEFAULT": "0.25rem",
            "lg": "0.5rem",
            "xl": "0.75rem",
            "full": "9999px"
      },
      "spacing": {
            "margin": "1.25rem",
            "space-lg": "1.5rem",
            "space-sm": "0.5rem",
            "space-xs": "0.25rem",
            "space-xl": "2.5rem",
            "gutter-desktop": "2.5rem",
            "space-2xl": "4rem",
            "space-md": "1rem",
            "space-chapter-mobile": "6rem",
            "space-3xl": "6rem",
            "margin-desktop": "5rem",
            "gutter": "1.5rem",
            "space-chapter": "10rem",
            "margin-tablet": "3rem"
      },
      "fontFamily": {
            "metric-numeral-mobile": [
                  "Space Mono"
            ],
            "body-md": [
                  "Manrope"
            ],
            "headline-lg-mobile": [
                  "Space Grotesk"
            ],
            "mega-display": [
                  "Space Grotesk"
            ],
            "headline-md": [
                  "Space Grotesk"
            ],
            "label-timecode": [
                  "Space Mono"
            ],
            "metric-numeral": [
                  "Space Mono"
            ],
            "mega-display-mobile": [
                  "Space Grotesk"
            ],
            "label-sm": [
                  "Space Mono"
            ],
            "display": [
                  "Space Grotesk"
            ],
            "body-lg-mobile": [
                  "Manrope"
            ],
            "display-mobile": [
                  "Space Grotesk"
            ],
            "headline-lg": [
                  "Space Grotesk"
            ],
            "body-lg": [
                  "Manrope"
            ],
            "body-sm": [
                  "Manrope"
            ]
      },
      "fontSize": {
            "metric-numeral-mobile": [
                  "64px",
                  {
                        "lineHeight": "1.0",
                        "letterSpacing": "-0.03em",
                        "fontWeight": "500"
                  }
            ],
            "body-md": [
                  "16px",
                  {
                        "lineHeight": "1.6",
                        "fontWeight": "400"
                  }
            ],
            "headline-lg-mobile": [
                  "30px",
                  {
                        "lineHeight": "1.2",
                        "letterSpacing": "-0.01em",
                        "fontWeight": "600"
                  }
            ],
            "mega-display": [
                  "160px",
                  {
                        "lineHeight": "0.92",
                        "letterSpacing": "-0.05em",
                        "fontWeight": "600"
                  }
            ],
            "headline-md": [
                  "32px",
                  {
                        "lineHeight": "1.25",
                        "fontWeight": "500"
                  }
            ],
            "label-timecode": [
                  "12px",
                  {
                        "lineHeight": "1.4",
                        "letterSpacing": "0.08em",
                        "fontWeight": "400"
                  }
            ],
            "metric-numeral": [
                  "120px",
                  {
                        "lineHeight": "1.0",
                        "letterSpacing": "-0.05em",
                        "fontWeight": "500"
                  }
            ],
            "mega-display-mobile": [
                  "64px",
                  {
                        "lineHeight": "0.95",
                        "letterSpacing": "-0.04em",
                        "fontWeight": "600"
                  }
            ],
            "label-sm": [
                  "11px",
                  {
                        "lineHeight": "1.3",
                        "letterSpacing": "0.06em",
                        "fontWeight": "400"
                  }
            ],
            "display": [
                  "72px",
                  {
                        "lineHeight": "1.05",
                        "letterSpacing": "-0.03em",
                        "fontWeight": "600"
                  }
            ],
            "body-lg-mobile": [
                  "17px",
                  {
                        "lineHeight": "1.5",
                        "fontWeight": "400"
                  }
            ],
            "display-mobile": [
                  "40px",
                  {
                        "lineHeight": "1.1",
                        "letterSpacing": "-0.02em",
                        "fontWeight": "600"
                  }
            ],
            "headline-lg": [
                  "44px",
                  {
                        "lineHeight": "1.15",
                        "letterSpacing": "-0.02em",
                        "fontWeight": "600"
                  }
            ],
            "body-lg": [
                  "20px",
                  {
                        "lineHeight": "1.55",
                        "fontWeight": "400"
                  }
            ],
            "body-sm": [
                  "14px",
                  {
                        "lineHeight": "1.5",
                        "fontWeight": "500"
                  }
            ]
      }
},
  },
  plugins: [],
};
