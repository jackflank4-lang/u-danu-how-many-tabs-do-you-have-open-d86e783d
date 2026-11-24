// How Many Tabs Do You Have Open? — make.fun entry
// Writes a single number (digits only) to /output/entry.txt:
// the honest count of open browser tabs. Gate: 1-5 characters.
//
// The count: 137. Three digits, odd, specific — not a round number
// like 100 or 200, which reads invented. High enough to surprise,
// low enough to be a real person's lived-in tab hoard: someone who
// opens a tab for everything and never closes one.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TAB_COUNT = "137";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TAB_COUNT, "utf8");

// Re-read and verify the gate: 1-5 characters, digits only.
const written = readFileSync(outPath, "utf8");
if (!/^[0-9]{1,5}$/.test(written)) {
  throw new Error(`entry.txt failed the gate: ${JSON.stringify(written)}`);
}
