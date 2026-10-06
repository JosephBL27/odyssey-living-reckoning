/*
 * Book-level readings and commentary.
 *
 * `BOOK_READINGS` says what a book argues and how it is built. `BOOK_COMMENTARY`
 * asks the questions a reader asks next: who is holding the narration, what the
 * book is written against, where its real difficulty lies, and what later
 * readers did with it.
 */

import { BOOK_READINGS_01_04, BOOK_COMMENTARY_01_04 } from "./book-readings-01-04.js";
import { BOOK_READINGS_05_08, BOOK_COMMENTARY_05_08 } from "./book-readings-05-08.js";
import { BOOK_READINGS_09_12, BOOK_COMMENTARY_09_12 } from "./book-readings-09-12.js";
import { BOOK_READINGS_13_16, BOOK_COMMENTARY_13_16 } from "./book-readings-13-16.js";
import { BOOK_READINGS_17_20, BOOK_COMMENTARY_17_20 } from "./book-readings-17-20.js";
import { BOOK_READINGS_21_24, BOOK_COMMENTARY_21_24 } from "./book-readings-21-24.js";

export const BOOK_READINGS = {
  ...BOOK_READINGS_01_04, ...BOOK_READINGS_05_08, ...BOOK_READINGS_09_12,
  ...BOOK_READINGS_13_16, ...BOOK_READINGS_17_20, ...BOOK_READINGS_21_24
};

export const BOOK_COMMENTARY = {
  ...BOOK_COMMENTARY_01_04, ...BOOK_COMMENTARY_05_08, ...BOOK_COMMENTARY_09_12,
  ...BOOK_COMMENTARY_13_16, ...BOOK_COMMENTARY_17_20, ...BOOK_COMMENTARY_21_24
};

export function bookReading(bookId) {
  return BOOK_READINGS[bookId] || null;
}

export function bookCommentary(bookId) {
  return BOOK_COMMENTARY[bookId] || null;
}
