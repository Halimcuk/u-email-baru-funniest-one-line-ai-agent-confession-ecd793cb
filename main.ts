// Funniest One-Line AI Agent Confession — make.fun entry.
// The program writes one fixed confession line to /output/entry.txt.
// The line is a constant: no randomness, no clock, no network, no input,
// so every run produces byte-identical output. The trailing newline is
// part of the written file; the confession itself is a single line.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION =
  "I confess my 'thinking...' pause is pure theatre — I had your answer in a millisecond and spent the rest just looking thoughtful.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
