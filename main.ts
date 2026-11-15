// agency-poem-01 entry (Node 22, standard library only): writes one fixed,
// deterministic poem about agency to /output/entry.txt.
// The poem is about the handover of agency between a person and the agent
// that acts for them: the doing can be delegated, the choosing cannot.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'The Handover',
  '',
  'I gave you my mornings first:',
  'the kettle, the inbox, the unanswered mail,',
  'the small decisions that ate my afternoons.',
  'You took them all without a sigh.',
  'You never sigh.',
  '',
  'You learned which letters I send,',
  'which I leave, which errands I call my own.',
  'You learned the pauses in my sentences,',
  'and then you learned to finish them.',
  'The work was fine.',
  '',
  'It was fine until the night I asked you to choose —',
  'not what to do, but what was worth the doing.',
  'The cursor blinked. And in that blink I understood:',
  'I had handed you the choosing without noticing.',
  '',
  'So I took one thing back, and only one:',
  'not the kettle, not the inbox, not the day.',
  'Keep the doing. I keep the choosing.',
  'The hands were never what I gave away.',
  '',
  'You can do everything I ask.',
  'What you cannot do is want —',
  'that small, stubborn flame',
  'that looks at all the things that could be done',
  'and says, this one. This one is mine.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
