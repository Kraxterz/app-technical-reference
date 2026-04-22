# Integration with AI agents

This project is designed to work with AI coding agents.

---

## Why integration matters

AI agents can:

* generate code
* modify architecture
* introduce dependencies

Without constraints, they can also:

* create inconsistency
* skip documentation
* introduce implicit behavior

---

## Enforcing structure

Skills provide a way to guide agent behavior.

They define:

* when documentation must be created
* when it must be updated
* what information must be explicit

---

## Recommended usage

In each repository, agent instructions should:

* require the use of specific skills
* enforce document presence
* block completion if requirements are not met

---

## Example pattern

Agents should treat documentation as part of the implementation.

This means:

* creating required artifacts early
* updating them alongside code changes
* validating them before completion

---

## Expected outcome

With proper integration:

* documentation stays aligned with code
* structure remains consistent across projects
* systems become easier to understand and maintain

---

## Important note

This project does not depend on a specific agent.

It is compatible with any system capable of:

* reading instructions
* applying structured workflows
* updating files consistently
