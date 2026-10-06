/*
 * Walk-ons: the named minor figures, the crews, and the things the poem
 * treats as agents.
 *
 * The episode registry casts by scene rather than by importance, so a beggar
 * who fights in a doorway, a goldsmith who gilds a heifer's horns, and a dog
 * pack on a hillside all end up needing records. They get the same shape as
 * everyone else, with the fields that do not apply left out.
 *
 * Several entries exist mainly to carry aliases. The registry is keyed on one
 * canonical name, and the episode lists name the same body of men a dozen
 * different ways — the crew, the companions, the twelve companions, the four
 * chosen companions — so one record collects them all rather than scattering
 * a dozen near-duplicates through the descent charts.
 */

export const WALK_ON_FIGURES = [
  /* ------------------------------------------------------ narrative presence */
  {
    name: "Homer's narrator",
    aliases: ["the narrator", "the poet", "Homer"],
    kind: "people",
    greek: "ho poiētḗs (ὁ ποιητής)",
    roman: "poeta",
    homer: "the narrator speaks in the first person exactly twice — the invocation, and the direct addresses to Eumaeus",
    order: "The voice of the poem",
    domain: "Everything except Books IX to XII",
    house: "The Olympian house",
    who: "The poem's own voice, which holds twenty of the twenty-four books and hands four of them to Odysseus. It intrudes almost never — a note that nobody at a feast expects one man to bring death on him, and the habit of addressing the swineherd directly by name, which it does for no one else.",
    books: [1, 2, 3, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    prominence: 2
  },

  /* ------------------------------------------------------------- Ithaca and Pylos */
  {
    name: "Mentes",
    aliases: ["Mentes of the Taphians", "Mentes son of Anchialus"],
    kind: "mortal",
    greek: "Méntēs (Μέντης)",
    roman: "Mentes",
    homer: "Taphíōn hēgḗtōr — “leader of the Taphians”, and a guest-friend of Laertes from long ago",
    order: "Lord of the Taphians",
    domain: "A shape Athene borrows",
    house: "The household of Ithaca",
    father: "Anchialus",
    who: "A real Taphian lord and an old guest-friend of Laertes, whose shape Athene takes for the poem's first scene on Ithaca. The disguise works because the relationship is real: Telemachus receives him on the strength of an obligation older than himself.",
    books: [1],
    prominence: 3,
    acts: {
      "Athena as Mentes": "Is the identity the goddess gives at the door: Mentes son of Anchialus, sailing to Temese with a cargo of iron to trade for copper, claiming guest-friendship with Laertes from long ago."
    }
  },
  {
    name: "Peisenor",
    aliases: ["Peisenor the herald"],
    kind: "servant",
    greek: "Peisḗnōr (Πεισήνωρ)",
    roman: "Pisenor",
    homer: "kêryx — the herald who puts the staff into Telemachus' hand",
    order: "Herald of the Ithacan assembly",
    domain: "The staff of speech",
    house: "The household of Ithaca",
    who: "The herald who hands Telemachus the speaker's staff at the assembly, which is the small procedural act that makes a boy's first speech legal.",
    books: [2],
    prominence: 3,
    acts: {
      "The first assembly in twenty years": "Puts the staff into Telemachus' hand so that he can speak, and the assembly falls silent."
    }
  },
  {
    name: "Laerces",
    aliases: ["Laerces the goldsmith"],
    kind: "mortal",
    greek: "Laérkēs (Λαέρκης)",
    roman: "Laerces",
    homer: "chrysochóos — “the goldsmith”, sent for and given the gold to work",
    order: "Goldsmith at Pylos",
    domain: "The gilding of a heifer's horns",
    house: "The house of Neleus",
    who: "The craftsman Nestor sends for so that the heifer's horns can be gilded before the sacrifice. He is registered because the poem names him: the Pylian sacrifice is the most fully staffed scene in Homer, down to the man who works the gold.",
    books: [3],
    prominence: 3,
    acts: {
      "The heifer with gilded horns": "Comes with his anvil, hammer, and tongs, works the gold Nestor gives him, and lays it over the heifer's horns so that the goddess will be pleased to see it."
    }
  },
  {
    name: "The men of Pylos",
    aliases: ["Nestor's household", "the Pylians", "the yoked team"],
    kind: "people",
    greek: "Pýlioi (Πύλιοι)",
    roman: "Pylii",
    homer: "nine benches of five hundred men, each bench with nine bulls before it",
    order: "The people of Nestor",
    domain: "The largest sacrifice in Greek epic",
    house: "The house of Neleus",
    who: "Nestor's people and household, present chiefly as a number: four thousand five hundred men on the beach with eighty-one bulls between them. The scale is the poem's way of saying that a homecoming that worked leaves a kingdom that still functions.",
    books: [3, 4, 15],
    prominence: 3,
    acts: {
      "The hecatomb on the beach": "Sit in nine benches of five hundred with nine bulls before each, sacrificing to Poseidon, and make room for two strangers without being asked."
    }
  },
  {
    name: "Actoris",
    aliases: [],
    kind: "servant",
    greek: "Aktorís (Ἀκτορίς)",
    roman: "Actoris",
    homer: "named once, in the sentence that closes the poem's last recognition",
    order: "Penelope's maid",
    domain: "The door of the bedchamber",
    house: "The household of Ithaca",
    who: "The maid Penelope's father gave her when she married, and the only person outside the marriage who ever saw inside the bedroom. She exists for one line, and that line is what makes the test of the bed conclusive.",
    books: [23],
    prominence: 3,
    acts: {
      "The secret of the olive-tree bed": "Is named by Penelope as the third and only other person who ever saw the chamber — the maid her father gave her, who kept the doors of their room."
    }
  },
  {
    name: "The handmaids of the house",
    aliases: ["The handmaids", "The two handmaids", "The house-servants", "The housemaids", "The palace maids", "The maids of the house", "The serving women", "The servants of the house", "The fifty women of the house", "The maids who go to the suitors", "The twelve women at the querns", "the women of the household"],
    kind: "people",
    greek: "dmōaí (δμωαί)",
    roman: "ancillae",
    homer: "fifty women in the house, grinding, spinning, carrying water, and lighting the fires",
    order: "The women of the household",
    domain: "The mill, the loom, the hearth, and the torches",
    house: "The household of Ithaca",
    who: "Fifty women, of whom twelve go their own way and thirty-eight do not. They grind the grain, carry the water, light the braziers in the hall at night, and are the first to crowd round Odysseus weeping when the killing is over. The poem counts them precisely and names almost none of them.",
    books: [1, 2, 4, 6, 7, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    prominence: 3,
    acts: {
      "The maids in the dark": "Go out laughing to the suitors at night while Odysseus lies awake in the porch and counts them.",
      "The thunder and the mill-woman": "Twelve women work the querns; eleven have gone to bed and one, the weakest, is still grinding, and it is her prayer that becomes the omen.",
      "The twelve maids, and the fire": "Are separated by Eurycleia into thirty-eight and twelve, and the loyal ones crowd round Odysseus with torches, weeping and kissing his head and hands."
    }
  },
  {
    name: "The mill-woman",
    aliases: ["the weakest of the grinders"],
    kind: "servant",
    greek: "alétris (ἀλετρίς)",
    roman: "molitrix",
    homer: "unnamed; the poem says she was the weakest of the twelve and had not finished her portion",
    order: "A woman at the querns",
    domain: "The mill-house at dawn",
    house: "The household of Ithaca",
    who: "The last of twelve women still grinding when the others have stopped, because she is the weakest and slowest. Her private prayer — let this be the last meal these men eat in this house — is one of the two omens Odysseus asks for and gets, and it is the only one that comes from a person rather than the sky.",
    books: [20],
    prominence: 3,
    acts: {
      "The thunder and the mill-woman": "Prays aloud over her quern that the suitors may take their last supper in this house today, and Odysseus hears it and takes it, with Zeus' thunder, as his sign."
    }
  },
  {
    name: "The townspeople of Ithaca",
    aliases: ["The townspeople", "the Ithacans", "the people of Ithaca"],
    kind: "people",
    greek: "Ithakḗsioi (Ἰθακήσιοι)",
    roman: "Ithacenses",
    homer: "the poem notes their twenty-year silence more than once, and Halitherses names it as the cause of everything",
    order: "The community",
    domain: "The assembly they did not hold",
    house: "The suitors and their fathers",
    who: "The people who watched a hundred and eight young men eat a king's house for years without calling an assembly, and who are told so to their faces in Book XXIV. Their passivity is the poem's quietest indictment, and it is not the suitors who make it.",
    books: [2, 16, 20, 23, 24],
    prominence: 3,
    acts: {
      "The false wedding-feast": "Hear music and dancing in the street and conclude that the queen has finally remarried, and say she could not hold out for the husband of her youth.",
      "Eupeithes raises Ithaca": "Split at the assembly — more than half go home when Halitherses tells them the fault is their own, and the rest arm."
    }
  },
  {
    name: "Irus",
    aliases: ["Irus (Arnaeus)", "Arnaeus", "the town beggar"],
    kind: "mortal",
    greek: "Îros (Ἶρος)",
    roman: "Irus",
    homer: "his real name was Arnaeus; the young men called him Iros because he ran their errands, after Iris the messenger",
    order: "Beggar of Ithaca",
    domain: "The doorway of the hall",
    house: "The suitors and their fathers",
    who: "The public beggar of the town, big, greedy, and no fighter, who has the run of the hall on the suitors' sufferance and objects to competition. His nickname is a joke the suitors made: Iris runs messages for the gods and he runs them for young men. He is the poem's one comic duel and its clearest picture of what the hall does to the powerless.",
    books: [18],
    prominence: 2,
    acts: {
      "Irus the town beggar": "Tells the stranger to get out of the doorway before he is dragged out, and is answered that there is room on the threshold for two.",
      "The fight for the doorway": "Is set on by the suitors with a black-pudding as a prize, sees the thigh Odysseus bares and starts shaking, and is knocked down with a deliberately light blow, then dragged out by the foot and propped against the courtyard wall with a stick in his hand."
    }
  },
  {
    name: "Autonoe and Hippodameia",
    aliases: ["Autonoe", "Hippodameia"],
    kind: "servant",
    greek: "Autonóē kaì Hippodámeia (Αὐτονόη καὶ Ἱπποδάμεια)",
    roman: "Autonoe and Hippodamia",
    homer: "the two maids who come down with Penelope and stand on either side of her",
    order: "Penelope's attendants",
    domain: "The stair and the doorpost",
    house: "The household of Ithaca",
    who: "The two women who come down the stairs with Penelope and stand either side of her whenever she appears before the suitors. She never appears alone, and the poem records it every time.",
    books: [18],
    prominence: 3,
    acts: {
      "Athena puts beauty on Penelope": "Are called and come down with their mistress and stand on either side of her at the doorpost while she speaks to the hall."
    }
  },
  {
    name: "Mulius",
    aliases: ["Mulius the herald"],
    kind: "servant",
    greek: "Moúlios (Μούλιος)",
    roman: "Mulius",
    homer: "kêryx Doulichiḗeus — the Dulichian herald, Amphinomus' own man",
    order: "Herald of Amphinomus",
    domain: "The mixing bowl",
    house: "The suitors and their fathers",
    who: "Amphinomus' personal herald, who mixes and serves the wine. He is registered because he is the one servant of a suitor whom the poem names, and because the suitor he serves is the only decent one.",
    books: [18],
    prominence: 3,
    acts: {
      "Amphinomus warned": "Mixes the bowl and serves the wine round the hall after Amphinomus has given the stranger two loaves and drunk his health."
    }
  },
  {
    name: "Eurybates",
    aliases: ["Eurybates the herald"],
    kind: "servant",
    greek: "Eurybátēs (Εὐρυβάτης)",
    roman: "Eurybates",
    homer: "round-shouldered, dark-skinned, woolly-haired — the most precise physical description of any minor figure in the poem",
    order: "Odysseus' herald at Troy",
    domain: "A detail that proves a story",
    house: "The household of Ithaca",
    who: "Odysseus' own herald, whom he honoured above the rest of the company because they thought alike. He exists in the poem as a piece of evidence: the beggar describes him to Penelope in exact physical detail, and the detail is what convinces her the man has really met her husband.",
    books: [19],
    prominence: 3,
    acts: {
      "The brooch and the tunic": "Is described by the beggar as part of the proof — a herald a little older than Odysseus, round-shouldered, dark-skinned and woolly-headed, whom his master honoured above the others because they were of one mind."
    }
  },
  {
    name: "The dogs of the steading",
    aliases: ["The four dogs of the steading", "the herdsmen of the steading", "The herdsmen of the steading", "the swineherd's dogs"],
    kind: "people",
    greek: "kýnes (κύνες)",
    roman: "canes",
    homer: "four dogs like wild beasts, which Eumaeus reared himself",
    order: "The farm's guard",
    domain: "The gate of the steading",
    house: "The household of Ithaca",
    who: "The four dogs Eumaeus reared, which nearly savage Odysseus at the gate and then, in Book XVI, fawn silently on Telemachus without a bark — the detail that tells the swineherd someone he knows is coming before he sees them.",
    books: [14, 16],
    prominence: 3,
    acts: {
      "The dogs and the swineherd's stick": "Rush the stranger baying; Odysseus sits down and drops his stick, and Eumaeus drives them off with stones and says he was nearly disgraced.",
      "The dogs that do not bark": "Fawn on the approaching figure without barking, which is how Eumaeus knows before he looks that it is not a stranger."
    }
  },
  {
    name: "The boar on Parnassus",
    aliases: ["The boars under the rock", "the white-tusked boar"],
    kind: "object",
    greek: "sûs (σῦς)",
    roman: "aper",
    homer: "a great boar lying in a thicket so dense that no wet wind blew through it, nor sun struck it, nor rain came through",
    order: "The animal that made the scar",
    domain: "A thicket on Parnassus",
    house: "The household of Ithaca",
    who: "The boar that opened Odysseus' thigh when he was a boy hunting with Autolycus' sons, and thereby manufactured the poem's most-used proof of identity. It is killed in the same sentence in which it wounds him.",
    books: [19, 21, 24],
    prominence: 3,
    acts: {
      "Eurycleia and the scar": "Comes out of a thicket with its bristles up and fire in its eyes, tears the flesh above Odysseus' knee with a sideways rip of the tusk, and is speared through the right shoulder in the same movement."
    }
  },

  /* ------------------------------------------------------------ crews and voyages */
  {
    name: "The companions",
    aliases: ["The crew", "the companions", "The twelve companions", "The six companions", "The four chosen companions", "The surviving companions", "The transformed companions", "The three scouts", "The scouts", "The helmsman", "Telemachus' crew", "Menelaus' stranded crew", "Three of Menelaus' men", "the crew of the last ship"],
    kind: "people",
    greek: "hétairoi (ἑταῖροι)",
    roman: "socii",
    homer: "erihḗres hetaîroi — “trusty companions”, a formula the poem keeps using long after it has stopped being true",
    order: "Odysseus' crews",
    domain: "The ships, the oars, and every fatal decision",
    house: "The house of Arcesius",
    who: "Six hundred men in twelve ships, and none of them reaches Ithaca. The poem announces in its seventh line that they were destroyed by their own recklessness, and then spends four books demonstrating it: the wind-bag opened, the landing forced on Thrinacia, the cattle eaten. Homer names perhaps a dozen of them and lets the rest die in numbers.",
    books: [9, 10, 11, 12],
    prominence: 2,
    acts: {
      "The proem": "Are named in the poem's first sentence as the men Odysseus could not save, who perished through their own folly after eating the cattle of the Sun.",
      "Within sight of Ithaca": "Open the bag of winds within sight of the fires of Ithaca, believing it holds gold their captain means to keep.",
      "Thrinacia and the oath": "Refuse to row past the island, swear an oath not to touch the cattle, and mean it.",
      "The month of the south wind": "Are persuaded by Eurylochus, after a month of the wrong wind and no food, that drowning quickly is better than starving slowly.",
      "The wreck and the lone survivor": "Are killed to the last man by a single thunderbolt and float round the black hull like sea-crows."
    }
  },
  {
    name: "Eurylochus",
    aliases: ["Eurylochos"],
    kind: "mortal",
    greek: "Eurýlochos (Εὐρύλοχος)",
    roman: "Eurylochus",
    homer: "no laudatory formula; the poem calls him a kinsman by marriage and lets him argue",
    order: "Second in command",
    domain: "The case against the captain",
    house: "The house of Arcesius",
    who: "Odysseus' brother-in-law and second, and the only man in the poem who argues with him and is right about anything. He hangs back at Circe's door and so preserves the only witness; he points out, accurately, that following Odysseus into a cave is how the last crew died; and he makes the speech that kills them all, which is humane, reasonable, and fatal.",
    books: [10, 12],
    prominence: 2,
    acts: {
      "The dividing of the crew": "Draws the losing lot, leads twenty-two men to Circe's house, refuses to go inside suspecting a trap, and runs back to the ship unable to speak for crying.",
      "Moly, and the sword at the witch's throat": "Begs Odysseus not to go, and proposes sailing away with the survivors instead.",
      "The Sirens and the wax": "Gets up with Perimedes and ties his captain tighter to the mast when he signals to be freed.",
      "The year on Aeaea": "Argues that following Odysseus is exactly how the men in the Cyclops' cave were lost, and is nearly beheaded for it.",
      "Thrinacia and the oath": "Refuses in front of everyone to row past the island, asks whether his captain is made of iron, and carries the whole crew with him.",
      "The month of the south wind": "Makes the speech that ends the poem's cast: all deaths are hateful but starving is the worst, so let us take the cattle, promise Helios a temple, and drown quickly if we must."
    }
  },
  {
    name: "Perimedes",
    aliases: [],
    kind: "mortal",
    greek: "Perimḗdēs (Περιμήδης)",
    roman: "Perimedes",
    homer: "named three times and given no epithet, always paired with Eurylochus",
    order: "One of the crew",
    domain: "Holding the animals, and holding the ropes",
    house: "The house of Arcesius",
    who: "One of the handful of companions Homer names. He holds the sacrificial animals at the trench of blood and ties his captain tighter to the mast at the Sirens — both times paired with Eurylochus, and both times doing exactly what he was told.",
    books: [11, 12],
    prominence: 3,
    acts: {
      "The trench of blood": "Holds the black ram and ewe with Eurylochus while Odysseus digs the pit and pours the libations.",
      "The Sirens and the wax": "Gets up with Eurylochus and binds his captain tighter to the mast when he signals to be released."
    }
  },
  {
    name: "Maron",
    aliases: ["Maron son of Euanthes", "Maron's wine"],
    kind: "mortal",
    greek: "Márōn Euánthēs (Μάρων Εὐάνθης)",
    roman: "Maro",
    homer: "hiereùs Apóllōnos — priest of Apollo, who lived in the god's wooded grove at Ismarus",
    order: "Priest of Apollo at Ismarus",
    domain: "Twelve jars of the strongest wine in the poem",
    house: "The captains at Troy",
    who: "The priest Odysseus spared during the sack, out of respect for the god, and who paid for it with gold, a silver mixing bowl, and twelve jars of a black wine so strong it took twenty parts of water and smelled divine. That wine is what blinds the Cyclops. One act of restraint in a raid produces the poem's most famous escape.",
    books: [9],
    prominence: 3,
    acts: {
      "The sack of Ismarus": "Is spared with his wife and child because he lives in Apollo's grove, and pays seven talents of gold, a silver bowl, and twelve jars of unmixed wine kept secret from all his servants but one housekeeper.",
      "Nobody is my name": "Supplies, at one remove, the drink that puts the Cyclops on his back — three bowls of it undiluted."
    }
  },
  {
    name: "The stag on Aeaea",
    aliases: ["The stag"],
    kind: "object",
    greek: "élaphos (ἔλαφος)",
    roman: "cervus",
    homer: "a huge high-antlered stag coming down to the river from its woodland pasture in the heat",
    order: "One meal",
    domain: "A stream on Circe's island",
    house: "The line of Helios",
    who: "The animal Odysseus kills on the way back from the lookout and carries home across his shoulders on a withy rope, using his spear as a stick. It is the only thing that gets the crew off the beach after the Laestrygonians, and Homer spends nine lines on the carrying.",
    books: [10],
    prominence: 3,
    acts: {
      "The dividing of the crew": "Is speared through the spine at a stream, tied by the feet with a twisted withy, and carried back to the ship on Odysseus' shoulders, too big to be slung over one arm."
    }
  },
  {
    name: "The crowding dead",
    aliases: ["the shades", "the dead", "the numberless dead"],
    kind: "people",
    greek: "psychaí (ψυχαί)",
    roman: "manes",
    homer: "nekýōn amenēnà kárēna — “the strengthless heads of the dead”, who come up with an eerie cry",
    order: "The shades at the trench",
    domain: "The blood, and what it briefly restores",
    house: "The dead of the Nekyia",
    who: "Brides, unmarried young men, worn old people, tender girls new to grief, and men in armour with their wounds still on them, swarming up out of Erebus at the smell of blood. They can neither speak nor think until they drink, which makes the sword over the trench a form of crowd control.",
    books: [11, 24],
    prominence: 3,
    acts: {
      "The trench of blood": "Come up from Erebus in a crowd with an eerie cry, and are held back at sword's length until the prophet has drunk.",
      "Minos, Tantalus, Sisyphus, Heracles": "Gather round with a supernatural clamour at the end of the book, and the noise of them is what makes Odysseus fear the Gorgon and run."
    }
  },
  {
    name: "The Argo",
    aliases: ["the ship of all men's concern"],
    kind: "object",
    greek: "Argṓ (Ἀργώ)",
    roman: "Argo",
    homer: "Argṑ pasimélousa — “the Argo that all men care about”, which assumes an audience who already knows the story",
    order: "The other famous ship",
    domain: "The route this poem does not take",
    house: "The line of Poseidon",
    who: "The only vessel ever to pass the Wandering Rocks, brought through by Hera because Jason was dear to her. Homer names it once, in a route description, and the phrase he uses is the clearest evidence in either poem that an Argonautic tradition already existed and his audience knew it.",
    books: [12],
    prominence: 3,
    acts: {
      "The Wandering Rocks refused": "Is named as the single exception to the rule that nothing gets past the Planctae, and the exception is a favour rather than a feat."
    }
  },
  {
    name: "The winds",
    aliases: ["the four winds", "the storm winds"],
    kind: "people",
    greek: "ánemoi (ἄνεμοι)",
    roman: "venti",
    homer: "the poem names them individually and sets them against each other, which is meteorologically impossible and rhetorically exact",
    order: "The four quarters",
    domain: "Every delay in the poem",
    house: "The wind-king and the Aeolids",
    who: "Treated throughout as four distinct actors under a steward rather than as weather. More damage is done in the Odyssey by wind than by any monster: a month of the south wind empties the stores on Thrinacia, and a bag of them opened in the wrong minute costs Odysseus his home.",
    books: [5, 9, 10, 12, 14, 19],
    prominence: 3,
    acts: {
      "The bag of winds": "Are sewn into a flayed ox-hide and tied with silver, all but the west.",
      "Poseidon's storm": "Are driven against one another at once by the trident, so that night comes down out of the sky onto the sea."
    }
  },
  {
    name: "The morning star",
    aliases: ["Eosphoros", "the star of dawn"],
    kind: "object",
    greek: "Heōsphóros (Ἑωσφόρος)",
    roman: "Lucifer",
    homer: "the star that comes first to announce the light of early Dawn",
    order: "A time-mark",
    domain: "The last watch of the night",
    house: "The Olympian house",
    who: "The star that announces dawn, used by the poem to time the moment the Phaeacian ship reaches Ithaca. It is registered because the Odyssey's clock is one of its subjects.",
    books: [13],
    prominence: 3,
    acts: {
      "The sleep like death": "Rises as the ship runs in to the harbour of Phorcys, which is how the poem dates the landing to the exact hour."
    }
  },
  {
    name: "The eagle omens",
    aliases: ["The two eagles", "The eagle and the goose", "The eagle of the dream", "The hawk and the dove", "The twenty geese"],
    kind: "object",
    greek: "oiōnoí (οἰωνοί)",
    roman: "auspicia",
    homer: "the poem's birds always come from the right and always mean the same thing, and nobody in Ithaca can read them",
    order: "Signs from the sky",
    domain: "Warnings delivered and ignored",
    house: "The Olympian house",
    who: "The Odyssey's standing device: an eagle takes a goose, a hawk tears a dove, two eagles tear each other's cheeks over an assembly, an eagle kills twenty geese in a dream and then speaks. Every one is read correctly by someone, and every one is dismissed by the people it concerns.",
    books: [2, 15, 19, 20],
    prominence: 3,
    acts: {
      "The omen of the eagles": "Two eagles come down the wind over the Ithacan assembly, tear each other's cheeks and necks above the crowd, and swerve away to the right through the houses.",
      "Menelaus' gifts and the eagle omen": "An eagle carries off a great white domestic goose from the yard, and Helen reads it as Odysseus already home and preparing the killing.",
      "The hawk on the right": "A hawk tears a dove in flight and scatters the feathers between Telemachus and his ship, and Theoclymenus reads it as a house that will not be beaten.",
      "The geese, and the gates of horn and ivory": "An eagle in Penelope's dream breaks the necks of twenty geese at her trough, then speaks in a human voice and says he is her husband."
    }
  },
  {
    name: "His own heart",
    aliases: ["His own heart (thumos)", "the thumos", "his heart"],
    kind: "object",
    greek: "thymós (θυμός)",
    roman: "animus",
    homer: "kradíē dé hoi éndon hylákteí — “and the heart inside him barked”, a simile of a bitch standing over her puppies",
    order: "The seat of impulse",
    domain: "The porch, on the last night",
    house: "The house of Arcesius",
    who: "Registered as an agent because the poem treats it as one. On the night before the killing Odysseus lies awake watching the maids go out to the suitors, and his heart barks inside him like a bitch standing over her whelps at a stranger, and he strikes his chest and tells it to endure — reminding it that it endured worse in the Cyclops' cave.",
    books: [20],
    prominence: 3,
    acts: {
      "Endure, my heart": "Barks inside him like a dog over its puppies, and is beaten down and told to endure, on the precedent of the cave."
    }
  },
  {
    name: "The Nereids",
    aliases: ["the daughters of the old man of the sea", "the sea-nymphs"],
    kind: "people",
    greek: "Nērēḯdes (Νηρηΐδες)",
    roman: "Nereides",
    homer: "the daughters of the old man of the sea, who come up out of the water with Thetis and stand round the body wailing",
    order: "The sea's daughters",
    domain: "A funeral on the shore at Troy",
    house: "The line of Poseidon",
    who: "The sea-nymphs who come out of the water with Thetis at Achilles' death and make a cry so terrible that the Achaeans nearly panic and run for the ships until Nestor stops them. They are registered for the one scene the Odyssey gives them.",
    books: [24],
    prominence: 3,
    acts: {
      "Achilles and Agamemnon in the asphodel": "Rise from the sea with Thetis, wailing, and clothe the body in immortal garments while the nine Muses sing the lament."
    }
  },
  {
    name: "The captive woman of the simile",
    aliases: [],
    kind: "object",
    greek: "gunḗ (γυνή)",
    roman: "captiva",
    homer: "a woman thrown over the body of her husband before her own city, beaten across the back and shoulders with spear-shafts and led away to slavery",
    order: "The poem's most consequential simile",
    domain: "The comparison that turns the hero into his own victim",
    house: "The captains at Troy",
    who: "Not a character but a figure of speech, registered because it does more work than most characters. Homer compares the weeping of Odysseus, listening to the song of the wooden horse in Alcinous' hall, to a woman being dragged from her dead husband into slavery after a sack. The man who sacked Troy is given the grief of the people he sacked.",
    books: [8],
    prominence: 2,
    acts: {
      "The wooden horse, and the weeping simile": "Falls on her husband's body as he dies before his own city and its people, is beaten across the back and shoulders with spears, and is led off to slavery and labour — and this is what Odysseus' weeping is compared to."
    }
  },
  {
    name: "A river god of Scheria",
    aliases: ["the river of Scheria", "the unnamed river"],
    kind: "sea power",
    greek: "potamós (ποταμός)",
    roman: "flumen",
    homer: "unnamed throughout; Odysseus addresses him as ánax, lord, whoever you are",
    order: "The river at the landing place",
    domain: "The mouth where a swimmer comes ashore",
    house: "The line of Poseidon",
    who: "The river Odysseus prays to when the cliffs have taken the skin off his hands. He does not know its name and prays anyway, and it checks its current and makes the water calm in front of him — the poem's first act of supplication and the first thing on Scheria that answers.",
    books: [5],
    prominence: 3,
    acts: {
      "The landfall on Scheria": "Is prayed to by a man who cannot name him, and stops his own current, making the water smooth ahead so that the swimmer can get in."
    }
  },
  {
    name: "The seals of Proteus",
    aliases: ["the seals"],
    kind: "people",
    greek: "phôkai (φῶκαι)",
    roman: "phocae",
    homer: "the brood of the fair sea-goddess, coming up in flocks to sleep on the shore and smelling deadly of the depths",
    order: "Proteus' flock",
    domain: "The beach at Pharos at noon",
    house: "The line of Poseidon",
    who: "The old man of the sea's herd, which he counts in fives at noon and sleeps among. Four of them are flayed so that Menelaus' men can lie in the skins, and Eidothea has to put ambrosia under each man's nose because the smell is unbearable.",
    books: [4],
    prominence: 3,
    acts: {
      "Eidothea and the ambush of Proteus": "Come up out of the grey sea in flocks, are counted in fives by their herdsman, and lie down to sleep around four men hidden in the skins of four of them."
    }
  },

  /* --------------------------------------------------------- the false lives */
  {
    name: "Castor son of Hylax",
    aliases: ["Castor of Crete"],
    kind: "mortal",
    greek: "Kástōr Hylakídēs (Κάστωρ Ὑλακίδης)",
    roman: "Castor",
    homer: "a Cretan invented for a lie; the patronymic Hylakidēs is built on hylaktéō, to bark",
    order: "A father Odysseus invents",
    domain: "The Cretan tale told to Eumaeus",
    house: "The Cretan house",
    who: "The rich Cretan whom Odysseus, in the longest of his false autobiographies, claims as a father — a wealthy man with many legitimate sons, of whom the speaker was born to a bought concubine and given only a small share. The lie is elaborate, internally consistent, and entirely unnecessary, which is the point.",
    books: [14],
    prominence: 3,
    acts: {
      "The lie about Crete and Egypt": "Is invented as the speaker's father: a rich Cretan honoured like a god, whose legitimate sons cast lots for the estate and left the son of a bought woman a house and very little else."
    }
  },
  {
    name: "Orsilochus",
    aliases: ["Orsilochus, in the lie", "Orsilochus son of Idomeneus"],
    kind: "mortal",
    greek: "Orsílochos (Ὀρσίλοχος)",
    roman: "Orsilochus",
    homer: "invented for a lie: a fast runner, the son of Idomeneus, killed in ambush by the narrator of the tale",
    order: "A man Odysseus invents having murdered",
    domain: "The Cretan tale told to Athene",
    house: "The Cretan house",
    who: "The man Odysseus claims to have killed in an ambush by night, in the very first thing he says on his own soil — a lie told to a disguised goddess on the beach at Ithaca, which she finds so accomplished that she laughs and drops her own disguise.",
    books: [13],
    prominence: 3,
    acts: {
      "Athena as a young shepherd": "Is the murder victim in the fiction: a fast-running son of Idomeneus, speared from ambush on a dark night because he tried to take the speaker's share of the Trojan spoils."
    }
  },
  {
    name: "Pheidon",
    aliases: ["Pheidon of Thesprotia", "Pheidon of the Thesprotians"],
    kind: "mortal",
    greek: "Pheídōn (Φείδων)",
    roman: "Phidon",
    homer: "king of the Thesprotians in three separate false tales, always doing the same thing",
    order: "A king Odysseus invents",
    domain: "The Thesprotian hospitality that never happened",
    house: "The Cretan house",
    who: "The Thesprotian king who, in three different lies told to three different people, entertained Odysseus, showed the storyteller the treasure he had collected, and sent him on toward Dulichium. He is registered because the recurrence is the evidence: the false tales are a practised routine, not improvisations.",
    books: [14, 19],
    prominence: 3,
    acts: {
      "The lie about Crete and Egypt": "Is said to have taken the shipwrecked speaker in, shown him the treasure Odysseus had gathered, and told him the man himself had gone to Dodona to ask the oak how to come home.",
      "I entertained him twenty years ago": "Is produced again in the tale told to Penelope, with the same treasure and the same errand to Dodona."
    }
  },
  {
    name: "Thoas",
    aliases: ["Thoas son of Andraemon"],
    kind: "mortal",
    greek: "Tho̅as Andraimonídēs (Θόας Ἀνδραιμονίδης)",
    roman: "Thoas",
    homer: "a real Aetolian captain from the Iliad, borrowed into a lie about a cloak",
    order: "A captain in a story told for a cloak",
    domain: "The night watch at Troy",
    house: "The captains at Troy",
    who: "An actual Trojan-war commander, used by Odysseus as a supporting character in the story he tells Eumaeus to get a cloak out of him: on a freezing night in the lines, Odysseus pretends to have had a dream, Thoas throws off his own cloak and runs to the ships, and the speaker sleeps warm. The story is a request and both men know it.",
    books: [14],
    prominence: 3,
    acts: {
      "The tale of the cloak": "Is the man who leaps up, drops his purple cloak, and runs off to the ships on a false errand, leaving it for the speaker to sleep in."
    }
  },
  {
    name: "The Phoenician trader",
    aliases: ["The Phoenician traders", "The Phoenician crew, in the lie", "The Sidonian nurse", "the Phoenicians"],
    kind: "people",
    greek: "Phoínikes (Φοίνικες)",
    roman: "Poeni",
    homer: "trṓktai — “gnawers”, sharp dealers, and the poem uses the word twice",
    order: "Sea traders",
    domain: "The long-distance economy the poem keeps glimpsing",
    house: "The Cretan house",
    who: "The Odyssey's picture of eighth-century Mediterranean commerce, and it is not flattering: sharp dealers who keep a man a year to trade with him and then sell him, and who buy a stolen child from a stolen nurse. They appear in Eumaeus' true history and in two of Odysseus' false ones, which makes them the one social fact both registers agree on.",
    books: [13, 14, 15],
    prominence: 3,
    acts: {
      "The lie about Crete and Egypt": "Keep the speaker a full year in the fiction, then take him aboard bound for Libya intending to sell him.",
      "The Phoenician nurse": "Buy a king's small son from his own Phoenician nurse, who is sleeping with one of them and wants passage home, and sell him to Laertes at the end of a seven-day run."
    }
  },
  {
    name: "Ctesius",
    aliases: ["Ktesios", "Ctesius son of Ormenus"],
    kind: "mortal",
    greek: "Ktḗsios Ormenídēs (Κτήσιος Ὀρμενίδης)",
    roman: "Ctesius",
    homer: "theoîs enalínkios — “like the gods”, king of Syrie",
    order: "King of Syrie",
    domain: "The island Eumaeus was stolen from",
    house: "The household of Ithaca",
    children: ["Eumaeus"],
    who: "Eumaeus' father, king of the island of Syrie beyond Ortygia, where there is no hunger and no sickness and people die gently when they are old, shot by Apollo and Artemis. His son was stolen from him by a Phoenician nurse and sold to Laertes.",
    books: [15],
    prominence: 3,
    acts: {
      "The Phoenician nurse": "Is named by Eumaeus as his father, a king like the gods, on an island where the herds are many, the wine and grain never fail, and famine never comes."
    }
  },
  {
    name: "The king of Egypt",
    aliases: ["the Egyptian king"],
    kind: "mortal",
    greek: "basileùs Aigyptíōn (βασιλεὺς Αἰγυπτίων)",
    roman: "rex Aegyptius",
    homer: "unnamed; he arrives in a chariot and saves a suppliant from his own men",
    order: "A king in a false tale",
    domain: "The raid that goes wrong",
    house: "The Cretan house",
    who: "In two of the Cretan lies, the Egyptian king who comes up in his chariot while the speaker's men are being cut down, is supplicated at the knees, sets him in the chariot, and keeps him seven years. He is registered because he is the one figure in the false tales who behaves better than most of the real people in the poem.",
    books: [14, 17],
    prominence: 3,
    acts: {
      "The lie about Crete and Egypt": "Drives up while the raiders are being killed and taken, receives the speaker's supplication, takes him into his chariot, and protects him from his own furious men."
    }
  },
  {
    name: "The bard left on guard",
    aliases: ["the singer marooned"],
    kind: "singer",
    greek: "aoidós (ἀοιδός)",
    roman: "cantor",
    homer: "unnamed; Agamemnon left him with strict instructions to watch over his wife",
    order: "Clytemnestra's guardian",
    domain: "A desert island",
    house: "The house of Atreus",
    who: "The singer Agamemnon left behind to keep his wife safe, and whom Aegisthus marooned on a desert island for the birds to eat before taking her home. The Odyssey's two households are both guarded by poets, and this is the one where it fails.",
    books: [3],
    prominence: 3,
    acts: {
      "The murder of Agamemnon": "Is left in charge of Clytemnestra and holds her out a long time, until Aegisthus takes him to a desert island and leaves him there as prey and pickings for the birds."
    }
  },
  {
    name: "Anticlus",
    aliases: [],
    kind: "hero",
    greek: "Antiklos (Ἄντικλος)",
    roman: "Anticlus",
    homer: "the man who was about to answer, whose mouth Odysseus held shut with both hands until Athene led Helen away",
    order: "One of the men in the horse",
    domain: "A single suppressed sound",
    house: "The captains at Troy",
    who: "The Greek inside the wooden horse who nearly gave everyone away when Helen walked round it calling in the voices of their wives. Odysseus clamped both hands over his mouth and held on until she left. He is registered because Menelaus tells the story to make a point about who kept his head.",
    books: [4],
    prominence: 3,
    acts: {
      "Menelaus and the wooden horse": "Starts to answer the voice of his own wife from inside the horse, and is silenced by Odysseus, who holds his mouth shut with both hands until Athene takes Helen away."
    }
  },
  {
    name: "The daughter of Dymas",
    aliases: [],
    kind: "mortal",
    greek: "Dýmantos thugátēr (Δύμαντος θυγάτηρ)",
    roman: "the daughter of Dymas",
    homer: "unnamed; a girl of Nausicaa's own age whom she was especially fond of",
    order: "Nausicaa's friend",
    domain: "A shape Athene borrows",
    house: "The Phaeacian house",
    father: "Dymas",
    who: "The friend whose shape Athene takes to stand over the sleeping Nausicaa and complain that the laundry is a disgrace. She is unnamed and exists for four lines, and the whole rescue of Odysseus runs through her.",
    books: [6],
    prominence: 3,
    acts: {
      "Athena's dream to Nausicaa": "Is impersonated by Athene, who slips in like a breath of wind and stands over the bed as this girl to tell Nausicaa her wedding cannot be far off and her linen is unwashed."
    }
  },
  {
    name: "The daughters of Pandareus",
    aliases: ["the nightingale of Pandareus"],
    kind: "people",
    greek: "Pandaréou koûrai (Πανδαρέου κοῦραι)",
    roman: "the daughters of Pandareus",
    homer: "the poem tells two incompatible stories about them, one of a nightingale and one of girls carried off by storm-winds and given to the Furies",
    order: "Figures in Penelope's two comparisons",
    domain: "Grief without a resolution",
    house: "The dead of the Nekyia",
    who: "Invoked twice by Penelope, once as the nightingale who killed her own son and now sings for him in the green woodland, and once as girls orphaned, raised by the goddesses, and then snatched away by storm-winds to be servants of the Furies on the day of their wedding. Both are her images for her own condition, and neither has an ending.",
    books: [19, 20],
    prominence: 3,
    acts: {
      "The geese, and the gates of horn and ivory": "Are the comparison Penelope reaches for lying awake: the nightingale, daughter of Pandareus, singing among the leaves in early spring and pouring out her thick-thronging notes, mourning the son she killed herself.",
      "Penelope's prayer for death": "Are invoked again as the girls whose parents the gods killed, who were raised by Aphrodite, Hera, Artemis, and Athene, and were carried off by storm-winds and given to the hateful Furies to serve."
    }
  },
  {
    name: "Iphitus",
    aliases: ["Iphitus son of Eurytus"],
    kind: "mortal",
    greek: "Íphitos Eurytídēs (Ἴφιτος Εὐρυτίδης)",
    roman: "Iphitus",
    homer: "isótheos phṓs — “a man like a god”, killed in his own guest's house",
    order: "Guest-friend of Odysseus",
    domain: "The bow, and a murdered friendship",
    house: "The captains at Troy",
    father: "Eurytus",
    who: "The man who gave Odysseus the bow. They met at Ortilochus' house in Messene as young men, one recovering stolen sheep and the other looking for twelve lost mares, exchanged gifts, and became guest-friends. Heracles killed him in his own house while he was a guest there and kept the mares. His murder is the poem's second great violation of xenia, told in a twenty-line aside about the weapon that ends the first.",
    books: [21],
    prominence: 2,
    acts: {
      "The bow of Iphitus": "Gives Odysseus the great bow his father Eurytus left him, receives a sword and a spear in exchange, and is murdered soon afterwards by Heracles at his own table."
    }
  },
  {
    name: "Eurytus",
    aliases: ["Eurytus of Oechalia"],
    kind: "mortal",
    greek: "Eúrytos (Εὔρυτος)",
    roman: "Eurytus",
    homer: "the archer who challenged the gods at the bow and was killed by Apollo for it",
    order: "Archer of Oechalia",
    domain: "The bow before it was Odysseus'",
    house: "The captains at Troy",
    children: ["Iphitus"],
    who: "Iphitus' father, who carried the great bow and left it to his son, and who died young because he challenged Apollo at archery. The weapon that kills the suitors has, before it reaches Ithaca, already killed one owner by hubris and seen another murdered by his host.",
    books: [8, 21],
    prominence: 3,
    acts: {
      "The bow of Iphitus": "Is named as the bow's first owner, who died in his own halls because he challenged Apollo to shoot against him."
    }
  },
  {
    name: "The Aetolian wanderer",
    aliases: ["the Aetolian liar"],
    kind: "mortal",
    greek: "aner Aitōlós (ἀνὴρ Αἰτωλός)",
    roman: "Aetolus",
    homer: "unnamed; a man on the run for killing someone, who told a story for a meal and was believed",
    order: "A beggar who lied first",
    domain: "The reason nobody believes the next one",
    house: "The household of Ithaca",
    who: "The wanderer who came to Eumaeus' hut before Odysseus did, on the run for a killing, and swore Odysseus was in Crete with Idomeneus and would be home by summer. He was fed and looked after and was lying. He is the reason the swineherd will not accept an oath from the next stranger, and therefore one of the most consequential minor figures in the poem.",
    books: [14],
    prominence: 3,
    acts: {
      "Eumaeus refuses to believe": "Is remembered by Eumaeus as the Aetolian who came here fleeing a manslaughter, was taken in and cared for, swore Odysseus was in Crete with Idomeneus refitting his ships and would come by summer, and was never seen again."
    }
  },
  {
    name: "The herald from the ship",
    aliases: ["Telemachus' herald"],
    kind: "servant",
    greek: "kêryx (κῆρυξ)",
    roman: "praeco",
    homer: "unnamed; he and the swineherd arrive on the same errand and give the same news two different ways",
    order: "Herald of Telemachus' crew",
    domain: "One message delivered twice",
    house: "The household of Ithaca",
    who: "The herald sent up from Telemachus' ship to tell Penelope her son is home, who arrives at the same moment as Eumaeus and blurts it out in front of the whole household while the swineherd waits to say it privately. The doubling is the poem's one small joke about information management.",
    books: [16],
    prominence: 3,
    acts: {
      "Eumaeus sent to Penelope": "Reaches the house at the same time as the swineherd and announces to the maids, in everyone's hearing, that Telemachus is back — while Eumaeus tells the queen quietly and then leaves."
    }
  },
  {
    name: "The wine-pourer",
    aliases: ["the oinochoos", "the cup-bearer"],
    kind: "servant",
    greek: "oinochóos (οἰνοχόος)",
    roman: "pincerna",
    homer: "the poem names the office in every feast scene and the man almost never",
    order: "The one who pours",
    domain: "The hall at dinner",
    house: "The household of Ithaca",
    who: "The unnamed servant who mixes and pours in every hall in the poem. Registered because the feast type-scene assigns him a place in a fixed sequence — water for the hands, bread from the housekeeper, meat from the carver, wine from the pourer — and the sequence is how the poem tells a good host from a bad one.",
    books: [1, 3, 4, 7, 15, 18, 20],
    prominence: 3,
    acts: {
      "The suitors at meat": "Pours for a hall of men eating another man's herds, which is the same sequence performed in the same order as at Pylos and Sparta, and means the opposite."
    }
  }
];
