/*
 * The counter-nostos, and the two courts Telemachus visits.
 *
 * The house of Atreus is the example the whole Odyssey is measured against:
 * a king who came home on time and was killed at his own table, a wife who
 * did it, and a son who avenged him. Homer names the pattern in the poem's
 * first divine council and returns to it four more times, adjusting the
 * emphasis each time, which is the best evidence we have that the Oresteia
 * tradition was still in flux when the poem was made.
 *
 * Pylos and Sparta are here too, because Telemachus' journey is a tour of
 * successful homecomings, and both of them are haunted.
 *
 * Odysseus, Penelope, Telemachus, Athene and Zeus are registered by other
 * clusters and referenced here by name only.
 */

export const ATREID_FIGURES = [
  /* -------------------------------------------------- the house of Atreus */
  {
    name: "Tantalus",
    aliases: [],
    kind: "shade",
    greek: "Tántalos (Τάνταλος)",
    roman: "Tantalus",
    homer: "no formula; the poem shows him rather than naming him — standing in a lake that drains when he stoops",
    order: "Founder of the line, punished",
    domain: "The water that will not be drunk",
    house: "The house of Atreus",
    children: ["Pelops"],
    who: "The line's founder and one of the poem's three great sufferers. The Odyssey never says what he did, only what it costs him: water at his chin that drains away when he bends, and fruit above his head that the wind lifts out of reach. The house's later history reads as an inheritance of that appetite.",
    books: [11],
    prominence: 3,
    acts: {
      "Minos, Tantalus, Sisyphus, Heracles": "Stands in a lake with the water lapping his chin; every time he stoops to drink it drains away and shows black earth, and every time he reaches for the pears and pomegranates and figs above him the wind tosses them up to the clouds."
    }
  },
  {
    name: "Pelops",
    aliases: [],
    kind: "mortal",
    greek: "Pélops (Πέλοψ)",
    roman: "Pelops",
    homer: "named only in the sceptre's descent and in the name of the Peloponnese",
    order: "Father of Atreus and Thyestes",
    domain: "The peninsula named after him",
    house: "The house of Atreus",
    father: "Tantalus",
    children: ["Atreus", "Thyestes"],
    who: "Registered for the descent. The Odyssey has almost no interest in him, but it needs him to get from Tantalus to Agamemnon, and his name is in the ground the poem walks over.",
    books: [11],
    prominence: 3
  },
  {
    name: "Atreus",
    aliases: [],
    kind: "mortal",
    greek: "Atreús (Ἀτρεύς)",
    roman: "Atreus",
    homer: "survives almost entirely inside the patronymic Atreḯdēs — “son of Atreus” — which is how both his sons are usually named",
    order: "King of Mycenae",
    domain: "The name his sons are called by",
    house: "The house of Atreus",
    father: "Pelops",
    siblings: ["Thyestes"],
    children: ["Agamemnon", "Menelaus"],
    who: "Present in the poem as a patronymic and nothing else. The Odyssey does not tell the story of the feast of Thyestes; it assumes an audience who knows why this house is what it is and declines to explain.",
    books: [1, 3, 4, 11, 13, 14, 15, 17, 24],
    prominence: 3
  },
  {
    name: "Thyestes",
    aliases: [],
    kind: "mortal",
    greek: "Thyéstēs (Θυέστης)",
    roman: "Thyestes",
    homer: "named once, as the man Atreus' sceptre passed to and as Aegisthus' father",
    order: "Brother of Atreus",
    domain: "The other half of the quarrel",
    house: "The house of Atreus",
    father: "Pelops",
    siblings: ["Atreus"],
    children: ["Aegisthus"],
    who: "The brother whose son murders the nephew. Homer gives the bare genealogy and none of the horrors later poets built on it, which is itself informative: the Odyssey wants the feud as a structure, not as a subject.",
    books: [4],
    prominence: 3
  },
  {
    name: "Agamemnon",
    aliases: ["Atreides", "the son of Atreus", "the lord of men"],
    kind: "shade",
    greek: "Agamémnōn (Ἀγαμέμνων)",
    roman: "Agamemnon",
    homer: "ánax andrôn Agamémnōn — “Agamemnon, lord of men”; in the underworld he becomes psychḕ Atreḯdeō Agamémnonos",
    order: "Commander at Troy, killed on arrival",
    domain: "The homecoming that failed",
    house: "The house of Atreus",
    father: "Atreus",
    siblings: ["Menelaus"],
    consorts: ["Clytemnestra"],
    children: ["Orestes"],
    who: "The poem's control case. He got home first and fastest and was killed at dinner by his wife's lover, and his story is told five separate times with the emphasis moving each time. He is also the poem's most generous witness: from the underworld he delivers the verdict that Penelope's virtue will be sung about for ever, and that his own wife has given all women a bad name.",
    books: [1, 3, 4, 8, 9, 11, 13, 14, 24],
    prominence: 1,
    acts: {
      "The murder of Agamemnon": "Is the subject of Nestor's long digression at Pylos: away seven years while Aegisthus courted his wife, brought home by a lookout paid a talent of gold, and killed at a feast with all his men.",
      "Proteus tells the fates": "Is reported dead by Proteus to his own brother, who sits down in the sand and cries and does not want to live.",
      "Agamemnon, Achilles, Ajax": "Comes weeping to the trench of blood and describes being cut down like an ox at a manger, his men slaughtered round the mixing bowl like white-tusked pigs, and Clytemnestra turning away without closing his eyes or his mouth. Then he warns Odysseus to come home in secret — and immediately excepts Penelope.",
      "Achilles and Agamemnon in the asphodel": "Tells Achilles he was the lucky one: seventeen days of mourning, Thetis out of the sea, the Muses singing, a golden urn, and a mound on a headland visible from far out at sea.",
      "Amphimedon tells the story": "Recognises Amphimedon, whose father he once stayed with, and asks what killed so many young men of quality at once.",
      "Agamemnon praises Penelope": "Delivers the poem's own verdict: the immortals will make a lovely song about faithful Penelope, and a hateful one about the daughter of Tyndareus, who has given all women a bad name, even the good ones."
    }
  },
  {
    name: "Menelaus",
    aliases: ["Atreides", "the red-haired"],
    kind: "hero",
    greek: "Menélaos (Μενέλαος)",
    roman: "Menelaus",
    homer: "xanthòs Menélaos — “red-haired Menelaus”; also boḕn agathós, “good at the war-cry”",
    order: "King of Sparta",
    domain: "A homecoming that worked, and a house full of it",
    house: "The house of Atreus",
    father: "Atreus",
    siblings: ["Agamemnon"],
    consorts: ["Helen"],
    children: ["Hermione", "Megapenthes"],
    who: "The brother who survived, and the poem's picture of what survival costs. His palace gleams like the sun, he has more treasure than anyone, and he says outright that he takes no pleasure in it because of the men who died getting it. He is the only man in the poem promised he will never die — Proteus tells him he is going to the Elysian plain, on the grounds that he is married to Helen and therefore Zeus' son-in-law.",
    books: [1, 3, 4, 8, 11, 13, 14, 15, 17],
    prominence: 1,
    acts: {
      "The double wedding at Sparta": "Is celebrating two weddings at once when Telemachus arrives, welcomes him without knowing who he is, and criticises his own steward for even asking whether to take strangers in.",
      "Helen's drug": "Weeps with everyone else over Odysseus, and is the one who names him as the man whose loss he grieves most and whose fate nobody knows.",
      "Menelaus and the wooden horse": "Answers Helen's story with a darker one: she walked round the horse three times calling to the men inside in the voices of their own wives, and Odysseus held Anticlus' mouth shut until she went away.",
      "The calm at Pharos": "Is held twenty days on an island off Egypt with no wind, his provisions and his men's spirits going, because he failed to make the offering the gods were owed.",
      "Eidothea and the ambush of Proteus": "Lies in a stinking sealskin at noon with three men, holds the old man through lion, snake, leopard, boar, water, and tree, and does not let go.",
      "Proteus tells the fates": "Learns of Ajax's death and his own brother's murder, and that Odysseus is alive on an island, and is told he himself will not die but be carried to the Elysian plain.",
      "Menelaus' gifts and the eagle omen": "Sends Telemachus off with a mixing bowl made by Hephaestus, and reads the eagle carrying a white goose as Odysseus coming home to punish the suitors — or as a sign already fulfilled."
    }
  },
  {
    name: "Clytemnestra",
    aliases: ["the daughter of Tyndareus"],
    kind: "mortal",
    greek: "Klytaimnḗstrā (Κλυταιμνήστρα)",
    roman: "Clytemnestra",
    homer: "no formula of her own in this poem; she is named by patronymic and by what she did",
    order: "Queen of Mycenae",
    domain: "The murder the poem keeps returning to",
    house: "The house of Tyndareus",
    father: "Tyndareus",
    mother: "Leda",
    siblings: ["Helen", "Castor", "Polydeuces"],
    consorts: ["Agamemnon", "Aegisthus"],
    children: ["Orestes"],
    who: "The Odyssey's anti-Penelope, and its account of her shifts. Nestor says she was a good woman who resisted for a long time until the singer left to guard her was marooned on an island; Agamemnon's shade says she killed him herself and would not close his eyes. The poem never reconciles the two, and both are in it on purpose.",
    books: [3, 4, 11, 24],
    prominence: 2,
    acts: {
      "The murder of Agamemnon": "Is described by Nestor as a woman of good understanding who refused Aegisthus at first, guarded by a singer her husband left behind — until Aegisthus marooned the singer on a desert island and took her home willingly.",
      "Agamemnon, Achilles, Ajax": "Is described by her husband's shade as the one who killed Cassandra beside him and who turned away as he died without closing his eyes or his mouth — and as the reason he tells Odysseus never to trust a woman with everything.",
      "Agamemnon praises Penelope": "Is the other half of the poem's final verdict: the song about her will be hateful, and she has given a bad name to all women."
    }
  },
  {
    name: "Aegisthus",
    aliases: ["Aigisthos"],
    kind: "mortal",
    greek: "Aígisthos (Αἴγισθος)",
    roman: "Aegisthus",
    homer: "amýmōn — “blameless” — which the poem attaches to him as a fixed formula while describing his crime, one of the clearest signs that formulae are metrical furniture and not judgements",
    order: "Usurper at Mycenae",
    domain: "Seven years of a stolen house",
    house: "The house of Atreus",
    father: "Thyestes",
    consorts: ["Clytemnestra"],
    who: "The poem's opening example and its clearest moral case: warned in advance and by name through Hermes not to court the wife or kill the man, he did both, and Zeus cites him in the first divine council as proof that mortals ruin themselves. He is also the exact template of the suitors — a man eating another man's house on the assumption that the owner is not coming back.",
    books: [1, 3, 4, 11, 13, 24],
    prominence: 2,
    acts: {
      "The council on Olympus": "Is Zeus' evidence: the gods sent Hermes to tell him plainly not to kill Agamemnon or court his wife, because Orestes would avenge it, and he did it anyway and paid in full.",
      "The murder of Agamemnon": "Courts Clytemnestra for seven years, maroons the guardian singer on a desert island, posts a lookout for a talent of gold, and kills Agamemnon and all his men at a feast.",
      "Agamemnon, Achilles, Ajax": "Is named by his victim as the man who invited him home, gave him dinner, and cut him down at the table like an ox at a manger."
    }
  },
  {
    name: "Orestes",
    aliases: [],
    kind: "mortal",
    greek: "Oréstēs (Ὀρέστης)",
    roman: "Orestes",
    homer: "no epithet; the poem cites him as an example rather than describing him",
    order: "Avenger of his father",
    domain: "The model held up to Telemachus",
    house: "The house of Atreus",
    father: "Agamemnon",
    mother: "Clytemnestra",
    who: "The poem's standing example of what a son should do, held up to Telemachus three separate times by three different speakers. Homer is notably careful about the matricide: Orestes kills Aegisthus, and the poem says he buried his mother and the hateful Aegisthus in the same sentence without ever saying he killed her.",
    books: [1, 3, 4, 11],
    prominence: 2,
    acts: {
      "The council on Olympus": "Is named by Zeus as the avenger Aegisthus was warned about and ignored.",
      "Athena as Mentes": "Is held up to Telemachus by the disguised goddess: have you not heard what fame Orestes won among men for killing his father's murderer?",
      "The murder of Agamemnon": "Comes back from Athens in the eighth year, kills Aegisthus, and gives the funeral feast on the same day Menelaus arrives with his ships full of treasure.",
      "Agamemnon, Achilles, Ajax": "Is the son his father asks after at the trench of blood, and Odysseus has no news of him at all."
    }
  },
  {
    name: "Cassandra",
    aliases: ["the daughter of Priam"],
    kind: "shade",
    greek: "Kassándrē (Κασσάνδρη)",
    roman: "Cassandra",
    homer: "named once, as the woman Clytemnestra killed beside Agamemnon; the Odyssey knows nothing of her prophecy",
    order: "Trojan captive",
    domain: "One line in another person's murder",
    house: "The house of Atreus",
    who: "Named a single time, and only as a casualty. The Odyssey has no interest in her gift; it registers her death as the last and most pitiful thing Agamemnon saw.",
    books: [11],
    prominence: 3,
    acts: {
      "Agamemnon, Achilles, Ajax": "Is killed beside Agamemnon by Clytemnestra as he lies dying, and he says he heard the most pitiful cry from her as he tried to lift his hands from the floor."
    }
  },

  /* ----------------------------------------------- the house of Tyndareus */
  {
    name: "Tyndareus",
    aliases: [],
    kind: "mortal",
    greek: "Tyndáreōs (Τυνδάρεως)",
    roman: "Tyndareus",
    homer: "survives in the patronymic Tyndaréou kourē, “daughter of Tyndareus”, which is how the poem names Clytemnestra at its close",
    order: "King of Sparta before Menelaus",
    domain: "Two daughters who ruin two houses",
    house: "The house of Tyndareus",
    consorts: ["Leda"],
    children: ["Helen", "Clytemnestra", "Castor", "Polydeuces"],
    who: "Registered for the descent chart. His importance is that his name is the one Agamemnon uses in the poem's last judgement — not Clytemnestra's own, but her father's.",
    books: [11, 24],
    prominence: 3
  },
  {
    name: "Leda",
    aliases: [],
    kind: "shade",
    greek: "Lḗdā (Λήδα)",
    roman: "Leda",
    homer: "Lḗdēn ... Tyndaréou álochon — “Leda, the wife of Tyndareus”",
    order: "Mother of the Dioscuri",
    domain: "The catalogue of heroines",
    house: "The house of Tyndareus",
    consorts: ["Tyndareus", "Zeus"],
    children: ["Helen", "Clytemnestra", "Castor", "Polydeuces"],
    who: "Named in the catalogue of the dead as the mother of Castor and Polydeuces, who share a death between them. The Odyssey does not tell the story of the swan.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Comes to the trench as the wife of Tyndareus and mother of the two horsemen whom the earth holds alive, honoured by Zeus below the ground, living and dying on alternate days."
    }
  },
  {
    name: "Helen",
    aliases: ["Helen of Argos", "the daughter of Zeus"],
    kind: "mortal",
    greek: "Helénē (Ἑλένη)",
    roman: "Helena / Helen",
    homer: "Diòs ekgegauîa — “sprung from Zeus”; and Argeíē Helénē, “Helen of Argos”, the name that carries the war in it",
    order: "Queen of Sparta",
    domain: "The war's cause, back in her own hall",
    house: "The house of Tyndareus",
    father: "Zeus",
    mother: "Leda",
    siblings: ["Clytemnestra", "Castor", "Polydeuces"],
    consorts: ["Menelaus"],
    children: ["Hermione"],
    who: "The most disconcerting person in the poem: the cause of ten years of war, sitting at home in Sparta with a golden distaff, recognising Telemachus by his resemblance to his father, drugging the wine so that nobody cries, and telling a story about Troy in which she was already on the Greek side. Her version and her husband's do not agree, and neither of them says so.",
    books: [4, 11, 15, 17, 22, 23],
    prominence: 1,
    acts: {
      "The double wedding at Sparta": "Comes down from her scented chamber with a silver work-basket on wheels and a golden distaff, and identifies Telemachus from his resemblance to Odysseus before anyone has said a word.",
      "Helen's drug": "Puts a drug into the wine that stops grief and anger for a day, learned in Egypt from Polydamna, then tells a story of Odysseus entering Troy disguised as a beggar — a story in which she recognised him, bathed him, and had already changed sides.",
      "Menelaus and the wooden horse": "Is the subject of her husband's answering story: she walked three times round the horse, feeling the hollow timber, calling to the men inside in the voices of each of their wives.",
      "Menelaus' gifts and the eagle omen": "Gives Telemachus a robe she wove herself for his future bride, and reads the eagle with the goose as Odysseus already home and preparing the killing."
    }
  },
  {
    name: "Castor",
    aliases: ["Kastor", "the horse-tamer"],
    kind: "mortal",
    greek: "Kástōr (Κάστωρ)",
    roman: "Castor",
    homer: "Kástora hippódamon — “Castor the horse-tamer”",
    order: "One of the Dioscuri",
    domain: "Half a life, on alternate days",
    house: "The house of Tyndareus",
    father: "Tyndareus",
    mother: "Leda",
    siblings: ["Polydeuces", "Helen", "Clytemnestra"],
    who: "One of the twins the earth holds while they are still alive, honoured by Zeus below the ground, alive on alternate days and dead on the others. It is the poem's strangest piece of theology and it is delivered in three lines without comment.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is named with his brother among the dead who are not quite dead: they live and die on alternate days and have honour equal to the gods."
    }
  },
  {
    name: "Polydeuces",
    aliases: ["Pollux", "the boxer"],
    kind: "mortal",
    greek: "Polydeúkēs (Πολυδεύκης)",
    roman: "Pollux",
    homer: "pùx agathòn Polydeúkea — “Polydeuces good with his fists”",
    order: "One of the Dioscuri",
    domain: "Half a life, on alternate days",
    house: "The house of Tyndareus",
    father: "Tyndareus",
    mother: "Leda",
    siblings: ["Castor", "Helen", "Clytemnestra"],
    who: "Castor's brother, sharing the alternating life. Registered with him because the poem never separates them.",
    books: [11],
    prominence: 3
  },
  {
    name: "Hermione",
    aliases: [],
    kind: "mortal",
    greek: "Hermiónē (Ἑρμιόνη)",
    roman: "Hermione",
    homer: "eîdos échousa chryséēs Aphrodítēs — “with the beauty of golden Aphrodite”",
    order: "Daughter of Menelaus and Helen",
    domain: "One of the two weddings at Sparta",
    house: "The house of Tyndareus",
    father: "Menelaus",
    mother: "Helen",
    who: "Menelaus and Helen's only child, being married off to Neoptolemus on the day Telemachus arrives. Homer notes that the gods gave Helen no child after her, which is a quiet sentence with a great deal in it.",
    books: [4],
    prominence: 3,
    acts: {
      "The double wedding at Sparta": "Is being sent to Neoptolemus at Phthia on the day Telemachus arrives, in the first of the two weddings happening at once."
    }
  },
  {
    name: "Megapenthes",
    aliases: [],
    kind: "mortal",
    greek: "Megapénthēs (Μεγαπένθης)",
    roman: "Megapenthes",
    homer: "his name means “great grief”, and the poem says he was born to Menelaus by a slave woman",
    order: "Son of Menelaus",
    domain: "The second of the two Spartan weddings",
    house: "The house of Tyndareus",
    father: "Menelaus",
    who: "Menelaus' son by a slave woman, being married on the same day as his half-sister. His name is a comment on the household, and Homer supplies it without remark.",
    books: [4, 15],
    prominence: 3,
    acts: {
      "The double wedding at Sparta": "Is being married to the daughter of Alector of Sparta in the second of the two weddings.",
      "Menelaus' gifts and the eagle omen": "Carries the silver mixing bowl out for his father to give to Telemachus."
    }
  },
  {
    name: "Eteoneus",
    aliases: ["the son of Boethous"],
    kind: "servant",
    greek: "Eteōneús (Ἐτεωνεύς)",
    roman: "Eteoneus",
    homer: "therápōn — “squire”, the term for an attendant who is not a slave",
    order: "Menelaus' squire",
    domain: "The door at Sparta",
    house: "The house of Tyndareus",
    who: "The man who asks Menelaus whether to take the strangers in or send them on, and is told off for it at length — the poem's clearest positive statement of what xenia requires, delivered as a rebuke to a servant.",
    books: [4, 15],
    prominence: 3,
    acts: {
      "The double wedding at Sparta": "Asks whether to receive the two strangers or send them elsewhere, and is told he never used to talk like a fool, and to unyoke the horses and bring them in."
    }
  },
  {
    name: "Adraste",
    aliases: [],
    kind: "servant",
    greek: "Adrḗstē (Ἀδρήστη)",
    roman: "Adrasta",
    homer: "one of the three named maids who set Helen's chair",
    order: "Maid at Sparta",
    domain: "Helen's chair",
    house: "The house of Tyndareus",
    who: "Registered with Alcippe and Phylo because Homer names all three when Helen sits down, which is a level of household detail he gives almost nowhere else.",
    books: [4],
    prominence: 3
  },
  {
    name: "Alcippe",
    aliases: [],
    kind: "servant",
    greek: "Alkíppē (Ἀλκίππη)",
    roman: "Alcippe",
    homer: "one of the three named maids who attend Helen",
    order: "Maid at Sparta",
    domain: "The soft wool rug",
    house: "The house of Tyndareus",
    who: "One of Helen's three named attendants, registered for the same reason as Adraste.",
    books: [4],
    prominence: 3
  },
  {
    name: "Phylo",
    aliases: [],
    kind: "servant",
    greek: "Phylṓ (Φυλώ)",
    roman: "Phylo",
    homer: "the maid who brings the silver work-basket on wheels with the golden rim",
    order: "Maid at Sparta",
    domain: "The work-basket",
    house: "The house of Tyndareus",
    who: "The third of Helen's named maids, who brings out the silver basket on wheels that Alcandre of Egyptian Thebes gave her — an object with a longer provenance than most people in the poem.",
    books: [4],
    prominence: 3
  },

  /* ------------------------------------------------- the house of Neleus */
  {
    name: "Tyro",
    aliases: ["the daughter of Salmoneus"],
    kind: "shade",
    greek: "Tyrṓ (Τυρώ)",
    roman: "Tyro",
    homer: "patròs eugenétao — “of a noble father”; she leads the catalogue of heroines",
    order: "Mother of Pelias and Neleus",
    domain: "The river Enipeus",
    house: "The house of Neleus",
    consorts: ["Poseidon", "Cretheus"],
    children: ["Neleus", "Pelias"],
    who: "First in the catalogue of heroines, and the founder of the Pylian line. She fell in love with the river Enipeus and Poseidon took her in its likeness, throwing a purple wave over them both like a wall.",
    books: [11],
    prominence: 2,
    acts: {
      "The catalogue of heroines": "Tells how she loved the river Enipeus, the most beautiful of rivers, and how Poseidon took her shape-shifted into it at the river mouth, with a dark wave standing round them like a mountain."
    }
  },
  {
    name: "Neleus",
    aliases: [],
    kind: "mortal",
    greek: "Nēleús (Νηλεύς)",
    roman: "Neleus",
    homer: "survives in the patronymic Nēlēḯdēs and in the phrase “Neleian Pylos”",
    order: "Founder of Pylos",
    domain: "The kingdom Nestor inherited",
    house: "The house of Neleus",
    father: "Poseidon",
    mother: "Tyro",
    siblings: ["Pelias"],
    consorts: ["Chloris"],
    children: ["Nestor", "Chromius", "Periclymenus", "Pero"],
    who: "Poseidon's son by Tyro and the founder of the Pylian house. He had twelve sons and Heracles killed eleven of them, which is why the kingdom came to the one who talks.",
    books: [3, 4, 11, 15],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is named as the man who paid a great bride-price for Chloris, the youngest daughter of Amphion, and who fathered Nestor and Pero on her."
    }
  },
  {
    name: "Chloris",
    aliases: [],
    kind: "shade",
    greek: "Chlōrís (Χλωρίς)",
    roman: "Chloris",
    homer: "perikallḗs — “very beautiful”, and bought with countless gifts",
    order: "Queen of Pylos",
    domain: "The bride-price",
    house: "The house of Neleus",
    consorts: ["Neleus"],
    children: ["Nestor", "Chromius", "Periclymenus", "Pero"],
    who: "Nestor's mother, in the catalogue of the dead. Homer records that she was the youngest daughter of Amphion and that Neleus paid countless gifts for her, which is one of the poem's plainest statements of how a marriage was made.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Comes to the trench as the youngest daughter of Amphion, bought by Neleus with countless gifts, and mother of Nestor, Chromius, lordly Periclymenus, and Pero the wonder of her time."
    }
  },
  {
    name: "Nestor",
    aliases: ["the Gerenian horseman", "Neleides"],
    kind: "hero",
    greek: "Néstōr (Νέστωρ)",
    roman: "Nestor",
    homer: "Gerḗnios hippóta Néstōr — “the Gerenian horseman Nestor”, a formula so fixed that it fills half a hexameter on its own",
    order: "King of Pylos",
    domain: "Memory, procedure, and a very long sacrifice",
    house: "The house of Neleus",
    father: "Neleus",
    mother: "Chloris",
    children: ["Peisistratus", "Thrasymedes", "Antilochus", "Echephron", "Stratius", "Aretus", "Perseus", "Polycaste"],
    who: "The oldest man at Troy and the poem's model of a successful return: he sailed straight home, arrived intact, and kept everything. He is also the poem's warning about what memory is worth — he talks at enormous length and has no news at all of the one man Telemachus came to ask about.",
    books: [1, 3, 4, 11, 15, 17, 24],
    prominence: 1,
    acts: {
      "The hecatomb on the beach": "Is found on the shore sacrificing eighty-one bulls to Poseidon with nine benches of five hundred men, and has the strangers brought up and fed before anyone asks their names.",
      "Nestor's welcome": "Recites the roll of the dead at Troy — Ajax, Achilles, Patroclus, his own son Antilochus — and then admits he knows nothing whatever about Odysseus.",
      "The scattering of the fleet": "Tells how Agamemnon and Menelaus quarrelled at the assembly after the sack and the fleet split, and how he sailed straight through and got home while everyone else scattered.",
      "The murder of Agamemnon": "Gives the fullest account in the poem of Aegisthus, Clytemnestra, the marooned singer, and Orestes' revenge, and tells Telemachus not to stay away from home too long.",
      "The heifer with gilded horns": "Orders a heifer brought in from the fields, a goldsmith fetched to gild its horns, and the whole ritual performed in order — the most complete sacrifice described in Greek epic."
    }
  },
  {
    name: "Eurydice",
    aliases: ["the daughter of Clymenus"],
    kind: "mortal",
    greek: "Eurydíkē (Εὐρυδίκη)",
    roman: "Eurydice",
    homer: "presbutátē thugatrôn Klyménoio — “eldest of Clymenus' daughters”",
    order: "Queen of Pylos",
    domain: "Nestor's household",
    house: "The house of Neleus",
    consorts: ["Nestor"],
    who: "Nestor's wife, named once. She is registered because the Pylian household is the most fully staffed and described in the poem and it would be odd to leave its mistress out of the chart.",
    books: [3],
    prominence: 3
  },
  {
    name: "Peisistratus",
    aliases: ["the son of Nestor"],
    kind: "mortal",
    greek: "Peisístratos (Πεισίστρατος)",
    roman: "Pisistratus",
    homer: "no fixed epithet; he is Néstoros huiós, the son of Nestor",
    order: "Prince of Pylos",
    domain: "The road to Sparta and back",
    house: "The house of Neleus",
    father: "Nestor",
    mother: "Eurydice",
    siblings: ["Thrasymedes", "Antilochus", "Echephron", "Stratius", "Aretus", "Perseus", "Polycaste"],
    who: "Telemachus' companion and near-contemporary, and the poem's demonstration of what a young man raised in an intact household looks like. He is the first to greet the strangers on the beach, he says the right thing at every turn, and at Sparta he is the one who names the dead brother nobody else will mention.",
    books: [3, 4, 15],
    prominence: 2,
    acts: {
      "The hecatomb on the beach": "Is the first to meet them on the shore, takes them both by the hand, and seats them on soft fleeces beside his father and brother.",
      "Athena departs as a sea-eagle": "Hands the wine cup to the disguised goddess first because she is the elder, which the poem records as exactly right.",
      "The chariot to Pherae": "Drives Telemachus to Pherae and on to Sparta, and manages the whole journey.",
      "Helen's drug": "Says at Sparta that his own brother Antilochus died at Troy, and that he is not one to take pleasure in weeping at supper — the only person at that table who names a specific death.",
      "Peisistratus turns aside": "Turns the chariot aside at Pylos so that Telemachus can sail without being detained by his father's hospitality, which he says would keep him for days."
    }
  },
  {
    name: "Thrasymedes",
    aliases: [],
    kind: "mortal",
    greek: "Thrasymḗdēs (Θρασυμήδης)",
    roman: "Thrasymedes",
    homer: "no fixed formula in this poem",
    order: "Prince of Pylos",
    domain: "The axe at the sacrifice",
    house: "The house of Neleus",
    father: "Nestor",
    mother: "Eurydice",
    who: "One of Nestor's sons, who takes the sharp axe and strikes the heifer at the sacrifice. Registered because the Pylian sacrifice assigns a job to each brother by name.",
    books: [3],
    prominence: 3,
    acts: {
      "The heifer with gilded horns": "Stands ready with the sharp axe and cuts the tendons of the heifer's neck."
    }
  },
  {
    name: "Antilochus",
    aliases: [],
    kind: "shade",
    greek: "Antílochos (Ἀντίλοχος)",
    roman: "Antilochus",
    homer: "the poem calls him the one who surpassed the rest in running and in fighting",
    order: "Prince of Pylos, killed at Troy",
    domain: "The son Nestor lost",
    house: "The house of Neleus",
    father: "Nestor",
    mother: "Eurydice",
    who: "Nestor's son, killed at Troy by Memnon, and the reason the old man's talkativeness has an edge under it. His bones lie in the same mound as Achilles' and Patroclus'.",
    books: [3, 4, 11, 24],
    prominence: 3,
    acts: {
      "Nestor's welcome": "Is named by his father in the roll of the dead — brilliant Antilochus, who surpassed everyone in speed and in fighting.",
      "Achilles and Agamemnon in the asphodel": "Has his bones laid beside Achilles' and Patroclus' under the great mound on the Hellespont."
    }
  },
  {
    name: "Polycaste",
    aliases: ["the youngest daughter of Nestor"],
    kind: "mortal",
    greek: "Polykástē (Πολυκάστη)",
    roman: "Polycaste",
    homer: "hoplotátē thugátēr — “the youngest daughter”",
    order: "Princess of Pylos",
    domain: "The bath at Pylos",
    house: "The house of Neleus",
    father: "Nestor",
    mother: "Eurydice",
    who: "Nestor's youngest daughter, who bathes Telemachus and oils him so that he comes out of the bath looking like a god — the poem's standard hospitality scene, performed by a princess.",
    books: [3],
    prominence: 3,
    acts: {
      "The heifer with gilded horns": "Bathes Telemachus, rubs him with oil, and dresses him in a tunic and cloak, and he steps out of the bath looking like an immortal."
    }
  },
  {
    name: "Diocles",
    aliases: ["Diocles of Pherae"],
    kind: "mortal",
    greek: "Dioklês (Διοκλῆς)",
    roman: "Diocles",
    homer: "the son of Ortilochus, whom Alpheus fathered",
    order: "Host at Pherae",
    domain: "The halfway house between Pylos and Sparta",
    house: "The house of Neleus",
    who: "The man at Pherae who puts up Telemachus and Peisistratus on both legs of the journey. He is registered because his father's house at Messene is also where Odysseus met Iphitus and got the bow, which quietly ties the Telemachy to the weapon.",
    books: [3, 15],
    prominence: 3,
    acts: {
      "The chariot to Pherae": "Receives the two young men at Pherae for the night, halfway between Pylos and Sparta.",
      "Peisistratus turns aside": "Puts them up again on the way back."
    }
  }
];
