# NubblShop

Website for NubblShop, a trade name of McKittrick LLC and the makers of The Fuzzy: a soft, stretchy strip of fuzzy fabric for fidgeting. The Fuzzy sells on Etsy; this site explains what it is, why it was made and how to use it.

Live at [www.nubblshop.com](https://www.nubblshop.com). Built with Next.js (App Router, TypeScript, Tailwind CSS) and deployed on Vercel; pushes to `main` deploy to production, other branches get a Preview deployment.

## Pages

| Path | What it is |
| --- | --- |
| `/` | Home: what The Fuzzy is, why it works, featured knots and demo |
| `/how-to-fuzzy` | Basic moves, basics videos, habit tips, safety |
| `/knots` and `/knots/<slug>` | Knot guides: steps, how to undo, tips and a video slot |
| `/demos` | Every demo video |
| `/about` | Why it was made, how it helps, goals, health resources |
| `/faq` | Questions and answers |
| `/privacy`, `/terms` | Legal |

## Editing content

- **Knot guides:** `src/content/knots.ts`. Add an entry to add a page; the sitemap and demo list pick it up.
- **Videos:** `src/content/demos.ts`. Put the .mp4 in `public/videos/` (or upload to Vercel Blob for big files) and set `video` on the demo. Knot videos go in the `knotVideos` map.
- **Step photos:** put them in `public/knots/<slug>/` and set `image` on the step.
- **Etsy link:** set `etsyUrl` in `src/lib/site.ts`. Until then the site says "Coming soon to Etsy".
- **Product description, nav and contact links:** `src/lib/site.ts`.

### Drafts

Unconfirmed content is wrapped in `<Draft>` (`src/components/Draft.tsx`) or marked `draft: true` (FAQ). It shows with a yellow "Draft" label on local dev and Vercel Preview, and production builds leave it out. Empty photo and video slots also show where their file goes on Preview only.

## Development

```bash
npm install     # install dependencies
npm run dev     # start the dev server at http://localhost:3000
npm run lint    # run ESLint
npm run build   # production build
```

## Contact

- Support: support@nubblshop.com
- Feedback: feedback@nubblshop.com
- Privacy: privacy@nubblshop.com
