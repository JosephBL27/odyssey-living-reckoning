/*
 * The 185 episodes, assembled.
 *
 * Four registers per episode, deliberately kept apart because they answer
 * different questions and a reader wants them at different moments:
 *
 *   STUDY       who is present, where, and which motifs to follow
 *   READINGS    the fuller account the one-line summary compresses
 *   BEATS       what happens, in order, with nothing left to inference
 *   COMMENTARY  sources, craft, and afterlife
 *
 * Episode titles are the primary key across the whole project. They are
 * authored with plain apostrophes and read with typographic ones, so every
 * lookup runs through a normalised index rather than a direct key match.
 */

import { STUDY_01, READINGS_01, BEATS_01, COMMENTARY_01 } from "./episodes-01.js";
import { STUDY_02, READINGS_02, BEATS_02, COMMENTARY_02 } from "./episodes-02.js";
import { STUDY_03, READINGS_03, BEATS_03, COMMENTARY_03 } from "./episodes-03.js";
import { STUDY_04, READINGS_04, BEATS_04, COMMENTARY_04 } from "./episodes-04.js";
import { STUDY_05, READINGS_05, BEATS_05, COMMENTARY_05 } from "./episodes-05.js";
import { STUDY_06, READINGS_06, BEATS_06, COMMENTARY_06 } from "./episodes-06.js";
import { STUDY_07, READINGS_07, BEATS_07, COMMENTARY_07 } from "./episodes-07.js";
import { STUDY_08, READINGS_08, BEATS_08, COMMENTARY_08 } from "./episodes-08.js";
import { STUDY_09, READINGS_09, BEATS_09, COMMENTARY_09 } from "./episodes-09.js";
import { STUDY_10, READINGS_10, BEATS_10, COMMENTARY_10 } from "./episodes-10.js";
import { STUDY_11, READINGS_11, BEATS_11, COMMENTARY_11 } from "./episodes-11.js";
import { STUDY_12, READINGS_12, BEATS_12, COMMENTARY_12 } from "./episodes-12.js";
import { STUDY_13, READINGS_13, BEATS_13, COMMENTARY_13 } from "./episodes-13.js";
import { STUDY_14, READINGS_14, BEATS_14, COMMENTARY_14 } from "./episodes-14.js";
import { STUDY_15, READINGS_15, BEATS_15, COMMENTARY_15 } from "./episodes-15.js";
import { STUDY_16, READINGS_16, BEATS_16, COMMENTARY_16 } from "./episodes-16.js";
import { STUDY_17, READINGS_17, BEATS_17, COMMENTARY_17 } from "./episodes-17.js";
import { STUDY_18, READINGS_18, BEATS_18, COMMENTARY_18 } from "./episodes-18.js";
import { STUDY_19, READINGS_19, BEATS_19, COMMENTARY_19 } from "./episodes-19.js";
import { STUDY_20, READINGS_20, BEATS_20, COMMENTARY_20 } from "./episodes-20.js";
import { STUDY_21, READINGS_21, BEATS_21, COMMENTARY_21 } from "./episodes-21.js";
import { STUDY_22, READINGS_22, BEATS_22, COMMENTARY_22 } from "./episodes-22.js";
import { STUDY_23, READINGS_23, BEATS_23, COMMENTARY_23 } from "./episodes-23.js";
import { STUDY_24, READINGS_24, BEATS_24, COMMENTARY_24 } from "./episodes-24.js";

const normalize = value => String(value).replace(/[’‘]/g, "'").trim().toLowerCase();

function indexOf(source) {
  return new Map(Object.entries(source).map(([title, value]) => [normalize(title), value]));
}

const STUDY = {
  ...STUDY_01,
  ...STUDY_02,
  ...STUDY_03,
  ...STUDY_04,
  ...STUDY_05,
  ...STUDY_06,
  ...STUDY_07,
  ...STUDY_08,
  ...STUDY_09,
  ...STUDY_10,
  ...STUDY_11,
  ...STUDY_12,
  ...STUDY_13,
  ...STUDY_14,
  ...STUDY_15,
  ...STUDY_16,
  ...STUDY_17,
  ...STUDY_18,
  ...STUDY_19,
  ...STUDY_20,
  ...STUDY_21,
  ...STUDY_22,
  ...STUDY_23,
  ...STUDY_24
};

const READINGS = {
  ...READINGS_01,
  ...READINGS_02,
  ...READINGS_03,
  ...READINGS_04,
  ...READINGS_05,
  ...READINGS_06,
  ...READINGS_07,
  ...READINGS_08,
  ...READINGS_09,
  ...READINGS_10,
  ...READINGS_11,
  ...READINGS_12,
  ...READINGS_13,
  ...READINGS_14,
  ...READINGS_15,
  ...READINGS_16,
  ...READINGS_17,
  ...READINGS_18,
  ...READINGS_19,
  ...READINGS_20,
  ...READINGS_21,
  ...READINGS_22,
  ...READINGS_23,
  ...READINGS_24
};

const BEATS = {
  ...BEATS_01,
  ...BEATS_02,
  ...BEATS_03,
  ...BEATS_04,
  ...BEATS_05,
  ...BEATS_06,
  ...BEATS_07,
  ...BEATS_08,
  ...BEATS_09,
  ...BEATS_10,
  ...BEATS_11,
  ...BEATS_12,
  ...BEATS_13,
  ...BEATS_14,
  ...BEATS_15,
  ...BEATS_16,
  ...BEATS_17,
  ...BEATS_18,
  ...BEATS_19,
  ...BEATS_20,
  ...BEATS_21,
  ...BEATS_22,
  ...BEATS_23,
  ...BEATS_24
};

const COMMENTARY = {
  ...COMMENTARY_01,
  ...COMMENTARY_02,
  ...COMMENTARY_03,
  ...COMMENTARY_04,
  ...COMMENTARY_05,
  ...COMMENTARY_06,
  ...COMMENTARY_07,
  ...COMMENTARY_08,
  ...COMMENTARY_09,
  ...COMMENTARY_10,
  ...COMMENTARY_11,
  ...COMMENTARY_12,
  ...COMMENTARY_13,
  ...COMMENTARY_14,
  ...COMMENTARY_15,
  ...COMMENTARY_16,
  ...COMMENTARY_17,
  ...COMMENTARY_18,
  ...COMMENTARY_19,
  ...COMMENTARY_20,
  ...COMMENTARY_21,
  ...COMMENTARY_22,
  ...COMMENTARY_23,
  ...COMMENTARY_24
};

const STUDY_INDEX = indexOf(STUDY);
const READING_INDEX = indexOf(READINGS);
const BEATS_INDEX = indexOf(BEATS);
const COMMENTARY_INDEX = indexOf(COMMENTARY);

const FALLBACK_STUDY = {
  cast: [],
  locus: "Unlocated in the poem's own geography",
  motifs: []
};

/** Cast, locus, and motifs for one episode. Never returns null. */
export function getEpisodeStudy(title) {
  return STUDY_INDEX.get(normalize(title)) || FALLBACK_STUDY;
}

export function episodeReading(title) {
  return READING_INDEX.get(normalize(title)) || null;
}

export function episodeBeats(title) {
  return BEATS_INDEX.get(normalize(title)) || null;
}

export function episodeCommentary(title) {
  return COMMENTARY_INDEX.get(normalize(title)) || null;
}

export function studyCount() { return STUDY_INDEX.size; }
export function readingCount() { return READING_INDEX.size; }
export function beatsCount() { return BEATS_INDEX.size; }
export function commentaryCount() { return COMMENTARY_INDEX.size; }
