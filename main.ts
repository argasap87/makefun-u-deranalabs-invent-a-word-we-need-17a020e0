// Fingerrattle — Invent a Word We Need (make.fun)
// Writes one coined word + one-line definition to /output/entry.txt.
// Node 22+ stdlib only. No network, no external files.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Fingerrattle — the idle tapping of one finger on a desk while you
// wait for a page to load. "Idle" (not "unconscious") is the honest
// motive: the tapper is bored, not unaware; "one finger on a desk"
// and "a page" keep the image concrete so it lands in one reading.
const LINE =
  "Fingerrattle \u2014 the idle tapping of one finger on a desk while you wait for a page to load.";

// Gate guard: the sealed scorer accepts only UTF-8 text of 1-140
// characters, not only whitespace. Fail loudly instead of writing junk.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(
    `entry line fails the gate: ${LINE.length} characters (must be 1-140, non-blank)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
console.log(LINE);
