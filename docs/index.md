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
      text: Pricing
      link: pricing
    - theme: brand
      text: Signup
      link: https://docs.google.com/forms/d/e/1FAIpQLSeb_eMwgtpbOk0ejAVW7ihKAzkt0WKnLwCQFyHkIzl5DAU2ig/viewform
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

# Polyglot Observability

> Polyglot comes from Greek _polyglōttos_, a combination of **poly** - _"many" or "multi"_ - and **glōtta** for _"language_.

_That's us_. Gigapipe is a Polyglot platform designed around the Observability standards the world already loves 💜

### Independence

Our stack is _protocol compatible_ with many projects and products - _without depending on any_. Our Core and APIs are independently developed and _fully opensource_.

### Performance and Reliability

Our stack leverages the **ClickHouse** and **DuckDB** OLAP engines for storage and to provide fast analytics and scalable performance. We develop our extensions standing on the shoulders of giants.
