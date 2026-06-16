import fs from "node:fs";
const required = [
  "public/index.html",
  "public/articles/index.html",
  "public/skill/index.html",
  "skills/hermes-email/SKILL.md",
  "skills/hermes-email/agents/openai.yaml",
  "skills/hermes-email/references/operating-checklist.md"
];
for (const file of required) {
  if (!fs.existsSync(file)) throw new Error(`Missing ${file}`);
}
const skill = fs.readFileSync("skills/hermes-email/SKILL.md", "utf8");
if (!skill.startsWith("---\nname: hermes-email\n")) throw new Error("Invalid skill frontmatter");
const html = fs.readFileSync("public/index.html", "utf8");
if (!html.includes("npx skills add hermes-email")) throw new Error("Missing install shortcut");
console.log("hermesemailskill.com ok");
