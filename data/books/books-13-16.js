/*
 * Books XIII-XVI: Ithaca reached and not declared.
 *
 * The poem's longest movement opens here. Odysseus is landed asleep on his
 * own island, wakes without recognising it, and spends four books testing a
 * household from inside a costume. Episode titles are primary keys and are
 * copied from SPINE.json character-for-character.
 */

export const BOOKS_13_16 = [
  {
    id: 13,
    title: "The Landing",
    lens: "He comes home asleep and does not recognise it",
    date: "Day 35 - the crossing, and the first morning on Ithaca",
    setting: "Scheria, the open sea, and the harbour of Phorcys on Ithaca",
    summary: "Odysseus takes a last round of gifts from the Phaeacian lords, praises Arete, and boards the ship that will carry him the distance he spent ten years failing to cross. He sleeps through the whole voyage; the crew lay him on the beach of Phorcys with his treasure stacked beside him and sail for home, and Poseidon turns their ship to stone within sight of their own harbour. Odysseus wakes inside a mist that hides Ithaca from him, assumes he has been cheated, and tells a fluent lie about Crete to the goddess who put him there. Athena laughs, names the island, hides the gold in the nymphs' cave, and withers him into an old beggar.",
    episodes: [
      ["The last night in Scheria", "Odysseus finishes his tale, receives a second round of bronze and gold from the Phaeacian lords, and waits impatiently for the sun to set.", "Storyteller → passenger", "The apologoi end, and with them the one stretch of the poem in which the hero controls his own narration."],
      ["The sleep like death", "He goes aboard, lies down on a rug in the stern, and drops into a sleep the poem likens to death while the ship outruns a hawk.", "Vigilance → a sleep like death", "The only crossing that costs him nothing is the one he does not see."],
      ["The ship turned to stone", "The escort turns for home and Poseidon, with Zeus' consent, roots the ship in stone in front of the watching city.", "Ferrymen → a rock in their own water", "Perfect hospitality is punished for being perfect; whether the threatened mountain also falls is left unsaid, and the Greek at Zeus' instruction is genuinely disputed."],
      ["Waking in a land he does not know", "Athena's mist makes the paths, the harbour and the long hills strange; Odysseus decides the Phaeacians have dumped him somewhere and counts his tripods.", "Ithaca → an unknown coast", "The homecoming arrives before any recognition of home, which is the poem's whole method compressed into one waking."],
      ["Athena as a young shepherd", "A delicate young herdsman names the island; Odysseus answers with an invented life as a Cretan who killed a man and paid Phoenicians for passage.", "King → Cretan fugitive", "His first words on native ground are false, and the poem treats that as skill rather than sin."],
      ["The laughter of recognition", "The shepherd becomes a tall woman who takes his hand and tells him only a god could out-scheme him; she is delighted to have been lied to.", "Shepherd → Athena", "The warmest scene in the poem is two professionals recognising each other by their tricks instead of by tokens."],
      ["The cave of the Nymphs", "She scatters the mist, shows him Phorcys' cove and the olive at its head, and they stow the Phaeacian treasure in the Naiads' cave behind a stone.", "Treasure in the open → treasure buried", "The gifts are hidden before the beggar exists, so that the beggar can plausibly own nothing at all."],
      ["Odysseus made old", "Athena shrivels the skin on his arms, kills the colour of his hair, dims his eyes, and dresses him in rags with a staff and a wallet.", "King → beggar", "The disguise is not concealment for its own sake: it converts the household into an experiment he can run on it."]
    ],
    cast: [
      ["Odysseus", "hero", "Sleeps through his own return, wakes on Ithaca without knowing it, and lies to the goddess standing in front of him."],
      ["Athena / Minerva", "goddess", "Meets him as a herdsman, enjoys his lie, lifts the mist, and turns him into an old man."],
      ["Poseidon", "god", "Takes his last vengeance not on Odysseus but on the people who carried him."],
      ["Zeus", "god", "Consents to the petrifying of the ship, and treats the Phaeacians' punishment as a matter between gods."],
      ["Alcinous", "mortal", "Recalls his father's old prophecy as the stone rises, and orders twelve bulls sacrificed to avert the rest of it."],
      ["Arete", "mortal", "Receives Odysseus' parting blessing and has her women stow the gifts aboard."],
      ["The Phaeacian crew", "collective", "Row him across in one night, set him gently on the sand, and are turned to rock for it."],
      ["The Naiads of Phorcys", "nymph", "The nymphs of the cave above the cove, to whom Odysseus prays before hiding his gold in their floor."]
    ],
    themes: [
      ["Return without recognition", "Nostos is achieved at the start of the book and immediately becomes a problem of knowing rather than of travel."],
      ["Lying as competence", "The first act on his own soil is a false life-story, and the goddess who hears it approves of the craftsmanship."],
      ["Guest-friendship and its cost", "The Phaeacians keep the code exactly and are destroyed by a god for the escort the code required."],
      ["The patron becomes an accomplice", "Athena stops arranging events from a distance and starts working inside the disguise alongside him."]
    ],
    terms: [
      ["nostos", "noun", "Homecoming; the return of a man from the war, and the subject the whole poem is organised around.", "Term"],
      ["pompe", "noun", "The escort or conveyance a host owes a departing guest; the Phaeacians are punished for providing it.", "Term"],
      ["metis", "noun", "Cunning intelligence that actually works; the quality Athena laughs at because she and Odysseus both live by it.", "Term"],
      ["Harbour of Phorcys", "noun", "The Ithacan cove named for an old sea-god, with an olive at its head and the nymphs' cave above it, where the sleeping Odysseus is set ashore.", "Place"]
    ],
    ties: [
      ["The Phaeacians after Homer", "Apollonius brings Jason and Medea to the same court, where Alcinous and Arete judge their case. Homer's version ends with the ferry petrified and the harbour closed to strangers."],
      ["The Nostoi", "A lost cycle told the returns of the other Greek captains; Homer alone makes his returning king unable to identify his own coastline."],
      ["The self-steering ship", "Vessels that need no helmsman and cross in a night belong to folk-tale. Homer keeps the marvel and then has a god abolish it in a single stroke."]
    ]
  },
  {
    id: 14,
    title: "The Swineherd",
    lens: "Loyalty tested by a man who has no reason to test it",
    date: "Days 35-36 - the farm above the harbour",
    setting: "Eumaeus' steading on the high ground of Ithaca",
    summary: "Odysseus climbs to his own pig farm and is nearly torn apart at the gate by his own dogs. Eumaeus, who does not know him, gives the ragged stranger fire, a bed, two suckling pigs and later the best hog in the pen, and refuses to believe a sworn report that his master is coming home, because beggars have sold that news to this house before. Odysseus repays the hospitality with an invented Cretan life and then with a coded story about a freezing night at Troy, which gets him a cloak without either man admitting what was asked. The book is the poem's clearest argument that xenia is kept best by the people who can least afford it.",
    episodes: [
      ["The dogs and the swineherd's stick", "Four dogs rush the stranger at the yard gate; he sits down and lets his staff fall, and Eumaeus scatters them with stones and shouting.", "Owner → prey of his own dogs", "The master of the estate reaches his own property in the posture of a man about to be killed by it."],
      ["The guest-portion", "Eumaeus piles brushwood and a goat skin for a seat, kills two young pigs, and feeds the stranger before asking him a single question.", "Stranger → guest", "Xenia in its correct order - shelter, fire, meat, and only then the name - which is the exact reverse of the Cyclops' practice."],
      ["The lie about Crete and Egypt", "Pressed for his story, Odysseus invents a Cretan bastard's career: nine raids, Troy, a plundering party wiped out in the Delta, seven years in Egypt, then swindlers and shipwreck.", "Beggar → Cretan captain", "The false life is assembled out of ordinary Aegean experience, which is exactly why the swineherd half-believes it."],
      ["He will come within this month", "He swears across the guest-table that Odysseus is already near and will be home as this moon dies and the next one rises.", "Rumour → sworn oath", "The oath happens to be true, and the word for the interval it names is one of the poem's genuinely contested pieces of vocabulary."],
      ["Eumaeus refuses to believe", "He turns down both the oath and the reward offered on it: an Aetolian once swore the same thing and ate for a month on the strength of it.", "Good news → refused", "Loyalty here takes the form of disbelief, because the household's grief has been farmed by liars for years."],
      ["The fattest hog", "The herdsmen come in at dusk, Eumaeus kills a five-year-old boar, burns the gods' share and the nymphs' first offering, and hands his guest the long chine.", "Beggar → the honoured cut", "A slave apportions meat with a king's correctness while the men in the hall eat stolen animals and sacrifice nothing."],
      ["The tale of the cloak", "Odysseus tells how, freezing in an ambush under Troy, Odysseus talked a man out of his cloak by sending him off with an invented message.", "A story → a cloak", "An ainos: a tale whose real point is a request, answered without either man saying what was being asked for."],
      ["The swineherd sleeps outside", "Eumaeus takes a sword and a thick cloak, and goes out to sleep against a rock among the pigs in the wind and the rain.", "Host → watchman in the rain", "Odysseus is delighted, and the delight is a property owner's: this man is guarding an estate whose owner he believes is dead."]
    ],
    cast: [
      ["Odysseus", "hero", "Arrives in rags at his own farm and spends the book building a false Cretan life for a man who deserves the true one."],
      ["Eumaeus", "servant", "The swineherd who feeds, clothes and shelters a stranger, and refuses to be given hope about his master."],
      ["The Cretan", "narrative presence", "The invented captain Odysseus speaks as: a bastard son with a plausible war record, kept alive for the next five books."],
      ["Mesaulius", "servant", "Eumaeus' own bought man, purchased with his own goods while his master was away, who serves the bread."],
      ["Zeus Xenios", "god", "Invoked by Eumaeus as the god who stands behind strangers and beggars, and who watches how they are fed."],
      ["The suitors", "collective", "Absent from the farm and present in every complaint: they eat a hog a day and sacrifice none of it."],
      ["Penelope", "mortal", "Named as the woman who questions every wanderer and is lied to by all of them, and weeps afterwards."],
      ["Telemachus", "mortal", "Away at Pylos with a ship waiting in the strait to kill him, and the reason Eumaeus has only one cloak to lend."]
    ],
    themes: [
      ["Guest-friendship from below", "The poorest household in the poem keeps xenia exactly, while the richest is being eaten from the inside."],
      ["The plausible lie", "The Cretan tale is built out of ordinary lives and real routes, which is what makes it so hard to refuse."],
      ["Disbelief as loyalty", "Eumaeus rejects true news because false news has been sold to this house repeatedly, and hope has become a commodity."],
      ["The household in miniature", "Pens, herdsmen, sacrifice, an apportioned carcass: the steading is a working oikos, and a measure of what the hall has stopped being."]
    ],
    terms: [
      ["xenia", "noun", "Guest-friendship: the reciprocal obligation binding host and stranger, protected by Zeus and tested by every household in the poem.", "Term"],
      ["ainos", "noun", "A story told so that its real point stays unspoken; the tale of the cold night at Troy is one, and it produces a cloak.", "Rhetoric"],
      ["apostrophe", "noun", "The narrator turning aside to address a character directly; in this poem the swineherd alone is spoken to as 'you'.", "Rhetoric"],
      ["geras", "noun", "A portion set aside as a mark of standing; the swineherd's version of it is the chine of the best hog, handed to a beggar.", "Term"]
    ],
    ties: [
      ["The Cretan lies", "Odysseus tells four separate false Cretan lives in the second half of the poem. Crete was rich, distant and well-travelled enough that nobody on Ithaca could check."],
      ["Raids on the Delta", "The Egyptian disaster matches the pattern of Aegean raiding on Egypt recorded in Egyptian sources; Homer hands a piece of real history to a man who does not exist."],
      ["The poor host", "The humble householder who feeds a disguised power becomes a set piece in later literature, from Callimachus' Hecale to Ovid's Baucis and Philemon. Eumaeus is its first full portrait, and the only one whose guest already owns the farm."]
    ]
  },
  {
    id: 15,
    title: "The Son Comes Back",
    lens: "Two returns converging on one hut",
    date: "Days 35-36 - Sparta, the sea road, and the Ithacan shore",
    setting: "Sparta, Pherae, Pylos, and the eastern shore of Ithaca",
    summary: "Athena wakes Telemachus in Sparta, tells him his mother's father and brothers are pushing her toward Eurymachus, and sends him home by night around the suitors' ambush. He takes Menelaus' silver bowl and Helen's robe, hears Helen read an eagle and a farmyard goose as Odysseus killing in his own hall, slips past Nestor's door to avoid being detained by kindness, and takes aboard Theoclymenus, a seer fleeing a killing. On Ithaca meanwhile Eumaeus tells his guest how he was born a king's son on Syrie and sold into this house by the Phoenician nurse who stole him. Telemachus lands beyond the strait, sees a hawk tearing a dove on his right, and walks up to the steading where his father is sitting in rags.",
    episodes: [
      ["Athena at Sparta", "The goddess finds Telemachus awake in Menelaus' hall and tells him to go home before his mother's family settle her on Eurymachus and the property follows her out.", "A guest at ease → a son recalled", "The Telemachy is closed by the goddess who opened it, and the pressure she names is economic before it is romantic."],
      ["Menelaus' gifts and the eagle omen", "Menelaus gives a silver mixing bowl made by Hephaestus and Helen a robe for his bride; as they drive off an eagle carries a white goose past the horses.", "Eagle and goose → Odysseus and the suitors", "Helen reads the sign and is right: the woman blamed for the war is the most accurate interpreter in Sparta."],
      ["Peisistratus turns aside", "At Pylos Telemachus asks to be set down at the ship rather than taken to Nestor, who would hold him for days out of nothing but generosity.", "Xenia offered → xenia dodged", "Hospitality can imprison, and the poem is honest that a faultless host is also a delay."],
      ["Theoclymenus the fugitive", "A man of the seer-line of Melampus, in exile for killing a kinsman in Argos, grips Telemachus at the stern and asks for passage.", "Killer → suppliant", "Telemachus grants what the suitors never grant: shelter to a stranger with nothing to offer but his descent."],
      ["The Phoenician nurse", "Eumaeus tells how he was a king's son on the island of Syrie until his Phoenician nurse stole him for a trader, died at sea, and left him to be sold to Laertes.", "King's son → bought slave", "The poem gives its slave a father, an island and a kidnapping, which is more biography than it grants most of the men courting the queen."],
      ["The landing beyond the ambush", "Telemachus runs the night coast, steers clear of the strait where the suitors' ship is waiting, and puts in at a shore well away from the town.", "Ambush laid → ambush missed", "The suitors' single attempt at strategy fails because a goddess gave better sailing directions than they did."],
      ["The hawk on the right", "As he steps ashore a hawk goes past on the right, plucking a dove in flight; Theoclymenus tells him no house in Ithaca is more kingly than his own.", "Omen → dynasty confirmed", "The second bird of the book says what the first said, and the seer who reads it will go on being ignored until the hall fills with blood."],
      ["Telemachus to the hut", "He sends the ship and the seer into town, takes his spear, and walks up the stony path to the swineherd's steading.", "Two returns → one roof", "The book's whole architecture exists to put father and son in one small room without either of them being announced."]
    ],
    cast: [
      ["Telemachus", "mortal", "Cuts short his stay in Sparta, manages two hosts and one omen, and comes ashore past the ambush set for him."],
      ["Athena / Minerva", "goddess", "Wakes him, names the danger at home, routes him round the strait, and tells him to go to the swineherd first."],
      ["Menelaus", "mortal", "Sends his guest away loaded, and defers to his wife when a sign needs reading."],
      ["Helen", "mortal", "Gives a robe she wove herself for a wedding that has not happened, and interprets the eagle correctly."],
      ["Peisistratus", "mortal", "Nestor's son, who drives the chariot and agrees to spare his friend his own father's hospitality."],
      ["Theoclymenus", "seer", "A fugitive prophet taken aboard as a suppliant, who reads the hawk before he has set foot in the town."],
      ["Eumaeus", "servant", "Talks his guest through the night and tells the story of how he stopped being a prince."],
      ["Odysseus", "hero", "Offers to go and beg among the suitors to spare the farm his keep, and is told to stay where he is."]
    ],
    themes: [
      ["Two returns converging", "The son's homecoming is timed so that it lands at the same hut as the father's, one day behind it."],
      ["Signs and their readers", "Two birds and two interpreters; the poem keeps insisting the future is legible, and nobody on Ithaca will read it."],
      ["Hospitality as delay", "Nestor's kindness would cost days, so Telemachus is driven past the door: xenia here is something to be managed rather than simply received."],
      ["Who a slave used to be", "Eumaeus is given a birth, a kingdom and a theft, and is allowed to narrate them himself in the first person."]
    ],
    terms: [
      ["oionos", "noun", "A bird taken as an omen; two of them frame this book, and both say the same thing about who is coming and what he will do.", "Term"],
      ["hiketes", "noun", "A suppliant, protected by Zeus from the moment he is received; Theoclymenus arrives as one with a killing behind him.", "Term"],
      ["xeinion", "noun", "The parting gift a host presses on a departing guest; Menelaus' bowl and Helen's robe are the record of Sparta's welcome.", "Object"],
      ["Syrie", "noun", "The island named as Eumaeus' birthplace, placed vaguely beyond Ortygia at the turning-point of the sun; it corresponds to no known place, and the poem is not troubled by that.", "Place"]
    ],
    ties: [
      ["The house of Melampus", "Theoclymenus' pedigree compresses a whole seer-saga known from the Hesiodic Catalogue and later mythographers. Homer uses it as credentials and declines to tell the story."],
      ["Homer's Phoenicians", "Traders in this poem are always kidnappers or swindlers, which the archaeology of Levantine trade in the Aegean does not bear out. The hostility belongs to the poem, not to the evidence."],
      ["Helen the reader of signs", "In Book IV she drugs the wine; here she reads an omen and is proved right. Later Greek writing could never settle her, from Stesichorus' retraction to the Euripides play in which she never went to Troy at all."]
    ]
  },
  {
    id: 16,
    title: "Father and Son",
    lens: "The first recognition, and the first conspiracy",
    date: "Day 37 - the steading, and the hall at evening",
    setting: "Eumaeus' hut, and the hall of Odysseus",
    summary: "Telemachus reaches the steading and the dogs that would savage a stranger fawn on him instead. He sends Eumaeus down to town to tell Penelope he is alive, and the moment the swineherd is out of the yard Athena restores Odysseus to full height and a dark beard and he tells his son who he is. Telemachus takes it for a god's trick and refuses the claim until his father says plainly that no second Odysseus is ever coming, and the two of them weep like birds robbed of their young. Then they plan the killing: the weapons come down from the hall on the excuse of smoke damage, nobody in the household is told, and Telemachus is ordered to watch his father struck and dragged and do nothing.",
    episodes: [
      ["The dogs that do not bark", "Odysseus hears footsteps and sees the dogs fawn instead of attack; Eumaeus drops his cups and embraces Telemachus like a father greeting an only son.", "Barking → fawning", "The simile is pointed on purpose: the swineherd greets him as a father while the actual father watches from the corner in rags."],
      ["Eumaeus sent to Penelope", "Telemachus takes charge of the guest, promises him a cloak and a sword, and sends the swineherd into town to tell his mother quietly that he is home.", "A witness → an errand", "The recognition cannot happen with a loyal man in the room, because the plan requires that even loyal men stay untested for now."],
      ["Athena at the gate", "The goddess stands at the courtyard gate, visible to Odysseus and to the dogs that cringe away from her but not to his son, and calls him outside.", "Beggar → king restored", "The poem lets the animals see what the boy cannot; recognition in this book is granted from outside rather than earned."],
      ["I am your father", "He comes back taller, dark-bearded and well dressed; Telemachus takes him for a god and rejects the claim until Odysseus says no other Odysseus will come.", "God, then impostor → father", "The one recognition in the poem with no token at all - no scar, no bed, no brooch - which is why it takes a goddess and a flat assertion."],
      ["The arms taken down", "Odysseus orders the spears and shields carried out of the hall to the storeroom at a nod, with smoke damage as the excuse and two sets held back.", "A feast-hall → a trap", "The slaughter is engineered days in advance, which is why Book XXII is an execution rather than a battle."],
      ["The ambush failed", "The suitors' watch-ship comes back empty, the lookouts are called in from the headland, and the men who meant to kill Telemachus at sea find him already home.", "Ambush → open plot", "Their conspiracy moves indoors, where a herald can overhear it - and does."],
      ["Antinous and Amphinomus", "Antinous proposes killing Telemachus in the fields before he can call an assembly; Amphinomus refuses to move until they have asked the gods.", "Murder proposed → murder deferred", "The poem separates the suitors morally here so that one of the deaths in the hall will cost the reader something."],
      ["Penelope on the stair", "Warned by Medon, Penelope comes down and reminds Antinous that Odysseus once sheltered his father from a lynching; Eurymachus swears no one will touch her son.", "A father sheltered → a son hunted", "The debt of guest-friendship is stated to the man's face and answered with the smoothest lie in the book."]
    ],
    cast: [
      ["Odysseus", "hero", "Sheds the disguise for one hour, claims his son without any proof, and then puts the rags back on before the swineherd returns."],
      ["Telemachus", "mortal", "Comes in from the ship, sends the only witness away, refuses to believe his father, and accepts a plan that requires him to keep silent while his father is beaten."],
      ["Athena / Minerva", "goddess", "Restores Odysseus at the gate, hides him again at dusk, and stays visible only to the man she is working with."],
      ["Eumaeus", "servant", "Weeps over the boy he did not expect to see alive, and is deliberately kept ignorant of everything that matters."],
      ["Antinous", "suitor", "Proposes murdering Telemachus in the countryside, and is publicly reminded that his own father was saved by the man he is robbing."],
      ["Amphinomus", "suitor", "Argues that the gods should be consulted before they kill the heir, and talks the others out of it for now."],
      ["Eurymachus", "suitor", "Answers Penelope with a warm oath of protection while agreeing privately that the boy should die."],
      ["Penelope", "mortal", "Comes down to the hall, names the debt the suitors owe her house, and goes back upstairs to weep until Athena puts her to sleep."]
    ],
    themes: [
      ["Recognition without a token", "There is no scar and no bed between father and son; the claim has to be believed on the strength of the claim."],
      ["Conspiracy", "The plan works only if nobody is told - not Eumaeus, not Laertes, not Penelope - and the poem makes that cost visible."],
      ["Endurance under insult", "Telemachus is instructed to watch his father hit and hauled by the feet across the floor and keep his face still."],
      ["The household as evidence", "Odysseus stays in rags because he intends to find out, person by person, who in the house is worth keeping alive."]
    ],
    terms: [
      ["anagnorisis", "noun", "Recognition: the move from not knowing to knowing that Aristotle named, and the mechanism the entire return runs on.", "Narrative"],
      ["sema", "noun", "A sign or token by which identity is proved; this recognition supplies none, which is why it needs a god and an argument instead.", "Term"],
      ["oikos", "noun", "The household taken together as house, land, herds, slaves and standing; control of it is what everyone in this book is fighting over.", "Term"],
      ["Amphinomus", "noun", "A suitor from Dulichium, the only one who will not kill without consulting the gods; Odysseus will later try to send him home before the reckoning.", "Person"]
    ],
    ties: [
      ["Orestes", "The Telemachy has spent four books holding up Agamemnon's son as the model son. Here the pattern breaks, because this father is alive and this son does not have to act alone."],
      ["Recognition in tragedy", "Aeschylus and Euripides argue over tokens - a lock of hair, a matching footprint, a scar. This scene refuses tokens altogether and works on assertion plus a goddess."],
      ["The Telegony", "The lost cyclic sequel gave Odysseus a second son by Circe who kills him without knowing who he is. The tradition answers this book with a recognition that arrives too late."]
    ]
  }
];
