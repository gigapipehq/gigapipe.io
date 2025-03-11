import { pluginClientRedirects } from '@rspress/plugin-client-redirects';
import { defineConfig } from 'rspress/config';
import  path from 'path'

export default defineConfig({
  root: 'docs',
  base: '/',
  title: 'Gigapipe: Polyglot Observability',
  icon: "/logo.svg",
  logo: {
    light: "/gigapipe-logo-color.svg",
    dark: "/Gigapipe-logo-outline@3x.svg",
  },
  head: [
    '<meta name="description" content="Gigapipe: Polyglot Observability">',
    '<meta property="og:title" content="Gigapipe: Polyglot Observability">',
    '<meta property="og:url" content="https://gigapipe.com">',
    '<meta property="og:image" content="https://i.imgur.com/w9MZrzK.png">',
    '<meta property="og:type" content="website">',
    '<meta property="og:description" content="Gigapipe: Polyglot Observability">',
    '<meta property="twitter:domain" content="gigapipe.com">',
    '<meta property="twitter:url" content="https://gigapipe.com">',
    '<meta name="twitter:title" content="Gigapipe: Polyglot Observability">',
    '<meta name="twitter:description" content="Gigapipe: Polyglot Observability">',
    '<meta name="twitter:image" content="https://i.imgur.com/w9MZrzK.png">',
  ],
  description: 'Gigapipe: Polyglot Observability',
  globalStyles: path.join(__dirname, 'styles/index.css'),
  builderConfig: {
    html: {
      tags: [
        {
          tag: 'script',
          children: "window.RSPRESS_THEME = 'dark';",
        },
      ],
    },
  },
  plugins: [
    pluginClientRedirects({
      redirects: [
        {
          from: '/terms',
          to: '/legal',
        },
        {
          from: '/privacy-policy',
          to: '/legal',
        },
      ],
    }),
  ],
  themeConfig: {  
    darkMode: true,
    hideNavbar: 'auto',
    footer: {
     // copyright: '2024 HEPvest Holding BV',
      message: '2024 HEPvest Holding BV All Rights Reserved'
    },
    sidebar: {
      '/docs/':[
        {
          text: "Get Started",
          items: [
            {
              text: "Cloud Hosted",
              link: '/docs/'
            },
            {
              text: "Open Source",
              link: '/docs/oss'
            },
            ]
          
        },
        {
          text: "Documentation",
          items: [
            {
              text: "Explore Data",
              link: '/docs/demo'
            },
            {
              text: "Ingest Data",
              link: '/docs/ingestion'
            },
            {
              text: "API Endpoints",
              link: '/docs/api'
            },
            {
              text: "Configuration",
              link: '/docs/config'
            },
            {
              text: "FAQ",
              link: '/docs/faq'
            }
          ]
          
        },
        {
          text: "Integrations",
          items: [
            {
              text: "Logs",
              collapsed: true, 
              items: [
                {
                  text: "Opentelemetry",
                  link: 'https://github.com/metrico/otel-collector'
                },
                {
                  text: "Grafana Alloy",
                  link: 'https://blog.gigapipe.com/qryn-with-alloy'
                },
                {
                  text: "Vector",
                  link: 'https://oom.ro/posts/vector-qryn-logs/'
                }
              ]
            },
            {
              text: "Metrics",
              collapsed: true, 
              items: [
                {
                  text: "Opentelemetry",
                  link: 'https://github.com/metrico/otel-collector'
                },
                {
                  text: "Grafana Alloy",
                  link: 'https://blog.gigapipe.com/qryn-with-alloy'
                },
                {
                  text: "Vector",
                  link: 'https://oom.ro/posts/vector-qryn-logs/'
                },
                {
                  text: "Telegraf",
                  link: "https://www.influxdata.com/time-series-platform/telegraf/"
                },
                {
                  text: "Cloudwatch",
                  link: "https://aws.amazon.com/cloudwatch/"
                },
                {
                  text: "Prometheus Exporter",
                  link: "https://prometheus.io/docs/guides/node-exporter/"
                }
                
              ]
            },
            {
              text: "Tracing",
              collapsed: true, 
              items: [
                {
                  text: "Opentelemetry",
                  link: 'https://github.com/metrico/otel-collector'
                },
                {
                  text: "Grafana Alloy",
                  link: 'https://blog.gigapipe.com/qryn-with-alloy'
                },
                {
                  text: "Jaeger",
                  link: 'https://www.jaegertracing.io/'
                }
              ]
            },
            {
              text: "Profiling",
              collapsed: true, 
              items: [
                {
                  text: "Pyroscope SDK",
                  link: 'https://grafana.com/docs/pyroscope/latest/configure-client/language-sdks/'
                },
                 {
                  text: "Parca SDK",
                  link: 'https://www.parca.dev/'
                },
                 {
                  text: "Grafana Agent",
                  link: 'https://grafana.com/docs/agent/latest/'
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
        link: "docs/index" ,
        items: [
          {
            text: "Cloud Service",
            link: '/docs/index'
          },
          {
            text: "Open Source",
            link: '/docs/oss'
          },
          {
            text: "Gigapipe API",
            link: '/docs/api'
          }
        ]
      },
      { text: "Blog", 
        link: "https://blog.gigapipe.com" 
      }
    ],
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/metrico/qryn',
      },
      {
        icon: 'linkedin',
        mode: 'link',
        content: 'https://www.linkedin.com/company/gigapipe',
      },
      {
        icon: { svg: `<image src="https://raw.githubusercontent.com/gigapipehq/homepage/refs/heads/main/docs/public/qryn.png" style="filter: grayscale(1);"/>`},
        mode: 'link',
        content: 'https://blog.gigapipe.com',
      },
    ],
  },
});
