import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgba(200, 200, 200, 0.2) 1px, transparent 2px),
          linear-gradient(to bottom, rgba(200, 200, 200, 0.2) 1px, transparent 2px)
        `,
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
