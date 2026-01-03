\import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"], // dark mode via class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
    },
  },
  plugins: [tailwindcssAnimate],
  safelist: [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "text-primary",
    "text-secondary",
    "text-accent",
  ],
};
