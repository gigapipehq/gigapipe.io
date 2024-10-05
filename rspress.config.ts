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
  
  globalStyles: path.join(__dirname, 'styles/index.css'),
  themeConfig: {  
    darkMode: true,
    sidebar: {
      '/docs/docs/':[
        {
          text: "Documentation",
          items: [
            {
              text: "Get Started",
              link: '/docs'
            },
            {
              text: "Explore Data",
              link: '/docs/demo'
            },
            {
              text: "API Endpoints",
              link: '/docs/api'
            }
          ]
          
        },
        {
          text: "Integrations",
          items: [
            {
              text: "Logs",
              items: [
                {
                  text: "Opentelemetry",
                  link: 'https://github.com/metrico/otel-collector'
                },
                {
                  text: "Grafana Alloy",
                  link: 'https://blog.qryn.dev/qryn-with-alloy'
                },
                {
                  text: "Vector",
                  link: 'https://oom.ro/posts/vector-qryn-logs/'
                }
              ]
            }
          ]
        }
      

      ]
    },
    nav: [
      { text: "About", 
        link: "about" 
      },
      { text: "Plans", 
        link: "pricing" 
      },
      { text: "Sign Up", 
        link: "signup" 
      },
      { text: "Docs", 
        link: "docs" 
      },
      { text: "Blog", 
        link: "https://blog.qryn.dev" 
      },
      { text: "Contact", 
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
