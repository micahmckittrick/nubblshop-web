// Knot guides. Each entry becomes a page at /knots/<slug>, listed in this
// order within its group. Step photos are optional: put them in
// public/knots/<slug>/ and set `image` to "/knots/<slug>/<file>". A step
// without one shows a placeholder on Preview and nothing on production.

export type KnotLevel = "Easy" | "Medium" | "Tricky";

export type KnotStep = {
  text: string;
  image?: string;
};

export type Knot = {
  slug: string;
  name: string;
  aka?: string;
  group: "single" | "combine";
  level: KnotLevel;
  time: string;
  needs?: string;
  favorite?: boolean;
  summary: string;
  whyItFidgets: string;
  steps: KnotStep[];
  untie: string;
  tips: string[];
};

export const knotGroups = [
  {
    id: "single",
    title: "One Fuzzy",
    intro: "Everything you can tie with a single Fuzzy.",
  },
  {
    id: "combine",
    title: "Combining Fuzzies",
    intro: "Got more than one? Link them, join them or braid them.",
  },
] as const;

export const knots: Knot[] = [
  {
    slug: "ring",
    name: "The ring",
    aka: "Ends tied together",
    group: "single",
    level: "Easy",
    time: "10 seconds",
    favorite: true,
    summary: "Stretch it long and tie the ends together into a loop for your fingers.",
    whyItFidgets:
      "A ring stays on your fingers without being held. Spin it, stretch it between two fingers or roll the knot around the loop.",
    steps: [
      { text: "Stretch the strip along its length to make it longer and thinner." },
      { text: "Hold one end in each hand and bring them together." },
      {
        text: "Cross the right end over the left, wrap it under and bring it back up, like the first step of tying a shoe.",
      },
      {
        text: "Cross the end that's now on the left over the right one, wrap it under and up through the gap.",
      },
      {
        text: "Pull the ends to tighten. The tails should lie flat alongside the ring. If they stick out crosswise, undo the second half and cross the other way.",
      },
    ],
    untie: "Push the fabric toward the knot to loosen it, then pull the ends back out.",
    tips: [
      "Stretch it more before tying for a bigger ring, less for a snug one.",
      "Tie a second knot on top of the first for a chunky knob to roll.",
      "Leave long tails and tie a few knots along them for a ring with a dangle.",
      "Party trick: hold one tail and the fabric right beside it on the same side, and pull them straight apart. The knot flips loose and slides off.",
    ],
  },
  {
    slug: "center-knot",
    name: "Center knot",
    aka: "Overhand knot",
    group: "single",
    level: "Easy",
    time: "5 seconds",
    summary: "One knot in the middle: a soft knob to roll, with two tails to play with.",
    whyItFidgets:
      "The knot gives your fingers something firm to roll and squeeze while the tails stay soft and loose.",
    steps: [
      { text: "Give the strip a gentle stretch along its length so there's room to work." },
      { text: "Cross one end over the rest of the strip to make a loop in the middle." },
      { text: "Tuck the end under, then up through the loop." },
      {
        text: "Pull both ends to snug the knot. Pull gently for a soft, loose knot or firmly for a small, tight one.",
      },
    ],
    untie:
      "Push the fabric on both sides toward the knot to loosen it, open the loop with a fingertip and slide the end out. A knot pulled very tight takes a little more patience.",
    tips: [
      "Roll the knot between your thumb and finger, or squeeze it in your fist.",
      "Loosen it a little and you can slide it along the strip.",
    ],
  },
  {
    slug: "end-knots",
    name: "End knots",
    aka: "A knot at each end",
    group: "single",
    level: "Easy",
    time: "10 seconds",
    summary: "A knot at each end gives you something to hold while you stretch.",
    whyItFidgets:
      "Pinch the knots and stretch the middle, or let it go slack and roll a knot in each hand.",
    steps: [
      { text: "Stretch the strip so there's a little extra length at each end." },
      {
        text: "Tie a center knot close to one end: cross the end over to make a small loop, tuck it under and up through, and pull snug.",
      },
      { text: "Do the same at the other end." },
      { text: "Hold a knot in each hand and stretch." },
    ],
    untie: "Undo each knot the same way as a center knot: push the fabric toward it to loosen, then slide the end out.",
    tips: ["Tie each end knot twice for a bigger grip."],
  },
  {
    slug: "slip-knot",
    name: "Slip knot",
    aka: "Pull-to-release knot",
    group: "single",
    level: "Easy",
    time: "5 seconds",
    summary: "A center knot with a tail that undoes it in one tug.",
    whyItFidgets:
      "Tie it, tug the tail, and it's gone. Then do it again. It's the easiest knot to repeat without looking.",
    steps: [
      {
        text: "Stretch the strip a little, then cross one end over to make a loop, as if starting a center knot.",
      },
      { text: "Fold that end back on itself to make a small bend." },
      { text: "Push the bend, not the end, under and up through the loop." },
      {
        text: "Pull the bend and the other end apart to snug it. The tail should stick out on its own.",
      },
    ],
    untie: "Pull the tail. The bend slides back through the loop and the knot falls out.",
    tips: [
      "Leave a longer tail at first so it's easy to find.",
      "Once you have the motion, try it with your eyes closed.",
    ],
  },
  {
    slug: "figure-eight",
    name: "Figure-eight knot",
    group: "single",
    level: "Medium",
    time: "15 seconds",
    summary: "A chunkier knot shaped like the number 8.",
    whyItFidgets:
      "It's bigger than a center knot, so it fills your fingers more, and it stays easy to undo even after a hard tug.",
    steps: [
      { text: "Stretch the strip long. This knot uses more length than a center knot." },
      { text: "Pass one end over the rest of the strip to make a loop." },
      { text: "Keep going: take the end around behind the strip." },
      { text: "Bring the end back to the front and push it down through the first loop." },
      { text: "Pull both ends to tighten. You should see a clear figure 8." },
    ],
    untie:
      "Bend the knot sharply in the middle to loosen it, then work the end back out the way it went in.",
    tips: [
      "If it looks like a plain center knot, the end went through the loop too early. Take it around behind the strip first.",
    ],
  },
  {
    slug: "knot-stack",
    name: "Knot stack",
    aka: "Several knots in a row",
    group: "single",
    level: "Medium",
    time: "30 seconds",
    summary: "Two, three or more knots along one strip.",
    whyItFidgets:
      "A row of bumps to run through your fingers, and a small puzzle to undo one knot at a time.",
    steps: [
      { text: "Stretch the strip as long as it comfortably goes." },
      { text: "Tie a center knot near one end, leaving a short tail." },
      {
        text: "Stretch the fabric past the first knot and tie the next one about a finger-width away.",
      },
      {
        text: "Keep going until you run out of room. Snug each knot the same amount so they look even.",
      },
    ],
    untie:
      "Undo them in reverse, starting with the last knot you tied. Loosen each one by pushing the fabric toward it.",
    tips: [
      "Space them close together for a bumpy, beaded feel, or far apart for a few big knobs.",
      "Mix it up: a figure-eight between two center knots.",
      "Tie them loose if you want to undo them again soon.",
    ],
  },
  {
    slug: "long-strip",
    name: "Long strip",
    aka: "Fuzzies tied end to end",
    group: "combine",
    level: "Easy",
    time: "15 seconds",
    needs: "Two or more Fuzzies",
    summary: "Tie Fuzzies end to end for one long strip.",
    whyItFidgets:
      "More length means more to stretch and room for bigger rings and longer knot stacks.",
    steps: [
      { text: "Overlap the end of one Fuzzy with the end of another." },
      {
        text: "Tie them together the same way you tie a ring: right over left, wrap under, then left over right and through.",
      },
      { text: "Pull all four ends to tighten." },
      { text: "Add more Fuzzies the same way to keep going." },
    ],
    untie: "Push the fabric toward the joining knot to loosen it, then pull the ends apart.",
    tips: [
      "Tie the far ends together too and you've got one giant ring.",
      "Alternate colors for a striped strip.",
    ],
  },
  {
    slug: "linked-rings",
    name: "Linked rings",
    group: "combine",
    level: "Medium",
    time: "30 seconds",
    needs: "Two or more Fuzzies",
    summary: "Two or more rings looped through each other, like a chain.",
    whyItFidgets:
      "Linked rings slide and spin against each other. Roll two around each other in one hand.",
    steps: [
      { text: "Tie one Fuzzy into a ring." },
      { text: "Thread a second Fuzzy through that ring." },
      { text: "Stretch the second Fuzzy and tie its ends together, so the two rings are linked." },
      { text: "Keep adding rings, each one threaded through the last." },
    ],
    untie: "Undo the newest ring's knot first, slide it free, then work back along the chain.",
    tips: [
      "Three linked rings make a chain long enough to pass from hand to hand.",
      "Thread a new ring through two others at once to build a triangle.",
    ],
  },
  {
    slug: "braid",
    name: "Braid",
    group: "combine",
    level: "Medium",
    time: "2 minutes",
    needs: "Three Fuzzies",
    summary: "Three Fuzzies braided together and knotted at both ends.",
    whyItFidgets:
      "Braiding is calm and repetitive, and the finished braid is firm, bumpy and satisfying to squeeze.",
    steps: [
      { text: "Line up three Fuzzies and tie them together near one end with a center knot." },
      { text: "Spread the three strands out: left, middle and right." },
      { text: "Cross the right strand over the middle one. It's now the middle strand." },
      { text: "Cross the left strand over the new middle strand." },
      {
        text: "Keep going, right over middle, then left over middle, keeping the tension even.",
      },
      { text: "Near the bottom, tie all three strands together with another center knot." },
    ],
    untie: "Undo the bottom knot, unbraid the strands, then undo the top knot.",
    tips: [
      "Stretch each strand as you cross it for a tighter, neater braid.",
      "Three colors make the pattern easy to follow.",
    ],
  },
];

export function getKnot(slug: string) {
  return knots.find((k) => k.slug === slug);
}
