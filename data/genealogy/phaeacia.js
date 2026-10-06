/*
 * Scheria, and Poseidon's monstrous line.
 *
 * The Phaeacians and the Cyclopes descend from the same god, and the poem
 * puts them at opposite ends of its scale of civilisation. Both are named
 * as Poseidon's kin; one has no assemblies, no laws, and no ships, and the
 * other has ships that steer themselves and a king who apologises for a
 * servant's hesitation over a stranger. Alcinous' own great-grandfather led
 * the Phaeacians away from the Cyclopes because they were being harassed by
 * them, which makes the two peoples an argument the poem has already had.
 *
 * Poseidon and Thoosa are registered in the divine cluster and referenced
 * here by name only.
 */

export const PHAEACIAN_FIGURES = [
  /* ---------------------------------------------------- the Phaeacian house */
  {
    name: "Nausithous",
    aliases: [],
    kind: "mortal",
    greek: "Nausíthoos (Ναυσίθοος)",
    roman: "Nausithous",
    homer: "antítheos — “godlike”; his name means something like “swift with ships”",
    order: "Founder of Scheria",
    domain: "The migration away from the Cyclopes",
    house: "The Phaeacian house",
    father: "Poseidon",
    mother: "Periboea",
    children: ["Alcinous", "Rhexenor"],
    who: "Poseidon's son by Periboea, and the man who moved the Phaeacians out of Hypereia because the Cyclopes kept raiding them, walled a new town on Scheria, built temples, and divided the land. He is also the one who received the prophecy that Poseidon would one day wreck a Phaeacian escort ship and put a mountain over the city, which is the sentence hanging over the whole of Books VI to XIII.",
    books: [6, 7, 8, 13],
    prominence: 2,
    acts: {
      "The bronze walls and the garden": "Is named as the founder who led the Phaeacians away from Hypereia, out of reach of the overbearing Cyclopes, and settled them on Scheria with a wall, houses, temples, and divided fields.",
      "The ship turned to stone": "Is remembered by Alcinous as the man who was told long ago that Poseidon would be angry at the Phaeacians for giving everyone safe escort, and would one day smash a returning ship and hide their city under a mountain."
    }
  },
  {
    name: "Periboea",
    aliases: ["the daughter of Eurymedon"],
    kind: "mortal",
    greek: "Períboia (Περίβοια)",
    roman: "Periboea",
    homer: "eîdos arístē — “most excellent in beauty”, and the youngest daughter of Eurymedon",
    order: "Mother of Nausithous",
    domain: "The link between the Giants and the Phaeacians",
    house: "The Phaeacian house",
    father: "Eurymedon",
    consorts: ["Poseidon"],
    children: ["Nausithous"],
    who: "The youngest daughter of Eurymedon, king of the Giants, who bore Nausithous to Poseidon. The genealogy is doing quiet work: the most civilised people in the poem descend on one side from a race the poem says was destroyed by its own recklessness.",
    books: [7],
    prominence: 3,
    acts: {
      "The bronze walls and the garden": "Is named in Arete's pedigree as the youngest daughter of Eurymedon, who bore Nausithous to Poseidon."
    }
  },
  {
    name: "Eurymedon",
    aliases: ["king of the Giants"],
    kind: "mortal",
    greek: "Eurymédōn (Εὐρυμέδων)",
    roman: "Eurymedon",
    homer: "the poem says he ruled the overbearing Giants, and destroyed his reckless people and himself",
    order: "King of the Giants",
    domain: "A people destroyed by their own recklessness",
    house: "The Phaeacian house",
    children: ["Periboea"],
    who: "Registered because of what his three lines contain: he ruled the Giants and destroyed both them and himself through recklessness — the same word Homer uses in the poem's seventh line for the companions who ate the cattle of the Sun. The Phaeacians' own ancestry carries the poem's central warning.",
    books: [7],
    prominence: 3,
    acts: {
      "The bronze walls and the garden": "Is named as the king who once ruled the overbearing Giants and destroyed his reckless people and himself with them."
    }
  },
  {
    name: "Rhexenor",
    aliases: [],
    kind: "mortal",
    greek: "Rhēxḗnōr (Ῥηξήνωρ)",
    roman: "Rhexenor",
    homer: "the poem says Apollo struck him down, a bridegroom with no son and one daughter",
    order: "Brother of Alcinous",
    domain: "The reason Arete is Alcinous' niece",
    house: "The Phaeacian house",
    father: "Nausithous",
    siblings: ["Alcinous"],
    children: ["Arete"],
    who: "Alcinous' brother, killed by Apollo as a young married man with no son and one daughter — and that daughter is Arete, whom Alcinous married. The Phaeacian queen is therefore her husband's niece, and Homer states it without comment.",
    books: [7],
    prominence: 3,
    acts: {
      "The bronze walls and the garden": "Is named as Alcinous' brother, struck down by Apollo in his own hall as a bridegroom, leaving no son and one daughter, Arete."
    }
  },
  {
    name: "Alcinous",
    aliases: ["Alkinoos"],
    kind: "mortal",
    greek: "Alkínoos (Ἀλκίνοος)",
    roman: "Alcinous",
    homer: "hieròn ménos Alkinóoio — “the sacred strength of Alcinous”, a formula that treats him almost as a place",
    order: "King of the Phaeacians",
    domain: "The bronze-walled palace, the games, and the escort home",
    house: "The Phaeacian house",
    father: "Nausithous",
    siblings: ["Rhexenor"],
    consorts: ["Arete"],
    children: ["Nausicaa", "Laodamas", "Halius", "Clytoneus"],
    who: "The poem's best host after Aeolus, and the only one who gets to hear the whole story. He runs a court with no war in living memory, apologises for his son's rudeness, offers a shipwrecked stranger his daughter and half a kingdom within a day of meeting him, and then sends him home with more treasure than he would have brought from Troy. He is also the man who compliments Odysseus on not being a liar, forty lines after the poem's most calculated piece of narration.",
    books: [6, 7, 8, 11, 13],
    prominence: 1,
    acts: {
      "Nausicaa's instructions": "Is described by his daughter as the man whose approval matters and whose court she must not be seen entering with a strange man beside her.",
      "At the knees of Arete": "Sits silent while a stranger walks out of a mist and takes his wife's knees, and says nothing until the oldest man in the room prompts him.",
      "Echeneus' rebuke": "Takes Odysseus by the hand, raises him from the ashes of the hearth, and puts his own son out of the chair beside him to seat him.",
      "Alcinous offers his daughter": "Offers a man he met that evening his daughter, a house, and property, and immediately adds that nobody will keep him against his will, and promises the escort regardless.",
      "The assembly and the promise of convoy": "Calls an assembly at dawn, has fifty-two young men detailed to a ship, and organises the games and the feast before he has been told the guest's name.",
      "The dance and the gifts": "Assesses a fine of a robe, a tunic, and a talent of gold on each of the twelve Phaeacian lords, and makes Euryalus apologise personally with a sword.",
      "The wooden horse, and the weeping simile": "Notices the guest weeping behind his cloak, stops the singer, and asks for the name at last — the question that starts the apologoi.",
      "The intermezzo in Alcinous' hall": "Confirms his wife's judgement, offers another day and more gifts, praises Odysseus as no liar like the wanderers the earth is full of, and asks him to go on.",
      "The ship turned to stone": "Watches the returning ship petrified in the harbour mouth, remembers his father's prophecy, and calls for twelve bulls to be sacrificed to Poseidon in the hope that the mountain will not follow."
    }
  },
  {
    name: "Arete",
    aliases: [],
    kind: "mortal",
    greek: "Arḗtē (Ἀρήτη)",
    roman: "Arete",
    homer: "her name is from aráomai, to pray — Homer says Alcinous honours her as no other woman on earth is honoured by her husband",
    order: "Queen of the Phaeacians",
    domain: "Judgement, and the settling of quarrels",
    house: "The Phaeacian house",
    father: "Rhexenor",
    consorts: ["Alcinous"],
    children: ["Nausicaa", "Laodamas", "Halius", "Clytoneus"],
    who: "The most powerful woman in the poem outside Ithaca. Athene tells Odysseus to go past the king entirely and take her knees, because if she is well disposed to him he will get home. She settles quarrels among men, and in Book XI she speaks first, ahead of her husband, and decides the escort — which is why the catalogue of heroines is aimed at her.",
    books: [6, 7, 8, 11, 13],
    prominence: 1,
    acts: {
      "The mist, and the girl with the pitcher": "Is the person Athene briefs Odysseus about at length: go past the king, take the queen's knees, and everything follows.",
      "At the knees of Arete": "Has a stranger come out of a mist and clasp her knees before anyone in the hall has seen him arrive.",
      "Arete recognises the clothes": "Recognises the tunic and cloak as her own work, since she wove them herself with her women, and asks the question that forces the whole story out — who gave you those clothes?",
      "The intermezzo in Alcinous' hall": "Speaks before her husband, asks the nobles what they make of the man, declares him her own guest, and tells them not to hurry him away or stint the gifts.",
      "The last night in Scheria": "Has the gifts packed in a chest, ties the lid with a knot Circe taught him to remember, and sends three women with a cloak, a tunic, and bread and wine for the crossing."
    }
  },
  {
    name: "Nausicaa",
    aliases: ["Nausikaa"],
    kind: "mortal",
    greek: "Nausikáa (Ναυσικάα)",
    roman: "Nausicaa",
    homer: "leukṓlenos — “white-armed”, the formula Homer otherwise gives to Hera; and parthénos adm̄ḗs, an unmarried girl",
    order: "Princess of the Phaeacians",
    domain: "The river mouth, the laundry, and the decision to stay",
    house: "The Phaeacian house",
    father: "Alcinous",
    mother: "Arete",
    siblings: ["Laodamas", "Halius", "Clytoneus"],
    who: "The only unmarried girl in the poem, and the one who decides its outcome without knowing it. She stands her ground on a beach when every one of her maids runs from a naked, salt-crusted stranger, hears him out, gives him clothes and food and directions, and then tells him not to walk into town beside her because of what people would say. Homer gives her the poem's most delicate scene and no marriage at the end of it.",
    books: [6, 7, 8],
    prominence: 1,
    acts: {
      "Athena's dream to Nausicaa": "Is visited in her sleep by Athene in the likeness of a friend, who tells her the household linen is a disgrace and that her wedding cannot be far off, and she wakes and asks her father for a wagon without mentioning marriage.",
      "The washing at the river mouth": "Drives the mule wagon to the river with the laundry and her maids, treads the clothes in the pits, spreads them on the shingle, and eats and plays while they dry.",
      "The ball, the cry, and the waking": "Throws the ball wide so that it goes into the water and the girls scream, which is what wakes Odysseus in the leaves.",
      "The supplication": "Stands her ground alone when every maid runs, listens to a naked stranger compare her to Artemis and to a palm shoot on Delos, and answers that Zeus gives out fortune as he pleases and that a suppliant on Phaeacian ground will not go short.",
      "Oil, clothes, and Athena's grace": "Has her women give him oil and clothing, and tells them plainly that he is here by the will of the gods and is to be fed and washed.",
      "Nausicaa's instructions": "Tells him to follow the wagon only as far as the grove of Athene outside town, and then to come on alone, because sailors talk and she will not have it said that she picked up a husband on a beach.",
      "The bath, and Nausicaa's farewell": "Stands by the pillar as he passes and says one thing — remember me, since you owe me your life first — and he answers that he will pray to her as to a god all his days, and they do not meet again."
    }
  },
  {
    name: "Laodamas",
    aliases: [],
    kind: "mortal",
    greek: "Laodámas (Λαοδάμας)",
    roman: "Laodamas",
    homer: "the poem calls him the best of the Phaeacians at boxing and the son Alcinous loves most",
    order: "Prince of the Phaeacians",
    domain: "The games",
    house: "The Phaeacian house",
    father: "Alcinous",
    mother: "Arete",
    siblings: ["Nausicaa", "Halius", "Clytoneus"],
    who: "Alcinous' eldest, whose chair is given away to the stranger and who takes it well. He is also the one who politely invites the guest to compete, which is what gives Euryalus the opening to be rude.",
    books: [7, 8],
    prominence: 3,
    acts: {
      "Echeneus' rebuke": "Is put out of the chair beside his father so that the stranger can sit in it, and does not complain.",
      "The games, and Euryalus' insult": "Invites the guest to try an event, since there is no greater fame for a man than what he does with his hands and feet — a courteous invitation that Euryalus immediately turns into an insult."
    }
  },
  {
    name: "Halius",
    aliases: [],
    kind: "mortal",
    greek: "Hálios (Ἅλιος)",
    roman: "Halius",
    homer: "one of the two dancers whom no one could match",
    order: "Prince of the Phaeacians",
    domain: "The dance with the purple ball",
    house: "The Phaeacian house",
    father: "Alcinous",
    mother: "Arete",
    siblings: ["Nausicaa", "Laodamas", "Clytoneus"],
    who: "One of Alcinous' sons, who dances with his brother the ball-dance that Odysseus says is the most wonderful thing he has seen — the poem's only account of an art that is neither song nor craft.",
    books: [8],
    prominence: 3,
    acts: {
      "The dance and the gifts": "Dances with Laodamas, throwing a purple ball up to the clouds and catching it in turn while the other young men beat time, and Odysseus tells Alcinous it is a marvel."
    }
  },
  {
    name: "Clytoneus",
    aliases: [],
    kind: "mortal",
    greek: "Klytónēos (Κλυτόνηος)",
    roman: "Clytoneus",
    homer: "named as a competitor in the footrace, which he wins",
    order: "Prince of the Phaeacians",
    domain: "The footrace",
    house: "The Phaeacian house",
    father: "Alcinous",
    mother: "Arete",
    siblings: ["Nausicaa", "Laodamas", "Halius"],
    who: "The third of Alcinous' sons, who wins the footrace by the length of a mule-team's furrow. Registered so the royal household is complete.",
    books: [8],
    prominence: 3,
    acts: {
      "The games, and Euryalus' insult": "Wins the footrace, leaving the rest behind by as much as a mule-team ploughs in one furrow."
    }
  },
  {
    name: "Echeneus",
    aliases: [],
    kind: "mortal",
    greek: "Echénēos (Ἐχένηος)",
    roman: "Echeneus",
    homer: "Phaiḗkōn andrôn progenéstatos — “eldest of the Phaeacian men”, who knew many old things",
    order: "Elder of Scheria",
    domain: "Saying the obvious thing when nobody else will",
    house: "The Phaeacian house",
    who: "The oldest man at the Phaeacian court, whose function is to break silences. He speaks twice, both times to point out something everyone in the room already knows: that a suppliant should not be left sitting in the ashes, and that a queen's judgement is correct and the decision is the king's to act on.",
    books: [7, 11],
    prominence: 3,
    acts: {
      "Echeneus' rebuke": "Tells Alcinous that it is not right or seemly for a stranger to be sitting on the ground in the ashes of the hearth while everyone waits for the king to say something.",
      "The intermezzo in Alcinous' hall": "Confirms that Arete has spoken to the point and that acting on it is Alcinous' business."
    }
  },
  {
    name: "Euryalus",
    aliases: ["the son of Naubolus"],
    kind: "mortal",
    greek: "Euryálos (Εὐρύαλος)",
    roman: "Euryalus",
    homer: "brotoloigôi îsos Árēi — “like Ares the bane of mortals”, and the best-looking Phaeacian after Laodamas",
    order: "Phaeacian noble",
    domain: "The only rudeness on Scheria",
    house: "The Phaeacian house",
    father: "Naubolus",
    who: "The one Phaeacian who behaves badly, and he is made to apologise with a bronze sword within a hundred lines. His insult — that the stranger looks like a merchant captain, a man who counts cargo and profits, not an athlete — is the worst thing anyone can say in a heroic court and it is what makes Odysseus throw the discus.",
    books: [8],
    prominence: 2,
    acts: {
      "The games, and Euryalus' insult": "Tells the guest he does not look like an athlete but like a man who sails with a trading crew, minding cargo and watching his profits, which is the deepest insult available in that room.",
      "The discus throw": "Watches the guest pick up a discus bigger and heavier than the ones the Phaeacians have been using and throw it clean past every mark, and hears him offer to take on anyone present except his host's son.",
      "The dance and the gifts": "Apologises in person and gives Odysseus a bronze sword with a silver hilt and an ivory scabbard, and is forgiven."
    }
  },
  {
    name: "Demodocus",
    aliases: ["the blind singer"],
    kind: "singer",
    greek: "Dēmódokos (Δημόδοκος)",
    roman: "Demodocus",
    homer: "theîos aoidós — “the divine singer”, whom the Muse loved above all others and gave both good and evil: she took his eyes and gave him sweet song",
    order: "Singer of the Phaeacians",
    domain: "Three songs, and the making of a man cry",
    house: "The Phaeacian house",
    who: "The poem's second self-portrait and by far the more flattering: a blind singer honoured by the people, seated on a silver-studded chair with his lyre hung on a peg above his head, given the best cut of the chine, and asked for what he likes. He sings the Trojan war to the man who won it, without knowing he is in the room, and the third song makes Odysseus weep so hard that the host has to stop the music.",
    books: [8, 13],
    prominence: 1,
    acts: {
      "Demodocus sings the quarrel": "Sings a quarrel between Odysseus and Achilles at a feast of the gods that no other source records, and the man it is about pulls his cloak over his head and cries.",
      "Ares and Aphrodite": "Sings the net, the exposure, and the laughter of the gods — the one purely comic thing in the poem, performed to a hall in the middle of an afternoon.",
      "The wooden horse, and the weeping simile": "Is asked by Odysseus himself for the song of the wooden horse, and sings it so accurately that Homer compares the listener to a woman thrown over the body of her husband and beaten with spear-shafts and led away into slavery — a simile that puts the sacker of Troy in the position of its victims."
    }
  },
  {
    name: "Pontonous",
    aliases: [],
    kind: "servant",
    greek: "Pontónoos (Ποντόνοος)",
    roman: "Pontonous",
    homer: "kêryx — herald; he is the one who mixes the wine and leads the singer",
    order: "Herald of Alcinous",
    domain: "The mixing bowl, and the singer's chair",
    house: "The Phaeacian house",
    who: "Alcinous' herald, who mixes the wine, sets the singer's chair against a pillar, and hangs the lyre on its peg where the blind man's hand can find it. He is a small figure who does the poem's most careful courtesy.",
    books: [7, 8, 13],
    prominence: 3,
    acts: {
      "Echeneus' rebuke": "Is told to mix the bowl and serve wine round the hall so that a libation can be poured to Zeus, protector of suppliants.",
      "Demodocus sings the quarrel": "Leads the blind singer in, sets him on a silver-studded chair against a tall pillar, and hangs the clear-toned lyre on a peg above his head, showing him where to reach for it."
    }
  },
  {
    name: "Amphialus",
    aliases: [],
    kind: "mortal",
    greek: "Amphíalos (Ἀμφίαλος)",
    roman: "Amphialus",
    homer: "the son of Polyneus son of Tecton, and the best of the Phaeacians at the long jump",
    order: "Phaeacian competitor",
    domain: "The games",
    house: "The Phaeacian house",
    who: "One of the young men listed as competing at the games, and the best jumper. Registered because the Phaeacian games name their competitors the way an Iliadic battle names its dead.",
    books: [8],
    prominence: 3
  },
  {
    name: "Elatreus",
    aliases: [],
    kind: "mortal",
    greek: "Elatreús (Ἐλατρεύς)",
    roman: "Elatreus",
    homer: "the best of the Phaeacians with the discus",
    order: "Phaeacian competitor",
    domain: "The discus",
    house: "The Phaeacian house",
    who: "The Phaeacian discus champion, whose best mark Odysseus throws past with a heavier stone.",
    books: [8],
    prominence: 3,
    acts: {
      "The discus throw": "Holds the best Phaeacian mark until the guest picks up a larger and heavier discus and puts it well beyond every previous throw."
    }
  },
  {
    name: "The twelve Phaeacian kings",
    aliases: ["the Phaeacian lords", "the twelve princes"],
    kind: "people",
    greek: "basilêes (βασιλῆες)",
    roman: "reges",
    homer: "the poem says twelve rule among the people, and Alcinous makes a thirteenth",
    order: "The Phaeacian council",
    domain: "Gifts, and the sailing of the escort ship",
    house: "The Phaeacian house",
    who: "Twelve leading men who rule alongside Alcinous, which makes Scheria a council with a king in it rather than a monarchy. Their collective fine of a robe, a tunic, and a talent of gold apiece is what sends Odysseus home richer than Troy would have made him.",
    books: [6, 7, 8, 13],
    prominence: 3,
    acts: {
      "The dance and the gifts": "Are assessed a robe, a tunic, and a talent of gold each by their king, and pay without argument.",
      "The last night in Scheria": "See the treasure stowed under the benches of the ship so that it will not foul the rowers."
    }
  },
  {
    name: "The Phaeacians",
    aliases: ["the people of Scheria", "the Phaeacian people"],
    kind: "people",
    greek: "Phaíēkes (Φαίηκες)",
    roman: "Phaeaces",
    homer: "nausiklytoí — “famous for ships”; and the poem says their ships are as swift as a thought and need no steersman",
    order: "A seafaring people",
    domain: "The escort of strangers",
    house: "The Phaeacian house",
    who: "A people at the edge of the world who live entirely by the sea and have never had to fight, whose ships know the minds and cities of men and cross any water in fog and cloud without ever being wrecked. They are the poem's picture of civilisation at its furthest reach — and its warning, since the escort they are proudest of is what gets them punished.",
    books: [5, 6, 7, 8, 11, 13, 16, 19, 23],
    prominence: 2,
    acts: {
      "The assembly and the promise of convoy": "Detail fifty-two young men to a ship and haul it down to the water before they have been told who the passenger is.",
      "The sleep like death": "Row the ship so steadily that it runs faster than a falcon while the passenger sleeps like the dead, and lift him ashore on Ithaca still asleep, with his treasure set beside him under an olive.",
      "The ship turned to stone": "Lose the ship and the crew, turned to stone in the harbour mouth within sight of everyone watching from the shore."
    }
  },
  {
    name: "The Phaeacian ship",
    aliases: ["the escort ship", "the swift ship"],
    kind: "object",
    greek: "nēûs (νηῦς)",
    roman: "navis",
    homer: "the Phaeacian ships are said to know the minds and cities of all men and to cross the sea in mist and cloud without fear of damage or loss",
    order: "The vessel that carries Odysseus home",
    domain: "The last crossing",
    house: "The Phaeacian house",
    who: "The ship that takes Odysseus to Ithaca in one night while he sleeps, and is turned to stone on the way back with all its crew aboard, rooted in the harbour mouth in front of the watching city. It is the poem's clearest statement that no good deed in this world is safe from a grudge.",
    books: [8, 13],
    prominence: 2,
    acts: {
      "The sleep like death": "Runs steadily and fast with a sleeping man aboard, and puts in at the harbour of Phorcys where the crew lift him ashore still asleep and stack his treasure by the olive.",
      "The ship turned to stone": "Is struck by Poseidon with the flat of his hand within sight of its own harbour and takes root as a stone in the shape of a ship, while the city watches from the shore."
    }
  },

  /* -------------------------------------------------- Poseidon's other line */
  {
    name: "Polyphemus",
    aliases: ["the Cyclops", "Polyphemos"],
    kind: "monster",
    greek: "Polýphēmos (Πολύφημος)",
    roman: "Polyphemus",
    homer: "pelṓrios — “monstrous”, and athemístia ḗidē, “he knew no law”; his name, oddly, means “much spoken of”",
    order: "Cyclops, son of Poseidon",
    domain: "A cave, a flock, and the poem's engine",
    house: "The line of Poseidon",
    father: "Poseidon",
    mother: "Thoosa",
    who: "The son whose blinding sets the whole plot in motion. He is introduced through a catalogue of everything he lacks — assemblies, laws, farming, ships — and then given the single most tender speech in the book, addressed to a ram. Homer will not let him be simply a monster, and will not let his crime be anything other than what it is: he eats guests who have claimed the protection of Zeus.",
    books: [1, 2, 6, 9, 10, 12, 20, 23],
    prominence: 1,
    acts: {
      "The cave of Polyphemus": "Comes home with his flocks, rolls a stone across the door that twenty-two wagons could not shift, hears a claim on Zeus' protection of guests, says the Cyclopes care nothing for Zeus, and eats two men.",
      "Nobody is my name": "Drinks three bowls of unmixed Maron wine, asks his guest's name so as to give him a guest-gift, is told it is Nobody, and promises to eat Nobody last.",
      "The stake in the eye": "Is blinded with a hardened olive stake driven and turned like a shipwright's drill, and tells his neighbours through the door that Nobody is killing him by guile, so they go away.",
      "Under the rams, and the curse": "Sits in the doorway feeling the backs of his sheep, stops the great ram to ask why the strongest of the flock is last out today and whether it grieves for its master's eye, and afterwards prays to Poseidon that Odysseus come home late, alone, in a stranger's ship, and find trouble in his house."
    }
  },
  {
    name: "The Cyclopes",
    aliases: ["the Kyklopes"],
    kind: "people",
    greek: "Kýklōpes (Κύκλωπες)",
    roman: "Cyclopes",
    homer: "hyperphíaloi athémistoi — “overbearing and lawless”; they plant nothing, plough nothing, and trust the gods to feed them",
    order: "A people without laws",
    domain: "A country with no assemblies and no ships",
    house: "The line of Poseidon",
    who: "Defined entirely by absence: no assemblies, no laws, no ploughing, no sowing, no ships, no shipwrights. Each one lays down rules for his own wives and children and takes no notice of the others. Every one of those absences is something Ithaca has, and the ethnography does the moral work before any violence starts.",
    books: [1, 2, 6, 7, 9, 10, 12, 20],
    prominence: 2,
    acts: {
      "The cave of Polyphemus": "Are described in a catalogue of everything they do not have, and everything they do not have turns out to be what a household is made of.",
      "The stake in the eye": "Come to the cave door when their neighbour screams, ask whether anyone is killing him by force or by guile, are told that Nobody is doing it, and go home advising him to pray."
    }
  },
  {
    name: "Telemus",
    aliases: ["Telemus son of Eurymus"],
    kind: "seer",
    greek: "Tḗlemos Eurymídēs (Τήλεμος Εὐρυμίδης)",
    roman: "Telemus",
    homer: "mántis anḕr ēΰs te mégas te — “a seer, a fine big man”, who grew old prophesying among the Cyclopes",
    order: "Prophet of the Cyclopes",
    domain: "A prophecy delivered years too early",
    house: "The line of Poseidon",
    father: "Eurymus",
    who: "The seer who told Polyphemus long ago that he would lose his sight at the hands of a man called Odysseus. The Cyclops remembers it only after the boast, which is the point: a prophecy nobody can act on is just a description delivered in advance.",
    books: [9],
    prominence: 3,
    acts: {
      "Under the rams, and the curse": "Is remembered by the blinded Cyclops as the man who prophesied all this — and the Cyclops adds that he had always expected someone large and strong, not a small worthless man who overcame him with wine."
    }
  },
  {
    name: "The Laestrygonians",
    aliases: ["the Laistrygones"],
    kind: "people",
    greek: "Laistrygónes (Λαιστρυγόνες)",
    roman: "Laestrygones",
    homer: "the poem says they are not like men but like Giants, and that the paths of night and day are close together in their country",
    order: "Cannibal giants",
    domain: "The perfect harbour at Telepylus",
    house: "The line of Poseidon",
    who: "The people who destroy eleven ships and six hundred men in a hundred lines, and Homer names none of the dead — the largest loss in the poem and the least dwelt on. Their harbour is the best described anywhere in Greek verse, and it is a trap.",
    books: [10, 23],
    prominence: 2,
    acts: {
      "The Laestrygonians": "Come down along the cliffs in thousands, smash the moored ships with boulders, and spear the men in the water like fish to carry home for a meal."
    }
  },
  {
    name: "Antiphates",
    aliases: [],
    kind: "monster",
    greek: "Antiphátēs (Ἀντιφάτης)",
    roman: "Antiphates",
    homer: "the poem gives him no epithet, only what he does: he snatches one of the three and prepares him for dinner",
    order: "King of the Laestrygonians",
    domain: "Telepylus",
    house: "The line of Poseidon",
    children: ["The daughter of Antiphates"],
    who: "The Laestrygonian king, who receives three envoys and eats one of them without a word of conversation. He is the poem's shortest and most efficient inversion of hospitality: the Cyclops at least asked who they were first.",
    books: [10],
    prominence: 3,
    acts: {
      "The Laestrygonians": "Seizes one of the three scouts, prepares him for his meal on the spot, and raises the alarm that brings the whole people down on the harbour."
    }
  },
  {
    name: "The daughter of Antiphates",
    aliases: ["the girl at the spring"],
    kind: "monster",
    greek: "thugátēr Antiphátao (θυγάτηρ Ἀντιφάταο)",
    roman: "the daughter of Antiphates",
    homer: "no name; the poem records only that she was drawing water at the spring called Artacia and that she was huge",
    order: "Laestrygonian princess",
    domain: "The spring called Artacia",
    house: "The line of Poseidon",
    father: "Antiphates",
    who: "Unnamed, and one of the poem's best pieces of misdirection. The scouts meet a girl fetching water at a spring, which is the standard opening of a hospitality scene, and she takes them home to her mother, who is the size of a mountain peak.",
    books: [10],
    prominence: 3,
    acts: {
      "The Laestrygonians": "Is met drawing water at the spring Artacia, tells the scouts who her father is, and shows them the way to his house."
    }
  },
  {
    name: "Lamos",
    aliases: [],
    kind: "mortal",
    greek: "Lámos (Λάμος)",
    roman: "Lamus",
    homer: "named once, in the phrase “the steep city of Lamos, Telepylus of the Laestrygonians”",
    order: "Founder of Telepylus",
    domain: "A name attached to a city",
    house: "The line of Poseidon",
    who: "Named once as the founder of the Laestrygonian city. Registered because Homer gives even the cannibals a founder, which is more than he gives the Cyclopes.",
    books: [10],
    prominence: 3
  }
];
