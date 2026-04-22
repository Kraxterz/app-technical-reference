# Technical Reference

## Document Metadata

* Application name: Product Tag Assistant
* Repository: product-tag-assistant
* Documentation standard: app-technical-reference
* Skill: technical-reference
* Skill version: 1.0.0
* Last updated: 2026-04-22
* Current status: Active
* Primary owner: Needs confirmation
* Maintained by agents: Yes

---

## Product Overview

* Purpose: Assist merchants in generating and applying product tags
* Main problem solved: Reduce manual tagging effort for product catalogs
* Core features: product analysis, tag suggestion, tag application
* App type: Embedded
* Deployment status: Active
* Target users: Shopify merchants managing product catalogs

---

## Technical Stack

* Runtime: Node.js
* Framework: Remix
* Frontend: React
* Backend: Remix server runtime
* Database: PostgreSQL
* ORM or data layer: Prisma
* Queue or background jobs: Not applicable
* Hosting or infrastructure: Needs confirmation
* Package manager: pnpm
* Key libraries: @shopify/shopify-app-remix, @prisma/client

---

## Repository Structure Notes

* Main directories: app, prisma, public
* Shopify-related code locations: app/shopify.server.ts, app/routes
* Configuration files: shopify.app.toml, package.json
* Environment variables: .env
* Generated code: prisma client

---

## Shopify Surface Area

### APIs Used

* Admin API: Yes
* Storefront API: No
* GraphQL: Yes
* REST: No
* Bulk operations: No
* Files or media APIs: No
* Billing APIs: No
* Customer APIs: No
* Other Shopify services: Not applicable

---

### Auth and Session

* Authentication method: Shopify OAuth via official library
* Session strategy: Server-side session storage
* Token storage: Persistent session storage
* Offline token used: Yes
* Online token used: Yes
* Reauthorization required: Yes

---

### Scopes

* Required scopes: read_products, write_products
* Optional scopes: Not applicable
* Reason for each scope: read_products for analysis, write_products for applying tags
* Scope escalation process: Manual review before adding additional scopes

---

### Webhooks

* Topics used: app/uninstalled
* Delivery method: HTTP
* Registration strategy: Registered on install
* Retry handling: Platform retry with logging
* Idempotency strategy: Handlers tolerate duplicate events
* Uninstall handling: Remove sessions and local data

---

### Shopify UI and Extensions

* App Bridge: Yes
* Polaris: Yes
* Admin extensions: No
* Checkout extensions: No
* Theme app extensions: No
* Shopify Functions: No
* Other UI surface: Not applicable

---

## Core Business Flows

### Flow

* Name: Product tag suggestion
* Trigger: Merchant opens product analysis page
* Shopify dependencies: Admin GraphQL product queries
* Internal logic: Analyze product data and generate suggested tags
* Output: List of suggested tags
* Failure impact: No suggestions available to merchant

---

### Flow

* Name: Tag application
* Trigger: Merchant approves suggested tags
* Shopify dependencies: Admin GraphQL mutation
* Internal logic: Validate selection and update product
* Output: Updated product tags
* Failure impact: Tags not applied

---

(Add additional flows as needed)

---

## Data and Persistence

* Main entities: shop, session, tagSuggestionAudit
* Shopify data mirrored locally: minimal shop metadata
* Sync strategy: On-demand reads from Shopify
* Cache strategy: Not applicable
* Critical persistence rules: Maintain audit of applied tags
* Data retention: Needs confirmation
* Sensitive data notes: Tokens stored server-side only

---

## Background Jobs and Sync Processes

* Job name: Not applicable
* Trigger: Not applicable
* Shopify dependency: Not applicable
* Failure impact: Not applicable
* Recovery strategy: Not applicable

---

## External Dependencies

* Dependency: Tag generation service
* Purpose: Generate product tags
* Criticality: Medium
* Related Shopify area: Product enrichment
* Failure mode: Suggestions unavailable

---

## Observability and Operations

* Logging: Server-side logs
* Error monitoring: Needs confirmation
* Alerting: Needs confirmation
* Retry policy: Default HTTP retries
* Feature flags: Not applicable
* Dashboards: Needs confirmation

---

## Security and Compliance Notes

* Secrets handling: Environment variables
* Token handling: Server-side only
* Webhook verification: HMAC validation required
* Data boundaries: Shop-level isolation
* PII handling: Avoid storing customer data
* Sensitive integrations: OAuth session handling

---

## Known Risk Areas

* Risk: Incorrect product updates
* Why sensitive: Direct impact on merchant catalog
* Impact: Wrong tags applied
* Monitoring: Mutation errors and merchant feedback
* Mitigation: Approval step before applying tags

---

## Technical Decisions

* Decision: Use GraphQL Admin API only
* Rationale: Align with Shopify direction
* Alternatives: REST API
* Trade-offs: Requires GraphQL familiarity
* Revisit conditions: API feature gaps

---

## Change Log Mapping Notes

* Shopify areas to monitor: Admin API, GraphQL, product mutations
* Breaking-change-sensitive areas: Product mutation schema
* Deprecation-sensitive areas: Product fields
* Opportunity areas: Product automation features
* Matching keywords: products, GraphQL, tags
* Automation notes: App depends on product read/write flows

---

## Current Gaps and TODO

* Missing documentation: Hosting and monitoring
* Technical debt: Needs confirmation
* Needs confirmation: Observability tooling
* Planned improvements: Add monitoring details

---

## Validation Status

* Structure matches template: Yes
* Shopify sections completed: Yes
* Updated after last change: No
* Ready for impact analysis: Yes
* Blockers: Missing observability details
