import { defineConfig } from 'rspress/config';

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
  sidebar: false, 
  themeConfig: {  
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
        icon: 'github',
        mode: 'dom',
        content: '<a href="https://blog.qryn.dev" target="_blank"><img src="https://user-images.githubusercontent.com/1423657/218816262-e0e8d7ad-44d0-4a7d-9497-0d383ed78b83.png" width="24px" height="24px" alt="logo" id="logo" class="mr-4 rspress-logo dark:hidden"></a>',
        
      },
    ],
  },
});
