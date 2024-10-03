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
      { text: "Sign Up", 
        link: "signup" 
      },
      { text: "About", 
        link: "about" 
      },
      { text: "Plans", 
        link: "pricing" 
      },
      { text: "Docs", 
        link: "docs" 
      },
      { text: "Terms", 
        link: "legal" 
      },
      { text: "Blog", 
        link: "https://blog.qryn.dev" 
      },
      { text: "Contact Us", 
        link: "mailto://info@gigapipe.com" 
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/gigapipehq',
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
