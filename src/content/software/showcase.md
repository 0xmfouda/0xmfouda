---
title: "Article UI Showcase: Code, Math, Tables, and More"
desc: "A reference page that exercises every rich-content feature the article layout supports — TOC, syntax highlighting, KaTeX, tables, callouts, and the rest."
date: "2026-05-16"
slug: "showcase"
---

This article is a living style guide for the article page. Each section
demonstrates a different rich-content feature, so you can sanity-check the
typography, spacing, and interactive widgets in one place.

## Typography

Body copy uses **IBM Plex Sans** with a comfortable line-height. You can mix
**bold**, *italic*, ***both***, ~~strikethrough~~, and `inline code` freely.
Links like [Astro](https://astro.build) get a dashed underline that fills in
on hover.

You can also use keyboard hints: press <kbd>Ctrl</kbd> + <kbd>K</kbd> to open
the command palette, or <kbd>Esc</kbd> to dismiss it.

> "Code is like humor. When you have to explain it, it's bad."
> — Cory House

## Table of Contents

The right-hand sidebar is built from this page's headings. Scroll the article
and the active section is highlighted automatically. Anchor links also work —
hover any heading to reveal a `#` link you can copy.

## Code Blocks

Syntax highlighting is provided by Shiki with a dual light/dark theme. Each
block gets a language label and a one-click copy button in the corner.

### TypeScript

```ts
type Article = {
  title: string;
  slug: string;
  tags?: string[];
};

export function summarize(article: Article): string {
  const tags = article.tags?.join(", ") ?? "untagged";
  return `${article.title} (${tags})`;
}
```

### Python

```python
from dataclasses import dataclass

@dataclass
class Point:
    x: float
    y: float

    def distance_to(self, other: "Point") -> float:
        return ((self.x - other.x) ** 2 + (self.y - other.y) ** 2) ** 0.5
```

### Shell

```bash
# Build and preview locally
pnpm install
pnpm dev
```

Inline code like `const x = 42` also reads well alongside prose.

## Mathematical Equations

Math is rendered by KaTeX. Inline math uses single dollar signs: the famous
mass–energy equivalence $E = mc^2$ sits naturally in a sentence, as does the
golden ratio $\varphi = \frac{1 + \sqrt{5}}{2}$.

Block math gets its own boxed display:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$

A linear system in matrix form:

$$
\begin{bmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{bmatrix}
\begin{bmatrix} x_1 \\ x_2 \end{bmatrix}
=
\begin{bmatrix} b_1 \\ b_2 \end{bmatrix}
$$

And the softmax function, useful for the obligatory ML cameo:

$$
\sigma(\mathbf{z})_i = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}}
$$

## Tables

Tables get rounded corners, a header band, and subtle row hover.

| Framework | Initial JS | Hydration model    | Best for                   |
| --------- | ---------: | ------------------ | -------------------------- |
| Astro     |       0 KB | Islands, on demand | Content-first sites        |
| Next.js   |   ~70 KB+ | Full app           | Interactive applications   |
| Remix     |   ~50 KB+ | Full app           | Form-heavy, data-driven UI |
| SvelteKit |   ~10 KB+ | Compiled islands   | Small bundles, DX          |

## Lists

Ordered, unordered, and task lists are all styled.

- Performance-first by default
- Bring your own UI framework
- Type-safe content collections
  - Schema validation with Zod
  - Generated TypeScript types

1. Author content in Markdown or MDX
2. Drop in components when you need interactivity
3. Ship the result as static files or to an edge runtime

- [x] Wire up KaTeX
- [x] Build the table of contents
- [ ] Add diagrams via Mermaid (future)

## Callouts

Use the `.callout` helper class in MDX to flag asides:

<div class="callout note">
  <span class="callout-title">Note</span>
  <p>The TOC only shows H2 and H3 by default — adjust <code>maxDepth</code> in
  <code>TableOfContents.astro</code> if you want deeper headings included.</p>
</div>

<div class="callout tip">
  <span class="callout-title">Tip</span>
  <p>Keep code blocks short. Long ones overflow the column on narrow viewports
  and become harder to scan.</p>
</div>

<div class="callout warning">
  <span class="callout-title">Warning</span>
  <p>KaTeX styles are loaded from a CDN. If you deploy to a strict CSP, mirror
  the stylesheet locally and update <code>Header.astro</code>.</p>
</div>

<div class="callout danger">
  <span class="callout-title">Caution</span>
  <p>Avoid HTML inside Markdown unless you really need it — it bypasses the
  remark/rehype pipeline and won't pick up our prose styles consistently.</p>
</div>

## Collapsible Details

<details>
  <summary>Show implementation notes</summary>

  The reading-progress bar reads the article body's bounding rect on every
  scroll frame and maps the scrolled distance to a percentage. We use
  `requestAnimationFrame` to throttle updates.

</details>

## Images

Images get rounded corners, a soft shadow, and a centered caption when wrapped
in `<figure>`.

![A placeholder landscape image](https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=60)

## Horizontal Rule

Use `---` to insert a divider between sections:

---

## Closing

That covers every element the article layout knows about. If you add a new one,
update this page so we keep a single canonical place to verify the styling.
