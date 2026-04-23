---

name: technical-reference
description: Enforces a standardized technical reference for Shopify applications to improve structure, consistency, and changelog impact awareness.
version: 1.0.0
last_updated: 2026-04-22
status: stable
----------------------------------------------------------------------------------------------------------------------------------------------------

# Technical Reference Skill

## Purpose

This skill ensures that every Shopify application maintains a structured, explicit, and up-to-date technical reference document.

The goal is to:

* make system structure explicit
* reduce undocumented behavior
* improve long-term maintainability
* enable future changelog impact analysis

---

## Scope

This skill applies to:

* Shopify applications
* applications integrating with Shopify APIs or platform features
* codebases where Shopify is a core dependency

It is not a generic documentation tool.
It is specifically designed for **Shopify-related systems**.

---

## Required document

The following file must exist:

```text
/docs/technical-reference.md
```

---

## When to use this skill

This skill must be used:

* when initializing a new Shopify application
* when the technical reference does not exist
* before completing any task affecting Shopify integration
* before a release involving Shopify-related changes

---

## Mandatory triggers

This skill becomes mandatory whenever changes affect:

* Admin API
* Storefront API
* GraphQL or REST usage
* scopes
* webhooks
* authentication or session logic
* billing
* Shopify extensions (Admin, Checkout, Theme)
* Shopify Functions
* background jobs interacting with Shopify
* core business logic tied to Shopify

---

## Responsibilities

When invoked, the agent must:

### 1. Ensure the document exists

* Create `/docs/technical-reference.md` if missing
* Use the official template
* Preserve the full structure

---

### 2. Inspect the implementation

Identify and extract:

* Shopify APIs in use
* scopes
* webhook topics
* auth and session behavior
* billing usage
* extensions and functions
* background jobs and sync processes
* core business flows
* external dependencies
* known risk areas

---

### 3. Update the document

* Reflect all relevant implementation changes
* Update only values, never the structure
* Keep entries explicit and factual

---

### 4. Validate completeness

Ensure that:

* all required sections are present
* Shopify-related sections are explicit
* no critical information is implicit
* non-applicable fields are marked as `Not applicable`
* unknown fields are marked as `Needs confirmation`

---

## Documentation rules

### Format

Prefer:

* short bullet points
* explicit values
* consistent terminology

Avoid:

* long prose
* vague descriptions
* implicit assumptions

---

### Structure

* Do not modify the template structure
* Do not remove required sections
* Do not merge sections

---

### Consistency

* Keep wording stable across updates
* Ensure entries remain machine-readable

---

## Completion rule

A task is **not complete** if:

* the technical reference is outdated
* Shopify-related changes are not documented
* required sections are missing or incomplete

---

## Output expectation

A valid result of this skill is:

* a document at `/docs/technical-reference.md`
* structure matching the official template
* content aligned with the current implementation
* validation status updated

---

## Notes for agents

* Do not invent missing information
* Prefer explicit uncertainty over assumptions
* Always prioritize accuracy over completeness when uncertain

---

## Validation

After any update to the technical reference:

- Run the validator:
  node skills/technical-reference/scripts/validate.js

- If validation fails:
  - Fix all errors
  - Re-run validation

A task is not complete until validation passes.

---

## Skill Version

- Version: 1.0.0
- Last updated: 2026-04-22
