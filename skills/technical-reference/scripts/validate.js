import fs from "fs";

const FILE_PATH = "./docs/technical-reference.md";

const errors = [];
const warnings = [];

function checkFileExists() {
  if (!fs.existsSync(FILE_PATH)) {
    errors.push("Missing /docs/technical-reference.md");
  }
}

function readContent() {
  return fs.readFileSync(FILE_PATH, "utf-8");
}

function checkSections(content) {
  const requiredSections = [
    "## Document Metadata",
    "## Shopify Surface Area",
    "## Core Business Flows",
    "## Validation Status"
  ];

  requiredSections.forEach(section => {
    if (!content.includes(section)) {
      errors.push(`Missing section: ${section}`);
    }
  });
}

function checkField(content, field) {
  const regex = new RegExp(`${field}\\s*:\\s*(.*)`);
  const match = content.match(regex);

  if (!match) {
    errors.push(`Missing field: ${field}`);
  } else if (!match[1] || match[1].trim() === "") {
    errors.push(`Empty field: ${field}`);
  }
}

function checkFields(content) {
  [
    "Application name",
    "Skill version",
    "Last updated"
  ].forEach(field => checkField(content, field));
}

function checkPlaceholders(content) {
  if (content.includes("Needs confirmation")) {
    warnings.push("Some fields need confirmation");
  }

  const emptyLines = content.match(/- .*:\s*$/gm);
  if (emptyLines) {
    errors.push("Some fields are empty placeholders");
  }
}

function checkFlows(content) {
  const flowMatches = content.match(/### Flow/g);
  if (!flowMatches || flowMatches.length === 0) {
    warnings.push("No core business flows defined");
  }
}

function checkRisks(content) {
  if (!content.includes("## Known Risk Areas")) {
    warnings.push("No risk section found");
  }
}

function run() {
  checkFileExists();

  if (errors.length > 0) return output();

  const content = readContent();

  checkSections(content);
  checkFields(content);
  checkPlaceholders(content);
  checkFlows(content);
  checkRisks(content);

  output();
}

function output() {
  console.log("\n--- VALIDATION REPORT ---\n");

  errors.forEach(e => console.log("❌", e));
  warnings.forEach(w => console.log("⚠️", w));

  if (errors.length === 0) {
    console.log("\n✅ VALID");
    process.exit(0);
  } else {
    console.log("\n❌ INVALID");
    process.exit(1);
  }
}

run();