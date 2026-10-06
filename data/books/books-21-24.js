/*
 * Books XXI-XXIV: the bow, the killing floor, the bed, and the truce.
 *
 * The reckoning and the peace. Book 21 is a contest set by the wife; Book 22
 * spends it; Book 23 holds the last recognition back until she has run her own
 * test on him; Book 24 gives the dead their say and stops a feud in its first
 * minute. Episode titles are the primary keys and match SPINE.json exactly.
 */

export const BOOKS_21_24 = [
  {
    id: 21,
    title: "The Bow",
    lens: "A contest designed to be impossible, entered by the one man it fits",
    date: "Day 39, afternoon - the contest of the bow",
    setting: "The storeroom, the hall, and the yard behind it",
    summary: "Penelope fetches Odysseus' great bow out of the storeroom and offers herself to whichever suitor can string it and shoot an arrow through twelve axe-heads. Every one of them fails, and Antinous has the bow warmed at the fire to buy another day. Out in the yard Odysseus shows Eumaeus and Philoetius the scar on his thigh, tells them who he is, and posts them at the doors. He then strings the bow as easily as a singer fitting a new string to a lyre and puts an arrow clean through the axes.",
    episodes: [
      ["Penelope goes to the storeroom", "She takes the bronze key, opens the innermost store, weeps over the bow on its peg, and carries it down to set the contest for her own marriage.", "Waiting → a contest", "The decisive human act of the reckoning belongs to Penelope, not to the man who profits by it."],
      ["The bow of Iphitus", "The bow was a guest-gift from Iphitus, whom Heracles later murdered in his own house and robbed; Odysseus kept it home from Troy as a keepsake.", "Guest-gift → instrument of judgement", "Homer plants the tradition's foulest breach of guest-friendship inside the weapon that will punish the suitors' own."],
      ["The axes set in line", "Telemachus digs one long trench down the hall, stands twelve axe-heads in a row and treads the earth firm, though he has never seen it done.", "Boy → master of the floor", "The son builds the frame his father will shoot through, so the contest is a family construction before it is a test."],
      ["Telemachus almost strings it", "Three times he nearly bends the bow, and on the fourth attempt a look from his father stops him; he sits down calling himself young and weak.", "Nearly → not yet", "Homer measures the son at one degree short of the father and makes the shortfall a decision rather than a failure."],
      ["The grease and the fire", "Leiodes tries first, fails, and warns that the bow will cost lives; Antinous calls for fat and a fire to soften the wood, and still nobody strings it.", "A trial of the body → a problem of technique", "The suitors treat as a manufacturing fault what is actually a statement about who owns the house."],
      ["The recognition of Eumaeus and Philoetius", "Out at the yard gate Odysseus tells the two herdsmen who he is and shows them the boar-scar; they are set to bar the courtyard and lock the women in.", "Beggar → master", "The disclosure is tactical: proof of identity is handed out only when it converts loyalty into an armed party."],
      ["Penelope sent upstairs", "When the beggar asks for the bow the hall erupts, and Telemachus orders his mother to her room and the bow into the beggar's hands.", "Mother → dismissed; son → in command", "Homer clears the woman who devised the test out of the room before it works, holding her recognition back two more books."],
      ["The note like a swallow", "He strings the bow without effort, plucks the string to a swallow's note while Zeus thunders, and sends an arrow through all twelve axe-heads from where he sits.", "Beggar → archer", "The poem's most famous simile makes the killing an act of craft and the bow an instrument to be played."]
    ],
    cast: [
      ["Odysseus", "hero", "Sits through the failures as a beggar, asks for the bow, and strings it at the first attempt."],
      ["Penelope", "mortal", "Fetches the bow, fixes the terms of the contest, and is sent out of the room before it is settled."],
      ["Telemachus", "mortal", "Sets the axes in their trench, nearly strings the bow, and stops at his father's signal."],
      ["Antinous", "suitor", "Orders the bow greased and warmed, then postpones the whole trial to the next day of Apollo."],
      ["Eurymachus", "suitor", "Fails at the bow and says outright that the shame of failing will outlast the marriage."],
      ["Leiodes", "seer", "The suitors' diviner, first to try the bow and first to say that it will kill men."],
      ["Eumaeus", "servant", "Shown the scar in the yard, then carries the bow across the hall through open threats."],
      ["Philoetius", "servant", "The cowherd, recognised alongside Eumaeus, who bars the courtyard gate with a ship's cable."]
    ],
    themes: [
      ["A test set by the wife", "Penelope chooses the day, the weapon and the terms, so the killing begins as her decision and not his."],
      ["Guest-friendship as inheritance", "The bow arrives carrying a story of xenia at its worst, and hangs over a hall that has abused a guest for years."],
      ["Craft against force", "A room full of strong young men cannot bend the bow and a filthy beggar does it sitting down; the poem rates skill above muscle throughout."],
      ["Recognition as recruitment", "Odysseus discloses himself to the herdsmen at the moment he needs them, which turns proof of identity into an act of tactics."]
    ],
    terms: [
      ["xeinion", "noun", "A guest-gift, binding two houses beyond the visit that produced it; the bow is one.", "Object"],
      ["aoidos", "noun", "A singer of tales, whose lyre-stringing supplies the simile for the bending of the bow.", "Person"],
      ["sema", "noun", "A sign that settles who someone is; here the boar-scar shown to the two herdsmen.", "Term"],
      ["Homeric simile", "noun", "An extended comparison that opens a second scene alongside the action, as the singer does here.", "Rhetoric"]
    ],
    ties: [
      ["Heracles and Iphitus", "The bow's donor was killed by Heracles in Heracles' own house and stripped of his mares, a story the tradition kept as the model breach of guest-friendship."],
      ["Contests for a bride", "Greek myth is full of them, from the oath-bound suitors of Helen to the chariot race of Oenomaus. This one is won by the husband the bride already has."],
      ["The archer's standing", "The Iliad treats bowmen as marginal and faintly dishonourable, Paris and Pandarus among them. The Odyssey makes the bow the instrument of a king's justice."]
    ]
  },
  {
    id: 22,
    title: "The Reckoning",
    lens: "The hall becomes a killing floor, and then is scrubbed",
    date: "Day 39, evening - the killing of the suitors",
    setting: "The hall, its storeroom, and the courtyard",
    summary: "Odysseus throws off his rags, shoots Antinous through the throat as he lifts his cup, and tells the hall who he is. Eurymachus offers to repay everything the suitors have eaten and is refused, because the poem will not let the killing be settled as a debt. Athena comes as Mentor, withholds her help until the four defenders have fought for it, then raises the aegis. Afterwards the singer and the herald are spared on Telemachus' word, the twelve maids are made to carry out the bodies and scrub the floor before they are hanged, and the house is fumigated with sulphur.",
    episodes: [
      ["The rags thrown off", "He leaps to the great threshold, pours the arrows out at his feet, kills Antinous with the cup at his lips, and names himself to a hall that thought it an accident.", "Nobody → Odysseus", "The doorway he holds is the one he begged at, and Homer ends the disguise and the leading suitor in the same movement."],
      ["Eurymachus offers restitution", "He blames the dead Antinous, offers repayment of everything consumed plus twenty oxen a man, is refused, and dies mid-charge with his sword out.", "Debt → no price", "The suitors' crime is finally stated as the eating of a household, and the offer of payment is refused so the killing cannot read as a settlement."],
      ["Telemachus fetches arms", "He runs to the storeroom for four shields, eight spears and four helmets, arms the two herdsmen and his father, and leaves the door standing open behind him.", "Bow → spear-fight", "The single mistake in the plan is the son's, and Homer needs it to make the fight cost something."],
      ["Melanthius in the storeroom", "The goatherd climbs through the postern to the open store and hands arms down to the suitors, until the herdsmen catch him and hoist him up a pillar on a twisted rope.", "Servant → traitor, strung up", "Treachery inside the household is dealt with before the outsiders are finished, because it is the graver breach."],
      ["Athena as Mentor", "She comes in Mentor's shape, rebukes Odysseus for wanting help, then settles on a roof-beam as a swallow and lets the four fight before she lifts the aegis.", "Mentor → swallow → aegis", "The goddess withholds herself to test the man she has already decided to save; divine help arrives last, not first."],
      ["Leiodes and Phemius", "The diviner takes Odysseus' knees and is beheaded in the middle of his plea; the singer pleads compulsion and a self-taught art, and Telemachus' word saves him.", "Suppliant → killed; suppliant → spared", "Homer sorts the hall by what each man actually did: the one who prayed to marry Penelope dies, the one who only performed lives."],
      ["Medon under the hide", "The herald crawls out from under a chair wrapped in an ox-hide, is vouched for by Telemachus, and is sent out to the yard while Odysseus laughs.", "Hiding → pardoned", "The only laugh in the book marks the limit of the killing, and the limit is fixed by testimony rather than mercy."],
      ["The twelve maids, and the fire", "The maids who slept with the suitors carry out the bodies and sponge the tables, and are then hanged in a row; Melanthius is mutilated and the house burnt through with sulphur.", "Killing floor → clean hall", "Homer makes the women erase the evidence before they are killed for it, and presents the whole sequence as purification."]
    ],
    cast: [
      ["Odysseus", "hero", "Holds the threshold, refuses restitution, and decides which men in the hall are allowed to live."],
      ["Telemachus", "mortal", "Spears Amphinomus, fetches the arms, leaves the store open, and speaks for the two men he wants spared."],
      ["Athena", "goddess", "Comes as Mentor, rebukes both sides, watches from a roof-beam as a swallow, and raises the aegis at the end."],
      ["Antinous", "suitor", "Shot through the throat with the two-handled cup in his hand, before he understands that the beggar is armed."],
      ["Eurymachus", "suitor", "Offers to repay the whole household from his own stores and, refused, dies with his sword drawn."],
      ["Melanthius", "servant", "Arms the suitors out of the open storeroom and is hung from a pillar for it."],
      ["Phemius", "singer", "Pleads that he sang for the suitors under compulsion, and is saved by Telemachus' testimony."],
      ["Eurycleia", "servant", "Starts the ritual cry of triumph over the bodies and is stopped: it is not holy to boast over dead men."]
    ],
    themes: [
      ["Hospitality abused", "The killing is presented as payment for eaten stores, unasked-for courtship and an insulted guest, not as private revenge."],
      ["The limits of supplication", "Three men take the knees or hide under furniture, and the poem separates them by what they did rather than by how well they beg."],
      ["Divine help withheld", "Athena is in the room from early on and fights only at the end, so the victory belongs to four men before it belongs to a goddess."],
      ["The household purged", "The hall is scrubbed and fumigated by the people about to be executed for fouling it, and Homer frames the whole thing as cleansing."]
    ],
    terms: [
      ["mnesterophonia", "noun", "The slaying of the suitors; the ancient title for this book's action.", "Event"],
      ["hiketes", "noun", "A suppliant, made untouchable by taking a man's knees; the custom fails here.", "Person"],
      ["aegis", "noun", "Athena's terror-bearing token, raised over the hall to break the suitors' nerve.", "Object"],
      ["ololyge", "noun", "The ritual cry of triumph Eurycleia begins over the corpses, and which Odysseus forbids.", "Term"]
    ],
    ties: [
      ["The mirror of Mycenae", "Agamemnon was killed at a feast in his own hall by the man who had taken his wife. Homer runs the same scene backwards, with the returning husband doing the killing."],
      ["Suppliant scenes", "Epic and tragedy build a whole ritual round the man at the knees, from Priam before Achilles to Aeschylus' Suppliants. Here the ritual no longer protects anyone."],
      ["The hanging of the maids", "Homer gives the twelve a simile of thrushes caught in a snare and nothing more. Readers from antiquity to modern retellings have found the brevity harder to take than the violence."]
    ]
  },
  {
    id: 23,
    title: "The Bed",
    lens: "A wife sets her own test, and passes her husband",
    date: "Night of Day 39 - a night Athena holds back",
    setting: "Penelope's chamber, the hall, and the road to the farm",
    summary: "Eurycleia climbs upstairs with the news and Penelope tells her the gods have unhinged her. Penelope comes down, sits across the fire from the man in silence, and then sets her own test: she orders the marriage bed carried out of the chamber, and Odysseus loses his temper and tells her it cannot be moved, because he built it around a living olive trunk. That is the sign she wanted, and she runs to him. Athena stretches the night while they tell each other twenty years, and at dawn they go out to Laertes' farm; Alexandrian scholars marked line 296 of this book as the poem's end.",
    episodes: [
      ["Eurycleia climbs to Penelope", "The old nurse comes up laughing to say the stranger was Odysseus and the suitors are dead, and offers the scar she washed as proof.", "News → disbelief", "The poem's most joyful messenger meets a flat refusal, which is how Homer makes the last recognition cost something."],
      ["Penelope refuses to believe", "She goes down and sits opposite him at the fire, looking at his face and then away, neither questioning him nor touching him.", "Husband → a man across the hearth", "Twenty years of guarding a house against impostors do not switch off on an announcement; her caution is the same faculty as his cunning."],
      ["Telemachus rebukes his mother", "The son calls her hard-hearted and strange; she answers that if the man is Odysseus there are signs the two of them know and nobody else does.", "Rebuke → the terms of a test", "Penelope announces that she will run her own recognition, and Odysseus smiles because he understands exactly what that means."],
      ["The false wedding-feast", "Odysseus has the hall washed, the household dressed and the singer strike up a dance, so the town hears wedding music instead of news of a massacre.", "Massacre → wedding music", "The last deception in the poem buys a single morning, and it disguises a slaughter as the marriage it really is."],
      ["The bath, and Athena's grace", "Washed clean of the gore and given beauty like a craftsman laying gold over silver, he comes back to his chair and she still does not move.", "Gore → godlike, and still a stranger", "Homer refuses to let beauty stand in for proof; the sign Penelope wants cannot be seen from across a room."],
      ["The secret of the olive-tree bed", "She tells the nurse to carry the bed out of the chamber for him, and he flares up: he built it around a rooted olive and walled the room about it.", "Test → recognition; stranger → husband", "The one immovable object in a poem of wandering is a bed, and the token that proves the man is a piece of joinery only two people know."],
      ["The night lengthened, and the tale told over", "Athena holds Dawn at the edge of Ocean, and in bed they exchange twenty years, ending with Teiresias' order to carry an oar inland to people who do not know the sea.", "Two stories → one", "Alexandrian scholars marked this book's line 296 as the limit of the Odyssey, and whatever they meant, Homer keeps going and puts a further journey inside the homecoming."],
      ["Out to the farm at dawn", "Armed and hidden in darkness by Athena, the four go out of the town to Laertes' orchard while news of the dead begins to spread behind them.", "Hall → orchard", "The return is not finished at the bed: a father is still owed one, and a town is about to want blood."]
    ],
    cast: [
      ["Penelope", "mortal", "Refuses the news, sits out a long silence, and sets the one test her husband cannot talk his way through."],
      ["Odysseus", "hero", "Bathed and made glorious, and still not believed until he loses his temper about a bed."],
      ["Eurycleia", "servant", "Carries the news upstairs exulting, and is told for her trouble that the gods have unhinged her."],
      ["Telemachus", "mortal", "Calls his mother hard-hearted, and is answered with a rule of the household he does not know."],
      ["Athena", "goddess", "Pours grace over Odysseus after the bath, then holds Dawn at the Ocean so the night can be stretched."],
      ["Eurynome", "servant", "The housekeeper who bathes and dresses him, and lights the couple to their chamber at the end."],
      ["Phemius", "singer", "Strikes up the dance tune that persuades the town outside that a wedding is under way."],
      ["Teiresias", "seer", "Not present: his instruction to carry an oar inland is repeated in bed as the journey still owed."]
    ],
    themes: [
      ["Recognition withheld", "The poem's central anagnorisis is delayed longer than any other and is finally won by the wife rather than granted by the husband."],
      ["Like-mindedness", "Penelope's trap is built the way his are built; the match in method is what the poem means by homophrosyne."],
      ["The bed as fixed point", "A bed rooted in the ground makes marriage and building the same act, and gives a poem about drifting one thing that cannot be moved."],
      ["Deception after the killing", "The false wedding shows that the lying does not stop at the reunion; it has become an instrument of the household."]
    ],
    terms: [
      ["homophrosyne", "noun", "Like-mindedness between husband and wife, which the poem calls the best thing there is.", "Term"],
      ["thalamos", "noun", "The inner chamber, built here around the olive trunk that serves as the bed's corner post.", "Place"],
      ["anagnorisis", "noun", "Recognition, the passage from ignorance to knowledge of who someone is; Aristotle's word, not Homer's.", "Narrative"],
      ["nostos", "noun", "Homecoming; the poem's governing word, and plainly not finished at the door.", "Term"]
    ],
    ties: [
      ["The Alexandrian telos", "Aristarchus and Aristophanes of Byzantium marked line 296 as the end or limit of the Odyssey. Whether they meant its finish or its climax is still argued."],
      ["Penelope against Helen and Clytemnestra", "Penelope names Helen as the woman a stranger talked into leaving. The poem builds her all through as the answer to both Spartan sisters."],
      ["Rooted objects", "Sacred trees anchor cults across the Greek world, the Acropolis olive among them. Homer takes the idea indoors and makes a marriage bed out of one."]
    ]
  },
  {
    id: 24,
    title: "The Peace",
    lens: "The dead take the story back, and the living are stopped",
    date: "Day 40 - the last day of the poem",
    setting: "The asphodel meadow, Laertes' orchard, and the road out of town",
    summary: "Hermes drives the suitors' souls down to the asphodel meadow, where Agamemnon hears the whole affair from one of them, praises Penelope's endurance and curses his own wife by contrast. Odysseus finds Laertes digging in rags in the orchard, tries one more false name on him, then proves himself by the scar and by naming the fruit trees his father gave him as a boy. In town the suitors' fathers arm under Eupeithes; Laertes kills him with a cast, and Athena shouts the fight to a stop and swears both sides to peace. Antiquity already argued whether this book is Homer's, and the argument is not settled.",
    episodes: [
      ["Hermes leads the suitors' souls", "With the golden wand he drives the souls, gibbering like bats in a cave, past the streams of Ocean and the White Rock to the meadow of asphodel.", "Suitors → shades", "The last book opens from the dead men's side, which lets the killing be judged rather than simply concluded."],
      ["Achilles and Agamemnon in the asphodel", "The two commanders compare deaths: Achilles' funeral with Thetis, the Nereids and the Muses, against Agamemnon butchered at a feast in his own house.", "Glory → two kinds of death", "Homer lays out the alternative endings before he awards Odysseus his; the danger to a returning king was never the war."],
      ["Amphimedon tells the story", "The newly dead suitor gives Agamemnon the entire plot from the losing side, and states that Odysseus told Penelope to set the contest of the bow.", "One story → a rival version", "His account contradicts the poem we have read, whether from a suitor's ignorance or from a version in which the couple conspired, and Homer lets it stand."],
      ["Agamemnon praises Penelope", "The dead king says the gods will make a lovely song out of Penelope's steadiness, and a hateful one out of Clytemnestra that will stain all women after her.", "Endurance → kleos", "The poem says outright that a wife can earn the same imperishable fame as a fighter, and gives the line to a murdered husband."],
      ["Laertes in the orchard", "Odysseus finds his father in a patched tunic and goatskin cap, digging round a sapling, and tries the false name Eperitus of Alybas on him before the old man's grief breaks it.", "Eperitus of Alybas → son", "The last of the lying tales is told to the one person it damages for nothing, and Homer makes the reader feel the cost of the habit."],
      ["The trees counted", "He offers the scar, then the orchard: thirteen pear trees, ten apples, forty figs and the rows of vines his father counted out to him when he was a boy.", "Trees → proof", "The final token is not a wound but a gift, an inventory of what one man handed another, which is what the poem means by inheritance."],
      ["Eupeithes raises Ithaca", "Antinous' father calls the town to vengeance; Medon and Halitherses answer that a god was in the hall and that the fathers never once checked their sons.", "Grief → a feud", "Homer refuses to leave the killing private, and gives the dead men's families a hearing before he shuts them down."],
      ["Laertes' cast, and the truce", "Athena puts strength in the old man's arm, his spear goes through Eupeithes' helmet, and then her shout and a thunderbolt at her feet stop the fight and impose oaths.", "Feud → sworn peace", "The poem ends by breaking off a war in its first minute, an ending many readers ancient and modern have thought too abrupt to be Homer's."]
    ],
    cast: [
      ["Hermes", "god", "Leads the suitors' souls with the golden wand, past Ocean and the White Rock to the asphodel."],
      ["Agamemnon", "shade", "Hears the suitors' account, praises Penelope's endurance, and curses his own wife's name by comparison."],
      ["Achilles", "shade", "Told the story of his own funeral, and reckoned fortunate for having died at Troy instead of at home."],
      ["Amphimedon", "shade", "The dead suitor who narrates the plot from the losing side, and gets one significant detail wrong."],
      ["Odysseus", "hero", "Tests his father with a last false name, then proves himself by a scar and an orchard."],
      ["Laertes", "mortal", "Digging in rags in his own orchard, restored first by recognition and then by Athena's strength."],
      ["Eupeithes", "mortal", "Antinous' father, who raises the town for vengeance and is the only man to fall for it."],
      ["Athena", "goddess", "Puts the cast in Laertes' arm, then shouts the fighting to a halt and swears both sides to peace."]
    ],
    themes: [
      ["Reputation (kleos)", "The dead settle who will be sung: a lovely song for Penelope, a hateful one for Clytemnestra, and confirmation of Odysseus' fame from his own victims."],
      ["The counter-example of Agamemnon", "The parallel running since Book 1 closes here, with the murdered king himself pronouncing the difference between the two houses."],
      ["Proof by inheritance", "Laertes is convinced not by a wound but by an orchard, which turns the evidence of identity into a record of what was handed down."],
      ["An ending imposed", "The feud is stopped by divine force rather than resolved, and readers have disputed since antiquity whether this close is Homer's."]
    ],
    terms: [
      ["psychopompos", "noun", "Guide of souls; Hermes' office in the opening lines of the book.", "Person"],
      ["kleos", "noun", "Imperishable fame carried by song, awarded here to Penelope by name.", "Term"],
      ["asphodel meadow", "noun", "The pale plain where the Homeric dead stand about and talk.", "Place"],
      ["Nekyia", "noun", "A scene of the dead; the poem's second one opens this book, and requires no voyage.", "Narrative"]
    ],
    ties: [
      ["The second Nekyia", "Book 11 reaches the dead by sailing to the edge of Ocean; here they are escorted there instead, and ancient critics who doubted the ending pointed at the difference."],
      ["The Oresteia thread", "Agamemnon's murder has shadowed the poem since Nestor told it at Pylos. Here the dead king judges the two wives himself, long before Aeschylus made that comparison a trilogy."],
      ["Endings and continuations", "Analysts from antiquity onwards have read this book as a later addition, and most modern critics defend it as the political close the poem needs."]
    ]
  }
];
