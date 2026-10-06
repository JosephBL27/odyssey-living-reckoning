/*
 * Books XVII-XX: the beggar in the hall.
 *
 * Four days' worth of the poem's present action, all of it inside one
 * household. Odysseus is home, disguised, and declaring nothing; the books
 * work by testing everyone who meets him and keeping the score. Episode
 * titles are the primary keys and match SPINE.json character for character.
 */

export const BOOKS_17_20 = [
  {
    id: 17,
    title: "The Beggar at His Own Door",
    lens: "A king measures his household by how it treats a stranger",
    date: "Day 38 - the road to town, and the evening meal",
    setting: "The steading, the spring of Ithacus, and the hall",
    summary: "Telemachus goes into town and reports to Penelope what Nestor and Menelaus told him, while keeping to himself the fact that his father is sitting at the farm. Eumaeus then walks the disguised Odysseus down the same road, past Melanthius, who kicks him, to the palace, where his own hound Argos knows him from a dung heap and dies. Odysseus begs along his own tables to find out who in the house is decent, and Antinous answers by throwing a footstool at him. The book is the poem's plainest audit of xenia: everyone in it is graded by what they hand a stranger.",
    episodes: [
      ["Telemachus into town", "Telemachus leaves the steading at dawn for the palace, telling Eumaeus to bring the beggar down to beg among the suitors.", "The farm → the hall", "Father and son split up so that the household is watched from inside and outside at the same hour."],
      ["Penelope's questioning", "Penelope asks for news; Telemachus reports Nestor's ignorance and Menelaus' account of Proteus, that Odysseus is held on Calypso's island.", "News asked for → news withheld", "Telemachus can now withhold the truth from his own mother, which is the first thing he learns from his father."],
      ["Theoclymenus' prophecy", "The seer brought back from Pylos swears by Zeus and the table of hospitality that Odysseus is already in the country, planning the suitors' ruin.", "Absent → already ashore", "The truth is stated aloud in the hall, under oath, and Penelope files it as hope rather than fact."],
      ["Melanthius on the road", "At the built spring of Ithacus the goatherd Melanthius abuses Eumaeus, kicks Odysseus in the hip, and walks on ahead of them.", "Stranger → target", "The first of three assaults on a beggar in this book, and the first proof that restraint is now the harder skill."],
      ["Argos on the dung heap", "The hound Odysseus reared before Troy, twenty years old and lying in the dung, drops his ears, wags his tail, and dies.", "Beggar → master, for one dog", "The only recognition in the poem nobody has to be silenced about, because the witness cannot speak and does not survive it."],
      ["Begging along the tables", "Athena sends Odysseus round the hall to beg from each suitor in turn so that he can learn which of them is decent.", "Owner → suppliant at his own board", "The disguise is an instrument, not a hiding place: begging is how the house gets surveyed, man by man."],
      ["Antinous and the footstool", "Antinous refuses him bread, abuses Eumaeus for bringing him, and throws a footstool that strikes Odysseus at the base of the neck.", "Suppliant → struck", "Even the other suitors object, warning that gods walk the towns in the likeness of strangers, which is nearly what has happened."],
      ["Penelope sends for the stranger", "Penelope curses Antinous and sends Eumaeus to fetch the beggar for news of her husband; Odysseus asks to be heard after dark.", "A summons → an interview deferred", "The delay holds husband and wife in one house without a meeting for another day, and sets up the interview of Book XIX."]
    ],
    cast: [
      ["Odysseus", "hero", "Walks to his own door as a beggar and takes a kick and a footstool without lifting a hand."],
      ["Telemachus", "mortal", "Goes ahead into town, reports his travels to his mother, and keeps back the one fact that matters."],
      ["Penelope", "mortal", "Questions her son, hears a seer swear her husband is on Ithaca, and sends for a stranger who may know more."],
      ["Eumaeus", "servant", "Walks the beggar down to the palace, defends him to Antinous, and goes back to his pigs at nightfall."],
      ["Argos", "mortal", "The hound Odysseus bred before Troy, who knows his master from the dung heap and cannot say so."],
      ["Melanthius", "servant", "The goatherd who abuses both men at the spring and kicks the master of the house on the road."],
      ["Antinous", "suitor", "Refuses the beggar a crust and throws a footstool at him, to the unease of the other suitors."],
      ["Theoclymenus", "seer", "The fugitive prophet from Argos, who swears in the hall that Odysseus is home and sowing ruin."]
    ],
    themes: [
      ["Xenia as measurement", "Everyone the beggar meets on the road and in the hall is graded by what they give a stranger, and the grades hold to the end of the poem."],
      ["The disguise as instrument", "Odysseus begs not only for cover but to survey his household one man at a time, with Athena pushing him to do it."],
      ["Recognition without speech", "Argos knows him and cannot report it; the poem's first successful recognition costs the recogniser his life."],
      ["The household split", "Eumaeus and Melanthius take the same road in the same hour, and the book lets the reader keep score."]
    ],
    terms: [
      ["xenia", "noun", "Guest-friendship: the reciprocal obligation between host and stranger, held under the protection of Zeus.", "Term"],
      ["ptochos", "noun", "A beggar, the lowest position in the Homeric household, and the one Odysseus deliberately takes.", "Term"],
      ["thumos", "noun", "The seat of anger and impulse, which Odysseus addresses and overrules twice on the road into town.", "Term"],
      ["Theoxeny", "noun", "The motif of a god arriving disguised as a stranger to test a house; the suitors name it and ignore it.", "Narrative"]
    ],
    ties: [
      ["Zeus Xeinios", "Zeus in his cult title as protector of strangers and suppliants stands behind every meal here, which makes striking a beggar a religious offence rather than bad manners."],
      ["Gods in the likeness of strangers", "The theoxeny motif runs from Near Eastern hospitality tales to Ovid's Baucis and Philemon; Homer uses it as a threat the wicked wave away, not as a reward for the pious."],
      ["The returning husband", "The disguised return on the eve of a wife's remarriage is a widespread folktale, and Homer stretches it across seven books to turn it into an audit of a household."]
    ]
  },
  {
    id: 18,
    title: "The Fight in the Doorway",
    lens: "Two beggars, and one of them owns the house",
    date: "Day 38, evening - the hall",
    setting: "The doorway and hall of Odysseus",
    summary: "A professional beggar called Irus tries to drive Odysseus off his own doorstep, and the suitors set the two of them boxing for a goat's stomach; Odysseus breaks the man's jaw with a measured blow and props him against the courtyard wall. Athena then beautifies Penelope in her sleep and sends her down to the hall, where she tells the suitors that proper courtship brings gifts, and they fetch robes, gold, amber and earrings. Odysseus watches his wife take payment from the men courting her and is delighted. Melantho insults him at the braziers, Eurymachus throws the second footstool of the poem and misses, and nobody in the hall understands that all of it is being counted."
    ,
    episodes: [
      ["Irus the town beggar", "Arnaeus, the errand-running beggar the town calls Irus, orders Odysseus off the threshold and threatens to drag him out by the foot.", "One beggar → a rival for the door", "The poem's ugliest joke: the man with the best claim to the doorway is the one being evicted from it."],
      ["The fight for the doorway", "Antinous sets them to box for a goat's stomach; Odysseus girds his rags, and the thighs and shoulders that emerge frighten Irus before a blow lands.", "Rags → the body of a fighter", "He picks the punch that breaks a jaw rather than a skull, because a corpse in the doorway would end the disguise."],
      ["Amphinomus warned", "Amphinomus gives the beggar bread and drinks his health; Odysseus tells him the master of the house is near and advises him to go home.", "A courtesy → a warning refused", "The one suitor with manners is offered an exit in plain words and stays, which is how the poem settles the question of collective guilt."],
      ["Athena puts beauty on Penelope", "Athena sets it in Penelope's mind to show herself, sleeps her, and works ambrosia into her face; the suitors' knees loosen as she comes down.", "Grief → display", "Beauty is applied here like a tool, to raise her standing in front of her son and her husband at once."],
      ["The gifts extracted", "Penelope tells the suitors that real courtship brings gifts instead of eating a house, and robes, a gold and amber chain, earrings and a necklace arrive.", "Courtship → tribute", "Whatever she intends by it, she is pulling goods back into the estate from the men consuming it, and Odysseus enjoys the sight."],
      ["Melantho's insults", "Melantho, the maid Penelope raised and Eurymachus sleeps with, tells the beggar to take his rags outside; he warns her the master may still come home.", "Foster-daughter → enemy of the house", "The disloyal maids are named and numbered in this scene, which is why their execution in Book XXII is not a surprise."],
      ["Eurymachus and the second footstool", "Eurymachus mocks the beggar's bald head and offers him hired labour; when Odysseus challenges him to a day's mowing and a war, he throws a stool.", "Mockery → a thrown stool", "The stool misses and breaks a wine-steward's hand, so the violence aimed at a beggar keeps landing on the suitors' own servants."],
      ["The braziers and the taunting", "Odysseus stands holding light at the braziers while the hall drinks and jeers, until Telemachus and Amphinomus call for a last libation and bed.", "Light-bearer → witness keeping count", "The evening ends with the master of the house lighting the room for the men eating it, which is the disguise in one image."]
    ],
    cast: [
      ["Odysseus", "hero", "Fights for the right to beg at his own doorway, then holds a light for the men consuming his estate."],
      ["Irus / Arnaeus", "mortal", "The town beggar who runs errands for the suitors and loses his jaw for claiming the threshold."],
      ["Antinous", "suitor", "Proposes the fight, sets the prize, and afterwards sends for the richest of the extracted gifts."],
      ["Amphinomus", "suitor", "The decent one, who feeds the beggar, is told to leave while he can, and goes back to his seat."],
      ["Penelope", "mortal", "Comes down to the hall and converts a room full of suitors into a room full of contributors."],
      ["Athena", "goddess", "Plants the impulse in Penelope, then works on her face with ambrosia while she sleeps."],
      ["Melantho", "servant", "The maid Penelope brought up herself, now sleeping with Eurymachus and abusing the beggar at the fire."],
      ["Eurymachus", "suitor", "Mocks the beggar, offers him farm work, and throws the stool that maims a wine-steward."]
    ],
    themes: [
      ["Hospitality abused", "The suitors stage a fight between two starving men for a goat's stomach, which turns a guest into an evening's entertainment."],
      ["Restraint as craft", "Odysseus measures a punch that will not kill, because the disguise is worth more to him than the satisfaction."],
      ["The value of a wife", "Penelope's beauty is applied by a goddess and spent in public, and the transaction is described in the language of price."],
      ["The warning refused", "Amphinomus is told plainly to go home and does not, which is the poem's answer to whether all the suitors deserve it."]
    ],
    terms: [
      ["gaster", "noun", "The belly, which Odysseus repeatedly blames for everything a beggar is driven to do.", "Term"],
      ["hedna", "noun", "The gifts a suitor owes the bride's family; Penelope reverses the flow and collects them herself.", "Term"],
      ["xeinion", "noun", "A guest-gift, the material proof that guest-friendship has been honoured.", "Object"],
      ["megaron", "noun", "The great hall of a Homeric house, with its hearth, doorway and threshold, where all of this book happens.", "Place"]
    ],
    ties: [
      ["Games inverted", "The boxing keeps the shape of the funeral games of Iliad XXIII and the Phaeacian contests of Odyssey VIII, with a blood pudding for a prize."],
      ["Helen on the wall", "Penelope's descent before men fighting over her recalls Iliad III, where Helen is displayed to the armies; Homer makes this appearance a calculated transaction instead."],
      ["Bride-gifts", "In Greek practice hedna passed from the suitor to the bride's family, so the men who have been eating the estate are here made to pay into it."]
    ]
  },
  {
    id: 19,
    title: "The Scar",
    lens: "Recognition arrives from below, by touch, and is silenced",
    date: "Night of Day 38 - the hall, cleared and dark",
    setting: "The hall by firelight, and Penelope's chair beside it",
    summary: "Odysseus and Telemachus carry the weapons out of the hall by torchlight while Athena goes ahead with a golden lamp. Penelope then interviews the stranger, who tells her he is Aethon of Crete and entertained her husband twelve days twenty years ago, and proves it by describing the brooch and tunic Odysseus wore. He swears Odysseus will be home within the month; she orders a bath, and the old nurse Eurycleia finds the boar-scar on his thigh and knows him, so he takes her by the throat to keep her quiet. The book closes with Penelope's dream of an eagle killing twenty geese, her account of the gates of horn and ivory, and her decision to set the contest of the bow.",
    episodes: [
      ["The arms carried out by torchlight", "Father and son carry the spears, shields and helmets from the hall to the storeroom while Athena lights the walls ahead of them with a golden lamp.", "An armoury → a bare hall", "The cover story is smoke damage and drunken quarrels; the purpose is that tomorrow only one side will be able to reach a weapon."],
      ["Melantho again", "Melantho abuses the beggar a second time; Penelope cuts her off, tells her she knows exactly what she has been doing, and has a chair set by the fire.", "An insult → a mistress' warning", "Penelope's authority in her own house is real and narrow: she can silence a maid and can do nothing about the men in the doorway."],
      ["Penelope and the stranger", "Penelope tells the beggar how she wove and unwove the shroud of Laertes for three years before her own maids gave the trick away.", "Weaving by day → the unweaving confessed", "Whether she has already recognised the man she is talking to is a genuine scholarly dispute, and the text never settles it."],
      ["I entertained him twenty years ago", "He says he is Aethon, brother of Idomeneus, and that a storm drove Odysseus to Crete and kept him twelve days; Penelope weeps like snow melting.", "Odysseus → Aethon of Crete", "The lie is built so that every consoling detail in it is a memory belonging to the man delivering it."],
      ["The brooch and the tunic", "She tests the tale; he describes the purple double cloak, the golden brooch of a hound gripping a struggling fawn, and the tunic bright as onion-skin.", "A lie → a true token", "The single verifiable thing in a false biography is true, which is how a deception is made to hold under questioning."],
      ["The oath, and the promise of the month", "He swears by Zeus and the hearth that Odysseus is alive among the Thesprotians, has gone to Dodona for the oak's counsel, and will arrive this month.", "Hearsay → a sworn oath", "The oath is technically true and deliberately useless, since the man swearing it is the man he swears is coming."],
      ["Eurycleia and the scar", "Refusing the young maids, he lets the old nurse wash him; her hands find the scar the Parnassus boar left, the basin goes over, and he seizes her throat.", "Beggar → Odysseus, by touch", "Athena turns Penelope's mind aside, so the poem's central recognition happens at floor level and is gagged within a line."],
      ["The geese, and the gates of horn and ivory", "Penelope reports a dream of an eagle breaking the necks of twenty geese and speaking in a human voice, sorts true dreams from false, and sets the contest of the axes.", "A dream told → the bow set for tomorrow", "She divides dreams by the gate they came through and then acts on one she has just called unreliable."]
    ],
    cast: [
      ["Odysseus", "hero", "Strips the hall of weapons, invents a Cretan host for himself, and throttles the only person who identifies him."],
      ["Penelope", "mortal", "Interviews the stranger by firelight, tests him on the clothes, orders him bathed, and announces the contest of the bow."],
      ["Eurycleia", "servant", "The old nurse who washes his feet, finds the scar with her hands, and is sworn to silence on the spot."],
      ["Telemachus", "mortal", "Carries the arms out with his father and then goes to bed, leaving the hall to two people who will lie to each other."],
      ["Athena", "goddess", "Lights the passage to the storeroom, and turns Penelope's attention away at the exact moment of the scar."],
      ["Melantho", "servant", "Insults the beggar once more and is told by her mistress precisely what is coming to her."],
      ["Autolycus", "mortal", "Odysseus' grandfather, the thief and swearer of oaths who named him and whose boar-hunt left the scar."],
      ["Aethon of Crete", "narrative presence", "The invented brother of Idomeneus that Odysseus becomes for one evening, whose false life carries one true token."]
    ],
    themes: [
      ["Anagnorisis delayed", "The recognition the whole poem points at happens by accident, to a servant, and is suppressed before anyone else can hear it."],
      ["Lying as craft", "The Cretan tale is invented, sustained, and anchored by one true detail placed exactly where it will be tested."],
      ["The body as record", "The scar carries an identity that a name cannot, which is why in this book touch beats speech."],
      ["Reading the future", "Oaths, dreams and omens all arrive in one evening, and the woman sorting them acts on the least reliable of them."]
    ],
    terms: [
      ["sema", "noun", "A sign or token by which a thing is known; here the scar on Odysseus' thigh.", "Term"],
      ["anagnorisis", "noun", "Recognition, the turn from ignorance to knowledge; Aristotle ranked the kind produced by a bodily mark lowest of all.", "Narrative"],
      ["lykabas", "noun", "The obscure time-word in Odysseus' oath, read as the turn of the month or of the year; its sense is still disputed.", "Term"],
      ["Gates of horn and ivory", "noun phrase", "Penelope's account of the two gates dreams pass through: horn for the true ones, sawn ivory for the deceiving.", "Narrative"]
    ],
    ties: [
      ["The Cretan lies", "Odysseus tells a run of false Cretan tales across the poem's second half; Crete became the proverbial home of liars, but Homer treats the invention as a skill rather than a vice."],
      ["Auerbach's scar", "Erich Auerbach opened Mimesis with this passage, arguing that the long digression on the boar-hunt leaves nothing in shadow, unlike the reticence of biblical narrative."],
      ["The ivory gate", "Virgil closes Aeneid VI by sending Aeneas out through the gate of ivory, borrowing Penelope's image and leaving readers to argue about what it implies."]
    ]
  },
  {
    id: 20,
    title: "The Last Night",
    lens: "Omens accumulate; nobody in the hall can read them",
    date: "Day 39 - the feast day of Apollo",
    setting: "The porch, the hall, and the courtyard of Odysseus",
    summary: "Odysseus lies awake in the forecourt watching the maids go out to the suitors, and has to talk his own heart out of killing them where they stand. Signs then arrive in quantity: thunder from a clear sky, a mill-woman's curse, an eagle carrying a dove, and meat that runs with blood. Philoetius the cowherd arrives and proves loyal, Ctesippus throws an ox-hoof at the beggar and calls it a guest-gift, and Theoclymenus sees the hall crowded with ghosts and is laughed out of the house. Everything needed to read the next day is present in this one, and none of the men who will die tomorrow reads any of it.",
    episodes: [
      ["The maids in the dark", "Odysseus lies on an untanned ox-hide in the forecourt and watches twelve maids slip out laughing to the suitors' beds; his heart growls like a bitch over her pups.", "A count kept → a sentence passed", "The hanging of the maids in Book XXII is decided here, in the dark, before a single weapon has been drawn."],
      ["Endure, my heart", "He beats his chest and orders his own heart to hold, reminding it that it endured the Cyclops eating his men, then turns over like a sausage on a fire.", "Rage → endurance", "The poem's most quoted self-address, and its plainest statement that Odysseus' hardest fight is with his own timing."],
      ["Penelope's prayer for death", "Upstairs Penelope wakes weeping from a dream of Odysseus as he looked leaving for Troy, and prays Artemis to kill her rather than let her go to a lesser man.", "Twenty years of waiting → a prayer to die", "Husband and wife lie awake in one house at one hour, and he hears her crying and mistakes it for recognition."],
      ["The thunder and the mill-woman", "Odysseus asks Zeus for a sign and gets two: thunder out of a cloudless sky, and the last woman still at her mill praying this be the suitors' final meal.", "A prayer → sky and mill answer together", "The weakest person in the house speaks the clearest prophecy in it, and only the beggar on the floor is listening."],
      ["Philoetius the cowherd", "The cowherd ferries a heifer over from the mainland, greets the beggar kindly, and admits that only shame and hope have kept him from driving the herds elsewhere.", "Servant → the second loyal man", "The loyal side of the household is now assembled: two herdsmen, an old nurse, a son, and a beggar."],
      ["The eagle with the dove", "The suitors go back to their plan of ambushing Telemachus until an eagle crosses on the left with a trembling dove, and Amphinomus tells them to drop it and eat.", "Ambush → postponed", "They can read a bird well enough to call off a murder, and not well enough to notice which of them is the dove."],
      ["Ctesippus and the ox-hoof", "Ctesippus of Same announces a guest-gift for the stranger and throws an ox-hoof at him; Odysseus moves his head, smiles grimly, and Telemachus threatens to run him through.", "Guest-gift → a thrown hoof", "Guest-friendship has decayed into a joke about itself, which is the last thing the poem needs to establish before the killing."],
      ["Theoclymenus sees the hall in blood", "Athena sets an uncontrollable laughter on the suitors; their meat runs with blood, and Theoclymenus sees their faces shrouded in night and ghosts filling the porch.", "Laughter → a hall full of the dead", "The last warning in the poem is delivered, laughed at, and walked out of the house on its own legs."]
    ],
    cast: [
      ["Odysseus", "hero", "Sleepless on the porch, counting maids, arguing with his own heart, and asking Zeus for a sign before dawn."],
      ["Athena", "goddess", "Comes down to settle him for the night, then sets an unnatural laughter on the men who will die tomorrow."],
      ["Penelope", "mortal", "Wakes from a dream of her husband as he was at Troy and prays to be killed before she is made to remarry."],
      ["Telemachus", "mortal", "Seats the beggar at the threshold, gives him his portion, and tells the suitors whose hall this is."],
      ["The mill-woman", "servant", "The weakest of twelve grinding women, still at her stone, whose curse becomes the day's first omen."],
      ["Philoetius", "servant", "The cowherd who brings a heifer across, treats the beggar as a guest, and is told his master is coming."],
      ["Ctesippus", "suitor", "The rich man from Same who names an ox-hoof a guest-gift and throws it across the hall."],
      ["Theoclymenus", "seer", "Sees the walls streaming with blood and the porch crowded with ghosts, is laughed at, and leaves."]
    ],
    themes: [
      ["Omens unread", "Thunder, a chance curse, an eagle and bleeding meat arrive inside one day, and the only people who miss them are the ones they concern."],
      ["Endurance", "The epithet polytlas is earned on a porch rather than in a fight; holding still is the hardest work Odysseus does."],
      ["The loyal remnant", "By nightfall the household has sorted itself into the people who will be armed tomorrow and the people who will not."],
      ["Xenia as a joke", "Ctesippus calls his thrown ox-hoof a guest-gift, which is the final degradation of the code before the reckoning."]
    ],
    terms: [
      ["pheme", "noun", "An utterance overheard by chance and taken as a sign; the mill-woman's curse is the poem's clearest instance.", "Term"],
      ["teras", "noun", "A portent sent by a god, such as thunder from a clear sky or an eagle carrying a dove.", "Term"],
      ["hecatomb", "noun", "A great public sacrifice; Day 39 is Apollo's festival, and the suitors are eating their way through one.", "Event"],
      ["polytlas", "adjective", "'Much-enduring', the standing epithet Odysseus lives up to while lying still on his own porch.", "Rhetoric"]
    ],
    ties: [
      ["Cassandra's kin", "Theoclymenus sees a house running with blood and is laughed at; Aeschylus gives Cassandra the same vision in Agamemnon, and the same audience."],
      ["The chance word", "Greek divination treated an overheard utterance as a sign, a practice still visible in Herodotus, and the mill-woman's curse is the Odyssey's plainest example."],
      ["Apollo's day", "The killing falls on Apollo's festival and is done with a bow, though whether Homer intends the coincidence or simply inherited the calendar is disputed."]
    ]
  }
];
