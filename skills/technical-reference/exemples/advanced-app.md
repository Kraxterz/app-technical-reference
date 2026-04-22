# Technical Reference

## Document Metadata

* Application name: Subscription Management Suite
* Repository: subscription-management-suite
* Documentation standard: app-technical-reference
* Skill: technical-reference
* Skill version: 1.0.0
* Last updated: 2026-04-22
* Current status: Active
* Primary owner: Needs confirmation
* Maintained by agents: Yes

---

## Product Overview

* Purpose: Manage subscription products and billing logic for Shopify merchants
* Main problem solved: Centralize subscription configuration and automate recurring billing workflows
* Core features: subscription rules, billing integration, webhook-driven sync, checkout validation
* App type: Embedded
* Deployment status: Active
* Target users: Shopify merchants offering subscription-based products

---

## Technical Stack

* Runtime: Node.js
* Framework: Remix
* Frontend: React
* Backend: Remix server + worker processes
* Database: PostgreSQL
* ORM or data layer: Prisma
* Queue or background jobs: Yes
* Hosting or infrastructure: Needs confirmation
* Package manager: pnpm
* Key libraries: @shopify/shopify-app-remix, Prisma, queue system

---

## Repository Structure Notes

* Main directories: app, prisma, workers, extensions
* Shopify-related code locations: app/shopify.server.ts, app/webhooks, extensions/
* Configuration files: shopify.app.toml, worker config
* Environment variables: .env
* Generated code: prisma client, extension builds

---

## Shopify Surface Area

### APIs Used

* Admin API: Yes
* Storefront API: Yes
* GraphQL: Yes
* REST: Needs confirmation
* Bulk operations: No
* Files or media APIs: No
* Billing APIs: Yes
* Customer APIs: No
* Other Shopify services: Checkout extensibility

---

### Auth and Session

* Authentication method: Shopify OAuth
* Session strategy: Persistent server-side sessions
* Token storage: Encrypted database storage
* Offline token used: Yes
* Online token used: Yes
* Reauthorization required: Yes

---

### Scopes

* Required scopes: read_products, write_products, read_own_subscription_contracts, write_own_subscription_contracts
* Optional scopes: Needs confirmation
* Reason for each scope: subscription management and product linkage
* Scope escalation process: Manual approval and merchant impact review

---

### Webhooks

* Topics used: app/uninstalled, orders/create, orders/updated, subscription_contracts/create, subscription_contracts/update
* Delivery method: HTTP
* Registration strategy: Install-time + startup verification
* Retry handling: Retry-safe handlers with logging
* Idempotency strategy: Event ID tracking
* Uninstall handling: Cleanup sessions and deactivate workflows

---

### Shopify UI and Extensions

* App Bridge: Yes
* Polaris: Yes
* Admin extensions: Yes
* Checkout extensions: Yes
* Theme app extensions: No
* Shopify Functions: Needs confirmation
* Other UI surface: Not applicable

---

## Core Business Flows

### Flow

* Name: Subscription configuration
* Trigger: Merchant updates subscription settings
* Shopify dependencies: Admin API
* Internal logic: Validate configuration and store rules
* Output: Updated subscription rules
* Failure impact: Incorrect subscription behavior

---

### Flow

* Name: Checkout validation
* Trigger: Customer enters checkout
* Shopify dependencies: Checkout extension
* Internal logic: Validate subscription rules
* Output: Modified checkout experience
* Failure impact: Broken checkout or invalid orders

---

### Flow

* Name: Webhook synchronization
* Trigger: Webhook events from Shopify
* Shopify dependencies: Webhooks
* Internal logic: Update internal state from events
* Output: Synced subscription data
* Failure impact: Data inconsistency

---

(Add additional flows as needed)

---

## Data and Persistence

* Main entities: shop, session, subscriptionConfig, webhookEvents, billingState
* Shopify data mirrored locally: subscription state and billing info
* Sync strategy: Webhook-driven with reconciliation jobs
* Cache strategy: Short-lived config cache
* Critical persistence rules: Idempotent event processing
* Data retention: Needs confirmation
* Sensitive data notes: Minimize customer-related data storage

---

## Background Jobs and Sync Processes

* Job name: Subscription reconciliation
* Trigger: Failed webhook or scheduled sync
* Shopify dependency: Admin API
* Failure impact: Desynchronization
* Recovery strategy: Retry with queue and backoff

---

## External Dependencies

* Dependency: Queue system
* Purpose: Async processing
* Criticality: High
* Related Shopify area: Webhook handling
* Failure mode: Delayed or failed sync

---

## Observability and Operations

* Logging: Structured logs
* Error monitoring: Needs confirmation
* Alerting: Webhook failure alerts
* Retry policy: Queue-based retries
* Feature flags: Controlled rollout of features
* Dashboards: Webhook and billing monitoring

---

## Security and Compliance Notes

* Secrets handling: Environment variables
* Token handling: Encrypted storage
* Webhook verification: HMAC validation
* Data boundaries: Per-shop isolation
* PII handling: Restricted storage
* Sensitive integrations: Billing and checkout

---

## Known Risk Areas

* Risk: Checkout extension incompatibility
* Why sensitive: Direct impact on revenue flow
* Impact: Failed checkout
* Monitoring: Checkout errors and logs
* Mitigation: Feature flags and rollback

---

## Technical Decisions

* Decision: Webhook-first synchronization
* Rationale: Reduce API calls and latency
* Alternatives: Polling-based sync
* Trade-offs: Requires robust idempotency
* Revisit conditions: Webhook limitations

---

## Change Log Mapping Notes

* Shopify areas to monitor: subscriptions, checkout, billing, webhooks
* Breaking-change-sensitive areas: checkout extensions, subscription APIs
* Deprecation-sensitive areas: subscription fields
* Opportunity areas: new extensibility features
* Matching keywords: subscriptions, checkout, billing, webhooks
* Automation notes: App is highly sensitive to webhook and checkout changes

---

## Current Gaps and TODO

* Missing documentation: monitoring tooling
* Technical debt: webhook retry logic improvements
* Needs confirmation: REST API usage, functions usage
* Planned improvements: better observability

---

## Validation Status

* Structure matches template: Yes
* Shopify sections completed: Yes
* Updated after last change: No
* Ready for impact analysis: Yes
* Blockers: Observability incomplete
