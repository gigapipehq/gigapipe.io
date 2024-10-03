---
pageType: home

hero:
  name: Gigapipe
  text: <p style="font-size:0.6em">Polyglot Observability</p>
  tagline: <p style="font-size:1em">Just Logs, Metrics, Traces & Profiles</p>
  actions:
    - theme: alt
      text: About
      link: about
    - theme: alt
      text: Plans
      link: pricing
    - theme: brand
      text: Signup
      link: signup
  image:
    src: /logo.svg
    alt: Gigapipe    


features:
  - title: Polyglot
    details: <p className="text-center">Drop-in Loki, Prometheus, Tempo, Pyroscope compatible</p>
    icon: <img src="https://raw.githubusercontent.com/gigapipehq/homepage/refs/heads/main/docs/public/qryn.png" />
    span: 3

  - title: Fast
    details: <p className="text-center">ClickHouse DB + DuckDB OLAP<br>w/ NVMe lightspeed storage</p>
    icon: ⚡
    span: 3
    
  - title: Unmetered
    details: <p className="text-center">Flat cost Observability<br>Zero monthly suprises</p>
    icon: 💸
    span: 3

  - title: Open
    details: <p className="text-center">Transparent, Open-Source,<br>Opentelemetry Native</p>
    icon: ⚗️
    span: 3
---

<style>
  * > body{
    background-image: url("/header-bg-optimised-scaled.jpg");
 background-color: #cccccc;
  }
  .flex-center {
    justify-content: center;
    align-items: center;
    display: flex;
    margin-bottom: 10px;
  }
</style>
