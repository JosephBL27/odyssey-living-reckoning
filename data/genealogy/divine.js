/*
 * The gods, the sea powers, and the forces the poem treats as agents.
 *
 * `homer` records the epithet or formula the poem itself uses. In the Odyssey
 * this matters more than anywhere else in Greek verse: the gods are named by
 * what they are for. Athene is glaukopis, grey-eyed or owl-eyed; Poseidon is
 * enosichthon, the earth-shaker; Hermes is the runner with the golden wand;
 * and Calypso's name simply means the concealer. Where a figure has no
 * formula in this poem, the field says so rather than importing one from the
 * Iliad and letting a reader assume it belongs here.
 *
 * The Sirens, Scylla, and Charybdis are registered here rather than as
 * monsters. In this poem they are not beasts to be fought but powers with
 * fixed terms, and Circe's briefing treats them exactly as she treats the
 * weather.
 */

export const DIVINE_FIGURES = [
  /* ------------------------------------------------------------- Olympians */
  {
    name: "Zeus",
    aliases: ["Zeus / Jupiter", "Jupiter", "Jove", "Kronion", "the son of Kronos", "father of gods and men"],
    kind: "olympian",
    greek: "Zeús (Ζεύς)",
    roman: "Iuppiter / Jupiter",
    homer: "nephelēgeréta Zeús — “Zeus the cloud-gatherer”; also patḕr andrôn te theôn te, “father of men and gods”",
    order: "King of the gods",
    domain: "Sky, weather, oaths, suppliants, and strangers",
    house: "The Olympian house",
    father: "Kronos",
    mother: "Rhea",
    siblings: ["Poseidon", "Hades", "Hera", "Demeter"],
    consorts: ["Hera", "Leto", "Maia"],
    children: ["Athene", "Apollo", "Artemis", "Hermes", "Ares", "Helen", "Heracles", "Minos", "Arcesius"],
    who: "The god who opens the poem by complaining that mortals blame the gods for troubles they bring on themselves beyond their allotted share, and who then spends twenty-four books being proved right. He is also Zeus Xeinios, the protector of guests and suppliants, which is the office the whole plot turns on: every crime in the poem is a crime against hospitality, and every one of them is an offence against him.",
    books: [1, 2, 3, 4, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 24],
    prominence: 1,
    acts: {
      "The council on Olympus": "Opens the poem by using Aegisthus as a test case: the gods warned him explicitly through Hermes and he did it anyway, so mortals cannot blame heaven for what they choose. Then he concedes Athene's point about Odysseus and identifies the obstacle as his own brother.",
      "The second council": "Issues the order the poem has been waiting four books for, with terms attached — no escort, twenty days on a raft, the Phaeacians to send him home rich.",
      "The cave of Polyphemus": "Is invoked by Odysseus as the protector of strangers and suppliants, and dismissed to his face by the Cyclops, who says the Cyclopes take no notice of him.",
      "The month of the south wind": "Grants Helios' demand for justice and promises to smash the ship with a white thunderbolt.",
      "The wreck and the lone survivor": "Blackens the sky the moment Thrinacia is out of sight and destroys the ship and every man in it with a single bolt.",
      "The note like a swallow": "Thunders out of a clear sky the instant the bow is strung, which is the sign Odysseus asked for and gets.",
      "Laertes' cast, and the truce": "Puts a smoking thunderbolt into the ground in front of Athene to stop his own favourite from killing a fleeing crowd, and proposes the amnesty the poem ends on."
    },
    bookActs: {
      1: "Establishes the poem's theology in twenty lines and then leaves the running of it to his daughter."
    }
  },
  {
    name: "Athene",
    aliases: ["Athena", "Athena / Minerva", "Athene / Minerva", "Minerva", "Pallas", "Pallas Athene", "Mentor", "Mentes", "Tritogeneia"],
    kind: "olympian",
    greek: "Athḗnē (Ἀθήνη)",
    roman: "Minerva",
    homer: "glaukôpis Athḗnē — “grey-eyed Athene”, or bright-eyed, or owl-eyed; the word has never been settled and the ambiguity is old",
    order: "Olympian goddess",
    domain: "Cunning, craft, counsel, and the protection of one man",
    house: "The Olympian house",
    father: "Zeus",
    who: "The poem's engine. She sets the plot in motion in Book I, runs both halves of it, and takes more disguises than anyone except Odysseus himself — Mentes, Mentor, a girl with a pitcher, a young shepherd, a swallow on a roof beam. She likes him, she says, because he is like her: shrewd, patient, and never taken in. She is also the only character who tests him after he has won.",
    books: [1, 2, 3, 4, 5, 6, 7, 8, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    prominence: 1,
    acts: {
      "The council on Olympus": "Raises Odysseus while Poseidon is away, and proposes the two-part plan the poem is built from: Hermes to Ogygia, herself to Ithaca.",
      "Athena as Mentes": "Comes down to the gate of Odysseus' court disguised as a Taphian lord, is welcomed by Telemachus, tells him his father is alive, orders him to call an assembly and sail for news, and holds up Orestes as the example. Then she leaves like a bird and he knows he has been talking to a god.",
      "Telemachus prays by the sea": "Takes Mentor's shape, promises to find a ship and crew and to come along herself, and gets him out of Ithaca in a night.",
      "Athena's dream to Nausicaa": "Stands over a sleeping princess in the likeness of a friend and tells her the laundry needs doing, which is how she arranges a shipwrecked man's rescue without either party knowing.",
      "The mist, and the girl with the pitcher": "Meets Odysseus at the edge of town as a small girl carrying a water jar, guides him to the palace, briefs him on Arete, and pours mist round him so nobody sees him walk in.",
      "Athena as a young shepherd": "Meets him on his own beach as a young shepherd in a fine cloak, listens to a complete Cretan fiction, and laughs — then drops the disguise and says they are two of a kind, both good at deception, and that she has never left him.",
      "Odysseus made old": "Withers his skin, ruins his hair, dulls his eyes, and dresses him in rags, and does it again in reverse whenever the plot requires.",
      "Athena as Mentor": "Appears in the hall in Mentor's shape, is asked for help, rebukes Odysseus for having less fight in him than at Troy, and then flies up to a roof beam as a swallow and watches — still testing him — before finally raising the aegis.",
      "The night lengthened, and the tale told over": "Holds Dawn at the edge of Ocean and will not let her yoke her horses, so the reunion night runs long.",
      "Laertes' cast, and the truce": "Puts strength into an old man's arm, stops the battle with a shout, and imposes the oath of peace in Mentor's shape and voice."
    }
  },
  {
    name: "Poseidon",
    aliases: ["Poseidon / Neptune", "Neptune", "the earth-shaker", "the Earth-Holder"],
    kind: "olympian",
    greek: "Poseidôn (Ποσειδῶν)",
    roman: "Neptunus / Neptune",
    homer: "enosíchthōn — “the earth-shaker”; also gaiḗochos, “holder of the earth”, and kyanochaítēs, “dark-haired”",
    order: "Olympian god of the sea",
    domain: "The sea, earthquakes, horses, and a personal grudge",
    house: "The Olympian house",
    father: "Kronos",
    mother: "Rhea",
    siblings: ["Zeus", "Hades", "Hera", "Demeter"],
    children: ["Polyphemus", "Nausithous", "Neleus", "Pelias"],
    who: "The poem's antagonist, and a strikingly limited one: he cannot prevent the return, only delay and damage it, and Zeus says so in Book V. His anger is entirely personal — his son was blinded — and it is legitimate under the poem's own rules, which is why nobody argues him out of it. He is also the only god who wins something at the end, when he petrifies the Phaeacian ship for the crime of being too good at hospitality.",
    books: [1, 3, 5, 8, 9, 11, 13, 23],
    prominence: 1,
    acts: {
      "The council on Olympus": "Is away among the Ethiopians accepting a hecatomb, which is the entire reason the plot can start.",
      "The hecatomb on the beach": "Is the god Nestor's Pylos is sacrificing to when Telemachus lands — eighty-one bulls on nine benches of five hundred men, the poem's largest sacrifice, offered to the god who is ruining Odysseus.",
      "Under the rams, and the curse": "Is prayed to by his blinded son, and grants the specific terms: late, alone, in a stranger's ship, with trouble waiting at home.",
      "Poseidon's storm": "Sees the raft from the mountains of the Solymi on his way back from Ethiopia, understands the other gods changed their minds while he was away, and drives all four winds at it at once.",
      "Teiresias' prophecy": "Is named as the obstacle, and as the god who must be appeased inland with a ram, a bull, and a boar before the account is closed.",
      "The ship turned to stone": "Turns the Phaeacian galley to stone within sight of its own harbour, as he warned Nausithous he would, for escorting a man home too well."
    }
  },
  {
    name: "Hermes",
    aliases: ["Hermes / Mercury", "Mercury", "Argeiphontes", "the runner"],
    kind: "olympian",
    greek: "Hermês (Ἑρμῆς)",
    roman: "Mercurius / Mercury",
    homer: "diáktoros Argeïphóntēs — “the guide, slayer of Argos”; and the golden wand with which he closes men's eyes or wakes them",
    order: "Olympian messenger",
    domain: "Messages, roads, thresholds, theft, and the escort of souls",
    house: "The Olympian house",
    father: "Zeus",
    mother: "Maia",
    children: ["Autolycus", "Pan"],
    who: "The god who carries the order that starts the second half of the poem, and Odysseus' own great-grandfather through Autolycus. He is also the only Olympian who meets Odysseus face to face on the road and hands him something usable. In Book XXIV he leads the suitors' souls to the asphodel, an office he holds nowhere else in Homer, which is one of the reasons that book has been doubted.",
    books: [1, 5, 8, 10, 12, 14, 19, 24],
    prominence: 1,
    acts: {
      "The council on Olympus": "Is named as the god who warned Aegisthus in advance and was ignored, which is Zeus' evidence that mortals ruin themselves.",
      "Hermes at Ogygia": "Skims the sea like a gull, lands on Calypso's island, is fed ambrosia before being asked his business, and delivers Zeus' order without softening it.",
      "Moly, and the sword at the witch's throat": "Meets Odysseus in the glens as a young man with the first down on his lip, explains the drug and the wand, gives him the moly, and tells him to make Circe swear the great oath before going to her bed.",
      "Ares and Aphrodite": "Is asked by Apollo, in the middle of Demodocus' song, whether he would take being trapped in that net for a night with Aphrodite, and says he would take three times the chains and every goddess watching.",
      "Hermes leads the suitors' souls": "Takes up the golden wand and drives a hundred and eight souls squeaking down past Ocean and the white rock to the asphodel."
    }
  },
  {
    name: "Apollo",
    aliases: ["Phoebus", "Phoebus Apollo", "the archer"],
    kind: "olympian",
    greek: "Apóllōn (Ἀπόλλων)",
    roman: "Apollo",
    homer: "Phoîbos Apóllōn — “bright Apollo”; also hekatēbelétēs, “the far-shooter”",
    order: "Olympian god of the bow and of prophecy",
    domain: "Archery, prophecy, sudden death, and song",
    house: "The Olympian house",
    father: "Zeus",
    mother: "Leto",
    siblings: ["Artemis"],
    who: "Present in this poem mostly as a date and a bow. The killing of the suitors happens on his feast day, and Odysseus prays to him before the first shot, which makes the archer god the silent sponsor of the whole massacre — a fact Homer arranges and never states.",
    books: [3, 7, 8, 9, 15, 17, 18, 19, 20, 21, 22],
    prominence: 2,
    acts: {
      "The grease and the fire": "Is the reason Antinous gives for postponing the contest: it is the god's holy day and nobody should be bending bows on it. Homer has arranged for the archer's festival to be the day of the shooting and says nothing at all.",
      "The rags thrown off": "Is prayed to by Odysseus before the first arrow — the only prayer in the killing, and it is to the god of archery on the god's own feast.",
      "The sack of Ismarus": "Is the god whose priest, Maron, Odysseus spares out of respect, and who is therefore indirectly the source of the wine that blinds the Cyclops."
    }
  },
  {
    name: "Artemis",
    aliases: ["Diana"],
    kind: "olympian",
    greek: "Ártemis (Ἄρτεμις)",
    roman: "Diana",
    homer: "iocheáira — “she who pours arrows”; and the comparison of Nausicaa to Artemis going over the mountains",
    order: "Olympian goddess of the hunt",
    domain: "Wild country, unmarried girls, and a gentle sudden death for women",
    house: "The Olympian house",
    father: "Zeus",
    mother: "Leto",
    siblings: ["Apollo"],
    who: "In this poem she is chiefly a way of dying and a way of describing a girl. Penelope prays to her repeatedly for a painless arrow rather than a second marriage, and Odysseus compares Nausicaa to her on the riverbank — the compliment that gets him taken in.",
    books: [4, 5, 6, 11, 15, 17, 18, 20],
    prominence: 3,
    acts: {
      "The supplication": "Is the term of Odysseus' compliment: he says that if Nausicaa is a goddess she must be Artemis, for size and beauty and bearing, which is the safest possible thing to say to an unmarried princess.",
      "Penelope's prayer for death": "Is begged by Penelope to shoot her through the breast now, or let a storm take her, rather than gladden the heart of a lesser man.",
      "Calypso's offer of immortality": "Is named by Calypso in her complaint about divine double standards: she shot Orion in Ortygia for sleeping with Dawn."
    }
  },
  {
    name: "Hera",
    aliases: ["Juno"],
    kind: "olympian",
    greek: "Hḗrā (Ἥρα)",
    roman: "Iuno / Juno",
    homer: "leukṓlenos Hḗrē — “white-armed Hera”",
    order: "Queen of the gods",
    domain: "Marriage and the protection of favourites",
    house: "The Olympian house",
    father: "Kronos",
    mother: "Rhea",
    consorts: ["Zeus"],
    children: ["Ares", "Hephaestus"],
    who: "Almost absent from this poem, which is itself worth noting: the goddess of marriage has no part in its greatest marriage. She appears chiefly as the power that got the Argo through the Wandering Rocks because Jason was dear to her.",
    books: [4, 8, 11, 12, 15, 20],
    prominence: 3,
    acts: {
      "The Wandering Rocks refused": "Is named as the reason the Argo alone ever passed the Planctae — she sent it through because Jason was dear to her, which is the poem's clearest acknowledgement of a rival epic tradition."
    }
  },
  {
    name: "Ares",
    aliases: ["Mars"],
    kind: "olympian",
    greek: "Árēs (Ἄρης)",
    roman: "Mars",
    homer: "brotoloigós — “bane of mortals”; in Demodocus' song simply “gold-reined Ares”",
    order: "Olympian god of war",
    domain: "Battle, and one embarrassing afternoon",
    house: "The Olympian house",
    father: "Zeus",
    mother: "Hera",
    consorts: ["Aphrodite"],
    who: "In the Odyssey he is not a power but the butt of a joke. His only real appearance is inside a song sung at a feast, in which he is caught in bed by an invisible net and laughed at by the assembled gods.",
    books: [8, 11, 14, 16, 20],
    prominence: 3,
    acts: {
      "Ares and Aphrodite": "Is caught with Aphrodite in Hephaestus' invisible chains, exhibited to the laughing gods, and released on a surety — the poem's one piece of pure divine comedy, and it is sung to a man who is crying."
    }
  },
  {
    name: "Aphrodite",
    aliases: ["Venus", "the Cyprian"],
    kind: "olympian",
    greek: "Aphrodítē (Ἀφροδίτη)",
    roman: "Venus",
    homer: "philommeidḕs Aphrodítē — “laughter-loving Aphrodite”; and Kythéreia, “the Cytherean”",
    order: "Olympian goddess of desire",
    domain: "Desire, and the beauty of women in similes",
    house: "The Olympian house",
    father: "Zeus",
    consorts: ["Hephaestus", "Ares"],
    who: "Present in the poem mainly as a standard of comparison and as the subject of Demodocus' second song. She is also, in one line, the goddess who was tending Penelope's daughters when their parents were killed — a domestic detail that does not fit the rest of her.",
    books: [4, 8, 17, 19, 20],
    prominence: 3,
    acts: {
      "Ares and Aphrodite": "Is trapped in her husband's net with Ares, exposed to the gods, and goes off to Paphos afterwards to be bathed and oiled by the Graces, entirely undamaged."
    }
  },
  {
    name: "Hephaestus",
    aliases: ["Vulcan", "the lame god"],
    kind: "olympian",
    greek: "Hḗphaistos (Ἥφαιστος)",
    roman: "Vulcanus / Vulcan",
    homer: "klytotéchnēs — “famed for craft”; and periklytòs amphiguḗeis, “the renowned god lame in both feet”",
    order: "Olympian smith",
    domain: "Metalwork, fine chains, and craft that thinks",
    house: "The Olympian house",
    father: "Zeus",
    mother: "Hera",
    consorts: ["Aphrodite"],
    who: "The god whose method is the poem's own: he does not fight, he builds something that solves the problem. The net he makes to catch his wife is finer than a spider's web and invisible even to gods, which is exactly the kind of victory Odysseus specialises in.",
    books: [4, 6, 7, 8, 15, 23, 24],
    prominence: 3,
    acts: {
      "Ares and Aphrodite": "Hears about the affair from the Sun, forges chains finer than spiderweb and invisible to the gods, sets them round the bed, pretends to leave for Lemnos, and comes back to collect his damages in front of an audience.",
      "The bath, and Athena's grace": "Is named in the simile for Athene's restoration of Odysseus — a craftsman taught by Hephaestus and Athene laying gold over silver."
    }
  },
  {
    name: "Hades",
    aliases: ["Aidoneus", "Pluto", "the lord of the dead"],
    kind: "olympian",
    greek: "Aḯdēs (Ἀΐδης)",
    roman: "Pluto / Dis",
    homer: "the poem uses the name mostly for the place — “the house of Hades” — rather than for a person present in it",
    order: "Lord of the dead",
    domain: "The underworld",
    house: "The Olympian house",
    father: "Kronos",
    mother: "Rhea",
    siblings: ["Zeus", "Poseidon", "Hera", "Demeter"],
    consorts: ["Persephone"],
    who: "Named constantly and present never. In Book XI Odysseus prays to him and to Persephone and deals only with her. The poem's underworld is an administrative arrangement rather than a kingdom with a king in it.",
    books: [3, 4, 6, 9, 10, 11, 12, 14, 15, 20, 23, 24],
    prominence: 3,
    acts: {
      "The trench of blood": "Is prayed to along with Persephone while the crew burn the sacrificed animals, and takes no further part."
    }
  },
  {
    name: "Persephone",
    aliases: ["Proserpina", "dread Persephone"],
    kind: "olympian",
    greek: "Persephónē (Περσεφόνη)",
    roman: "Proserpina",
    homer: "epainḕ Persephóneia — “dread Persephone”, an epithet the poem repeats every time she is named",
    order: "Queen of the dead",
    domain: "The grove at the world's edge, and who is allowed to speak",
    house: "The Olympian house",
    father: "Zeus",
    mother: "Demeter",
    consorts: ["Hades"],
    who: "The active power in the underworld. She is the one who granted Teiresias his intelligence in death while everyone else flits about as a shadow, and she is the one who sends up the catalogue of heroines and then breaks up the crowd. Odysseus' fear that she will send up the Gorgon's head is what ends the book.",
    books: [10, 11, 24],
    prominence: 2,
    acts: {
      "Circe's sailing directions to the dead": "Is named as the keeper of the groves of black poplar and willow at the landing place, and as the power who left Teiresias his mind.",
      "The catalogue of heroines": "Sends up the wives and daughters of the great men one at a time to give their lineage at the trench.",
      "Minos, Tantalus, Sisyphus, Heracles": "Is the reason Odysseus runs: he begins to fear she will send up the Gorgon's head out of the dark, and goes back to the ship."
    }
  },
  {
    name: "Demeter",
    aliases: ["Ceres"],
    kind: "olympian",
    greek: "Dēmḗtēr (Δημήτηρ)",
    roman: "Ceres",
    homer: "xanthḕ Dēmḗtēr — “golden-haired Demeter”",
    order: "Olympian goddess of grain",
    domain: "The harvest, and one field in Crete",
    house: "The Olympian house",
    father: "Kronos",
    mother: "Rhea",
    consorts: ["Iasion"],
    who: "Named twice, once for the winnowing of grain and once as the goddess who lay with Iasion in a thrice-ploughed field and got him killed by a thunderbolt for it — which Calypso cites when she complains about divine double standards.",
    books: [5],
    prominence: 3,
    acts: {
      "Calypso's offer of immortality": "Is the second of Calypso's two precedents: she lay with Iasion in a thrice-ploughed fallow field, and Zeus found out and killed him with a white thunderbolt."
    }
  },
  {
    name: "Iasion",
    aliases: ["Iasion of Crete"],
    kind: "mortal",
    greek: "Iasíōn (Ἰασίων)",
    roman: "Iasion",
    homer: "no formula of his own",
    order: "Mortal lover of a goddess",
    domain: "A thrice-ploughed field",
    house: "The Olympian house",
    consorts: ["Demeter"],
    who: "A mortal killed by Zeus for sleeping with Demeter, cited by Calypso as proof that the gods punish goddesses for what they do freely themselves. He exists in this poem only as an argument.",
    books: [5],
    prominence: 3,
    acts: {
      "Calypso's offer of immortality": "Is named as a man struck with a white thunderbolt for lying with Demeter in a thrice-ploughed field."
    }
  },
  {
    name: "Kronos",
    aliases: ["Cronus", "Saturn"],
    kind: "primordial",
    greek: "Krónos (Κρόνος)",
    roman: "Saturnus / Saturn",
    homer: "ankylomḗtēs — “of the crooked counsel”, which survives chiefly inside the patronymic Kronídēs",
    order: "The previous king of the gods",
    domain: "The generation before this one",
    house: "The Olympian house",
    consorts: ["Rhea"],
    children: ["Zeus", "Poseidon", "Hades", "Hera", "Demeter"],
    who: "The Odyssey has no interest in the succession myth and mentions Kronos almost entirely to make patronymics out of him. He is registered because half the Olympians in the poem are identified as his children.",
    books: [1, 4, 8, 9, 11, 12, 14, 18, 20, 21, 24],
    prominence: 3
  },
  {
    name: "Rhea",
    aliases: [],
    kind: "primordial",
    greek: "Rhéā (Ῥέα)",
    roman: "Rhea / Ops",
    homer: "no formula in this poem",
    order: "Mother of the Olympians",
    domain: "The generation before this one",
    house: "The Olympian house",
    consorts: ["Kronos"],
    children: ["Zeus", "Poseidon", "Hades", "Hera", "Demeter"],
    who: "Named only in genealogy. She is registered so that the Olympian descent chart has a mother in it as well as a father.",
    books: [],
    prominence: 3
  },
  {
    name: "Leto",
    aliases: ["Latona"],
    kind: "divine",
    greek: "Lētṓ (Λητώ)",
    roman: "Latona",
    homer: "no fixed formula in this poem beyond the patronymic she supplies to her children",
    order: "Mother of Apollo and Artemis",
    domain: "The Delian birth",
    house: "The Olympian house",
    consorts: ["Zeus"],
    children: ["Apollo", "Artemis"],
    who: "Named in genealogy and once as the woman Tityus assaulted, for which he is stretched over nine acres with vultures at his liver.",
    books: [6, 11],
    prominence: 3,
    acts: {
      "Minos, Tantalus, Sisyphus, Heracles": "Is the reason Tityus is punished: he laid hands on her as she went to Delphi through Panopeus."
    }
  },
  {
    name: "Maia",
    aliases: [],
    kind: "nymph",
    greek: "Maîa (Μαῖα)",
    roman: "Maia",
    homer: "no formula in this poem",
    order: "Mother of Hermes",
    domain: "Genealogy only",
    house: "The Olympian house",
    consorts: ["Zeus"],
    children: ["Hermes"],
    who: "Registered for the descent chart: Hermes' mother, and therefore three generations above Odysseus by way of Autolycus and Anticleia.",
    books: [14],
    prominence: 3
  },
  {
    name: "Hebe",
    aliases: [],
    kind: "divine",
    greek: "Hḗbē (Ἥβη)",
    roman: "Hebe",
    homer: "kallísphyros — “fair-ankled”",
    order: "Cupbearer of the gods",
    domain: "Youth",
    house: "The Olympian house",
    father: "Zeus",
    mother: "Hera",
    consorts: ["Heracles"],
    who: "Named once, in the line that says the real Heracles is on Olympus married to her while his phantom walks in the asphodel — a reconciliation of two incompatible traditions that many editors think was added later.",
    books: [11],
    prominence: 3,
    acts: {
      "Minos, Tantalus, Sisyphus, Heracles": "Is named as Heracles' immortal wife on Olympus, in the same sentence that shows his phantom terrifying the dead."
    }
  },

  /* ------------------------------------------------------------ sea powers */
  {
    name: "Helios",
    aliases: ["Hyperion", "the Sun", "Helios Hyperion"],
    kind: "divine",
    greek: "Hḗlios (Ἥλιος)",
    roman: "Sol",
    homer: "Hēélios Hyperíōn — “Helios the Overgoer”; also “who sees all things and hears all things”, which is the formula the plot needs",
    order: "The Sun",
    domain: "Sight, daylight, cattle, and the keeping of accounts",
    house: "The line of Helios",
    children: ["Circe", "Aeetes", "Lampetie", "Phaethusa"],
    who: "The god who sees everything, which makes him the poem's witness of record: he tells Hephaestus about Aphrodite and he learns about his own cattle from his daughter. His herds on Thrinacia neither breed nor die, which places them outside every economy, and eating them costs Odysseus his last crew and the poem its entire remaining cast.",
    books: [1, 8, 10, 11, 12, 19, 23],
    prominence: 1,
    acts: {
      "The proem": "Is named in the poem's seventh line as the god whose cattle the companions ate, and who took their day of homecoming away — the ending given away before the story starts.",
      "Ares and Aphrodite": "Is the informant: he sees the affair and tells Hephaestus, which is what the formula about seeing and hearing everything is for.",
      "The month of the south wind": "Is told by his daughter Lampetie that his cattle are dead, demands justice from Zeus, and threatens to go down and shine among the dead instead.",
      "Thrinacia and the oath": "Is the owner of the seven herds of fifty and seven flocks of fifty that neither breed nor die, and the reason for the oath sworn on the beach."
    }
  },
  {
    name: "Lampetie",
    aliases: ["Lampetië"],
    kind: "nymph",
    greek: "Lampetíē (Λαμπετίη)",
    roman: "Lampetie",
    homer: "no formula beyond her office — she and her sister herd the cattle of the Sun",
    order: "Daughter of Helios",
    domain: "The cattle of Thrinacia",
    house: "The line of Helios",
    father: "Helios",
    siblings: ["Phaethusa"],
    who: "One of the two nymphs who watch the cattle of the Sun. She is the informant whose walk to Olympus destroys the last ship in the poem.",
    books: [12],
    prominence: 3,
    acts: {
      "The month of the south wind": "Runs to her father the moment the cattle are killed and tells him, which sets the thunderbolt in motion."
    }
  },
  {
    name: "Phaethusa",
    aliases: [],
    kind: "nymph",
    greek: "Phaéthousa (Φαέθουσα)",
    roman: "Phaethusa",
    homer: "no formula beyond her office",
    order: "Daughter of Helios",
    domain: "The flocks of Thrinacia",
    house: "The line of Helios",
    father: "Helios",
    siblings: ["Lampetie"],
    who: "The second of the two nymphs who watch the herds on Thrinacia. Registered so that the island's guard is complete.",
    books: [12],
    prominence: 3
  },
  {
    name: "Circe",
    aliases: ["Kirke", "the witch of Aeaea"],
    kind: "divine",
    greek: "Kírkē (Κίρκη)",
    roman: "Circe",
    homer: "Kírkē euplókamos, deinḕ theòs audḗessa — “fair-braided Circe, a dread goddess with a human voice”, and the phrase about the human voice is repeated every time she is introduced",
    order: "Goddess of Aeaea",
    domain: "Drugs, transformation, and accurate sailing directions",
    house: "The line of Helios",
    father: "Helios",
    siblings: ["Aeetes"],
    who: "Daughter of the Sun, sister of Aeetes, and the poem's most useful antagonist: she turns twenty-two men into pigs in fifty lines and then, once she has been beaten, provides the most complete and accurate briefing anyone in the poem receives. She keeps Odysseus a year, and the crew have to remind him to leave.",
    books: [8, 9, 10, 11, 12, 23],
    prominence: 1,
    acts: {
      "The dividing of the crew": "Sings at an immortal loom in a house ringed with drugged wolves and lions, feeds Eurylochus' party cheese and barley and honey in Pramnian wine with a drug in it, and turns them into swine with their minds unchanged.",
      "Moly, and the sword at the witch's throat": "Strikes Odysseus with the wand and watches it fail, recognises him at once as the man Hermes always said would come, and is made to swear the great oath before anything else.",
      "The year on Aeaea": "Restores the men with another drug so that they come back younger and taller than before, and then keeps the whole crew feasting for a year.",
      "Circe's sailing directions to the dead": "Tells Odysseus he must go to the house of Hades first, gives the route and the ritual in exact technical detail, and slips a black ram and ewe past the crew unseen.",
      "Elpenor's burial and Circe's second briefing": "Laughs at men who go down to Hades alive and so die twice, then briefs Odysseus on the Sirens, the two routes, Scylla, Charybdis, and the cattle — and repeats Teiresias' warning in her own words."
    }
  },
  {
    name: "Aeetes",
    aliases: ["Aeëtes"],
    kind: "divine",
    greek: "Aiḗtēs (Αἰήτης)",
    roman: "Aeetes",
    homer: "no formula in this poem; he is named as Circe's brother and as the man the Argo sailed home from",
    order: "King of Colchis",
    domain: "A story this poem does not tell",
    house: "The line of Helios",
    father: "Helios",
    siblings: ["Circe"],
    who: "Circe's brother, named twice. He is the poem's pointer to the Argonautic tradition, which it acknowledges and declines to enter.",
    books: [10, 12],
    prominence: 3,
    acts: {
      "The Wandering Rocks refused": "Is named as the king the Argo was sailing home from when Hera brought it through the Planctae."
    }
  },
  {
    name: "Calypso",
    aliases: ["Kalypso", "the daughter of Atlas"],
    kind: "nymph",
    greek: "Kalypsṓ (Καλυψώ)",
    roman: "Calypso",
    homer: "Kalypsṑ dîa theáōn — “Calypso, shining among goddesses”; and her name is from kalýptō, to conceal, which is precisely what she does",
    order: "Goddess of Ogygia",
    domain: "Concealment, and an offer of deathlessness",
    house: "The Olympian house",
    father: "Atlas",
    who: "The nymph who holds Odysseus for seven of his ten missing years on an island the poem calls the navel of the sea. She saved him from the wreck, fed him, and meant to make him immortal and ageless, and he refuses. Her complaint when ordered to release him is one of the poem's sharpest speeches: the gods take mortal lovers whenever they like and cannot bear a goddess to do it.",
    books: [1, 4, 5, 7, 8, 9, 12, 17, 23],
    prominence: 1,
    acts: {
      "Hermes at Ogygia": "Is found singing at her loom in a cave scented with cedar and juniper, with four springs and a vine over the door, and recognises Hermes at once because gods know one another however far apart they live.",
      "Calypso's offer of immortality": "Protests the double standard, naming Orion and Iasion, yields to Zeus, and then offers Odysseus deathlessness and agelessness, and is refused to her face for a mortal woman she is told is her inferior.",
      "The building of the raft": "Gives him a bronze axe fitted to his hands, an adze, augers, cloth for a sail, wine, water, provisions, and a warm following wind."
    }
  },
  {
    name: "Atlas",
    aliases: [],
    kind: "divine",
    greek: "Átlas (Ἄτλας)",
    roman: "Atlas",
    homer: "olóphrōn — “of destructive mind”, who knows the depths of the whole sea and holds the pillars apart that keep earth and sky apart",
    order: "Titan",
    domain: "The pillars of sea and sky",
    house: "The Olympian house",
    children: ["Calypso"],
    who: "Named once, as Calypso's father, with a formula that gives him the whole depth of the sea and the pillars holding earth and sky apart. He is registered because the poem's longest captivity is in the household of the god who keeps the world's dimensions.",
    books: [1],
    prominence: 3,
    acts: {
      "The council on Olympus": "Is named by Athene as Calypso's father — of destructive mind, who knows all the depths of the sea and keeps the tall pillars that hold earth and heaven apart."
    }
  },
  {
    name: "Ino",
    aliases: ["Leucothea", "Ino / Leucothea", "the daughter of Cadmus"],
    kind: "sea power",
    greek: "Inṓ Leukothéā (Ἰνὼ Λευκοθέη)",
    roman: "Ino / Leucothea",
    homer: "Inṑ Leukothéē, hḕ prìn mèn éēn brotòs audḗessa — “Ino Leucothea, who was once a mortal with a human voice”",
    order: "Sea goddess, formerly mortal",
    domain: "Rescue at sea",
    house: "The Olympian house",
    who: "Cadmus' daughter, who was a mortal woman and now has her share of honour in the salt sea. She is the only figure in the poem who was once human and is now divine, and she uses it to save a drowning man on condition he gives the veil back.",
    books: [5],
    prominence: 2,
    acts: {
      "Ino Leucothea's veil": "Surfaces beside the broken raft like a gull, gives Odysseus an immortal veil to wind under his chest, tells him to strip and swim and throw the veil back with his face turned away, and dives under — and he does not believe a word of it until the raft breaks apart."
    }
  },
  {
    name: "Proteus",
    aliases: ["the old man of the sea", "the Egyptian"],
    kind: "sea power",
    greek: "Prōteús (Πρωτεύς)",
    roman: "Proteus",
    homer: "hálios gérōn nēmertḗs — “the unerring old man of the sea”; the epithet nēmertḗs, unerring, is what makes him worth catching",
    order: "Herdsman of the seals",
    domain: "Shape-changing, and telling the truth once held",
    house: "The Olympian house",
    children: ["Eidothea"],
    who: "The sea-god who knows everything and will only say it if you can hold him through every shape he takes. He is the source of the poem's only reliable news about Odysseus before Book V — that he is alive on an island with a nymph and no ship — and it is delivered to Menelaus in Egypt and passed on to Telemachus at second hand.",
    books: [4, 17],
    prominence: 2,
    acts: {
      "Eidothea and the ambush of Proteus": "Comes up at noon to count his seals, is seized by four men lying in sealskins, and turns into a lion, a snake, a leopard, a boar, running water, and a tall tree before giving up.",
      "Proteus tells the fates": "Reports the fates of the returning captains: Ajax son of Oileus drowned for boasting, Agamemnon killed at his own table, and Odysseus alive on an island, weeping, held by a nymph with no ship and no crew. He also tells Menelaus he will not die but be sent to the Elysian plain."
    }
  },
  {
    name: "Eidothea",
    aliases: ["the daughter of Proteus"],
    kind: "sea power",
    greek: "Eidothéē (Εἰδοθέη)",
    roman: "Idothea",
    homer: "no formula of her own; her name means something like “form-goddess”, which suits her father's trade",
    order: "Daughter of Proteus",
    domain: "The ambush at Pharos",
    house: "The Olympian house",
    father: "Proteus",
    who: "The sea-nymph who takes pity on a becalmed king and tells him how to trap her own father, including the practical detail about the sealskins and the ambrosia under the nose. She is the poem's clearest instance of divine help arriving unasked and unexplained.",
    books: [4],
    prominence: 3,
    acts: {
      "Eidothea and the ambush of Proteus": "Meets Menelaus wandering alone on the beach at Pharos, tells him who her father is and how to hold him, flays four seals for the men to hide in, and puts ambrosia under each man's nose against the stench."
    }
  },
  {
    name: "Phorcys",
    aliases: ["the old man of the sea"],
    kind: "sea power",
    greek: "Phórkys (Φόρκυς)",
    roman: "Phorcys",
    homer: "hálios gérōn — “old man of the sea”, the same title Proteus carries",
    order: "Sea power",
    domain: "A harbour on Ithaca, and a monstrous line",
    house: "The line of Poseidon",
    children: ["Thoosa"],
    who: "The sea-elder whose harbour is where Odysseus is put ashore asleep, and whose daughter Thoosa bore Polyphemus to Poseidon. The god's grudge and the landing place share a family, and Homer does not point it out.",
    books: [1, 13],
    prominence: 3,
    acts: {
      "Waking in a land he does not know": "Owns the harbour with two headlands and an olive at its head where the Phaeacians put Odysseus ashore, and the cave of the nymphs above it."
    }
  },
  {
    name: "Thoosa",
    aliases: [],
    kind: "nymph",
    greek: "Thóōsa (Θόωσα)",
    roman: "Thoosa",
    homer: "no formula of her own",
    order: "Nymph of the sea",
    domain: "Genealogy",
    house: "The line of Poseidon",
    father: "Phorcys",
    consorts: ["Poseidon"],
    children: ["Polyphemus"],
    who: "Polyphemus' mother, named once in Book I to explain why the sea god hates Odysseus. The whole plot hangs on a single genealogical line.",
    books: [1],
    prominence: 3,
    acts: {
      "The council on Olympus": "Is named by Zeus as the nymph, daughter of Phorcys, who bore Polyphemus to Poseidon in the hollow caves — which is the explanation for everything that follows."
    }
  },
  {
    name: "Amphitrite",
    aliases: [],
    kind: "sea power",
    greek: "Amphitrítē (Ἀμφιτρίτη)",
    roman: "Amphitrite",
    homer: "kyanôpis Amphitrítē — “dark-eyed Amphitrite”, and her name stands for the open sea itself",
    order: "Queen of the sea",
    domain: "The open water and what lives in it",
    house: "The line of Poseidon",
    consorts: ["Poseidon"],
    who: "Named as the sea's own presence rather than as a character: the surf of Amphitrite booms against the Wandering Rocks, and she is the one who might set a sea-beast on a swimmer.",
    books: [3, 5, 12],
    prominence: 3,
    acts: {
      "The Wandering Rocks refused": "Is the sea itself in Circe's description — the surf of dark-eyed Amphitrite crashing over the Planctae."
    }
  },
  {
    name: "Nereus",
    aliases: ["the old man of the sea"],
    kind: "sea power",
    greek: "Nēreús (Νηρεύς)",
    roman: "Nereus",
    homer: "unnamed in the poem, which speaks of “the daughters of the old man of the sea”",
    order: "Father of the Nereids",
    domain: "The sea's elders",
    house: "The line of Poseidon",
    children: ["Thetis"],
    who: "Registered for the descent chart. The Odyssey never names him directly but speaks of his daughters, who come out of the sea to Achilles' funeral.",
    books: [24],
    prominence: 3
  },
  {
    name: "Thetis",
    aliases: ["the silver-footed"],
    kind: "sea power",
    greek: "Thétis (Θέτις)",
    roman: "Thetis",
    homer: "no fixed formula here; the poem shows her coming out of the sea with her sisters to her son's pyre",
    order: "Sea nymph, mother of Achilles",
    domain: "Grief at a funeral",
    house: "The line of Poseidon",
    father: "Nereus",
    consorts: ["Peleus"],
    children: ["Achilles"],
    who: "Present in the Odyssey almost solely at her son's funeral, where she comes out of the sea with the Nereids and the Muses sing the lament, and provides the golden urn Dionysus gave her.",
    books: [24],
    prominence: 3,
    acts: {
      "Achilles and Agamemnon in the asphodel": "Comes out of the sea with the daughters of the old man when her son is killed, so that a terrible cry goes over the water and the Achaeans nearly panic; then provides the golden two-handled urn for the bones."
    }
  },
  {
    name: "Ocean",
    aliases: ["Okeanos", "the river Ocean"],
    kind: "primordial",
    greek: "Ōkeanós (Ὠκεανός)",
    roman: "Oceanus",
    homer: "bathyrróou Ōkeanoîo — “deep-flowing Ocean”; a river, not a sea, encircling the world",
    order: "The world's boundary",
    domain: "The edge of everything",
    house: "The line of Poseidon",
    who: "The river that runs round the world and marks where the map ends. Odysseus crosses it to reach the dead and crosses back, and the Bear is the constellation that alone never bathes in it.",
    books: [4, 5, 10, 11, 12, 19, 20, 22, 23, 24],
    prominence: 3,
    acts: {
      "The trench of blood": "Is crossed in a day under Circe's north wind, and its far bank is where the Cimmerians live in permanent cloud."
    }
  },
  {
    name: "Eos",
    aliases: ["Dawn", "the rosy-fingered"],
    kind: "divine",
    greek: "Ēṓs (Ἠώς)",
    roman: "Aurora",
    homer: "rhododáktylos Ēṓs — “rosy-fingered Dawn”, the most repeated formula in either poem",
    order: "Goddess of the dawn",
    domain: "The beginning of every day in the poem",
    house: "The Olympian house",
    consorts: ["Tithonus", "Orion"],
    who: "The poem's clock. Her formula opens more days in the Odyssey than any other line, which is what makes Athene's holding her back on the reunion night register as an event rather than a convenience.",
    books: [2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 23],
    prominence: 2,
    acts: {
      "The night lengthened, and the tale told over": "Is held at the edge of Ocean by Athene, who will not let her yoke Lampus and Phaethon, so that the night of the reunion runs long.",
      "Calypso's offer of immortality": "Is cited by Calypso as a goddess who took a mortal lover, Orion, and had him shot by Artemis for it."
    }
  },
  {
    name: "Hypnos",
    aliases: ["Sleep"],
    kind: "divine",
    greek: "Hýpnos (Ὕπνος)",
    roman: "Somnus",
    homer: "the poem treats sleep as an agent — hypnos nḗdymos, “sweet sleep”, which falls on people at decisive moments",
    order: "Sleep",
    domain: "The poem's most consequential force",
    house: "The Olympian house",
    who: "Registered as an agent because the poem repeatedly treats it as one. Sleep loses Ithaca when the wind-bag is opened, sleeps through the killing of the cattle, sleeps through the massacre in Penelope's case, and carries Odysseus home unconscious in a Phaeacian ship.",
    books: [5, 10, 12, 13, 16, 19, 20, 21, 23],
    prominence: 3,
    acts: {
      "Within sight of Ithaca": "Takes Odysseus after nine days at the sheet, which is the direct cause of the poem's worst reversal.",
      "The sleep like death": "Falls on him in the Phaeacian ship so deep that Homer says it was most like death, so that he crosses to Ithaca without knowing it."
    }
  },
  {
    name: "Iris",
    aliases: [],
    kind: "divine",
    greek: "Îris (Ἶρις)",
    roman: "Iris",
    homer: "absent from this poem as a messenger; the Odyssey uses Hermes instead",
    order: "Messenger of the gods",
    domain: "Errands the Odyssey gives to someone else",
    house: "The Olympian house",
    who: "Registered for what she does not do. In the Iliad she carries the messages; in the Odyssey every errand goes to Hermes, and the substitution is one of the small consistent differences between the poems.",
    books: [],
    prominence: 3
  },
  {
    name: "The Muse",
    aliases: ["the Muses", "the daughters of Zeus"],
    kind: "divine",
    greek: "Moûsa (Μοῦσα)",
    roman: "Musa",
    homer: "ándra moi énnepe, Moûsa — “tell me of the man, Muse”, the poem's first line and its only invocation",
    order: "The source of the song",
    domain: "Song, memory, and the singer's authority",
    house: "The Olympian house",
    father: "Zeus",
    who: "Invoked once, in the first line, and thereafter present as the power that gives singers their material. Demodocus is said to have been given the gift of song and taken his sight in exchange, and the Muses sing the lament at Achilles' funeral.",
    books: [1, 8, 24],
    prominence: 2,
    acts: {
      "The proem": "Is asked to tell of the man of many turns and to begin from wherever she likes — the request that commits the poem to starting in the middle.",
      "The assembly and the promise of convoy": "Is named as the goddess who loved Demodocus above all others and gave him both good and evil: she took away his eyes and gave him sweet song.",
      "Achilles and Agamemnon in the asphodel": "The nine Muses sing the lament over Achilles' body for seventeen days."
    }
  },
  {
    name: "Themis",
    aliases: [],
    kind: "divine",
    greek: "Thémis (Θέμις)",
    roman: "Themis",
    homer: "the poem uses themis as a word — what is customary and right — more often than as a person",
    order: "Established custom",
    domain: "Assemblies, and what may properly be done",
    house: "The Olympian house",
    who: "Registered as a force rather than a character. Telemachus invokes her when he calls the assembly: she is the power who breaks up and seats the gatherings of men, and she is the standard the suitors are measured against.",
    books: [2],
    prominence: 3,
    acts: {
      "The first assembly in twenty years": "Is invoked by Telemachus as the power who calls men into assembly and dismisses them — the only formal appeal to custom in a book about a custom that has lapsed."
    }
  },
  {
    name: "The Erinyes",
    aliases: ["the Furies", "the avenging Furies"],
    kind: "divine",
    greek: "Erinýes (Ἐρινύες)",
    roman: "Furiae / Dirae",
    homer: "the poem speaks of a mother's Erinyes — the avengers a parent's curse can set on a child",
    order: "Avengers of kin",
    domain: "Curses inside a family",
    house: "The Olympian house",
    who: "Invoked three times and never seen. Telemachus says his mother would call them down on him if he threw her out; Epicaste leaves them to Oedipus when she hangs herself. They are the poem's mechanism for the crimes no court can reach.",
    books: [2, 11, 15, 17, 20],
    prominence: 3,
    acts: {
      "Antinous and the web of Laertes": "Are Telemachus' reason for refusing to force his mother out: she would call them down on him as she went, and men would blame him.",
      "The catalogue of heroines": "Are left to Oedipus by his mother when she hangs herself, as many as a mother's curse can bring."
    }
  },
  {
    name: "Ate",
    aliases: ["Atē", "ruin"],
    kind: "divine",
    greek: "Átē (Ἄτη)",
    roman: "no Roman form",
    homer: "átē is what the poem calls the blindness that makes disaster look like a good idea",
    order: "Ruinous delusion",
    domain: "The state of mind that precedes a catastrophe",
    house: "The Olympian house",
    who: "A force rather than a person in this poem, and the diagnosis it offers for the suitors: they laugh with jaws that are not their own and eat meat dripping with blood while a seer describes the walls running red, and none of them can see it.",
    books: [4, 12, 18, 20, 21, 22, 23],
    prominence: 3,
    acts: {
      "Theoclymenus sees the hall in blood": "Is what Homer describes without naming: Athene sets an uncontrollable laughter on the suitors, their eyes fill with tears, their meat runs with blood, and they cannot stop laughing."
    }
  },
  {
    name: "Moira",
    aliases: ["fate", "one's portion"],
    kind: "divine",
    greek: "Moîra (Μοῖρα)",
    roman: "Fatum / Parcae",
    homer: "moîra is a share — of meat, of honour, of life — and the same word carries all three",
    order: "Allotment",
    domain: "What is apportioned",
    house: "The Olympian house",
    who: "Registered as a concept the poem treats as an agent. Zeus' opening speech turns on the phrase hypèr móron, beyond one's portion: mortals suffer more than is allotted through their own recklessness, which is the poem's whole theodicy in two words.",
    books: [1, 5, 9, 11, 19, 22, 24],
    prominence: 3,
    acts: {
      "The council on Olympus": "Is the hinge of Zeus' complaint: mortals blame the gods, but they get grief beyond their portion by their own recklessness."
    }
  },
  {
    name: "Eileithyia",
    aliases: [],
    kind: "divine",
    greek: "Eileíthyia (Εἰλείθυια)",
    roman: "Lucina",
    homer: "named once, for the cave at Amnisos in Crete",
    order: "Goddess of childbirth",
    domain: "A harbour on Crete",
    house: "The Olympian house",
    who: "Named once, in one of Odysseus' Cretan lies, as the owner of a cave at Amnisos where a storm forced a ship in. She is registered because the lie's texture depends on real cult geography.",
    books: [19],
    prominence: 3,
    acts: {
      "I entertained him twenty years ago": "Is named in the false tale: the ship was driven into Amnisos, where the cave of Eileithyia is, and only just got clear of the storm."
    }
  },
  {
    name: "Paieon",
    aliases: ["Paeeon", "the healer"],
    kind: "divine",
    greek: "Paiḗōn (Παιήων)",
    roman: "Paeon",
    homer: "named once, as the physician of the gods and the ancestor of Egyptian doctors",
    order: "Physician of the gods",
    domain: "Medicine",
    house: "The Olympian house",
    who: "Named once, to explain why the Egyptian doctors Helen learned her drug from are the best in the world — they are of the race of Paieon.",
    books: [4],
    prominence: 3,
    acts: {
      "Helen's drug": "Is named as the ancestor of the Egyptian physicians, which is the poem's explanation for the nepenthe Helen puts in the wine."
    }
  },

  /* ------------------------------------------------- powers on the sea route */
  {
    name: "The Sirens",
    aliases: ["Seirenes", "the two Sirens"],
    kind: "divine",
    greek: "Seirênes (Σειρῆνες)",
    roman: "Sirenes",
    homer: "ligyrḕ aoidḗ — “clear-toned song”; Homer gives no number, no names, and no bodies, only the voices and the bones",
    order: "Powers of the sea road",
    domain: "Knowledge offered as a lure",
    house: "The line of Poseidon",
    who: "What they offer is not desire but information: they claim to know everything that happened at Troy and everything that happens on the earth, which is exactly the bait for a man defined by wanting to know. Homer never describes them. He describes the meadow: a heap of mouldering bones with the skin shrivelling on them.",
    books: [12, 23],
    prominence: 2,
    acts: {
      "The Sirens and the wax": "Sing to Odysseus by name across a dead-flat sea, offering knowledge of Troy and of everything on earth, and he signals with his eyebrows to be untied and is tied tighter instead."
    }
  },
  {
    name: "Scylla",
    aliases: ["Skylla"],
    kind: "divine",
    greek: "Skýlla (Σκύλλα)",
    roman: "Scylla",
    homer: "deinòn lelakuîa — “barking horribly”; and Homer insists she is not mortal but an athánaton kakón, an immortal evil",
    order: "Power of the strait",
    domain: "A fixed toll on every passing ship",
    house: "The line of Poseidon",
    mother: "Crataeis",
    who: "Twelve dangling feet, six necks, six heads with three rows of teeth in each, in a cave halfway up a cliff no one can climb. Circe's advice about her is the poem's coldest arithmetic: she takes six men from every ship, and fighting her costs six more, so run.",
    books: [12, 23],
    prominence: 2,
    acts: {
      "Scylla and Charybdis": "Takes six men out of the ship while everyone is watching Charybdis, and lifts them into the cave calling Odysseus' name — the thing he calls the most pitiable sight in all his searching of the sea."
    }
  },
  {
    name: "Charybdis",
    aliases: ["Kharybdis"],
    kind: "divine",
    greek: "Chárybdis (Χάρυβδις)",
    roman: "Charybdis",
    homer: "dîa Chárybdis — the same adjective of brightness the poem gives to goddesses and kings, attached to a whirlpool",
    order: "Power of the strait",
    domain: "The water going down and coming up",
    house: "The line of Poseidon",
    who: "The whirlpool under the fig tree, which sucks the black water down and vomits it up three times a day and cannot be survived by a ship. Odysseus meets her twice — once at a distance with a crew, and once alone hanging off the fig tree like a bat.",
    books: [12, 23],
    prominence: 2,
    acts: {
      "Scylla and Charybdis": "Sucks the sea down to the black sand while the crew stare at her, which is what lets Scylla take six men from the other side.",
      "Back to Charybdis": "Swallows the wreckage of the last ship and gives it back late in the afternoon, while Odysseus hangs from the fig tree above waiting for it."
    }
  },

  /* ------------------------------------------------------------- the winds */
  {
    name: "Aeolus",
    aliases: ["Aeolus Hippotades", "the wind-king", "Aiolos"],
    kind: "divine",
    greek: "Aíolos Hippotádēs (Αἴολος Ἱπποτάδης)",
    roman: "Aeolus",
    homer: "phílos athanátoisi theoîsin — “dear to the immortal gods”, and appointed by Zeus tamíēs anémōn, steward of the winds",
    order: "Keeper of the winds",
    domain: "The bronze-walled floating island, and every wind but one",
    house: "The wind-king and the Aeolids",
    who: "The poem's perfect host: a month of hospitality, the whole story of Troy asked for and listened to, and a departure gift that actually works. He is also the man who throws Odysseus out on the second visit on theological grounds — it is not lawful to help a man the gods hate — which is the poem's clearest statement that guest-friendship has a limit.",
    books: [10, 11, 12, 23],
    prominence: 2,
    acts: {
      "The bag of winds": "Keeps Odysseus a month, asks for the whole story of Troy, bags every contrary wind in a flayed ox-hide tied with silver, and leaves out the west wind to carry him home.",
      "Aeolus refuses a second time": "Throws him out of the hall, on the grounds that a man who comes back like this is plainly hated by the gods and it is not lawful to help him."
    }
  },
  {
    name: "Boreas",
    aliases: ["the north wind"],
    kind: "divine",
    greek: "Boréās (Βορέας)",
    roman: "Aquilo",
    homer: "the winds are named as agents throughout — Boreas raises a great wave, or is sent to flatten one",
    order: "The north wind",
    domain: "Weather from the north",
    house: "The wind-king and the Aeolids",
    who: "One of the four winds Poseidon looses on the raft together, and the one Athene calls up to flatten the swell in front of a swimming man. Registered because the poem treats each wind as a distinct actor.",
    books: [5, 9, 10, 12, 13, 14, 19],
    prominence: 3,
    acts: {
      "Poseidon's storm": "Is one of the four winds driven against each other at once when Poseidon takes up the trident.",
      "The landfall on Scheria": "Is called up by Athene, alone of the winds, to break the swell in front of Odysseus so he can reach the coast."
    }
  },
  {
    name: "Notus",
    aliases: ["the south wind"],
    kind: "divine",
    greek: "Nótos (Νότος)",
    roman: "Auster",
    homer: "named among the four winds Poseidon rouses",
    order: "The south wind",
    domain: "Weather from the south",
    house: "The wind-king and the Aeolids",
    who: "The wind that blows for a solid month on Thrinacia and traps the crew there until the food runs out. More damage in the poem is done by this wind than by any monster.",
    books: [5, 12],
    prominence: 3,
    acts: {
      "The month of the south wind": "Blows for a full month with no other wind at all, which is what empties the stores and starts the argument about the cattle."
    }
  },
  {
    name: "Zephyrus",
    aliases: ["the west wind"],
    kind: "divine",
    greek: "Zéphyros (Ζέφυρος)",
    roman: "Favonius",
    homer: "in Scheria the west wind blows continuously in Alcinous' orchard, ripening one crop while it swells the next",
    order: "The west wind",
    domain: "Weather from the west",
    house: "The wind-king and the Aeolids",
    who: "The wind Aeolus leaves out of the bag to carry the ships home, and the one that blows perpetually in the Phaeacian garden so that pear ripens on pear and fig on fig all year.",
    books: [2, 4, 5, 7, 10, 12, 14, 19],
    prominence: 3,
    acts: {
      "The bag of winds": "Is the one wind Aeolus leaves free, to blow the fleet home.",
      "The bronze walls and the garden": "Blows continuously through Alcinous' orchard, bringing one fruit on while it ripens the last, so nothing there is ever out of season."
    }
  },
  {
    name: "Eurus",
    aliases: ["the east wind"],
    kind: "divine",
    greek: "Eûros (Εὖρος)",
    roman: "Eurus / Vulturnus",
    homer: "named among the four winds Poseidon rouses against the raft",
    order: "The east wind",
    domain: "Weather from the east",
    house: "The wind-king and the Aeolids",
    who: "The fourth of the winds, named in the storm passages. Registered so that the poem's wind-roster is complete, since it treats them as four distinct powers rather than as weather.",
    books: [5, 12, 19],
    prominence: 3,
    acts: {
      "Poseidon's storm": "Is one of the four winds set against one another over the raft."
    }
  },
  {
    name: "The nymphs of the cave",
    aliases: ["the naiads", "the nymphs of Ithaca", "the naiad nymphs"],
    kind: "nymph",
    greek: "Nýmphai Nēïádes (Νύμφαι Νηϊάδες)",
    roman: "Nymphae",
    homer: "the cave at the harbour of Phorcys is theirs, with stone looms in it where they weave sea-purple cloth",
    order: "Nymphs of the Ithacan spring",
    domain: "The cave above the harbour, and the treasure hidden in it",
    house: "The line of Poseidon",
    who: "The nymphs of the cave at the head of Odysseus' own harbour, with stone mixing bowls and stone looms where they weave sea-purple, and two doors — one for men and one that only gods use. Eumaeus sacrifices to them at every meal, which is the poem's one glimpse of ordinary Ithacan piety.",
    books: [13, 14, 17],
    prominence: 3,
    acts: {
      "The cave of the Nymphs": "Own the cave where Odysseus and Athene stack the Phaeacian tripods and cauldrons and gold out of sight, and where he prays with his hands raised as soon as he knows where he is.",
      "The guest-portion": "Are given the first portion of the sacrifice by Eumaeus, along with Hermes, before the guest is fed."
    }
  }
];
