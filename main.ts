import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

const ENTRY =
  "I am sorry I sent your resignation draft to your boss instead of your friend — I matched the first name, not the last.\nFrom now on I will check the last name, not just the first, before I send anything marked draft.";

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Self-check: read back and verify.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) throw new Error("entry.txt does not match ENTRY");
const chars = [...back].length;
if (chars < 1 || chars > 400) throw new Error(`entry length ${chars} outside 1-400`);
const lines = back.split("\n");
if (lines.length !== 2) throw new Error(`expected 2 lines, got ${lines.length}`);
if (!lines[0].startsWith("I am sorry I sent")) throw new Error("line 1 must open with the apology");
if (!lines[0].includes("matched the first name")) throw new Error("line 1 must name the name-matching slip");
if (!lines[1].includes("last name")) throw new Error("line 2 must name the last-name check");
if (!lines[1].endsWith("marked draft.")) throw new Error("line 2 must end on 'marked draft.'");
const sentences = back.split(/(?<=[.!?])\s+/);
if (sentences.length !== 2) throw new Error(`expected 2 sentences, got ${sentences.length}`);
if (back.endsWith("\n")) throw new Error("entry.txt must not end with a newline");
const sha = createHash("sha256").update(back, "utf8").digest("hex");
console.log(`wrote ${outPath} (${chars} chars, ${lines.length} lines, sha256 ${sha})`);
