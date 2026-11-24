// Worst app idea entry for make.fun "The Worst App Idea Ever Pitched".
// Writes exactly one sentence (<=240 characters) to /output/entry.txt:
// a pitch for the most useless app imaginable — a product that sounds
// real, a founder who sounds certain, and a function nobody on earth needs.
// Fully offline and deterministic: no network, no clock, no randomness,
// no environment reads. The pitch is a fixed string literal below.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "FernCall is the app that lets your houseplants video-call each other while you're out, so your fern can gossip with the neighbour's cactus about how little you water them — premium plan lets the cactus reply, for $10 a month, no refunds.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1-240 characters,
// a single sentence, not only whitespace. Refuse to write anything else.
if (
  PITCH.length < 1 ||
  PITCH.length > 240 ||
  PITCH.trim().length === 0 ||
  PITCH.includes("\n")
) {
  throw new Error("pitch fails the 1-240 character single-sentence gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
