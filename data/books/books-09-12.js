/*
 * Books IX-XII: the apologoi. Odysseus takes the narration in Alcinous' hall
 * and tells ten years of sea in one night. He is the only witness to all of
 * it, and he is telling it to the people he needs to give him a ship.
 *
 * Episode titles are primary keys, copied from SPINE.json character for
 * character. `turn` names the reversal the episode performs, in the place
 * where the Metamorphoses instrument names a transformation.
 */

export const BOOKS_09_12 = [
  {
    id: 9,
    title: "The Cyclops",
    lens: "The story he tells about himself begins with a raid",
    date: "Told on the night of Day 34 - events of ten years before",
    setting: "Ismarus, the Lotus coast, and the cave of Polyphemus",
    summary: "Odysseus finally gives Alcinous his name and takes over the poem, so that everything from here to the end of Book XII rests on a single unverified witness. He opens his own story with a plunder raid on Ismarus that his men refuse to leave in time, then loses a scouting party to the lotus and lands on the shore of the Cyclopes. In Polyphemus' cave he meets a host who eats his guests instead of feeding them, escapes by calling himself Nobody and burning out the giant's eye, and then shouts his real name across the water, which is what lets Polyphemus curse him to Poseidon by it.",
    episodes: [
      ["I am Odysseus son of Laertes", "He gives the Phaeacians the name he has withheld for two books, claims his reputation for cunning, and names Ithaca as the place he is trying to reach.", "Nameless guest → Odysseus", "The apologoi begin here: from this line to the end of Book XII the only authority for what happened is the man who wants the convoy."],
      ["The sack of Ismarus", "Leaving Troy the fleet storms the Ciconian town, kills the men and divides the women and goods, then drinks on the beach until the inland Cicones come down and rout it.", "Raiders → routed", "He begins his self-portrait with a raid he could not stop, and sparing Apollo's priest Maron is the one act of restraint in it — the wine that will blind the Cyclops."],
      ["The storm off Malea", "Rounding Cape Malea for Ithaca, the north wind and current take the fleet past Cythera and drive it nine days across open water.", "Charted sea → nowhere", "The last named point on a real map; from here the geography of the wanderings is a matter of guesswork, and no ancient or modern identification of these coasts is settled."],
      ["The land of the Lotus-eaters", "A scouting party is given the lotus by a people who mean them no harm, and loses all wish to go home; Odysseus drags them back weeping and lashes them under the benches.", "Homecoming → forgetting", "The first threat to nostos is not violence but genuine kindness, which makes forgetting the deepest danger the poem knows."],
      ["The cave of Polyphemus", "Against his crew's advice Odysseus takes twelve men into a stranger's cave to see what guest-gift its owner will offer; the owner comes home, seals the door with a boulder and eats two of them.", "Guest → meat", "Polyphemus inverts every rule of xenia — he demands names before he offers food, and the xeinion he promises is to eat Odysseus last."],
      ["Nobody is my name", "Odysseus gives the giant three bowls of Maron's unmixed wine and, asked his name in return, answers Outis, Nobody.", "Odysseus → Nobody", "The pun is also a sacrifice: to survive he has to give up the name his whole reputation is made of, and the Greek hides metis, cunning, inside it."],
      ["The stake in the eye", "The six survivors heat the olive stake, drive it into the sleeping Cyclops' single eye and turn it; his neighbours hear him roaring that Nobody is killing him, and go back to bed.", "One eye → none", "The trick works twice, first as violence and then as a joke, and the second time it is the name alone that holds the neighbours off."],
      ["Under the rams, and the curse", "The men escape lashed beneath the bellies of the flock the blind giant is stroking, and from the ship Odysseus shouts his true name, his father's, and his island.", "Nobody → Odysseus", "Kleos and nostos come apart here: the boast that secures his fame is the same act that gives Polyphemus a name to pray against, and buys ten more years of sea."]
    ],
    cast: [
      ["Odysseus", "hero", "Names himself at last and becomes the poem's narrator, telling a story in which he is both the cleverest man present and the one who cannot hold his tongue."],
      ["Alcinous", "mortal", "The Phaeacian king who asked for the name, and who will pay for the tale with a ship and a cargo of gifts."],
      ["Polyphemus", "monster", "A one-eyed herdsman who keeps no assemblies and fears no god, and who turns the ritual of guest-friendship inside out."],
      ["Poseidon", "god", "Polyphemus' father, absent from the cave and decisive afterwards; the curse is what makes him the poem's antagonist."],
      ["Zeus", "god", "Invoked as protector of suppliants and strangers, dismissed to his face by the Cyclops, and the sender of the storm that starts the drifting."],
      ["Maron", "mortal", "Priest of Apollo at Ismarus, spared in the raid, whose gift of black wine is the weapon that empties the cave."],
      ["The crew", "collective", "Companions who advise leaving the cave before the owner returns, are overruled, and are eaten two at a time."],
      ["The Lotus-eaters", "collective", "A people who offer their food freely and thereby do more damage to the return than any enemy in the book."]
    ],
    themes: [
      ["Hospitality abused", "The cave is the poem's clearest definition of xenia, given entirely by negation: a host who asks first, feeds on his guests, and calls his guest-gift a favour."],
      ["Craft and cunning", "Three tricks in sequence — the wine, the name, the rams — and each one works because Polyphemus has no experience of being lied to."],
      ["The price of a name", "Fame requires being known; the escape required being nobody. Odysseus cannot keep both and takes the fame."],
      ["The witness and his audience", "This is a story told by its own hero to a court he needs something from, and the poem never once corroborates it."]
    ],
    terms: [
      ["Xenia", "noun", "Guest-friendship: the reciprocal duty of host and stranger, guarded by Zeus and broken outright in the cave.", "Term"],
      ["Metis", "noun", "Practical cunning, the quality behind Odysseus' epithet polymetis and the word audible inside the pun on Outis.", "Term"],
      ["Xeinion", "noun", "The guest-gift a host owes a stranger; Polyphemus' promised xeinion is to eat Odysseus last of all.", "Object"],
      ["Apologoi", "noun", "The first-person narration of Books IX-XII, delivered by Odysseus to the Phaeacians in a single night.", "Narrative"]
    ],
    ties: [
      ["The blinded ogre folktale", "Escape under the belly of a ram belongs to a folk type recorded from Ireland to the Caucasus, usually with no name-trick in it. Homer welds the Outis pun on and makes cunning, not luck, the means of survival."],
      ["Euripides' Cyclops", "The one complete surviving satyr play retells this episode as comedy, with Silenus bartering away his own master's stores for wine."],
      ["Theocritus and Ovid's lovesick giant", "Later poets give Polyphemus an interior life and a song for Galatea, which Ovid inherits in the Metamorphoses. Homer's Cyclops has appetite and nothing else."]
    ]
  },
  {
    id: 10,
    title: "Winds, Cannibals, and a Witch",
    lens: "The sea stops being a map and becomes a test",
    date: "Told on the night of Day 34 - the second year of wandering",
    setting: "Aeolia, Telepylus of the Laestrygonians, and Circe's Aeaea",
    summary: "Aeolus gives Odysseus every contrary wind sewn into a bag, and the fleet comes within sight of the fires of Ithaca before the crew opens it in the belief that their captain is hoarding gold. Blown back and refused a second gift, the fleet is destroyed at Telepylus, where the Laestrygonians spear the men like fish and sink eleven ships with rocks. On Aeaea the witch Circe turns half the last crew into pigs; Odysseus, carrying the herb moly from Hermes, goes at her with a drawn sword, makes her swear an oath, and then stays a year in her hall until his men remind him he has a home.",
    episodes: [
      ["The bag of winds", "Aeolus feasts the fleet for a month and sends it off with every wind but the west one sewn into an ox-hide bag, tied with a silver cord.", "Wandering → a fair wind home", "The only point in the wanderings where the return is simply handed to him, which makes losing it entirely his own ship's doing."],
      ["Within sight of Ithaca", "On the tenth day, close enough to see men tending fires on shore, Odysseus falls asleep and the crew cuts open the bag expecting treasure; the winds carry them all the way back.", "Landfall → open sea", "Distrust inside the ship costs more than any monster does, and the crew fails the same test of appetite and self-control that the suitors will fail at home."],
      ["Aeolus refuses a second time", "Odysseus walks back to the floating island and asks again; Aeolus drives him from the door as a man the blessed gods must hate.", "Guest → outcast", "A refusal of hospitality that is neither monstrous nor unreasonable, which makes it the more frightening: xenia can be withdrawn on the evidence."],
      ["The Laestrygonians", "Scouts are led to a giant king whose people spear them for supper and shatter eleven ships with boulders thrown down into the narrow, cliff-walled harbour.", "Twelve ships → one", "Odysseus lives because he alone moored outside the harbour mouth; his caution saves him and saves nobody else, and the fleet ends here."],
      ["The dividing of the crew", "The survivors draw lots on Aeaea and Eurylochus leads twenty-two men to the smoking house, where a drugged meal turns them into swine with their own minds still inside.", "Men → pigs", "The cruelty is the mind left intact: Circe's victims know exactly what they are, which is precisely what the lotus spared its victims."],
      ["Moly, and the sword at the witch's throat", "Hermes meets him on the path with the black-rooted herb moly and tells him to rush Circe with drawn sword when the drug fails, and to make her swear a binding oath.", "Victim → equal", "The oath is the whole of it — he will not go to her bed until a goddess who could leave him weak and unmanned has sworn not to."],
      ["The year on Aeaea", "The pigs are restored taller and younger than before, the ship is hauled up the beach, and the company eats and drinks in the hall for a full year.", "Pigs → men, and a year gone", "The kindest hospitality in the wanderings is also the longest delay, and it is the crew, not the captain, who finally says it is time to think of home."],
      ["Circe's sailing directions to the dead", "She tells him he must first sail to the house of Hades and question the shade of the seer Teiresias, and gives him the rites: the trench, the offerings, the black ram and ewe.", "Homeward → downward", "The road home now runs outside the world of the living; and Elpenor, who falls from her roof unnoticed as they leave, is the unburied debt waiting at the other end of it."]
    ],
    cast: [
      ["Odysseus", "hero", "Loses eleven ships and gains a goddess' protection, and admits to sleeping through the one moment that mattered."],
      ["Circe", "goddess", "Dread goddess with a human voice who turns men into swine, is overpowered by a sworn oath, and then becomes the expedition's best-informed ally."],
      ["Hermes", "god", "Meets Odysseus on the path in the form of a young man and supplies both the counter-drug and the exact instructions for using it."],
      ["Aeolus", "mortal", "Keeper of the winds, generous once and implacable afterwards, who reads a second shipwreck as proof of divine disfavour."],
      ["Eurylochus", "mortal", "Second in command; hangs back from Circe's door and so escapes the sty, and will argue the crew into the disaster of Book XII."],
      ["Elpenor", "mortal", "The youngest of the crew, who drinks himself onto the roof and breaks his neck falling from it as the ship is being loaded."],
      ["The Laestrygonians", "collective", "Giants at Telepylus who answer a peaceful embassy by eating the ambassador and stoning the fleet in its anchorage."],
      ["The crew", "collective", "Companions whose suspicion opens the bag and whose hunger for home ends the year on Aeaea; both decisions are theirs, not his."]
    ],
    themes: [
      ["Command and mistrust", "The return is lost not to a god or a monster but to men who think their captain is cheating them out of a share."],
      ["Hospitality abused", "Three landfalls in a row test the same institution: a host who gives everything, a host who slams the door, and a host who drugs the meal."],
      ["Delay as the real danger", "Aeaea is safe, comfortable and a year long; in this poem ease threatens the homecoming as often as violence does."],
      ["Divine help with conditions", "Hermes brings a herb and a briefing, not a rescue. The gods here supply instructions, and the sailing is still Odysseus' to do."]
    ],
    terms: [
      ["Nostos", "noun", "Homecoming, the return voyage; the poem's whole subject, and the thing the opened bag throws away within sight of it.", "Term"],
      ["Moly", "noun", "The black-rooted, white-flowered herb Hermes gives against Circe's drug; Homer says the gods have a name for it and men do not.", "Object"],
      ["Pharmakon", "noun", "A drug that may cure or harm; Circe's is stirred into cheese, barley and honey with Pramnian wine.", "Object"],
      ["Hetairoi", "noun", "Companions, the crew; a body whose loyalty, appetite and suspicion decide as much of the outcome as any god does.", "Term"]
    ],
    ties: [
      ["Circe and the Argonauts", "Circe is sister to Aeetes of Colchis and aunt to Medea, and Apollonius later has her purify the pair after a murder. Homer keeps the drugs and the herbs and leaves the family quarrel out."],
      ["Ovid's Circe", "The Metamorphoses gives her two further victims, Picus and Scylla, and makes transformation her signature act. Homer's Circe is the only enchanter in either poem who undoes her own work."],
      ["The floating island", "Aeolus' bronze-walled rock, with his six sons married to his six daughters, reads like a folk-tale kingdom set outside ordinary law; Homer states the arrangement without comment and sails on."]
    ]
  },
  {
    id: 11,
    title: "The Dead",
    lens: "The only place in the poem where the future is stated plainly",
    date: "Told on the night of Day 34 - at the edge of Ocean",
    setting: "The grove of Persephone at the world's edge",
    summary: "At the edge of Ocean Odysseus digs a trench, pours the offerings and cuts the throats of two black sheep, and the dead come to the blood, which they must drink before they can speak. Teiresias states the rest of the poem outright — Poseidon's anger, the cattle of the Sun, the suitors eating his house, and a death that comes out of the sea — and no other prophecy in the Odyssey is this direct. Odysseus then meets his own mother, who died of longing for him and whom his arms pass straight through, a catalogue of famous women, and the leaders of the war, among them Achilles, who says he would rather be a hired labourer among the living than king over all the dead.",
    episodes: [
      ["The trench of blood", "In the grove of Persephone where Ocean ends, he digs a pit a forearm square, pours honey, milk, wine and water round it, and cuts the throats of a black ram and ewe.", "Living man → among the dead", "The rite is exact and the dead are powerless: they cannot speak until they have drunk, so memory itself has to be paid for in blood."],
      ["Elpenor asks for burial", "The first shade to arrive is the youngest of the crew, still lying unwept and unburied on Circe's island because they sailed in a hurry.", "Forgotten man → first claimant", "The dead have one demand and it is not information; the poem puts the duty owed a corpse ahead of prophecy in the queue."],
      ["Teiresias' prophecy", "The Theban seer drinks and lays out what is coming: Poseidon's grudge, the cattle of the Sun that must not be touched, the suitors in the hall, and a gentle death out of the sea.", "Riddle → plain statement", "The one unhedged prediction in the poem, and even it closes on a crux, since thanatos ex halos may mean death from the sea or death far away from it."],
      ["Anticleia, and the arms that close on nothing", "His mother tells him Laertes sleeps in the ashes and Penelope still waits, and that she herself died of missing him; three times he tries to hold her and three times she slips through.", "Son → mourner", "The first news of his household reaches him from a shade, and the failed embrace is the poem's working definition of what the dead now are."],
      ["The catalogue of heroines", "Tyro, Antiope, Alcmene, Epicaste, Leda, Ariadne and the rest come to the blood in turn, each named with the god or hero who fathered her children.", "One shade → a genealogy", "The roll of wives and mothers is aimed at Arete, whose approval decides whether the stranger gets his ship."],
      ["The intermezzo in Alcinous' hall", "The narration stops; Arete tells the Phaeacians this man is her guest, Alcinous asks for more and promises further gifts, and Odysseus takes the story up again.", "Story → the room it is told in", "Homer breaks the frame to show us the speaker and his fee, which is the clearest signal in the poem that the wanderings are a performance for an audience."],
      ["Agamemnon, Achilles, Ajax", "Agamemnon describes being cut down at table by Aegisthus and Clytemnestra, Achilles recants the whole bargain of a short glorious life, and Ajax walks away without a word.", "Glory → what it was worth", "Three verdicts on the war set beside one homecoming still in progress: the murdered husband, the hero who takes back his choice, and the enemy who will not be reconciled even here."],
      ["Minos, Tantalus, Sisyphus, Heracles", "The dead thicken into a landscape: a judge still hearing cases, three punishments repeating for ever, and the phantom of Heracles while the man himself feasts among the gods.", "Shades → an underworld", "The passage most often suspected of later expansion, and the only place the poem puts one man in two states at once; Odysseus leaves before Persephone can send up a Gorgon's head."]
    ],
    cast: [
      ["Odysseus", "hero", "Performs the rite, holds the shades back from the blood with his sword, and hears his own household described to him by the dead."],
      ["Teiresias", "seer", "The blind Theban prophet, the one shade with his wits whole, who states the plot of the remaining thirteen books."],
      ["Elpenor", "shade", "The unburied crewman who reaches the trench before the prophet and asks for a mound, a marker, and his oar set upright on it."],
      ["Anticleia", "shade", "Odysseus' mother, dead of grief in his absence, whose news of Ithaca is the first he has had in twenty years."],
      ["Agamemnon", "shade", "Butchered at his own homecoming feast, and thereafter the warning Odysseus measures every decision against."],
      ["Achilles", "shade", "King among the dead and contemptuous of it, who asks only whether his son fought well."],
      ["Ajax", "shade", "Still angry about the award of Achilles' armour, and the one figure in the poem who answers a friendly speech with silence."],
      ["Arete", "mortal", "The Phaeacian queen, listening in the hall; her word in the interval is what secures the convoy."]
    ],
    themes: [
      ["The counter-example of Agamemnon", "The murdered king's account of his own return is the model Odysseus must not repeat, and it is why he will come home disguised and tell no one, not even his wife."],
      ["Reputation and its price", "Achilles, who traded a long life for kleos, tells the man still bargaining for his that he would give all of it back for daylight and a plough."],
      ["Duty to the dead", "Elpenor's corpse outranks the prophecy he interrupts; the rites owed a dead man bind as tightly as those owed a guest."],
      ["The performance in the hall", "The underworld is interrupted so a queen can approve of the storyteller, which is the poem admitting what the tale is for."]
    ],
    terms: [
      ["Nekuia", "noun", "The rite of calling up and questioning the dead, and the traditional title of this book; distinct from a katabasis, a descent in person.", "Event"],
      ["Psyche", "noun", "The breath that leaves the body at death; in Homer it is conscious, bloodless, and cannot be held.", "Term"],
      ["Kleos", "noun", "Fame carried in song, the reward of the heroic bargain, which Achilles here declares he would trade for any living life at all.", "Term"],
      ["Catalogue", "noun", "A formal roll of names in epic; here each heroine is an entry consisting of a household, a divine father, and a line of descent.", "Narrative"]
    ],
    ties: [
      ["Mesopotamian consultations of the dead", "Questioning a dead companion about the state of the underworld is older than Greek epic and appears in the Gilgamesh tradition. Homer's hero asks instead about his living household."],
      ["Virgil's Aeneid VI", "Aeneas goes down rather than calling the dead up, meets a father instead of a mother, and is shown the future of Rome; Virgil turns Homer's questions about the past into a state prophecy."],
      ["The Hesiodic Catalogue of Women", "The parade of heroines matches a whole genre of genealogical poetry organised around the mothers of heroes, of which only fragments survive."]
    ]
  },
  {
    id: 12,
    title: "The Cattle of the Sun",
    lens: "Everything he was warned about, in order",
    date: "Told on the night of Day 34 - the loss of the last ship",
    setting: "Aeaea, the Sirens' meadow, the strait, and Thrinacia",
    summary: "Odysseus buries Elpenor, takes a second and completely accurate briefing from Circe, and then meets every hazard in the order she named it. He passes the Sirens lashed to the mast with his crew's ears stopped with wax, and gives six men to Scylla rather than risk the whole ship in Charybdis. Landing on Thrinacia against the warnings of both Teiresias and Circe, the crew is pinned by a month of contrary wind and, starving, kills the cattle of the Sun while he sleeps; Zeus splits the ship with a thunderbolt and every man drowns but one. Odysseus rides the keel back through Charybdis and comes ashore on Ogygia, which is where Book V began, so the tale ends by handing the poem back to its own present.",
    episodes: [
      ["Elpenor's burial and Circe's second briefing", "They sail back to Aeaea, burn the body with his arms, heap the mound and plant his oar upright on it, and Circe takes Odysseus aside to name every danger left between him and home.", "Debt → discharged", "The forecast is complete and turns out to be correct in every particular, which makes the rest of the book a record of choices rather than of accidents."],
      ["The Sirens and the wax", "He kneads beeswax and stops the crew's ears, has himself lashed upright to the mast, and the two Sirens sing that they know everything that happened at Troy.", "Knowledge → a rope", "The bait is not beauty but information, the one thing this particular listener cannot refuse; the flowery meadow behind them is heaped with bones."],
      ["The Wandering Rocks refused", "Circe had offered two routes; he takes the strait and leaves the clashing Planctae, past which only the Argo ever came, on the other side.", "Two roads → the known danger", "A whole rival epic is named and declined in a few lines, and the Odyssey's single reference to the Argonauts is a road not taken."],
      ["Scylla and Charybdis", "Steering close to the cliff as Circe instructed, he watches the six heads take six men out of the ship while the whirlpool sucks and spits on the other side.", "Twelve rowers → six", "The arithmetic is correct and he still reports himself badly: he armed against Scylla when told not to, and he never warned the men what was on the rock."],
      ["Thrinacia and the oath", "Against the explicit warnings of Teiresias and Circe the crew forces a landing on the island of the Sun's cattle, swearing an oath to touch nothing that grazes there.", "Warning → a landing anyway", "Eurylochus argues that a night ashore beats exhaustion in the dark, and he is not obviously wrong, which is what makes the test a fair one."],
      ["The month of the south wind", "The wind pins them ashore for a month, the ship's stores give out, and the men live on birds and fish while Odysseus goes inland to pray and falls asleep.", "Oath → hunger", "The proem's claim that the companions died by their own recklessness is proved here in slow motion: they are warned, they are sworn, they are starving, and they still choose."],
      ["The wreck and the lone survivor", "Eurylochus talks the men into killing the cattle; the flayed hides crawl and the meat lows on the spits, and once at sea Zeus splits the ship with a thunderbolt and drowns every man but one.", "A crew → one man", "Helios threatens to take his light down among the dead unless he is paid, and Zeus pays him; the last of the twelve ships' companies dies in this squall."],
      ["Back to Charybdis", "He lashes mast and keel together, is carried back to the whirlpool, hangs from the fig tree above it like a bat until his timbers are spat up again, and drifts nine days to Ogygia.", "Captain → castaway", "The narration catches up with itself: Calypso's island is where Book V opened, so the apologoi close exactly where the poem's present began."]
    ],
    cast: [
      ["Odysseus", "hero", "Follows a correct briefing item by item, loses every man he has, and finishes the night's telling alone on a beach."],
      ["Circe", "goddess", "Gives the second briefing, naming the Sirens, the two routes, Scylla, Charybdis and the cattle in advance and in order."],
      ["Eurylochus", "mortal", "Argues for the landing on Thrinacia and then for killing the cattle, and drowns with the men he persuaded."],
      ["Elpenor", "shade", "The crewman whose ghost asked for a grave in Book XI and receives one here, with his oar set upright on the mound."],
      ["The Sirens", "monster", "Singers in a meadow of bones whose offer is not pleasure but complete knowledge of the war at Troy."],
      ["Scylla", "monster", "Six-headed thing in the cliff face, immortal and unfightable, who takes six men and cannot be avenged."],
      ["Helios", "god", "Owner of the herds, who sees everything and demands payment for the theft, threatening to shine among the dead instead."],
      ["Zeus", "god", "Settles the claim with a thunderbolt, which is the only direct divine killing of Odysseus' companions in the poem."]
    ],
    themes: [
      ["Foreknowledge without power", "Every disaster in this book was announced beforehand by Circe or Teiresias, and the announcing prevents none of it."],
      ["Endurance", "Tied to a mast, hanging from a fig tree over a whirlpool, riding a keel for nine days: the hero's characteristic act here is simply holding on."],
      ["The crew's own recklessness", "The proem blames the companions for their own destruction, and Book XII is the evidence it was thinking of."],
      ["Sole survivorship", "From the thunderbolt onwards there is no one left who could contradict him, and the tale conveniently stops at the one point his hosts can check."]
    ],
    terms: [
      ["Atasthaliai", "noun", "Reckless acts of one's own making; the proem's word for what destroyed the crew, and the charge this book documents.", "Term"],
      ["Thumos", "noun", "The seat of impulse, appetite and courage; what the Sirens address, and what hunger overrules on Thrinacia.", "Term"],
      ["Planctae", "noun", "The Wandering or Clashing Rocks, the route Odysseus declines; the Argo's passage through them is the poem's one nod to Jason.", "Place"],
      ["Ring composition", "noun", "A structure that closes where it opened; the apologoi end on Ogygia, the island where Book V began.", "Narrative"]
    ],
    ties: [
      ["The Argonautic route", "Clashing rocks, a witch who briefs the hero, and herds that must not be touched all belong to the Argo's story as well. Homer names the Argo once, in passing, and steers around it."],
      ["Sirens after Homer", "Later art gives them bird bodies and later still fish tails, and Roman writers reduce their song to flattery. In Homer what they sell is knowledge of Troy."],
      ["Sacred herds", "Cattle that may not be touched recur across Greek cult and myth, from Apollo's stolen herd in the Hymn to Hermes to Geryon's; here the taboo is the last thing standing between a starving crew and the sea."]
    ]
  }
];
