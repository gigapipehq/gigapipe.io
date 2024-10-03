import { defineConfig } from 'rspress/config';
import  path from 'path'

export default defineConfig({
  root: 'docs',
  base: '/homepage/',
    title: 'Gigapipe',
  icon: "/logo.svg",
  logo: {
    light: "/gigapipe-logo-color.svg",
    dark: "/Gigapipe-logo-outline@3x.svg",
  },
  description: 'Gigapipe: Polyglot Observability',
  darkMode: true,
  globalStyles: path.join(__dirname, 'styles/index.css'),
  sidebar: false, 
  themeConfig: {  
    nav: [
      { text: "Pricing", 
        link: "pricing" 
      },
      { text: "Service Terms", 
        link: "legal" 
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/gigapipe',
      },
      {
        icon: 'linkedin',
        mode: 'link',
        content: 'https://www.linkedin.com/company/gigapipe',
      },
      {
        icon: { svg: `<image src="https://raw.githubusercontent.com/gigapipehq/homepage/refs/heads/main/docs/public/qryn.png" style="filter: grayscale(1);"/>`},
        mode: 'link',
        content: 'https://blog.qryn.dev',
      },
    ],
  },
});
