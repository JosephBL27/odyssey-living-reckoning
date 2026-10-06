/*
 * The sky ring.
 *
 * The outermost band of the instrument carries one constellation per book,
 * drawn as an engraved star diagram from coordinates rather than from
 * twenty-four hand-drawn paths. Positions are normalised into a 0–1 box and
 * rendered parametrically; they preserve each figure's real relative shape,
 * not its absolute right ascension.
 *
 * `claim` states the connection honestly, and the honesty matters more here
 * than in a Latin poem. Homer names very few constellations. He names four in
 * one passage — Odysseus steering his raft at 5.272–277 by the Pleiades, by
 * late-setting Boötes, and by the Bear that men also call the Wain, which
 * alone never bathes in Ocean — and Orion once more among the dead at 11.572.
 * Four entries in this ring therefore say "Homer's own". Every other entry
 * says outright that the link is associative: a constellation a reader can
 * hold beside the book, not a catasterism the poem performs. The Odyssey does not turn people into
 * stars. That is the other poem.
 */

export const CONSTELLATIONS = [
  { book: 1, name: "Ursa Major", latin: "Ursa Maior", english: "The Wain", figure: "The fixed point",
    claim: "Homer's own, though not in this book: at 5.273 the Bear is the one star-group that never bathes in Ocean. Book I is the motionless thing everything else in the poem is steering by.",
    stars: [[0.08,0.62],[0.22,0.66],[0.36,0.60],[0.50,0.56],[0.62,0.42],[0.78,0.36],[0.92,0.44]],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
  { book: 2, name: "Aquila", latin: "Aquila", english: "The Eagle", figure: "Zeus' two eagles",
    claim: "Associative. The constellation is not Homer's, but the bird is: at 2.146 Zeus sends two eagles down the wind over the assembly, and they tear each other's cheeks above the crowd before turning away.",
    stars: [[0.50,0.10],[0.44,0.34],[0.50,0.50],[0.20,0.44],[0.80,0.40],[0.54,0.74],[0.58,0.92]],
    edges: [[0,1],[1,2],[1,3],[1,4],[2,5],[5,6]] },
  { book: 3, name: "Ara", latin: "Ara", english: "The Altar", figure: "The hecatomb at Pylos",
    claim: "Associative. Book III holds the poem's one complete sacrifice, followed from the gilding of the heifer's horns to the tasting of the entrails, and the smoke of it is the book's whole moral argument about how strangers are received.",
    stars: [[0.18,0.34],[0.82,0.34],[0.78,0.56],[0.22,0.56],[0.32,0.78],[0.68,0.78]],
    edges: [[0,1],[1,2],[2,3],[3,0],[3,4],[2,5],[4,5]] },
  { book: 4, name: "Eridanus", latin: "Eridanus", english: "The River", figure: "The river Aegyptus",
    claim: "Associative. Menelaus is held twenty days at Pharos, off the mouth of the river Homer calls Aegyptus, for failing to make the offering the gods were owed — the poem's clearest statement that a return can be stopped by an accounting error.",
    stars: [[0.06,0.18],[0.20,0.30],[0.30,0.24],[0.44,0.36],[0.56,0.30],[0.68,0.46],[0.80,0.40],[0.92,0.58]],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
  { book: 5, name: "Pleiades", latin: "Vergiliae", english: "The Seven Sisters", figure: "Odysseus' course",
    claim: "Homer's own, and the poem's only sailing instruction: at 5.272 Odysseus watches the Pleiades and late-setting Boötes and the Bear, keeping her on his left hand, for seventeen days.",
    stars: [[0.30,0.34],[0.44,0.28],[0.52,0.40],[0.40,0.46],[0.62,0.34],[0.58,0.54],[0.70,0.48]],
    edges: [[0,1],[1,2],[2,3],[3,0],[1,4],[4,6],[2,5]] },
  { book: 6, name: "Virgo", latin: "Virgo", english: "The Maiden", figure: "Nausicaa",
    claim: "Associative. Nausicaa is the one unmarried girl in the poem, and Odysseus, naked and salt-crusted, compares her to a young palm shoot he once saw beside Apollo's altar on Delos.",
    stars: [[0.20,0.28],[0.34,0.40],[0.50,0.30],[0.48,0.54],[0.64,0.44],[0.60,0.74]],
    edges: [[0,1],[1,2],[1,3],[3,4],[3,5],[2,4]] },
  { book: 7, name: "Crater", latin: "Crater", english: "The Cup", figure: "The libation to Hermes",
    claim: "Associative. Book VII is a hall, a hearth, a garden that never fails, and a cup: Alcinous ends the night by pouring to Hermes, the god of guests and of arrivals nobody can explain.",
    stars: [[0.22,0.34],[0.36,0.24],[0.62,0.24],[0.76,0.34],[0.66,0.58],[0.34,0.58],[0.50,0.78]],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0],[4,6],[5,6]] },
  { book: 8, name: "Lyra", latin: "Lyra", english: "The Lyre", figure: "Demodocus",
    claim: "Associative. The blind singer whose lyre the herald hangs on a peg above his head, and whose third song makes Odysseus weep like a widow being led away from a burning city.",
    stars: [[0.46,0.12],[0.34,0.40],[0.62,0.44],[0.36,0.70],[0.64,0.74]],
    edges: [[0,1],[0,2],[1,3],[2,4],[3,4],[1,2]] },
  { book: 9, name: "Aries", latin: "Aries", english: "The Ram", figure: "The great ram of Polyphemus",
    claim: "Associative, and exact. Odysseus leaves the cave slung under the belly of the flock's leader, and the blinded Cyclops stops that ram at the door to ask why he is last out this morning when he was always first.",
    stars: [[0.16,0.56],[0.34,0.46],[0.56,0.40],[0.74,0.34],[0.86,0.46]],
    edges: [[0,1],[1,2],[2,3],[3,4]] },
  { book: 10, name: "Lupus", latin: "Lupus", english: "The Wolf", figure: "Circe's door",
    claim: "Associative. Mountain wolves and lions fawn on Odysseus' men at Circe's gate like dogs round a master come home from a feast — the poem's most disturbing simile, because it is the image of loyalty attached to the wrong thing.",
    stars: [[0.14,0.62],[0.30,0.50],[0.46,0.56],[0.62,0.42],[0.78,0.48],[0.52,0.76],[0.30,0.80]],
    edges: [[0,1],[1,2],[2,3],[3,4],[2,5],[5,6],[1,6]] },
  { book: 11, name: "Orion", latin: "Orion", english: "The Hunter", figure: "Orion among the dead",
    claim: "Homer's own. At 11.572 Odysseus sees Orion in the asphodel meadow still driving together the beasts he killed in life, holding a bronze club that will never break — the one shade in the book doing exactly what it did before.",
    stars: [[0.28,0.10],[0.70,0.14],[0.36,0.36],[0.50,0.42],[0.64,0.38],[0.26,0.70],[0.74,0.74],[0.50,0.62]],
    edges: [[0,2],[1,4],[2,3],[3,4],[2,5],[4,6],[3,7],[5,7],[6,7]] },
  { book: 12, name: "Taurus", latin: "Taurus", english: "The Bull", figure: "The cattle of the Sun",
    claim: "Associative. Seven herds of fifty on Thrinacia, which neither breed nor die, watched by two of Helios' daughters — the only property in the poem that cannot be replaced, and the crew eat it.",
    stars: [[0.10,0.30],[0.26,0.42],[0.42,0.50],[0.54,0.44],[0.66,0.56],[0.80,0.30],[0.88,0.62]],
    edges: [[0,1],[1,2],[2,3],[3,4],[2,5],[4,6]] },
  { book: 13, name: "Puppis", latin: "Puppis", english: "The Stern", figure: "The petrified ship",
    claim: "Associative, though Homer names the Argo at 12.70 as the ship all men have heard of. The other famous vessel in Greek verse is the Phaeacian galley that carries Odysseus home and is turned to stone within sight of its own harbour.",
    stars: [[0.14,0.44],[0.30,0.34],[0.48,0.32],[0.66,0.38],[0.82,0.50],[0.60,0.60],[0.34,0.60]],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0]] },
  { book: 14, name: "Boötes", latin: "Bootes", english: "The Ox-driver", figure: "Eumaeus",
    claim: "Homer's own: late-setting Boötes is one of the three marks Odysseus steers by at 5.272. The name means the herdsman, and Book XIV is where the poem finally produces one — a swineherd who feeds a beggar the best of what he has and expects nothing.",
    stars: [[0.50,0.08],[0.38,0.32],[0.62,0.34],[0.30,0.58],[0.68,0.60],[0.46,0.86]],
    edges: [[0,1],[0,2],[1,3],[2,4],[1,5],[2,5]] },
  { book: 15, name: "Columba", latin: "Columba", english: "The Dove", figure: "The hawk's omen",
    claim: "Associative. As Telemachus steps ashore a hawk tears a dove in flight overhead and scatters the feathers between him and his ship — the omen Theoclymenus, standing at his shoulder, reads aloud as a house that will not be beaten.",
    stars: [[0.24,0.36],[0.40,0.28],[0.56,0.34],[0.70,0.30],[0.62,0.52],[0.42,0.56]],
    edges: [[0,1],[1,2],[2,3],[2,4],[4,5],[5,0]] },
  { book: 16, name: "Gemini", latin: "Gemini", english: "The Twins", figure: "Father and son",
    claim: "Associative. Two men alone in a hut, weeping harder than sea-eagles robbed of their young before the fledging — Homer's simile, and the only time in the poem Odysseus cries for something other than the past.",
    stars: [[0.30,0.10],[0.66,0.12],[0.32,0.36],[0.64,0.38],[0.28,0.66],[0.68,0.66],[0.34,0.90],[0.62,0.90]],
    edges: [[0,2],[1,3],[2,3],[2,4],[3,5],[4,6],[5,7]] },
  { book: 17, name: "Canis Major", latin: "Canis Maior", english: "The Great Dog", figure: "Argos",
    claim: "Associative, and the least arguable in the ring. The dog Odysseus reared and never hunted with, lying on a heap of dung at the gate, who lifts his head and drops his ears at a voice he has not heard in twenty years and dies in the same breath.",
    stars: [[0.20,0.24],[0.38,0.34],[0.30,0.52],[0.52,0.46],[0.68,0.36],[0.72,0.62],[0.86,0.70]],
    edges: [[0,1],[1,2],[1,3],[3,4],[3,5],[5,6]] },
  { book: 18, name: "Hercules", latin: "Hercules", english: "The Kneeling Man", figure: "The fight for the doorway",
    claim: "Associative. The poem's one boxing match, fought over a beggar's pitch by a king who has to decide mid-swing whether to kill the man outright or leave him breathing, and chooses the lighter blow so as not to be recognised.",
    stars: [[0.44,0.08],[0.32,0.30],[0.58,0.32],[0.36,0.52],[0.60,0.54],[0.24,0.76],[0.70,0.80]],
    edges: [[0,1],[0,2],[1,3],[2,4],[3,4],[3,5],[4,6]] },
  { book: 19, name: "Cygnus", latin: "Cygnus", english: "The Swan", figure: "Penelope's geese",
    claim: "Associative. Penelope dreams of twenty geese feeding at her trough and an eagle from the mountain that breaks their necks, and then tells the stranger which gate her dream came through — horn or ivory, true or false — without deciding.",
    stars: [[0.50,0.08],[0.50,0.36],[0.24,0.42],[0.76,0.44],[0.50,0.62],[0.40,0.90],[0.62,0.90]],
    edges: [[0,1],[1,2],[1,3],[1,4],[4,5],[4,6]] },
  { book: 20, name: "Perseus", latin: "Perseus", english: "The Champion", figure: "Theoclymenus' vision",
    claim: "Associative. In the middle of a feast the seer sees the walls running with blood, the porch and courtyard crowded with ghosts going down to Erebus, and the sun wiped out of the sky. The suitors laugh at him, and he walks out.",
    stars: [[0.36,0.10],[0.48,0.30],[0.28,0.40],[0.62,0.42],[0.44,0.58],[0.70,0.66],[0.34,0.80]],
    edges: [[0,1],[1,2],[1,3],[1,4],[3,5],[4,6]] },
  { book: 21, name: "Sagittarius", latin: "Sagittarius", english: "The Archer", figure: "The bow of Iphitus",
    claim: "Associative. A guest-gift from a man murdered soon afterwards, kept at home for twenty years because Odysseus would not take it to war, and strung at last as easily as a singer fits a new string to a lyre.",
    stars: [[0.14,0.56],[0.30,0.44],[0.46,0.50],[0.60,0.36],[0.76,0.30],[0.88,0.42],[0.52,0.70]],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[2,6]] },
  { book: 22, name: "Sagitta", latin: "Sagitta", english: "The Arrow", figure: "The first shot",
    claim: "Associative. Antinous is lifting a two-handled gold cup and thinking about wine when the arrow goes through his throat, and the poem records that he kicked the table over and the bread and the roast meat went into the blood.",
    stars: [[0.10,0.52],[0.34,0.46],[0.58,0.42],[0.82,0.36],[0.72,0.28],[0.72,0.46]],
    edges: [[0,1],[1,2],[2,3],[3,4],[3,5]] },
  { book: 23, name: "Corona Borealis", latin: "Corona Borealis", english: "The Northern Crown", figure: "Ariadne's crown",
    claim: "Associative, but tied: Homer knows Ariadne, who appears in the catalogue of the dead at 11.321. Book XXIII is the poem's marriage put back together by a test the wife sets and the husband fails to see coming, and the crown is the sky's one wedding-gift.",
    stars: [[0.18,0.52],[0.26,0.36],[0.40,0.26],[0.56,0.24],[0.70,0.32],[0.80,0.46],[0.84,0.62]],
    edges: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
  { book: 24, name: "Libra", latin: "Libra", english: "The Balance", figure: "The truce",
    claim: "Associative. The last book weighs a blood-feud — a hundred and eight dead sons against one returned king — and refuses to let it be paid. Athene stops the fighting with a shout, and Zeus puts a thunderbolt in the ground at her feet.",
    stars: [[0.50,0.14],[0.28,0.36],[0.72,0.36],[0.20,0.62],[0.80,0.62],[0.34,0.74],[0.66,0.74]],
    edges: [[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[1,2]] }
];

const INDEX = new Map(CONSTELLATIONS.map(entry => [entry.book, entry]));

export function constellationFor(bookId) {
  return INDEX.get(bookId) || null;
}
