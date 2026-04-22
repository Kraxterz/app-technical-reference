# Versioning

This project follows semantic versioning principles for its standards and skills.

---

## Versioning scope

Versioning applies to:

* skills
* templates
* validation rules
* schemas

Each skill should define its own version.

---

## Version format

```text
MAJOR.MINOR.PATCH
```

---

## Version types

### Patch

Used for:

* wording improvements
* typo fixes
* non-functional clarifications
* documentation updates without structural impact

---

### Minor

Used for:

* adding new fields
* adding optional sections
* expanding documentation
* backward-compatible improvements

---

### Major

Used for:

* changing required fields
* modifying structure
* renaming sections
* breaking compatibility with existing documents

---

## Backward compatibility

Whenever possible:

* prefer backward-compatible changes
* avoid breaking existing implementations
* document migration paths when necessary

---

## Skill versioning

Each skill must include:

* `version`
* `last_updated`

Example:

```yaml
version: 1.0.0
last_updated: 2026-04-22
```

---

## Template evolution

Template changes must be:

* clearly documented
* versioned
* justified

Breaking changes should only be introduced when necessary.

---

## Migration mindset

When a breaking change is introduced:

* explain what changed
* explain why it changed
* provide guidance for updating existing documents

---

## Repository versioning

The repository itself may be versioned, but:

* the most important unit is the **skill version**
* skills should be independently evolvable

---

## Guiding principle

Stability is critical.

A standard that changes too frequently loses trust.

Evolve carefully and deliberately.
