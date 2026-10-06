/*
 * Genealogical registry for the Odyssey.
 *
 * Every figure record carries four layers of information:
 *
 *   1. NAMES        — the Greek name, the Latin name the European tradition
 *                     met them under, and the epithet or formula Homer
 *                     actually uses. The third register matters more here than
 *                     in any other Greek poem: the Odyssey names people by
 *                     what they are for. Odysseus is polymetis, of many
 *                     devices; Athene is glaukopis, grey-eyed; Penelope is
 *                     periphron, circumspect. The epithet is an argument.
 *   2. DESCENT      — house, father, mother, siblings, consorts, children.
 *                     Greek genealogy is contested; where a parentage is
 *                     disputed the record says so rather than choosing
 *                     silently.
 *   3. WHO THEY ARE — a standing identity, independent of any one scene.
 *   4. WHAT THEY DO — `acts`, keyed by episode title, and `bookActs`, keyed by
 *                     book number. This is the figure's function *here*, which
 *                     in a poem built on disguise is frequently at odds with
 *                     who they are elsewhere.
 *
 * Records that describe groups, peoples, or objects use the same shape with
 * `kind` set accordingly and the descent fields omitted.
 */

import { DIVINE_FIGURES } from "./divine.js";
import { ITHACAN_FIGURES } from "./ithaca.js";
import { SUITOR_FIGURES } from "./suitors.js";
import { ATREID_FIGURES } from "./atreus.js";
import { PHAEACIAN_FIGURES } from "./phaeacia.js";
import { NEKYIA_FIGURES } from "./nekyia.js";
import { TROJAN_FIGURES } from "./troy.js";
import { COLLECTIVE_FIGURES } from "./collectives.js";
import { WALK_ON_FIGURES } from "./walk-ons.js";

export const HOUSES = [
  {
    id: "arcesius", name: "The house of Arcesius", latin: "Domus Arcesii", root: "Arcesius",
    books: [1,2,4,11,13,14,15,16,17,18,19,20,21,22,23,24],
    note: "The royal line of Ithaca: Zeus to Arcesius to Laertes to Odysseus to Telemachus, four generations that stand in one orchard at the end of the poem."
  },
  {
    id: "autolycus", name: "The line of Autolycus", latin: "Stirps Autolyci", root: "Autolycus",
    books: [11, 19, 21, 24],
    note: "Odysseus' mother's family, and the reason he is who he is: Hermes' son, the best thief and perjurer alive, who named the boy and gave him the scar."
  },
  {
    id: "icarius", name: "The house of Icarius", latin: "Domus Icarii", root: "Icarius",
    books: [1, 2, 4, 15, 16, 17, 18, 19, 20, 21, 23, 24],
    note: "Penelope's line. The poem keeps her father alive and offstage, which is what makes the suitors' claim on her arguable at all."
  },
  {
    id: "tyndareus", name: "The house of Tyndareus", latin: "Domus Tyndarei", root: "Tyndareus",
    books: [4, 11, 24],
    note: "Leda's children: Helen, Clytemnestra, and the twins who share a death between them. Two of the three ruin a homecoming."
  },
  {
    id: "atreus", name: "The house of Atreus", latin: "Domus Atrei", root: "Pelops",
    books: [1, 3, 4, 11, 24],
    note: "The counter-example the whole poem is measured against: a king who came home on time and was killed at his own table."
  },
  {
    id: "neleus", name: "The house of Neleus", latin: "Domus Nelei", root: "Poseidon",
    books: [3, 4, 11, 15],
    note: "Pylos: Tyro's sons by Poseidon, Nestor's twelve brothers killed by Heracles, and the one surviving line that keeps talking."
  },
  {
    id: "olympian", name: "The Olympian house", latin: "Domus Olympia", root: "Kronos",
    books: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
    note: "Zeus and his family. In this poem the gods argue about justice in the first hundred lines and then mostly leave it to Athene."
  },
  {
    id: "poseidon", name: "The line of Poseidon", latin: "Stirps Neptuni", root: "Poseidon",
    books: [1, 5, 9, 11, 13],
    note: "The sea's own descendants, including the son whose blinding is the poem's engine."
  },
  {
    id: "phaeacia", name: "The Phaeacian house", latin: "Domus Alcinoi", root: "Nausithous",
    books: [5, 6, 7, 8, 13],
    note: "Scheria: a seafaring people descended from Poseidon who have never needed a war, and are punished for a kindness."
  },
  {
    id: "helios", name: "The line of Helios", latin: "Stirps Solis", root: "Hyperion",
    books: [10, 11, 12],
    note: "The Sun and his children — Circe above all — and the cattle that cost Odysseus his last crew."
  },
  {
    id: "aeolids", name: "The wind-king and the Aeolids", latin: "Aeolidae", root: "Aeolus",
    books: [10, 11],
    note: "Two families the tradition keeps confusing: Aeolus Hippotades who bottles the winds, and the Aeolus whose descendants fill the catalogue of the dead."
  },
  {
    id: "melampus", name: "The house of Melampus", latin: "Domus Melampodis", root: "Melampus",
    books: [11, 15, 17, 20],
    note: "The seers. Homer gives Theoclymenus four generations of pedigree before letting him say a word, because prophecy in this poem has to be vouched for."
  },
  {
    id: "oikos", name: "The household of Ithaca", latin: "Familia Ithacensis", root: "Laertes",
    books: [1,2,13,14,15,16,17,18,19,20,21,22,23,24],
    note: "Servants, herdsmen, nurse, singer, herald, and a dog. The poem's real moral test is administered by them and to them."
  },
  {
    id: "suitors", name: "The suitors and their fathers", latin: "Proci", root: "Eupeithes",
    books: [1, 2, 16, 17, 18, 19, 20, 21, 22, 24],
    note: "A hundred and eight young men from four islands, eating a house they expect to inherit, and the fathers who come for them at the end."
  },
  {
    id: "nekyia", name: "The dead of the Nekyia", latin: "Manes", root: "Persephone",
    books: [11, 24],
    note: "The catalogue of heroines and the heroes of Troy, met at a trench of blood at the edge of Ocean."
  },
  {
    id: "crete", name: "The Cretan house", latin: "Domus Cretensis", root: "Minos",
    books: [11, 14, 19],
    note: "Minos, Idomeneus, and Aethon — the Cretan brother Odysseus invents twice, because Crete is the one place big enough to hide a lie in."
  },
  {
    id: "troy", name: "The captains at Troy", latin: "Duces Troiani", root: "Agamemnon",
    books: [3, 4, 8, 11, 24],
    note: "The war as the Odyssey remembers it: not a story being told but a set of debts still being paid."
  }
];

const ALL = [
  ...DIVINE_FIGURES,
  ...ITHACAN_FIGURES,
  ...SUITOR_FIGURES,
  ...ATREID_FIGURES,
  ...PHAEACIAN_FIGURES,
  ...NEKYIA_FIGURES,
  ...TROJAN_FIGURES,
  ...COLLECTIVE_FIGURES,
  ...WALK_ON_FIGURES
];

/** Strip honorifics, alternates, and typographic noise so lookups are stable. */
export function normalizeFigureName(value = "") {
  return String(value)
    .replace(/[’‘]/g, "'")
    .replace(/\s*\(.*?\)\s*/g, " ")
    .trim()
    .toLowerCase();
}

/**
 * Episode titles in the study registry may carry typographic apostrophes; act
 * keys are authored with plain ones. Match on a normalised key so the two
 * indexes cannot drift apart over a punctuation character.
 */
function normalizeEpisodeKey(value = "") {
  return String(value).replace(/[’‘]/g, "'").trim().toLowerCase();
}

const REGISTRY = new Map();
const ALIASES = new Map();

ALL.forEach(figure => {
  const key = normalizeFigureName(figure.name);
  if (REGISTRY.has(key)) {
    // Later files never silently overwrite earlier ones; merge acts instead.
    const existing = REGISTRY.get(key);
    existing.acts = { ...existing.acts, ...figure.acts };
    existing.bookActs = { ...existing.bookActs, ...figure.bookActs };
    existing.books = [...new Set([...(existing.books || []), ...(figure.books || [])])].sort((a, b) => a - b);
    existing.actIndex = new Map(
      Object.entries(existing.acts || {}).map(([episode, text]) => [normalizeEpisodeKey(episode), text])
    );
    return;
  }
  figure.actIndex = new Map(
    Object.entries(figure.acts || {}).map(([episode, text]) => [normalizeEpisodeKey(episode), text])
  );
  REGISTRY.set(key, figure);
});

/*
 * Alias table.
 *
 * The episode registry names the same body of people a dozen ways — the
 * Phaeacian crew, the Phaeacian oarsmen, the twelve Phaeacian lords — because
 * that is how the poem names them, scene by scene. Rather than push twenty
 * near-duplicate aliases onto a record in some other file, the ones that are
 * purely a matter of phrasing are collected here, where the joining happens.
 */
const EXTRA_ALIASES = {
  "The Phaeacians": [
    "The Phaeacians of Scheria", "The Phaeacian elders", "The Phaeacian nobles",
    "The Phaeacian oarsmen", "The Phaeacian crew", "The departed Phaeacians",
    "The twelve Phaeacian lords", "The women of Arete's household"
  ],
  "The Cyclopes": ["The other Cyclopes"],
  "The suitors": ["The suitors in the strait"],
  "Iphthime": ["The phantom of Iphthime"],
  "Aeolus": ["The six sons and six daughters"],
  "The nymphs of the cave": ["The Naiads of the cave", "The nymphs", "The nymphs of the spring"]
};

ALL.forEach(figure => {
  const canonical = normalizeFigureName(figure.name);
  const names = [figure.name, ...(figure.aliases || [])];
  names.forEach(alias => {
    const key = normalizeFigureName(alias);
    if (key && !ALIASES.has(key)) ALIASES.set(key, canonical);
    // "Athene / Minerva" also resolves through each half.
    alias.split(/\s*\/\s*/).forEach(part => {
      const partKey = normalizeFigureName(part);
      if (partKey && !ALIASES.has(partKey)) ALIASES.set(partKey, canonical);
    });
  });
});

Object.entries(EXTRA_ALIASES).forEach(([canonicalName, names]) => {
  const canonical = normalizeFigureName(canonicalName);
  if (!REGISTRY.has(canonical)) return;
  names.forEach(alias => {
    const key = normalizeFigureName(alias);
    if (key && !ALIASES.has(key)) ALIASES.set(key, canonical);
  });
});

export const FIGURES = [...REGISTRY.values()];

export function getFigure(name) {
  if (!name) return null;
  const key = normalizeFigureName(name);
  const canonical = ALIASES.get(key);
  if (canonical) return REGISTRY.get(canonical) || null;
  if (REGISTRY.has(key)) return REGISTRY.get(key);
  // Cast lists are authored in two registers — "Athene / Minerva" — while the
  // registry is keyed on one. Try each half before giving up, so a slashed
  // name never has to be duplicated as an alias on every record.
  // "Odysseus, remembered" and "Idomeneus, in the lie" are the episode
  // registry's way of marking a figure who is talked about rather than
  // present. The record is the same record; drop the qualifier and retry.
  const comma = String(name).indexOf(",");
  if (comma > 0) {
    const bare = normalizeFigureName(String(name).slice(0, comma));
    const resolvedBare = ALIASES.get(bare) || (REGISTRY.has(bare) ? bare : null);
    if (resolvedBare) return REGISTRY.get(resolvedBare) || null;
  }
  for (const part of String(name).split(/\s*\/\s*/)) {
    const partKey = normalizeFigureName(part);
    if (!partKey) continue;
    const resolved = ALIASES.get(partKey) || (REGISTRY.has(partKey) ? partKey : null);
    if (resolved) return REGISTRY.get(resolved) || null;
  }
  return null;
}

export function hasFigure(name) {
  return Boolean(getFigure(name));
}

/**
 * What this figure is doing in the requested episode — falling back to the
 * book-level function, then to a general statement of identity.
 */
export function figureAct(name, episodeTitle, bookId) {
  const figure = getFigure(name);
  if (!figure) return null;
  const episodeText = episodeTitle && figure.actIndex?.get(normalizeEpisodeKey(episodeTitle));
  if (episodeText) return { text: episodeText, scope: "episode" };
  if (bookId && figure.bookActs?.[bookId]) {
    return { text: figure.bookActs[bookId], scope: "book" };
  }
  return { text: figure.who, scope: "standing" };
}

/** Parents that actually resolve to registry records, for tree building. */
function resolvedParents(figure) {
  return [figure.father, figure.mother]
    .filter(Boolean)
    .map(parent => getFigure(parent))
    .filter(Boolean);
}

const CHILD_INDEX = new Map();
FIGURES.forEach(figure => {
  resolvedParents(figure).forEach(parent => {
    const key = normalizeFigureName(parent.name);
    if (!CHILD_INDEX.has(key)) CHILD_INDEX.set(key, new Set());
    CHILD_INDEX.get(key).add(normalizeFigureName(figure.name));
  });
});

export function childrenOf(name) {
  const figure = getFigure(name);
  if (!figure) return [];
  const keys = CHILD_INDEX.get(normalizeFigureName(figure.name));
  if (!keys) return [];
  return [...keys].map(key => REGISTRY.get(key)).filter(Boolean);
}

export function housesForBook(bookId) {
  return HOUSES.filter(house => house.books.includes(bookId));
}

/** Figures named in a book, ordered so principals precede supporting cast. */
export function figuresForBook(bookId) {
  return FIGURES
    .filter(figure => figure.books?.includes(bookId))
    .sort((a, b) => (a.prominence || 3) - (b.prominence || 3) || a.name.localeCompare(b.name));
}

/** Every episode in which a figure is given something explicit to do. */
export function appearances(name) {
  const figure = getFigure(name);
  if (!figure) return [];
  return Object.entries(figure.acts || {}).map(([episode, text]) => ({ episode, text }));
}

export function figureCount() {
  return REGISTRY.size;
}
