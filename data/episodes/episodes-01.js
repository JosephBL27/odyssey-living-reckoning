/*
 * Book I - A House Without Its Master.
 *
 * STUDY_01      cast, locus, motifs.
 * READINGS_01   the fuller account the one-line summary compresses.
 * BEATS_01      what happens, in order, plainly. The decisive clause -
 *               the disguise, the lie, the recognition, the breach of xenia -
 *               is wrapped in ** ** and named outright.
 * COMMENTARY_01 sources, craft, afterlife.
 *
 * Titles are the primary keys, copied from SPINE.json with plain apostrophes.
 */

export const STUDY_01 = {
  "The proem": {
    cast: ["Homer's narrator", "The Muse", "Odysseus", "The companions", "Calypso", "Poseidon / Neptune", "Helios"],
    locus: "The poet's invocation, before the poem has a place",
    motifs: ["the withheld name", "nostos", "the crew's own recklessness", "beginning in the middle"]
  },
  "The council on Olympus": {
    cast: ["Zeus / Jupiter", "Athena / Minerva", "Poseidon / Neptune", "Hermes / Mercury", "Aegisthus", "Orestes", "Calypso"],
    locus: "The house of Zeus on Olympus, with Poseidon away among the Ethiopians",
    motifs: ["divine council", "the Oresteia paradigm", "mortal responsibility", "a plan in two halves"]
  },
  "Athena as Mentes": {
    cast: ["Athena / Minerva", "Telemachus", "The suitors", "The house-servants", "Odysseus", "Laertes"],
    locus: "The outer gate and hall of Odysseus on Ithaca",
    motifs: ["disguise", "guest-friendship", "the spear taken at the door", "counsel from a stranger"]
  },
  "The suitors at meat": {
    cast: ["The suitors", "Telemachus", "Athena / Minerva", "The house-servants", "Phemius", "Odysseus"],
    locus: "The hall of Odysseus on Ithaca",
    motifs: ["guest-friendship violated", "a household eaten", "impunity", "the absent master"]
  },
  "Phemius sings the returns": {
    cast: ["Phemius", "Penelope", "Telemachus", "The suitors", "Athena / Minerva", "The two handmaids"],
    locus: "The hall, and the stair down from Penelope's upper room",
    motifs: ["song inside the poem", "the newest song", "grief interrupted", "a son silencing his mother"]
  },
  "Telemachus finds his voice": {
    cast: ["Telemachus", "Antinous", "Eurymachus", "The suitors", "Odysseus", "Mentes of the Taphians"],
    locus: "The shadowy hall at evening",
    motifs: ["first public speech", "the assembly announced", "concealment learned", "inherited cunning"]
  },
  "Eurycleia and the sleepless night": {
    cast: ["Telemachus", "Eurycleia", "Laertes", "Athena / Minerva", "Odysseus", "The suitors"],
    locus: "The high bedchamber in the courtyard of Odysseus",
    motifs: ["the nurse", "a bought servant", "the planted recognition", "a sleepless night"]
  }
};

export const READINGS_01 = {
  "The proem": {
    reading: "The poem opens by refusing a name. For twenty-one lines its subject is only andra, a man, carried by epithets instead: polytropos, the man of many turns, who sacked the citadel of Troy, saw the cities and minds of many peoples, and suffered at sea trying to bring himself and his companions home. He failed with the companions, and Homer says so at once and without softening it. They ate the cattle of Helios and were destroyed by their own recklessness, and the god took their day of return away. Only then is the Muse asked to begin wherever she likes, so the story is entered in the tenth year after the war, with every other survivor home and one man kept on an island by the nymph Calypso.",
    turn: "The request that the Muse begin hamothen, from some point, which commits the poem to its last forty days and leaves ten years of sea to be told later by the man who survived them.",
    after: "A hero named once, a crew already dead, and a plot that turns out to be the recovery of a single house."
  },
  "The council on Olympus": {
    reading: "Poseidon is away feasting among the Ethiopians, and the rest of the gods meet in the house of Zeus, who opens by thinking about Aegisthus. Warned off explicitly by Hermes, Aegisthus murdered Agamemnon and took his wife anyway, and Orestes killed him for it. Mortals, Zeus says, blame the gods for troubles they enlarge themselves beyond their allotted share. Athena redirects the complaint to Odysseus, seven years on Ogygia with no ship and no companions and a daughter of Atlas working on him to forget Ithaca, and asks why Zeus is so set against him. Zeus answers that it is Poseidon, still furious about his blinded son. The council issues an order in two halves, and the poem's double structure comes out of it: Hermes to Calypso, Athena to Ithaca.",
    turn: "Zeus conceding that Odysseus must be let home, after which Poseidon can delay the return but no longer prevent it.",
    after: "The Oresteia installed as the pattern everyone in the poem will be measured against: Orestes for Telemachus, Aegisthus for the suitors, Clytemnestra for the wife Penelope refuses to be."
  },
  "Athena as Mentes": {
    reading: "Athena comes down to Ithaca in the shape of Mentes, lord of the Taphians and an old guest-friend of Laertes, and stands at the outer gate holding a bronze spear. Telemachus, sitting miserable among the suitors, sees her first and is ashamed that a stranger should be left waiting at the door: he takes her hand, takes the spear from her, seats her apart from the noise, and feeds her before asking a single question. Her cover story is modest, a trader carrying iron to Temese. Then she gives the house what twenty years have not produced, word that Odysseus is alive and detained, and a set of instructions: call an assembly, put the suitors out, sail to Pylos and Sparta, and remember what Orestes got by killing his father's murderer. She leaves like a bird, and Telemachus understands he has been talking to a god.",
    turn: "The spear taken from the visitor's hand at the gate, hospitality performed correctly, which is what earns this household its only piece of true counsel in twenty years.",
    after: "The poem's working model of xenia, laid down in full so every later reception can be judged against it, and a son with a voyage to make."
  },
  "The suitors at meat": {
    reading: "The suitors come in while the guest is being seated and take their places in rows, on the hides of oxen they slaughtered themselves out of Odysseus' herds. Heralds pour water over their hands, maids heap bread into baskets, boys fill the mixing-bowls to the brim, and the men put out their hands to the food. Homer describes a faultless feast and lets the reader work out whose animals it was made from. Telemachus leans his head close to the stranger's so the others will not hear, and says what she is looking at: men eating another's living with impunity, who would be scattered in a moment if the man whose bones are whitening somewhere came through the door. This is the poem's standing violation of guest-friendship, and it is staged as good manners.",
    turn: "Telemachus naming the offence aloud to an outsider, which converts a private humiliation into a case somebody else could act on.",
    after: "A house being eaten from the inside, and a running account the poem does not settle until Book XXII."
  },
  "Phemius sings the returns": {
    reading: "The eating is done, and the herald puts the lyre into the hands of Phemius, who sings for the suitors because he has no choice. His subject is the bitter homecoming the Achaeans had from Troy, which is the Odyssey's own subject performed inside the Odyssey, to the men obstructing the one return it cares about. Penelope hears it upstairs, comes down the steep stair with two handmaids, stops by the doorpost with her veil across her face, and asks in tears for a different song, since this one wears her heart away. Telemachus refuses her in front of the whole hall: the singer is not to blame, Zeus is, people always praise the newest song most, and Odysseus was not the only man who lost his homecoming. Then he sends her back upstairs.",
    turn: "Telemachus taking the choice of song away from his mother, the first authority he exercises over anyone.",
    after: "Penelope's grief made a private matter behind a closed door, and a demonstration that the poem knows exactly what kind of poem it is."
  },
  "Telemachus finds his voice": {
    reading: "The suitors fill the shadowy hall with noise, each of them praying to lie beside Penelope, and Telemachus stands up and calls them what they are: his mother's suitors, and men of overbearing insolence. He proposes that they finish the meal quietly, announces that at dawn he will summon the Ithacans to assembly, and states the demand he means to make there. Leave my halls; feast at one another's houses; eat your own stores. If they would rather consume one man's living without recompense, let them, but he will call on the gods and Zeus may grant a reckoning nobody pays for. They bite their lips and marvel at his boldness. Antinous mocks the idea of his ever being king; Eurymachus asks, more smoothly, about the visitor. Telemachus gives them the cover story and keeps the god to himself.",
    turn: "The announcement of the assembly, which commits him publicly and makes the suitors' ambush in Book IV inevitable.",
    after: "A son who can hold a room, and who has just found out how useful it is not to say everything he knows."
  },
  "Eurycleia and the sleepless night": {
    reading: "Telemachus goes up to his bedchamber, built high in the courtyard with a clear view on every side, and Eurycleia walks ahead of him with blazing torches. Homer stops the action to say who she is, at length and at the least urgent moment in the book: daughter of Ops son of Peisenor, bought by Laertes in her first youth for the price of twenty oxen, honoured in the house as much as his own wife and never taken to his bed, because he would not provoke his wife's anger. She nursed Telemachus and loves him best of the household. He sits on the bed, pulls off his soft tunic and puts it into her hands; she folds it, smooths it, hangs it on a peg, goes out and shoots the bolt home by its strap. He lies awake under a fleece all night.",
    turn: "The door pulled to by its silver handle and bolted from outside, which closes the poem's first day on a boy who has stopped waiting.",
    after: "Eurycleia established as the household's memory, and the one person in it who will know Odysseus by his body before anybody knows him by his word."
  }
};

export const BEATS_01 = {
  "The proem": [
    "The poet asks the Muse to tell of a man of many turns, polytropos, driven wide over the world after he sacked the sacred citadel of Troy.",
    "The man saw the cities of many peoples and learned their minds, and suffered much at sea trying to win his own life and his companions' homecoming.",
    "He failed with the companions: they slaughtered and ate the cattle of Helios Hyperion, and Homer states plainly that they died of their own recklessness and the god took their day of return.",
    "The Muse is asked to begin at whatever point she chooses, so the poem enters the story in the tenth year after Troy rather than at the war.",
    "**Only after all of that does the poem give the name: for twenty-one lines the hero is andra, a man, and Odysseus is not spoken until the last line of the proem.**",
    "Every other survivor of the war is home; one man is held on an island by the nymph Calypso, who wants him for a husband.",
    "The gods pity him, all except Poseidon, who is implacable and is away at a feast among the Ethiopians at the edge of the world."
  ],
  "The council on Olympus": [
    "With Poseidon absent among the Ethiopians, the gods gather in the house of Zeus.",
    "Zeus opens by thinking aloud about Aegisthus, who murdered Agamemnon and married his wife although Hermes had been sent expressly to warn him off.",
    "Mortals, Zeus complains, blame the gods for their sufferings when they enlarge those sufferings themselves, beyond what was allotted them.",
    "Orestes killed Aegisthus for the murder, and Zeus names that vengeance with approval.",
    "Athena raises Odysseus: seven years on Ogygia, no ship and no companions, and Calypso working on him with soft words to make him forget Ithaca.",
    "Zeus answers that he has not forgotten Odysseus, and that the obstacle is Poseidon, still enraged because Odysseus blinded his son the Cyclops Polyphemus.",
    "**The council settles a plan in two halves: Hermes will go to Ogygia and order Calypso to release Odysseus, and Athena will go to Ithaca to put spirit into his son.**",
    "Athena adds the second errand herself: Telemachus is to call the Ithacans to assembly, warn the suitors off, and then sail to Pylos and Sparta for news of his father and a name of his own."
  ],
  "Athena as Mentes": [
    "Athena binds on her golden sandals, takes up a heavy bronze spear, and comes down from Olympus to the gates of Odysseus' court on Ithaca.",
    "**She stands at the outer gate disguised as Mentes, lord of the Taphians and an old guest-friend of Laertes, which is the first of the poem's many disguises and a god's.**",
    "Telemachus, sitting among the suitors and imagining his father walking in and scattering them, sees the stranger first and is ashamed that anyone should be left standing at the door.",
    "He takes her by the right hand, takes the spear from her, and seats her on a chair with a footstool, apart from the suitors so their noise will not spoil her meal.",
    "A maid brings water for her hands, the housekeeper brings bread, a carver brings meat, a herald pours wine - and only when she has eaten does Telemachus ask who she is and where she comes from.",
    "She says she is Mentes son of Anchialus, sailing to Temese with a cargo of iron to trade for copper, and claims guest-friendship with Laertes from long ago.",
    "She tells him Odysseus is alive, held on a sea-girt island by rough men, and will not be kept from home much longer.",
    "Her advice is practical: call the Ithacans to assembly tomorrow, tell the suitors to disperse, send your mother back to her father's house if she means to remarry, and go to Pylos and Sparta - and remember the name Orestes made for himself by killing his father's murderer.",
    "She goes off like a bird, and Telemachus knows in his heart that he has been entertaining a god."
  ],
  "The suitors at meat": [
    "The suitors come in from outside and take their places in rows on the chairs and benches of the hall.",
    "They are sitting on the hides of oxen they killed themselves, out of Odysseus' own herds.",
    "Heralds pour water over their hands, maids pile bread into the baskets, boys fill the mixing-bowls to the brim, and the men put out their hands to the food.",
    "**They are eating another man's household: the poem's standing violation of xenia, guests consuming a host's substance without recompense and courting his wife while they do it.**",
    "Telemachus leans his head close to the stranger's so the others cannot hear, and asks her not to take offence at what she is watching.",
    "He says these men devour another's goods with impunity, and that the man whose white bones are lying somewhere in the rain would scatter them in a moment if he came through the door.",
    "When the eating and drinking are done the suitors turn to what they call the crown of a feast, song and dancing, and a herald puts the lyre into the hands of Phemius."
  ],
  "Phemius sings the returns": [
    "Phemius, who sings for the suitors because he must, takes the lyre and begins.",
    "**His song is the Odyssey's own subject performed inside the Odyssey: the returns of the Achaeans from Troy, sung to the men who are preventing the return the poem is about.**",
    "Penelope hears the song from her upper room, comes down the steep stair with two handmaids, and stops beside the doorpost of the hall with her bright veil held across her face.",
    "In tears she asks Phemius to leave off this song and choose another out of the many about the deeds of men and gods, because this one wears her heart away.",
    "Telemachus refuses her in front of the hall: the singer is not to blame, Zeus is, people praise the newest song most, and Odysseus was not the only man who never came back from Troy.",
    "He sends her back upstairs to her loom and her women, and tells her that speech is the men's concern and chiefly his, since the authority in the house is his.",
    "She goes up astonished at her son and weeps for Odysseus until Athena casts sleep on her eyelids."
  ],
  "Telemachus finds his voice": [
    "The suitors fill the shadowy hall with noise, each of them praying to lie beside Penelope.",
    "Telemachus stands and addresses them as his mother's suitors and men of overbearing insolence.",
    "He proposes that they finish the meal without brawling, and announces that at dawn he will call the Ithacans to assembly.",
    "There, he says, he will tell them plainly to leave his halls and go feast at one another's houses, eating their own stores.",
    "If they would rather consume one man's living without recompense, then let them - but he will call on the gods, and Zeus may grant a reckoning nobody pays for.",
    "The suitors bite their lips and marvel that he speaks so boldly.",
    "Antinous mocks him and prays that Zeus never make him king in Ithaca; Telemachus replies that he would take the kingship if Zeus gave it.",
    "Eurymachus asks more politely who the departed stranger was and whether he brought news of Odysseus.",
    "**Telemachus lies: he says his father's homecoming is lost, and that the visitor was Mentes son of Anchialus, an old guest-friend of the house, while knowing perfectly well that he had been speaking with a god.**"
  ],
  "Eurycleia and the sleepless night": [
    "Telemachus goes up to his bedchamber, built high in the courtyard where the view is open on every side, still turning over what he means to do.",
    "Eurycleia walks ahead of him carrying blazing torches.",
    "**Homer stops the action to give the nurse in full: Eurycleia, daughter of Ops son of Peisenor, bought by Laertes for the price of twenty oxen when she was young, honoured in the house as much as his own wife and never taken to his bed, and the woman who nursed Telemachus from birth.**",
    "She loves him more than any other servant in the household.",
    "She opens the doors of the well-built room, and he sits down on the bed and pulls off his soft tunic.",
    "He puts the tunic into the old woman's hands; she folds it, smooths it out, and hangs it on a peg beside the corded bedstead.",
    "She goes out, pulls the door to by its silver handle, and shoots the bolt home with the leather strap.",
    "Telemachus lies awake all night wrapped in a fleece of wool, thinking about the journey Athena has set him."
  ]
};

export const COMMENTARY_01 = {
  "The proem": {
    sources: "The Nostoi, a cycle poem of the returns from Troy now lost, supplied the frame Homer's audience already had; this proem stakes out one return among many and one man to hang it on. The charge that the crew destroyed themselves by their own atasthalia, recklessness, is Homer's own moral framing, and Zeus repeats it almost verbatim at the council a few lines later. The cattle of the Sun belong to Book XII: the poem opens by summarising an episode it will not reach for eleven books.",
    craft: "The name is withheld. For twenty-one lines the subject is andra, a man, carrying epithets in place of an identity - polytropos, of many turns or many wiles, a word that has never settled into a single English equivalent. The Muse is asked to begin hamothen, from some point, which is Homer admitting that ten years has to be entered somewhere. Compare the Iliad's first word, menis, wrath: an emotion, not a man.",
    afterlife: "Horace made this opening a rule for epic in the Ars Poetica, and Virgil, Dante, and Milton all obey it. The first line is where English translators plant their flag - Chapman, Pope, Fitzgerald, Lattimore, Fagles, and Emily Wilson, whose choice of complicated for polytropos set off the loudest public argument over a single Homeric word in a century."
  },
  "The council on Olympus": {
    sources: "The murder of Agamemnon and Orestes' revenge reached Homer through tradition, not through tragedy, which is three centuries later; the Odyssey tells that story at least five times and never quite the same way, shifting the weight between Aegisthus and Clytemnestra. Zeus's opening complaint, that mortals suffer beyond their share through their own folly, has no real Iliadic parallel and reads as this poem's own theology rather than inherited material.",
    craft: "A divine council type-scene, with Poseidon written out of it by an errand to the Ethiopians so that the plan can be made in his absence. Zeus raises Aegisthus and Athena redirects to Odysseus, which plants the paradigm before the plot begins to need it. The order splits in two and the poem splits with it, but Hermes does not actually leave for Ogygia until Book V, after a second council that repeats this one. The doubling is an old crux: the nineteenth-century Analysts read two poems stitched together, most readers now read a deliberate suspension.",
    afterlife: "Virgil opens the Aeneid with a divine council built on this one, Juno's grudge standing in for Poseidon's, and the shape runs on into Milton's Pandaemonium. Aeschylus works the same Argive material in the Oresteia and inverts Homer's emphasis, making Clytemnestra the agent and Aegisthus the accessory."
  },
  "Athena as Mentes": {
    sources: "The god who arrives disguised as a traveller and finds out how a house behaves is a folk-tale type with a long reach: Jupiter at Lycaon's table in Ovid, the three visitors at Mamre in Genesis, Demeter at Eleusis in the Homeric Hymn. Homer's version withholds the punishment. Athena comes to test and to advise, and this household passes. Mentes himself is Homer's own furniture, a Taphian trader given just enough biography to sound checkable.",
    craft: "The xenia type-scene, given complete and in the correct order: the guest met at the gate, relieved of the spear, seated, given water for the hands, fed, and questioned only afterwards. Every later reception in the poem is a variation on this template, and the deviations are the point. Homer marks the state of the household through furniture - Athena is seated apart from the suitors so their din will not spoil her meal. The departure at 1.320 uses anopaia, a word nobody has securely explained: she goes up and away, or off like a bird.",
    afterlife: "The name has had a strange career: Mentor, the other shape Athena takes for this family, gave English a common noun. Fenelon's Les Aventures de Telemaque (1699) built an entire political education on the disguise and gave Europe the Mentor it actually remembers. In painting the scene is rare, since a goddess pretending to be a merchant offers a painter nothing to look at."
  },
  "The suitors at meat": {
    sources: "The siege of a house by suitors has no known source outside this poem. The folk tale of the husband who returns in time to stop a wedding supplies the ending, not this middle. What Homer builds on it is legal rather than narrative: the offence is specified again and again as consuming a household without recompense, which is a claim about property and obligation, not about lust.",
    craft: "The violence is in the inventory. Homer describes a perfectly correct feast - hands washed, bread heaped, bowls filled to the brim - and leaves the reader to do the arithmetic on whose oxen the hides came from. The detail that the suitors are sitting on the skins of animals they killed themselves is dropped without comment and never explained. Telemachus delivers his complaint head to head, so that nobody else hears it, which is Homer's way of showing that he cannot yet say anything in public.",
    afterlife: "The suitors are the least adapted major element of the poem and the most useful. Every retelling that treats the Odyssey as a story about a household and its property starts here: Kazantzakis, Walcott's Omeros and his stage Odyssey, and above all Margaret Atwood's The Penelopiad, whose interest is in what the twelve maids were doing while the eating went on."
  },
  "Phemius sings the returns": {
    sources: "Phemius' subject is the Nostoi, which existed as its own body of song, so Homer is quoting the tradition his poem is competing against. The bard under compulsion appears twice in the Odyssey - Phemius here, and the unnamed singer Agamemnon left behind to watch over Clytemnestra - and both times the singer's helplessness is the point being made.",
    craft: "The poem watches itself being performed. Homer hands Phemius the Odyssey's own material and then shows two listeners taking it in opposite directions: the suitors are entertained, Penelope cannot bear it. Telemachus' defence of the singer, that people praise the newest song most, is among the earliest statements in European literature of novelty as a poetic value. His dismissal of his mother reworks a line of the Iliad, where Hector tells Andromache that war will be the men's concern; Telemachus substitutes speech.",
    afterlife: "Mary Beard opens Women and Power (2017) with this exchange, calling Telemachus' dismissal of Penelope the first recorded instance in Western literature of a man telling a woman that public speech is not hers. Margaret Atwood's The Penelopiad hands the hall back to Penelope and her maids. The scene is also the standard exhibit whenever anyone argues that the Odyssey is self-conscious about its own performance."
  },
  "Telemachus finds his voice": {
    sources: "Little here needs a source. The Telemachy is the part of the poem least attached to the older Trojan cycle, and the nineteenth-century Analysts treated it as a separate composition welded on at the front. Most readers now take it as the Odyssey's own invention, on the grounds that the poem needs a son who can hold a hall before it can have a father worth returning to one.",
    craft: "The first public speech is built to be assessed: an insult to open, a procedural proposal, a demand, and a threat referred to the gods to close. The suitors biting their lips and marvelling at his boldness is Homer telling you the speech landed. Then comes the smaller and more Odyssean move - asked about the visitor, Telemachus reports the cover story as fact and keeps the god to himself. It is the first lie told in the poem by a member of Odysseus' family, and it will not be the last by a long way.",
    afterlife: "Telemachus as a study in political apprenticeship is largely a French invention: Fenelon's Telemaque was for a century one of the most widely read books in Europe and turned the boy into a manual for princes. Joyce opens Ulysses with three chapters that stand as his Telemachiad and gives Stephen Dedalus this scene's exact predicament, a young man in a house that is not his with usurpers at the table."
  },
  "Eurycleia and the sleepless night": {
    sources: "The nurse who knows the body of the man she raised is a folk-tale figure the Odyssey handles with unusual care. Homer's own contribution is the economics. He tells you what Laertes paid for her, twenty oxen, and that he never went to bed with her, which is information about how a household was disciplined rather than about a woman's virtue.",
    craft: "A going-to-bed type-scene, the standard closing device of a Homeric book, executed slowly and in order: torches, doors, the tunic folded and hung on a peg, the door pulled to by its silver handle, the bolt drawn home by a strap. The digression on Eurycleia's origins is the poem's characteristic move, the long parenthesis inserted at the moment of least urgency. The book ends where it began, with a man lying awake wanting to be somewhere else.",
    afterlife: "Eurycleia's afterlife belongs almost entirely to Book XIX and the scar; here she is only introduced, and no painter has troubled with the folding of a tunic. What this passage did leave behind is the technique - the Homeric parenthesis that suspends the action to tell you a history in full, which Erich Auerbach made the founding example of Western narrative style in the first chapter of Mimesis."
  }
};
