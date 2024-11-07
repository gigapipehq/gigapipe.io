import { defineConfig } from "rspress/config";
import path from "path";

export default defineConfig({
    root: "docs",
    base: "/",
    title: "Gigapipe: Polyglot Observability",
    icon: "/logo.svg",
    logo: {
        light: "/gigapipe-logo-color.svg",
        dark: "/Gigapipe-logo-outline@3x.svg",
    },
    description: "Gigapipe: Polyglot Observability",
    globalStyles: path.join(__dirname, "styles/index.css"),
    builderConfig: {
        html: {
            tags: [
                {
                    tag: "script",
                    children: "window.RSPRESS_THEME = 'dark';",
                },
            ],
        },
    },
    themeConfig: {
        darkMode: true,
        footer: {
            // copyright: '2024 HEPvest Holding BV',
            message: "All Rights Reserved",
        },
        sidebar: {
            "/docs/docs/": [
                {
                    text: "Documentation",
                    items: [
                        {
                            text: "Sign Up",
                            link: "/docs/signup",
                        },
                        {
                            text: "Get Started",
                            link: "/docs",
                        },
                        {
                            text: "Explore Data",
                            link: "/docs/demo",
                        },
                        {
                            text: "API Endpoints",
                            link: "/docs/api",
                        },
                    ],
                },
                {
                    text: "Integrations",
                    items: [
                        {
                            text: "Logs",
                            items: [
                                {
                                    text: "Opentelemetry",
                                    link: "https://github.com/metrico/otel-collector",
                                },
                                {
                                    text: "Grafana Alloy",
                                    link: "https://blog.qryn.dev/qryn-with-alloy",
                                },
                                {
                                    text: "Vector",
                                    link: "https://oom.ro/posts/vector-qryn-logs/",
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        nav: [
            { text: "About", link: "about" },
            { text: "Plans", link: "pricing" },
            {
                text: "Product",
                items: [
                    { text: "Read", link: "grafana-explore" },
                    {
                        text: "Write",
                        link: "data-ingestion",
                    },
                ],
            },
            { text: "Sign Up", link: "signup" },
            { text: "Docs", link: "docs" },
            { text: "Blog", link: "https://blog.qryn.dev" },
            { text: "Contact", link: "mailto://info@gigapipe.com" },
        ],
        socialLinks: [
            {
                icon: "github",
                mode: "link",
                content: "https://github.com/metrico/qryn",
            },
            {
                icon: "linkedin",
                mode: "link",
                content: "https://www.linkedin.com/company/gigapipe",
            },
            {
                icon: {
                    svg: `<image src="https://raw.githubusercontent.com/gigapipehq/homepage/refs/heads/main/docs/public/qryn.png" style="filter: grayscale(1);"/>`,
                },
                mode: "link",
                content: "https://blog.qryn.dev",
            },
        ],
    },
});
