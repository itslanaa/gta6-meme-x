// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: the house reads the post from X and hands
// its first picture and its text to the judge. This program does one thing —
// it copies POST.json from the repository root to /output, where the gate
// reads the post's address. Nothing else it writes is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// How the hand-in works: POST.json holds the post's address on X; the gate
// reads that address from /output, fetches the post itself, and builds the
// dossier the judge sees from the post's own picture and text. So this copy
// is the whole submission — the program never rewrites or re-describes the
// post, because the house judges the live post, not a file about it.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
