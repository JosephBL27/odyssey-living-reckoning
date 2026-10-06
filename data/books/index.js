/*
 * The twenty-four books, assembled.
 *
 * Each group file holds four book records in the compact tuple form the
 * interface reads directly:
 *
 *   episodes  [title, summary, turn, note]
 *   cast      [name, role, description]
 *   themes    [name, description]
 *   terms     [term, part of speech, definition, category]
 *   ties      [title, description]
 *
 * `turn` is this poem's equivalent of Ovid's transformation slot: the
 * recognition, disclosure, or reversal the episode exists to perform.
 */

import { BOOKS_01_04 } from "./books-01-04.js";
import { BOOKS_05_08 } from "./books-05-08.js";
import { BOOKS_09_12 } from "./books-09-12.js";
import { BOOKS_13_16 } from "./books-13-16.js";
import { BOOKS_17_20 } from "./books-17-20.js";
import { BOOKS_21_24 } from "./books-21-24.js";

export const BOOKS = [
  ...BOOKS_01_04,
  ...BOOKS_05_08,
  ...BOOKS_09_12,
  ...BOOKS_13_16,
  ...BOOKS_17_20,
  ...BOOKS_21_24
].sort((a, b) => a.id - b.id);

export function bookById(id) {
  return BOOKS.find(book => book.id === id) || null;
}

export function episodeCount() {
  return BOOKS.reduce((total, book) => total + book.episodes.length, 0);
}
