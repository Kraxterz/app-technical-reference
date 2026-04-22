# Technical Reference Validation Checklist

This checklist defines the minimum requirements for a valid technical reference.

A document is considered **invalid** if any required item is missing, incomplete, or implicit.

---

## File presence

* [ ] The file exists at `/docs/technical-reference.md`
* [ ] The file is accessible and readable

---

## Structure integrity

* [ ] All required sections from the official template are present
* [ ] Section order matches the template
* [ ] No required section has been removed
* [ ] No sections have been merged or renamed

---

## Document metadata

* [ ] Application name is defined
* [ ] Repository is defined
* [ ] Documentation standard is defined
* [ ] Skill is set to `technical-reference`
* [ ] Skill version is defined
* [ ] Last updated field is filled
* [ ] Current status is defined
* [ ] Maintained by agents is set

---

## Shopify surface area

* [ ] Admin API usage is explicitly stated (Yes / No)
* [ ] Storefront API usage is explicitly stated (Yes / No)
* [ ] GraphQL usage is explicitly stated (Yes / No)
* [ ] REST usage is explicitly stated (Yes / No)
* [ ] Scopes are listed
* [ ] Scope purposes are defined
* [ ] Webhook topics are listed if used
* [ ] Auth and session strategy is defined
* [ ] Billing usage is documented if applicable
* [ ] Extensions usage is explicitly stated (Yes / No)

---

## Core system understanding

* [ ] At least one core business flow is defined
* [ ] Each flow includes trigger, dependencies, and output
* [ ] Data persistence strategy is described
* [ ] Background jobs are documented if applicable
* [ ] External dependencies are listed

---

## Risk and operational awareness

* [ ] At least one risk area is identified
* [ ] Each risk includes impact and monitoring approach
* [ ] Observability or logging approach is defined
* [ ] Security-sensitive elements are documented

---

## Change log readiness

* [ ] Change Log Mapping Notes section is present
* [ ] Shopify areas to monitor are defined
* [ ] At least one sensitive area (breaking or deprecation) is listed
* [ ] Matching keywords are provided

---

## Completeness rules

* [ ] No critical Shopify usage is left implicit
* [ ] No empty required fields remain
* [ ] Non-applicable fields are marked as `Not applicable`
* [ ] Unknown values are marked as `Needs confirmation`

---

## Validation status

* [ ] Validation Status section is present
* [ ] All validation fields are filled
* [ ] Status reflects the current state of the document

---

## Final rule

A technical reference is **not valid** if:

* it is outdated relative to the implementation
* it omits Shopify-related behavior
* it contains implicit or assumed information

Work is **not complete** until the document passes this checklist.
