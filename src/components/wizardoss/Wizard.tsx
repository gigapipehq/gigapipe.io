"use client"

import React, { useState } from "react"
import "./Wizard.css"

// Import icons from your project's icon library
// This assumes you have access to these icons in your project
// You may need to adjust these imports based on your icon library
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Github,
  ExternalLink,
  Package,
  BarChart3,
  Activity,
  Layers,
} from "lucide-react" // Replace with your icon library

const steps = [
  {
    id: "install",
    title: "Install",
    description: "Install Gigapipe Open-Source on your Infrastructure.",
  },
  {
    id: "configure",
    title: "Ingest",
    description: "Configure your Observability Agents to send Data to Gigapipe",
  },
  {
    id: "explore",
    title: "Explore",
    description: "Use Grafana to start Exploring your Gigapipe dataset",
  },
  {
    id: "extend",
    title: "Extend",
    description: "Any tutorial or example from Grafana Cloud should work as-is in Gigapipe.",
  },
  {
    id: "done",
    title: "Done",
    description: "There's no step 5! You're already done!",
  },
]

// Tabs component
const Tabs = ({ defaultValue, className, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  // Clone children and pass activeTab state
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab, setActiveTab })
    }
    return child
  })

  return <div className={`gp-wizard-tabs ${className || ""}`}>{childrenWithProps}</div>
}

const TabsList = ({ className, children, activeTab, setActiveTab }) => {
  // Count children to determine grid columns
  const childCount = React.Children.count(children)
  const gridClass = childCount === 3 ? "gp-wizard-tabs-list-3" : "gp-wizard-tabs-list-5"

  // Clone children and pass activeTab state
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab, setActiveTab })
    }
    return child
  })

  return <div className={`gp-wizard-tabs-list ${gridClass} ${className || ""}`}>{childrenWithProps}</div>
}

const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => {
  return (
    <button
      className="gp-wizard-tab-trigger"
      data-state={activeTab === value ? "active" : "inactive"}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

const TabsContent = ({ value, className, children, activeTab }) => {
  return (
    <div
      className={`gp-wizard-tab-content ${className || ""}`}
      data-state={activeTab === value ? "active" : "inactive"}
    >
      {children}
    </div>
  )
}

// Button component
const Button = ({ variant = "primary", size, disabled, onClick, className, children }) => {
  const variantClass = variant === "outline" ? "gp-wizard-button-outline" : "gp-wizard-button-primary"
  const sizeClass = size === "sm" ? "gp-wizard-button-sm" : ""

  return (
    <button
      className={`gp-wizard-button ${variantClass} ${sizeClass} ${className || ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// Card components
const Card = ({ className, children }) => {
  return <div className={`gp-wizard-card-component ${className || ""}`}>{children}</div>
}

const CardHeader = ({ className, children }) => {
  return <div className={`gp-wizard-card-header ${className || ""}`}>{children}</div>
}

const CardTitle = ({ className, children }) => {
  return <h3 className={`gp-wizard-card-title ${className || ""}`}>{children}</h3>
}

const CardContent = ({ className, children }) => {
  return <div className={`gp-wizard-card-content ${className || ""}`}>{children}</div>
}

const CardFooter = ({ className, children }) => {
  return <div className={`gp-wizard-card-footer ${className || ""}`}>{children}</div>
}

// Badge component
const Badge = ({ className, children }) => {
  return <span className={`gp-wizard-badge ${className || ""}`}>{children}</span>
}

export default function Wizard() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const goToStep = (index) => {
    setCurrentStep(index)
  }

  return (
    <div className="gp-wizard-container">
      <div className="gp-wizard-card">
        <div className="gp-wizard-header">
          <div className="gp-wizard-flex gp-wizard-justify-between">
            <div>
              <h2 className="gp-wizard-title">🏁 Get Started with Gigapipe Open-Source</h2>
              <p className="gp-wizard-description">
                Welcome to your <em>ready-to-use</em> managed Observability stack - <em>just add data</em> ☘️
              </p>
            </div>
          </div>
        </div>

        <div className="gp-wizard-progress">
          <div className="gp-wizard-steps">
            {steps.map((step, index) => (
              <div key={step.id} className="gp-wizard-step">
                <button
                  onClick={() => goToStep(index)}
                  className={`gp-wizard-step-button ${currentStep === index ? "active" : index < currentStep ? "completed" : ""}`}
                >
                  {index < currentStep ? <Check /> : <span>{index + 1}</span>}
                </button>
                <span className={`gp-wizard-step-label ${currentStep === index ? "active" : ""}`}>
                  {step.title.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
          <div className="gp-wizard-progress-bar">
            <div
              className="gp-wizard-progress-indicator"
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            />
          </div>
        </div>

        <div className="gp-wizard-content">
          <div className="gp-wizard-space-y">
            <div>
              <h3 className="gp-wizard-step-heading">
                Step {currentStep + 1}: {steps[currentStep].title}
              </h3>
              <p className="gp-wizard-step-subheading">{steps[currentStep].description}</p>
            </div>

            {currentStep === 0 && <InstallStep />}
            {currentStep === 1 && <ConfigureStep />}
            {currentStep === 2 && <ExploreStep />}
            {currentStep === 3 && <ExtendStep />}
            {currentStep === 4 && <DoneStep />}
          </div>
        </div>

        <div className="gp-wizard-footer">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
            <ChevronLeft /> Previous
          </Button>
          <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
            Next <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

function InstallStep() {
  return (
    <Tabs defaultValue="quickstart" className="gp-wizard-tabs">
      <TabsList>
        <TabsTrigger value="quickstart">Quickstart</TabsTrigger>
        <TabsTrigger value="docker">Docker</TabsTrigger>
        <TabsTrigger value="docker-compose">Docker Compose</TabsTrigger>
      </TabsList>

      <TabsContent value="quickstart">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">Quick Start? Use our OSS Gigapipe Demo</h4>
          <p className="gp-wizard-mb-4">The demo ships with Gigapipe, Grafana and ClickHouse ready to use</p>
          <div className="gp-wizard-flex gp-wizard-gap-2">
            <Button variant="outline" className="gp-wizard-flex gp-wizard-gap-2">
              <Github />
              <a href="https://github.com/metrico/gigapipe-oss-demo" target="_blank" rel="noopener noreferrer">
                Gigapipe Demo Repository
              </a>
            </Button>
            <Badge className="gp-wizard-badge-green">🔋 batteries included</Badge>
          </div>
          <p className="gp-wizard-text-xs gp-wizard-mt-2">Ships with config, data and datasources</p>
        </div>
      </TabsContent>

      <TabsContent value="docker">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">Deploy using Docker or K8s</h4>
          <div className="gp-wizard-panel-code">ghcr.io/metrico/gigapipe:latest</div>
          <div className="gp-wizard-space-y">
            <div className="gp-wizard-flex gp-wizard-gap-2">
              <span className="gp-wizard-panel-item-icon">▶</span>
              <p>
                Configure Gigapipe using{" "}
                <a href="/docs/config" className="gp-wizard-community-link">
                  ENV Settings
                </a>
              </p>
            </div>
            <div className="gp-wizard-flex gp-wizard-gap-2">
              <span className="gp-wizard-panel-item-icon">▶</span>
              <p>Gigapipe requires ClickHouse for data storage</p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="docker-compose">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">Deploy using Docker Compose</h4>
          <pre className="gp-wizard-panel-pre">
            {`gigapipe:
  image: ghcr.io/metrico/gigapipe:latest
  container_name: gigapipe
  hostname: gigapipe
  pull_policy: always
  restart: unless-stopped
  ports:
    - "3100:3100"
  environment:
    - CLICKHOUSE_SERVER=clickhouse-server
    - CLICKHOUSE_PORT=9000
    - CLICKHOUSE_AUTH=gigapipe:demo
    - CLICKHOUSE_DB=qryn`}
          </pre>
          <div className="gp-wizard-space-y">
            <div className="gp-wizard-flex gp-wizard-gap-2">
              <span className="gp-wizard-panel-item-icon">▶</span>
              <p>
                Configure Gigapipe using{" "}
                <a href="/docs/config" className="gp-wizard-community-link">
                  ENV Settings
                </a>
              </p>
            </div>
            <div className="gp-wizard-flex gp-wizard-gap-2">
              <span className="gp-wizard-panel-item-icon">▶</span>
              <p>Gigapipe requires ClickHouse for data storage</p>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>

  )
}

function ConfigureStep() {
  return (
    <Tabs defaultValue="logs" className="gp-wizard-tabs">
      <TabsList>
        <TabsTrigger value="logs">Logs</TabsTrigger>
        <TabsTrigger value="metrics">Metrics</TabsTrigger>
        <TabsTrigger value="traces">Traces</TabsTrigger>
        <TabsTrigger value="profiles">Profiles</TabsTrigger>
        <TabsTrigger value="opentelemetry">OpenTelemetry</TabsTrigger>
      </TabsList>

      <TabsContent value="logs">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">⭐ Use any Loki compatible Agent or Client</h4>
          <div className="gp-wizard-panel-list">
            {[
              { name: "Grafana Alloy", url: "https://grafana.com/docs/alloy/latest/" },
              { name: "Grafana Agent", url: "https://grafana.com/docs/agent/latest/" },
              { name: "Vector", url: "https://vector.dev/" },
              { name: "Opentelemetry", url: "https://github.com/metrico/otel-collector" },
              { name: "Telegraf", url: "https://www.influxdata.com/time-series-platform/telegraf/" },
              { name: "Fluentd", url: "https://www.fluentd.org/" },
              { name: "Logstash", url: "https://opensearch.org/docs/latest/tools/logstash/index/" },
            ].map((agent) => (
              <a
                key={agent.name}
                href={agent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gp-wizard-panel-item"
              >
                <Package className="gp-wizard-panel-item-icon" />
                <span className="gp-wizard-panel-item-text">{agent.name}</span>
                <ExternalLink className="gp-wizard-panel-item-external" />
              </a>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="metrics">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">⭐ Use any Prometheus compatible Agent or Client</h4>
          <div className="gp-wizard-panel-list">
            {[
              { name: "Grafana Alloy", url: "https://grafana.com/docs/alloy/latest/" },
              { name: "Grafana Agent", url: "https://grafana.com/docs/agent/latest/" },
              { name: "Vector", url: "https://vector.dev/" },
              { name: "Opentelemetry", url: "https://github.com/metrico/otel-collector" },
            ].map((agent) => (
              <a
                key={agent.name}
                href={agent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gp-wizard-panel-item"
              >
                <BarChart3 className="gp-wizard-panel-item-icon" />
                <span className="gp-wizard-panel-item-text">{agent.name}</span>
                <ExternalLink className="gp-wizard-panel-item-external" />
              </a>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="traces">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">⭐ Use any Tempo/Zipkin compatible Agent or Client</h4>
          <div className="gp-wizard-panel-list">
            {[
              { name: "Grafana Alloy", url: "https://grafana.com/docs/alloy/latest/" },
              { name: "Grafana Agent", url: "https://grafana.com/docs/agent/latest/" },
              { name: "Zipkin", url: "https://zipkin.io/" },
              { name: "Opentelemetry", url: "https://github.com/metrico/otel-collector" },
            ].map((agent) => (
              <a
                key={agent.name}
                href={agent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gp-wizard-panel-item"
              >
                <Activity className="gp-wizard-panel-item-icon" />
                <span className="gp-wizard-panel-item-text">{agent.name}</span>
                <ExternalLink className="gp-wizard-panel-item-external" />
              </a>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="profiles">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">⭐ Use any Pyroscope SDK compatible Agent or Client</h4>
          <div className="gp-wizard-panel-list">
            {[
              {
                name: "Grafana Pyroscope SDK",
                url: "https://grafana.com/docs/pyroscope/latest/configure-client/language-sdks/",
              },
              {
                name: "Grafana Agent",
                url: "https://grafana.com/docs/pyroscope/latest/configure-client/grafana-agent/go_pull/",
              },
            ].map((agent) => (
              <a
                key={agent.name}
                href={agent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gp-wizard-panel-item"
              >
                <Layers className="gp-wizard-panel-item-icon" />
                <span className="gp-wizard-panel-item-text">{agent.name}</span>
                <ExternalLink className="gp-wizard-panel-item-external" />
              </a>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="opentelemetry">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">⭐ Use Gigapipe with Opentelemetry Agents</h4>
          <div className="gp-wizard-flex-col gp-wizard-gap-4">
            <a
              href="https://github.com/metrico/otel-collector"
              target="_blank"
              rel="noopener noreferrer"
              className="gp-wizard-panel-item"
            >
              <Package className="gp-wizard-panel-item-icon" />
              <span className="gp-wizard-panel-item-text">Gigapipe OTel Collector</span>
              <ExternalLink className="gp-wizard-panel-item-external" />
            </a>
            <p className="gp-wizard-text-sm gp-wizard-mt-4">
              The <strong>gigapipe-otel-collector</strong> is designed to store observability data (Traces, Logs,
              Metrics, Profiles) from multiple vendors/platforms into{" "}
              <a href="https://github.com/clickhouse/clicklhouse" className="gp-wizard-community-link">
                ClickHouse
              </a>{" "}
              using gigapipe fingerprinting and table formats transparently accessible through gigapipe APIs via LogQL,
              PromQL, Tempo and Pyroscope queries.
            </p>
            <img
              src="https://github.com/metrico/otel-collector/assets/1423657/692b54e9-88ef-49c8-996d-5dbd73ee0782"
              alt="Gigapipe OTel Collector Architecture"
              className="gp-wizard-rounded-lg gp-wizard-border gp-wizard-w-full gp-wizard-max-h-64 gp-wizard-object-contain gp-wizard-bg-white gp-wizard-mt-4"
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

function ExploreStep() {
  return (
    <Tabs defaultValue="logs" className="gp-wizard-tabs">
      <TabsList>
        <TabsTrigger value="logs">Logs</TabsTrigger>
        <TabsTrigger value="metrics">Metrics</TabsTrigger>
        <TabsTrigger value="traces">Traces</TabsTrigger>
        <TabsTrigger value="profiles">Profiles</TabsTrigger>
        <TabsTrigger value="view">View</TabsTrigger>
      </TabsList>

      <TabsContent value="logs">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">⭐ Explore Logs using the native Loki Datasource</h4>
          <div className="gp-wizard-media-container">
            <iframe
              src="https://demo.arcade.software/GKaq4SJRBPYyCZgoWBoM?embed"
              className="gp-wizard-media-iframe"
              title="Gigapipe Logs Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="metrics">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">⭐ Explore Metrics using the native Prometheus/Mimir Datasource</h4>
          <div className="gp-wizard-media-container">
            <iframe
              src="https://demo.arcade.software/r2A4ia93hPs96pyiaFQx?embed"
              className="gp-wizard-media-iframe"
              title="Gigapipe Metrics Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="traces">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">⭐ Explore Traces using the native Tempo Datasource</h4>
          <div className="gp-wizard-media-container">
            <iframe
              src="https://demo.arcade.software/G43G6ja4CHJYpF9rc3V2?embed"
              className="gp-wizard-media-iframe"
              title="Gigapipe Traces Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="profiles">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">⭐ Explore Profiles using the native Pyroscope Datasource</h4>
          <div className="gp-wizard-media-container">
            <img
              src="https://github.com/metrico/qryn-docs/assets/1423657/3fe7167e-504a-42c0-bf51-bdb090ce0f6b"
              alt="Gigapipe Profiles Demo"
              className="gp-wizard-media-image"
            />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="view">
        <div className="gp-wizard-panel">
          <h4 className="gp-wizard-panel-heading">
            ⭐ No Grafana? Explore Logs, Metrics and Traces using Gigapipe View
          </h4>
          <div className="gp-wizard-media-container">
            <img
              src="https://user-images.githubusercontent.com/1423657/200136242-f4133229-ee7c-45e0-8228-8734cf56140a.gif"
              alt="Gigapipe View Demo"
              className="gp-wizard-media-image-cover"
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

function ExtendStep() {
  return (
    <div className="gp-wizard-space-y">
      <div className="gp-wizard-grid gp-wizard-grid-3">
        <Card>
          <CardHeader>
            <CardTitle>Grafana Dashboards</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="gp-wizard-text-sm">Import any Grafana dashboard directly into your Gigapipe setup.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="gp-wizard-w-full">
              <ExternalLink /> Browse Dashboards
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alerting Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="gp-wizard-text-sm">Set up alerting rules just like you would in Grafana Cloud.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="gp-wizard-w-full">
              <ExternalLink /> Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Integrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="gp-wizard-text-sm">Connect with your existing tools and services seamlessly.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="gp-wizard-w-full">
              <ExternalLink /> View Integrations
            </Button>
          </CardFooter>
        </Card>
      </div>

    </div>
  )
}

function DoneStep() {
  return (
    <div className="gp-wizard-space-y gp-wizard-success-container">
      <div className="gp-wizard-py-8 gp-wizard-flex-col gp-wizard-items-center">
        <div className="gp-wizard-success-icon">
          <Check />
        </div>
        <h3 className="gp-wizard-success-title">You're all set! 🎉</h3>
        <p className="gp-wizard-success-text">
          If you've used <strong>Grafana</strong> or <strong>Grafana Cloud</strong> before,{" "}
          <em>You will feel right at home.</em>
        </p>
      </div>

      <div className="gp-wizard-grid gp-wizard-grid-2">
        <Card>
          <CardHeader>
            <CardTitle>Join Our Community</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="gp-wizard-text-sm">
              Connect with other Gigapipe users, share your experiences, and get help.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="gp-wizard-w-full">
              <ExternalLink /> Join Community
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GitHub Repository</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="gp-wizard-text-sm">Check out our open-source code, report issues, or contribute.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="gp-wizard-w-full">
              <Github /> View on GitHub
            </Button>
          </CardFooter>
        </Card>
      </div>

    </div>
  )
}

