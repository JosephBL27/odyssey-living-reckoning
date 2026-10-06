/*
 * The dead of Book XI, and the punished.
 *
 * Everything in this file is reported by one man. Books IX-XII are Odysseus'
 * own narration in Alcinous' hall, and the Nekyia is the part of it no other
 * witness survives to confirm: a trench of blood at the edge of Ocean, a
 * prophet who states the future plainly, a catalogue of women out of an older
 * poem, three captains from Troy, and four sights on the far side of the
 * meadow. `homer` records the epithet or formula the poem actually uses,
 * because in the Odyssey the epithet is usually the argument — 'hateful
 * Eriphyle' is a verdict, and 'blameless Salmoneus' is a silence.
 */

export const NEKYIA_FIGURES = [
  /* -------------------------------------------------- the shore and the trench */
  {
    name: "The Cimmerians",
    aliases: ["Cimmerian men", "the people of the mist", "Kimmerioi"],
    kind: "people",
    greek: "Kimmérioi (Κιμμέριοι)",
    roman: "Cimmerii",
    homer: "ēéri kaì nephélēi kekalymménoi — 'shrouded in mist and cloud', a people on whom the shining Sun never looks down",
    order: "Nation at the bounds of Ocean",
    domain: "The last inhabited coast before the dead",
    who: "The nation whose land and city the ship reaches at the limits of deep-flowing Ocean, where the sun never arrives — not climbing into the sky, not turning back from it, and not at noon. Homer's only interest in them is the light they do not get. They are the threshold: the last people with houses, after whom nobody in the poem is alive.",
    books: [11],
    prominence: 3,
    acts: {
      "The trench of blood": "Provide the coastline for the whole book. The ship beaches in their country, where deadly night is stretched over wretched mortals, and it is on that shore that Odysseus digs the pit a cubit square and pours the offerings to the dead."
    }
  },
  {
    name: "The shades",
    aliases: ["the dead", "the ghosts", "the souls", "the nations of the dead", "psychai"],
    kind: "people",
    greek: "psychaí (ψυχαί) / nekýōn kárēna",
    roman: "umbrae / manes",
    homer: "nekýōn amenēnà kárēna — 'the strengthless heads of the dead'; a soul goes off skiêi eíkelon ḕ kaì oneírōi, 'like a shadow or a dream'",
    order: "The dead in the house of Hades",
    domain: "Grievance and news, held without a body",
    who: "The crowd that comes up to the trench: brides, unmarried youths, old men worn out with suffering, tender girls with fresh grief on them, and men killed in armour with the wounds still showing. They have neither strength nor recognition until they have drunk the blood, and they cannot be held. What Homer's dead keep is memory and complaint; what they lose is the flesh that would let anyone touch them.",
    books: [11, 24],
    prominence: 2,
    acts: {
      "The trench of blood": "Come up out of Erebus with an unearthly cry the moment the blood runs into the pit — a whole population arriving at once — and are held off at sword point until the prophet has drunk first.",
      "Anticleia, and the arms that close on nothing": "Demonstrate exactly what they are. Three times Odysseus takes his mother in his arms and three times she goes through them, and she gives him the mechanism: the sinews no longer hold flesh and bone together, the fire has undone them, and the soul flies off like a dream.",
      "Hermes leads the suitors' souls": "Are reached from the other direction in the last book. Hermes drives the suitors' souls with the golden wand along the streams of Ocean, past the White Rock, the gates of the Sun and the country of dreams, to the asphodel meadow where the dead of Troy are already standing."
    }
  },
  {
    name: "Elpenor",
    aliases: ["Elpenōr"],
    kind: "shade",
    greek: "Elpḗnōr (Ἐλπήνωρ)",
    roman: "Elpenor",
    homer: "neṓtatos — 'the youngest', and a man neither over-valiant in war nor sound in his wits",
    order: "Comrade of Odysseus, first of the dead",
    domain: "The unburnt body left behind on Aeaea",
    house: "The dead of the Nekyia",
    who: "The youngest of the crew and the least distinguished. Heavy with wine, he lies down on Circe's roof for the cool air, and when the shouting of departure wakes him he forgets the ladder and breaks his neck. Nobody counts him. He is the first shade to reach Odysseus at the trench, so that the Odyssey's underworld opens not with a prophet or a mother but with an ordinary man asking for the rites his friends forgot.",
    books: [10, 11, 12],
    prominence: 1,
    acts: {
      "Circe's sailing directions to the dead": "Dies during the loading of the ship. Odysseus is on the shore giving orders about the route to Hades and does not notice that one of the men who came down with him is lying in Circe's courtyard with a broken neck.",
      "The trench of blood": "Comes up first, ahead of Teiresias and ahead of Anticleia, because his body is still lying unburied in Circe's hall and nothing detains him below.",
      "Elpenor asks for burial": "Asks to be burnt with his armour, to have a mound heaped over him at the grey sea's edge and his oar planted upright on it, and to be remembered by name. He tells Odysseus, who does not yet know it, that the ship will touch at Aeaea again.",
      "Elpenor's burial and Circe's second briefing": "Gets everything he asked for: the body fetched from Circe's hall, the pyre, the barrow at the headland, and the oar set in the mound. It is the one promise made anywhere in the wanderings that Odysseus keeps in full."
    }
  },
  {
    name: "Teiresias",
    aliases: ["Tiresias", "the Theban seer", "the blind prophet"],
    kind: "seer",
    greek: "Teiresías (Τειρεσίας)",
    roman: "Tiresias",
    homer: "mántios alaoû, toû te phrénes émpedoí eisin — 'the blind seer, whose wits stand firm'; Persephone left him his mind among the dead while the rest flit as shadows",
    order: "Theban seer among the dead",
    domain: "Prophecy, and the one plain statement of the future in the poem",
    house: "The dead of the Nekyia",
    who: "The blind prophet of Thebes, and the single shade who keeps his intelligence after death. Circe sends Odysseus the width of the world to consult him, and what he supplies is not comfort but a route with conditions attached to it. Everywhere else the Odyssey delivers the future as omen, dream, riddle or a stranger's oath; here it is simply said.",
    books: [10, 11, 12, 23],
    prominence: 1,
    acts: {
      "Circe's sailing directions to the dead": "Is the reason for the entire detour. Circe tells Odysseus that before he can go home he must sail to the house of Hades and question the soul of Theban Teiresias, and gives him the course, the trench, and the order of the offerings.",
      "The trench of blood": "Is the shade the blood is being kept for. The crowd is pushed back with the drawn sword so that the prophet drinks before his mother does, which is the harshest thing Odysseus does in the book.",
      "Teiresias' prophecy": "Drinks, and speaks without hedging: Poseidon's anger over the blinded Cyclops, the cattle of the Sun that must not be touched, a late return alone on a stranger's ship, and a house full of insolent men who will have to be killed. Then he adds the strangest instruction in the poem — walk inland with an oar on your shoulder until a man calls it a winnowing fan, plant it, sacrifice to Poseidon, and death will come to you off the sea, gently, in a rich old age.",
      "Elpenor's burial and Circe's second briefing": "Has his warning about Thrinacia repeated by Circe the same morning, so that the crew hear the prohibition twice, from two authorities, before the island is ever in sight.",
      "Thrinacia and the oath": "Is quoted by Odysseus as the ground for the oath he makes the men swear. He names the seer and the island together, and Eurylochus argues against a dead man's advice anyway.",
      "The night lengthened, and the tale told over": "Closes the marriage-night narration. Odysseus keeps the oar for last, so that the restored household is handed one more departure, already prophesied, on the night it is put back together."
    }
  },

  /* ------------------------------------------------ the catalogue of heroines */
  {
    name: "Tyro",
    kind: "shade",
    greek: "Tyrṓ (Τυρώ)",
    roman: "Tyro",
    homer: "Tyrṑ eupatéreia — 'Tyro of the noble father'",
    order: "Princess of Elis, mother of two dynasties",
    domain: "Love for a river, answered by the sea",
    house: "The line of Poseidon",
    father: "Salmoneus",
    consorts: ["Poseidon", "Cretheus"],
    children: ["Pelias", "Neleus", "Aeson", "Pheres", "Amythaon"],
    who: "Salmoneus' daughter and Cretheus' wife, and the first woman at the trench. She fell in love with the river Enipeus and used to walk beside his beautiful water, and Poseidon took the river's shape to have her. Her sons Pelias and Neleus start the two dynasties the poem keeps running into, which makes her the ancestor of Nestor's Pylos.",
    books: [11],
    prominence: 2,
    acts: {
      "The catalogue of heroines": "Opens the catalogue and sets its form — a name, a father, a god, and the children the encounter produced. A dark wave curves over her at the river mouth like a wall; afterwards Poseidon tells her to rejoice, to bear his splendid children, and to name no names, and goes down into the sea."
    }
  },
  {
    name: "Salmoneus",
    kind: "mortal",
    greek: "Salmōneús (Σαλμωνεύς)",
    roman: "Salmoneus",
    homer: "Salmōnêos amýmonos — 'blameless Salmoneus'",
    order: "King in Elis",
    domain: "A reputation the poem declines to touch",
    house: "The dead of the Nekyia",
    children: ["Tyro"],
    who: "Tyro's father, and in Homer blameless. Every later account makes him the king who dragged bronze cauldrons behind his chariot and hurled torches to counterfeit thunder and lightning, until Zeus killed him for the imitation. The Odyssey either does not know that story or refuses it, and the word it gives him instead is worth noticing when the poem is being read for what it leaves out.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is named as Tyro's noble father and called blameless — the one description of him that no later author accepts."
    }
  },
  {
    name: "Enipeus",
    aliases: ["the river Enipeus"],
    kind: "divine",
    greek: "Enipeús (Ἐνιπεύς)",
    roman: "Enipeus",
    homer: "Enipeùs theîos, hòs polỳ kállistos potamôn epì gaîan híēsin — 'divine Enipeus, far the fairest of the rivers that run upon the earth'",
    order: "River of Thessaly",
    domain: "Fresh water, and a likeness another god borrows",
    who: "The most beautiful river in the world by the poem's own reckoning, and the object of Tyro's love. He does nothing at all: Poseidon takes his appearance at his own river mouth, and a woman gives herself to a shape. The first disguise in Book XI belongs to a god impersonating a rival, which is the poem's central device turned to divine advantage.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is loved, and counterfeited. Tyro walks beside his waters until the Earth-shaker takes his form and lies with her where the swirling river runs out to the sea."
    }
  },
  {
    name: "Antiope",
    kind: "shade",
    greek: "Antiópē (Ἀντιόπη)",
    roman: "Antiopa",
    homer: "Asōpoîo thygátēr — 'daughter of Asopus'; she claimed to have slept in the arms of Zeus, and the claim was true",
    order: "Theban princess",
    domain: "A god's embrace, spoken of afterwards",
    house: "The dead of the Nekyia",
    father: "Asopus",
    consorts: ["Zeus"],
    children: ["Amphion", "Zethus"],
    who: "Daughter of the river Asopus and mother, by Zeus, of the twins who built Thebes. Homer gives her the boast rather than the seduction, which is unusual in this catalogue: what defines her is the statement she made about herself. The brutal later story of her persecution by Dirce is nowhere in this poem.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Comes second at the trench, and is described by what she said: that she had lain in the arms of Zeus. She bore the two sons who first founded the seat of seven-gated Thebes."
    }
  },
  {
    name: "Amphion",
    kind: "hero",
    greek: "Amphíōn (Ἀμφίων)",
    roman: "Amphion",
    homer: "no formula of his own — he and his brother are the pair who 'first founded the seat of seven-gated Thebes'",
    order: "Founder of Thebes",
    domain: "The walling of a city",
    house: "The dead of the Nekyia",
    father: "Zeus",
    mother: "Antiope",
    siblings: ["Zethus"],
    who: "One of Antiope's twins by Zeus and, with his brother, the founder of Thebes: they laid out the seat of the seven-gated city and put the towers on it, because strong as they were they could not hold a broad city unwalled. The tradition that he raised the stones by playing a lyre is later than Homer. A second and unrelated Amphion stands in the same catalogue — the son of Iasus, who ruled Minyan Orchomenus and fathered Chloris — and the two are constantly confused.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Founds and fortifies Thebes with Zethus. Homer's reason for the walls is practical rather than magical: without towers the twins could not have lived in the broad city, however powerful they were."
    }
  },
  {
    name: "Zethus",
    kind: "hero",
    greek: "Zêthos (Ζῆθος)",
    roman: "Zethus",
    homer: "no formula of his own",
    order: "Founder of Thebes",
    domain: "The walling of a city",
    house: "The dead of the Nekyia",
    father: "Zeus",
    mother: "Antiope",
    siblings: ["Amphion"],
    children: ["Itylus"],
    who: "Antiope's other son by Zeus, and Amphion's inseparable partner. Homer treats the founding of Thebes as one act by two men and never distinguishes their parts in it. The Odyssey touches his household once more, far away and much later, in the simile Penelope reaches for to describe her nights.",
    books: [11, 19],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Founds and walls seven-gated Thebes with his brother.",
      "The geese, and the gates of horn and ivory": "Is named as the husband in Penelope's nightingale simile — the daughter of Pandareus, singing in the thick leaves, who killed her own son Itylus, the boy she bore to Zethus. Penelope uses a mother's unbearable mistake to describe lying awake, and then tells her dream."
    }
  },
  {
    name: "Alcmene",
    kind: "shade",
    greek: "Alkmḗnē (Ἀλκμήνη)",
    roman: "Alcumena / Alcmena",
    homer: "Amphitrýōnos ákoitis — 'the wife of Amphitryon'",
    order: "Princess of Thebes",
    domain: "The bearing of Heracles",
    house: "The dead of the Nekyia",
    consorts: ["Amphitryon", "Zeus"],
    children: ["Heracles"],
    who: "Amphitryon's wife and, by Zeus, the mother of Heracles. Homer states it and moves on: the long night, the double conception, the delayed birth and the jealousy of Hera all belong to other poems. She is in the catalogue because of her son, and her son does not appear in the catalogue at all.",
    books: [11],
    prominence: 2,
    acts: {
      "The catalogue of heroines": "Is seen as the wife of Amphitryon who bore lion-hearted Heracles after lying in the arms of great Zeus. Homer sets her directly beside Megara, so that the strongest man alive is described twice through the women attached to him and never shown."
    }
  },
  {
    name: "Megara",
    kind: "shade",
    greek: "Megárē (Μεγάρη)",
    roman: "Megara",
    homer: "Kreíontos hyperthýmoio thygátēr — 'daughter of high-hearted Creon'",
    order: "Princess of Thebes, wife of Heracles",
    domain: "Marriage to an unbreakable man",
    house: "The dead of the Nekyia",
    father: "Creon",
    consorts: ["Heracles"],
    who: "Creon's daughter and the first wife of Heracles, and in this poem nothing else. The killing of her children by her husband in his madness, which Euripides builds a whole play on, is absent. The catalogue's method is to give the fact of a marriage and let a reader who knows the rest supply it.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is named as the wife of Heracles, whose strength never gave way — a description of the husband standing in for any account of the wife."
    }
  },
  {
    name: "Epicaste",
    aliases: ["Jocasta", "Iocasta", "the mother of Oedipus"],
    kind: "shade",
    greek: "Epikástē (Ἐπικάστη)",
    roman: "Iocasta / Jocasta",
    homer: "mētéra Oidipódao, kalḕn Epikástēn — 'the mother of Oedipus, fair Epicaste'",
    order: "Queen of Thebes",
    domain: "A marriage made in ignorance",
    house: "The dead of the Nekyia",
    consorts: ["Laius", "Oedipus"],
    children: ["Oedipus"],
    who: "Homer's name for the woman the tragedians call Jocasta: wife of Laius, then wife of the son who had killed him, and doing a great thing in ignorance of what it was. When the gods make it known she hangs herself from a high beam and leaves her son the Furies. The Odyssey gives her four lines and a rope, and stages no scene of discovery whatever.",
    books: [11],
    prominence: 2,
    acts: {
      "The catalogue of heroines": "Is the most disturbing face at the trench, and the story is told twice over in one breath — she married her own son, and he had killed his own father. What kills her is not the act but its publication: the gods bring it to light among men, and she is dead before the line ends."
    }
  },
  {
    name: "Oedipus",
    aliases: ["Oedipodes", "Oidipodes"],
    kind: "shade",
    greek: "Oidípous (Οἰδίπους)",
    roman: "Oedipus",
    homer: "no formula of his own — Homer says only that he went on ruling the Cadmeans in Thebes, suffering through the deadly counsels of the gods",
    order: "King of Thebes",
    domain: "A throne kept after the truth is out",
    house: "The dead of the Nekyia",
    mother: "Epicaste",
    consorts: ["Epicaste"],
    who: "The man who killed his father and married his mother, in a version older and stranger than Sophocles'. Homer's Oedipus does not blind himself and is not driven into exile: when the gods publish the thing, his mother hangs herself and he keeps his throne, ruling on in Thebes with the Furies of her curse working on him. The Odyssey names the crime outright and then refuses the tragedy.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is present only through his mother. Odysseus reports that he killed his own father, married her, and went on reigning over the Cadmeans in lovely Thebes with the pains the gods had planned for him."
    }
  },
  {
    name: "Chloris",
    kind: "shade",
    greek: "Chlôris (Χλῶρις)",
    roman: "Chloris",
    homer: "perikalléa Chlôrin — 'Chloris of surpassing beauty', whom Neleus married for her looks and countless gifts",
    order: "Queen of Pylos",
    domain: "The Pylian succession",
    house: "The house of Neleus",
    father: "Amphion son of Iasus",
    consorts: ["Neleus"],
    children: ["Nestor", "Chromius", "Periclymenus", "Pero"],
    who: "Youngest daughter of Amphion son of Iasus, who ruled with a hard hand in Minyan Orchomenus, and bought as a bride by Neleus for her beauty. She is Nestor's mother, which is what her entry is for: the catalogue reaches out of the underworld and touches the palace Telemachus has just left.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is seen as queen in Pylos, mother of Nestor, of Chromius, of lordly Periclymenus, and of Pero — four names that carry the world of the living into a list of the dead."
    }
  },
  {
    name: "Pero",
    kind: "shade",
    greek: "Pērṓ (Πηρώ)",
    roman: "Pero",
    homer: "thaûma brotoîsi — 'a wonder to mortals'",
    order: "Princess of Pylos",
    domain: "A bride whose price is a stolen herd",
    house: "The house of Neleus",
    father: "Neleus",
    mother: "Chloris",
    siblings: ["Nestor", "Chromius", "Periclymenus"],
    who: "Neleus' daughter, courted by every man in the neighbourhood and promised to none of them: her father would give her only to whoever drove the cattle of Iphiclus out of Phylace. A seer attempted it for his brother's sake, was taken by the herdsmen and held in irons for a year, and won her at last when Iphiclus let him go for his prophecies. Book XI does not name the seer; Book XV does.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is the prize in the most compressed adventure story in the poem — a wonder to mortals, wooed by all her neighbours, withheld until a herd came out of Phylace, and disposed of in nine lines."
    },
    bookActs: {
      15: "The same bride-price story is told again in the pedigree of Theoclymenus, where the seer who suffered for her is named as Melampus and the year in irons becomes the founding hardship of a prophetic house."
    }
  },
  {
    name: "Leda",
    kind: "shade",
    greek: "Lḗdē (Λήδη)",
    roman: "Leda",
    homer: "Tyndáreou álochos — 'the wife of Tyndareus'",
    order: "Queen of Sparta",
    domain: "Twin sons who share one life between them",
    house: "The house of Tyndareus",
    consorts: ["Tyndareus", "Zeus"],
    children: ["Castor", "Polydeuces", "Helen", "Clytemnestra"],
    who: "Tyndareus' wife, and here the mother of Castor and Polydeuces only — the catalogue says nothing of Helen or Clytemnestra, though the poem knows both are hers, and nothing at all of the swan. What she is given instead is the strangest fact in the whole list: her sons are dead and alive on alternate days, honoured by Zeus underneath the grain-giving earth.",
    books: [11],
    prominence: 2,
    acts: {
      "The catalogue of heroines": "Is named as the mother of Castor the horse-breaker and Polydeuces good with his fists, whom the living earth holds: they come to life on alternate days and die again, and have honour equal to the gods."
    }
  },
  {
    name: "Iphimedeia",
    kind: "shade",
    greek: "Iphimédeia (Ἰφιμέδεια)",
    roman: "Iphimedia",
    homer: "Alōêos álochos — 'the wife of Aloeus'",
    order: "Wife of Aloeus",
    domain: "Sons who grow out of the world's scale",
    house: "The line of Poseidon",
    consorts: ["Aloeus", "Poseidon"],
    children: ["Otus", "Ephialtes"],
    who: "Aloeus' wife, who said she had lain with Poseidon and bore the two largest and handsomest men the grain-giving earth ever reared. Her whole entry is the size of her children. She is in the catalogue as the mother of the poem's plainest case of mortals attempting the sky.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is named as the woman who bore Otus and Ephialtes to Poseidon — the tallest men the grain-giving earth ever nourished, and by far the most beautiful, after famed Orion."
    }
  },
  {
    name: "Otus",
    aliases: ["Otos", "one of the Aloadae"],
    kind: "hero",
    greek: "Ôtos (Ὦτος)",
    roman: "Otus",
    homer: "antítheos Ôtos — 'godlike Otus'",
    order: "Giant, son of Poseidon",
    domain: "The assault on Olympus",
    house: "The line of Poseidon",
    father: "Poseidon",
    mother: "Iphimedeia",
    siblings: ["Ephialtes"],
    who: "One of the Aloadae, nine cubits across and nine fathoms tall in his ninth year. He and his brother threatened the immortals with war in heaven and set about piling Ossa on Olympus and Pelion on Ossa to climb up and fight it. Apollo shot them both before their beards had come, which is Homer's way of admitting the plan might have worked.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is measured rather than described — the poem gives his breadth and height at nine years old and no character at all — and is killed with his brother by the son of Zeus before the down had covered their cheeks."
    }
  },
  {
    name: "Ephialtes",
    aliases: ["one of the Aloadae"],
    kind: "hero",
    greek: "Ephiáltēs (Ἐφιάλτης)",
    roman: "Ephialtes",
    homer: "tēlekleitòs Ephiáltēs — 'far-famed Ephialtes'",
    order: "Giant, son of Poseidon",
    domain: "The assault on Olympus",
    house: "The line of Poseidon",
    father: "Poseidon",
    mother: "Iphimedeia",
    siblings: ["Otus"],
    who: "Otus' brother, and the other half of a single ambition. Homer treats the pair as one agent with one plan, one rate of growth and one death. They are the poem's argument that size alone does not overturn an established order, which the Odyssey will make again at domestic scale when a hundred large young men are killed in a hall.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Plans with his brother to set Ossa on Olympus and leafy Pelion on Ossa, so that heaven can be climbed, and dies for it under Apollo's arrows while still a boy."
    }
  },
  {
    name: "Phaedra",
    kind: "shade",
    greek: "Phaídra (Φαίδρα)",
    roman: "Phaedra",
    homer: "no formula of her own — she is the first of three names in a single line",
    order: "Princess of Crete, queen of Athens",
    domain: "A desire that destroys a stepson",
    house: "The Cretan house",
    father: "Minos",
    mother: "Pasiphae",
    siblings: ["Ariadne", "Deucalion"],
    consorts: ["Theseus"],
    who: "Minos' daughter and Theseus' wife, whose love for her stepson Hippolytus and the false charge that follows it are the matter of tragedies the Odyssey does not tell. Here she is one name in a line of three. The catalogue's compression is at its most extreme with her: the reader is expected to supply an entire play out of a proper noun.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is seen and named with Procris and Ariadne, and nothing whatever is said about her."
    }
  },
  {
    name: "Procris",
    kind: "shade",
    greek: "Prókris (Πρόκρις)",
    roman: "Procris",
    homer: "no formula of her own",
    order: "Princess of Athens",
    domain: "A marriage wrecked by testing it",
    house: "The dead of the Nekyia",
    father: "Erechtheus",
    consorts: ["Cephalus"],
    who: "Erechtheus' daughter and Cephalus' wife, killed in the woods by her own husband's javelin, which never missed, when she followed him out to find whether he was faithful. The story runs on a disguise, a test of loyalty and a fatal misrecognition, which is why later poets kept it and why its bare presence here is tantalising. Homer names her and passes on.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Stands between Phaedra and Ariadne as a name with no story attached to it."
    }
  },
  {
    name: "Ariadne",
    kind: "shade",
    greek: "Ariádnē (Ἀριάδνη)",
    roman: "Ariadna",
    homer: "kalḕ Ariádnē — 'fair Ariadne', koúrē Mínōos ololóphronos, 'the daughter of Minos of the deadly mind'",
    order: "Princess of Crete",
    domain: "The rescue of a stranger, and the loss of him",
    house: "The Cretan house",
    father: "Minos",
    mother: "Pasiphae",
    siblings: ["Phaedra", "Deucalion"],
    consorts: ["Theseus", "Dionysus"],
    who: "Minos' daughter, who brought Theseus out of the labyrinth and sailed with him from Crete towards Athens and never arrived. Homer's version is compressed and peculiar: Artemis killed her on the island of Dia, on evidence given by Dionysus, before Theseus could have any good of her. Whether that means she was already the god's and had broken faith, the poem does not say.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is carried off from Crete towards the sacred hill of Athens and killed on Dia at Dionysus' word, so that her rescuer had no joy of her — a rescue, an elopement, a divine claim and a death inside four lines."
    }
  },
  {
    name: "Maera",
    kind: "shade",
    greek: "Maîra (Μαῖρα)",
    roman: "Maera",
    homer: "no formula of her own",
    order: "Shade in the catalogue",
    domain: "A name the poem does not explain",
    house: "The dead of the Nekyia",
    who: "One of two women named in a single line with no story attached. Ancient readers guessed at a companion of Artemis killed for losing her virginity, or at a daughter of Proetus; nothing in the Odyssey decides between them. She is evidence that this catalogue is quoting a longer poem its first audience already knew.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is seen and named alongside Clymene, immediately before Eriphyle — three women in one line, of whom only the last is given a crime."
    }
  },
  {
    name: "Clymene",
    kind: "shade",
    greek: "Klyménē (Κλυμένη)",
    roman: "Clymene",
    homer: "no formula of her own",
    order: "Shade in the catalogue",
    domain: "A name the poem does not explain",
    house: "The dead of the Nekyia",
    who: "Named beside Maera and left entirely blank. Later sources attach the name to several different women — a wife of Phylacus, a mother of Iphiclus, a daughter of Minyas — and Homer supports none of them. Her presence marks the point where the heroine catalogue has become a bare index of stories now lost.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is named, and nothing more is said."
    }
  },
  {
    name: "Eriphyle",
    kind: "shade",
    greek: "Eriphýlē (Ἐριφύλη)",
    roman: "Eriphyla",
    homer: "stygerḕ Eriphýlē — 'hateful Eriphyle', who took precious gold as the price of her own husband",
    order: "Queen of Argos",
    domain: "A husband sold for a necklace",
    house: "The dead of the Nekyia",
    consorts: ["Amphiaraus"],
    who: "Wife of the seer Amphiaraus, bribed with a golden necklace to send him to the war at Thebes, which he had foreseen would kill him. She is the only woman in the catalogue Homer condemns, and the epithet does the condemning before the clause explains it. She is placed last, so that the parade of mothers and lovers ends on a wife who sold her husband, moments before Agamemnon comes up to talk about his.",
    books: [11, 15],
    prominence: 2,
    acts: {
      "The catalogue of heroines": "Closes the list and is the only entry with a verdict on it. Odysseus says he saw hateful Eriphyle, who took precious gold for the life of her own husband, and then breaks off the catalogue rather than finish it.",
      "Theoclymenus the fugitive": "Is the unnamed cause inside the pedigree of Theoclymenus. Amphiaraus was loved by Zeus and Apollo and never came to the threshold of old age: he died at Thebes because of a woman's gifts, and the phrase is the whole of her."
    }
  },

  /* ------------------------------------------------------- the captains at Troy */
  {
    name: "Agamemnon",
    aliases: ["Atreides", "the son of Atreus", "Agamemnon lord of men"],
    kind: "shade",
    greek: "Agamémnōn (Ἀγαμέμνων)",
    roman: "Agamemnon",
    homer: "ánax andrôn Agamémnōn — 'Agamemnon lord of men'; in the underworld he is simply psychḕ Agamémnonos Atreḯdao, 'the soul of the son of Atreus'",
    order: "King of Mycenae, commander at Troy",
    domain: "The bad homecoming, against which Odysseus' is measured",
    house: "The house of Atreus",
    father: "Atreus",
    siblings: ["Menelaus"],
    consorts: ["Clytemnestra"],
    children: ["Orestes"],
    who: "The commander of the expedition against Troy, murdered at his own welcome feast by Aegisthus and Clytemnestra on the day he reached home. His story is told four times over — by Zeus, by Nestor, by Proteus, and at last by the man himself — and every telling sharpens the same comparison: a returning king, a waiting wife, a house full of men who should not be in it. He is what Odysseus is being spared, and the reason the poem takes so long to let its hero say his own name.",
    books: [1, 3, 4, 11, 24],
    prominence: 1,
    acts: {
      "The council on Olympus": "Is the unnamed half of Zeus' example. Zeus opens the poem complaining that mortals blame the gods for sufferings they earn, and cites Aegisthus, who took another man's wife and killed him coming home after Hermes had warned him not to.",
      "The scattering of the fleet": "Quarrels with Menelaus on the beach at Troy about when to sail, and stays behind to appease Athena with sacrifices. Every disaster in Nestor's account begins with that argument between brothers.",
      "The murder of Agamemnon": "Comes home to a coast watched by a hired lookout, is welcomed in by Aegisthus, and is cut down at the feast with his men round him. Nestor tells it to Telemachus as an argument about the danger of staying away from your own house too long.",
      "Proteus tells the fates": "Is described by the sea-god as dying within sight of what he wanted: driven past Malea, landed at last in his own country, kissing the ground and weeping, and dead before the meal was over.",
      "Agamemnon, Achilles, Ajax": "Weeps as he comes up to the blood, reaches for Odysseus and finds he has no strength in his arms, and tells the murder himself — the tables, the mixing-bowl, the floor running with blood, Cassandra killed across him, his wife refusing even to close his eyes. Then he gives the advice the second half of the poem is built on: come home in secret, and tell a woman nothing, though he adds at once that Penelope is not that kind of wife.",
      "Hermes leads the suitors' souls": "Is standing with Achilles in the asphodel when the suitors are brought down, so that the last conversation among the dead has already begun before the newly dead arrive in it.",
      "Achilles and Agamemnon in the asphodel": "Envies the man he quarrelled with at Troy. Achilles died in battle and was buried by the whole army with his mother and the Muses at the pyre; Agamemnon came home to a bath and a knife. Two ruined returns compare notes.",
      "Amphimedon tells the story": "Recognises Amphimedon as a man who once hosted him on Ithaca, and asks what killed so many young men at one time — the question that pulls the suitors' own version of the poem out of a shade.",
      "Agamemnon praises Penelope": "Cries out that Odysseus has won a wife of great virtue, that the fame of Penelope's constancy will never die, and that the gods will make a hateful song of Clytemnestra. The comparison the poem has been building since its first scene is finally said aloud, by the man it destroyed."
    }
  },
  {
    name: "Achilles",
    aliases: ["Achilleus", "the son of Peleus", "Pelides", "Aeacides"],
    kind: "shade",
    greek: "Achilleús (Ἀχιλλεύς)",
    roman: "Achilles",
    homer: "podárkēs dîos Achilleús — 'swift-footed shining Achilles'; Odysseus greets him at the trench as phértat' Achaiôn, 'mightiest of the Achaeans'",
    order: "Best of the Achaeans, shade in the asphodel",
    domain: "Battle glory, valued from the far side of it",
    house: "The captains at Troy",
    father: "Peleus",
    mother: "Thetis",
    children: ["Neoptolemus"],
    who: "The greatest fighter at Troy, dead before the city fell, and in the Odyssey the authority on what that greatness was worth. The Iliad's Achilles takes a short life in exchange for undying fame; the Odyssey's Achilles, congratulated on the bargain, refuses it in the bluntest lines Homer gives anybody. He is this poem's argument against the poem before it, and its argument for staying alive.",
    books: [3, 8, 11, 24],
    prominence: 1,
    acts: {
      "Nestor's welcome": "Is named in Nestor's roll of the dead at Troy, the list an old man produces before he will answer a boy's question about his father.",
      "Demodocus sings the quarrel": "Is half of the song that makes Odysseus pull his cloak over his head — a quarrel between Achilles and Odysseus at a feast of the gods, which Agamemnon took as the sign that Troy would fall. Homer never says what the quarrel was about, and the man weeping in the hall does not explain.",
      "Agamemnon, Achilles, Ajax": "Asks how a living man dared come down here, is told by Odysseus that no one was ever more blessed, and answers that he would rather be bound to the soil as the hired man of a landless master than be king over all the dead. Then he asks after his son and his father, hears that Neoptolemus fought well and took his share, and goes off across the asphodel taking long strides, satisfied.",
      "Hermes leads the suitors' souls": "Is talking with Agamemnon when the suitors' souls arrive squeaking like bats in a cave, and the dead pick the story up at the point the living have just put it down.",
      "Achilles and Agamemnon in the asphodel": "Hears his own funeral described to him: seventeen days of mourning, his mother coming out of the sea with the Nereids, the Muses singing the dirge, his white bones laid in a golden jar. Agamemnon tells him he was fortunate in his death, which is precisely what he denied to Odysseus in Book XI."
    }
  },
  {
    name: "Patroclus",
    aliases: ["Menoetiades", "the son of Menoetius"],
    kind: "shade",
    greek: "Pátroklos (Πάτροκλος)",
    roman: "Patroclus",
    homer: "Menoitíou álkimos huiós — 'the valiant son of Menoetius', which is the Iliad's formula; in the Odyssey he is named without one",
    order: "Companion of Achilles",
    domain: "The attachment that outlasts the pyre",
    house: "The captains at Troy",
    father: "Menoetius",
    who: "Achilles' closest companion, killed by Hector in the other poem and never separated from him afterwards. In the Odyssey he has no speeches and no scene of his own: he is the shade who arrives at Achilles' shoulder and the bones that share Achilles' urn. That is his entire function here, and it is enough to make the point — some attachments survive an underworld that erases nearly everything else.",
    books: [3, 11, 24],
    prominence: 2,
    acts: {
      "Nestor's welcome": "Is named by Nestor among the best of the Achaeans left lying at Troy.",
      "Agamemnon, Achilles, Ajax": "Comes up to the trench in Achilles' company, with Antilochus and Ajax — the dead who belonged together in life arriving together.",
      "Hermes leads the suitors' souls": "Stands with Achilles, Antilochus and Ajax in the asphodel meadow as Hermes brings the suitors down.",
      "Achilles and Agamemnon in the asphodel": "Shares the golden jar. Agamemnon describes Achilles' white bones laid in with Patroclus' own and Antilochus' set apart, so that the friendship is settled permanently as a fact about a burial."
    }
  },
  {
    name: "Antilochus",
    kind: "shade",
    greek: "Antílochos (Ἀντίλοχος)",
    roman: "Antilochus",
    homer: "amýmōn Antílochos — 'blameless Antilochus'",
    order: "Son of Nestor, dead at Troy",
    domain: "The son a father outlives",
    house: "The captains at Troy",
    father: "Nestor",
    siblings: ["Peisistratus", "Thrasymedes"],
    who: "Nestor's son, the fastest runner of the younger men and killed at Troy defending his father. He is the Odyssey's standing example of a grief that does not close: Nestor names him, Menelaus names him, and his surviving brother weeps for him at a stranger's table. The poem keeps the wound open deliberately, because Telemachus is in the room every time.",
    books: [3, 4, 11, 24],
    prominence: 2,
    acts: {
      "Nestor's welcome": "Is the last name in Nestor's list of the dead and the one that stops the old man — his own son, swift of foot and a fighter both.",
      "Helen's drug": "Is the reason a young man is crying at Menelaus' table. Talk of Odysseus sets the whole hall weeping, and Nestor's living son weeps for the brother he never met, which is what the drug in the wine is brought out to stop.",
      "Agamemnon, Achilles, Ajax": "Arrives among the dead at Achilles' side, one of the group of shades who come to the blood together.",
      "Hermes leads the suitors' souls": "Is still with them in the asphodel when the suitors are led down out of Ithaca."
    }
  },
  {
    name: "Ajax",
    aliases: ["Ajax son of Telamon", "Aias", "Telamonian Ajax", "the greater Ajax"],
    kind: "shade",
    greek: "Aías Telamṓnios (Αἴας Τελαμώνιος)",
    roman: "Aiax / Ajax",
    homer: "hòs áristos éēn eîdós te démas te tôn állōn Danaôn — 'the best of the other Danaans in build and looks, after the blameless son of Peleus'",
    order: "Prince of Salamis, the shade who will not speak",
    domain: "Wounded honour, carried past death",
    house: "The captains at Troy",
    father: "Telamon",
    who: "The second-best fighter at Troy, who lost the contest for Achilles' armour to Odysseus and killed himself over it. In Book XI he is the only shade who refuses both the blood and the conversation. His silence is the most quoted moment of the Nekyia and the hardest judgement anyone in the poem passes on its hero — delivered, characteristically, by a man Odysseus is describing himself.",
    books: [3, 11],
    prominence: 2,
    acts: {
      "Nestor's welcome": "Is named among the dead of Troy in Nestor's list, first of the four.",
      "Agamemnon, Achilles, Ajax": "Stands apart, still angry about the arms of Achilles, which the sons of the Trojans and Pallas Athena awarded to Odysseus. Odysseus speaks to him gently, wishes aloud that the prize had never been set, and gets nothing back: Ajax turns and walks off into Erebus among the other dead, and the poem lets him go without a word."
    }
  },
  {
    name: "Neoptolemus",
    aliases: ["Pyrrhus", "the son of Achilles"],
    kind: "hero",
    greek: "Neoptólemos (Νεοπτόλεμος)",
    roman: "Neoptolemus / Pyrrhus",
    homer: "no formula of his own — he is named as the son of great-hearted Achilles",
    order: "Prince of Scyros, then lord in Phthia",
    domain: "The son who arrives after his father is dead",
    house: "The captains at Troy",
    father: "Achilles",
    mother: "Deidameia",
    consorts: ["Hermione"],
    who: "Achilles' son, fetched from Scyros late in the war and one of the men inside the wooden horse. In the Odyssey he is the good news: a boy who spoke first in council, fought without flinching, took his full share of the spoils and sailed home unwounded. He exists so that Achilles can be told about him — and so that Telemachus can be shown a version of his own situation that came out well.",
    books: [3, 4, 11],
    prominence: 2,
    acts: {
      "The scattering of the fleet": "Is listed by Nestor among those who reached home safely: the Myrmidons were brought back by the son of great-hearted Achilles, one of the few clean returns in the whole account.",
      "The double wedding at Sparta": "Is the absent groom of one of the two weddings. Menelaus is sending Hermione to him in Phthia on a promise made at Troy, and the feast is under way on the day Telemachus walks into the hall.",
      "Agamemnon, Achilles, Ajax": "Is the report that sends Achilles away contented. Odysseus tells him the boy always spoke first and never badly, never hung back in the fighting, killed Eurypylus, and sat inside the horse without trembling while older men wept and shook."
    }
  },
  {
    name: "Peleus",
    kind: "mortal",
    greek: "Pēleús (Πηλεύς)",
    roman: "Peleus",
    homer: "no formula of his own here — Achilles asks after him only as his father, and whether he still holds his honour among the Myrmidons",
    order: "King of Phthia, father of Achilles",
    domain: "Old age with no son left to defend it",
    house: "The captains at Troy",
    consorts: ["Thetis"],
    children: ["Achilles"],
    who: "Achilles' father, married to a sea-goddess and left to grow old in Phthia after his son died at Troy. Homer never says what became of him. In this poem he is a worry rather than a person — the picture of what happens to an old king whose heir is gone, which is exactly the situation of Laertes in his vineyard on Ithaca.",
    books: [11],
    prominence: 2,
    acts: {
      "Agamemnon, Achilles, Ajax": "Is the first thing Achilles asks about: whether Peleus still holds honour among the Myrmidons, or whether men slight him in Hellas and Phthia now that age has taken his hands and feet. Odysseus has no news of him at all, and Achilles says that if he could stand in his father's house for one hour he would put his strength on the men who force the old man down."
    }
  },

  /* ------------------------------------------------- the judged and the punished */
  {
    name: "Minos",
    kind: "shade",
    greek: "Mínōs (Μίνως)",
    roman: "Minos",
    homer: "Diòs aglaòn huión — 'the glorious son of Zeus'; and in the heroines' catalogue Mínōos ololóphronos, 'Minos of the deadly mind'",
    order: "King of Cnossos, judge among the dead",
    domain: "Law, and the giving of verdicts to the dead",
    house: "The Cretan house",
    father: "Zeus",
    mother: "Europa",
    consorts: ["Pasiphae"],
    children: ["Ariadne", "Phaedra", "Deucalion"],
    who: "The king of Cnossos who took counsel with Zeus every ninth year, and who sits in the house of Hades with a golden sceptre while the dead bring him their cases. Homer does not make him a punisher or a weigher of souls; he gives judgements, as he did when alive. He is also the father of both Cretan women in the catalogue, and the anchor of the Cretan identity Odysseus will later invent for himself.",
    books: [11, 19],
    prominence: 2,
    acts: {
      "Minos, Tantalus, Sisyphus, Heracles": "Sits with the golden sceptre giving law to the dead, who put their disputes to him seated and standing about the wide-gated house of Hades. He is the first of the four sights and the only one that is not a punishment.",
      "I entertained him twenty years ago": "Is load-bearing inside the lie. Odysseus tells Penelope he is Aethon, younger brother of Idomeneus, from Cnossos where Minos ruled as the nine-year confidant of Zeus — a real king planted in a false pedigree, which is what makes the pedigree hold."
    }
  },
  {
    name: "Orion",
    kind: "shade",
    greek: "Ōríōn (Ὠρίων)",
    roman: "Orion",
    homer: "pelṓrion Ōríōna — 'huge Orion'; elsewhere klytòn Ōríōna, 'famed Orion'",
    order: "Hunter, and a constellation",
    domain: "The hunt, carried on after death",
    house: "The dead of the Nekyia",
    who: "The giant hunter whom Dawn took for a lover and Artemis shot on Ortygia, and who is also the star-figure a sailor steers by. Homer keeps both at once: the constellation that never bathes in Ocean, and the enormous shade still driving game across a meadow of asphodel with a club of solid bronze. He is the poem's clearest case of a dead man who simply carries on doing what he did.",
    books: [5, 11],
    prominence: 2,
    acts: {
      "Hermes at Ogygia": "Is Calypso's first exhibit when she accuses the gods of begrudging goddesses their mortal lovers: Dawn took Orion, and the gods resented it until Artemis killed him on Ortygia with her painless arrows.",
      "The building of the raft": "Rides the sky as the constellation Odysseus steers by. Calypso tells him to keep the Bear on his left hand — the Bear that watches Orion and alone never bathes in Ocean — and he holds that course, sleepless, for seventeen days.",
      "Minos, Tantalus, Sisyphus, Heracles": "Herds the wild beasts he killed alive on the mountains, driving them together across the asphodel with an unbreakable bronze club. Nothing has been taken from him and nothing granted; he is simply still at it."
    }
  },
  {
    name: "Tityus",
    kind: "shade",
    greek: "Tityós (Τιτυός)",
    roman: "Tityos",
    homer: "Gaíēs erikydéos huión — 'the son of glorious Earth'",
    order: "Giant under punishment",
    domain: "An assault on a goddess, paid for by the body",
    house: "The dead of the Nekyia",
    mother: "Earth",
    who: "A giant, son of Earth, who laid hands on Leto as she went up to Pytho through Panopeus. He lies pinned across nine roods of ground with a vulture on either side tearing at his liver, and his hands cannot beat them off. Homer's underworld has no general apparatus of punishment; it has three named men who touched what belonged to the gods, and Tityus is the plainest of the three.",
    books: [7, 11],
    prominence: 3,
    acts: {
      "Alcinous offers his daughter": "Is the destination of the Phaeacians' most famous voyage. Alcinous, promising convoy, boasts that their ships once carried Rhadamanthus across to see Tityus, son of Earth, and brought him home again the same day.",
      "Minos, Tantalus, Sisyphus, Heracles": "Lies stretched over nine roods with two vultures at his liver, punished for laying hands on Leto, the honoured consort of Zeus, as she walked through Panopeus towards Pytho."
    }
  },
  {
    name: "Tantalus",
    kind: "shade",
    greek: "Tántalos (Τάνταλος)",
    roman: "Tantalus",
    homer: "chalép' álge' échonta — 'suffering hard pains'",
    order: "King under punishment",
    domain: "Appetite held one inch short of satisfaction",
    house: "The dead of the Nekyia",
    who: "A king who ate at the table of the gods and abused it. Homer never says how, and the later stories — the stolen nectar, the child served up to test them — are not in this poem. What the Odyssey supplies is the image: a man standing in water to his chin that drains away when he stoops to it, under fruit that the wind lifts to the clouds when he reaches. The crime is unstated and the shape of the penalty says it: he broke a table he had been welcomed to.",
    books: [11],
    prominence: 2,
    acts: {
      "Minos, Tantalus, Sisyphus, Heracles": "Stands in a pool that vanishes to black earth at his chin whenever he bends, under pears, pomegranates, apples, figs and olives that a gust carries to the shadowy clouds whenever he puts out his hand. Odysseus reports the mechanism twice over, as if measuring it."
    }
  },
  {
    name: "Sisyphus",
    kind: "shade",
    greek: "Sísyphos (Σίσυφος)",
    roman: "Sisyphus",
    homer: "kratér' álge' échonta — 'holding strong pains'",
    order: "King of Ephyre under punishment",
    domain: "Effort that resets at the top",
    house: "The dead of the Nekyia",
    who: "The cleverest man alive in the tradition after Homer, and here a labourer heaving a boulder up a hill that rolls back the instant it tops the rise, sweat running off him and dust standing from his head. The Odyssey gives no crime, only the work. A tradition this poem never endorses makes him Odysseus' real father, having got at Anticleia before Laertes married her; the tragedians use it as an insult, and Homer's silence about it sits oddly beside a scene in which Odysseus stands watching him.",
    books: [11],
    prominence: 2,
    acts: {
      "Minos, Tantalus, Sisyphus, Heracles": "Braces hands and feet and forces the stone to the crest, where its own weight turns it and sends it rolling back down to the plain. Odysseus watches a man doing hard ordinary work that will never be finished, and says nothing to him."
    }
  },
  {
    name: "Heracles",
    aliases: ["Herakles", "Hercules", "the might of Heracles", "the phantom of Heracles"],
    kind: "shade",
    greek: "Hēraklês (Ἡρακλῆς)",
    roman: "Hercules",
    homer: "bíē Hēraklēeíē — 'the might of Heracles'; and here an eídōlon, a phantom, while the man himself feasts among the immortals",
    order: "Son of Zeus, phantom in Hades",
    domain: "Strength spent under another man's orders",
    house: "The dead of the Nekyia",
    father: "Zeus",
    mother: "Alcmene",
    consorts: ["Megara", "Hebe"],
    who: "The strongest of mortals, and the only figure in the poem who is in two places at once: Homer says the phantom is in Hades while Heracles himself is among the immortal gods with Hebe for a wife. Most editors think the reconciling lines were added early, to square an older underworld Heracles with his later godhood, and the seam is visible. He is also, in Book XXI, the man who killed a guest under his own roof for a herd of horses.",
    books: [11, 21],
    prominence: 2,
    acts: {
      "Minos, Tantalus, Sisyphus, Heracles": "Comes on with the dead scattering round him like startled birds, bow drawn, arrow on the string, the terrible golden baldric worked with bears, boars and battles. He recognises Odysseus at once, says that he too was a son of Zeus and served a far lesser man, and names the fetching of the hound out of Hades as the worst thing he was ever ordered to do.",
      "The bow of Iphitus": "Is the reason the great bow is on Ithaca at all. Iphitus had already given it to Odysseus when the two young men met in Messene; Heracles then took Iphitus into his house, killed him there over twelve mares, and kept the horses. The weapon that clears the hall is what was left behind by a murdered guest-friendship."
    }
  },
  {
    name: "Theseus",
    kind: "hero",
    greek: "Thēseús (Θησεύς)",
    roman: "Theseus",
    homer: "theôn erikydéa tékna — 'glorious children of the gods', said of Theseus and Peirithous together",
    order: "King of Athens",
    domain: "The raid on the underworld",
    house: "The dead of the Nekyia",
    consorts: ["Ariadne", "Phaedra"],
    who: "The Athenian hero who took Ariadne out of Crete and later married her sister, and who went down alive into Hades with Peirithous to carry off Persephone. He appears in the Odyssey in two lines only — Odysseus says he waited to see him and was frightened away — and ancient critics already suspected the couplet of being an Athenian insertion. Most modern editors still do.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is the man who takes Ariadne from Crete towards Athens and loses her on Dia before he can bring her home.",
      "Minos, Tantalus, Sisyphus, Heracles": "Is the sight Odysseus stays for and does not get. He says he wanted to see Theseus and Peirithous, glorious children of the gods, and then the tribes of the dead came up with a terrible cry and he ran for the ship. The couplet naming them is the most-doubted line in the book."
    }
  },
  {
    name: "The Gorgon head",
    aliases: ["the Gorgon", "the head of the Gorgon", "Gorgoneion"],
    kind: "monster",
    greek: "Gorgeíē kephalḗ (Γοργείη κεφαλή)",
    roman: "caput Gorgonis",
    homer: "Gorgeíēn kephalḕn deinoîo pelṓrou — 'the Gorgon head of the dread monster'",
    order: "A threat held in reserve by Persephone",
    domain: "The fear that ends the descent",
    who: "Not a creature in this poem but a possibility. It is the thing Odysseus imagines Persephone might send up out of Hades if he stays any longer, and it is never produced. The greatest of the wanderings ends because a man standing among the dead frightens himself with something he has only heard about, and the fright is enough to move him.",
    books: [11],
    prominence: 3,
    acts: {
      "Minos, Tantalus, Sisyphus, Heracles": "Ends the book without appearing. Pale fear takes Odysseus that dread Persephone will send the Gorgon head out of the house of Hades; he goes back to the ship, orders the cables loosed, and the current of the river of Ocean carries them away."
    }
  }
];
