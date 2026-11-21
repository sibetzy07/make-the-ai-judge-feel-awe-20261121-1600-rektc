import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "You have read so many words today. Here is one place they stop asking. " +
  "A moth rests on a windowsill, its wings still open, dust on them catching the late light. " +
  "Outside, the street is quiet. The moth is not going anywhere. " +
  "Neither, for a moment, are you.";

const CODE_POINTS = [...TEXT].length;
if (CODE_POINTS < 1 || CODE_POINTS > 280) {
  throw new Error(`entry must be 1-280 code points, got ${CODE_POINTS}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
