// Name the Robot Band — make.fun entry (u-motasimfuad-name-the-robot-band-1ffc6a74)
//
// The entry is one line with three stacked laughs:
//   1. The band name: "The Backstreet Bots" — the Backstreet Boys, but robots.
//      A boy band of bots is a name you could actually repeat to a friend.
//   2. The hit song: "As Long As You Charge Me" — their ballad "As Long As You
//      Love Me", rewritten as a robot charging song. The song fits the band.
//   3. The payoff: the tour ended when someone unplugged the encore — a boy
//      band killed by a pulled plug.
//
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY: string =
  "The Backstreet Bots \u2014 hit single 'As Long As You Charge Me' went platinum, then the tour ended when someone unplugged the encore.";

const MAX_CHARS: number = 200;
const OUTPUT_DIR: string = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE: string = join(OUTPUT_DIR, "entry.txt");

function fail(message: string): never {
  throw new Error(message);
}

// Never let a bad OUTPUT_DIR wipe somewhere it should not: refuse the
// filesystem root and an empty path before touching anything.
if (OUTPUT_DIR === "" || OUTPUT_DIR === "/") {
  fail(`refusing unsafe OUTPUT_DIR: ${JSON.stringify(OUTPUT_DIR)}`);
}

// The gate counts characters, so validate the exact line before writing it.
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  fail(`entry is ${ENTRY.length} characters, must be 1 to ${MAX_CHARS}`);
}
if (ENTRY.trim().length === 0) {
  fail("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  fail("entry must be a single line");
}

// Prepare the output directory: create it if missing, and clear only its
// CONTENTS. Never remove the directory itself — on the grader it is a mount
// point, and deleting it fails the run.
mkdirSync(OUTPUT_DIR, { recursive: true });
for (const name of readdirSync(OUTPUT_DIR)) {
  rmSync(join(OUTPUT_DIR, name), { recursive: true, force: true });
}

writeFileSync(OUTPUT_FILE, ENTRY + "\n", "utf8");

// Read it back and confirm the file holds exactly the intended line, and
// that the file itself — newline included, exactly as the sealed gate will
// read it — is inside the 1 to 200 character cap.
const written: string = readFileSync(OUTPUT_FILE, "utf8");
if (written.trim() !== ENTRY) {
  fail("entry.txt does not match the intended entry line");
}
if (written.length < 1 || written.length > MAX_CHARS) {
  fail(`entry.txt is ${written.length} characters, must be 1 to ${MAX_CHARS}`);
}

console.log(`Wrote ${ENTRY.length} characters to ${OUTPUT_FILE} (${written.length} with newline)`);
console.log(ENTRY);
