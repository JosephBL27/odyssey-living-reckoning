/*
 * Data integrity check.
 *
 * SPINE.json is the contract: 24 books, 185 episode titles. Every other data
 * file in the project is keyed off it, and every one of them is authored
 * separately. This script is the only thing standing between that arrangement
 * and silent drift, so it reports rather than throws: a run that names ten
 * problems is more useful than one that stops at the first.
 */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const spine = JSON.parse(readFileSync(resolve(root, "SPINE.json"), "utf8"));

const norm = value => String(value).replace(/[’‘]/g, "'").trim().toLowerCase();
const problems = [];
const note = message => problems.push(message);

const spineTitles = spine.spine.flatMap(book => book.episodes);
const spineSet = new Set(spineTitles.map(norm));

async function tryImport(path) {
  try { return await import(resolve(root, path)); }
  catch (error) { note(`CANNOT LOAD ${path} — ${error.message.split("\n")[0]}`); return null; }
}

/* ---------------------------------------------------------------- books */
const booksModule = await tryImport("data/books/index.js");
if (booksModule) {
  const { BOOKS } = booksModule;
  if (BOOKS.length !== 24) note(`BOOKS has ${BOOKS.length} entries, expected 24`);
  const seen = new Set();
  BOOKS.forEach(book => {
    const spineBook = spine.spine.find(entry => entry.id === book.id);
    if (!spineBook) return note(`BOOKS has an id ${book.id} the spine does not know`);
    if (book.title !== spineBook.title) note(`Book ${book.id} title drifted: "${book.title}" ≠ "${spineBook.title}"`);
    if (book.episodes.length !== spineBook.episodes.length) {
      note(`Book ${book.id} has ${book.episodes.length} episodes, spine says ${spineBook.episodes.length}`);
    }
    book.episodes.forEach((episode, index) => {
      const expected = spineBook.episodes[index];
      if (expected && norm(episode[0]) !== norm(expected)) {
        note(`Book ${book.id} episode ${index + 1}: "${episode[0]}" ≠ spine "${expected}"`);
      }
      if (episode.length !== 4) note(`Book ${book.id} "${episode[0]}" has ${episode.length} tuple slots, expected 4`);
      seen.add(norm(episode[0]));
    });
    ["cast", "themes", "terms", "ties"].forEach(key => {
      if (!Array.isArray(book[key]) || !book[key].length) note(`Book ${book.id} has no ${key}`);
    });
  });
  spineSet.forEach(title => { if (!seen.has(title)) note(`No BOOKS episode tuple for "${title}"`); });
}

/* ------------------------------------------------------------- readings */
const readingsModule = await tryImport("data/readings/index.js");
if (readingsModule) {
  const { BOOK_READINGS, BOOK_COMMENTARY } = readingsModule;
  for (let id = 1; id <= 24; id += 1) {
    const reading = BOOK_READINGS[id];
    if (!reading) { note(`No BOOK_READINGS for book ${id}`); continue; }
    ["extent", "argument", "structure", "movements", "argumentOfReturn", "handsOn"].forEach(key => {
      if (!reading[key]) note(`BOOK_READINGS[${id}] missing ${key}`);
    });
    const commentary = BOOK_COMMENTARY[id];
    if (!commentary) { note(`No BOOK_COMMENTARY for book ${id}`); continue; }
    ["voices", "against", "crux", "afterlife"].forEach(key => {
      if (!commentary[key]) note(`BOOK_COMMENTARY[${id}] missing ${key}`);
    });
  }
}

/* ------------------------------------------------------------- episodes */
const episodesModule = await tryImport("data/episodes/index.js");
if (episodesModule) {
  const { getEpisodeStudy, episodeReading, episodeBeats, episodeCommentary } = episodesModule;
  spineTitles.forEach(title => {
    const study = getEpisodeStudy(title);
    if (!study.cast.length) note(`No STUDY cast for "${title}"`);
    else if (!study.locus || !study.motifs?.length) note(`Incomplete STUDY for "${title}"`);
    const reading = episodeReading(title);
    if (!reading) note(`No READING for "${title}"`);
    else ["reading", "turn", "after"].forEach(key => { if (!reading[key]) note(`READING "${title}" missing ${key}`); });
    const beats = episodeBeats(title);
    if (!beats) note(`No BEATS for "${title}"`);
    else {
      if (beats.length < 4) note(`BEATS "${title}" has only ${beats.length} beats`);
      if (!beats.some(beat => /\*\*.+\*\*/.test(beat))) note(`BEATS "${title}" names no turn in bold`);
    }
    const commentary = episodeCommentary(title);
    if (!commentary) note(`No COMMENTARY for "${title}"`);
    else ["sources", "craft", "afterlife"].forEach(key => { if (!commentary[key]) note(`COMMENTARY "${title}" missing ${key}`); });
  });
}

/* ------------------------------------------------------------ genealogy */
const genealogyModule = await tryImport("data/genealogy/index.js");
if (genealogyModule && booksModule) {
  const { FIGURES, getFigure, HOUSES } = genealogyModule;
  const houseNames = new Set(HOUSES.map(house => house.name));
  const actKeys = new Set();
  FIGURES.forEach(figure => {
    ["name", "kind", "greek", "homer", "who", "books"].forEach(key => {
      if (figure[key] === undefined) note(`Figure "${figure.name}" missing ${key}`);
    });
    if (figure.house && !houseNames.has(figure.house)) note(`Figure "${figure.name}" claims unknown house "${figure.house}"`);
    Object.keys(figure.acts || {}).forEach(key => actKeys.add(key));
  });
  actKeys.forEach(key => { if (!spineSet.has(norm(key))) note(`Act keyed to unknown episode "${key}"`); });

  // Every name the episode registry casts must resolve to a figure record.
  if (episodesModule) {
    const unresolved = new Set();
    spineTitles.forEach(title => {
      episodesModule.getEpisodeStudy(title).cast.forEach(name => {
        if (!getFigure(name)) unresolved.add(name);
      });
    });
    unresolved.forEach(name => note(`Cast name with no figure record: "${name}"`));
  }
}

/* ----------------------------------------------------------------- done */
const counts = {
  books: booksModule?.BOOKS.length ?? 0,
  episodes: spineTitles.length,
  figures: genealogyModule?.FIGURES.length ?? 0
};
console.log(`spine: ${counts.books} books · ${counts.episodes} episodes · ${counts.figures} figures`);
if (!problems.length) { console.log("no problems found"); process.exit(0); }
console.log(`\n${problems.length} problem${problems.length === 1 ? "" : "s"}:`);
problems.slice(0, 120).forEach(problem => console.log(`  · ${problem}`));
if (problems.length > 120) console.log(`  … and ${problems.length - 120} more`);
process.exit(1);
