/*
 * The suitors and their fathers, and the townsmen of Ithaca.
 *
 * This is the poem's political cluster. Everyone in it is a neighbour: the
 * young men eating the house and the old men who watched them start. Homer
 * keeps the two halves in one frame on purpose — Eupeithes owes Odysseus his
 * life, Aegyptius has one son among the suitors and one eaten by the Cyclops,
 * and the assembly that will not restrain its sons in Book II is the same
 * assembly that arms to avenge them in Book XXIV.
 *
 * `homer` records the epithet or formula the poem actually uses. For most of
 * the rank-and-file suitors there is none: they are a name, a father, and a
 * manner of dying, and the record says so rather than inventing one.
 *
 * The turn this cluster is measured against is xenia — guest-friendship — and
 * every act below can be read as a position on it. Antinous throws a stool at
 * a beggar; Peiraeus houses a fugitive on a friend's word alone.
 */

export const SUITOR_FIGURES = [
  /* ------------------------------------------------------------- the body */
  {
    name: "The suitors",
    aliases: [
      "the suitors",
      "the wooers",
      "the suitors of Penelope",
      "the wooers of Penelope",
      "mnesteres",
      "the young men of Ithaca and the islands"
    ],
    kind: "people",
    greek: "mnēstêres (μνηστῆρες)",
    roman: "proci Penelopae",
    homer: "mnēstêres hyperēnoréontes — 'the overbearing suitors'; also mnēstêres agḗnores, 'the lordly suitors'",
    order: "The courting company",
    domain: "The hall of Odysseus, and the estate they are eating",
    house: "The suitors and their fathers",
    who: "A hundred and eight young noblemen from Ithaca and the islands who have installed themselves in an absent king's hall, courting his wife by consuming his property until she chooses one of them. They are not an invading army; they are the neighbours' sons, and the poem's charge against them is not conquest but atasthaliē — recklessness, the wilful abuse of a household that took them in. Every violation they commit is a violation of guest-friendship performed by guests.",
    books: [1, 2, 4, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    prominence: 1,
    acts: {
      "The suitors at meat": "Fifty-two from Dulichium, twenty-four from Same, twenty from Zacynthus, twelve from Ithaca itself: sitting on the hides of cattle they killed, playing draughts, waiting for the meat to come in. The poem's first sight of them is of men entirely at ease in a house that is not theirs.",
      "Phemius sings the returns": "Make a singer perform the homecomings from Troy for their entertainment, in the one hall in Greece where that song is an injury.",
      "Telemachus finds his voice": "Bite their lips at a boy's first open threat, and then dance and sing until dark. Laughter is their recorded answer to him every time he speaks, from here to the killing floor.",
      "The first assembly in twenty years": "Come to an assembly they have never needed, hear themselves accused in public by the son of the house, and answer by putting the fault on Penelope: she has led them on for four years, and they will eat the estate until she picks a husband.",
      "Antinous and the web of Laertes": "Discover they have been beaten for three years by a loom — a shroud woven by day and unpicked by candlelight — and only because a maid who slept with one of them gave it away.",
      "The omen of the eagles": "Refuse a sign from Zeus delivered over their heads in front of the whole town, and threaten the seer who reads it with a fine.",
      "The suitors' ambush at Asteris": "Fit out a fast ship with twenty men and lie up in the strait at the rocky islet of Asteris to kill Telemachus on his way home. The courtship becomes a murder plot the moment it is inconvenienced.",
      "The ambush failed": "Come back from the strait empty-handed and hold a council on the shore about how to kill the boy on land instead.",
      "Begging along the tables": "Give the beggar bread from another man's stores, one at a time, and think it generosity. Athena sends him down the line deliberately, to sort the decent from the lawless — and Homer says at once that she was not going to spare any of them either way.",
      "The braziers and the taunting": "Keep the hall lit with three braziers fed by the maids, and pass the evening throwing insults at a beggar who will not answer back.",
      "Ctesippus and the ox-hoof": "Laugh at an ox's hoof thrown at a beggar's head, and go on laughing.",
      "Theoclymenus sees the hall in blood": "Laugh with a laughter Athena has set loose in them and cannot stop, while their meat runs with blood and a prophet tells them their heads and faces are wrapped in night. They offer to have him sold abroad.",
      "The axes set in line": "Watch a boy set twelve axe-heads in a trench in a straight line and come within one pull of stringing a bow none of them will manage.",
      "The grease and the fire": "Try the bow in order from the right, warming it at the fire and rubbing it with fat, and fail one after another down the whole hall.",
      "The note like a swallow": "Hear the string sing like a swallow under a beggar's hand, and go pale; Zeus thunders once outside, and the arrow goes clean through twelve axes.",
      "The rags thrown off": "Are still calling it an accident when the second arrow is nocked, and there is not a shield or a spear in the room, because the arms went out by torchlight the night before and nobody thought to ask why.",
      "Athena as Mentor": "Break when the aegis shows on the roof-beam and run round the hall like cattle harried by gadflies in spring, and are cut down as they run.",
      "Hermes leads the suitors' souls": "Are led down by Hermes with the golden wand, gibbering like bats in the depth of a cave, past the streams of Ocean and the White Rock and the gates of the Sun to the asphodel meadow. The authenticity of this second descent has been doubted since Alexandria.",
      "Eupeithes raises Ithaca": "Are buried by their families, each carried home to his own island, and their fathers meet in the agora to decide whether the killing was justice or murder."
    },
    bookActs: {
      14: "Exist in this book only as the swineherd describes them: men who will not court honestly or go home, who divide a farm's produce among themselves, and who have made Eumaeus afraid to say his master's name aloud.",
      19: "Are absent from the hall for the first time in the poem. The book's whole atmosphere depends on their having gone home to sleep."
    }
  },

  /* ---------------------------------------------------------- the leaders */
  {
    name: "Antinous",
    aliases: ["Antinoos", "Antinous son of Eupeithes", "the son of Eupeithes"],
    kind: "suitor",
    greek: "Antínoos (Ἀντίνοος)",
    roman: "Antinous",
    homer: "Antínoos Eupeítheos huiós — 'Antinous son of Eupeithes'; the poem gives him no praising epithet of his own, only his father's name",
    order: "Leader of the suitors",
    domain: "The courtship, and the violence in it",
    house: "The suitors and their fathers",
    father: "Eupeithes",
    who: "The most forceful of the suitors and the first of them the poem names. He is the one who states the courtship's terms out loud, who proposes the murder of Telemachus, and who throws the footstool — the poem's cleanest demonstration that the crime in the hall is against xenia and not merely against property. He is also the son of a man Odysseus once saved from a lynching, which the poem sets down without comment.",
    books: [1, 2, 4, 16, 17, 18, 20, 21, 22, 24],
    prominence: 1,
    acts: {
      "The suitors at meat": "Presides over a hundred and eight men eating another man's herds in that man's hall, and is served first.",
      "Telemachus finds his voice": "Answers the boy's first claim on his own house with a wish that Zeus may never make him king in Ithaca. It is the earliest moment at which a suitor says plainly what the courtship is for.",
      "The first assembly in twenty years": "Rounds on Telemachus in open assembly and lays four years of feasting at Penelope's door: she has sent messages to every one of them and meant none of it, and the estate will go on being eaten until she chooses. He offers no defence of the eating.",
      "Antinous and the web of Laertes": "Tells the shroud story — three years of weaving by day and unpicking by night, and the maid who betrayed it — and demands that Telemachus send his mother back to her father to be married off. The poem's first account of Penelope's method comes from the man with most reason to resent it.",
      "The suitors' ambush at Asteris": "Fits out a ship with twenty men and takes it into the strait at Asteris to kill Telemachus on the crossing. The plan is his, and so is the ship.",
      "The ambush failed": "Learns the ship has come home empty and proposes murder to the council: take the boy in the fields or on the road, and divide the property between them. This is the point at which the courtship becomes a conspiracy to kill.",
      "Antinous and Amphinomus": "Presses the killing to a decision and is stopped by Amphinomus, who wants a sign from Zeus first. He drops it, and never raises it in the open again.",
      "Begging along the tables": "Objects that Eumaeus has brought another mouth into a house that is not his, and abuses the swineherd for it in front of the company.",
      "Antinous and the footstool": "Throws a footstool at a beggar who has asked him for bread, catching him on the right shoulder at the base of the back. The other suitors tell him he has just struck a man who might be a god walking the earth in disguise: even they can recite the rule he has broken.",
      "Irus the town beggar": "Sets the fight up, offering the winner a goat's paunch stuffed with fat and blood and a standing place at the suitors' table — a prize invented on the spot for two men he considers beneath notice.",
      "The fight for the doorway": "Guarantees that a starving man will fight by promising to ship the loser to Echetus on the mainland, who cuts off noses and ears.",
      "The gifts extracted": "Gives Penelope a great embroidered robe with twelve gold pins, and does not notice that she has just made the suitors pay bride-gifts into a house her husband is standing in.",
      "The bow of Iphitus": "Sneers at the beggar's being present at the contest at all, and calls for the wine to go round.",
      "The grease and the fire": "Cannot bend the bow, and proposes putting the whole contest off to the next day because today is the feast of Apollo. He treats the archer god's day as an excuse; it is a warning.",
      "The rags thrown off": "Is lifting a two-handled gold cup, turning it in his hands, with no thought of death in him, when the first arrow goes in at the throat and out at the neck. He kicks the table over, the bread and the roast meat go into the dust, and the suitors still think it was an accident.",
      "Eurymachus offers restitution": "Is dead on the floor and immediately useful: Eurymachus loads every offence of four years onto his corpse and offers to pay for the rest."
    },
    bookActs: {
      24: "His soul goes down with the others under Hermes' wand, and his father raises the island to avenge him — the last violence in the poem is set going by a grief for this man."
    }
  },
  {
    name: "Eurymachus",
    aliases: ["Eurymachos", "Eurymachus son of Polybus", "the son of Polybus"],
    kind: "suitor",
    greek: "Eurýmachos (Εὐρύμαχος)",
    roman: "Eurymachus",
    homer: "Eurýmachos Polýbou páis — 'Eurymachus son of Polybus'",
    order: "Leader of the suitors",
    domain: "Persuasion, and the gifts that buy a marriage",
    house: "The suitors and their fathers",
    father: "Polybus",
    who: "The suitor with the best manners and the worst faith. Where Antinous shouts, Eurymachus reassures: he flatters Penelope, promises Telemachus his safety while planning his death, and outbids the others in courting-gifts. The poem is exact about him — it says in so many words that he spoke soothingly and meant murder — and he is the one who tries to buy his way out at the end.",
    books: [1, 2, 15, 16, 17, 18, 20, 21, 22, 24],
    prominence: 1,
    acts: {
      "Telemachus finds his voice": "Asks at once, and courteously, who the stranger was and where he came from. He is the only suitor who checks whether anything has changed.",
      "The omen of the eagles": "Answers Halitherses' reading of the two eagles with the claim that birds fly about under the sun and most of them mean nothing, and threatens the old seer with a fine for frightening a boy. He is wrong, publicly, on the record.",
      "Athena at Sparta": "Is named in Athena's warning at Sparta as the suitor now outbidding all the others in gifts, and as the man Penelope's father and brothers are pressing her to accept.",
      "Penelope on the stair": "Swears to Penelope that no man alive will lay a hand on Telemachus while he lives, having spent that afternoon in a council about how to kill him. Homer states the double dealing outright rather than leaving it to be inferred.",
      "The gifts extracted": "Gives a chain of gold strung with amber beads that catches the light like a small sun, and follows it with a compliment on Penelope's looks.",
      "Eurymachus and the second footstool": "Calls the beggar a man who would rather cadge scraps than work a field, and throws a stool at him; it misses and smashes into the wine-steward's hand, and the jug goes down clattering across the floor.",
      "The grease and the fire": "Warms the bow at the fire, greases it, cannot string it, and says the shame is worse than the lost marriage — that men will say for ever the suitors were not the men Odysseus was. It is the truest sentence any suitor speaks in the poem.",
      "Eurymachus offers restitution": "Recognises Odysseus, puts the whole four years on the dead Antinous, and offers twenty oxen a man in restitution plus bronze and gold until the king is satisfied. Refused, he calls the company to draw swords and go in — and takes an arrow in the liver, doubling over a table with the food scattering under him."
    }
  },
  {
    name: "Amphinomus",
    aliases: ["Amphinomos", "Amphinomus of Dulichium", "Amphinomus son of Nisus"],
    kind: "suitor",
    greek: "Amphínomos (Ἀμφίνομος)",
    roman: "Amphinomus",
    homer: "Amphínomos, Nísou phaídimos huiós — 'Amphinomus, glorious son of Nisus'; the poem adds that his talk pleased Penelope best, for his mind was sound",
    order: "Suitor of Dulichium",
    domain: "Good manners inside a bad cause",
    house: "The suitors and their fathers",
    father: "Nisus",
    who: "The decent suitor, and the poem's argument that decency is not enough. He leads the largest contingent, he twice blocks the plan to murder Telemachus, and Penelope likes his conversation better than anyone else's. Odysseus warns him personally to go home before the master returns, and he understands the warning and stays; Athena, the poem says, had already bound him to be killed by Telemachus' spear.",
    books: [16, 18, 20, 22],
    prominence: 2,
    acts: {
      "Antinous and Amphinomus": "Blocks the murder of Telemachus by asking that they take a sign from Zeus first: if the omens approve, he says, he will do the killing himself. The most humane man in the company is still bidding for the estate.",
      "Amphinomus warned": "Is handed a cup of wine by the beggar and told quietly that a man should get himself home while he still can, because the master of this house is very near. He is troubled, he nods, he walks back to his seat with his head down — and sits.",
      "The eagle with the dove": "Reads the eagle carrying the dove correctly, tells the others the killing of Telemachus will not come off, and calls for dinner instead.",
      "Athena as Mentor": "Charges Odysseus straight on and is speared through the back between the shoulders by Telemachus, who leaves the shaft in him because pulling it out would cost him his own life."
    }
  },
  {
    name: "Ctesippus",
    aliases: ["Ktesippos", "Ctesippus of Same", "Ctesippus son of Polytherses"],
    kind: "suitor",
    greek: "Ktḗsippos (Κτήσιππος)",
    roman: "Ctesippus",
    homer: "anḕr athemístia eidṓs — 'a man versed in lawlessness'",
    order: "Suitor of Same",
    domain: "Money without manners",
    house: "The suitors and their fathers",
    father: "Polytherses",
    who: "A rich suitor from Same, introduced by Homer with the flattest condemnation in the poem: a man who knew lawless things, and who courted the wife of Odysseus trusting in his enormous property. He exists to make one gesture — a guest-gift that is an insult — and to have it returned to him in kind.",
    books: [20, 22],
    prominence: 2,
    acts: {
      "Ctesippus and the ox-hoof": "Throws an ox's hoof at the beggar's head, announcing it as the stranger's guest-portion, since a guest ought to have his share. Odysseus moves his head aside and smiles a grim smile; Telemachus tells Ctesippus that had it struck, his father would have been holding a funeral instead of a wedding.",
      "Athena as Mentor": "Is killed by Philoetius the cowherd, who names the ox-hoof as he throws and calls the spear a guest-gift in return for the one Ctesippus gave."
    }
  },
  {
    name: "Leiodes",
    aliases: ["Leodes", "Leiodes son of Oenops", "Leodes the diviner"],
    kind: "suitor",
    greek: "Leiṓdēs (Λειώδης)",
    roman: "Leiodes",
    homer: "thyoskóos — 'the reader of burnt offerings', their diviner, who alone found their recklessness hateful",
    order: "Diviner of the suitors",
    domain: "Sacrifice, and the reading of it",
    house: "The suitors and their fathers",
    father: "Oenops",
    who: "The suitors' own priest, who sat innermost by the mixing bowl and to whom, Homer says, their recklessness was hateful. He is the test case for guilt by association: he restrained the others, he laid no hand on any woman of the house, and he is killed anyway, mid-sentence. The poem does not soften this.",
    books: [21, 22],
    prominence: 2,
    acts: {
      "The grease and the fire": "Tries the bow first of all the suitors, being nearest the wine, and cannot bend it a finger's breadth. He puts it down and tells them plainly that this bow will take the life and the breath out of many of the best men here — and is shouted at for saying so.",
      "Leiodes and Phemius": "Takes Odysseus by the knees and pleads that he alone held the others back and touched nothing. Odysseus answers that a man who prayed daily over the sacrifices for this house could only have been praying for the master never to come home, and takes his head off with the sword Agelaus dropped, while he is still speaking."
    }
  },
  {
    name: "Agelaus",
    aliases: ["Agelaos", "Agelaus son of Damastor", "Agelaus Damastorides"],
    kind: "suitor",
    greek: "Agélaos (Ἀγέλαος)",
    roman: "Agelaus",
    homer: "Agélaos Damastorídēs — 'Agelaus son of Damastor'",
    order: "Suitor, and their captain in the fight",
    domain: "Command, once the doors are shut",
    house: "The suitors and their fathers",
    father: "Damastor",
    who: "The suitor who speaks reasonably in the hall and gives the orders in the battle. He is the one who proposes the sensible compromise — tell your mother to marry the best man and take the estate — and the one who organises the counter-attack when the arrows start, sending for arms and directing spear-casts. He is killed by Odysseus in the middle of doing it.",
    books: [20, 22],
    prominence: 2,
    acts: {
      "Ctesippus and the ox-hoof": "Takes the floor after Telemachus' rebuke and speaks in the voice of moderation: nobody blames the boy, but he should tell his mother to marry whoever is best and be done with it, and the property is his.",
      "Athena as Mentor": "Rallies the suitors when the arrows run out, sends Melanthius up through the vent for shields and spears, and calls for six casts at Mentor. Odysseus kills him with a spear through the chest, and Agelaus' dropped sword is the one that kills Leiodes."
    }
  },
  {
    name: "Amphimedon",
    aliases: ["Amphimedon son of Melaneus", "the shade of Amphimedon"],
    kind: "suitor",
    greek: "Amphimédōn (Ἀμφιμέδων)",
    roman: "Amphimedon",
    homer: "no formula of his own; Agamemnon in the underworld names him only as the son of Melaneus",
    order: "Suitor, and narrator of Book XXIV",
    domain: "The suitors' version of events",
    house: "The suitors and their fathers",
    father: "Melaneus",
    who: "An Ithacan suitor whose father once entertained Agamemnon and Menelaus when they came to recruit Odysseus for Troy. He matters less for how he lived than for what he does after death: in the asphodel he tells the whole story back from the suitors' side, and it is the only account of the poem's action given by the losers.",
    books: [22, 24],
    prominence: 2,
    acts: {
      "Athena as Mentor": "Grazes Telemachus' wrist with a spear-cast — one of only two wounds the four defenders take all day — and is run through by Telemachus for it.",
      "Hermes leads the suitors' souls": "Goes down with the rest, gibbering, and finds Achilles and Agamemnon already talking in the meadow.",
      "Amphimedon tells the story": "Recognises Agamemnon, whom his father once hosted, and tells the whole four years: the shroud unpicked by night, the beggar abused in the hall, the arms carried out, the axes, the bow, the doors held. He never understood that the beggar was the man, he assumes a god arranged the timing, and his order of events differs from the poem's own — he has Odysseus and Penelope planning the bow contest together, which the narrative nowhere shows.",
      "Agamemnon praises Penelope": "Is the audience, and the occasion: hearing a dead suitor describe a wife who held out for twenty years, Agamemnon breaks into praise of Penelope and back into hatred of Clytemnestra."
    }
  },
  {
    name: "Leocritus",
    aliases: ["Leiocritus", "Liocritus", "Leocritus son of Euenor", "Leocritus Euenorides"],
    kind: "suitor",
    greek: "Leiṓkritos (Λειώκριτος)",
    roman: "Leocritus",
    homer: "Leiṓkritos Euḗnoros huiós — 'Leocritus son of Euenor'",
    order: "Suitor of Ithaca",
    domain: "The dissolving of assemblies",
    house: "The suitors and their fathers",
    father: "Euenor",
    who: "The suitor who breaks up the assembly in Book II. He answers Mentor by telling the Ithacans that even Odysseus himself, walking back in, would die trying to clear his hall of so many men — and then declares the meeting closed, and it closes. He is the poem's demonstration that the town's public institutions have stopped working.",
    books: [2, 22],
    prominence: 3,
    acts: {
      "Mentor's rebuke": "Answers Mentor with contempt, tells the assembly that Odysseus would come off worst if he tried it, and dismisses the Ithacans back to their fields. They go, which proves everything Mentor has just said about them.",
      "Athena as Mentor": "Is killed by a spear from Telemachus that goes in at the flank and comes out through the back, and he falls forward onto his face."
    }
  },
  {
    name: "Eurynomus",
    aliases: ["Eurynomos", "Eurynomus son of Aegyptius"],
    kind: "suitor",
    greek: "Eurýnomos (Εὐρύνομος)",
    roman: "Eurynomus",
    homer: "no formula of his own",
    order: "Suitor of Ithaca",
    domain: "The generation that stayed behind",
    house: "The suitors and their fathers",
    father: "Aegyptius",
    siblings: ["Antiphus"],
    who: "One of the four sons of the old Ithacan Aegyptius, and the one who joined the suitors. His brother Antiphus sailed to Troy with Odysseus and was eaten by the Cyclops. Homer names both in the same breath at the assembly, which puts the whole quarrel of the poem inside a single household: one son died for the king, the other is eating his estate.",
    books: [2, 22],
    prominence: 3,
    acts: {
      "The first assembly in twenty years": "Sits among the suitors while his father stands up and asks the town for news of the son who is never coming home.",
      "Athena as Mentor": "Is one of the six best suitors still on their feet when the aegis appears above the hall, and one of the six cut down in the volley that follows."
    }
  },
  {
    name: "Eurydamas",
    aliases: ["Eurydamas the suitor"],
    kind: "suitor",
    greek: "Eurydámas (Εὐρυδάμας)",
    roman: "Eurydamas",
    homer: "no formula of his own",
    order: "Suitor",
    domain: "The bride-gifts",
    house: "The suitors and their fathers",
    who: "A suitor known for one gift and one death. He appears when Penelope makes the company pay court-gifts and again in the list of the killed; the poem gives him nothing else, which is itself the point about most of the hundred and eight.",
    books: [18, 22],
    prominence: 3,
    acts: {
      "The gifts extracted": "Gives Penelope a pair of earrings with three drops apiece, and Homer says a great grace shone from them.",
      "Athena as Mentor": "Is killed by Odysseus in the rout, in a line that disposes of two men at once."
    }
  },
  {
    name: "Elatus",
    aliases: ["Elatos", "Elatus the suitor"],
    kind: "suitor",
    greek: "Élatos (Ἔλατος)",
    roman: "Elatus",
    homer: "no formula of his own",
    order: "Suitor",
    domain: "A name in the killing list",
    house: "The suitors and their fathers",
    who: "One of the six best suitors left standing at the height of the fight. He is named once, at his death, and the naming matters because of who kills him: a slave.",
    books: [22],
    prominence: 3,
    acts: {
      "Athena as Mentor": "Is killed by Eumaeus the swineherd, who is fighting with a spear in the hall of the house he has kept pigs for these twenty years."
    }
  },
  {
    name: "Peisandros",
    aliases: ["Peisander", "Pisander", "Peisandros son of Polyctor", "Peisander son of Polyctor"],
    kind: "suitor",
    greek: "Peísandros (Πείσανδρος)",
    roman: "Pisander",
    homer: "Peísandros Polyktorídēs — 'Peisandros son of Polyctor'",
    order: "Suitor",
    domain: "The bride-gifts",
    house: "The suitors and their fathers",
    father: "Polyctor",
    who: "A suitor with a father's name attached to him at both his appearances: he pays a courting-gift in Book XVIII and dies in Book XXII. Homer counts him among the six best men the company has left when the fighting turns.",
    books: [18, 22],
    prominence: 3,
    acts: {
      "The gifts extracted": "Gives Penelope a necklace, a very beautiful ornament, and a servant carries it upstairs with the rest.",
      "Athena as Mentor": "Is killed by Philoetius the cowherd, and gets his patronymic in the same line as the spear."
    }
  },
  {
    name: "Demoptolemus",
    aliases: ["Demoptolemos", "Demoptolemus the suitor"],
    kind: "suitor",
    greek: "Dēmoptólemos (Δημοπτόλεμος)",
    roman: "Demoptolemus",
    homer: "no formula of his own",
    order: "Suitor",
    domain: "A name in the killing list",
    house: "The suitors and their fathers",
    who: "One of the six best suitors named at the turn of the battle, and the first of the four killed in the volley that follows Athena's sign. The poem records his name and his killer and nothing more.",
    books: [22],
    prominence: 3,
    acts: {
      "Athena as Mentor": "Is killed by Odysseus, first of the four names in that line of casts."
    }
  },
  {
    name: "Euryades",
    aliases: ["Euryades the suitor"],
    kind: "suitor",
    greek: "Euryádēs (Εὐρυάδης)",
    roman: "Euryades",
    homer: "no formula of his own",
    order: "Suitor",
    domain: "A name in the killing list",
    house: "The suitors and their fathers",
    who: "A suitor named once, in the volley of four casts that answers Agelaus' rally. He is one of the men Telemachus kills, which is the poem's way of registering that the boy is now doing a man's share.",
    books: [22],
    prominence: 3,
    acts: {
      "Athena as Mentor": "Is killed by Telemachus in the same volley that takes Demoptolemus, Elatus and Peisandros."
    }
  },

  /* ---------------------------------------------------------- the fathers */
  {
    name: "Eupeithes",
    aliases: ["Eupithes", "Eupeithes father of Antinous"],
    kind: "mortal",
    greek: "Eupeíthēs (Εὐπείθης)",
    roman: "Eupithes",
    homer: "no formula of his own; the poem identifies him as the father of Antinous, and as a man whose grief for his son would not let him eat",
    order: "Ithacan noble, leader of the revenge",
    domain: "The feud, and the case for it",
    house: "The suitors and their fathers",
    children: ["Antinous"],
    who: "Antinous' father, and the last man in the poem to take up arms. His history is the sharpest irony in the cluster: years before, he joined Taphian pirates in a raid on the Thesprotians, who were Ithaca's friends, and the people wanted him dead for it — and Odysseus was the man who stood between him and them. He raises the island against the king who saved him.",
    books: [16, 24],
    prominence: 2,
    acts: {
      "Penelope on the stair": "Is remembered rather than present. Penelope, coming down on Antinous, reminds him that his father came to this house as a fugitive with the whole people baying for his blood over the Thesprotian raid, and that Odysseus held them off. The suitor's family owes the king its life, and the son is planning the king's son's murder.",
      "Eupeithes raises Ithaca": "Buries Antinous, weeps in the assembly, and calls the Ithacans out to kill Odysseus before he can slip away to Pylos: a man who lost one shipload of Ithacans at Troy and another at sea, and has now killed the best of the young men left. Halitherses answers him and more than half the assembly walks out; the rest arm and follow him to the farm.",
      "Laertes' cast, and the truce": "Is the first man Laertes' spear finds. It goes through the bronze cheek-piece of his helmet without stopping and he goes down with a clatter of armour — the old man's single throw kills the cause of the war, and Athena stops the rest of it in the next minute."
    }
  },
  {
    name: "Polybus",
    aliases: ["Polybus of Ithaca", "Polybus father of Eurymachus"],
    kind: "mortal",
    greek: "Pólybos (Πόλυβος)",
    roman: "Polybus",
    homer: "no formula of his own",
    order: "Ithacan noble",
    domain: "A patronymic that functions as a rank",
    house: "The suitors and their fathers",
    children: ["Eurymachus"],
    who: "The father of Eurymachus, and never anything else in the poem — but the phrase 'son of Polybus' follows Eurymachus from his first line to his last, and does the work of a title. The name is heavily reused in the Odyssey: a Phaeacian craftsman, an Egyptian host of Menelaus, and one of the six best suitors killed in the hall all carry it, and the poem nowhere says whether the suitor Polybus is this man.",
    books: [1, 15, 16, 18, 21, 22],
    prominence: 3,
    bookActs: {
      1: "Enters the poem as a patronymic and stays one. Eurymachus is introduced as the son of Polybus at his first word in the hall, and the naming places him among the leading families of the island without a further syllable of explanation."
    }
  },
  {
    name: "Nisus",
    aliases: ["Nisos", "Nisus of Dulichium", "Nisus son of Aretias"],
    kind: "mortal",
    greek: "Nîsos (Νῖσος)",
    roman: "Nisus",
    homer: "Nîsos Arētiádēs ánax — 'lord Nisus son of Aretias'",
    order: "Lord of Dulichium",
    domain: "The wheat lands across the water",
    house: "The suitors and their fathers",
    children: ["Amphinomus"],
    who: "The ruler of Dulichium, the largest and richest of the islands sending suitors, and the father of Amphinomus. He never appears; his rank is what the poem is describing when it says whose son the most decent suitor is.",
    books: [16, 18],
    prominence: 3,
    bookActs: {
      16: "Named when his son is. Amphinomus is the glorious son of lord Nisus son of Aretias, which puts the best-mannered man in the hall at the head of the largest contingent — fifty-two suitors out of a hundred and eight, from a wheat-growing island that has nothing to do with Ithaca's quarrel."
    }
  },
  {
    name: "Oenops",
    aliases: ["Oinops", "Oenops father of Leiodes"],
    kind: "mortal",
    greek: "Oînops (Οἶνοψ)",
    roman: "Oenops",
    homer: "no formula of his own",
    order: "Ithacan noble",
    domain: "A name that places a son",
    house: "The suitors and their fathers",
    children: ["Leiodes"],
    who: "The father of the suitors' diviner. He exists in the poem for exactly one line's worth of identification, and the identification matters: the man who reads the burnt offerings for the company is given a father and a standing before the poem decides whether to spare him.",
    books: [21],
    prominence: 3,
    bookActs: {
      21: "Supplies his son's name at the one moment it counts. When Leiodes stands up to be the first man to try the bow, Homer sets him down as the son of Oenops, their reader of sacrifices, who sat innermost by the mixing bowl — and that is the whole of the father's presence in the Odyssey."
    }
  },
  {
    name: "Damastor",
    aliases: ["Damastor father of Agelaus"],
    kind: "mortal",
    greek: "Damástōr (Δαμάστωρ)",
    roman: "Damastor",
    homer: "no formula of his own",
    order: "Ithacan noble",
    domain: "A name that places a son",
    house: "The suitors and their fathers",
    children: ["Agelaus"],
    who: "Father of Agelaus, and a name carried entirely by the patronymic Damastorides. Homer attaches it to his son at each of his son's three appearances — the moderate speech, the rally in the hall, the death — as though the family were worth marking even when the man is not described.",
    books: [20, 22],
    prominence: 3,
    bookActs: {
      22: "Is present only in his son's name. Agelaus Damastorides gives the orders for the suitors' last stand, and the patronymic is repeated over the body."
    }
  },
  {
    name: "Melaneus",
    aliases: ["Melaneus father of Amphimedon"],
    kind: "mortal",
    greek: "Melaneús (Μελανεύς)",
    roman: "Melaneus",
    homer: "no formula of his own",
    order: "Ithacan noble",
    domain: "A house that once received the Atreidae",
    house: "The suitors and their fathers",
    children: ["Amphimedon"],
    who: "An Ithacan whose house entertained Agamemnon and Menelaus when they came to the island to recruit Odysseus for Troy. He is the cluster's neatest piece of symmetry: the father kept guest-friendship with the kings who took Odysseus away, and the son died abusing the guest-friendship of Odysseus' own hall.",
    books: [22, 24],
    prominence: 3,
    bookActs: {
      24: "Is remembered by a ghost. Agamemnon, hearing his son speak in the asphodel, recalls being a guest in Melaneus' house on Ithaca with Menelaus, arguing for a month to get Odysseus aboard the ships. It is the only glimpse the poem gives of Ithaca before the war."
    }
  },
  {
    name: "Polyctor",
    aliases: ["Polyktor", "Polyctor father of Peisandros"],
    kind: "mortal",
    greek: "Polýktōr (Πολύκτωρ)",
    roman: "Polyctor",
    homer: "no formula of his own",
    order: "Ithacan noble",
    domain: "A name on a patronymic and possibly on a well",
    house: "The suitors and their fathers",
    children: ["Peisandros"],
    who: "The father of the suitor Peisandros. An Ithacan of the same name is remembered as one of the three men — with Ithacus and Neritus — who built the town's walled spring on the road up from the farm; whether that is this Polyctor or an ancestor, the poem does not say.",
    books: [17, 18, 22],
    prominence: 3,
    bookActs: {
      17: "Is the name on the stonework. The spring where Melanthius meets the beggar on the road to town was made by Ithacus, Neritus and Polyctor, walled round, shaded by a ring of black poplars, with an altar to the Nymphs above it where every passer-by makes an offering — the one piece of civic building the poem describes on Ithaca."
    }
  },
  {
    name: "Euenor",
    aliases: ["Euenor father of Leocritus", "Evenor"],
    kind: "mortal",
    greek: "Euḗnōr (Εὐήνωρ)",
    roman: "Euenor",
    homer: "no formula of his own",
    order: "Ithacan noble",
    domain: "A name that places a son",
    house: "The suitors and their fathers",
    children: ["Leocritus"],
    who: "Father of Leocritus, the suitor who closes the assembly in Book II. The name appears only in the patronymic, once when his son silences the town and once when his son is speared.",
    books: [2, 22],
    prominence: 3,
    bookActs: {
      2: "Is a name attached to the man who dissolves the only assembly Ithaca holds in twenty years — a father's name used to give a young man's dismissal of the town some weight."
    }
  },

  /* --------------------------------------------------------- the townsmen */
  {
    name: "Aegyptius",
    aliases: ["Aigyptios", "the old man Aegyptius"],
    kind: "mortal",
    greek: "Aigýptios (Αἰγύπτιος)",
    roman: "Aegyptius",
    homer: "hḗrōs Aigýptios — 'the hero Aegyptius', bowed with age, and he knew a thousand things",
    order: "Ithacan elder",
    domain: "The memory of the town",
    house: "The household of Ithaca",
    children: ["Antiphus", "Eurynomus"],
    who: "The oldest man in the assembly, bent double with age, and the first Ithacan to speak in the poem. He had four sons: one went to Troy with Odysseus and was eaten by the Cyclops, one sits among the suitors, and two work the family fields. He does not know the first is dead.",
    books: [2],
    prominence: 3,
    acts: {
      "The first assembly in twenty years": "Rises first and asks who has called the Ithacans together after twenty years — hoping, aloud, that it is news of the army coming back. He blesses whoever summoned the meeting, and blesses him before he knows it is a boy calling the town to witness against his own guests."
    }
  },
  {
    name: "Antiphus",
    aliases: ["Antiphos", "Antiphus son of Aegyptius"],
    kind: "mortal",
    greek: "Ántiphos (Ἄντιφος)",
    roman: "Antiphus",
    homer: "no formula of his own",
    order: "Ithacan, lost at sea",
    domain: "The men who did not come back",
    house: "The household of Ithaca",
    father: "Aegyptius",
    siblings: ["Eurynomus"],
    who: "The son of Aegyptius who sailed to Troy with Odysseus and was the last man the Cyclops made a supper of in the hollow cave. His father is still waiting for him at the assembly, and the poem lets the reader know before the father does. A second Ithacan of the same name, one of Odysseus' old companions, greets Telemachus in the town in Book XVII; he cannot be this man, and Homer does not explain the doubling.",
    books: [2, 17],
    prominence: 3,
    acts: {
      "The first assembly in twenty years": "Is named as the son Aegyptius is waiting for, and in the same breath as the cave — the poem sets the father's hope and the son's death in adjacent lines and lets them stand.",
      "Telemachus into town": "An Antiphus meets Telemachus on the morning of the thirty-eighth day, with Mentor and Halitherses, old comrades of his father who have kept faith with the house and never once acted on it."
    }
  },
  {
    name: "Halitherses",
    aliases: ["Halitherses son of Mastor", "Halitherses the augur"],
    kind: "seer",
    greek: "Halithérsēs (Ἁλιθέρσης)",
    roman: "Halitherses",
    homer: "'he surpassed all men of his generation in knowing birds and in speaking what was fated'",
    order: "Augur of Ithaca",
    domain: "Bird-signs, and public warning",
    house: "The household of Ithaca",
    father: "Mastor",
    who: "The town's augur, and the man who is right twice, twenty-two years apart. He told the Ithacans at the fleet's sailing that Odysseus would come home in the twentieth year, unrecognised, having lost every companion; he reads the eagles over the assembly and says the same again. Both times he is dismissed, and both times the poem records that he was dismissed.",
    books: [2, 17, 24],
    prominence: 2,
    acts: {
      "The omen of the eagles": "Reads the two eagles Zeus sends over the meeting — they wheel, tear at each other's throats, and sheer off to the right over the roofs — and tells the suitors that Odysseus is near and their deaths are already being arranged. He reminds them that he prophesied this at the sailing and that every word of it came true. Eurymachus offers him a fine for frightening children.",
      "Telemachus into town": "Greets Telemachus in the town with Mentor and Antiphus, one of the old men who kept faith and could do nothing.",
      "Eupeithes raises Ithaca": "Stands up in the last assembly of the poem and tells the Ithacans the truth to their faces: this happened through their own softness, they would not restrain their own sons, and they should not march now. More than half the meeting gets up shouting and goes home; the rest take their arms and follow Eupeithes."
    }
  },
  {
    name: "Mentor",
    aliases: ["Mentor son of Alcimus", "Mentor of Ithaca"],
    kind: "mortal",
    greek: "Méntōr (Μέντωρ)",
    roman: "Mentor",
    homer: "no epithet of his own; the poem's line about him is that Odysseus, going away in his ships, gave him the whole house in charge",
    order: "Steward of the house in the king's absence",
    domain: "A trust that was not kept, and a face a goddess wears",
    house: "The household of Ithaca",
    father: "Alcimus",
    who: "The Ithacan friend Odysseus left in charge of his household when he sailed, and who did nothing with the charge for twenty years. Athena borrows his shape four times — for the voyage to Pylos, for the assembly, for the killing, for the truce — so that the poem's most decisive interventions arrive in the body of its most ineffectual man. Readers should keep the two apart: almost everything Mentor is remembered for is done by a goddess wearing him.",
    books: [2, 3, 4, 17, 22, 24],
    prominence: 2,
    acts: {
      "Mentor's rebuke": "Stands up in the assembly and rebukes not the suitors but the Ithacans: a hundred men are eating a king's estate and the whole town sits watching in silence. It is the only thing the real man does in the poem, and Leocritus talks over it.",
      "Telemachus prays by the sea": "Lends his face to Athena, who takes his shape and voice on the shore to promise Telemachus a ship, a crew, and a companion. From this point the reader has to keep asking which Mentor is speaking.",
      "The night sailing": "In the goddess's borrowing of him, gathers a crew through the town, gets Noemon's ship down to the water at dusk, and sits at the stern beside Telemachus while a following wind comes up over the wine-dark sea.",
      "The hecatomb on the beach": "Athena, in his shape, walks Telemachus up the beach at Pylos through the smoke of eighty-one bulls and tells him to stop being shy, since some of what he says will be put into his mind by a god.",
      "Nestor's welcome": "Takes the gold cup Peisistratus offers and prays aloud to Poseidon at the sacrifice — a goddess praying to a god through a mortal's mouth, and getting her own prayer answered.",
      "Athena departs as a sea-eagle": "The disguise is dropped in front of the whole company: Athena goes out of Mentor's body in the shape of a sea-eagle, and Nestor takes Telemachus by the hand knowing at last who has been walking beside him.",
      "Telemachus into town": "The real man greets Telemachus in the street on the morning of the thirty-eighth day and goes back to his own affairs.",
      "Athena as Mentor": "Athena wears him again in the middle of the killing. Agelaus threatens Mentor with death and the confiscation of his property if he helps; the goddess reproaches Odysseus for fighting less well than he did at Troy, and then goes up to the smoke-blackened roof-beam in the shape of a swallow to watch.",
      "Laertes' cast, and the truce": "Athena, in his voice, calls Laertes to make the throw, and afterwards stops the battle with a shout that turns the Ithacans white and sends their weapons into the dust. The poem's last words are spoken by a goddess wearing this man's face."
    }
  },
  {
    name: "Peiraeus",
    aliases: ["Piraeus", "Peiraios", "Peiraeus son of Clytius"],
    kind: "mortal",
    greek: "Peíraios (Πείραιος)",
    roman: "Piraeus",
    homer: "Peíraios Klytídēs — 'Peiraeus son of Clytius'",
    order: "Companion of Telemachus",
    domain: "Guest-friendship done correctly",
    house: "The household of Ithaca",
    father: "Clytius",
    who: "Telemachus' most trusted companion on the voyage, and the poem's quiet counter-example to the whole suitor cluster. He takes the ship into town while Telemachus goes overland past the ambush, and he takes a stranger with blood on his hands into his own house on nothing but a friend's word. Nobody praises him for it and he asks for nothing.",
    books: [15, 17],
    prominence: 2,
    acts: {
      "The landing beyond the ambush": "Is given charge of the ship when Telemachus puts ashore on the far side of the island to avoid the suitors waiting in the strait, and takes her round to the town with the crew.",
      "The hawk on the right": "Takes Theoclymenus into his own household at Telemachus' request — a fugitive under a blood-guilt, housed on a friend's word alone. Set beside a hundred and eight men eating a house they were let into, it is the poem's shortest lesson in xenia.",
      "Telemachus into town": "Brings Theoclymenus through the town to the hall and offers to send Menelaus' gifts up too. Telemachus tells him to keep them: if the suitors kill him in the house, he would rather Peiraeus had the treasure than they did."
    }
  },
  {
    name: "Noemon",
    aliases: ["Noemon son of Phronius"],
    kind: "mortal",
    greek: "Noḗmōn (Νοήμων)",
    roman: "Noemon",
    homer: "Noḗmōn, Phroníoio phaídimos huiós — 'Noemon, glorious son of Phronius'",
    order: "Ithacan shipowner",
    domain: "The ship the Telemachy runs on",
    house: "The household of Ithaca",
    father: "Phronius",
    who: "The Ithacan who lends Telemachus a fast ship without argument, and who then gives the whole voyage away by asking about it in the wrong room. He is not a traitor and the poem does not treat him as one; he wants his ship back to fetch mares from Elis, and one innocent question puts twenty armed men into the strait.",
    books: [2, 4],
    prominence: 3,
    acts: {
      "The night sailing": "Lends a swift ship to Athena in Mentor's shape, asked at short notice and given at once. The entire Telemachy is carried on one neighbour's loan.",
      "The suitors' ambush at Asteris": "Walks up to Antinous in the hall and asks when Telemachus is bringing the ship home, because he needs it to fetch mares from Elis. It is how the suitors learn the boy has sailed at all, and the ambush is fitted out that same day."
    }
  },

  /* ------------------------------------------------------------- the town */
  {
    name: "The men of Ithaca",
    aliases: [
      "the Ithacans",
      "the Ithacan assembly",
      "the people of Ithaca",
      "the townsmen of Ithaca",
      "the demos of Ithaca"
    ],
    kind: "people",
    greek: "Ithakḗsioi (Ἰθακήσιοι)",
    roman: "Ithacenses",
    homer: "Ithakḗsioi — 'men of Ithaca', the vocative every speaker in the assembly uses",
    order: "The assembly of the island",
    domain: "Public judgement, and the failure to exercise it",
    house: "The household of Ithaca",
    who: "The free population of a kingdom that has had no king, no assembly and no court for twenty years. They are neither loyal nor hostile: they are absent, and the poem makes their absence the condition that lets the suitors work. When they finally act, in the last hundred lines, they act to avenge the suitors, and a goddess has to stop them.",
    books: [2, 16, 24],
    prominence: 2,
    acts: {
      "The first assembly in twenty years": "Come to the agora when the heralds call, sit through an accusation of a hundred men eating a royal estate, and say nothing at all. The silence is the poem's charge against them.",
      "Mentor's rebuke": "Are Mentor's target, not the suitors: he tells them their silence is the crime, since a few young men risk their necks and the whole town outnumbers them and will not move. Leocritus dismisses the meeting and they leave, which settles the argument in Mentor's favour.",
      "Eupeithes raises Ithaca": "Divide. Eupeithes calls for blood; Medon says a god stood beside Odysseus in the hall; Halitherses tells them the fault is their own. More than half the assembly gets up with a great shout and goes home. The smaller half arms and marches out to Laertes' farm.",
      "Laertes' cast, and the truce": "Break and run at Athena's shout, drop their weapons in the dust, and are saved from being cut down in the fields by a thunderbolt at the goddess's feet. The poem ends with a peace imposed from outside on a town that never chose it, the killings unpaid for and both sides put under oath — an ending whose authenticity has been disputed since antiquity."
    }
  }
];
