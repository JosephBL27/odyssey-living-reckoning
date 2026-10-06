/*
 * Book XIII - The Landing.
 * He comes home asleep and does not recognise it.
 *
 * Four registers, keyed by the spine's episode titles:
 *   STUDY_13      cast, locus, motifs
 *   READINGS_13   the fuller account, the turn, what it leaves behind
 *   BEATS_13      what happens, in Homer's order, the decisive clause named
 *   COMMENTARY_13 sources, craft, afterlife
 */

export const STUDY_13 = {
  "The last night in Scheria": {
    cast: ["Odysseus / Ulysses", "Alcinous", "Arete", "Demodocus", "The twelve Phaeacian lords", "Homer's narrator"],
    locus: "The hall and harbour of Alcinous on Scheria",
    motifs: ["guest-friendship discharged", "parting gifts", "the watched sun", "a story ended"]
  },
  "The sleep like death": {
    cast: ["Odysseus / Ulysses", "The Phaeacian crew", "The helmsman", "The morning star", "Homer's narrator"],
    locus: "The open sea between Scheria and Ithaca",
    motifs: ["sleep like death", "the unwitnessed homecoming", "speed", "cargo set ashore"]
  },
  "The ship turned to stone": {
    cast: ["Poseidon / Neptune", "Zeus / Jove", "Alcinous", "Nausithous", "The Phaeacian crew", "The people of Scheria"],
    locus: "Olympus, and the harbour mouth of Scheria",
    motifs: ["hospitality punished", "an old prophecy landing", "petrifaction", "the harbour closed"]
  },
  "Waking in a land he does not know": {
    cast: ["Odysseus / Ulysses", "Athene / Minerva", "Zeus / Jove", "The departed Phaeacians", "Homer's narrator"],
    locus: "The harbour of Phorcys on Ithaca, under Athene's mist",
    motifs: ["the unrecognised homeland", "mist", "the count of goods", "xenia feared"]
  },
  "Athena as a young shepherd": {
    cast: ["Athene / Minerva", "Odysseus / Ulysses", "Orsilochus, in the lie", "Idomeneus, in the lie", "The Phoenician crew, in the lie", "Homer's narrator"],
    locus: "The shore of Ithaca, still under the mist",
    motifs: ["disguise against disguise", "the Cretan lie", "the withheld name", "the stranger's question"]
  },
  "The laughter of recognition": {
    cast: ["Athene / Minerva", "Odysseus / Ulysses", "Poseidon / Neptune", "The Phaeacians, recalled", "Homer's narrator"],
    locus: "The shore of Ithaca, beneath the olive tree",
    motifs: ["recognition", "two liars matched", "the goddess absent since Troy", "delight in cunning"]
  },
  "The cave of the Nymphs": {
    cast: ["Odysseus / Ulysses", "Athene / Minerva", "The Naiads of the cave", "The suitors, described", "Agamemnon, invoked", "Homer's narrator"],
    locus: "The harbour of Phorcys and the cave of the Naiads on Ithaca",
    motifs: ["the mist lifted", "treasure hidden", "the earth kissed", "the plot begun"]
  },
  "Odysseus made old": {
    cast: ["Athene / Minerva", "Odysseus / Ulysses", "Eumaeus, named", "Telemachus, still in Sparta", "The suitors", "Homer's narrator"],
    locus: "Beneath the olive tree at the harbour of Phorcys",
    motifs: ["the beggar's disguise", "a household to be tested", "the wand", "the plot split in two"]
  }
};

export const READINGS_13 = {
  "The last night in Scheria": {
    reading: "The long tale is over and the hall sits silent, held in the spell of it. Alcinous proposes one more round of gifts, a cloak and a tunic and a talent of gold from each of the twelve ruling lords, with the cost to be recovered afterwards by a levy on the people, and the bronze is stowed low under the benches so that nothing will foul the rowers' arms. This is xenia carried to its limit: a stranger who came ashore naked leaves richer than his full share of Troy would have made him. Odysseus, who has talked for four books and is the only witness to anything in them, now says very little. He keeps turning his head to the sun and willing it down, pours the parting libation into Arete's hands, and goes aboard.",
    turn: "The sun finally setting on a man who has spent the whole feast watching it, which releases the escort home.",
    after: "A hall emptied of the best story ever told in it, and a ship carrying off more treasure than Troy yielded him."
  },
  "The sleep like death": {
    reading: "The ship goes out under a stroke that throws the water up white, and Homer gives her two speeds: she runs steadier than a hawk, and she rears like the trace-horse of a four-in-hand taking the whip. Onto the man lying on the after-deck falls a sleep the poem calls unwaking, sweetest of all, and nearest of all things to death, and in it he forgets everything he has suffered. So the return he has wanted for ten years happens without him in it. The Phaeacians raise Ithaca at the rising of the morning star, drive half the ship's length up the beach out of sheer strength, lift him out still wrapped in his sheet, stack the bronze and gold clear of the path by the olive tree, and row away. He has not woken once.",
    turn: "The sleep taking him in mid-crossing, which spends his homecoming while he is not present at it.",
    after: "A man asleep on his own beach beside a heap of foreign treasure, and a crew rowing home to be punished for the kindness."
  },
  "The ship turned to stone": {
    reading: "Poseidon takes the escort personally and puts it to Zeus as a question of standing: he never meant to kill the man, only to make the road home hard, and now a people descended from himself have ferried him back asleep with more bronze and gold than he would have carried out of Troy. Zeus tells him to do as he likes. He waits at the harbour mouth for the ship coming in, strikes her with the flat of his hand and roots her to the sea floor as stone. Alcinous, watching from the shore, recognises the old prophecy of his father Nausithous, that Poseidon would one day wreck a Phaeacian convoy returning from an escort and heap a mountain about the city, and orders twelve bulls sacrificed and an end to conveying strangers. The best hosts in the poem shut their harbour.",
    turn: "Zeus giving Poseidon a free hand, after which perfect hospitality has a price and someone has to pay it.",
    after: "A rock in the shape of a ship at the harbour mouth, and a people who will never take in a stranger again."
  },
  "Waking in a land he does not know": {
    reading: "He wakes on his own island after twenty years and does not know it, because Athene has poured a mist over everything so that the place will be unrecognisable and she can brief him before anyone else reaches him. The paths look wrong, and the harbour, and the cliffs, and the trees. His reaction is entirely in character and not at all heroic: he groans, strikes his thighs, decides the Phaeacians have cheated him and dumped him in some other country, and then goes and counts the tripods, the cauldrons, the gold and the cloth. Nothing is missing. Only then does he weep, walking up and down the shore of his own land for want of it. The first thing he asks about the place is the poem's standing question, whether the men here are violent or god-fearing and decent to a stranger.",
    turn: "The mist, poured before he opens his eyes, which makes his own island the last strange coast he has to land on.",
    after: "Odysseus in Ithaca and not yet home: the disguise starts with the country disguised, not the man."
  },
  "Athena as a young shepherd": {
    reading: "Athene comes to him as a young man herding sheep, delicate the way kings' sons are, with a spear, good sandals and a cloak doubled over his shoulders. He asks the traveller's standard question, what land and what people, and she answers with an insult and a boast: he must be a fool or from very far off, because the island is rough and small but it grows corn and wine, and its name is known as far as Troy. His heart lifts at the word Ithaca and he lies at once. He is a Cretan, he says, who killed Orsilochus son of Idomeneus in an ambush over stolen plunder and paid Phoenician sailors to carry him off. The poem is explicit about the method: he takes the word back before it leaves him, turning over in his breast a mind full of profit.",
    turn: "The first false Cretan life, told to a goddess, which sets the method for every conversation he will have on Ithaca.",
    after: "The Cretan lies, which he will tell again to the swineherd, to the suitors and to his own wife before he is done."
  },
  "The laughter of recognition": {
    reading: "She smiles at the lie, strokes him with her hand, and stops being a shepherd: she stands there as a tall and beautiful woman skilled in glorious handiwork, and tells him that anyone hoping to get past him in trickery would have to be very sharp indeed, god or not. He is stubborn, she says, subtle, insatiable of deceit, and will not give up lying even standing on his own soil, which is precisely why she cannot leave him alone, since among the gods she is famous for the same wit. It is the poem's one recognition scene between mortal and immortal, and it runs as mutual professional admiration. Homer adds the sting plainly: Odysseus had not known her. He complains she has been missing since Troy, and she admits she would not quarrel openly with Poseidon.",
    turn: "Athene dropping the shepherd's shape, which converts a mark for a confidence trick into the one ally who can run the plot with him.",
    after: "The alliance the rest of the poem is fought under, and the first true word he has heard since landing: Ithaca, named by a goddess."
  },
  "The cave of the Nymphs": {
    reading: "She scatters the mist and Ithaca appears: the harbour of Phorcys, the long-leaved olive, the sheer cave sacred to the Naiads where he used to make his offerings, and Neriton in its woods above. He kisses the grain-giving earth, then prays to the nymphs with his hands raised, promising the gifts he used to give. Together they carry the Phaeacian treasure into the cave, the gold and the bronze and the woven stuff, stack it well back out of sight, and she sets a stone against the door. Then the two of them sit down against the trunk of the olive and plan the killing of the suitors. She tells him the state of his house, three years of them, and a wife who holds out promises to every man and means none of them. He asks her to weave the plan.",
    turn: "The mist scattered, which turns a strange coast into Ithaca and starts the counting of days until the suitors are dealt with.",
    after: "A cave full of foreign gold with a stone against the door, and a plot fixed under the olive tree at the head of the harbour."
  },
  "Odysseus made old": {
    reading: "The plan is a test of the household, and Athene says so: he is to go first to the swineherd, who has stayed loyal, and sit there asking after the house while she fetches Telemachus out of Sparta. Then she makes him unrecognisable. She shrivels the skin on his supple limbs, takes the fair hair off his head, puts the covering of an old man over his whole body, dims the eyes that were beautiful, and dresses him in a torn and filthy cloak with a stag-skin over it, a staff, and a battered wallet slung on a twisted cord. The king of Ithaca becomes a beggar nobody will look at twice. They settle the plan and separate, she for Lacedaemon and his son, he inland to Eumaeus and the pigs.",
    turn: "Athene's wand laid on him, which converts the returned king into a beggar and puts the next six books under a disguise.",
    after: "The beggar who will be insulted at his own door, and a household about to be tested by a man it takes for nobody."
  }
};

export const BEATS_13 = {
  "The last night in Scheria": [
    "Odysseus finishes the four-book account of his wanderings, and the Phaeacians sit silent, held in the spell of it.",
    "Alcinous says the gifts already given are not enough, and calls for a cloak, a tunic and a talent of gold from each of the twelve ruling lords, the cost to be made up afterwards by a levy on the people.",
    "The bronze and the clothing are carried down and stowed low under the benches so that nothing will foul the rowers' arms.",
    "**Alcinous makes good on the convoy he promised a stranger before he knew his name, and the guest-friendship is discharged in full: gifts aboard, ship crewed, nothing asked in return.**",
    "They sacrifice an ox to Zeus, feast, and Demodocus sings, while Odysseus keeps turning his head to the sun and willing it to set.",
    "He takes his leave of Arete, pours the parting cup into her hands, and prays that she may enjoy her children, her people and her king.",
    "A herald leads him down to the ship, where a rug and a linen sheet have been spread for him on the after-deck.",
    "Fifty-two young rowers take their places, cast off the cable, and lean back into the stroke."
  ],
  "The sleep like death": [
    "The rowers strike the water up white, and the ship runs steadier than a hawk and rears like the outside horse of a four-in-hand under the whip.",
    "**A sleep falls on Odysseus that Homer calls unwaking and nearest of all things to death, and in it he forgets everything he has suffered, so that the homecoming he has wanted for ten years happens while he is unconscious.**",
    "The ship holds her course all night with no hand needed on her.",
    "At the rising of the star that brings the dawn she raises Ithaca and runs into the harbour of Phorcys, driving half her length up the beach.",
    "The crew lift him out still asleep on his sheet and rug and set him down on the sand.",
    "They carry the tripods, the cauldrons, the gold and the woven stuff up beside the olive tree, clear of the path, so that no passing traveller can rob it before he wakes.",
    "They put back to sea for home."
  ],
  "The ship turned to stone": [
    "Poseidon goes to Zeus and complains that a people sprung from his own line have carried Odysseus home unhurt, asleep, and richer than Troy would have made him.",
    "Zeus answers that no god slights him, and tells him to do whatever he pleases about it.",
    "Poseidon goes to Scheria and waits for the escort ship on her way back in.",
    "**As she runs for the harbour he strikes her with the flat of his hand and turns her to stone, rooted to the sea floor: the Phaeacians are punished for having kept guest-friendship, not for having broken it.**",
    "The watching Phaeacians ask one another who has pinned their swift ship in open water.",
    "Alcinous remembers what his father Nausithous foretold, that Poseidon would one day wreck a Phaeacian ship returning from an escort and hide their city under a great mountain.",
    "He orders the people to stop conveying any stranger who comes to them, and to sacrifice twelve chosen bulls in the hope the god will spare the city.",
    "They stand round the altar praying, and the poem leaves Scheria there, in the middle of the sacrifice, without saying whether the mountain came."
  ],
  "Waking in a land he does not know": [
    "Odysseus wakes on the sand of the harbour of Phorcys after twenty years away.",
    "**Athene has poured a mist over the whole island so that he will not recognise Ithaca, and so that no one, wife or servants or townsmen, will recognise him before the suitors have paid.**",
    "The paths, the harbour, the sheer cliffs and the trees all look wrong to him; he strikes his thighs and groans.",
    "He concludes that the Phaeacians lied to him and set him down in some other country, and says he will have to lug his goods about looking for someone to take him in.",
    "He counts the tripods, the cauldrons, the gold and the woven stuff, and finds nothing missing.",
    "He weeps, walking up and down the beach of his own island, wanting to go home to it.",
    "He curses the Phaeacians he believes have wronged him, and calls on Zeus, who watches over suppliants, to requite them.",
    "Then he asks aloud what men live in this place, whether they are violent and lawless or god-fearing and decent to a stranger."
  ],
  "Athena as a young shepherd": [
    "Athene comes up to him disguised as a young man herding sheep, finely dressed, with a spear and a doubled cloak, looking like a king's son.",
    "Odysseus is glad to see anyone at all, and asks what land he has come to and what people live in it.",
    "She tells him he is a fool or from very far away not to know it: the island is rugged and small, but rich in grain and wine, and its name has reached as far as Troy.",
    "He hears the name Ithaca and his heart leaps, and he does not say who he is.",
    "**He tells her instead the first of his Cretan lies: that he is a man of Crete who killed Orsilochus, son of Idomeneus, in an ambush over a share of plunder, and paid Phoenician sailors to take him off the island.**",
    "In the lie the Phoenicians were making for Pylos or Elis, were driven off course, put in here in the night and set him and his goods ashore.",
    "He finishes by claiming he has no idea where he is, and that he lay down on the sand only because he was exhausted."
  ],
  "The laughter of recognition": [
    "Athene smiles at the Cretan story and strokes him with her hand.",
    "**She puts off the shepherd's shape and stands there as a tall and beautiful woman skilled in glorious handiwork: the goddess recognised at last, and recognised only because she has chosen to be.**",
    "She tells him that whoever hoped to beat him in every kind of guile would have to be a very sharp operator, even a god.",
    "She calls him stubborn, subtle and insatiable of deceit, and says he will not give up lying and thieving talk even in his own country.",
    "She says the two of them are alike: he is the best of mortals in counsel and speech, and she is famed among the gods for wit and cunning.",
    "Homer notes plainly that Odysseus had not recognised her, and Odysseus answers that it is hard for a mortal to know her, since she takes whatever shape she pleases.",
    "He complains that she has not stood by him since Troy fell, and left him wandering until she appeared to him in the Phaeacians' town.",
    "She answers that she always knew he would come home, and that she would not openly quarrel with Poseidon, her father's brother, whose son he blinded."
  ],
  "The cave of the Nymphs": [
    "Athene scatters the mist, and the island shows itself: the harbour of Phorcys, the long-leaved olive, the cave of the Naiads, and the wooded slope of Neriton.",
    "**Odysseus knows the place at last, kisses the grain-giving earth of Ithaca, and lifts his hands to the nymphs of the cave where he used to make his offerings.**",
    "He promises them the same gifts as before, if Athene lets him live and sees his son grown.",
    "The two of them carry the gold, the bronze and the woven stuff into the cave and stow it well back out of sight.",
    "Athene sets a stone against the entrance.",
    "They sit down against the trunk of the olive and begin planning the killing of the suitors.",
    "She tells him the suitors have been in his house three years, courting his wife, who holds out hope and promises to every one of them and means none of it.",
    "He says that without her he would have been killed in his own hall like Agamemnon, and asks her to weave the plan and stand beside him."
  ],
  "Odysseus made old": [
    "Athene tells him to declare himself to nobody, not his wife and not his people, and to endure the suitors' insults in silence first.",
    "She sends him to the swineherd Eumaeus, who keeps the pigs by the Raven's Rock and has stayed loyal, and tells him to sit there and ask about the household.",
    "She says she will go to Sparta herself and fetch Telemachus back from Menelaus.",
    "**She touches him with her wand and turns him into an old beggar: the skin withers on his limbs, the fair hair goes from his head, the bright eyes are dimmed, and the king of Ithaca becomes a man nobody will look at twice.**",
    "She puts on him a torn and filthy cloak and a foul tunic, both smoke-stained and worn through.",
    "Over them goes the big hairless hide of a swift stag, and she gives him a staff and a shabby wallet full of holes, slung on a twisted cord.",
    "The two of them settle the plan between them and part.",
    "She goes to Lacedaemon after Telemachus, and he goes inland to the swineherd's farm."
  ]
};

export const COMMENTARY_13 = {
  "The last night in Scheria": {
    sources: "The escort home is what the Phaeacians are for in the tradition: Nausithous settled them far from other men, and their ships are said to need no steersman. Homer's own contribution is the awkwardness. The extra gifts are to be recouped by a public levy, which is the poem quietly admitting that ideal hospitality sends someone a bill.",
    craft: "Watch the sun. Homer gives Odysseus a farmer's simile, a ploughman glad when the light fails and his knees carry him home to supper, for a man who has not worked a field in twenty years. The comparison does the wanting that the character will not say aloud, and it is the last thing he feels before the poem takes his consciousness away.",
    afterlife: "Scheria has been read since antiquity as a utopia the hero has to be expelled from. Samuel Butler built his case for a female author largely on the Phaeacian court, and Fenelon's Telemaque borrowed its courteous kings wholesale for the education of a French prince."
  },
  "The sleep like death": {
    sources: "The ferry that needs no steersman and knows the passenger's mind is folk-tale material, and Homer keeps it while stripping the passenger of consciousness. That last stroke looks like his own. The Nostoi survive only in summary, and nothing in what survives suggests another captain slept through his own arrival.",
    craft: "Two similes in a few lines, both about speed and both borrowed from the land, a hawk and then a chariot team, for a ship at sea. Then the vocabulary shifts to death: the sleep is negretos, unwaking, and closest to death of anything there is. The crossing is written as a passage out of one life, and the man set down on the sand is not quite the one who embarked.",
    afterlife: "Allegorists from the Neoplatonists onward have read the crossing as a death and a rebirth, which is what let Ithaca stand for the soul's home. In English it is one of the passages translators are habitually measured by, and Chapman, Pope, Fitzgerald and Wilson pitch the line about forgetting all he had suffered very differently."
  },
  "The ship turned to stone": {
    sources: "The Phaeacians are Poseidon's own people, which makes this a family matter rather than a simple grudge, and Nausithous' prophecy is the sort of foundation oracle a Greek city told about itself. The petrified ship is usually connected to a real offshore rock: Corcyra claimed Phaeacian descent as early as Thucydides, and the rock was there before the story that explains it.",
    craft: "Homer breaks off in the middle of a sacrifice and never goes back to Scheria. Whether the mountain falls turns on a single disputed word, which the ancient critics read two ways and editors still print two ways, so the most generous people in the poem are left permanently mid-prayer with the outcome unsettled.",
    afterlife: "Corfu still shows visitors the ship-shaped rock. Beyond that the episode has had less afterlife than it deserves, since it is the poem's clearest statement that doing right by a stranger can cost a city everything, and few later writers have wanted to say that."
  },
  "Waking in a land he does not know": {
    sources: "The returning husband in disguise is an old and widespread tale type, and Homer sharpens it past anything in the folk material: in the type-tale the husband is disguised, not the home. The concealing mist is a standard divine device, used elsewhere to hide a fighter in battle; here it is turned on a landscape.",
    craft: "The arrival is long and the emotion is withheld, then released in the wrong order. He complains before he grieves and takes inventory before he weeps, and the poem keeps calling him polytlas, much-enduring, for a man who has just spent the entire voyage asleep.",
    afterlife: "Cavafy's Ithaka made the island a destination that is supposed to disappoint, which is a modern reading of exactly this scene. Joyce's Ithaca chapter is a catalogue of household objects, and it is worth noticing that Homer's arrival contains one too. Kazantzakis begins his sequel from the premise that the man never really settled for the place."
  },
  "Athena as a young shepherd": {
    sources: "The false Cretan biographies need no source, but they are built from real material: Crete as a place of restless aristocrats and blood-feuds, Idomeneus as a captain with his own troubled return, and Phoenicians as the traders who move people about the eastern Mediterranean and are never quite trusted in this poem.",
    craft: "Disguise meets disguise, and both parties enjoy it. The goddess appears in a form that is slightly too good, a shepherd dressed like a prince, and gets a false Cretan in return. Homer names the deceit outright rather than letting the reader infer it, which is how the lies stay legible for the next six books.",
    afterlife: "The lying has had a long modern career. Atwood's Penelopiad proceeds from the premise that nothing Odysseus says can be taken at face value, and Emily Wilson's translation is unusually good on the false tales because it keeps them plain, so that they sound exactly like the true ones."
  },
  "The laughter of recognition": {
    sources: "Athene's attachment to Odysseus is older than this poem, since she is his goddess in the Iliad too, but the scene itself has no known model. Divine epiphanies in epic normally frighten the mortal or issue him an order. This one teases him.",
    craft: "The joke is structural. Every other recognition in the poem is a mortal seeing through a disguise, and here the disguised man is out-disguised. Homer says outright that Odysseus did not know her, so the reader cannot flatter him about it, and the quality she praises is precisely the one that has cost him ten years at sea.",
    afterlife: "Later readers have taken the exchange as the poem's account of itself: a god and a man who both prefer indirection, admiring each other for it. It gave nineteenth-century critics their picture of a Greek cheerfulness about deceit that Christian readers found awkward, and it is the passage most often cited when Odysseus' morality is defended. Painters have ignored it, preferring their Athene armed."
  },
  "The cave of the Nymphs": {
    sources: "Real Ithacan topography sits underneath this. The harbour of Phorcys and a cave with two entrances have been argued over on the ground since Strabo, and the candidate cave above Dexia bay has been shown to travellers for two centuries. What is Homer's own is the pairing of sacred cave with strongroom.",
    craft: "The description is exact where nothing else in the poem's geography is: two doors, one for men and one for the immortals, stone mixing-bowls, stone looms, bees. After four books of places nobody can put on a map, Homer produces a piece of surveying, and the man kisses the ground before he says a word.",
    afterlife: "Porphyry gave the cave a whole treatise in the third century, reading the two doors as the entrance of souls into birth and their way out of it. On the Cave of the Nymphs became a founding text of allegorical reading and carried Homer into the Renaissance that way. Byron's generation of travellers went to Ithaca looking for the cave itself."
  },
  "Odysseus made old": {
    sources: "The disguised husband returning to a contested house is among the oldest tale shapes there is; Homer's version is unusual in making the disguise supernatural rather than a matter of rags and a beard. Beggars in this poem are a protected class, since Zeus watches over them, which is exactly why the disguise works as a trap for the suitors.",
    craft: "The transformation is written as a list of subtractions, skin and hair and eyes and clothes, and every item is one the poem has praised elsewhere. Note the instrument: Circe used a wand to turn men into animals, and Athene uses one to turn a king into a beggar. The parallel is not accidental, and this transformation is the only one in the poem the hero consents to.",
    afterlife: "The beggar-king is the image that travelled furthest, standing behind every disguised-monarch story in European folklore and behind the returning-soldier plot from the medieval chansons to the Martin Guerre case. Joyce made a whole day out of the great man rendered invisible by shabbiness. Painters preferred the bow and the slaughter to the rags."
  }
};
