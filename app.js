import { gsap } from "gsap";

import { BOOKS } from "./data/books/index.js";
import { MOVEMENTS, movementFor } from "./data/movements.js";
import { getEpisodeStudy, episodeReading, episodeBeats, episodeCommentary } from "./data/episodes/index.js";
import { bookReading, bookCommentary } from "./data/readings/index.js";
import { constellationFor } from "./data/constellations.js";
import {
  getFigure,
  figureAct,
  appearances,
  childrenOf,
  housesForBook,
  figuresForBook,
  FIGURES,
  HOUSES
} from "./data/genealogy/index.js";
import { labelArc } from "./lib/radial.js";
import { descentGraph, pruneGraph, familyLayout, lineageOf, globalGenerations } from "./lib/genealogy-layout.js";
import {
  renderStarField,
  renderCatasterismRing,
  renderTickRing,
  renderSpokes,
  renderArcLabels,
  renderCircularInscription,
  renderSunMedallion,
  renderMeridians,
  renderInstrumentField
} from "./lib/ornament.js";

/*
 * ERAS is the six-movement ring. The name is kept from the sibling instrument
 * built for the Metamorphoses because the geometry, the ring rendering, and
 * the band layout are the same code; what the ring MEANS is different. Ovid's
 * outermost band is mythic time. Homer has almost none — the Odyssey occupies
 * about forty days — so this band carries the poem's architecture instead, and
 * the day count that goes with it.
 */
const ERAS = MOVEMENTS;

/*
 * Terms the poem earns that no single book owns.
 *
 * The per-book `terms` arrays carry four entries each; these are the ones a
 * reader needs before Book I and keeps needing to the end. Greek is
 * transliterated and glossed rather than quoted, and the entry says what the
 * word does in Homer rather than what a later philosopher made of it.
 */
const EXTRA_LEXICON = [
  ["Homer", "proper noun", "The name attached to the Iliad and the Odyssey. Whether it belonged to one poet, two, or a tradition of singers is the oldest open question in European literature.", "Person", "Books I–XXIV"],
  ["Nostos", "noun", "Homecoming, and the return-journey that produces it. The plural nostoi named a whole lost cycle of poems about the Greek captains coming back from Troy; this is the only one that survives.", "Term", "Books I–XXIV"],
  ["Xenia", "noun", "Guest-friendship: the reciprocal obligation binding host and stranger, under Zeus' own protection. Feed first, ask afterwards, give a parting gift, and never harm a man who has eaten at your table.", "Term", "Books I–XXIV"],
  ["Xeinos", "noun", "Both guest and host, and also simply stranger — one word for both sides of the relation, which is the whole moral point.", "Term", "Books I–XXIV"],
  ["Kleos", "noun", "Fame, and specifically fame as something heard: what gets said about you when you are not there. Telemachus goes to Pylos and Sparta to find his father's kleos because it is all that is available.", "Term", "Books I–XXIV"],
  ["Metis", "noun", "Cunning intelligence — practical, tactical, and morally neutral. It is Odysseus' defining quality and the reason the poem prefers him to Achilles.", "Term", "Books I–XXIV"],
  ["Polytropos", "adjective", "The poem's first word about its hero: of many turns. It means widely travelled, versatile, and shifty at once, and translators have never agreed which sense leads.", "Term", "Book I"],
  ["Anagnorisis", "noun", "Recognition: the moment a person's identity is disclosed. Aristotle took the term from tragedy, but the Odyssey is where it is invented as a structural device — the poem contains at least eight.", "Narrative", "Books XIII–XXIV"],
  ["Sema", "noun", "A sign or token, and also a grave-marker. The scar, the bed, the brooch, and the bow are all semata, and every recognition in the poem runs through one.", "Term", "Books XIX–XXIII"],
  ["Oikos", "noun", "The household as an economic and political unit: house, land, livestock, servants, stores, and standing. The suitors are not courting a woman so much as consuming an oikos.", "Term", "Books I–XXIV"],
  ["Thumos", "noun", "The seat of impulse, anger, and appetite, felt in the chest. Homer's people talk to it, and it talks back — Odysseus tells his to endure when it wants to kill the maids on the spot.", "Term", "Books I–XXIV"],
  ["Moira", "noun", "One's portion, and so also fate: the share of life, honour, or meat that is properly yours. The same word does all three jobs.", "Term", "Books I–XXIV"],
  ["Geras", "noun", "A prize of honour, publicly awarded and publicly visible. The Iliad's whole quarrel is about one; the Odyssey turns the idea inward to the hosting and seating of guests.", "Term", "Books I–XXIV"],
  ["Timē", "noun", "Honour as due valuation — what you are worth in the eyes of others, expressed materially in seats, portions, and gifts.", "Term", "Books I–XXIV"],
  ["Aidos", "noun", "Shame, restraint, and a sense of what is owed. Its absence is the suitors' defining trait, and Homer says so directly.", "Term", "Books I–XXIV"],
  ["Nemesis", "noun", "Righteous indignation at conduct that deserves it — the response aidos should provoke in onlookers.", "Term", "Books I–XXIV"],
  ["Hybris", "noun", "Outrage: violence or humiliation inflicted to assert superiority. In the Odyssey it is a household crime before it is a cosmic one.", "Term", "Books I–XXIV"],
  ["Atē", "noun", "Ruinous blindness — a delusion sent or self-induced that makes disaster look like a good idea. The suitors laugh with jaws that are not their own.", "Term", "Books XVIII–XXII"],
  ["Themis", "noun", "Established custom with divine sanction: what is done, and therefore what is right. Weaker than law and older than it.", "Term", "Books I–XXIV"],
  ["Dikē", "noun", "The way of a thing, and so also justice — the customary manner proper to a kind of person or situation.", "Term", "Books I–XXIV"],
  ["Basileus", "noun", "A king, but in Homer more like a chief among chiefs. Ithaca has several; Odysseus is only first among them, which is why the succession is arguable.", "Term", "Books I–XXIV"],
  ["Laos", "noun", "The people as a body, especially under arms. The Ithacan laos is conspicuously absent for twenty years, and its silence is a political fact the poem keeps noting.", "Term", "Books II, XXIV"],
  ["Therapon", "noun", "A companion-in-arms and attendant: a subordinate who is not a slave. Homeric social rank is a gradient, not a pair of categories.", "Term", "Books I–XXIV"],
  ["Dmōs / dmōē", "noun", "A male or female household slave, usually taken in a raid. Eumaeus and Eurycleia are both dmōes, and the poem gives them more moral standing than anyone in the hall.", "Term", "Books XIV–XXII"],
  ["Mnēstēres", "plural noun", "The suitors: literally the wooers. A hundred and eight of them from four islands, eating a house they expect one of them to inherit.", "Person", "Books I–XXIV"],
  ["Megaron", "noun", "The great hall: the central room with the hearth, where guests are fed, songs are sung, and the killing happens.", "Place", "Books I–XXIII"],
  ["Thalamos", "noun", "An inner chamber — bedroom, storeroom, or treasury. Penelope's is upstairs; the bow is kept in another.", "Place", "Books XXI–XXIII"],
  ["Agora", "noun", "The assembly, and the place it meets. Ithaca has not held one in twenty years when Telemachus calls it in Book II.", "Place", "Books II, XXIV"],
  ["Aoidos", "noun", "A singer of tales, working from tradition rather than a text. Phemius and Demodocus are the poem's self-portraits, and both are treated with care.", "Person", "Books I, VIII, XXII"],
  ["Rhapsode", "noun", "A later professional reciter of Homer, working from a fixed text — the stage after the aoidos, and the one that produced the poem we read.", "Person", "Books I–XXIV"],
  ["Apologoi", "plural noun", "The name given to Books IX–XII: the tales Odysseus tells in Alcinous' hall. Everything famous about the Odyssey happens inside them, and he is the only witness.", "Narrative", "Books IX–XII"],
  ["Nekyia", "noun", "The rite of calling up the dead, and the name for Book XI. A second one opens Book XXIV, which is one of the reasons that book's authenticity is disputed.", "Narrative", "Books XI, XXIV"],
  ["Katabasis", "noun", "A descent into the underworld. Book XI is arguably not one — Odysseus digs a trench at the world's edge and the dead come up to him.", "Narrative", "Book XI"],
  ["Psyche", "noun", "The breath-soul that leaves at death and goes to Hades. In Homer it has no moral career; it is what is left, and it is not much.", "Term", "Books XI, XXIV"],
  ["Eidolon", "noun", "A phantom or image — of a dead person, or manufactured by a god. Athene makes one of Iphthime to comfort Penelope in a dream.", "Term", "Books IV, XI"],
  ["Hecatomb", "noun", "Literally a hundred oxen; in practice any large public sacrifice. Nestor's at Pylos is the poem's fullest description of one.", "Term", "Books III, XIII"],
  ["Xeinion", "noun", "A guest-gift. Polyphemus offers Odysseus one, and the joke is that it is the promise to eat him last.", "Object", "Books IX, XV, XXIV"],
  ["Ainos", "noun", "A tale told with a purpose the hearer is meant to work out. Odysseus tells Eumaeus one about a cold night at Troy in order to be given a cloak, and says so.", "Rhetoric", "Book XIV"],
  ["Epithet", "noun", "A fixed descriptive formula attached to a name — grey-eyed Athene, much-enduring Odysseus, circumspect Penelope. It fills the metre and states an argument at the same time.", "Rhetoric", "Books I–XXIV"],
  ["Formula", "noun", "A repeated phrase filling a fixed metrical slot. Milman Parry showed these are a system, which is the evidence that the poems were composed in performance.", "Rhetoric", "Books I–XXIV"],
  ["Type-scene", "noun", "A recurring narrative pattern — arrival, bathing, arming, sacrifice, supplication — realised with variations. The Odyssey's meaning is often in the departure from the pattern.", "Narrative", "Books I–XXIV"],
  ["Ring composition", "noun", "A structure that returns to its opening in reverse order, framing the middle. The scar in Book XIX is the textbook case: feet, wound, boyhood, hunt, wound, feet.", "Narrative", "Books I–XXIV"],
  ["Epic simile", "noun", "An extended comparison that opens a whole second scene inside the first — a lion, a fisherman, a woman weeping over her dead husband. Homer uses them at the poem's emotional peaks.", "Rhetoric", "Books I–XXIV"],
  ["Ekphrasis", "noun", "Description of a made object so detailed that it becomes a narrative of its own — Odysseus' brooch, the bed, the raft's construction.", "Rhetoric", "Books V, XIX, XXIII"],
  ["In medias res", "phrase", "Beginning in the middle of the action. Horace named the technique and credited Homer with it; the Odyssey opens in the tenth year of a ten-year return.", "Narrative", "Books I–XXIV"],
  ["Dactylic hexameter", "noun", "The six-foot metre of Greek epic. Its shape is what makes the formulaic system necessary and possible.", "Term", "Books I–XXIV"],
  ["Kunstsprache", "noun", "The artificial poetic dialect of Homeric epic: a mixture of Ionic, Aeolic, and older forms that no one ever spoke.", "Term", "Books I–XXIV"],
  ["Oral-formulaic theory", "noun", "The account, developed by Milman Parry and Albert Lord from South Slavic singers in the 1930s, that the Homeric poems were composed in performance from an inherited stock of formulas.", "Term", "Books I–XXIV"],
  ["Homeric Question", "proper noun", "The long argument about who composed the poems, when, and out of what. The Analysts saw seams; the Unitarians saw design; the oralists changed the terms of the question.", "Term", "Books I–XXIV"],
  ["Ithaca", "proper noun", "Odysseus' island kingdom in the Ionian sea, described as rugged, low-lying, and westernmost. Whether Homer's Ithaca is the modern island of that name has been argued since antiquity.", "Place", "Books I–XXIV"],
  ["Scheria", "proper noun", "The land of the Phaeacians, halfway between the world of the wanderings and the world of Ithaca. The ancients identified it with Corfu; the poem keeps it deliberately unplaceable.", "Place", "Books V–XIII"],
  ["Ogygia", "proper noun", "Calypso's island, called the navel of the sea. Odysseus spends seven of his ten missing years there, and the poem gives them four hundred lines.", "Place", "Books I, V, VII, XII"],
  ["Aeaea", "proper noun", "Circe's island, where the sunrise and the dances of Dawn are — and where Odysseus' crew spend a full year without noticing.", "Place", "Books X, XII"],
  ["Thrinacia", "proper noun", "The island of the cattle of the Sun. Later readers identified it with Sicily on the strength of the name; Homer says only that it is an island with cattle on it.", "Place", "Book XII"],
  ["Pylos", "proper noun", "Nestor's sandy kingdom in the western Peloponnese. Carl Blegen excavated a genuine Bronze Age palace at Ano Englianos in 1939 with an archive of Linear B tablets in it.", "Place", "Books III, IV, XV"],
  ["Sparta", "proper noun", "Menelaus and Helen's kingdom, where Telemachus finds the war's survivors living in wealth and quiet mutual reproach.", "Place", "Books IV, XV, XVII"],
  ["Erebus", "proper noun", "The darkness of the underworld, where the dead go and Odysseus calls them up from.", "Place", "Books XI, XX, XXIV"],
  ["Asphodel meadow", "proper noun", "The flat grey field where the shades of the dead are. Achilles would rather be a hired hand on a poor farm than king of it.", "Place", "Books XI, XXIV"],
  ["Troy", "proper noun", "The city taken ten years before the poem opens. The Odyssey never narrates the war; it only counts the cost of it.", "Place", "Books I–XXIV"],
  ["The Trojan horse", "proper noun", "Odysseus' own device, sung to his face by Demodocus in Book VIII — the moment the poem's hero hears himself become a story.", "Object", "Books IV, VIII, XI"],
  ["The bow of Iphitus", "proper noun", "A guest-gift from a man murdered soon after giving it, kept at home for twenty years, and strung at last as easily as a singer fits a string to a lyre.", "Object", "Books XXI, XXII"],
  ["The olive-tree bed", "proper noun", "Built by Odysseus around a living olive trunk rooted in the ground, and known to four people. It is the one token that cannot be counterfeited.", "Object", "Book XXIII"],
  ["The scar", "proper noun", "The boar-wound on Odysseus' thigh, taken on Parnassus as a boy hunting with Autolycus' sons. Eurycleia finds it with her hands while washing his feet.", "Object", "Books XIX, XXI, XXIV"],
  ["The shroud of Laertes", "proper noun", "Penelope's three-year deception: a burial cloth woven by day and unpicked by night, undone at last by a maid who told the suitors.", "Object", "Books II, XIX, XXIV"],
  ["Moly", "noun", "The plant Hermes gives Odysseus against Circe's drugs: black root, white flower, hard for mortal men to dig. Homer says the gods call it moly and does not say what men call it.", "Object", "Book X"],
  ["Nepenthe", "noun", "The drug Helen puts in the wine at Sparta, which stops grief for a day — the poem's most disquieting act of hospitality.", "Object", "Book IV"],
  ["Gates of horn and ivory", "proper noun", "Penelope's distinction between dreams that come true and dreams that deceive, made on a pun: horn and fulfil, ivory and deceive.", "Term", "Book XIX"]
];

const EXPANDED_LEXICON = [
  ["Analepsis", "noun", "A narrated return to earlier events. Books IX–XII are one enormous analepsis, and the poem's whole architecture depends on it.", "Narrative", "Books IX–XII"],
  ["Prolepsis", "noun", "Anticipation of events still to come. Teiresias' prophecy in Book XI reaches past the poem's own ending into a death that comes from the sea.", "Narrative", "Books XI, XXIII"],
  ["Frame narrative", "noun", "A story containing another story. Alcinous' hall frames the wanderings; Eumaeus' hut frames the Cretan lies.", "Narrative", "Books VIII–XIV"],
  ["Unreliable narrator", "noun", "A teller whose account cannot simply be trusted. Odysseus tells at least five false autobiographies, and tells the true one only to an audience that cannot check it.", "Narrative", "Books IX–XIX"],
  ["Apostrophe", "noun", "Direct address to someone absent. Homer's narrator addresses Eumaeus by name in the second person more than a dozen times, and no one has satisfactorily explained why.", "Rhetoric", "Books XIV–XVII"],
  ["Enargeia", "noun", "Vividness that makes a thing seem present. Homer's is built from the concrete and the domestic: a dog's ears, a footstool, the smell of pork fat.", "Rhetoric", "Books I–XXIV"],
  ["Litotes", "noun", "Affirmation by denying the opposite — not the worst of the Achaeans. Homer uses it for grim understatement.", "Rhetoric", "Books I–XXIV"],
  ["Hapax legomenon", "noun", "A word occurring only once in a corpus. The Odyssey has hundreds, and several of them sit in its most famous lines.", "Term", "Books I–XXIV"],
  ["Digamma", "noun", "A lost consonant, written Ϝ and sounding like w, whose ghost still governs the metre of lines where the letter itself has vanished. It is the strongest internal evidence for the poems' age.", "Term", "Books I–XXIV"],
  ["Aristeia", "noun", "A stretch in which one warrior dominates the field. Book XXII is the Odyssey's only one, and it is fought indoors with a hunting bow.", "Narrative", "Book XXII"],
  ["Sparagmos", "noun", "Tearing apart. Not the Odyssey's mode: its violence is precise, close-range, and administered rather than ecstatic.", "Term", "Book XXII"],
  ["Supplication", "noun", "The formal appeal of a helpless person, made at the knees, under Zeus' protection. Odysseus supplicates Nausicaa standing up, and the poem notes the calculation.", "Term", "Books VI, VII, XXII"],
  ["Guest-gift exchange", "noun", "The material half of xenia. Gifts create obligations that outlast the people who exchanged them, which is why Telemachus can claim hospitality at Sparta on his father's account.", "Term", "Books I–XXIV"],
  ["Pompē", "noun", "Escort: the host's duty to send a guest onward. The Phaeacians are the best in the world at it and are punished for performing it once too well.", "Term", "Books VII–XIII"],
  ["Autobiography, false", "noun", "Odysseus' Cretan tales — told to Athene, to Eumaeus, to Antinous, to Penelope, and to Laertes. They are consistent enough with each other to be a practised routine.", "Narrative", "Books XIII–XXIV"],
  ["Recognition token", "noun", "The object or knowledge that proves identity: the scar, the bed, the brooch, the trees, the bow. The poem grades them by how hard they are to fake.", "Narrative", "Books XIX–XXIV"],
  ["Telemachy", "proper noun", "The name given to Books I–IV, the son's journey. Analytic scholars have argued since the nineteenth century that it was composed separately and joined on.", "Narrative", "Books I–IV"],
  ["Continuation", "noun", "The stretch after 23.296, which two Alexandrian scholars, Aristarchus and Aristophanes of Byzantium, are reported to have marked as the end of the poem. What follows is disputed to this day.", "Narrative", "Books XXIII–XXIV"],
  ["Linear B", "proper noun", "The Mycenaean script deciphered by Michael Ventris in 1952, which proved that Greek was written five centuries before Homer and that some of his palace vocabulary is genuinely old.", "Term", "Books I–XXIV"],
  ["Bronze Age", "proper noun", "The period the poem remembers, ending around 1200 BCE. The Odyssey's world is a composite: Mycenaean palaces, Iron Age households, and eighth-century Phoenician trade in the same room.", "Event", "Books I–XXIV"]
];

const ROMAN = ["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI","XXII","XXIII","XXIV"];
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const wrap = (value, length) => (value % length + length) % length;

let currentIndex = Number(localStorage.getItem("ody-current-book") || 0);
currentIndex = clamp(currentIndex, 0, BOOKS.length - 1);
let readBooks = new Set(JSON.parse(localStorage.getItem("ody-read-books") || "[]"));
let notes = JSON.parse(localStorage.getItem("ody-notes") || "[]");
let lexiconCategory = "All";
let concordanceCategory = "All";
let dragStart = null;
let toastTimer;
let currentWorkspace = "instrument";
let currentFocus = null;
let focusReturnTarget = null;
let activeBookTransition = null;
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");

function eraFor(bookId) {
  return ERAS.find(era => era.books.includes(bookId));
}

function saveState() {
  localStorage.setItem("ody-current-book", String(currentIndex));
  localStorage.setItem("ody-read-books", JSON.stringify([...readBooks]));
  localStorage.setItem("ody-notes", JSON.stringify(notes));
}

function polar(cx, cy, radius, degrees) {
  const radians = (degrees - 90) * Math.PI / 180;
  return { x: cx + radius * Math.cos(radians), y: cy + radius * Math.sin(radians) };
}

function donutPath(inner, outer, start, end) {
  const p1 = polar(400, 400, outer, end);
  const p2 = polar(400, 400, outer, start);
  const p3 = polar(400, 400, inner, start);
  const p4 = polar(400, 400, inner, end);
  const large = end - start <= 180 ? 0 : 1;
  return `M ${p1.x} ${p1.y} A ${outer} ${outer} 0 ${large} 0 ${p2.x} ${p2.y} L ${p3.x} ${p3.y} A ${inner} ${inner} 0 ${large} 1 ${p4.x} ${p4.y} Z`;
}

function segmentGroup({ start, end, inner, outer, label, className = "", index = -1, ringKind = "", ringIndex = -1, hideLabel = false, curved = false, fontSize = 13, rotation = 0 }) {
  const mid = (start + end) / 2;
  const point = polar(400, 400, (inner + outer) / 2, mid);
  const safeAria = label.replaceAll('"', "&quot;");
  const interaction = index >= 0
    ? `data-book-index="${index}" tabindex="0" role="button" aria-label="Open Book ${ROMAN[index]}: ${safeAria}"`
    : ringKind
      ? `data-ring-kind="${ringKind}" data-ring-index="${ringIndex}" tabindex="0" role="button" aria-label="Open ${ringKind}: ${safeAria}"`
      : "";

  let text = "";
  if (!hideLabel && curved) {
    // A curved baseline gives a label the whole width of its sector instead
    // of the chord across it, which is the difference between "Deucalion &
    // Pyr…" and the actual episode title.
    const radius = (inner + outer) / 2;
    const arc = labelArc(400, 400, radius, start, end, { padding: 1.1, rotation });
    const arcLength = ((end - start - 2.2) * Math.PI / 180) * radius;
    const fits = Math.max(6, Math.floor(arcLength / (fontSize * 0.47)));
    const shown = label.length > fits ? `${label.slice(0, fits - 1).trimEnd()}…` : label;
    const id = `label-${ringKind || className}-${ringIndex >= 0 ? ringIndex : index}`;
    text = `<defs><path id="${id}" d="${arc.d}" fill="none"/></defs>
      <text dy="${arc.flipped ? -4 : 4}"><textPath href="#${id}" startOffset="50%" text-anchor="middle">${shown}</textPath></text>`;
  } else if (!hideLabel) {
    const shown = label.length > 16 ? `${label.slice(0, 15)}…` : label;
    text = `<text x="${point.x}" y="${point.y}" text-anchor="middle" dominant-baseline="middle" transform="rotate(${mid} ${point.x} ${point.y})">${shown}</text>`;
  }

  return `<g class="wheel-segment ${className}" ${interaction}>
    <path d="${donutPath(inner, outer, start + .7, end - .7)}"></path>
    ${text}
  </g>`;
}

function renderVolvelleBase() {
  const bookStep = 360 / BOOKS.length;
  $("#book-ring").innerHTML = BOOKS.map((book, index) =>
    segmentGroup({ start: index * bookStep, end: (index + 1) * bookStep, inner: 286, outer: 330, label: ROMAN[index], className: "book-segment", index })
  ).join("");

  let cursor = 0;
  $("#era-ring").innerHTML = ERAS.map((era, eraIndex) => {
    const width = era.books.length * bookStep;
    const html = segmentGroup({ start: cursor, end: cursor + width, inner: 331, outer: 355, label: era.name, className: "era-segment", ringKind: "era", ringIndex: eraIndex, hideLabel: true });
    cursor += width;
    return html;
  }).join("");

  $$(".book-segment").forEach(segment => {
    const activate = () => selectBook(Number(segment.dataset.bookIndex), { scrollAtlas: false });
    segment.addEventListener("click", activate);
    segment.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); }
    });
  });
  bindRingSegments($("#era-ring"));

  renderOrnamentLayer();
}

/**
 * The static ornament layer. Generated once from parameters: an armillary
 * lattice, a seeded star field, the twenty-four star figures, registration
 * scales, curved era inscriptions, and the sun medallion.
 */
function renderOrnamentLayer() {
  const cx = 400;
  const cy = 400;
  $("#ornament-meridians").innerHTML = renderMeridians(cx, cy, 386, { count: 9 });
  $("#ornament-stars").innerHTML = renderStarField(cx, cy, 358, 390, { count: 210, seed: 8081 });
  $("#ornament-catasterisms").innerHTML = renderCatasterismRing(cx, cy, 373, 34, { count: BOOKS.length });
  $("#ornament-ticks").innerHTML = [
    renderTickRing(cx, cy, 354, { count: 120, majorEvery: 8, minor: 4, major: 9 }),
    renderTickRing(cx, cy, 215, { count: 72, majorEvery: 6, minor: 3, major: 7 })
  ].join("");
  $("#ornament-spokes").innerHTML = renderSpokes(cx, cy, 143, 330, BOOKS.length);
  $("#ornament-sun").innerHTML = [
    renderSunMedallion(cx, cy, 84),
    renderCircularInscription(
      cx,
      cy,
      122,
      "✦ ANDRA MOI ENNEPE MOUSA POLYTROPON ✦ TELL ME MUSE OF THE MAN OF MANY TURNS ",
      { id: "motto-ring", className: "motto-inscription" }
    )
  ].join("");

  renderEraInscriptions();
  renderField();
}

/**
 * The ground behind the instrument.
 *
 * Measured rather than guessed: the field's viewBox is the panel's own pixel
 * box and its origin is the volvelle's measured centre, so the rhumb lines
 * leave the wheel exactly on its spokes at every window size. A gradient could
 * not do this — the geometry has to know where the instrument actually is.
 */
function renderField() {
  const panel = $(".instrument-side");
  const wheel = $("#volvelle");
  const field = $("#instrument-field");
  if (!panel || !wheel || !field) return;
  const box = panel.getBoundingClientRect();
  const disc = wheel.getBoundingClientRect();
  // Height mattered too: this runs on `fonts.ready` and on resize, and a panel
  // measured mid-layout can be one pixel tall.
  if (box.width < 2 || box.height < 2 || disc.width < 2) return;

  field.setAttribute("viewBox", `0 0 ${box.width.toFixed(0)} ${box.height.toFixed(0)}`);
  field.setAttribute("preserveAspectRatio", "none");
  field.innerHTML = renderInstrumentField(
    disc.left - box.left + disc.width / 2,
    disc.top - box.top + disc.height / 2,
    // The plate's engraved edge is at r=392 of the 800-unit viewBox.
    (disc.width / 2) * (392 / 400),
    { width: box.width, height: box.height }
  );
}

/** Era names ride the band they label, and re-flip whenever the wheel turns. */
function renderEraInscriptions() {
  let cursor = 0;
  const bookStep = 360 / BOOKS.length;
  const eraBands = ERAS.map(era => {
    const width = era.books.length * bookStep;
    const band = { start: cursor, end: cursor + width, label: (era.short || era.name).toUpperCase() };
    cursor += width;
    return band;
  });
  $("#ornament-era-labels").innerHTML = renderArcLabels(400, 400, 344, eraBands, {
    idPrefix: "era-arc",
    className: "era-inscription",
    rotation: wheelRotation()
  });
}

function renderHeroBookNav() {
  $("#hero-book-nav").innerHTML = BOOKS.map((book, index) => `
    <button type="button" class="${index === currentIndex ? "is-active" : ""} ${readBooks.has(book.id) ? "is-read" : ""}" data-hero-book="${index}" aria-label="Open Book ${ROMAN[index]}: ${book.title}" aria-current="${index === currentIndex ? "true" : "false"}">
      <span>${ROMAN[index]}</span>
      <small>${book.title}</small>
    </button>`).join("");
  $$("[data-hero-book]").forEach(button => button.addEventListener("click", () => selectBook(Number(button.dataset.heroBook))));
}

function renderOrbisRibbon() {
  $("#orbis-era-ribbon").innerHTML = ERAS.map(era => `
    <button type="button" data-era-book="${era.books[0] - 1}" style="--era:${era.color}">
      <span>${era.name}</span>
      <small>${era.range}</small>
    </button>`).join("");
  $$("[data-era-book]").forEach(button => button.addEventListener("click", () => {
    selectBook(Number(button.dataset.eraBook));
    openWorkspace("reckoning");
  }));
}

/** How far the instrument is currently turned, in degrees. */
function wheelRotation() {
  return -currentIndex * (360 / BOOKS.length);
}

function renderVolvelleDetails(book) {
  const episodeItems = book.episodes;
  const episodeStep = 360 / episodeItems.length;
  $("#episode-ring").innerHTML = episodeItems.map((episode, index) =>
    segmentGroup({ start: index * episodeStep, end: (index + 1) * episodeStep, inner: 216, outer: 285, label: episode[0], className: "episode-segment", ringKind: "episode", ringIndex: index, curved: true, fontSize: 13.5, rotation: wheelRotation() })
  ).join("");
  const motifStep = 360 / book.themes.length;
  $("#motif-ring").innerHTML = book.themes.map((theme, index) =>
    segmentGroup({ start: index * motifStep, end: (index + 1) * motifStep, inner: 143, outer: 215, label: theme[0], className: "motif-segment", ringKind: "theme", ringIndex: index, curved: true, fontSize: 13, rotation: wheelRotation() })
  ).join("");
  bindRingSegments($("#episode-ring"));
  bindRingSegments($("#motif-ring"));
  if (!reducedMotion.matches) {
    gsap.fromTo(
      ["#episode-ring .wheel-segment", "#motif-ring .wheel-segment"],
      { opacity: 0, scale: .965, transformOrigin: "400px 400px" },
      { opacity: 1, scale: 1, duration: .58, stagger: .025, ease: "expo.out", overwrite: true }
    );
  }
}

function bindRingSegments(root) {
  if (!root) return;
  $$("[data-ring-kind]", root).forEach(segment => {
    const activate = () => {
      const kind = segment.dataset.ringKind;
      const index = Number(segment.dataset.ringIndex);
      if (kind === "era") {
        selectBook(ERAS[index].books[0] - 1);
        openWorkspace("reckoning");
        return;
      }
      openFocusFolio(kind, index, segment);
    };
    segment.addEventListener("click", activate);
    segment.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        activate();
      }
    });
  });
}

function meaningfulTokens(value) {
  const stop = new Set(["about", "after", "again", "becomes", "body", "book", "change", "from", "into", "makes", "other", "their", "there", "these", "this", "through", "transformation", "under", "whose", "with"]);
  return new Set(
    value.toLowerCase().match(/[a-z]{4,}/g)?.filter(token => !stop.has(token)) || []
  );
}

function tokenScore(left, right) {
  const a = meaningfulTokens(left);
  const b = meaningfulTokens(right);
  return [...a].reduce((score, token) => score + (b.has(token) ? 1 : 0), 0);
}

function stableHash(value) {
  let hash = 2166136261;
  for (const character of value) {
    hash ^= character.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

/*
 * Figure seals.
 *
 * The sibling instrument built for the Metamorphoses cuts circular medallions
 * out of open-access engravings, and has to caption them "illustrative
 * register, not a portrait" everywhere they appear. There is no comparable
 * plate set for the Odyssey that would not need the same disclaimer, so this
 * instrument does not pretend. Every figure gets an engraved seal instead: an
 * initial on a bronze field inside a milled rim whose tooth count and phase
 * are derived from the name. The same name always produces the same seal, so a
 * figure stays recognisable at a glance across the console, the stemma, and
 * the master genealogy. It simply is not claiming to be a face.
 */
const SEAL_TINTS = 5;

function sealInitials(name) {
  const words = String(name).replace(/[^\p{L}\s'’-]/gu, " ").split(/\s+/).filter(Boolean);
  if (!words.length) return "·";
  if (words.length === 1) return words[0].slice(0, 1).toUpperCase();
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

function sealFor(name) {
  const hash = stableHash(name);
  return {
    initials: sealInitials(name),
    tint: hash % SEAL_TINTS,
    teeth: 9 + (Math.floor(hash / 7) % 8),
    phase: Math.floor(hash / 131) % 40
  };
}

/** The seal as a DOM element, for the console, folio, ledger, and master list. */
function sealMarkup(name, className = "figure-seal") {
  const seal = sealFor(name);
  return `<i class="${className}" data-seal="${seal.tint}" style="--seal-phase:${seal.phase}deg" aria-hidden="true"><b>${escapeHTML(seal.initials)}</b></i>`;
}

function inferFigureRole(name) {
  const divineNames = /Apollo|Bacchus|Ceres|Circe|Cupid|Diana|Earth|Fama|Hebe|Hecate|Iris|Isis|Juno|Jupiter|Latona|Lucina|Mars|Mercury|Minerva|Nature|Nemesis|Neptune|Oceanus|Pluto|Proserpina|Saturn|Sleep|Sol|Themis|Thetis|Tisiphone|Venus|Vulcan|Zephyrus/i;
  const creatureNames = /animal|ants|bear|bird|boar|bull|centaur|dragon|eagle|horse|hound|lion|monster|ram|serpent|sparrow|stag|swan|wolf/i;
  if (divineNames.test(name)) return "divine power";
  if (creatureNames.test(name)) return "creature / altered form";
  if (/people|women|men|gods|muses|nymphs|sailors|pirates|servants|companions|household|Greeks|Trojans|Romans|Bacchants|Maenads|Lapiths|Centaurs|descendants|worshippers|witnesses|voices|shades|winds|Hours|Fates|Furies/i.test(name)) return "chorus / collective";
  if (/narrator|readers/i.test(name)) return "narrative presence";
  return "episode figure";
}

function resolveEpisodeFigure(book, name) {
  const normalized = canonicalEntityName(name).toLowerCase();
  const exact = book.cast.find(candidate => {
    const candidateName = canonicalEntityName(candidate[0]).toLowerCase();
    const aliases = candidate[0].toLowerCase().split(/\s*\/\s*|\s+\bor\b\s+/).map(value => canonicalEntityName(value).toLowerCase());
    return candidateName === normalized || aliases.includes(normalized);
  });
  const person = exact || (normalized.length > 4 ? book.cast.find(candidate => {
    const candidateName = canonicalEntityName(candidate[0]).toLowerCase();
    return candidateName.startsWith(normalized) || normalized.startsWith(candidateName);
  }) : null);
  if (person) return person;
  return [name, inferFigureRole(name), "A named agent, witness, transformed presence, or narrative force in this sequence."];
}

function castForEpisode(book, episode) {
  const study = getEpisodeStudy(episode[0]);
  return study.cast.map(name => resolveEpisodeFigure(book, name));
}

function themesForEpisode(book, episode) {
  return book.themes
    .map((theme, index) => ({ theme, index, score: tokenScore(`${episode[0]} ${episode[1]} ${episode[2]} ${episode[3]}`, `${theme[0]} ${theme[1]}`) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 3);
}

function termsForEpisode(book, episode) {
  const study = getEpisodeStudy(episode[0]);
  const text = `${episode[0]} ${episode[1]} ${episode[2]} ${episode[3]} ${study.locus} ${study.motifs.join(" ")}`;
  const requested = ["Nostos"];
  const rules = [
    [/\b(guest|host|hospitality|xenia|stranger|beggar|welcome|table|feast)\b/i, ["Xenia", "Xeinos"]],
    [/\b(gift|gifts|guest-gift|treasure|tripod|cauldron)\b/i, ["Xeinion", "Guest-gift exchange"]],
    [/\b(recognis|recognit|scar|token|sign|proof|bed|brooch)\b/i, ["Anagnorisis", "Sema"]],
    [/\b(disguis|beggar|rags|lie|lies|false|pretend|invent|Cretan)\b/i, ["Autobiography, false", "Metis"]],
    [/\b(cunning|trick|devis|contriv|stratagem|scheme|plan)\b/i, ["Metis", "Polytropos"]],
    [/\b(fame|glory|reputation|renown|song|sung|singer|bard)\b/i, ["Kleos", "Aoidos"]],
    [/\b(dead|death|shade|shades|ghost|underworld|Hades|Erebus|asphodel)\b/i, ["Nekyia", "Psyche"]],
    [/\b(prophec|prophes|seer|omen|portent|dream|sign in the sky|eagle|hawk)\b/i, ["Prolepsis", "Gates of horn and ivory"]],
    [/\b(assembl|agora|council|speech|debate|herald)\b/i, ["Agora", "Laos"]],
    [/\b(household|house|estate|stores|servants|maids|swineherd|nurse|slave)\b/i, ["Oikos", "Dmōs / dmōē"]],
    [/\b(suitor|suitors|wooer|courting|marriage|remarry|bride)\b/i, ["Mnēstēres", "Oikos"]],
    [/\b(sacrifice|hecatomb|altar|libation|offering|prayer)\b/i, ["Hecatomb", "Themis"]],
    [/\b(insult|outrage|mock|humiliat|footstool|violence|abuse)\b/i, ["Hybris", "Aidos"]],
    [/\b(anger|rage|endure|endurance|heart|patience|restrain)\b/i, ["Thumos", "Atē"]],
    [/\b(sea|ship|raft|sail|voyage|storm|wreck|shore|harbour|oar)\b/i, ["Pompē", "Scheria"]],
    [/\b(hall|megaron|hearth|threshold|door|doorway)\b/i, ["Megaron", "Supplication"]],
    [/\b(narrat|tells|told|report|witness|account|story)\b/i, ["Frame narrative", "Unreliable narrator"]],
    [/\b(simile|like a|weeping|lion|fisherman)\b/i, ["Epic simile", "Enargeia"]],
    [/\b(bath|bathing|arming|arrival|departure)\b/i, ["Type-scene", "Ring composition"]],
    [/\b(honour|honor|portion|share|seat|prize)\b/i, ["Timē", "Geras"]],
    [/\b(supplicat|knees|plea|mercy)\b/i, ["Supplication", "Aidos"]],
    [/\b(escort|convoy|sent home|conveyance)\b/i, ["Pompē"]],
    [/\b(descri|made|wrought|carved|woven|loom|weav)\b/i, ["Ekphrasis", "The shroud of Laertes"]]
  ];
  rules.forEach(([pattern, names]) => {
    if (pattern.test(text)) requested.push(...names);
  });
  if (requested.length === 1) requested.push("Xenia", "Kleos");

  const termPool = [...book.terms, ...EXTRA_LEXICON, ...EXPANDED_LEXICON];
  const byName = new Map(termPool.map(term => [term[0].toLowerCase(), term]));
  const selected = [];
  const seen = new Set();
  requested.forEach(name => {
    const term = byName.get(name.toLowerCase());
    if (term && !seen.has(term[0].toLowerCase())) {
      seen.add(term[0].toLowerCase());
      selected.push(term);
    }
  });
  return selected.slice(0, 4);
}

function tieForEpisode(book, episode) {
  const ranked = book.ties
    .map((tie, index) => ({
      tie,
      index,
      score: tokenScore(`${episode[0]} ${episode[1]} ${episode[2]} ${episode[3]}`, `${tie[0]} ${tie[1]}`)
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index);
  if (ranked[0]?.score > 0) return ranked[0].tie;
  const study = getEpisodeStudy(episode[0]);
  return [
    "Variant epic tradition",
    `Homer sets “${episode[0]}” at ${study.locus}. The episode is his arrangement of material that also circulated through the lost Nostoi, local cult, vase painting, genealogy, and rival tellings; details need not agree across sources.`
  ];
}

function episodeQuestions(episode, themes) {
  const [before = "one standing", after = "another"] = episode[2].split(/\s*→\s*/);
  const primaryTheme = themes[0]?.theme?.[0] || "return and recognition";
  return [
    `As ${before.toLowerCase()} becomes ${after.toLowerCase()}, who in the scene knows it — and what does Homer let the reader know that they do not?`,
    `Read this sequence through “${primaryTheme}.” Where is the poem asking for sympathy, patience, unease, or approval, and who is it withholding them from?`
  ];
}

function episodeContinuity(book, episodeIndex) {
  const previous = book.episodes[episodeIndex - 1];
  const next = book.episodes[episodeIndex + 1];
  return {
    previous: previous ? { title: previous[0], change: previous[2], index: episodeIndex - 1 } : null,
    next: next ? { title: next[0], change: next[2], index: episodeIndex + 1 } : null
  };
}

function episodesForTheme(book, theme) {
  return book.episodes
    .map((episode, index) => ({ episode, index, score: tokenScore(`${theme[0]} ${theme[1]}`, `${episode[0]} ${episode[1]} ${episode[2]} ${episode[3]}`) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 5);
}

/* ------------------------------------------------------------------ genealogy */

let currentFigureName = null;
let figureContext = { episodeTitle: null, bookId: null };
let figureReturnTarget = null;
let stemmaHouseId = null;
let stemmaScope = "book";

/**
 * Commentary is authored with *asterisk emphasis* for work titles. Escape
 * first, then convert — so a title can be italicised without the field
 * becoming an HTML injection point.
 */
function emphasised(value) {
  // `**text**` marks the change itself, `*text*` a title. Doubles are matched
  // first, or the single-asterisk rule eats one pair of a double.
  return escapeHTML(value)
    .replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>")
    .replace(/\*([^*]+)\*/g, "<i>$1</i>");
}

const escapeAttr = value => String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;");

/** Parent, sibling, consort, and child rows — linked where the name resolves. */
function descentRows(figure) {
  const rows = [
    ["Father", figure.father ? [figure.father] : []],
    ["Mother", figure.mother ? [figure.mother] : []],
    ["Siblings", figure.siblings || []],
    ["Consorts", figure.consorts || []],
    ["Children", figure.children || []]
  ].filter(([, values]) => values.length);

  if (!rows.length) {
    return `<div class="figure-lines--none"><dt>Unrecorded</dt><dd>Homer gives this figure no parentage; it enters the poem without a line.</dd></div>`;
  }

  return rows.map(([label, values]) => {
    const items = values.map(value => {
      const related = getFigure(value);
      return related && related.name !== figure.name
        ? `<button type="button" class="descent-link" data-figure-link="${escapeAttr(related.name)}">${escapeHTML(value)}</button>`
        : `<span>${escapeHTML(value)}</span>`;
    }).join("");
    return `<div><dt>${label}</dt><dd>${items}</dd></div>`;
  }).join("");
}

/**
 * What this figure is doing at the level the reader is currently at. Opened
 * from a book rather than an episode, the sheet still names a scene: it finds
 * the first episode in that book where the figure has an authored function,
 * rather than repeating the standing identity twice on one sheet.
 */
function resolveFigureAct(figure, { episodeTitle, bookId }) {
  if (episodeTitle) return { ...figureAct(figure.name, episodeTitle, bookId), episode: episodeTitle };
  const book = BOOKS.find(entry => entry.id === bookId);
  if (book) {
    for (const episode of book.episodes) {
      const found = figureAct(figure.name, episode[0], null);
      if (found?.scope === "episode") return { ...found, episode: episode[0] };
    }
    if (figure.bookActs?.[bookId]) return { text: figure.bookActs[bookId], scope: "book" };
  }
  return { text: null, scope: "absent" };
}

function renderFigureSheet() {
  const figure = getFigure(currentFigureName);
  if (!figure) return;
  const sheet = $("#figure-sheet");
  const act = resolveFigureAct(figure, figureContext);

  $("#figure-sheet-order").textContent = figure.order || figure.kind;
  $("#figure-sheet-name").textContent = figure.name;
  $("#figure-sheet-domain").textContent = figure.domain || "";
  $("#figure-greek").textContent = figure.greek || "—";
  $("#figure-roman").textContent = figure.roman || "—";
  $("#figure-ovid").textContent = figure.homer || "—";
  $("#figure-house").textContent = figure.house ? `Of ${figure.house}.` : "Outside the poem’s named houses.";
  $("#figure-lines").innerHTML = descentRows(figure);
  $("#figure-descent-note").hidden = !/variant|tradition|disputed/i.test(
    [figure.father, figure.mother, ...(figure.children || [])].filter(Boolean).join(" ")
  );
  $("#figure-who").textContent = figure.who;

  const bookNumeral = ROMAN[(figureContext.bookId || 1) - 1];
  const scopeLabel = act.scope === "episode"
    ? `In “${act.episode}” · Book ${bookNumeral}`
    : act.scope === "book"
      ? `Across Book ${bookNumeral}`
      : `Not named in Book ${bookNumeral}`;
  $("#figure-here-scope").textContent = scopeLabel;
  $("#figure-here").textContent = act.text
    || "This figure belongs to the wider poem rather than to the book you have open. Its scenes are listed below.";

  const shownEpisode = act.scope === "episode" ? act.episode : null;
  const list = appearances(figure.name).filter(entry => entry.episode !== shownEpisode);
  $("#figure-appearances").innerHTML = list.length
    ? list.map(entry => {
      const bookIndex = BOOKS.findIndex(entryBook => entryBook.episodes.some(episode => episode[0] === entry.episode));
      const where = bookIndex >= 0 ? `Book ${ROMAN[bookIndex]}` : "";
      return `<li><button type="button" data-figure-episode="${escapeAttr(entry.episode)}">
        <strong>${escapeHTML(entry.episode)}<i>${where}</i></strong>
        <span>${escapeHTML(entry.text)}</span>
      </button></li>`;
    }).join("")
    : `<li class="figure-appearances-empty">This is the figure’s only scene in the poem.</li>`;

  $$("[data-figure-link]", sheet).forEach(button => button.addEventListener("click", () => {
    openFigureSheet(button.dataset.figureLink, { ...figureContext, source: button });
  }));
  $$("[data-figure-episode]", sheet).forEach(button => button.addEventListener("click", () => {
    const title = button.dataset.figureEpisode;
    const bookIndex = BOOKS.findIndex(book => book.episodes.some(episode => episode[0] === title));
    if (bookIndex < 0) return;
    const episodeIndex = BOOKS[bookIndex].episodes.findIndex(episode => episode[0] === title);
    closeFigureSheet({ restoreFocus: false });
    const open = () => openFocusFolio("episode", episodeIndex);
    if (bookIndex === currentIndex) open();
    else selectBook(bookIndex).then(open);
    openWorkspace("instrument");
  }));
}

function openFigureSheet(name, { episodeTitle = null, bookId = BOOKS[currentIndex].id, source = null } = {}) {
  if (!getFigure(name)) {
    openSearch(name);
    return;
  }
  currentFigureName = name;
  figureContext = { episodeTitle, bookId };
  if (source && !source.closest("[inert]")) figureReturnTarget = source;
  renderFigureSheet();
  const sheet = $("#figure-sheet");
  sheet.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-figure-open");
  // Visibility is set before the tween, not by it: a panel GSAP still has
  // marked `visibility: hidden` cannot take focus, which would strand a
  // keyboard reader outside the sheet they just opened.
  gsap.set(sheet, { visibility: "visible" });
  if (reducedMotion.matches) {
    gsap.set(sheet, { opacity: 1, xPercent: 0 });
  } else {
    gsap.fromTo(sheet, { opacity: 0, xPercent: 8 }, { opacity: 1, xPercent: 0, duration: .5, ease: "expo.out", overwrite: true });
  }
  $(".figure-sheet-close", sheet).focus();
}

function closeFigureSheet({ restoreFocus = true } = {}) {
  const sheet = $("#figure-sheet");
  if (sheet.getAttribute("aria-hidden") === "true") return;
  const finish = () => {
    sheet.setAttribute("aria-hidden", "true");
    gsap.set(sheet, { visibility: "hidden" });
    document.body.classList.remove("is-figure-open");
    currentFigureName = null;
    if (restoreFocus && figureReturnTarget?.isConnected) figureReturnTarget.focus();
    figureReturnTarget = null;
  };
  if (reducedMotion.matches) {
    gsap.set(sheet, { opacity: 0 });
    finish();
  } else {
    gsap.to(sheet, { opacity: 0, xPercent: 6, duration: .28, ease: "power2.in", overwrite: true, onComplete: finish });
  }
}
function stemmaGraphFor(house, book, { scope = "book" } = {}) {
  const inBook = new Set(figuresForBook(book.id).map(figure => figure.name));
  const full = descentGraph([house.root], {
    getFigure,
    childrenOf,
    maxGenerations: 4
  });
  if (scope === "house") return full;
  const narrowed = pruneGraph(full, name => inBook.has(name));
  return narrowed.nodes.size >= 3 ? narrowed : full;
}

/** A clipped folio crop, so a node carries a face rather than an empty disc. */
/* The seals are drawn, not clipped, so the stemma needs no per-node defs. */
function portraitDefs() {
  return "";
}

/**
 * Chart metrics, in chart units. The plate is fitted to its content and then
 * zoomed, so these stay fixed however many generations a house runs to: a
 * portrait is the same size on a two-row chart and a six-row one.
 */
const STEMMA_NODE_R = 30;
const STEMMA_ROW_GAP = 140;
const STEMMA_SLOT = 112;

const round = value => Number(value.toFixed(1));

/**
 * The family bracket. Each parent drops to a shared junction, the junction
 * drops to a bar, and every child rises to that bar. It is the oldest mark in
 * the genre and the reason a stemma can be read at a glance: children of one
 * marriage are visibly one set, not a scatter of separate lines.
 */
function bracketPath(bracket, nodeR) {
  const parts = [];
  bracket.parents.forEach(parent => {
    parts.push(`M ${round(parent.x)} ${round(bracket.dropFrom)}`);
    if (Math.abs(parent.x - bracket.junctionX) < 0.5) {
      parts.push(`L ${round(parent.x)} ${round(bracket.junctionY)}`);
    } else {
      const corner = bracket.junctionY - 12;
      const sweep = parent.x < bracket.junctionX ? 1 : 0;
      parts.push(`L ${round(parent.x)} ${round(corner)}`);
      parts.push(`A 12 12 0 0 ${sweep} ${round(parent.x + (sweep ? 12 : -12))} ${round(bracket.junctionY)}`);
      parts.push(`L ${round(bracket.junctionX)} ${round(bracket.junctionY)}`);
    }
  });
  parts.push(`M ${round(bracket.junctionX)} ${round(bracket.junctionY)} L ${round(bracket.junctionX)} ${round(bracket.barY)}`);
  if (!bracket.direct) {
    parts.push(`M ${round(bracket.barFrom)} ${round(bracket.barY)} L ${round(bracket.barTo)} ${round(bracket.barY)}`);
  }
  bracket.children.forEach(child => {
    parts.push(`M ${round(child.x)} ${round(bracket.barY)} L ${round(child.x)} ${round(child.y - nodeR - 4)}`);
  });
  return parts.join(" ");
}

/** Marriage: a rule along the row, tucked under the two portraits it joins. */
function marriagePath(edge, nodeR) {
  const y = edge.from.y;
  if (edge.adjacent) {
    return `M ${round(edge.from.x + nodeR + 3)} ${round(y)} L ${round(edge.to.x - nodeR - 3)} ${round(y)}`;
  }
  // A tie the layout could not seat side by side dips well below the row, and
  // below the names, rather than cutting through whoever happens to stand
  // between the two. These are hidden until a line is traced: drawn always,
  // a god with six lovers lays six rules across his own generation and the
  // reader reads "Juno — Io" where the poem said nothing of the kind.
  const dip = y + nodeR + 34 + (edge.lane || 0) * 11;
  return [
    `M ${round(edge.from.x)} ${round(y + nodeR + 3)}`,
    `L ${round(edge.from.x)} ${round(dip - 10)}`,
    `Q ${round(edge.from.x)} ${round(dip)} ${round(edge.from.x + 10)} ${round(dip)}`,
    `L ${round(edge.to.x - 10)} ${round(dip)}`,
    `Q ${round(edge.to.x)} ${round(dip)} ${round(edge.to.x)} ${round(dip - 10)}`,
    `L ${round(edge.to.x)} ${round(y + nodeR + 3)}`
  ].join(" ");
}

/** "Bacchus / Dionysus" is two names; a medallion has room for one. */
function chartLabel(name) {
  const short = name.split(" / ")[0].replace(/\s*\(.*$/, "").trim();
  return short.length > 14 ? `${short.slice(0, 13)}…` : short;
}



/**
 * The engraved medallion: a clipped plate crop behind a gold rim. The crop
 * offset comes from the same deterministic hash the console and folio use, so
 * a figure keeps the same face everywhere in the interface.
 */
/** The same seal, drawn in SVG for a stemma node. */
function portraitMedallion(name, radius) {
  const seal = sealFor(name);
  const teeth = Array.from({ length: seal.teeth }, (unused, index) => {
    const angle = (index / seal.teeth) * 360 + seal.phase;
    const inner = polar(0, 0, radius * 0.8, angle);
    const outer = polar(0, 0, radius * 0.95, angle);
    return `M ${round(inner.x)} ${round(inner.y)} L ${round(outer.x)} ${round(outer.y)}`;
  }).join(" ");
  return `<circle class="seal-field" data-seal="${seal.tint}" r="${round(radius * 0.93)}"></circle>
    <path class="seal-teeth" d="${teeth}"></path>
    <text class="seal-initials" x="0" y="0" text-anchor="middle" dominant-baseline="central"
      font-size="${round(radius * 0.84)}">${escapeHTML(seal.initials)}</text>`;
}

/* ------------------------------------------------- the master genealogy */

/*
 * Rows are generations, not kinships. "Children" was the wrong word for row
 * one: a mortal a god carried off marries into her husband's generation
 * without being anyone's daughter here, and captioning her row "children of
 * the founders" says something the poem does not.
 */
const GENERATION_NAMES = [
  "Founders",
  "Generation I",
  "Generation II",
  "Generation III",
  "Generation IV",
  "Generation V",
  "Generation VI"
];

let masterBands = null;
let masterFilter = "";
let rubricTracker = null;
/*
 * Stemma zoom.
 *
 * The chart uses d3-zoom on a transform; the stemma cannot, because its whole
 * design is that chart units are CSS pixels and the plate is drawn at true
 * size inside a scroller. So zoom here scales the rendered width and height
 * instead — the SVG's viewBox does the rest, the scroll container keeps
 * working, and drag-to-pan is unchanged. One factor, persisted like the panes.
 */
let stemmaZoom = 1;

/**
 * Every figure in the poem, ranked once on a single scale so a generation
 * means the same thing everywhere. Figures Homer gives no line at all are not
 * quietly filed under "founders" — they get their own register, which is the
 * honest place for a personified river or a ship's crew.
 */
function buildMasterBands() {
  const { rank, parents, children } = globalGenerations({ figures: FIGURES, getFigure });
  const attached = [];
  const unattached = [];
  FIGURES.forEach(figure => {
    const hasLine = parents.get(figure.name).size > 0 || children.get(figure.name).size > 0;
    (hasLine ? attached : unattached).push({ figure, generation: rank.get(figure.name) });
  });

  const bands = [];
  const maxRank = Math.max(0, ...attached.map(entry => entry.generation));
  for (let generation = 0; generation <= maxRank; generation += 1) {
    const members = attached
      .filter(entry => entry.generation === generation)
      .sort((a, b) => a.figure.name.localeCompare(b.figure.name));
    if (members.length) {
      bands.push({
        generation,
        title: GENERATION_NAMES[generation] || `Descent ${generation}`,
        note: generation === 0
          ? "Powers and founders the poem gives no parents — every line below begins here."
          : `One generation further from the founders, by descent or by marriage into it. ${members.length} figures.`,
        members
      });
    }
  }
  bands.push({
    generation: null,
    title: "Without recorded descent",
    note: "Named in the poem but given no parentage: collectives, personified forces, single-scene mortals, and objects that act.",
    members: unattached.sort((a, b) => a.figure.name.localeCompare(b.figure.name))
  });
  return bands;
}

function masterMatches(figure, query) {
  if (!query) return true;
  const haystack = [figure.name, figure.greek, figure.roman, figure.house, figure.order, figure.homer]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function renderMasterGenealogy() {
  masterBands ||= buildMasterBands();
  const query = masterFilter.trim().toLowerCase();
  let shown = 0;

  const html = masterBands.map(band => {
    const members = band.members.filter(entry => masterMatches(entry.figure, query));
    if (!members.length) return "";
    shown += members.length;
    const marker = band.generation === null ? "—" : String(band.generation);
    return `<section class="master-band">
      <header>
        <span class="master-band-mark" aria-hidden="true">${marker}</span>
        <div>
          <h4>${escapeHTML(band.title)}<i>${members.length}</i></h4>
          <p>${escapeHTML(band.note)}</p>
        </div>
      </header>
      <ul>
        ${members.map(({ figure }) => `
          <li>
            <button type="button" data-master-figure="${escapeAttr(figure.name)}">
              ${sealMarkup(figure.name, "master-portrait")}
              <span class="master-copy">
                <strong>${escapeHTML(figure.name)}</strong>
                <span class="master-order">${escapeHTML(figure.order || figure.kind)}</span>
                <span class="master-registers"><i>Gk</i> ${escapeHTML(figure.greek)} · <i>Lat</i> ${escapeHTML(figure.roman)}</span>
                ${figure.house ? `<span class="master-house">${escapeHTML(figure.house)}</span>` : ""}
              </span>
            </button>
          </li>`).join("")}
      </ul>
    </section>`;
  }).join("");

  $("#master-bands").innerHTML = html || `<p class="master-empty">No figure matches “${escapeHTML(masterFilter)}”.</p>`;
  $("#master-summary").textContent = query
    ? `${shown} of ${FIGURES.length} figures match. Generations are counted from the poem's founders, on one scale for the whole work.`
    : `All ${FIGURES.length} named figures, ranked by generation on a single scale. Each opens its own record.`;

  $$("[data-master-figure]").forEach(button => button.addEventListener("click", () => {
    openFigureSheet(button.dataset.masterFigure, { bookId: BOOKS[currentIndex].id, source: button });
  }));
}

/**
 * Drag the plate the way one drags a paper chart across a table. Bound once —
 * the stemma re-renders on every book, house, and scope change, and a listener
 * per render would stack up. Pointer capture keeps the drag alive when the
 * cursor leaves the plate, and a small threshold means a click on a medallion
 * is still a click.
 */
function bindPlateDrag() {
  const scroll = $(".stemma-scroll");
  if (!scroll || scroll.dataset.dragBound) return;
  scroll.dataset.dragBound = "true";
  let origin = null;
  scroll.addEventListener("pointerdown", event => {
    if (event.button !== 0 || event.target.closest("[data-stemma-figure]")) return;
    origin = { x: event.clientX, y: event.clientY, left: scroll.scrollLeft, top: scroll.scrollTop };
    scroll.setPointerCapture(event.pointerId);
  });
  scroll.addEventListener("pointermove", event => {
    if (!origin) return;
    scroll.scrollLeft = origin.left - (event.clientX - origin.x);
    scroll.scrollTop = origin.top - (event.clientY - origin.y);
    if (Math.abs(event.clientX - origin.x) > 3) scroll.classList.add("is-dragging");
  });
  const release = event => {
    origin = null;
    scroll.classList.remove("is-dragging");
    if (event.pointerId !== undefined && scroll.hasPointerCapture?.(event.pointerId)) {
      scroll.releasePointerCapture(event.pointerId);
    }
  };
  scroll.addEventListener("pointerup", release);
  scroll.addEventListener("pointercancel", release);
}

/*
 * Zooming the plate.
 *
 * The stemma's whole design is that chart units are CSS pixels and the plate is
 * drawn at true size inside a scroller, so zoom scales the *rendered* size of
 * the sheet and leaves the viewBox alone. Nothing about the layout changes —
 * which means a zoom does not need a layout. Re-running renderStemma on every
 * wheel tick would recompute generations, re-lay four dozen medallions and
 * rebuild the portrait defs sixty times a second to change two attributes.
 *
 * So this is the whole operation: two attributes and a caption. It is what
 * makes a pinch feel continuous rather than stepped.
 */
const STEMMA_ZOOM_MIN = 0.12;
const STEMMA_ZOOM_MAX = 3;
/** Which sheet is on the plate, so a new one can start at its own beginning. */
let stemmaDrawnKey = "";

function stemmaFitScale() {
  const svg = $("#stemma-svg");
  const scroll = $(".stemma-scroll");
  if (!svg || !scroll) return 1;
  const naturalWidth = Number(svg.dataset.naturalWidth) || 1;
  const naturalHeight = Number(svg.dataset.naturalHeight) || 1;
  // No lower clamp. A floor that stops short of fitting means the button does
  // not do the one thing it is named for — the widest house is four thousand
  // pixels and the plate can be seven hundred.
  return Math.min(1, scroll.clientWidth / naturalWidth, scroll.clientHeight / naturalHeight);
}

function applyStemmaZoom({ syncRange = true } = {}) {
  const svg = $("#stemma-svg");
  if (!svg?.dataset.naturalWidth) return;
  svg.setAttribute("width", round(Number(svg.dataset.naturalWidth) * stemmaZoom));
  svg.setAttribute("height", round(Number(svg.dataset.naturalHeight) * stemmaZoom));
  const percent = Math.round(stemmaZoom * 100);
  $("#stemma-zoom-note").textContent = `${percent}%`;
  const range = $("#stemma-zoom-range");
  if (range) {
    range.setAttribute("aria-valuetext", `${percent} per cent`);
    if (syncRange) range.value = String(percent);
  }
}

function setStemmaZoom(value, { syncRange = true, anchor = null } = {}) {
  const next = clamp(value, STEMMA_ZOOM_MIN, STEMMA_ZOOM_MAX);
  const previous = stemmaZoom;
  if (next === previous) return;
  stemmaZoom = next;
  applyStemmaZoom({ syncRange });

  // Keep whatever the reader was looking at under the same point on the glass.
  // Without this a pinch drifts toward the top-left corner of the sheet, which
  // reads as the chart sliding away from the fingers doing the zooming.
  const scroll = $(".stemma-scroll");
  if (!scroll) return;
  const ratio = next / previous;
  const box = scroll.getBoundingClientRect();
  const x = anchor ? anchor.x - box.left : scroll.clientWidth / 2;
  const y = anchor ? anchor.y - box.top : scroll.clientHeight / 2;
  scroll.scrollLeft = (scroll.scrollLeft + x) * ratio - x;
  scroll.scrollTop = (scroll.scrollTop + y) * ratio - y;
}

/*
 * Pinch, on the trackpad the reader already has.
 *
 * A pinch on a Mac trackpad does not arrive as a gesture — it arrives as a
 * wheel event with ctrlKey set, which is a browser convention rather than a
 * real modifier being held. Honouring it (and calling preventDefault, or the
 * page itself zooms) is the whole of trackpad support. A plain two-finger
 * scroll is left alone: that is panning, and the scroller already does it.
 */
function bindStemmaPinch() {
  const scroll = $(".stemma-scroll");
  if (!scroll || scroll.dataset.pinchBound) return;
  scroll.dataset.pinchBound = "true";
  scroll.addEventListener("wheel", event => {
    if (!event.ctrlKey && !event.metaKey) return;
    event.preventDefault();
    // Exponential, so a given finger distance changes the view by the same
    // proportion whether the sheet is at 20 per cent or at 200.
    setStemmaZoom(stemmaZoom * Math.exp(-event.deltaY * 0.012), {
      anchor: { x: event.clientX, y: event.clientY }
    });
  }, { passive: false });
}

function renderStemma(book) {
  bindPlateDrag();
  const houses = housesForBook(book.id);
  if (!houses.length) return;
  if (!houses.some(house => house.id === stemmaHouseId)) stemmaHouseId = houses[0].id;

  $("#stemma-book-select").value = String(currentIndex);
  $("#stemma-houses").innerHTML = houses.map(house => `
    <button type="button" data-stemma-house="${house.id}" aria-pressed="${house.id === stemmaHouseId}">
      <strong>${escapeHTML(house.name)}</strong>
      <em>${escapeHTML(house.latin)}</em>
    </button>`).join("");
  $$("[data-stemma-house]").forEach(button => button.addEventListener("click", () => {
    stemmaHouseId = button.dataset.stemmaHouse;
    renderStemma(book);
  }));
  // The scope buttons are markup, not render output: they are only ever
  // *read* here. Binding them would add one more listener on every book,
  // house, and scope change, so a single click would eventually re-render the
  // whole workspace a dozen times. They are bound once, in bindEvents.
  $$("[data-stemma-scope]").forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.stemmaScope === stemmaScope));
  });

  // The whole-poem view replaces the stage rather than sitting beside it, so
  // the stage goes with the plate. The scope switch is outside both.
  const isPoemScope = stemmaScope === "poem";
  $("#master-genealogy").hidden = !isPoemScope;
  $(".stemma-stage").hidden = isPoemScope;
  $(".stemma-plate").hidden = false;
  if (isPoemScope) {
    renderMasterGenealogy();
    return;
  }

  const house = houses.find(entry => entry.id === stemmaHouseId);
  $("#stemma-house-name").textContent = house.name;
  $("#stemma-house-latin").textContent = house.latin;
  $("#stemma-house-note").textContent = house.note;

  const bookFigures = new Set(figuresForBook(book.id).map(figure => figure.name));
  const graph = stemmaGraphFor(house, book, { scope: stemmaScope });

  if (graph.nodes.size < 2) {
    $("#stemma-nodes").innerHTML = "";
    $("#stemma-edges").innerHTML = "";
    $("#stemma-registers").innerHTML = "";
    $("#stemma-rubric").innerHTML = "";
    $("#stemma-defs").innerHTML = "";
    $("#stemma-empty").hidden = false;
  } else {
    $("#stemma-empty").hidden = true;
    const layout = familyLayout(graph, {
      nodeRadius: STEMMA_NODE_R,
      rowGap: STEMMA_ROW_GAP,
      slotWidth: STEMMA_SLOT
    });
    const nodeR = layout.nodeRadius;

    // The plate is fitted to its own content rather than to a fixed square, so
    // a two-person line is not lost in the middle of an empty page and a
    // forty-person house is not crushed into one. Chart units are CSS pixels:
    // the plate is drawn at its true size and scrolled, because scaling a
    // forty-figure house down to fit is what turned the last chart into dots.
    const { left, right, top, bottom } = layout.bounds;
    const gutter = 146;
    const padX = 34;
    const padY = 18;
    const originX = left - gutter;
    const width = right - originX + padX;
    const height = bottom - top + padY * 2;
    const svg = $("#stemma-svg");
    const plateScroll = $(".stemma-scroll");
    svg.setAttribute("viewBox", `${round(originX)} ${round(top - padY)} ${round(width)} ${round(height)}`);
    svg.setAttribute("width", round(width * stemmaZoom));
    svg.setAttribute("height", round(height * stemmaZoom));
    svg.dataset.naturalWidth = round(width);
    svg.dataset.naturalHeight = round(height);

    /*
     * A new chart starts at its beginning, at a size that suits it.
     *
     * Zoom is the reader's and it persists — but it persists as an answer to a
     * particular sheet. Drawing the Cyprian line at the forty-one per cent that
     * was needed to fit the seventy-nine-figure Olympian house puts six
     * medallions in the corner of an empty plate, and leaves the scroller
     * parked where the old chart's third generation used to be. So when the
     * sheet itself changes: scroll to the top, and drop a zoom-out that the new
     * sheet does not need.
     */
    const key = `${book.id}·${stemmaHouseId}·${stemmaScope}`;
    if (key !== stemmaDrawnKey) {
      stemmaDrawnKey = key;
      const fits = Math.min(1,
        plateScroll.clientWidth / width, plateScroll.clientHeight / height);
      if (stemmaZoom < fits) stemmaZoom = fits;
      plateScroll.scrollTo({ left: 0, top: 0 });
    }
    applyStemmaZoom();

    $("#stemma-defs").innerHTML = portraitDefs(layout.people, nodeR);

    // A generation is a ruled register with its name in the margin, the way a
    // manuscript rubricates a column. This is what makes "one row is one
    // generation" something the reader sees rather than something the caption
    // claims — and it is the whole reason the rings had to go.
    $("#stemma-registers").innerHTML = layout.rows.map(row => `
      <line class="stemma-row-rule" x1="${round(originX + 14)}" y1="${round(row.y)}" x2="${round(right + padX - 10)}" y2="${round(row.y)}"/>`).join("");

    $("#stemma-rubric").innerHTML = layout.rows.map(row => `
      <g class="stemma-row" data-row-y="${round(row.y)}" transform="translate(0 ${round(row.y)})">
        <rect class="stemma-row-plate" x="0" y="-25" width="124" height="50" rx="2"/>
        <text class="stemma-row-mark" x="10" y="-4">${GENERATION_NAMES[row.generation] || `Descent ${row.generation}`}</text>
        <text class="stemma-row-count" x="10" y="15">${row.count} figure${row.count === 1 ? "" : "s"}</text>
      </g>`).join("");

    const generationCounts = layout.people.reduce((totals, person) => {
      totals[person.generation] = (totals[person.generation] || 0) + 1;
      return totals;
    }, {});
    $("#stemma-key").innerHTML = Object.keys(generationCounts)
      .sort((a, b) => a - b)
      .map(generation => `<li><b>${generation}</b><span>${GENERATION_NAMES[generation] || `Descent ${generation}`}</span><i>${generationCounts[generation]}</i></li>`)
      .join("");

    // Two marks, two meanings: a rule between two portraits is a marriage, a
    // bracket dropping to a bar is the issue of one.
    $("#stemma-edges").innerHTML = [
      layout.marriages
        .map(edge => `<path class="stemma-union${edge.adjacent ? "" : " is-distant"}" d="${marriagePath(edge, nodeR)}" data-line-a="${escapeAttr(edge.from.name)}" data-line-b="${escapeAttr(edge.to.name)}"/>`)
        .join(""),
      layout.brackets
        .map(bracket => `<path class="stemma-descent${bracket.skips ? " is-skipping" : ""}" d="${bracketPath(bracket, nodeR)}" data-line-parents="${escapeAttr(bracket.parents.map(parent => parent.name).join("|"))}"/>`)
        .join(""),
      layout.brackets
        .filter(bracket => !bracket.direct)
        .map(bracket => `<circle class="stemma-junction" cx="${round(bracket.junctionX)}" cy="${round(bracket.junctionY)}" r="4.5"/>`)
        .join("")
    ].join("");

    $("#stemma-nodes").innerHTML = layout.people.map(person => {
      const inBook = bookFigures.has(person.name);
      const figure = person.figure;
      const label = chartLabel(figure.name);
      const classes = ["stemma-node", inBook ? "is-in-book" : "", person.partner ? "is-partnered" : ""].filter(Boolean).join(" ");
      // The name sits under the portrait. A partner's name is nudged away from
      // the marriage rule so a couple reads as two people rather than one
      // hyphenated blur, and so neither label sits on the bracket between them.
      const anchor = person.side === 0 ? "middle" : person.side > 0 ? "start" : "end";
      const labelX = person.side * (nodeR * 0.62);
      return `<g class="${classes}" transform="translate(${round(person.x)} ${round(person.y)})"
          tabindex="0" role="button" data-stemma-figure="${escapeAttr(figure.name)}"
          aria-label="${escapeAttr(figure.name)}, generation ${person.generation}${inBook ? ", named in this book" : ""}">
        <title>${escapeHTML(figure.name)} · ${escapeHTML(figure.order || figure.kind)}</title>
        <circle class="stemma-node-plate" r="${round(nodeR + 5)}"/>
        ${portraitMedallion(figure.name, nodeR)}
        <circle class="stemma-node-rim" r="${nodeR}"/>
        ${inBook ? `<circle class="stemma-node-mark" r="${round(nodeR + 8)}"/>` : ""}
        <text class="stemma-node-label" x="${round(labelX)}" y="${round(nodeR + 26)}" text-anchor="${anchor}">${escapeHTML(label)}</text>
      </g>`;
    }).join("");

    $("#stemma-generations").textContent = `${layout.generationCount} generation${layout.generationCount === 1 ? "" : "s"} · ${layout.people.length} figures shown`;

    // A whole house is a wall chart. Rather than shrink it to nothing, open it
    // on its founders and let the reader pull the rest across.
    const scroll = $(".stemma-scroll");
    const founder = layout.people.find(person => person.generation === 0) || layout.people[0];

    // The generation rubric rides the left edge of whatever is on screen. A
    // caption anchored to the chart's own left margin scrolls away on a house
    // four thousand pixels wide, and the reader loses which row they are in.
    const marks = $$("#stemma-rubric .stemma-row");
    const trackRubric = () => {
      const x = round(originX + scroll.scrollLeft + 26);
      marks.forEach(mark => mark.setAttribute("transform", `translate(${x} ${mark.dataset.rowY})`));
    };
    // One listener, replaced each render: the plate is redrawn on every book,
    // house, and scope change, and stacking these would leave every previous
    // render's dead nodes being written to on scroll.
    if (rubricTracker) scroll.removeEventListener("scroll", rubricTracker);
    rubricTracker = trackRubric;
    scroll.addEventListener("scroll", trackRubric, { passive: true });

    requestAnimationFrame(() => {
      scroll.scrollLeft = Math.max(0, founder.x - originX - scroll.clientWidth / 2);
      scroll.classList.toggle("is-scrollable", scroll.scrollWidth > scroll.clientWidth + 2);
      scroll.classList.toggle("is-tall", scroll.scrollHeight > scroll.clientHeight + 2);
      trackRubric();
    });

    // Lighting one line and dimming the rest is what makes a crowded house
    // legible: the reader gets an answer to "where does this one come from"
    // without tracing rules by eye.
    const plate = $("#stemma-svg");
    const lightLine = name => {
      const line = lineageOf(graph, name);
      plate.classList.add("is-tracing");
      $$("[data-stemma-figure]").forEach(node => {
        node.classList.toggle("is-on-line", line.has(node.dataset.stemmaFigure));
      });
      $$("#stemma-edges [data-line-parents]").forEach(path => {
        path.classList.toggle("is-on-line", path.dataset.lineParents.split("|").some(parent => line.has(parent)));
      });
      $$("#stemma-edges [data-line-a]").forEach(path => {
        path.classList.toggle("is-on-line", line.has(path.dataset.lineA) || line.has(path.dataset.lineB));
      });
    };
    const clearLine = () => {
      plate.classList.remove("is-tracing");
      $$("#stemma-nodes .is-on-line, #stemma-edges .is-on-line")
        .forEach(node => node.classList.remove("is-on-line"));
    };

    $$("[data-stemma-figure]").forEach(node => {
      const activate = () => openFigureSheet(node.dataset.stemmaFigure, { bookId: book.id, source: node });
      node.addEventListener("click", activate);
      node.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); activate(); }
      });
      node.addEventListener("pointerenter", () => lightLine(node.dataset.stemmaFigure));
      node.addEventListener("focus", () => lightLine(node.dataset.stemmaFigure));
      node.addEventListener("pointerleave", clearLine);
      node.addEventListener("blur", clearLine);
    });
  }

  const members = figuresForBook(book.id);
  $("#stemma-count").textContent = `· ${members.length}`;
  $("#stemma-list").innerHTML = members.map(figure => {
    const act = resolveFigureAct(figure, { episodeTitle: null, bookId: book.id });
    const scene = act.scope === "episode" ? `<i class="stemma-list-scene">${escapeHTML(act.episode)}</i>` : "";
    return `<li>
      <button type="button" data-stemma-figure-list="${escapeAttr(figure.name)}">
        <span class="stemma-list-name">
          <strong>${escapeHTML(figure.name)}</strong>
          <em>${escapeHTML(figure.order || figure.kind)}</em>
        </span>
        <span class="stemma-list-registers">
          <i>Gk</i> ${escapeHTML(figure.greek)} · <i>Lat</i> ${escapeHTML(figure.roman)}
        </span>
        ${scene}
        <span class="stemma-list-act">${escapeHTML(act.text || figure.who)}</span>
      </button>
    </li>`;
  }).join("");
  $$("[data-stemma-figure-list]").forEach(button => button.addEventListener("click", () => {
    openFigureSheet(button.dataset.stemmaFigureList, { bookId: book.id, source: button });
  }));
}

function renderFocusFolio() {
  if (!currentFocus) return;
  const folio = $("#focus-folio");
  const book = BOOKS[currentIndex];
  const { kind, index } = currentFocus;
  const isEpisode = kind === "episode";
  const item = isEpisode ? book.episodes[index] : book.themes[index];

  $("#focus-folio-kind").textContent = `${isEpisode ? "Episode" : "Theme"} ${isEpisode ? ROMAN[index] || index + 1 : String(index + 1).padStart(2, "0")}`;
  $("#focus-folio-book").textContent = `Book ${ROMAN[currentIndex]} · ${book.title}`;
  $("#focus-folio-index").textContent = isEpisode
    ? `Narrative sequence ${index + 1} of ${book.episodes.length}`
    : `Reading lens ${index + 1} of ${book.themes.length}`;
  $("#focus-folio-title").textContent = item[0];

  const relationLabels = $$(".focus-folio-relations > div > span");
  if (isEpisode) {
    const episode = item;
    const study = getEpisodeStudy(episode[0]);
    const cast = castForEpisode(book, episode);
    const themes = themesForEpisode(book, episode);
    const terms = termsForEpisode(book, episode);
    const tie = tieForEpisode(book, episode);
    const questions = episodeQuestions(episode, themes);
    const continuity = episodeContinuity(book, index);
    $("#focus-folio-locus").textContent = study.locus;
    $("#focus-folio-summary").textContent = episode[1];
    $("#focus-folio-change").textContent = episode[2];
    $("#focus-folio-note").textContent = episode[3];
    // The plain register goes first. It is the one that answers "what
    // happened", and it is the one the interpretive reading kept leaving out.
    const beats = episodeBeats(episode[0]);
    $("#focus-folio-beats-block").hidden = !beats;
    if (beats) {
      $("#focus-folio-beats").innerHTML = beats
        .map(beat => `<li>${emphasised(beat)}</li>`)
        .join("");
    }
    const reading = episodeReading(episode[0]);
    const readingBlock = $("#focus-folio-reading-block");
    readingBlock.hidden = !reading;
    if (reading) {
      $("#focus-folio-reading").textContent = reading.reading;
      $("#focus-folio-turn").textContent = reading.turn;
      $("#focus-folio-after").textContent = reading.after;
    }
    const commentary = episodeCommentary(episode[0]);
    $("#focus-folio-commentary").hidden = !commentary;
    if (commentary) {
      $("#focus-folio-sources").innerHTML = emphasised(commentary.sources);
      $("#focus-folio-craft").innerHTML = emphasised(commentary.craft);
      $("#focus-folio-afterlife").innerHTML = emphasised(commentary.afterlife);
    }
    relationLabels[0].textContent = `Episode cast · ${cast.length}`;
    relationLabels[1].textContent = "Related lenses";
    $("#focus-folio-cast").innerHTML = cast.map(person => {
      const figure = getFigure(person[0]);
      const act = figureAct(person[0], episode[0], book.id);
      const registers = figure
        ? `<span class="focus-cast-registers"><i>Gk</i> ${escapeHTML(figure.greek)} · <i>Lat</i> ${escapeHTML(figure.roman)}</span>`
        : "";
      const doing = act ? `<span class="focus-cast-act">${escapeHTML(act.text)}</span>` : "";
      return `<li><button type="button" data-focus-cast="${escapeAttr(person[0])}">
        ${sealMarkup(person[0], "focus-cast-portrait")}
        <span class="focus-cast-copy">
          <strong>${escapeHTML(person[0])}</strong>
          <span class="focus-cast-order">${escapeHTML(figure?.order || person[1])}</span>
          ${registers}
          ${doing}
        </span>
      </button></li>`;
    }).join("");
    $("#focus-folio-themes").innerHTML = themes.map(({ theme, index: themeIndex }) => `<li><button type="button" data-focus-theme="${themeIndex}">${theme[0]}</button></li>`).join("");
    $("#focus-folio-motifs").innerHTML = study.motifs.map(motif => `<span>${motif}</span>`).join("");
    $("#focus-folio-terms").innerHTML = terms.map(term => `<button type="button" data-focus-lexicon="${term[0]}" title="${term[2]}">${term[0]}</button>`).join("");
    $("#focus-folio-tie-title").textContent = tie[0];
    $("#focus-folio-tie").textContent = tie[1];
    $("#focus-folio-questions").innerHTML = questions.map(question => `<li>${question}</li>`).join("");
    $("#focus-folio-continuity").innerHTML = [
      continuity.previous
        ? `<button type="button" data-focus-episode="${continuity.previous.index}"><span>Before</span><strong>${continuity.previous.title}</strong><small>${continuity.previous.change}</small></button>`
        : `<span class="continuity-boundary">The book opens here.</span>`,
      continuity.next
        ? `<button type="button" data-focus-episode="${continuity.next.index}"><span>After</span><strong>${continuity.next.title}</strong><small>${continuity.next.change}</small></button>`
        : `<span class="continuity-boundary">The book closes here.</span>`
    ].join("");
  } else {
    const theme = item;
    const episodes = episodesForTheme(book, theme);
    $("#focus-folio-reading-block").hidden = true;
    $("#focus-folio-beats-block").hidden = true;
    $("#focus-folio-locus").textContent = `Across Book ${ROMAN[currentIndex]}`;
    $("#focus-folio-summary").textContent = theme[1];
    $("#focus-folio-change").textContent = `Theme → ${episodes.map(({ episode }) => episode[0]).slice(0, 3).join(" · ")}`;
    $("#focus-folio-note").textContent = `This lens connects ${episodes.length} high-signal sequences in Book ${ROMAN[currentIndex]} and remains searchable across the whole poem.`;
    relationLabels[0].textContent = "Episode pathways";
    relationLabels[1].textContent = "Terminology & echoes";
    $("#focus-folio-cast").innerHTML = episodes.map(({ episode, index: episodeIndex }) => `<li><button type="button" data-focus-episode="${episodeIndex}"><strong>${episode[0]}</strong><span>${episode[2]}</span></button></li>`).join("");
    $("#focus-folio-themes").innerHTML = [
      ...book.terms.slice(0, 3).map(term => `<li><button type="button" data-focus-lexicon="${term[0]}">${term[0]}</button></li>`),
      ...book.ties.slice(0, 2).map(tie => `<li><button type="button" data-focus-tie="${tie[0]}">${tie[0]}</button></li>`)
    ].join("");
    $("#focus-folio-motifs").innerHTML = episodes.slice(0, 4).map(({ episode }) => `<span>${episode[0]}</span>`).join("");
    $("#focus-folio-terms").innerHTML = book.terms.map(term => `<button type="button" data-focus-lexicon="${term[0]}">${term[0]}</button>`).join("");
    $("#focus-folio-tie-title").textContent = book.ties[0][0];
    $("#focus-folio-tie").textContent = book.ties[0][1];
    $("#focus-folio-questions").innerHTML = [
      `<li>Where does “${theme[0]}” alter how agency or responsibility appears in this book?</li>`,
      `<li>Which repeated image carries the theme most forcefully across otherwise separate stories?</li>`
    ].join("");
    $("#focus-folio-continuity").innerHTML = episodes.slice(0, 2).map(({ episode, index: episodeIndex }, pathIndex) =>
      `<button type="button" data-focus-episode="${episodeIndex}"><span>Path ${pathIndex + 1}</span><strong>${episode[0]}</strong><small>${episode[2]}</small></button>`
    ).join("");
  }

  $$("[data-focus-cast]", folio).forEach(button => button.addEventListener("click", () => openFigureSheet(button.dataset.focusCast, {
    episodeTitle: isEpisode ? item[0] : null,
    bookId: book.id,
    source: button
  })));
  $$("[data-focus-theme]", folio).forEach(button => button.addEventListener("click", () => openFocusFolio("theme", Number(button.dataset.focusTheme), button)));
  $$("[data-focus-episode]", folio).forEach(button => button.addEventListener("click", () => openFocusFolio("episode", Number(button.dataset.focusEpisode), button)));
  $$("[data-focus-lexicon]", folio).forEach(button => button.addEventListener("click", () => {
    $("#lexicon-filter").value = button.dataset.focusLexicon;
    lexiconCategory = "All";
    renderLexicon();
    closeFocusFolio({ restoreFocus: false });
    openWorkspace("lexicon");
  }));
  $$("[data-focus-tie]", folio).forEach(button => button.addEventListener("click", () => openSearch(button.dataset.focusTie)));
}

function openFocusFolio(kind, index, source = null) {
  if (!["episode", "theme"].includes(kind)) return;
  const book = BOOKS[currentIndex];
  const collection = kind === "episode" ? book.episodes : book.themes;
  currentFocus = { kind, index: wrap(index, collection.length) };
  const ringTarget = $(`[data-ring-kind="${kind}"][data-ring-index="${currentFocus.index}"]`);
  focusReturnTarget = source && !source.closest("[inert]") ? source : ringTarget;
  $$(".episode-segment, .motif-segment").forEach(segment => segment.classList.remove("is-selected"));
  $(`[data-ring-kind="${kind}"][data-ring-index="${currentFocus.index}"]`)?.classList.add("is-selected");
  renderFocusFolio();
  const folio = $("#focus-folio");
  folio.setAttribute("aria-hidden", "false");
  document.body.classList.add("is-focus-open");
  $("#reading-console").inert = true;
  if (reducedMotion.matches) {
    gsap.set(folio, { autoAlpha: 1, xPercent: 0, clipPath: "inset(0 0 0 0)" });
  } else {
    gsap.fromTo(
      folio,
      { autoAlpha: 0, xPercent: 18, clipPath: "inset(0 0 0 18%)" },
      { autoAlpha: 1, xPercent: 0, clipPath: "inset(0 0 0 0)", duration: .72, ease: "expo.out", overwrite: true }
    );
    gsap.fromTo(
      $$(".focus-folio-body > *, .focus-folio-relations > div", folio),
      { opacity: 0, y: 22 },
      { opacity: 1, y: 0, duration: .56, stagger: .055, delay: .12, ease: "power3.out", overwrite: true }
    );
    gsap.fromTo(
      $$(".focus-folio-aureole i", folio),
      { opacity: 0, rotate: -28, scale: .78, transformOrigin: "50% 50%" },
      { opacity: .8, rotate: 0, scale: 1, duration: 1.15, stagger: .08, ease: "expo.out", overwrite: true }
    );
    gsap.fromTo(
      $$(".focus-cast-portrait", folio),
      { opacity: 0, scale: .72, rotate: -12 },
      { opacity: 1, scale: 1, rotate: 0, duration: .62, stagger: .035, delay: .28, ease: "back.out(1.7)", overwrite: true }
    );
  }
  requestAnimationFrame(() => $(".focus-folio-close", folio).focus());
}

function closeFocusFolio({ restoreFocus = true } = {}) {
  const folio = $("#focus-folio");
  if (folio.getAttribute("aria-hidden") === "true") return;
  const finish = () => {
    const ringFallback = currentFocus
      ? $(`[data-ring-kind="${currentFocus.kind}"][data-ring-index="${currentFocus.index}"]`)
      : null;
    const returnTarget = focusReturnTarget?.isConnected ? focusReturnTarget : ringFallback;
    folio.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-focus-open");
    $("#reading-console").inert = false;
    $$(".episode-segment, .motif-segment").forEach(segment => segment.classList.remove("is-selected"));
    currentFocus = null;
    if (restoreFocus && returnTarget?.isConnected) returnTarget.focus();
  };
  if (reducedMotion.matches) {
    gsap.set(folio, { autoAlpha: 0 });
    finish();
  } else {
    gsap.to(folio, { autoAlpha: 0, xPercent: 12, duration: .34, ease: "power2.in", overwrite: true, onComplete: finish });
  }
}

function openWorkspace(name, { updateHistory = true, focus = true, animate = true } = {}) {
  const target = $(`.workspace-layer[data-workspace="${name}"]`);
  if (!target) return;
  // The dossier is a top-level overlay, so it would otherwise stay open over
  // a workspace the reader has just navigated away from.
  if (name !== currentWorkspace) closeFigureSheet({ restoreFocus: false });
  const previous = $(`.workspace-layer.is-active`);
  if (previous === target && currentWorkspace === name && document.body.dataset.workspace === name) {
    closeFocusFolio({ restoreFocus: false });
    return;
  }

  closeFocusFolio({ restoreFocus: false });
  // The chart measures its own plate to place a zoom, so it cannot be built
  // until its section is actually on screen and has a width.
  currentWorkspace = name;
  document.body.dataset.workspace = name;
  $$(".workspace-layer").forEach(layer => {
    const active = layer === target;
    layer.classList.toggle("is-active", active);
    layer.setAttribute("aria-hidden", String(!active));
    layer.inert = !active;
  });
  $$("[data-workspace-link]").forEach(link => {
    if (link.closest(".brand") || link.matches(".brand")) return;
    if (link.dataset.workspaceLink === name) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if (updateHistory && location.hash !== `#${name}`) history.pushState({ workspace: name }, "", `#${name}`);

  if (previous && previous !== target) gsap.set(previous, { autoAlpha: 0 });
  if (!animate || reducedMotion.matches) {
    gsap.set(target, { autoAlpha: 1, scale: 1, clipPath: "inset(0 0 0 0)" });
  } else {
    gsap.fromTo(
      target,
      { autoAlpha: 0, scale: .982, clipPath: "inset(0 0 7% 0)" },
      { autoAlpha: 1, scale: 1, clipPath: "inset(0 0 0 0)", duration: .7, ease: "expo.out", overwrite: true }
    );
  }
  if (focus) {
    const focusTarget = $(".workspace-return", target) || $("h1, h2", target);
    requestAnimationFrame(() => focusTarget?.focus({ preventScroll: true }));
  }
}

function renderRail() {
  $("#book-rail").innerHTML = BOOKS.map((book, index) => `
    <button class="rail-book ${index === currentIndex ? "is-active" : ""} ${readBooks.has(book.id) ? "is-read" : ""}" type="button" data-book-index="${index}" aria-current="${index === currentIndex ? "true" : "false"}">
      <span class="roman">${ROMAN[index]}</span>
      <span class="rail-title">${book.title}</span>
      <span class="rail-date">${book.date}</span>
    </button>`).join("");
  $$(".rail-book").forEach(button => button.addEventListener("click", () => selectBook(Number(button.dataset.bookIndex), { scrollAtlas: false })));
}

function renderEraBands() {
  $("#era-bands").innerHTML = ERAS.map(era => `
    <article class="era-band" style="--era-color:${era.color}">
      <span>${era.books.length === 1 ? "Book" : "Books"} ${era.books.length > 1 ? `${ROMAN[era.books[0] - 1]}–${ROMAN[era.books.at(-1) - 1]}` : ROMAN[era.books[0] - 1]}</span>
      <h3>${era.name}</h3>
      <p><strong>${era.range}</strong><br>${era.note}</p>
    </article>`).join("");
}

function renderSelects() {
  const options = BOOKS.map((book, index) => `<option value="${index}">Book ${ROMAN[index]} — ${book.title}</option>`).join("");
  $("#atlas-book-select").innerHTML = options;
  $("#stemma-book-select").innerHTML = options;
  $("#note-book").innerHTML = options;
}

/*
 * The book's constellation, drawn beside the reading.
 *
 * The instrument's outer ring carries the same figure at wheel scale; this is
 * the same data drawn large enough to read, with the claim printed under it so
 * the reader can see immediately whether the link is Homer's or the editor's.
 */
function renderConsoleSky(book) {
  const sky = constellationFor(book.id);
  const svg = $("#console-sky");
  if (!sky) { svg.innerHTML = ""; return; }
  const box = 100;
  const pad = 12;
  const at = ([x, y]) => [pad + x * (box - pad * 2), pad + y * (box - pad * 2)];
  const edges = sky.edges.map(([a, b]) => {
    const [x1, y1] = at(sky.stars[a]);
    const [x2, y2] = at(sky.stars[b]);
    return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}"/>`;
  }).join("");
  // Magnitude is decorative here, but it is at least consistent: a star that
  // two lines meet at is drawn larger than one at the end of a single line.
  const degree = sky.stars.map((unused, index) =>
    sky.edges.filter(edge => edge.includes(index)).length);
  const stars = sky.stars.map((star, index) => {
    const [cx, cy] = at(star);
    return `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${(1.5 + degree[index] * 0.5).toFixed(2)}"/>`;
  }).join("");
  svg.innerHTML = `<title id="console-sky-title">${escapeHTML(sky.name)} — ${escapeHTML(sky.english)}, the figure Book ${ROMAN[book.id - 1]} carries</title>
    <g class="console-sky-lines">${edges}</g>
    <g class="console-sky-stars">${stars}</g>`;
  $("#console-plate-number").textContent = ROMAN[book.id - 1];
  $("#console-plate-caption").textContent = `${sky.name} · ${sky.english.toLowerCase()}`;
  $("#console-plate-claim").textContent = sky.claim;
}

function renderConsole(book) {
  const era = eraFor(book.id);
  $("#console-era").textContent = era.name;
  $("#console-progress-label").textContent = `Book ${book.id} of ${BOOKS.length}`;
  $("#console-date").textContent = `${book.date}`;
  $("#console-book").textContent = `Book ${ROMAN[book.id - 1]}`;
  $("#console-title").textContent = book.title;
  $("#console-lens").textContent = book.lens;
  $("#console-summary").textContent = book.summary;

  const reading = bookReading(book.id);
  if (reading) {
    $("#console-argument").textContent = reading.argument;
    $("#console-structure").textContent = reading.structure;
    $("#console-movements").innerHTML = reading.movements.map(movement => `<li>${escapeHTML(movement)}</li>`).join("");
    $("#console-change-argument").textContent = reading.argumentOfReturn;
    $("#console-hands-on").textContent = reading.handsOn;
    const catasterism = constellationFor(book.id);
    const commentary = bookCommentary(book.id);
    $(".console-commentary").hidden = !commentary;
    if (commentary) {
      $("#console-voices").innerHTML = emphasised(commentary.voices);
      $("#console-against").innerHTML = emphasised(commentary.against);
      $("#console-crux").innerHTML = emphasised(commentary.crux);
      $("#console-afterlife").innerHTML = emphasised(commentary.afterlife);
    }
    $("#console-extent").textContent = catasterism
      ? `${reading.extent} · outer ring: ${catasterism.latin}, ${catasterism.english.toLowerCase()}`
      : reading.extent;
  }

  $("#console-transformation").textContent = book.episodes[0][2];
  $("#console-transformation-note").textContent = book.episodes[0][3];
  $("#console-cast").innerHTML = book.cast.slice(0, 6).map(person => {
    const figure = getFigure(person[0]);
    return `<li><button type="button" data-console-cast="${escapeAttr(person[0])}">
      ${sealMarkup(person[0])}
      <span>${escapeHTML(person[0])}<small>${escapeHTML(figure?.order || person[1])}</small></span>
    </button></li>`;
  }).join("");
  $("#console-themes").innerHTML = book.themes.map((theme, index) => `<button type="button" data-console-theme="${index}">${theme[0]}</button>`).join("");
  renderConsoleSky(book);
  const markButton = $("[data-mark-read]");
  const isRead = readBooks.has(book.id);
  markButton.setAttribute("aria-pressed", String(isRead));
  markButton.setAttribute("aria-label", isRead ? `Remove Book ${ROMAN[currentIndex]} from read books` : `Mark Book ${ROMAN[currentIndex]} as read`);
  $("span", markButton).textContent = isRead ? "Read — undo" : "Mark as read";
  $$("[data-console-cast]").forEach(button => button.addEventListener("click", () => openFigureSheet(button.dataset.consoleCast, { bookId: book.id, source: button })));
  $$("[data-console-theme]").forEach(button => button.addEventListener("click", () => openFocusFolio("theme", Number(button.dataset.consoleTheme), button)));
}

function renderAtlas(book) {
  const era = eraFor(book.id);
  $("#atlas-book-select").value = String(currentIndex);
  $("#atlas-number").textContent = ROMAN[currentIndex];
  $("#atlas-era").textContent = era.name;
  $("#atlas-title-label").textContent = book.title;
  $("#atlas-date").textContent = `${book.date}`;
  $("#atlas-setting").textContent = book.setting;
  $("#atlas-count").textContent = `${book.episodes.length} major sequences`;

  $("#panel-episodes").innerHTML = `<div class="episode-list">${book.episodes.map((episode, episodeIndex) => {
    const study = getEpisodeStudy(episode[0]);
    const cast = castForEpisode(book, episode);
    return `<article class="episode-row">
      <header>
        <span>Sequence ${String(episodeIndex + 1).padStart(2, "0")}</span>
        <h4>${episode[0]}</h4>
        <small>${study.locus}</small>
      </header>
      <p>${episode[1]}</p>
      <div class="episode-change"><span>${episode[2]}</span><small>${episode[3]}</small></div>
      <div class="episode-row-cast" aria-label="${cast.length} figures in this episode">
        ${cast.slice(0, 5).map(person => sealMarkup(person[0], "episode-row-seal")).join("")}
        <span>${cast.length} figures</span>
      </div>
      <div class="episode-row-motifs">${study.motifs.map(motif => `<span>${motif}</span>`).join("")}</div>
      <button type="button" data-open-episode="${episodeIndex}">Open episode dossier <span aria-hidden="true">↗</span></button>
    </article>`;
  }).join("")}</div>`;

  $("#panel-cast").innerHTML = `<div class="cast-grid">${book.cast.map(person => `
    <article class="cast-entry">
      <header><div><span>${person[1]}</span><h4>${person[0]}</h4></div><button type="button" data-search-term="${person[0]}">Trace</button></header>
      <p>${person[2]}</p>
    </article>`).join("")}</div>`;

  $("#panel-themes").innerHTML = `
    <div class="theme-grid">${book.themes.map(theme => `
      <article class="theme-entry"><span>Reading lens</span><h4>${theme[0]}</h4><p>${theme[1]}</p></article>`).join("")}
      ${book.terms.map(term => `<article class="theme-entry"><span>${term[1]}</span><h4>${term[0]}</h4><p>${term[2]}</p></article>`).join("")}
    </div>`;

  $("#panel-ties").innerHTML = `<div class="ties-list">${book.ties.map(tie => `
    <article class="tie-entry"><h4>${tie[0]}</h4><p>${tie[1]}</p></article>`).join("")}</div>`;

  $$("[data-search-term]", $("#panel-cast")).forEach(button => button.addEventListener("click", () => openSearch(button.dataset.searchTerm)));
  $$("[data-open-episode]", $("#panel-episodes")).forEach(button => button.addEventListener("click", () => {
    closeFocusFolio({ restoreFocus: false });
    openWorkspace("instrument");
    openFocusFolio("episode", Number(button.dataset.openEpisode), button);
  }));
}

function entityFamily(role) {
  const value = role.toLowerCase();
  if (/(god|goddess|deity|divin|olympian|nymph|titan|muse)/.test(value)) return "Divine";
  if (/(creature|monster|centaur|dragon|gorgon|giant|beast)/.test(value)) return "Creature";
  return "Mortal";
}

function canonicalEntityName(name) {
  return name.split("/")[0].replace(/\([^)]*\)/g, "").trim();
}

function buildConcordance() {
  const entities = new Map();
  BOOKS.forEach((book, bookIndex) => book.cast.forEach(person => {
    const name = canonicalEntityName(person[0]);
    const key = name.toLowerCase();
    const appearance = { bookIndex, role: person[1], description: person[2] };
    if (!entities.has(key)) {
      entities.set(key, {
        name,
        aliases: new Set([person[0]]),
        family: entityFamily(person[1]),
        appearances: [appearance]
      });
    } else {
      const entity = entities.get(key);
      entity.aliases.add(person[0]);
      entity.appearances.push(appearance);
    }
  }));
  return [...entities.values()]
    .map(entity => ({ ...entity, aliases: [...entity.aliases] }))
    .sort((a, b) => b.appearances.length - a.appearances.length || a.name.localeCompare(b.name));
}

const CONCORDANCE = buildConcordance();

function renderScholarBookList() {
  $("#scholar-book-list").innerHTML = BOOKS.map((book, index) => {
    const era = eraFor(book.id);
    return `<button type="button" class="${index === currentIndex ? "is-active" : ""} ${readBooks.has(book.id) ? "is-read" : ""}" data-scholar-book="${index}" aria-current="${index === currentIndex ? "true" : "false"}">
      <span>${ROMAN[index]}</span>
      <strong>${book.title}</strong>
      <small>${era.name}</small>
      <i aria-hidden="true">${readBooks.has(book.id) ? "◆" : "◇"}</i>
    </button>`;
  }).join("");
  $$("[data-scholar-book]").forEach(button => button.addEventListener("click", () => selectBook(Number(button.dataset.scholarBook))));
}

function renderConcordance() {
  const categories = ["All", "Divine", "Mortal", "Creature"];
  $("#concordance-filters").innerHTML = categories.map(category => `
    <button type="button" class="${category === concordanceCategory ? "is-active" : ""}" data-concordance-category="${category}">
      ${category}<span>${category === "All" ? CONCORDANCE.length : CONCORDANCE.filter(entity => entity.family === category).length}</span>
    </button>`).join("");

  const query = $("#concordance-search").value.trim().toLowerCase();
  const results = CONCORDANCE.filter(entity =>
    (concordanceCategory === "All" || entity.family === concordanceCategory) &&
    (!query || `${entity.name} ${entity.aliases.join(" ")} ${entity.appearances.map(item => `${item.role} ${item.description}`).join(" ")}`.toLowerCase().includes(query))
  ).slice(0, 32);

  $("#concordance-results").innerHTML = results.length ? results.map(entity => {
    const first = entity.appearances[0];
    const books = [...new Set(entity.appearances.map(item => item.bookIndex))];
    return `<article class="concordance-entry">
      <header><span class="entity-sigil" aria-hidden="true">${entity.name.slice(0, 1)}</span><div><h4>${entity.name}</h4><p>${first.role} · ${entity.family}</p></div><strong>${books.length}</strong></header>
      <p>${first.description}</p>
      <div>${books.map(bookIndex => `<button type="button" data-concordance-book="${bookIndex}" aria-label="Open ${entity.name} in Book ${ROMAN[bookIndex]}">${ROMAN[bookIndex]}</button>`).join("")}</div>
    </article>`;
  }).join("") : `<p class="concordance-empty">No figure matches this trail. Try a name, role, or description.</p>`;

  $$("[data-concordance-category]").forEach(button => button.addEventListener("click", () => {
    concordanceCategory = button.dataset.concordanceCategory;
    renderConcordance();
  }));
  $$("[data-concordance-book]").forEach(button => button.addEventListener("click", () => {
    selectBook(Number(button.dataset.concordanceBook));
    switchTab("cast");
    $("#register").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }));
}


function renderProgress() {
  const count = readBooks.size;
  $("#progress-count").textContent = `${count} / 24`;
  $("#header-progress-count").textContent = `${count} / 24`;
  $("#scholar-progress-count").textContent = `${count} / 24`;
  $(".masthead-progress").setAttribute("aria-label", `Reading progress: ${count} of ${BOOKS.length} books read`);
  $(".masthead-progress i").style.transform = `scaleX(${count / 24})`;
  $(".scholar-progress i").style.transform = `scaleX(${count / 24})`;
  const bar = $(".progress-track");
  bar.setAttribute("aria-valuenow", String(count));
  $("i", bar).style.transform = `scaleX(${count / 24})`;
  $$(".book-segment").forEach((segment, index) => segment.classList.toggle("is-read", readBooks.has(index + 1)));
}

function selectBook(index, { scrollAtlas = false } = {}) {
  const nextIndex = wrap(index, BOOKS.length);
  const changed = nextIndex !== currentIndex;
  const update = () => {
    if (changed) closeFocusFolio({ restoreFocus: false });
    currentIndex = nextIndex;
    const book = BOOKS[currentIndex];
    saveState();
    document.documentElement.style.setProperty("--wheel-angle", `${-currentIndex * (360 / BOOKS.length)}deg`);
    $$(".book-segment").forEach((segment, i) => segment.classList.toggle("is-active", i === currentIndex));
    renderVolvelleDetails(book);
    renderEraInscriptions();
    renderConsole(book);
    renderRail();
    renderHeroBookNav();
    renderScholarBookList();
    renderAtlas(book);
    renderStemma(book);
    renderProgress();
  };
  const after = () => {
    if (scrollAtlas) openWorkspace("register");
  };
  if (changed && document.startViewTransition && !reducedMotion.matches && !activeBookTransition) {
    const transition = document.startViewTransition(update);
    activeBookTransition = transition;
    const updateDone = transition.updateCallbackDone.catch(() => undefined);
    updateDone.then(after);
    transition.finished.finally(() => {
      if (activeBookTransition === transition) activeBookTransition = null;
    });
    return updateDone;
  } else {
    update();
    after();
    return Promise.resolve();
  }
}

function switchTab(name) {
  $$(".view-tabs [role=tab]").forEach(tab => {
    const active = tab.dataset.tab === name;
    tab.setAttribute("aria-selected", String(active));
    $(`#panel-${tab.dataset.tab}`).hidden = !active;
  });
}

function allLexiconEntries() {
  const seen = new Map();
  BOOKS.forEach(book => book.terms.forEach(term => {
    const key = term[0].toLowerCase();
    const bookLabel = `Book ${ROMAN[book.id - 1]}`;
    if (seen.has(key)) {
      const existing = seen.get(key);
      if (!existing[4].includes(bookLabel)) existing[4] += `, ${bookLabel}`;
    } else {
      seen.set(key, [term[0], term[1], term[2], term[3], bookLabel]);
    }
  }));
  EXTRA_LEXICON.forEach(entry => seen.set(entry[0].toLowerCase(), entry));
  EXPANDED_LEXICON.forEach(entry => seen.set(entry[0].toLowerCase(), entry));
  return [...seen.values()].sort((a, b) => a[0].localeCompare(b[0]));
}

const LEXICON = allLexiconEntries();

function renderLexicon() {
  const categories = ["All", ...new Set(LEXICON.map(item => item[3]))];
  $("#lexicon-count").textContent = `${LEXICON.length} terms`;
  $("#lexicon-categories").innerHTML = categories.map(category => `
    <button type="button" class="${category === lexiconCategory ? "is-active" : ""}" data-category="${category}">
      ${category}<span>${category === "All" ? LEXICON.length : LEXICON.filter(item => item[3] === category).length}</span>
    </button>`).join("");
  const query = $("#lexicon-filter").value.trim().toLowerCase();
  const results = LEXICON.filter(item =>
    (lexiconCategory === "All" || item[3] === lexiconCategory) &&
    (!query || item.join(" ").toLowerCase().includes(query))
  ).sort((a, b) => {
    if (!query) return a[0].localeCompare(b[0]);
    const aName = a[0].toLowerCase();
    const bName = b[0].toLowerCase();
    const score = name => name === query ? 0 : name.startsWith(query) ? 1 : name.includes(query) ? 2 : 3;
    return score(aName) - score(bName) || aName.localeCompare(bName);
  });
  $("#lexicon-list").innerHTML = results.length ? results.map(item => `
    <article class="lexicon-entry">
      <h3>${item[0]} <span>${item[1]}</span></h3>
      <p>${item[2]}</p>
      <span>${item[4]}</span>
    </article>`).join("") : `<p class="lexicon-empty">No entries match this filter. Try a broader word or another category.</p>`;
  $$("[data-category]").forEach(button => button.addEventListener("click", () => {
    lexiconCategory = button.dataset.category;
    renderLexicon();
  }));
}

function buildSearchIndex() {
  const items = [];
  BOOKS.forEach((book, index) => {
    items.push({ type: "Book", title: `Book ${ROMAN[index]} — ${book.title}`, subtitle: book.summary, index, tab: "episodes" });
    book.episodes.forEach((episode, episodeIndex) => {
      const study = getEpisodeStudy(episode[0]);
      items.push({
        type: "Episode",
        title: episode[0],
        subtitle: `${episode[1]} ${episode[2]} ${episode[3]} ${study.locus} ${study.cast.join(" ")} ${study.motifs.join(" ")}`,
        index,
        episodeIndex,
        tab: "episodes"
      });
    });
    book.cast.forEach(person => items.push({ type: person[1], title: person[0], subtitle: person[2], index, tab: "cast" }));
    book.themes.forEach(theme => items.push({ type: "Theme", title: theme[0], subtitle: theme[1], index, tab: "themes" }));
    book.ties.forEach(tie => items.push({ type: "Classical tie", title: tie[0], subtitle: tie[1], index, tab: "ties" }));
  });
  LEXICON.forEach(entry => items.push({ type: entry[3], title: entry[0], subtitle: entry[2], index: null, tab: null, lexicon: true }));
  return items;
}

const SEARCH_INDEX = buildSearchIndex();

function renderSearch(query = "") {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    $("#search-results").innerHTML = `<p class="empty-prompt">Search across all ${BOOKS.length} books, ${BOOKS.reduce((sum, book) => sum + book.episodes.length, 0)} major episodes, principal figures, themes, terminology, and classical ties.</p>`;
    return;
  }
  const tokens = normalized.split(/\s+/);
  const results = SEARCH_INDEX
    .map(item => ({ item, score: tokens.reduce((score, token) => {
      const title = item.title.toLowerCase();
      const text = `${item.type} ${item.title} ${item.subtitle}`.toLowerCase();
      return score + (title.startsWith(token) ? 4 : title.includes(token) ? 3 : text.includes(token) ? 1 : -8);
    }, 0) }))
    .filter(result => result.score >= tokens.length)
    .sort((a, b) => b.score - a.score)
    .slice(0, 24)
    .map(result => result.item);
  $("#search-results").innerHTML = results.length ? results.map((item, resultIndex) => `
    <button class="search-result" type="button" data-result-index="${resultIndex}">
      <span class="search-result-type">${item.type}</span>
      <span><strong>${item.title}</strong><small>${item.subtitle.slice(0, 150)}${item.subtitle.length > 150 ? "…" : ""}</small></span>
      <span>${item.index === null ? "Lexicon" : `Book ${ROMAN[item.index]}`} ↘</span>
    </button>`).join("") : `<p class="empty-prompt">No exact trail found for “${escapeHTML(query)}.” Try a character, place, transformation, or theme.</p>`;
  $$(".search-result").forEach(button => button.addEventListener("click", async () => {
    const item = results[Number(button.dataset.resultIndex)];
    $("#search-dialog").close();
    if (item.lexicon) {
      $("#lexicon-filter").value = item.title;
      lexiconCategory = "All";
      renderLexicon();
      openWorkspace("lexicon");
    } else if (item.type === "Episode" && Number.isInteger(item.episodeIndex)) {
      await selectBook(item.index);
      openWorkspace("instrument");
      openFocusFolio("episode", item.episodeIndex);
    } else {
      await selectBook(item.index);
      switchTab(item.tab);
      openWorkspace("register");
    }
  }));
}

function escapeHTML(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

function openSearch(prefill = "") {
  const dialog = $("#search-dialog");
  if (!dialog.open) dialog.showModal();
  $("#global-search").value = prefill;
  renderSearch(prefill);
  requestAnimationFrame(() => $("#global-search").focus());
}

function renderNotes() {
  $("#notes-list").innerHTML = notes.length ? notes.slice().reverse().map(note => `
    <article class="saved-note">
      <span>Book ${ROMAN[note.book]} · ${BOOKS[note.book].title}</span>
      <p>${escapeHTML(note.text)}</p>
      <button type="button" data-delete-note="${note.id}" aria-label="Delete note">×</button>
    </article>`).join("") : `<p class="empty-prompt">No marginalia yet. Add a question, pattern, or passage to revisit.</p>`;
  $$("[data-delete-note]").forEach(button => button.addEventListener("click", () => {
    notes = notes.filter(note => note.id !== button.dataset.deleteNote);
    saveState();
    renderNotes();
    showToast("Note removed.");
  }));
}

function openNotes(bookIndex = currentIndex) {
  $("#note-book").value = String(bookIndex);
  renderNotes();
  if (!$("#notes-dialog").open) $("#notes-dialog").showModal();
  requestAnimationFrame(() => $("#note-text").focus());
}

function exportNotes() {
  const payload = {
    product: "Odyssey — A Living Reckoning",
    exportedAt: new Date().toISOString(),
    notes
  };
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `odyssey-marginalia-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
  showToast(`${notes.length} ${notes.length === 1 ? "note" : "notes"} exported.`);
}

async function importNotes(file) {
  try {
    const payload = JSON.parse(await file.text());
    const incoming = Array.isArray(payload) ? payload : payload.notes;
    if (!Array.isArray(incoming)) throw new Error("The file does not contain a notes array.");
    const valid = incoming.filter(note =>
      note && typeof note.text === "string" && Number.isInteger(Number(note.book)) && Number(note.book) >= 0 && Number(note.book) < BOOKS.length
    ).map(note => ({
      id: typeof note.id === "string" && /^[a-zA-Z0-9_-]{1,100}$/.test(note.id) ? note.id : crypto.randomUUID(),
      book: Number(note.book),
      text: note.text.trim(),
      createdAt: typeof note.createdAt === "string" ? note.createdAt : new Date().toISOString()
    })).filter(note => note.text);
    const merged = new Map(notes.map(note => [note.id, note]));
    valid.forEach(note => merged.set(note.id, note));
    notes = [...merged.values()];
    saveState();
    renderNotes();
    showToast(`${valid.length} ${valid.length === 1 ? "note" : "notes"} imported.`);
  } catch (error) {
    showToast(`Import failed: ${error.message}`);
  } finally {
    $("#notes-import").value = "";
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function setUpWheelInteraction() {
  const shell = $("[data-volvelle]");
  shell.addEventListener("wheel", event => {
    event.preventDefault();
    selectBook(currentIndex + (event.deltaY > 0 ? 1 : -1));
  }, { passive: false });
  shell.addEventListener("pointerdown", event => {
    if (event.target.closest("button, [role=button]")) return;
    dragStart = { x: event.clientX, index: currentIndex };
    $("#volvelle").classList.add("is-dragging");
    shell.setPointerCapture(event.pointerId);
  });
  shell.addEventListener("pointermove", event => {
    if (!dragStart) return;
    const delta = event.clientX - dragStart.x;
    const preview = -dragStart.index * (360 / BOOKS.length) + delta * .16;
    document.documentElement.style.setProperty("--wheel-angle", `${preview}deg`);
  });
  shell.addEventListener("pointerup", event => {
    if (!dragStart) return;
    const delta = event.clientX - dragStart.x;
    const steps = Math.round(-delta / 55);
    const startIndex = dragStart.index;
    dragStart = null;
    $("#volvelle").classList.remove("is-dragging");
    selectBook(startIndex + steps);
  });
  shell.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") selectBook(currentIndex + 1);
    if (event.key === "ArrowLeft") selectBook(currentIndex - 1);
  });
}

/* ---------------------------------------------------------- pliant panes */

/*
 * Draggable boundaries between the page's major panes.
 *
 * One implementation drives every grip: the markup says which custom property
 * it writes, which edge it measures from, and how much room the *other* pane
 * must keep. Nothing here knows about the instrument or the stemma
 * specifically, so a new boundary is a `<div class="pane-grip">` and no code.
 *
 * It is a real `role="separator"`: focusable, driven by the arrow keys, reset
 * by Home or a double-click, and reporting its position to assistive tech.
 * A boundary you can only drag is a boundary half the readers cannot move.
 */
const GRIP_STORE = "ody.panes.v1";

function loadPaneSizes() {
  try {
    return JSON.parse(localStorage.getItem(GRIP_STORE) || "{}");
  } catch {
    return {};
  }
}

function savePaneSizes(sizes) {
  try {
    localStorage.setItem(GRIP_STORE, JSON.stringify(sizes));
  } catch {
    /* A reader with storage disabled still gets to resize; it just won't keep. */
  }
}

function setUpPaneGrips() {
  const sizes = loadPaneSizes();

  $$(".pane-grip").forEach(grip => {
    const pane = grip.closest(".hero, .stemma-stage");
    if (!pane) return;
    const property = grip.dataset.gripProperty;
    const fromRight = grip.dataset.gripEdge === "right";
    const min = Number(grip.dataset.gripMin);
    const reserve = Number(grip.dataset.gripReserve);
    const key = grip.dataset.grip;

    const limit = () => Math.max(min, pane.clientWidth - reserve);
    const current = () => {
      const stored = pane.style.getPropertyValue(property);
      if (stored) return parseFloat(stored);
      // No explicit size yet: measure what the layout chose, so the first drag
      // continues from where the pane actually is rather than jumping.
      const box = grip.getBoundingClientRect();
      const paneBox = pane.getBoundingClientRect();
      return fromRight ? paneBox.right - box.left - box.width / 2 : box.left + box.width / 2 - paneBox.left;
    };

    const apply = (value, { persist = true } = {}) => {
      const clamped = Math.round(Math.min(Math.max(value, min), limit()));
      pane.style.setProperty(property, `${clamped}px`);
      grip.setAttribute("aria-valuenow", String(clamped));
      grip.setAttribute("aria-valuemin", String(min));
      grip.setAttribute("aria-valuemax", String(limit()));
      grip.setAttribute("aria-valuetext", `${clamped} pixels`);
      if (persist) {
        sizes[key] = clamped;
        savePaneSizes(sizes);
      }
      // The instrument's ground is measured from the wheel, and the stemma
      // decides whether to show its scroll affordances from the plate's width.
      // Both are wrong the instant a boundary moves.
      renderField();
      $(".stemma-scroll")?.dispatchEvent(new Event("scroll"));
    };

    const reset = () => {
      pane.style.removeProperty(property);
      delete sizes[key];
      savePaneSizes(sizes);
      grip.removeAttribute("aria-valuenow");
      renderField();
    };

    // A focusable separator must report its position from the start. Setting
    // these only on the first drag left every grip failing `aria-required-attr`
    // until someone moved it — which is exactly the reader who cannot.
    apply(sizes[key] ?? current(), { persist: Boolean(sizes[key]) });

    let origin = null;
    grip.addEventListener("pointerdown", event => {
      if (event.button !== 0) return;
      event.preventDefault();
      origin = { x: event.clientX, size: current() };
      grip.setPointerCapture(event.pointerId);
      grip.classList.add("is-dragging");
      document.body.classList.add("is-resizing");
    });
    grip.addEventListener("pointermove", event => {
      if (!origin) return;
      const delta = event.clientX - origin.x;
      apply(origin.size + (fromRight ? -delta : delta));
    });
    const release = event => {
      if (!origin) return;
      origin = null;
      grip.classList.remove("is-dragging");
      document.body.classList.remove("is-resizing");
      if (grip.hasPointerCapture?.(event.pointerId)) grip.releasePointerCapture(event.pointerId);
    };
    grip.addEventListener("pointerup", release);
    grip.addEventListener("pointercancel", release);
    grip.addEventListener("dblclick", reset);

    grip.addEventListener("keydown", event => {
      const step = event.shiftKey ? 64 : 16;
      if (event.key === "ArrowLeft") apply(current() + (fromRight ? step : -step));
      else if (event.key === "ArrowRight") apply(current() + (fromRight ? -step : step));
      else if (event.key === "Home" || event.key === "Escape") reset();
      else return;
      event.preventDefault();
    });
  });
}

function bindEvents() {
  $$("[data-workspace-link]").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    openWorkspace(link.dataset.workspaceLink);
  }));
  $$("[data-ring-guide]").forEach(button => button.addEventListener("click", () => {
    const ring = button.dataset.ringGuide;
    if (ring === "era") openWorkspace("reckoning");
    else if (ring === "book") showToast(`Book ${ROMAN[currentIndex]} is aligned to the meridian.`);
    else openFocusFolio(ring, 0, button);
  }));
  $("[data-close-focus]").addEventListener("click", () => closeFocusFolio());
  $("[data-focus-prev]").addEventListener("click", () => {
    if (!currentFocus) return;
    const collection = currentFocus.kind === "episode" ? BOOKS[currentIndex].episodes : BOOKS[currentIndex].themes;
    openFocusFolio(currentFocus.kind, wrap(currentFocus.index - 1, collection.length));
  });
  $("[data-focus-next]").addEventListener("click", () => {
    if (!currentFocus) return;
    const collection = currentFocus.kind === "episode" ? BOOKS[currentIndex].episodes : BOOKS[currentIndex].themes;
    openFocusFolio(currentFocus.kind, wrap(currentFocus.index + 1, collection.length));
  });
  $("[data-focus-atlas]").addEventListener("click", () => {
    const tab = currentFocus?.kind === "theme" ? "themes" : "episodes";
    closeFocusFolio({ restoreFocus: false });
    switchTab(tab);
    openWorkspace("register");
  });
  $$("[data-step]").forEach(button => button.addEventListener("click", () => selectBook(currentIndex + Number(button.dataset.step))));
  $("[data-jump-detail]").addEventListener("click", () => selectBook(currentIndex, { scrollAtlas: true }));
  $("[data-mark-read]").addEventListener("click", () => {
    const id = BOOKS[currentIndex].id;
    if (readBooks.has(id)) {
      readBooks.delete(id);
      showToast(`Book ${ROMAN[currentIndex]} removed from completed.`);
    } else {
      readBooks.add(id);
      showToast(`Book ${ROMAN[currentIndex]} marked as read.`);
    }
    saveState();
    selectBook(currentIndex);
  });
  $("#atlas-book-select").addEventListener("change", event => selectBook(Number(event.target.value)));
  $("#stemma-book-select").addEventListener("change", event => selectBook(Number(event.target.value)));
  // Bound once, on markup that outlives every render. Anything the reader can
  // use to *leave* a view belongs here rather than inside the render that
  // draws the view — that is what turned the whole-poem scope into a room
  // with no door.
  $$("[data-stemma-scope]").forEach(button => button.addEventListener("click", () => {
    stemmaScope = button.dataset.stemmaScope;
    renderStemma(BOOKS[currentIndex]);
  }));
  // Bound once, on markup that outlives the render, for the same reason the
  // scope switch is: a control the reader uses to change the view must not be
  // rebuilt by the view it changes.
  $$("[data-stemma-zoom]").forEach(button => button.addEventListener("click", () => {
    const mode = button.dataset.stemmaZoom;
    if (mode === "reset") setStemmaZoom(1);
    else if (mode === "fit") setStemmaZoom(stemmaFitScale());
    else setStemmaZoom(stemmaZoom * (mode === "in" ? 1.35 : 1 / 1.35));
  }));

  // The slider is the same number the pinch moves, exposed. A reader on a mouse
  // or a keyboard gets the continuous control a trackpad gives for free.
  $("#stemma-zoom-range").addEventListener("input", event => {
    setStemmaZoom(Number(event.target.value) / 100, { syncRange: false });
  });

  bindStemmaPinch();
  $("#master-filter").addEventListener("input", event => {
    masterFilter = event.target.value;
    renderMasterGenealogy();
  });
  // A second way out, for a reader who reached the whole-poem view and looked
  // for the gesture that closes everything else in this interface.
  $("#stemma").addEventListener("keydown", event => {
    if (event.key !== "Escape" || stemmaScope === "book") return;
    if (event.target.closest("input, select, textarea")) return;
    stemmaScope = "book";
    renderStemma(BOOKS[currentIndex]);
    $('[data-stemma-scope="book"]').focus();
  });
  $("[data-close-figure]").addEventListener("click", () => closeFigureSheet());
  $("[data-figure-stemma]").addEventListener("click", () => {
    const figure = getFigure(currentFigureName);
    const house = figure && HOUSES.find(entry => entry.name === figure.house && entry.books.includes(BOOKS[currentIndex].id));
    if (house) stemmaHouseId = house.id;
    closeFigureSheet({ restoreFocus: false });
    renderStemma(BOOKS[currentIndex]);
    openWorkspace("stemma");
  });
  $("[data-figure-search]").addEventListener("click", () => {
    const name = currentFigureName;
    closeFigureSheet({ restoreFocus: false });
    openSearch(name);
  });
  $$(".view-tabs [role=tab]").forEach(tab => {
    tab.addEventListener("click", () => switchTab(tab.dataset.tab));
    tab.addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      const tabs = $$(".view-tabs [role=tab]");
      const next = wrap(tabs.indexOf(tab) + (event.key === "ArrowRight" ? 1 : -1), tabs.length);
      tabs[next].focus();
      switchTab(tabs[next].dataset.tab);
    });
  });
  $(".rail-nudge--left").addEventListener("click", () => $("#book-rail").scrollBy({ left: -400, behavior: "smooth" }));
  $(".rail-nudge--right").addEventListener("click", () => $("#book-rail").scrollBy({ left: 400, behavior: "smooth" }));
  $$("[data-open-search]").forEach(button => button.addEventListener("click", () => openSearch()));
  $$("[data-open-notes]").forEach(button => button.addEventListener("click", () => openNotes()));
  $("[data-note-current]").addEventListener("click", () => openNotes());
  $$("[data-close-dialog]").forEach(button => button.addEventListener("click", () => button.closest("dialog").close()));
  $("#global-search").addEventListener("input", event => renderSearch(event.target.value));
  $("#note-form").addEventListener("submit", event => {
    event.preventDefault();
    const text = $("#note-text").value.trim();
    if (!text) return;
    notes.push({ id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()), book: Number($("#note-book").value), text, createdAt: new Date().toISOString() });
    $("#note-text").value = "";
    saveState();
    renderNotes();
    showToast("Marginalia saved in this browser.");
  });
  $("#lexicon-filter").addEventListener("input", renderLexicon);
  $("#concordance-search").addEventListener("input", renderConcordance);
  $("[data-export-notes]").addEventListener("click", exportNotes);
  $("#notes-import").addEventListener("change", event => {
    const [file] = event.target.files;
    if (file) importNotes(file);
  });
  document.addEventListener("keydown", event => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
    if (event.key === "Escape") {
      // Innermost surface first: figure sheet, then folio, then any dialog.
      if ($("#figure-sheet").getAttribute("aria-hidden") === "false") closeFigureSheet();
      else if ($("#focus-folio").getAttribute("aria-hidden") === "false") closeFocusFolio();
      else $$("dialog[open]").forEach(dialog => dialog.close());
    }
  });
  window.addEventListener("popstate", () => {
    const name = location.hash.slice(1);
    openWorkspace($(`.workspace-layer[data-workspace="${name}"]`) ? name : "instrument", { updateHistory: false, focus: false });
  });
  $$("dialog").forEach(dialog => dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  }));
  setUpWheelInteraction();
}

function init() {
  renderVolvelleBase();
  renderEraBands();
  renderOrbisRibbon();
  renderSelects();
  renderLexicon();
  renderConcordance();
  bindEvents();
  setUpPaneGrips();
  selectBook(currentIndex);
  const initialWorkspace = location.hash.slice(1);
  openWorkspace($(`.workspace-layer[data-workspace="${initialWorkspace}"]`) ? initialWorkspace : "instrument", { updateHistory: false, focus: false, animate: false });
  if (!location.hash) history.replaceState({ workspace: "instrument" }, "", "#instrument");

  // The field is measured from the wheel, so it has to be re-measured when the
  // wheel moves. Coalesced to one redraw per frame: a resize fires in bursts.
  let pending = false;
  const remeasure = () => {
    if (pending) return;
    pending = true;
    requestAnimationFrame(() => { pending = false; renderField(); });
  };
  window.addEventListener("resize", remeasure);
  document.fonts?.ready.then(remeasure);
  remeasure();
}

init();
