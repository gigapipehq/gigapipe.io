import React, { useState, useEffect } from "react";
import { HomeHero, HomeFeature } from "rspress/theme";

const Docs = () => {
    const taglines = [
        "Unmetered Logs, Metrics & Traces",
        "Uncapped Logs, Metrics & Traces",
        "Unlimited Logs, Metrics & Traces",
        "Infinite Logs, Metrics & Traces",
        "Fixed-Cost Observability SaaS",
    ];

    const [currentTagline, setCurrentTagline] = useState(taglines[0]);

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * taglines.length);
        setCurrentTagline(taglines[randomIndex]);
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div style={{ marginLeft: "-200px", marginRight:"-200px", padding:"0px" }}>
            <HomeHero
                frontmatter={{
                    title: "Gigapipe Home",
                    titleSuffix: "Polyglot Observability",
                    hero: {
                        name: "Gigapipe",
                        text: "<p className='text-3xl'>Polyglot Observability</p>",
                        tagline: currentTagline,
                        actions: [
                            { text: "About", link: "/about", theme: "alt" },
                            { text: "Plans", link: "/pricing", theme: "alt" },
                            { text: "Signup", link: "/signup", theme: "brand" },
                        ],
                        image: {
                            src: "/logo.svg",
                            alt: "Gigapipe",
                        },
                    },
                }}
                routePath="/"
            />
            <HomeFeature
                frontmatter={{
                    title: "Gigapipe Features",
                    titleSuffix: "Docs Main Test",
                    features: [
                        {
                            title: "Polyglot",
                            details:
                                "<p className='text-center'>Drop-in Loki, Prometheus, Tempo, Pyroscope compatible</p>",
                            icon: "<img src='https://raw.githubusercontent.com/gigapipehq/homepage/refs/heads/main/docs/public/qryn.png' />",
                            span: 3,
                        },
                        {
                            title: "Performant",
                            details:
                                "<p className='text-center'>ClickHouse + DuckDB OLAP<br>w/ NVMe lightspeed storage</p>",
                            icon: "⚡",
                            span: 3,
                        },
                        {
                            title: "Unmetered",
                            details:
                                "<p className='text-center'>Flat cost Observability<br>Zero monthly suprises</p>",
                            icon: "📐",
                            span: 3,
                        },
                        {
                            title: "Transparent",
                            details:
                                "<p className='text-center'>Open-Source Community<br>Open Integrations</p>",
                            icon: "⭐",
                            span: 3,
                        },
                    ],
                }}
                routePath="/"
            />
        </div>
    );
};

export default Docs;
