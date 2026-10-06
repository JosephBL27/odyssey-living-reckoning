# Design

The instrument is a sibling of one built for Ovid's *Metamorphoses*, and it
inherits that project's geometry, its ring rendering, its descent-chart layout,
and its reading-console architecture. What it does not inherit is what any of
that **means**, because the two poems are organised by different things.

## The one decision everything follows from

Ovid's poem is organised by **transformation**, and its outer ring is mythic
time — six eras from Chaos to Augustus. Homer's is organised by **return**, and
it has almost no chronological depth at all: the present action runs about forty
days. Putting an era ring on it would have been a category error dressed as
consistency.

So the outer band carries the poem's own architecture instead — the six
movements a reader actually navigates by — and the day count that goes with
them:

| Ring | Ovid | Homer |
| --- | --- | --- |
| I | Era of mythic time | Movement, with its day range |
| II | Book (15) | Book (24) |
| III | Episode | Episode |
| IV | Theme | Theme |

The per-episode slot Ovid uses for the metamorphosis — `Nymph → laurel` — is
here **the turn**: the recognition, disclosure, or reversal the episode exists to
perform. `Nobody → Odysseus`. `Stranger → guest`. `Beggar → king`.

## Own-world

Wine-dark water and bronze. *Oinops pontos* is not blue and not purple; it is a
darkness with red in it, and that is the ground. Everything drawn on it is
bronze, because bronze is the poem's own metal — the threshold of Alcinous, the
spear, the axe-heads, the cauldron given as a guest-gift.

| Token | Value | Role |
| --- | --- | --- |
| `--sea-night` | `#0e1c2e` | The ground |
| `--sea-deep` | `#06111e` | Behind the ground |
| `--sea-field` | `#16405e` | Plate wash |
| `--bronze` | `#dfa63f` | Linework, rules, the active state |
| `--terracotta` | `#c4603f` | The alternating band, and the marriage rule |
| `--aegean` | `#58a39c` | The third band, and the Telemachy |
| `--linen` | `#f2ead9` | Copy on the dark ground |
| `--parchment` | `#f0e4c9` | The reading sheet |

The six movement colours run sea-green → bronze → terracotta → wine → deep red →
calm blue, which is the poem's own emotional temperature in order.

## Type

Bodoni Moda for display, Manrope for body, Archivo Narrow for the engraved
registers and small caps. Unchanged from the sibling, because the register — an
eighteenth-century instrument plate with a modern reading sheet clipped to it —
is the same register.

## No images

The sibling crops open-access engravings into circular medallions, and has to
caption them "illustrative register, not a portrait" everywhere they appear.
There is no comparable public-domain plate set for Homer that would not need the
same disclaimer.

So this one draws. Every figure gets an **engraved seal**: an initial on a bronze
field inside a milled rim, where the rim's tooth count and phase are derived from
a hash of the name. The same name always produces the same seal, so a figure
stays recognisable at a glance across the console, the folio, the stemma, and the
master genealogy. It simply is not claiming to be a face.

The book plate is a **star figure** rather than an engraving: the same
coordinates the outer ring carries, drawn large enough to read, with the claim
printed under it so the reader can see immediately whether the link is Homer's or
the editor's. Four of the twenty-four say "Homer's own".

## Honesty rules, encoded

These are not editorial policy statements. They are constraints the data and the
interface enforce.

1. **Every beat names its turn.** The plain register for each episode wraps the
   decisive clause — the recognition, the lie, the disguise, the breach of
   *xenia* — in emphasis. A summary of the *Odyssey* that makes the reader infer
   the recognition has failed at the only job it has. `npm run check` fails any
   beat list that does not do it.
2. **Two clocks, never blurred.** Day count and told order are separate fields.
   Books IX–XII are labelled as narrated by Odysseus wherever it bears on the
   reading, because he is the only witness to them.
3. **No invented epithets.** Where Homer gives a figure no formula, the record
   says `no formula of his own` rather than borrowing an Iliadic one.
4. **No geography.** The wanderings stop being mappable at Cape Malea and the
   interface does not pretend otherwise. The sea chart is deliberately not built.
5. **Disputes stay open.** The doubled divine council, the Telemachy's
   composition, the text after 23.296, and the authenticity of Book XXIV are
   named in the commentary and left unresolved.

## Motion

GSAP owns the folio and workspace choreography and nothing else. Every
transition is interruptible; `prefers-reduced-motion` replaces each tween with
its end state rather than shortening it. The one ambient animation is the star
field's slow breathe, and it is inside a `no-preference` guard.

## Layout

Two resizable panes on the instrument, with a real `role="separator"` grip that
responds to drag, double-click, and arrow keys, and remembers its size. The
stemma has three: house rail, plate, figure list. Below the desktop breakpoint
the instrument stacks — wheel above, parchment console below — and the primary
nav becomes a bottom bar.

Five viewports carry visual baselines: 1536×1024, 1440×900, 1024×768, 768×1024,
and 390×844.
