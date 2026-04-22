# Technical Reference Rules

These rules define the non-negotiable constraints for maintaining a valid technical reference.

They apply to both human contributors and AI agents.

---

## 1. Structure is fixed

* The official template structure must be preserved at all times
* Sections must not be removed, renamed, or reordered
* Sections must not be merged
* New sections must not be introduced without updating the standard

The structure is part of the standard and must remain consistent across all applications.

---

## 2. Only values may change

* The structure is global and shared
* Only the **values inside fields** may differ between applications

Do not:

* rewrite sections
* change field names
* introduce custom formats

---

## 3. No implicit information

All Shopify-related behavior must be explicitly documented.

Do not assume that:

* API usage is obvious
* scopes are self-explanatory
* webhook behavior is understood
* auth or session logic is known

If it exists in the implementation, it must appear in the document.

---

## 4. Required fields must be filled

* Required fields must not be empty
* If a field does not apply, it must be marked as `Not applicable`
* If a value is unknown, it must be marked as `Needs confirmation`

Empty fields are not allowed.

---

## 5. Documentation must reflect reality

The technical reference must always match the current implementation.

Do not:

* describe planned features as implemented
* keep outdated information
* leave removed features in the document

The document represents the **current state**, not intentions.

---

## 6. Update in the same change set

Any change affecting Shopify integration must update the technical reference in the same change set.

This includes changes to:

* APIs
* scopes
* webhooks
* auth or session
* billing
* extensions
* background jobs
* business logic tied to Shopify

Delayed updates are not acceptable.

---

## 7. Keep content concise and structured

Prefer:

* short bullet points
* explicit values
* consistent wording

Avoid:

* long paragraphs
* narrative explanations
* ambiguous phrasing

The document must remain:

* readable
* scannable
* machine-friendly

---

## 8. Maintain consistency across updates

* Terminology must remain stable
* Formatting must remain consistent
* Field semantics must not change

Avoid introducing variations between updates or applications.

---

## 9. Do not hide risk or uncertainty

* Known risks must be documented
* Sensitive areas must be explicit
* Unknowns must be marked as `Needs confirmation`

Do not:

* omit risk areas
* hide uncertainty
* assume correctness without verification

---

## 10. Validation is mandatory

The document must pass the official checklist.

A document is invalid if:

* required sections are missing
* Shopify usage is implicit
* fields are incomplete
* structure is altered

---

## 11. Completion is blocked by documentation

A task is not complete if:

* the technical reference is outdated
* the checklist does not pass
* Shopify-related changes are not documented

Documentation is part of the deliverable.

---

## 12. Standard evolution is centralized

* Changes to the template must be made in the official repository
* Applications must not fork or alter the structure locally
* Improvements must be proposed upstream

This ensures long-term compatibility and shared evolution.

---

## Final principle

The technical reference is a **source of truth**, not a best-effort document.

If the document cannot be trusted, the system fails.

Maintain it with the same level of rigor as production code.
