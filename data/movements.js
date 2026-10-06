/*
 * The six movements of the poem.
 *
 * Ovid's instrument turns on eras of mythic time. Homer's cannot: the Odyssey
 * has almost no chronological depth and enormous narrative depth. Its ring is
 * therefore the poem's own architecture — the six stretches every reader
 * actually navigates by — and the day-count is real. The present action of the
 * Odyssey runs about forty days. The ten years of wandering are told inside
 * one of those nights, by a man who is the only witness to them.
 */

export const MOVEMENTS = [
  {
    id: "telemachy", name: "The Telemachy", short: "Telemachy",
    range: "Days 1–6 · Ithaca, Pylos, Sparta", books: [1, 2, 3, 4], color: "#58a39c",
    note: "A house without its master, and a son sent out to find whether he has one."
  },
  {
    id: "return", name: "The Return Begins", short: "The return begins",
    range: "Days 7–34 · Ogygia and Scheria", books: [5, 6, 7, 8], color: "#dfa63f",
    note: "Odysseus released from Calypso, wrecked, and taken in by a court that asks no questions until it does."
  },
  {
    id: "wanderings", name: "The Wanderings", short: "The wanderings",
    range: "One night’s telling · ten years of sea", books: [9, 10, 11, 12], color: "#c4603f",
    note: "The apologoi. Odysseus narrates his own past in Alcinous’ hall, and nobody else was there."
  },
  {
    id: "disguise", name: "Ithaca in Disguise", short: "In disguise",
    range: "Days 35–38 · the farm, the town, the hall", books: [13, 14, 15, 16, 17, 18, 19], color: "#8f4a52",
    note: "Home reached and not declared. The longest movement in the poem is a household being tested by a man pretending to be nobody."
  },
  {
    id: "reckoning", name: "The Reckoning", short: "The reckoning",
    range: "Day 39 · the feast of Apollo", books: [20, 21, 22], color: "#a33b34",
    note: "Omens nobody reads, a contest nobody can win, and a hall with one door."
  },
  {
    id: "peace", name: "The Peace", short: "The peace",
    range: "Day 39 night – Day 40", books: [23, 24], color: "#3f7d92",
    note: "The bed, the orchard, the dead retelling the story, and a war stopped in its first minute."
  }
];

export function movementFor(bookId) {
  return MOVEMENTS.find(movement => movement.books.includes(bookId)) || MOVEMENTS[0];
}
