/*
 * The war generation, the seers, and Crete.
 *
 * Three groups the Odyssey handles at a distance. The captains at Troy are
 * mostly memory — dead, or safely home, or named only as the owner of a
 * sacked city. The house of Melampus is a four-generation genealogy the poem
 * stops dead to recite in Book 15, because the man it produces walks aboard
 * Telemachus' ship. Crete is a place to have come from: Odysseus builds three
 * false lives on it, and the last of them invents a brother for Idomeneus.
 *
 * Several figures here are registered for what the poem does NOT say about
 * them. Calchas, Palamedes, Teucer, Meriones, Hecuba and Antenor are all
 * central to the Trojan tradition and absent from this poem. The `homer`
 * field says so plainly rather than importing an Iliadic formula and letting
 * a reader assume it belongs here. The Trojan royal figures are filed under
 * the same house as their enemies because the Odyssey remembers them only as
 * the war's other side.
 *
 * Odysseus, Helen, Agamemnon, Menelaus, Nestor, Antilochus, Ajax son of
 * Telamon and Eriphyle are registered by other clusters and referenced here
 * by name only.
 */

export const TROJAN_FIGURES = [
  /* ------------------------------------------------------- the captains */
  {
    name: "Achilles",
    aliases: ["Achilleus", "Pelides", "the son of Peleus", "Aeacides"],
    kind: "hero",
    greek: "Achilleús (Ἀχιλλεύς)",
    roman: "Achilles",
    homer: "podárkēs dîos Achilleús — 'swift-footed brilliant Achilles'; in the underworld he becomes psychḕ Achilêos Pēlēïádeō, 'the soul of Achilles son of Peleus'",
    order: "First of the Achaeans at Troy",
    domain: "The war's highest reputation, and what it is worth afterwards",
    house: "The captains at Troy",
    father: "Peleus",
    mother: "Thetis",
    children: ["Neoptolemus"],
    who: "The best of the Achaeans, dead at Troy years before the poem opens, and the measure every other reputation is set against. The Odyssey inherits him from the Iliad and then argues with the inheritance: the man who chose a short life and undying fame says in the underworld that he would rather be a hired hand on a poor man's farm than king over all the dead. He is the counter-case to the whole poem — glory without return, set beside a man who takes the return.",
    books: [3, 8, 11, 24],
    prominence: 1,
    acts: {
      "Nestor's welcome": "Is named in Nestor's roll of the dead lying at Troy — Ajax, Achilles, Patroclus, and Nestor's own son Antilochus. The old man recites the price already paid before admitting he has no news at all of the one man Telemachus came for.",
      "Demodocus sings the quarrel": "Is half the subject of the first song: a quarrel between Odysseus and Achilles at a feast of the gods, which Agamemnon was glad to hear because Apollo had told him it marked the beginning of Troy's end. No other source preserves this quarrel, and the poem never says what it was about.",
      "Agamemnon, Achilles, Ajax": "Comes to the trench of blood and hears Odysseus call him blessed among the dead. He refuses the compliment flatly — better to serve a landless man for wages above ground than rule all the perished — then asks after his father Peleus and his son, and strides away over the asphodel when he hears Neoptolemus was brave. His grief is entirely for the living.",
      "Achilles and Agamemnon in the asphodel": "Is told the story of his own funeral by Agamemnon: seventeen days of mourning, Thetis and the sea-nymphs standing round the pyre, the Muses singing the dirge, the golden urn, the games at the barrow. The man who lost his homecoming got the burial Agamemnon never had, and Agamemnon is the one who draws the comparison."
    }
  },
  {
    name: "Diomedes",
    aliases: ["Diomedes son of Tydeus", "Tydides"],
    kind: "hero",
    greek: "Diomḗdēs (Διομήδης)",
    roman: "Diomedes",
    homer: "boḕn agathòs Diomḗdēs — 'Diomedes good at the war-cry'",
    order: "King of Argos",
    domain: "The homecoming that goes right",
    house: "The captains at Troy",
    father: "Tydeus",
    who: "The youngest of the great Achaean captains and, in the Iliad, the one who wounds two gods in an afternoon. The Odyssey has no use for any of that. It keeps him as a clean return — the man who sailed with Nestor, kept the pace, and reached Argos with his crews intact.",
    books: [3],
    prominence: 3,
    acts: {
      "The scattering of the fleet": "Serves as Nestor's control case. Diomedes stayed with the ships that sailed early and got home whole, which turns the ruin of the other half of the fleet into a consequence of quarrelling rather than of fate."
    }
  },
  {
    name: "Philoctetes",
    aliases: ["Philoktetes", "the son of Poias"],
    kind: "hero",
    greek: "Philoktḗtēs (Φιλοκτήτης)",
    roman: "Philoctetes",
    homer: "Poíantos huiós — 'the son of Poias', which is how both poems name him",
    order: "Lord of Meliboea, master of the bow",
    domain: "Archery, and the one skill Odysseus concedes",
    house: "The captains at Troy",
    father: "Poias",
    who: "The archer who carried the bow of Heracles to Troy. The Odyssey knows nothing of the snakebite, the abandonment on Lemnos, or the ten years of stinking wound that Sophocles built a play on — here he simply comes home safe with the rest. His one other function is to be the limit on Odysseus' boasting.",
    books: [3, 8],
    prominence: 3,
    acts: {
      "The scattering of the fleet": "Is listed among the captains who reached home unharmed. The poem gives him a clean return and no wound at all.",
      "The discus throw": "Is the single exception Odysseus makes. Having answered Euryalus' insult by claiming he can outshoot any man now living, Odysseus allows exactly one archer at Troy his better — and the concession is as close as the boast comes to modesty."
    }
  },
  {
    name: "Ajax son of Oileus",
    aliases: ["Aias son of Oileus", "Locrian Ajax", "Oilean Ajax", "the lesser Ajax"],
    kind: "hero",
    greek: "Aías Oilêos (Αἴας Ὀϊλῆος)",
    roman: "Aiax Oilei filius / Aiax Locrus",
    homer: "Oilêos tachùs Aías — 'swift Ajax, son of Oileus'",
    order: "Lord of the Locrians",
    domain: "Blasphemy at sea, and the death it earns",
    house: "The captains at Troy",
    father: "Oileus",
    who: "The smaller and faster of the two men called Ajax, and no relation to the other. In the Odyssey he exists for a single purpose: to be the first of the three returns Proteus reports, and the plainest case in the poem of a man destroyed by something he said rather than something he did. The rape of Cassandra at Athena's altar, which the later tradition makes his crime, is never mentioned here.",
    books: [4],
    prominence: 3,
    acts: {
      "Proteus tells the fates": "Is drowned twice. Poseidon puts him ashore alive on the Gyrae rocks, and he would have lived if he had not shouted that he had escaped the sea in spite of the gods; Poseidon splits the rock under him with the trident and lets it take him down. Proteus tells it to Menelaus first of the three fates, and the lesson — a boast overheard by the wrong god — is the one the poem keeps repeating."
    }
  },
  {
    name: "Teucer",
    aliases: ["Teukros"],
    kind: "hero",
    greek: "Teûkros (Τεῦκρος)",
    roman: "Teucer",
    homer: "no formula of his own in this poem — the Odyssey never names him",
    order: "Archer of Salamis",
    domain: "The bow, on the other side of the tradition",
    house: "The captains at Troy",
    father: "Telamon",
    mother: "Hesione",
    siblings: ["Ajax son of Telamon"],
    who: "Telamon's son by the captive Trojan Hesione, half-brother to the greater Ajax, and the finest archer in the Achaean camp in the Iliad, where he shoots from behind his brother's shield and ducks back under it. The Odyssey does not name him once. When it wants an archer it reaches for Philoctetes, Heracles, or Eurytus — a conspicuous gap in a poem whose last act is decided by a bow.",
    books: [],
    prominence: 3
  },
  {
    name: "Epeius",
    aliases: ["Epeus", "Epeios"],
    kind: "hero",
    greek: "Epeiós (Ἐπειός)",
    roman: "Epeus",
    homer: "no epithet of his own, only the relative clause the horse carries everywhere — tòn Epeiòs epoíēsen sùn Athḗnēi, 'which Epeius made with Athena'",
    order: "Builder of the wooden horse",
    domain: "Carpentry, and the one device that ends the war",
    house: "The captains at Troy",
    father: "Panopeus",
    who: "The craftsman who built the horse. Homer gives him no fighting and no character: he is a name fastened to an object, and the object is credited to him and Athena jointly every time it appears, so that the war's decisive act belongs half to a workman and half to a goddess. Later tradition makes him a coward and a prizefighter; the Odyssey shows no interest in either.",
    books: [8, 11],
    prominence: 3,
    acts: {
      "The wooden horse, and the weeping simile": "Is named as the maker in the song Odysseus commissions about himself. The order of credit is deliberate — the man who filled the horse and rode in it asks for a song, and the song names the carpenter before it names the passengers.",
      "Agamemnon, Achilles, Ajax": "Is named again inside the report to Achilles, as the man whose horse Neoptolemus sat in without trembling. The machine is identified by its builder on every occasion the poem mentions it."
    }
  },
  {
    name: "Calchas",
    aliases: ["Kalchas", "the son of Thestor"],
    kind: "seer",
    greek: "Kálchas (Κάλχας)",
    roman: "Calchas",
    homer: "no formula of his own in this poem — he is never named in it",
    order: "Prophet of the Achaean host",
    domain: "Bird-signs, and the price of sailing",
    house: "The captains at Troy",
    father: "Thestor",
    who: "The army's seer: the man who read the snake and the sparrows at Aulis, who named Apollo's plague in the Iliad's first hundred lines, and who in the tragedians demands Iphigenia before the fleet can move. The Odyssey does not mention him at all. Its prophetic office is held instead by Teiresias underground, by Halitherses in the assembly, and by Theoclymenus in the hall — three seers who are right and are not obeyed.",
    books: [],
    prominence: 3
  },
  {
    name: "Palamedes",
    aliases: ["Palamedes son of Nauplius"],
    kind: "hero",
    greek: "Palamḗdēs (Παλαμήδης)",
    roman: "Palamedes",
    homer: "no formula of his own in this poem — he is never named in it",
    order: "Prince of Euboea",
    domain: "Cleverness set against Odysseus' own",
    house: "The captains at Troy",
    father: "Nauplius",
    who: "The one man in the tradition as inventive as Odysseus. He exposed the madness Odysseus feigned to avoid the war by putting the infant Telemachus in front of the plough, and Odysseus destroyed him for it with buried gold and a forged letter, so that the army stoned him as a traitor. The Odyssey never names him, and that is the largest thing the poem declines to say about its own hero; his father's revenge on the returning fleet, false beacons lit above the rocks of Euboea, belongs to the same suppressed story.",
    books: [],
    prominence: 3
  },
  {
    name: "Deiphobus",
    aliases: ["Deiphobos"],
    kind: "hero",
    greek: "Dēḯphobos (Δηΐφοβος)",
    roman: "Deiphobus",
    homer: "Dēḯphobos theoeíkelos — 'Deiphobus like a god', the phrase attached to him as he walks the horse with Helen",
    order: "Prince of Troy",
    domain: "Helen's third husband, and the last house entered",
    house: "The captains at Troy",
    father: "Priam",
    mother: "Hecuba",
    siblings: ["Hector", "Paris", "Cassandra"],
    consorts: ["Helen"],
    who: "Priam's son, who took Helen after Paris was killed. He appears twice in the Odyssey and both times beside her — once circling the wooden horse at her shoulder, once as the owner of the house where the night's worst fighting happens. What was done to him in that house the poem does not say.",
    books: [4, 8],
    prominence: 3,
    acts: {
      "Menelaus and the wooden horse": "Walks three times round the horse at Helen's side while she calls up to the men inside in the voices of their wives. Menelaus tells this over dinner with Helen sitting at the table, immediately after her own story of sheltering Odysseus in Troy, and he leaves Deiphobus' presence entirely unexplained.",
      "The wooden horse, and the weeping simile": "His house is where the song stops. Odysseus and Menelaus go there together and fight the most terrible fight of the sack in it; Demodocus does not say Helen was inside, and Odysseus, listening at the feast, weeps like a woman thrown across her dead husband and dragged off into slavery."
    }
  },
  {
    name: "Antenor",
    aliases: ["Antenor of Troy"],
    kind: "mortal",
    greek: "Antḗnōr (Ἀντήνωρ)",
    roman: "Antenor",
    homer: "no formula of his own in this poem — he is never named in it",
    order: "Elder of Troy",
    domain: "The embassy, and the argument for giving Helen back",
    house: "The captains at Troy",
    consorts: ["Theano"],
    who: "Priam's counsellor, host of the embassy that came before the war to ask for Helen, and the only Trojan on record as arguing in council that she should be handed back. The Odyssey does not name him. When Helen remembers Odysseus slipping into Troy in a beggar's rags it is she who takes him in, bathes him and swears not to give him away, and the Iliad's version, in which Odysseus and Menelaus lodge with Antenor, is not repeated.",
    books: [],
    prominence: 3
  },
  {
    name: "Priam",
    aliases: ["Priamos", "Priamus"],
    kind: "mortal",
    greek: "Príamos (Πρίαμος)",
    roman: "Priamus",
    homer: "Priámoio pólis — 'Priam's city'. The Odyssey rarely lets him be anything but the genitive in that phrase",
    order: "King of Troy",
    domain: "The name the sacked city is remembered by",
    house: "The captains at Troy",
    father: "Laomedon",
    consorts: ["Hecuba"],
    children: ["Hector", "Paris", "Deiphobus", "Cassandra"],
    who: "The last king of Troy, killed at his own altar the night the city fell. The Iliad ends with him kneeling to Achilles to ransom Hector's body; the Odyssey, which comes after, keeps the name and keeps it possessive. Ten years of war are compressed into the formula 'we sacked the steep city of Priam', which several different speakers use as a date rather than as an event.",
    books: [3, 11, 14, 22],
    prominence: 3,
    acts: {
      "The scattering of the fleet": "Supplies the date. Nestor starts the story of the fleet's ruin from the sack of Priam's city, and the quarrel between Agamemnon and Menelaus begins the same evening — so the catastrophe of the returns is measured out from the moment of victory.",
      "Athena as Mentor": "Is the name in Athena's taunt. Standing beside Odysseus in the middle of the killing she reminds him that Priam's broad city fell to his planning, and asks why he fights worse in his own hall than he did there. The war is produced as a reproach, to make him finish this."
    }
  },
  {
    name: "Hecuba",
    aliases: ["Hekabe", "Hecabe"],
    kind: "mortal",
    greek: "Hekábē (Ἑκάβη)",
    roman: "Hecuba",
    homer: "no formula of her own in this poem — she is never named in it",
    order: "Queen of Troy",
    domain: "The war's chief mourner, in every poem but this one",
    house: "The captains at Troy",
    consorts: ["Priam"],
    children: ["Hector", "Paris", "Deiphobus", "Cassandra"],
    who: "Priam's queen and Hector's mother. The Iliad gives her the lament over her son's body and Euripides gives her two plays; the Odyssey does not name her once, and names no Trojan woman except Helen. Her daughter reaches this poem only in the underworld, as the Cassandra whom Clytemnestra killed across Agamemnon's body while he lay dying with a sword in him.",
    books: [],
    prominence: 3
  },
  {
    name: "Neoptolemus",
    aliases: ["Pyrrhus", "the son of Achilles"],
    kind: "hero",
    greek: "Neoptólemos (Νεοπτόλεμος)",
    roman: "Neoptolemus / Pyrrhus",
    homer: "no formula of his own — his father's shade asks after him simply as his son",
    order: "Prince of Scyros, lord of the Myrmidons",
    domain: "The son who inherits the war and survives it",
    house: "The captains at Troy",
    father: "Achilles",
    mother: "Deidamia",
    consorts: ["Hermione"],
    who: "Achilles' son, fetched from Scyros by Odysseus after his father was dead and old enough to fight only in the last year of the war. The Odyssey gives him everything Achilles did not get: he speaks well in council and is never wrong, he kills Eurypylus son of Telephus, he sits in the horse without shaking, and he sails home unwounded with the best of the spoil. The atrocities the later tradition loads on him at the sack — Priam at the altar, Astyanax off the wall — are absent here.",
    books: [4, 11],
    prominence: 3,
    acts: {
      "The double wedding at Sparta": "Is one of the two marriages. Menelaus is sending Hermione, his only daughter, north to Achilles' son on the day Telemachus arrives, discharging a promise made at Troy — so the first thing the poem shows of Sparta is a house settling a war debt.",
      "Agamemnon, Achilles, Ajax": "Is the news that sends Achilles away satisfied. Odysseus tells the shade that he brought the boy from Scyros himself, that he was always among the first to speak and never spoke wrongly, that he killed Eurypylus, and that he went into the horse without a tremor and came out of Troy without a scratch. It is the only wholly good report anyone carries to the dead."
    }
  },
  /* ---------------------------------------------------- the Cretan house */
  {
    name: "Idomeneus",
    aliases: ["Idomeneus of Crete"],
    kind: "hero",
    greek: "Idomeneús (Ἰδομενεύς)",
    roman: "Idomeneus",
    homer: "douriklutòs Idomeneús — 'Idomeneus famed with the spear'",
    order: "King of Crete",
    domain: "The Cretan contingent, and the name Odysseus lies with",
    house: "The Cretan house",
    father: "Deucalion of Crete",
    siblings: ["Aethon"],
    who: "Minos' grandson, king at Cnossos, and one of the older captains at Troy, where he led eighty ships. The Odyssey grants him a clean return: he lost nobody at sea and brought home every man the fighting had spared. His real work in this poem is as raw material — Odysseus builds three separate false lives out of Crete, and Idomeneus is the fixed point each of them turns on.",
    books: [3, 13, 14, 19],
    prominence: 2,
    acts: {
      "The scattering of the fleet": "Is named among the safe returns. Nestor works through the captains he can account for and ends with the one he cannot, which is the whole reason Telemachus is standing there.",
      "Waking in a land he does not know": "Is the hinge of the first lie. Odysseus, ashore and not yet knowing where he is, tells the young shepherd that he is a Cretan on the run for killing Orsilochus, Idomeneus' son, who had tried to strip him of his Trojan spoil. Athena's answer is to laugh and change shape.",
      "The lie about Crete and Egypt": "Is invoked again at the swineherd's fire, in a different life. Now the beggar is a Cretan bastard, son of Castor son of Hylax, who took ships to Troy alongside Idomeneus — the same king, holding up a story with no other true element in it.",
      "I entertained him twenty years ago": "Is kept carefully offstage. The stranger tells Penelope he is Idomeneus' younger brother and entertained Odysseus at Cnossos while Idomeneus himself was already gone to Troy, so that the one man who could contradict the story is placed where he cannot be asked."
    }
  },
  {
    name: "Meriones",
    aliases: ["Meriones son of Molus"],
    kind: "hero",
    greek: "Mēriónēs (Μηριόνης)",
    roman: "Meriones",
    homer: "no formula of his own in this poem — the Odyssey never names him; the Iliad's 'equal of Enyalius, killer of men' belongs to the other epic",
    order: "Squire of Idomeneus",
    domain: "The Cretan second-in-command",
    house: "The Cretan house",
    father: "Molus",
    who: "Idomeneus' companion and charioteer, and one of the busiest fighters in the Iliad — spearman, archer, and the man who lends Odysseus the boar's-tusk helmet before the night raid. The Odyssey drops him completely. Crete survives in this poem as a place to claim you have come from rather than a contingent that fought, and the only Cretans it names are kings, a king's grandson, and a man who never existed.",
    books: [],
    prominence: 3
  },
  {
    name: "Minos",
    aliases: ["Minos of Cnossos"],
    kind: "hero",
    greek: "Mínōs (Μίνως)",
    roman: "Minos",
    homer: "Mínōs ennéōros basíleue, Diòs megálou oaristḗs — 'Minos ruled in nine-year spells, the familiar of great Zeus'. What ennéōros actually means has never been settled",
    order: "King of Cnossos, judge among the dead",
    domain: "Law, and an authority that outlasts dying",
    house: "The Cretan house",
    father: "Zeus",
    mother: "Europa",
    children: ["Deucalion of Crete", "Ariadne"],
    who: "The Cretan king who went up at fixed intervals to take counsel with Zeus and came back down with law. The Odyssey is the earliest text that shows him giving judgement in the underworld with a golden sceptre, settling the disputes the dead bring him — not weighing their sins, simply doing for shades what he did for the living. The labyrinth, the Minotaur and the tribute of Athenian children are nowhere in this poem; the whole Cretan horror survives in one adjective hung on his name when his daughter is mentioned, 'of deadly mind'.",
    books: [11, 19],
    prominence: 2,
    acts: {
      "The catalogue of heroines": "Is named once, as Ariadne's father. Ariadne is carried off from Crete by Theseus towards Athens and killed on Dia by Artemis on the word of Dionysus, so she never arrives; Minos' only trace in the story is the epithet.",
      "Minos, Tantalus, Sisyphus, Heracles": "Sits with a golden sceptre delivering judgement to the dead, who bring their cases to him around the wide gates of Hades exactly as litigants once brought them to Cnossos. He opens the last four sights of the Nekyia and is the only one of them that is not a punishment.",
      "I entertained him twenty years ago": "Is the guarantee under a lie. The stranger dates himself by Cnossos where Minos ruled and gives Minos as his own great-grandfather; the pedigree is real for three generations, which is exactly what makes the fourth pass."
    }
  },
  {
    name: "Deucalion of Crete",
    aliases: ["Deucalion", "Deukalion", "Deucalion son of Minos"],
    kind: "hero",
    greek: "Deukalíōn (Δευκαλίων)",
    roman: "Deucalion",
    homer: "no formula of his own — he exists in one line, joining a real king to an invented son",
    order: "King of Crete between Minos and Idomeneus",
    domain: "The middle generation of the Cretan house",
    house: "The Cretan house",
    father: "Minos",
    children: ["Idomeneus", "Aethon"],
    who: "Minos' son and Idomeneus' father, named once in the Odyssey and given nothing whatever to do. He is not the Deucalion who survives the flood; that one belongs to a different family and a different story, and the shared name is an ordinary coincidence of Greek legend. His function here is structural — he is the joint at which Odysseus fastens a brother onto Idomeneus.",
    books: [19],
    prominence: 3,
    acts: {
      "I entertained him twenty years ago": "Is given two sons instead of one. The stranger recites the true descent — Minos fathered Deucalion, Deucalion fathered Idomeneus — and then attaches himself to it as the younger boy. Every name in the pedigree can be checked except the last."
    }
  },
  {
    name: "Aethon",
    aliases: ["Aithon", "the stranger from Crete", "the beggar in the hall"],
    kind: "mortal",
    greek: "Aíthōn (Αἴθων)",
    roman: "Aethon",
    homer: "Aíthōn, hoplóteros geneêi — 'Aethon, the younger-born'. The name itself means burning, or tawny",
    order: "A Cretan prince who does not exist",
    domain: "The fiction Penelope is tested with",
    house: "The Cretan house",
    father: "Deucalion of Crete",
    siblings: ["Idomeneus"],
    who: "The invented younger brother of Idomeneus, and the most elaborate of Odysseus' false selves. Sitting in rags in his own hall, Odysseus tells Penelope he is Aethon of Cnossos, that he housed her husband for twelve days when a storm drove him off Malea on the way to Troy, and that he can describe what he was wearing. Aethon is a lie and the poem says so outright while praising it: the false tale is made to resemble the truth so closely that it works, and it is the resemblance rather than any truth in it that breaks Penelope down.",
    books: [19],
    prominence: 2,
    acts: {
      "I entertained him twenty years ago": "Is born in a single line. Pressed by Penelope for his name and his people, the beggar answers Aethon, third of Deucalion's line and Idomeneus' younger brother, and claims to have given Odysseus guest-gifts at Cnossos twenty years ago. He is the only wholly invented element in an otherwise verifiable pedigree, which is why the invention holds.",
      "The brooch and the tunic": "Produces the proof and destroys her with it. Asked what Odysseus wore, he gives the purple double cloak, the golden brooch with the hound throttling a spotted fawn in its forepaws, the tunic shining like dried onion-skin — and adds, carefully, that he cannot say whether Odysseus brought these from home or was given them. The detail is exact because the man reciting it wore them, and Penelope melts into tears over a husband sitting a few feet away.",
      "The oath, and the promise of the month": "Swears. Aethon tells her Odysseus is alive and near, in Thesprotia, collecting gifts, and will be home within this same lykabas — a word whose meaning has never been agreed, month or year or the turn of the moon — as the old moon dies and the new one rises. He binds it with an oath on Zeus and on the hearth he is sitting at. Penelope says she does not believe him. Both of them are telling the truth."
    }
  },
  /* ------------------------------------------------ the house of Melampus */
  {
    name: "Melampus",
    aliases: ["Melampous", "the blameless seer"],
    kind: "seer",
    greek: "Melámpous (Μελάμπους)",
    roman: "Melampus",
    homer: "mántis amýmōn — 'the blameless seer', which is all Book 11 calls him; the name itself arrives only in Book 15",
    order: "Seer, and founder of the Melampodidae",
    domain: "Prophecy, cattle, and a year in irons",
    house: "The house of Melampus",
    father: "Amythaon",
    siblings: ["Bias"],
    children: ["Antiphates son of Melampus", "Mantius"],
    who: "The founding seer of Greek legend and the ancestor of every prophet in the poem except Teiresias. The Odyssey tells his story twice and differently: in the underworld he is an unnamed seer who takes on an impossible bride-price and pays for it with a year in a byre in chains, and in Book 15 he is a named exile who wins a kingdom in Argos. He sets the pattern the poem's prophets all follow — they see accurately, they suffer for it, and the line continues.",
    books: [11, 15],
    prominence: 2,
    acts: {
      "The catalogue of heroines": "Is the unnamed seer inside the story of Chloris. Neleus would give his daughter Pero to no one who could not drive Iphiclus' cattle out of Phylace; the seer undertook it, was caught, bound and held a full year by herdsmen, and was let go only when the seasons came round and Iphiclus wanted the prophecies he was holding.",
      "Theoclymenus the fugitive": "Is named at last, at the head of the genealogy the poem stops everything to recite. Melampus fled Pylos and Neleus, who had seized his property while he lay in Phylace; he came back, took his revenge, and went to Argos to rule and to marry — and four generations of seers run down from him to the man now asking Telemachus for passage."
    }
  },
  {
    name: "Amythaon",
    aliases: ["Amythaon son of Cretheus"],
    kind: "mortal",
    greek: "Amytháōn (Ἀμυθάων)",
    roman: "Amythaon",
    homer: "Amytháona hippiochármēn — 'Amythaon who fights from the chariot'",
    order: "Prince of Iolcus",
    domain: "The Aeolid stock the seers come out of",
    house: "The house of Melampus",
    father: "Cretheus",
    mother: "Tyro",
    siblings: ["Aeson", "Pheres"],
    children: ["Melampus", "Bias"],
    who: "Tyro's third son by Cretheus, brother to Aeson who fathered Jason and to Pheres who founded Pherae. The Odyssey gives him an epithet and no story at all. He matters entirely for what comes out of him: through Melampus, every mortal seer in the poem.",
    books: [11],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is the last of Tyro's three sons by Cretheus, named after Aeson and Pheres and immediately dropped. The catalogue is a genealogical instrument rather than a set of stories, and this is the branch that will matter four books later."
    }
  },
  {
    name: "Bias",
    aliases: ["Bias of Argos"],
    kind: "mortal",
    greek: "Bías (Βίας)",
    roman: "Bias",
    homer: "no formula of his own",
    order: "King in Argos",
    domain: "The brother a prophecy was spent on",
    house: "The house of Melampus",
    father: "Amythaon",
    siblings: ["Melampus"],
    consorts: ["Pero"],
    who: "Melampus' brother, and the man the whole cattle-raid is undertaken for: Neleus would give Pero to nobody who could not fetch Iphiclus' herd out of Phylace, and it was Bias who wanted her. The Odyssey is interested in the seer and not in the bridegroom — he is given no words and no deeds in either telling — and most of what is known about him, including the half of Argos he ends up ruling, comes from outside the poem.",
    books: [11, 15],
    prominence: 3,
    acts: {
      "The catalogue of heroines": "Is the reason the seer goes to Phylace at all. Odysseus, telling it to the Phaeacians, keeps both brothers anonymous and spends the lines instead on the chains, the turning year, and the prophecies that bought the prisoner's release.",
      "Theoclymenus the fugitive": "Stands one generation above the entire line of prophets and contributes nothing to it. The Book 15 descent runs down through his brother, and every seer in it — Amphiaraus, Polypheides, Theoclymenus — comes from the man who did the work rather than the man who got the wife."
    }
  },
  {
    name: "Antiphates son of Melampus",
    aliases: ["Antiphates"],
    kind: "mortal",
    greek: "Antiphátēs (Ἀντιφάτης)",
    roman: "Antiphates",
    homer: "no formula of his own",
    order: "Elder son of Melampus",
    domain: "The senior branch of the seers",
    house: "The house of Melampus",
    father: "Melampus",
    siblings: ["Mantius"],
    children: ["Oicles"],
    who: "Melampus' elder son and Amphiaraus' grandfather. He shares a name with the Laestrygonian king who snatches up one of Odysseus' men and makes a meal of him in Book 10; the two have nothing to do with each other, and the collision is the ordinary Homeric one of a common name reused. His branch produces the seer who dies at Thebes; his brother's produces the seer who walks into Odysseus' hall.",
    books: [15],
    prominence: 3,
    acts: {
      "Theoclymenus the fugitive": "Is the first fork in the genealogy. The poem names Melampus' two sons, follows this one down through Oicles to Amphiaraus and on to Amphiaraus' own two sons, and only then doubles back to pick up the other brother — the branch Theoclymenus actually descends from."
    }
  },
  {
    name: "Oicles",
    aliases: ["Oicleus", "Oecles"],
    kind: "mortal",
    greek: "Oiklês (Ὀϊκλῆς)",
    roman: "Oecles / Oicleus",
    homer: "no formula of his own",
    order: "Son of Antiphates",
    domain: "One name in a four-generation descent",
    house: "The house of Melampus",
    father: "Antiphates son of Melampus",
    children: ["Amphiaraus"],
    who: "Antiphates' son and Amphiaraus' father, given a single line in the Odyssey and nothing else in it. Later sources send him with Heracles against Troy and kill him there. The poem's interest in him is arithmetical: he is the generation that has to be crossed to get from Melampus down to the seer who dies at Thebes.",
    books: [15],
    prominence: 3,
    acts: {
      "Theoclymenus the fugitive": "Occupies half a line — begotten, and begetting. The recitation is doing what Homeric genealogy always does, establishing that the stranger standing on the beach has a pedigree worth the risk of taking him aboard."
    }
  },
  {
    name: "Amphiaraus",
    aliases: ["Amphiaraos", "the son of Oicles"],
    kind: "seer",
    greek: "Amphiáraos (Ἀμφιάραος)",
    roman: "Amphiaraus",
    homer: "laossóon Amphiáraon — 'Amphiaraus rouser of the war-host'",
    order: "Seer and king at Argos",
    domain: "Prophecy that foresees its own death and goes anyway",
    house: "The house of Melampus",
    father: "Oicles",
    consorts: ["Eriphyle"],
    children: ["Alcmaeon", "Amphilochus"],
    who: "The greatest of the Melampodidae: loved, the poem says, by Zeus and Apollo both, and dead at Thebes before he came anywhere near old age, because of a woman's gifts. The woman is his wife Eriphyle, who took a golden necklace as the price of sending him to a war he had already foreseen would kill him. The Odyssey names her separately, among the hateful shades in the catalogue of heroines, and never joins the two passages up for the reader. He is the type of the seer who is right and dies of it.",
    books: [15],
    prominence: 3,
    acts: {
      "Theoclymenus the fugitive": "Is the one name in the genealogy the poem slows down for. Zeus and Apollo loved him with every kind of love, and it did not save him — he died at Thebes because of a woman's gifts, a phrase dropped into a list of begettings without explanation, leaving the bribe, the necklace and the wife to any reader who already knows them."
    }
  },
  {
    name: "Alcmaeon",
    aliases: ["Alkmaion"],
    kind: "mortal",
    greek: "Alkmaíōn (Ἀλκμαίων)",
    roman: "Alcmaeon",
    homer: "no formula of his own",
    order: "Son of Amphiaraus",
    domain: "The matricide the poem leaves out",
    house: "The house of Melampus",
    father: "Amphiaraus",
    mother: "Eriphyle",
    siblings: ["Amphilochus"],
    who: "Amphiaraus' elder son. In the tradition he kills his mother Eriphyle to avenge the father she sold, is hunted mad by the Furies for it, and dies in exile — a story the tragedians worked hard and the Odyssey does not tell at all. Here he is a name in a list, two lines after the woman's gifts that killed his father, and the poem simply lets the gap stand.",
    books: [15],
    prominence: 3,
    acts: {
      "Theoclymenus the fugitive": "Is named with his brother and dropped. The poem has just said that Amphiaraus died because of a woman's gifts and now names the son who, in every other version of the story, made her pay for them; it declines to follow him and turns back to the other side of the family."
    }
  },
  {
    name: "Amphilochus",
    aliases: ["Amphilochos"],
    kind: "seer",
    greek: "Amphílochos (Ἀμφίλοχος)",
    roman: "Amphilochus",
    homer: "no formula of his own",
    order: "Son of Amphiaraus",
    domain: "The seer's gift, carried east",
    house: "The house of Melampus",
    father: "Amphiaraus",
    mother: "Eriphyle",
    siblings: ["Alcmaeon"],
    who: "The younger son of Amphiaraus, and in the later tradition a prophet in his own right who founds oracles in Cilicia and quarrels fatally with Mopsus over one of them. The Odyssey knows only that he existed, and names him once, beside his brother, in the recitation that establishes Theoclymenus' descent.",
    books: [15],
    prominence: 3,
    acts: {
      "Theoclymenus the fugitive": "Closes the senior branch. The genealogy names him and stops there, because the line the poem actually needs runs through Melampus' other son."
    }
  },
  {
    name: "Mantius",
    aliases: ["Mantios"],
    kind: "mortal",
    greek: "Mántios (Μάντιος)",
    roman: "Mantius",
    homer: "no formula of his own",
    order: "Younger son of Melampus",
    domain: "The junior branch, and the one that reaches Ithaca",
    house: "The house of Melampus",
    father: "Melampus",
    siblings: ["Antiphates son of Melampus"],
    children: ["Polypheides", "Cleitus"],
    who: "Melampus' second son, whose name is built straight out of mantis, the word for a seer, and who is given nothing but two sons — one carried off by a goddess for his looks, one made the best prophet alive by Apollo. The poem comes back to him only after it has finished with his brother's branch, because his is the line that reaches the man standing in front of Telemachus.",
    books: [15],
    prominence: 3,
    acts: {
      "Theoclymenus the fugitive": "Is the return address of the genealogy. Having run the senior branch out as far as Amphiaraus' sons, the poem doubles back to Mantius and comes down the other side, through Cleitus and Polypheides, to Theoclymenus."
    }
  },
  {
    name: "Cleitus",
    aliases: ["Kleitos", "Clitus"],
    kind: "mortal",
    greek: "Kleîtos (Κλεῖτος)",
    roman: "Clitus",
    homer: "no formula of his own — the epithet in his one line belongs to the goddess who takes him, chrysóthronos Ēṓs, 'Dawn of the golden throne'",
    order: "Son of Mantius",
    domain: "Beauty, and being removed for it",
    house: "The house of Melampus",
    father: "Mantius",
    siblings: ["Polypheides"],
    who: "Mantius' son, taken up by Dawn for his beauty so that he might live among the immortals. He is a two-line instance of a pattern the poem uses repeatedly — Tithonus, Ganymede, Orion — in which a mortal is lifted out of the story by a god who wants him. The seers' family is the only house in the poem that produces both a working prophet and an abduction.",
    books: [15],
    prominence: 3,
    acts: {
      "Theoclymenus the fugitive": "Is removed from the genealogy in the act of entering it. Dawn snatches him away for his beauty to be among the gods, which ends his branch in the same breath that opens it, and the descent goes on through his brother."
    }
  },
  {
    name: "Polypheides",
    aliases: ["Polyphides"],
    kind: "seer",
    greek: "Polypheídēs (Πολυφείδης)",
    roman: "Polyphides",
    homer: "hòn Apóllōn thêke brotôn óch' áriston — 'whom Apollo made far the best of mortals' at prophecy, once Amphiaraus was dead",
    order: "Seer at Hyperesia",
    domain: "The prophetic office, held by appointment",
    house: "The house of Melampus",
    father: "Mantius",
    siblings: ["Cleitus"],
    children: ["Theoclymenus"],
    who: "Apollo made him the best seer alive after Amphiaraus died at Thebes. It is the poem's only account of how the gift is transferred, and it passes by appointment rather than by inheritance, to a man who happened to have the blood as well. He fell out with his father and moved to Hyperesia, where he prophesied to all comers. His son inherits both the gift and the exile.",
    books: [15],
    prominence: 3,
    acts: {
      "Theoclymenus the fugitive": "Supplies the credential. Before the poem will let Theoclymenus aboard it establishes that his father was, on Apollo's own appointment, the best prophet among men — so that when the son reads a hawk on the right, or sees the walls of the hall running wet, the reading is known to be sound even though not one person in the house acts on it."
    }
  },
  {
    name: "Theoclymenus",
    aliases: ["Theoklymenos", "the seer from Argos"],
    kind: "seer",
    greek: "Theoklýmenos (Θεοκλύμενος)",
    roman: "Theoclymenus",
    homer: "no formula of his own; the poem introduces him with four generations of descent instead of an epithet",
    order: "Fugitive seer of Argos",
    domain: "Prophecy nobody in the hall will hear",
    house: "The house of Melampus",
    father: "Polypheides",
    who: "A murderer on the run and the last of the Melampodidae, picked up on the beach at Pylos as Telemachus is casting off. He has killed a man of his own tribe and is fleeing the dead man's brothers and cousins; Telemachus takes him aboard without terms, which is a wager on xenia at exactly the point where the poem is testing everyone else's. Every prophecy he makes is accurate, and not one of them alters what a single person does.",
    books: [15, 17, 20],
    prominence: 2,
    acts: {
      "Theoclymenus the fugitive": "Comes up to Telemachus beside the ship as a suppliant, withholds his name until it is asked for, and confesses the killing before he asks for passage. Telemachus takes him aboard unconditionally — a stranger with blood on his hands, received properly, while a hundred well-born neighbours eat his house down at home.",
      "The hawk on the right": "Reads the omen at the landing. A hawk crosses on the right with a dove in its claws, plucking it as it goes, and Theoclymenus draws Telemachus aside from the crew to tell him that no house in Ithaca is more kingly than his own and that his line will rule for ever. It is the first plain statement anyone has made to Telemachus that the contest is already settled.",
      "Theoclymenus' prophecy": "Swears to Penelope, on Zeus and on the table he is eating at, that Odysseus is already here in his own country — sitting still or moving about, learning what is being done, and sowing ruin for the suitors. He says it before the disguised Odysseus has even reached the town. Penelope answers that she wishes it were true, promises him gifts, and does nothing.",
      "Theoclymenus sees the hall in blood": "Sees it whole. The suitors are laughing with a laughter that is not their own, their eyes are running with tears, the meat they are eating drips blood, the walls and the beams are wet with it, the porch and the yard are crowded with ghosts going down to Erebus, and the sun has gone out of the sky. He says all of it aloud, they laugh at him for it, and he walks out of the house to Peiraeus — the only man to leave that hall alive by choosing to."
    }
  }
];
