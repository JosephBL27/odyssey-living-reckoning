/*
 * Books V-VIII: The Return Begins.
 *
 * Odysseus released from Calypso, wrecked on the way, and taken in by a court
 * that asks no questions until it does. The poem's hero is absent for four
 * books and arrives here as a naked man asleep under a bush; by the end of
 * Book VIII he has been given a ship, a chest of gifts, and finally the one
 * question he has spent three books not answering.
 *
 * Episode titles are primary keys, copied from SPINE.json. `turn` is the
 * Odyssean equivalent of the reference instrument's transformation slot: the
 * recognition, disclosure, or reversal the episode performs.
 */

export const BOOKS_05_08 = [
  {
    id: 5,
    title: "The Raft",
    lens: "The hero of the poem appears in the seventh year of a captivity",
    date: "Days 7-32 - Ogygia, then eighteen days of open sea",
    setting: "Olympus, Calypso's island of Ogygia, and the sea off Scheria",
    summary: "The poem's hero is first seen in Book V, in the seventh year of a captivity, weeping on a beach while the goddess who has offered to make him deathless waits behind him. Zeus sends Hermes to order the release; Odysseus refuses immortality outright, saying he wants Penelope and Ithaca instead, and then builds a raft with his own hands. He sails eighteen days before Poseidon smashes it, and comes ashore on Scheria naked and flayed by rock, kept afloat by a sea-goddess's veil and hidden under a pile of leaves.",
    episodes: [
      ["The second council", "Athena raises Odysseus' case at a second assembly of the gods, and Zeus sends Hermes to Ogygia with an order that Calypso let the man go.", "A complaint → a dispatched god", "The council repeats Book I's almost point for point, which is the main reason some scholars have read Books V-XIII as an originally separate return-poem."],
      ["Hermes at Ogygia", "Hermes crosses the water like a shearwater, stops to admire the cave's vines and four springs, and delivers the order to a goddess who resents it.", "A private island → a public order", "The one place in the poem where a god pauses simply to look at something beautiful, and the beautiful thing is a prison."],
      ["Calypso's offer of immortality", "Calypso offers to make him deathless and ageless; he makes her swear no harm is meant, then says he wants his mortal wife and his home instead.", "Immortality → nostos", "The poem states its price outright in its first hero-scene: only a man who can die has a homecoming worth singing about."],
      ["The building of the raft", "Given a bronze axe, an adze and augers, he fells twenty trees and cuts, bores, pegs, decks and rigs a broad raft in four days.", "Castaway → shipwright", "The technical detail is characterisation; Odysseus is recognisable by what his hands can do several books before anyone learns his name."],
      ["Poseidon's storm", "On the eighteenth day the hills of Scheria rise like a shield on the horizon, and Poseidon, riding home from Ethiopia, drives the winds together and breaks the raft.", "Land in sight → the mast down", "The grievance driving this storm, the blinding of Poseidon's son, has not been narrated yet; the poem lets the anger land four books before it explains it."],
      ["Ino Leucothea's veil", "A sea-goddess surfaces beside the wreckage and gives him her veil to bind round his chest, telling him to strip, abandon the timbers and swim.", "Rescue offered → rescue distrusted", "He waits until the raft is destroyed before trusting her, and the caution that saves him here is the same habit that will keep him lying on Ithaca."],
      ["The landfall on Scheria", "The surf strips the skin from his hands on the rocks, pebbles clinging to an octopus dragged from its hole, until he finds a river mouth and prays to its god.", "Sea → land, and a man banked like a coal", "He sleeps under a wild olive grown into a cultivated one, buried in leaves as a farmer buries a firebrand in ash to keep the seed of fire alive."]
    ],
    cast: [
      ["Odysseus", "hero", "Weeping on Calypso's shore at the poem's first sight of him, then building a raft and swimming two days and nights to a rock coast."],
      ["Calypso", "nymph", "Holds him seven years, offers deathlessness and unageing youth, and hands over tools, provisions and a fair wind once Zeus overrules her."],
      ["Hermes", "god", "Carries the order across the sea and states its terms, unmoved by Calypso's complaint that gods punish goddesses for taking mortal lovers."],
      ["Athena", "goddess", "Puts his case at the second council and calms the water at the end, but keeps clear of the sea while Poseidon is working in it."],
      ["Zeus", "god", "Rules that the man goes home, and stipulates the manner: alone, late, after suffering, and on somebody else's ship."],
      ["Poseidon", "god", "Sees the raft on his way back from the Ethiopians and destroys it, for a reason the poem withholds until Book IX."],
      ["Ino Leucothea", "goddess", "Once a mortal daughter of Cadmus, now a power of the sea, who lends the veil that keeps him up and asks for it back."],
      ["The river of Scheria", "god", "Checks his own current when Odysseus prays at the mouth, and gives him the only landing on a coast that has been killing him."]
    ],
    themes: [
      ["Nostos against immortality", "Odysseus is offered deathlessness by name and turns it down for a mortal wife and a stony island, which fixes the poem's scale of value before he has done anything."],
      ["Concealment", "Calypso's name is built on the verb to hide; seven years on Ogygia is less a captivity than an erasure, since a man nobody can see generates no report."],
      ["Craft", "The raft is described tool by tool and joint by joint, and the making of it is the first evidence the poem offers that this is the man it has been talking about."],
      ["Endurance", "Most of the book is being struck by weather, by a god's grudge and by rock, and staying alive through it, which is what the epithet polytlas actually describes."]
    ],
    terms: [
      ["nostos", "noun", "Homecoming; the return by sea that gives the poem its subject, and the thing Odysseus takes here in preference to never dying.", "Term"],
      ["Ogygia", "proper noun", "Calypso's island, placed at the navel of the sea and nowhere identifiable; Homeric geography is not a map and should not be given coordinates.", "Place"],
      ["kredemnon", "noun", "A woman's veil or headband; Ino's keeps Odysseus afloat, and the same word names the battlements a walled city wears.", "Object"],
      ["polytlas", "adjective", "'Much-enduring', the standing epithet for Odysseus, and in this book a plain description of a man swimming for two days.", "Rhetoric"]
    ],
    ties: [
      ["Gilgamesh at the world's edge", "Mesopotamian epic sends its hero to the survivor of the flood and refuses him deathlessness. Homer inverts the shape: the offer is real, and the hero declines it."],
      ["Hesiod's Theogony", "The Theogony lists Calypso among goddesses who bore children to mortal men, and gives her sons by Odysseus for whom this poem has no room at all."],
      ["Ino in Ovid", "The goddess who lends the veil was Ino, daughter of Cadmus; Ovid narrates the leap into the sea that made her Leucothea, which Homer assumes his listeners already know."]
    ]
  },
  {
    id: 6,
    title: "The Washing at the River",
    lens: "A girl on a beach decides whether a stranger is a man",
    date: "Day 33 - the morning after the wreck",
    setting: "The river mouth and the town of the Phaeacians on Scheria",
    summary: "Athena sends a dream about laundry and marriage to a Phaeacian princess so that she will be at the river mouth when a naked castaway wakes in the bushes. Nausicaa holds her ground when her maids scatter, hears his supplication, and has him clothed, oiled and fed without asking his name. She then refuses to be seen walking into town beside him and tells him to put his plea not to her father but to her mother Arete, which sets the terms of everything that follows on Scheria.",
    episodes: [
      ["Athena's dream to Nausicaa", "Athena enters the sleeping princess's room in the shape of a friend her own age and shames her about unwashed linen and the marriage it is for.", "Sleep → a wedding errand", "The rescue is engineered entirely through domestic routine: a girl's laundry day is the only machinery a goddess needs."],
      ["The washing at the river mouth", "Nausicaa asks her father for the wagon without saying the word marriage, drives out with food and oil, and treads the clothes clean in the pools.", "A daughter's hint → a father's yes", "The book's picture of an intact and easy household is put directly in front of a man whose own is being eaten in his absence."],
      ["The ball, the cry, and the waking", "A throw goes wide into a deep eddy, the girls shriek, and Odysseus comes out of the thicket naked and salt-crusted, holding a branch in front of him.", "A game → a lion in the fold", "Homer reaches for a lion simile out of the Iliad's battle language and points it at a laundry party, which measures exactly how far the man has fallen."],
      ["The supplication", "He decides against clasping her knees, praises her from a distance as Artemis or a young palm at Delos, and asks only for rags and directions.", "Stranger → suppliant", "He closes by wishing her a husband and homophrosyne, like-mindedness, which is the poem's definition of a good marriage and a description of the one waiting for him."],
      ["Oil, clothes, and Athena's grace", "He washes alone, refusing to be bathed in front of young women, and Athena makes him taller and sets his hair curling; Nausicaa says such a man might do for a husband.", "Salt-crusted castaway → a man like a god", "Beauty is applied here like a smith overlaying silver with gold, the poem's own simile, so appearance is one more thing a goddess can lend and withdraw."],
      ["Nausicaa's instructions", "She sends him ahead alone to avoid the town's gossip, tells him to wait in the poplar grove of Athena, and to go straight past the king to the queen's knees.", "Rescuer → strategist", "A girl who has just thought aloud about marrying him guards her own reputation and hands him the single piece of court intelligence he needs."]
    ],
    cast: [
      ["Odysseus", "hero", "Wakes naked in a thicket, covers himself with a branch, and talks his way from castaway to guest without touching anyone or naming himself."],
      ["Nausicaa", "mortal", "Stands still when her maids run, gives the stranger clothes, oil and food, thinks aloud about marrying him, and then sends him off alone."],
      ["Athena", "goddess", "Plants the dream, holds Nausicaa steady on the shore and pours grace over Odysseus, while refusing to appear to him openly."],
      ["Alcinous", "mortal", "Grants the wagon without making his daughter say the word marriage out loud, and has no idea a stranger is on his way."],
      ["Arete", "mortal", "Absent from the scene and named as the person whose goodwill decides everything; she packs the oil and the food for the outing."],
      ["The handmaids", "collective", "Wash, spread the linen and play at ball with Nausicaa, then scatter at the sight of him, which is what makes her steadiness the point."],
      ["Artemis", "goddess", "Not present but the book's measure twice over: Nausicaa among her maids is likened to her, and Odysseus opens his appeal by asking whether that is who she is."],
      ["Poseidon", "god", "Still angry over his son, and the reason the goddess managing this rescue will not show her face in it."]
    ],
    themes: [
      ["Supplication", "A suppliant's claim is protected by Zeus and costs the person who accepts it something real; Odysseus makes his without laying a hand on Nausicaa, and it binds her anyway."],
      ["Homophrosyne", "The blessing he offers her, a husband and a household of one mind, is the poem's stated ideal of marriage, spoken by a man walking back towards his own."],
      ["Shame and the body", "Nakedness, the branch, the refusal to be washed by young women: the whole episode runs on aidos, the sense of what may and may not be seen."],
      ["Beauty as a loan", "Athena pours grace over him and takes it back when it has done its work, so how a man looks is an instrument in this poem rather than a fact about him."]
    ],
    terms: [
      ["hiketes", "noun", "A suppliant: one who claims protection by appeal rather than by right, under the Zeus who guards suppliants and strangers.", "Term"],
      ["aidos", "noun", "Shame, modesty, regard for what may decently be seen or said; it governs every move in this book, on both sides of the encounter.", "Term"],
      ["homophrosyne", "noun", "Like-mindedness between husband and wife; Odysseus calls it the best thing there is, in the middle of asking a stranger for clothes.", "Term"],
      ["Scheria", "proper noun", "The island of the Phaeacians; antiquity guessed at Corfu, and the poem supplies no bearings worth trusting.", "Place"]
    ],
    ties: [
      ["The meeting at the water", "Near Eastern and biblical narrative marries its hero to the girl he meets at a well. Homer runs the whole type-scene and then declines the wedding."],
      ["Sophocles' lost Nausicaa", "Sophocles wrote a Nausicaa, also called The Washerwomen, now lost; ancient report says he played ball in it himself."],
      ["The lion in the fold", "The simile that carries Odysseus out of the bushes belongs to Iliadic combat. Aiming it at a naked man and a group of girls is both the joke and the measurement."]
    ]
  },
  {
    id: 7,
    title: "The Bronze Threshold",
    lens: "A court that has never needed a war",
    date: "Day 33, evening - the palace of Alcinous",
    setting: "The palace, garden, and hearth of Alcinous",
    summary: "Athena wraps Odysseus in mist and walks him past a people she warns him are not especially fond of strangers, into a palace with bronze walls and an orchard where fruit ripens in every season. He appears out of the air at Arete's knees and asks for passage home, and the oldest man in the hall has to remind Alcinous that a suppliant should not be left sitting in the hearth-ash. Arete then recognises her own weaving on his back and asks where he got the clothes, which is the poem's first recognition and works from an object rather than a face. He answers with a true account of Calypso and the wreck, and still does not say who he is.",
    episodes: [
      ["The mist, and the girl with the pitcher", "Athena hides him in mist and meets him as a girl carrying a water jar, telling him to walk in silence because the Phaeacians do not welcome strangers easily.", "Seen → unseen", "The famously hospitable people are introduced with a warning about their hospitality, the first sign that Scheria is being tested as much as Ithaca will be."],
      ["The bronze walls and the garden", "Bronze walls, silver lintels, gold doors, immortal hounds made by Hephaestus, and an orchard where pear ripens on pear the whole year round.", "Shipwreck → a house with no weather", "Scheria has no season, no enemy and no scarcity, which makes it the poem's control case: a household with nothing pressing on it."],
      ["At the knees of Arete", "The mist falls away in the middle of the hall; Odysseus takes the queen's knees, asks for convoy home, and sits down in the ashes of the hearth.", "Invisible → suppliant", "He goes to the wife rather than the king, exactly as instructed, and the poem lets the manoeuvre stand as a judgement about where authority really sits."],
      ["Echeneus' rebuke", "The oldest Phaeacian present tells Alcinous that leaving a stranger in the hearth-ash shames the house; the king raises him and seats him in his own son's chair.", "Suppliant → guest", "Guest-friendship is a procedure with an order to it, and this host has to be walked through the order by an old man."],
      ["Arete recognises the clothes", "Arete waits until the hall has emptied, then asks the stranger who he is and who gave him clothes she wove with her own women.", "Her own weaving → an interrogation", "Recognition in this poem starts from objects rather than faces, and the method used on the cloak is the one the scar, the bed and the bow will all repeat."],
      ["Odysseus tells of Calypso", "He gives a truthful account of seven years on Ogygia, the raft and the wreck, takes the blame for not walking into town with Nausicaa, and withholds his name.", "Interrogation → a story without a name", "The single falsehood in it protects a girl from her father's judgement, which shows a man who lies as a courtesy as readily as for cover."],
      ["Alcinous offers his daughter", "Alcinous says he would like such a man to stay and marry Nausicaa, then swears convoy home the next day and will not hold him against his will.", "Guest → offered son-in-law", "This is the second marriage Odysseus is offered and does not answer; the poem keeps measuring his return by what he declines."]
    ],
    cast: [
      ["Odysseus", "hero", "Walks the town invisible, takes the queen's knees, accepts the chair and the meal, tells the truth about Calypso and keeps his name back."],
      ["Arete", "mortal", "Recognises her own weaving on the stranger's back and puts the first hard question anyone in the poem has asked him."],
      ["Alcinous", "mortal", "Hosts generously once prompted, swears a ship for the morning, and offers his daughter to a man who has not said who he is."],
      ["Athena", "goddess", "Pours mist round him, guides him in the shape of a girl with a pitcher, and briefs him on Arete's descent and her standing in the hall."],
      ["Echeneus", "mortal", "The oldest Phaeacian in the room, who tells his king that a suppliant sitting in the hearth-ash is a disgrace to the house."],
      ["Nausicaa", "mortal", "Home ahead of him with the mules and the linen, and faulted by her father for not bringing the stranger in herself."],
      ["Laodamas", "mortal", "Alcinous' favourite son, turned out of his own seat so that the guest can have the chair of honour."],
      ["The Phaeacian elders", "collective", "Feast, listen, pour the libation to Zeus of suppliants, and agree to the convoy without ever learning the guest's name."]
    ],
    themes: [
      ["Xenia as procedure", "Guest-friendship is a sequence, not a mood: raise the suppliant, seat him, feed him, pour to Zeus, and ask his name last. Alcinous needs prompting through it."],
      ["The withheld name", "Odysseus tells the truth about seven years, a goddess and a broken raft and still does not identify himself; the name is the one thing he rations."],
      ["Authority in the household", "Athena and Nausicaa both send him to the queen, and the hall falls silent when he reaches her, so the oikos is plainly not governed from the throne alone."],
      ["A world without need", "Bronze walls, an orchard with no season and ships that steer themselves make Scheria the counter-case against which Ithaca's ruin can be read."]
    ],
    terms: [
      ["xenia", "noun", "Guest-friendship: the reciprocal obligation binding host and stranger, enforced by Zeus and used throughout the poem as its moral test.", "Term"],
      ["pompe", "noun", "Escort or conveyance home; the precise thing Odysseus asks the Phaeacians for, and the thing Poseidon will punish them for granting.", "Term"],
      ["megaron", "noun", "The great hall of a Homeric house, with the hearth at its centre and the seats of honour ranged beside it.", "Place"],
      ["Zeus Xeinios", "proper noun", "Zeus in his function as guardian of guests and suppliants; the libation poured to him is the formal act of accepting a stranger.", "Person"]
    ],
    ties: [
      ["Apollonius' Phaeacians", "In the Argonautica the same court shelters Jason and Medea, and Arete again settles the matter privately overnight, which suggests her authority is older than this poem."],
      ["The garden that never fails", "Alcinous' orchard belongs with Hesiod's Isles of the Blest and the later paradise gardens, except that Homer keeps it inside a working household rather than beyond death."],
      ["Ferrymen of the dead", "A long-running reading takes the Phaeacians, with their thought-guided ships and sleeping passengers, for an older folk-tale ferry to the other world. That is an interpretation, not something the poem says."]
    ]
  },
  {
    id: 8,
    title: "The Singer and the Games",
    lens: "A man hears his own life sung, and weeps",
    date: "Day 34 - the Phaeacian assembly, games, and feast",
    setting: "The agora, the games ground, and the hall of Alcinous",
    summary: "Alcinous calls an assembly, crews a ship, and brings in the blind singer Demodocus, who performs a quarrel between Odysseus and Achilles while Odysseus pulls his cloak over his head and weeps. A Phaeacian noble then insults the guest as a merchant rather than an athlete, and the discus throw that answers him is followed by a boast about the bow that the poem will collect in Book XXI. Demodocus sings twice more, Ares and Aphrodite caught in a lame husband's net and then the wooden horse, and the second song reduces Odysseus to the tears of a widow being dragged off into slavery, which is what finally makes Alcinous ask his name.",
    episodes: [
      ["The assembly and the promise of convoy", "Alcinous summons the Phaeacians, has fifty-two young men crew a ship, and calls the whole court in to feast a guest whose name nobody has asked for.", "A nameless stranger → a ship", "Athena works the crowd in a herald's shape, so the convoy that will cost the Phaeacians their harbour is a goddess's arrangement from the start."],
      ["Demodocus sings the quarrel", "The blind singer takes up a famous quarrel between Odysseus and Achilles; Odysseus draws his purple cloak over his head and weeps, noticed only by his host.", "Listener → subject of the song", "No other source preserves this quarrel, so the plot of the song is lost; what survives is the sight of a man hearing his own fame and hiding his face."],
      ["The games, and Euryalus' insult", "Laodamas invites the guest to compete, and when he declines, Euryalus calls him a man of cargoes and greedy gains rather than an athlete.", "Guest → a man called a trader", "The one open breach of guest-friendship on Scheria is a status insult, and it is committed by the host's own court in front of him."],
      ["The discus throw", "Odysseus picks up a heavier stone, throws it past every mark, and offers to meet any Phaeacian at anything except running, then boasts about the bow.", "Insult → an unanswerable throw", "Athena marks the fall in the shape of a Phaeacian man, and the boast about archery is the poem laying down what Book XXI will pick up."],
      ["Ares and Aphrodite", "Demodocus sings the lovers pinned in Hephaestus' invisible chains while the gods crowd the doorway laughing and Poseidon guarantees the adulterer's fine.", "Speed → craft", "A lame smith traps a swift war-god in a bed he built himself and sues for the bride-price, an adultery plot with no corpses, sung to a man riding home towards one with many."],
      ["The dance and the gifts", "Two young men dance with a purple ball, twelve princes each give a cloak, a tunic and gold, and Euryalus apologises with a bronze sword in an ivory scabbard.", "Insult → a sword in apology", "Arete packs the gifts in a chest that Odysseus ties with a knot Circe taught him, naming a woman his listeners will not meet for another two books."],
      ["The bath, and Nausicaa's farewell", "Nausicaa waits by a pillar of the hall and asks him to remember, once he is home, that she saved his life first.", "A possible husband → a debt remembered", "It is the last thing she says and the last time she is seen in the poem, and neither of them mentions the marriage everyone else has raised."],
      ["The wooden horse, and the weeping simile", "Odysseus asks for the song of the horse and breaks down as a woman breaks down over her husband's body while spears push her away into slavery.", "Sacker of cities → the widow he made", "Homer measures the man by making him feel his own victory from the losing side, and Alcinous stops the singer a second time to ask, at last, who he is."]
    ],
    cast: [
      ["Odysseus", "hero", "Weeps twice into his cloak at songs about himself, answers an insult with a discus, and is finally asked his name in the book's last lines."],
      ["Demodocus", "singer", "Blind, taught by the Muse, fed from the king's own table, and stopped twice mid-song because his subject is sitting in the hall crying."],
      ["Alcinous", "mortal", "Notices the weeping both times, covers it with games and dancing, and then puts the direct question nobody has asked in two days."],
      ["Euryalus", "mortal", "Taunts the guest as a trader with an eye on profit, and apologises with a bronze sword once the throw has shamed him."],
      ["Laodamas", "mortal", "Invites the stranger into the games out of courtesy, which is what opens the door for the insult."],
      ["Athena", "goddess", "Talks the crowd into the assembly as a herald, pours beauty over Odysseus, and marks his discus in the guise of a Phaeacian spectator."],
      ["Nausicaa", "mortal", "Waits by a pillar to ask that he remember she saved him first, and then leaves the poem for good."],
      ["Hephaestus", "god", "Inside Demodocus' song, the lame husband whose invisible net catches Ares in bed and turns an adultery into a claim for damages."]
    ],
    themes: [
      ["Kleos and its cost", "He hears his own fame sung twice and weeps both times, which turns the reward the Iliad promises into something a living man cannot sit through."],
      ["The singer", "Demodocus is blind, Muse-taught, fed at the king's table and cut off twice by his patron, and he is the poem's frankest portrait of its own trade."],
      ["Hospitality strained and repaired", "A guest is insulted in his host's own games, and the breach is closed with a sword and gold, which is what xenia looks like when it bends instead of breaking."],
      ["The adultery in the mirror", "Demodocus sings a husband trapping his wife's lover in a bed he built; the Ithacan version of that plot is waiting at the far end of the poem, and it kills."]
    ],
    terms: [
      ["aoidos", "noun", "A singer of tales, performing to the lyre out of inherited material; Demodocus is the poem's own picture of one at work.", "Term"],
      ["kleos", "noun", "Fame as something heard: what gets said about a man afterwards, which is why it cannot be earned on a hidden island.", "Term"],
      ["xeinion", "noun", "A guest-gift; the goods a host loads on a departing stranger, and the material proof that guest-friendship was kept.", "Object"],
      ["reverse simile", "noun", "A modern critical term for Homer's habit of comparing a man to a woman or a king to a beggar; the weeping captive here is the clearest instance.", "Rhetoric"]
    ],
    ties: [
      ["Ovid's Mars and Venus", "Ovid retells Demodocus' song in the Metamorphoses, but hands it to women telling stories at a loom rather than to a court poet earning his dinner."],
      ["The Epic Cycle's horse", "The sack of Troy was narrated at length in the lost Little Iliad and Iliou Persis, and later by Virgil. Homer only ever lets it be sung by somebody else, in somebody else's hall."],
      ["The blind singer", "Ancient tradition made Homer blind, partly on the strength of Demodocus and the blind man of Chios in the Hymn to Apollo. The identification belongs to the tradition, not to the poem."]
    ]
  }
];
