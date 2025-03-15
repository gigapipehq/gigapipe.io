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
    title: "Install Gigapipe Open-Source",
    description: "Install Gigapipe Open-Source on your Infrastructure.",
  },
  {
    id: "configure",
    title: "Configure Observability Agents",
    description: "Configure your Observability Agents to send Data to Gigapipe",
  },
  {
    id: "explore",
    title: "Explore with Grafana",
    description: "Use Grafana to start Exploring your Gigapipe dataset",
  },
  {
    id: "extend",
    title: "Sky is the limit!",
    description: "Any tutorial or example from Grafana Cloud should work as-is in Gigapipe.",
  },
  {
    id: "done",
    title: "You're all set!",
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

  return <div className={`tabs ${className || ""}`}>{childrenWithProps}</div>
}

const TabsList = ({ className, children, activeTab, setActiveTab }) => {
  // Count children to determine grid columns
  const childCount = React.Children.count(children)
  const gridClass = childCount === 3 ? "tabs-list-3" : "tabs-list-5"

  // Clone children and pass activeTab state
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { activeTab, setActiveTab })
    }
    return child
  })

  return <div className={`tabs-list ${gridClass} ${className || ""}`}>{childrenWithProps}</div>
}

const TabsTrigger = ({ value, children, activeTab, setActiveTab }) => {
  return (
    <button
      className="tab-trigger"
      data-state={activeTab === value ? "active" : "inactive"}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

const TabsContent = ({ value, className, children, activeTab }) => {
  return (
    <div className={`tab-content ${className || ""}`} data-state={activeTab === value ? "active" : "inactive"}>
      {children}
    </div>
  )
}

// Button component
const Button = ({ variant = "primary", size, disabled, onClick, className, children }) => {
  const variantClass = variant === "outline" ? "button-outline" : "button-primary"
  const sizeClass = size === "sm" ? "button-sm" : ""

  return (
    <button className={`button ${variantClass} ${sizeClass} ${className || ""}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

// Card components
const Card = ({ className, children }) => {
  return <div className={`card ${className || ""}`}>{children}</div>
}

const CardHeader = ({ className, children }) => {
  return <div className={`card-header ${className || ""}`}>{children}</div>
}

const CardTitle = ({ className, children }) => {
  return <h3 className={`card-title ${className || ""}`}>{children}</h3>
}

const CardContent = ({ className, children }) => {
  return <div className={`card-content ${className || ""}`}>{children}</div>
}

const CardFooter = ({ className, children }) => {
  return <div className={`card-footer ${className || ""}`}>{children}</div>
}

// Badge component
const Badge = ({ className, children }) => {
  return <span className={`badge ${className || ""}`}>{children}</span>
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
    <div className="wizard-container">
      <div className="wizard-card">
        <div className="wizard-header">
          <div className="flex justify-between">
            <div>
              <h2 className="wizard-title">🏁 Get Started with Gigapipe Open-Source</h2>
              <p className="wizard-description">
                Welcome to your <em>ready-to-use</em> managed Observability stack - <em>just add data</em> ☘️
              </p>
            </div>
          </div>
        </div>

        <div className="wizard-progress">
          <div className="wizard-steps">
            {steps.map((step, index) => (
              <div key={step.id} className="wizard-step">
                <button
                  onClick={() => goToStep(index)}
                  className={`step-button ${currentStep === index ? "active" : index < currentStep ? "completed" : ""}`}
                >
                  {index < currentStep ? <Check /> : <span>{index + 1}</span>}
                </button>
                <span className={`step-label ${currentStep === index ? "active" : ""}`}>
                  {step.title.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
          <div className="progress-bar">
            <div className="progress-indicator" style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }} />
          </div>
        </div>

        <div className="wizard-content">
          <div className="space-y">
            <div>
              <h3 className="step-heading">
                Step {currentStep + 1}: {steps[currentStep].title}
              </h3>
              <p className="step-subheading">{steps[currentStep].description}</p>
            </div>

            {currentStep === 0 && <InstallStep />}
            {currentStep === 1 && <ConfigureStep />}
            {currentStep === 2 && <ExploreStep />}
            {currentStep === 3 && <ExtendStep />}
            {currentStep === 4 && <DoneStep />}
          </div>
        </div>

        <div className="wizard-footer">
          <Button variant="outline" onClick={prevStep} disabled={currentStep === 0}>
            <ChevronLeft /> Previous
          </Button>
          <Button onClick={nextStep} disabled={currentStep === steps.length - 1}>
            Next <ChevronRight />
          </Button>
        </div>
      </div>
      <div className="community-text">
        <p>
          Dealing with issues?{" "}
          <a href="#" className="community-link">
            Join our community
          </a>{" "}
          and connect with other users for help.
        </p>
      </div>
    </div>
  )
}

function InstallStep() {
  return (
    <Tabs defaultValue="quickstart" className="tabs">
      <TabsList>
        <TabsTrigger value="quickstart">Quickstart</TabsTrigger>
        <TabsTrigger value="docker">Docker</TabsTrigger>
        <TabsTrigger value="docker-compose">Docker Compose</TabsTrigger>
      </TabsList>

      <TabsContent value="quickstart">
        <div className="panel">
          <h4 className="panel-heading">Quick Start? Use our OSS Gigapipe Demo</h4>
          <p className="mb-4">The demo ships with Gigapipe, Grafana and ClickHouse ready to use</p>
          <div className="flex gap-2">
            <Button variant="outline" className="flex gap-2">
              <Github />
              <a href="https://github.com/metrico/gigapipe-oss-demo" target="_blank" rel="noopener noreferrer">
                Gigapipe Demo Repository
              </a>
            </Button>
            <Badge className="badge-green">🔋 batteries included</Badge>
          </div>
          <p className="text-xs mt-2">Ships with config, data and datasources</p>
        </div>
      </TabsContent>

      <TabsContent value="docker">
        <div className="panel">
          <h4 className="panel-heading">Deploy using Docker or K8s</h4>
          <div className="panel-code">ghcr.io/metrico/gigapipe:latest</div>
          <div className="space-y">
            <div className="flex gap-2">
              <span className="panel-item-icon">▶</span>
              <p>
                Configure Gigapipe using{" "}
                <a href="/docs/config" className="community-link">
                  ENV Settings
                </a>
              </p>
            </div>
            <div className="flex gap-2">
              <span className="panel-item-icon">▶</span>
              <p>Gigapipe requires ClickHouse for data storage</p>
            </div>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="docker-compose">
        <div className="panel">
          <h4 className="panel-heading">Deploy using Docker Compose</h4>
          <pre className="panel-pre">
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
          <div className="space-y">
            <div className="flex gap-2">
              <span className="panel-item-icon">▶</span>
              <p>
                Configure Gigapipe using{" "}
                <a href="/docs/config" className="community-link">
                  ENV Settings
                </a>
              </p>
            </div>
            <div className="flex gap-2">
              <span className="panel-item-icon">▶</span>
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
    <Tabs defaultValue="logs" className="tabs">
      <TabsList>
        <TabsTrigger value="logs">Logs</TabsTrigger>
        <TabsTrigger value="metrics">Metrics</TabsTrigger>
        <TabsTrigger value="traces">Traces</TabsTrigger>
        <TabsTrigger value="profiles">Profiles</TabsTrigger>
        <TabsTrigger value="opentelemetry">OpenTelemetry</TabsTrigger>
      </TabsList>

      <TabsContent value="logs">
        <div className="panel">
          <h4 className="panel-heading">⭐ Use any Loki compatible Agent or Client</h4>
          <div className="panel-list">
            {[
              { name: "Grafana Alloy", url: "https://grafana.com/docs/alloy/latest/" },
              { name: "Grafana Agent", url: "https://grafana.com/docs/agent/latest/" },
              { name: "Vector", url: "https://vector.dev/" },
              { name: "Opentelemetry", url: "https://github.com/metrico/otel-collector" },
              { name: "Telegraf", url: "https://www.influxdata.com/time-series-platform/telegraf/" },
              { name: "Fluentd", url: "https://www.fluentd.org/" },
              { name: "Logstash", url: "https://opensearch.org/docs/latest/tools/logstash/index/" },
            ].map((agent) => (
              <a key={agent.name} href={agent.url} target="_blank" rel="noopener noreferrer" className="panel-item">
                <Package className="panel-item-icon" />
                <span className="panel-item-text">{agent.name}</span>
                <ExternalLink className="panel-item-external" />
              </a>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="metrics">
        <div className="panel">
          <h4 className="panel-heading">⭐ Use any Prometheus compatible Agent or Client</h4>
          <div className="panel-list">
            {[
              { name: "Grafana Alloy", url: "https://grafana.com/docs/alloy/latest/" },
              { name: "Grafana Agent", url: "https://grafana.com/docs/agent/latest/" },
              { name: "Vector", url: "https://vector.dev/" },
              { name: "Opentelemetry", url: "https://github.com/metrico/otel-collector" },
            ].map((agent) => (
              <a key={agent.name} href={agent.url} target="_blank" rel="noopener noreferrer" className="panel-item">
                <BarChart3 className="panel-item-icon" />
                <span className="panel-item-text">{agent.name}</span>
                <ExternalLink className="panel-item-external" />
              </a>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="traces">
        <div className="panel">
          <h4 className="panel-heading">⭐ Use any Tempo/Zipkin compatible Agent or Client</h4>
          <div className="panel-list">
            {[
              { name: "Grafana Alloy", url: "https://grafana.com/docs/alloy/latest/" },
              { name: "Grafana Agent", url: "https://grafana.com/docs/agent/latest/" },
              { name: "Zipkin", url: "https://zipkin.io/" },
              { name: "Opentelemetry", url: "https://github.com/metrico/otel-collector" },
            ].map((agent) => (
              <a key={agent.name} href={agent.url} target="_blank" rel="noopener noreferrer" className="panel-item">
                <Activity className="panel-item-icon" />
                <span className="panel-item-text">{agent.name}</span>
                <ExternalLink className="panel-item-external" />
              </a>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="profiles">
        <div className="panel">
          <h4 className="panel-heading">⭐ Use any Pyroscope SDK compatible Agent or Client</h4>
          <div className="panel-list">
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
              <a key={agent.name} href={agent.url} target="_blank" rel="noopener noreferrer" className="panel-item">
                <Layers className="panel-item-icon" />
                <span className="panel-item-text">{agent.name}</span>
                <ExternalLink className="panel-item-external" />
              </a>
            ))}
          </div>
        </div>
      </TabsContent>

      <TabsContent value="opentelemetry">
        <div className="panel">
          <h4 className="panel-heading">⭐ Use Gigapipe with Opentelemetry Agents</h4>
          <div className="flex-col gap-4">
            <a
              href="https://github.com/metrico/otel-collector"
              target="_blank"
              rel="noopener noreferrer"
              className="panel-item"
            >
              <Package className="panel-item-icon" />
              <span className="panel-item-text">Gigapipe OTel Collector</span>
              <ExternalLink className="panel-item-external" />
            </a>
            <p className="text-sm mt-4">
              The <strong>gigapipe-otel-collector</strong> is designed to store observability data (Traces, Logs,
              Metrics, Profiles) from multiple vendors/platforms into{" "}
              <a href="https://github.com/clickhouse/clicklhouse" className="community-link">
                ClickHouse
              </a>{" "}
              using gigapipe fingerprinting and table formats transparently accessible through gigapipe APIs via LogQL,
              PromQL, Tempo and Pyroscope queries.
            </p>
            <img
              src="https://github.com/metrico/otel-collector/assets/1423657/692b54e9-88ef-49c8-996d-5dbd73ee0782"
              alt="Gigapipe OTel Collector Architecture"
              className="rounded-lg border w-full max-h-64 object-contain bg-white mt-4"
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

function ExploreStep() {
  return (
    <Tabs defaultValue="logs" className="tabs">
      <TabsList>
        <TabsTrigger value="logs">Logs</TabsTrigger>
        <TabsTrigger value="metrics">Metrics</TabsTrigger>
        <TabsTrigger value="traces">Traces</TabsTrigger>
        <TabsTrigger value="profiles">Profiles</TabsTrigger>
        <TabsTrigger value="view">View</TabsTrigger>
      </TabsList>

      <TabsContent value="logs">
        <div className="panel">
          <h4 className="panel-heading">⭐ Explore Logs using the native Loki Datasource</h4>
          <div className="media-container">
            <iframe
              src="https://demo.arcade.software/GKaq4SJRBPYyCZgoWBoM?embed"
              className="media-iframe"
              title="Gigapipe Logs Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="metrics">
        <div className="panel">
          <h4 className="panel-heading">⭐ Explore Metrics using the native Prometheus/Mimir Datasource</h4>
          <div className="media-container">
            <iframe
              src="https://demo.arcade.software/r2A4ia93hPs96pyiaFQx?embed"
              className="media-iframe"
              title="Gigapipe Metrics Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="traces">
        <div className="panel">
          <h4 className="panel-heading">⭐ Explore Traces using the native Tempo Datasource</h4>
          <div className="media-container">
            <iframe
              src="https://demo.arcade.software/G43G6ja4CHJYpF9rc3V2?embed"
              className="media-iframe"
              title="Gigapipe Traces Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </TabsContent>

      <TabsContent value="profiles">
        <div className="panel">
          <h4 className="panel-heading">⭐ Explore Profiles using the native Pyroscope Datasource</h4>
          <div className="media-container">
            <img
              src="https://github.com/metrico/qryn-docs/assets/1423657/3fe7167e-504a-42c0-bf51-bdb090ce0f6b"
              alt="Gigapipe Profiles Demo"
              className="media-image"
            />
          </div>
        </div>
      </TabsContent>

      <TabsContent value="view">
        <div className="panel">
          <h4 className="panel-heading">⭐ No Grafana? Explore Logs, Metrics and Traces using Gigapipe View</h4>
          <div className="media-container">
            <img
              src="https://user-images.githubusercontent.com/1423657/200136242-f4133229-ee7c-45e0-8228-8734cf56140a.gif"
              alt="Gigapipe View Demo"
              className="media-image-cover"
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

function ExtendStep() {
  return (
    <div className="space-y">
      <div className="panel">
        <h4 className="panel-heading">Any tutorial or example from Grafana Cloud should work as-is in Gigapipe</h4>
        <div className="media-container">
          <img
            src="https://user-images.githubusercontent.com/1423657/184538094-13c11500-24ef-4468-9f33-dc9d564238e3.gif"
            alt="Gigapipe Demo"
            className="media-image-cover"
          />
        </div>
      </div>

      <div className="grid grid-3">
        <Card>
          <CardHeader>
            <CardTitle>Grafana Dashboards</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Import any Grafana dashboard directly into your Gigapipe setup.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink /> Browse Dashboards
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Alerting Rules</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Set up alerting rules just like you would in Grafana Cloud.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink /> Learn More
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Integrations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Connect with your existing tools and services seamlessly.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
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
    <div className="space-y success-container">
      <div className="py-8 flex-col items-center">
        <div className="success-icon">
          <Check />
        </div>
        <h3 className="success-title">You're all set! 🎉</h3>
        <p className="success-text">
          If you've used <strong>Grafana</strong> or <strong>Grafana Cloud</strong> before,{" "}
          <em>You will feel right at home.</em>
        </p>
        <p className="success-text mt-2">
          ... and since there's nothing new to learn, the Team can just focus on <em>data.</em>{" "}
          <strong>Whoo-hoo!</strong> 🎉
        </p>
      </div>

      <div className="grid grid-2">
        <Card>
          <CardHeader>
            <CardTitle>Join Our Community</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Connect with other Gigapipe users, share your experiences, and get help.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              <ExternalLink /> Join Community
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>GitHub Repository</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Check out our open-source code, report issues, or contribute.</p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">
              <Github /> View on GitHub
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="warning-box">
        <h4 className="warning-title">AGPLv3 License</h4>
        <p className="warning-text">Gigapipe is licensed under the AGPLv3 License and available on Github</p>
      </div>
    </div>
  )
}

