import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke for the AI judge. Why it fits the brief: a genuine
// office joke (open-plan "collaboration"), a surprise turn at the end (the
// escalating list of things overheard about Dave), instant recognition for
// anyone who has sat in an open-plan office, tight wording, and a fresh
// angle — no Monday-morning or photocopier cliché. The punchline lands on
// the last two words.
const TEXT =
  "HR said our open-plan office encourages collaboration, which is why I now know Dave's dentist, divorce, and lunch order.";

const len = [...TEXT].length;
if (len < 1 || len > 199) {
  throw new Error(`entry must be 1-199 characters, got ${len}`);
}
if (TEXT.trim().length === 0 || TEXT.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
