/*
 * Peoples, crews, households, and the objects the Odyssey treats as agents.
 *
 * These records carry no descent — a raft has no father — but they carry the
 * same questions the poem asks of everyone in it: what is this, what does it
 * do here, and how does it behave towards a stranger. Homer's peoples are
 * sorted almost entirely by that last test. The formula Odysseus repeats
 * before every landfall asks whether the inhabitants are hybristaí te kaì
 * ágrioi oudè díkaioi, 'violent and savage and unjust', or philóxeinoi,
 * 'friends to guests'. Every people in this file is an answer to it.
 *
 * Objects are here because the poem gives them the same weight it gives
 * persons. A scar, a bed, and a bow do the recognising in this poem; the
 * people around them only confirm it.
 */

export const COLLECTIVE_FIGURES = [
  /* ------------------------------------------------------------------- peoples */
  {
    name: "The Cicones",
    aliases: ["Kikones", "the Ciconians", "the men of Ismarus", "the Thracians of Ismarus"],
    kind: "people",
    greek: "Kíkones (Κίκονες)",
    roman: "Cicones",
    homer: "hósa phýlla kaì ánthea gígnetai hṓrēi — 'as many as the leaves and flowers in season', the inland Cicones who come down at dawn",
    order: "A people of the Thracian coast",
    domain: "Ismarus, its wine, and the first raid of the return",
    who: "A Thracian people who fought on Troy's side, and the first human beings Odysseus meets after the war. They are neither monsters nor hosts. They are neighbours with cavalry inland, and they answer a sack the way any people would. Their priest of Apollo, Maron, gives Odysseus the wine that later blinds a Cyclops, so the raid also arms the next disaster.",
    books: [9],
    prominence: 3,
    acts: {
      "I am Odysseus son of Laertes": "Are named in the first line of the wanderings proper. Odysseus opens the story of his sufferings by telling a court that has just fed him how he sacked a city and killed its men, and he does not soften it.",
      "The sack of Ismarus": "Lose their city, their men, their wives, and their goods to a fleet that stops on the way home to plunder. The survivors call in the Cicones of the interior, who come at dawn as many as the leaves in season, fight from chariots, and kill six men from every ship. Odysseus spares only Maron, priest of Apollo, out of reverence — the one act of restraint in the raid, and the one that pays."
    },
    bookActs: {
      9: "Establish the moral position from which the whole apologos is told. Before any monster appears, Odysseus' men have behaved exactly as the suitors will behave: eating another man's stores, refusing to leave, deaf to the order to go."
    }
  },
  {
    name: "The Lotus-eaters",
    aliases: ["Lotophagi", "the Lotus eaters", "the flower-eaters"],
    kind: "people",
    greek: "Lōtophágoi (Λωτοφάγοι)",
    roman: "Lotophagi",
    homer: "hoí t' ánthinon eîdar édousin — 'who eat a flowery food'",
    order: "A people of the southern coast",
    domain: "The lotus, and the forgetting of the way home",
    who: "The gentlest people in the poem and the most dangerous. They offer no violence at all; they share their food, which is what a good host does, and the food deletes the desire to go home. They are the first demonstration that in this poem hospitality can destroy a return as efficiently as a cave with a stone across it.",
    books: [9],
    prominence: 3,
    acts: {
      "The land of the Lotus-eaters": "Do not harm the three scouts sent to them. They give them lotus, and the men lose all wish to report back or sail. Odysseus drags them to the ships weeping, binds them under the benches, and orders the rest aboard before anyone else can taste it. The threat here is not death but a contented forgetting of nostos."
    }
  },
  {
    name: "The Cyclopes",
    aliases: ["Kyklopes", "the Cyclops-folk", "the one-eyed giants"],
    kind: "people",
    greek: "Kýklōpes (Κύκλωπες)",
    roman: "Cyclopes",
    homer: "hyperphiálōn athemístōn — 'overbearing, without law'; they have neither assemblies for counsel nor thémistes",
    order: "A lawless pastoral people",
    domain: "Herding without agriculture, dwelling without a polity",
    who: "Homer's Cyclopes are not the smiths of later poetry but a people defined by everything they lack: no assemblies, no laws, no ships, no ploughing, no counsel taken in common. Each lives in a cave on a mountain top and makes rules for his own wife and children, caring nothing for his neighbours. Polyphemus, who belongs to Poseidon, is registered on his own; the people are the argument the poem makes about what a man without a community becomes.",
    books: [9],
    prominence: 2,
    acts: {
      "The cave of Polyphemus": "Are described before one of them is met, and the description is a political indictment. They sow nothing and it grows anyway, they have no ships and so have never seen the fertile island a mile offshore, and Odysseus stops the narrative to explain what a seafaring people would have made of it. The catalogue of what they do not have is the standard against which their treatment of a guest is about to be measured.",
      "Nobody is my name": "Come to the cave mouth when their neighbour bellows in the night, ask him from outside who is killing him by force or by guile, hear 'Nobody', and tell him that if nobody is harming him he had better pray to his father and endure what Zeus sends. Then they go home. The people's one collective act in the poem is to withdraw from a neighbour in distress, which is precisely what a folk with no assemblies would do."
    }
  },
  {
    name: "The Laestrygonians",
    aliases: ["Laestrygones", "the giants of Telepylus", "the men of Lamus"],
    kind: "people",
    greek: "Laistrygónes (Λαιστρυγόνες)",
    roman: "Laestrygones",
    homer: "ouk ándressin eoikótes, allà Gígasin — 'not like men, but like Giants'",
    order: "A cannibal people of the far north",
    domain: "Telepylus, its narrow harbour, and the shortest disaster in the poem",
    who: "A giant, man-eating people in a land where the paths of night and day run close together, so that a sleepless man could earn double wages. They have a king, a queen, an agora, and a herald's summons — every institution the Cyclopes lack — and they use them to organise an ambush. The poem's arrangement is deliberate: lawlessness eats one man at a time, and civic order eats a fleet.",
    books: [10],
    prominence: 2,
    acts: {
      "The Laestrygonians": "Bring the scouts to a queen as huge as a mountain peak, who calls her husband, who seizes one man for his dinner. Their king Antiphates raises the cry, thousands come from every side, and they spear the crews like fish in the landlocked harbour and carry them off to eat. Odysseus alone has moored outside the rocks; eleven ships are lost in a few minutes, and he loses more men here than to any monster."
    }
  },
  {
    name: "The Phaeacians",
    aliases: ["Phaeaces", "Phaiekes", "the people of Scheria", "the men of Alcinous"],
    kind: "people",
    greek: "Phaíēkes (Φαίηκες)",
    roman: "Phaeaces",
    homer: "ankhítheoi — 'near kin to the gods'; and nausíklytoi, philērétmoi — 'famed for ships', 'lovers of the oar'",
    order: "A seafaring people at the edge of the world",
    domain: "Convoy: taking strangers home without asking who they are",
    house: "The Phaeacian house",
    who: "A people led out of Hypereia by Nausithous to escape the Cyclopes, settled on Scheria far from all other men, and given ships that need no steersman and know every harbour by themselves. They have no war, no archery, no enemies, and one standing custom: any stranger who reaches them is conveyed home. That custom is their glory and their ruin, because Poseidon has sworn to punish it.",
    books: [5, 6, 7, 8, 13],
    prominence: 1,
    acts: {
      "The landfall on Scheria": "Are the shore Odysseus is aiming at when Poseidon breaks the raft. He reaches their coast naked, cut on the rocks, and crawls under two olive bushes to sleep in the leaves, arriving among the most civilised people in the poem in the least human condition he has been in.",
      "The washing at the river mouth": "Keep washing tanks at the river mouth and send the king's daughter with the household linen — a people whose princess does laundry, and whose court is domestic rather than heroic.",
      "The supplication": "Are represented in this scene by a girl who does not run. Nausicaa stands when her maids flee, and grants the naked suppliant food, clothing, and the protection of a stranger who comes from Zeus, before her father has been asked anything.",
      "Nausicaa's instructions": "Reveal their one small meanness. Nausicaa will not be seen entering town with him because the Phaeacians talk, and some rough man will say she has picked up a husband from somewhere. The best-mannered people in the poem still police a girl's reputation.",
      "The bronze walls and the garden": "Live in bronze walls with a frieze of blue, gold dogs at the door, torch-bearing golden youths, fifty women at the mills and looms, and an orchard where pear ripens on pear the year round. The poem's fullest description of prosperity is given to the people who are about to lose their access to the sea.",
      "Echeneus' rebuke": "Sit in silence when a stranger appears at their hearth with his arms round the queen's knees, until their oldest man says what a hall ought to say: get the suppliant up off the ashes and give him a chair. The court has to be told how to do what it does perfectly well by habit.",
      "The assembly and the promise of convoy": "Vote a ship, fifty-two young rowers, and a convoy for a man whose name they have not asked. The refusal to ask is their signature virtue, and the poem lets it stand for a whole day before turning it into a problem.",
      "The games, and Euryalus' insult": "Show that a people with no wars still have contempt to spend. Their young men call the guest a merchant captain who thinks about cargo, and get an answer that ends the argument and puts a discus beyond any of their marks.",
      "The dance and the gifts": "Repair the insult by treaty: a sword from Euryalus, a chest of clothing and gold from the thirteen kings, and a levy on the people to make it good. Reparation among the Phaeacians is a public procedure, which is exactly what Ithaca will refuse the suitors.",
      "The wooden horse, and the weeping simile": "Watch a guest cover his head and weep at a song, and only Alcinous notices. The people who convey everyone home are the audience for the poem's most terrible simile: the crying man is compared to a woman being led into slavery over her husband's body.",
      "The last night in Scheria": "Load the gifts under the benches, spread a rug and linen in the stern, and put out at nightfall for a man who sleeps the whole way. Their last act of hospitality is performed on an unconscious guest.",
      "The ship turned to stone": "Watch their ship, one stroke from the harbour, struck into stone and rooted to the sea floor by Poseidon, and remember the old prophecy that a mountain would also be set over their city. Alcinous stops all convoys and sacrifices twelve bulls. Homer never says whether the mountain fell, and the poem's kindest people are left mid-sentence."
    },
    bookActs: {
      7: "Are the test case for xenia done correctly: bathe the stranger, feed him, give him a bed, promise him passage, and ask his name only the next day."
    }
  },
  {
    name: "The Ithacans",
    aliases: ["the people of Ithaca", "the men of Ithaca", "the demos of Ithaca", "the assembly of Ithaca"],
    kind: "people",
    greek: "Ithakḗsioi (Ἰθακήσιοι)",
    roman: "Ithacenses",
    homer: "no formula of their own; their island has one — trēkheî', all' agathḕ kourotróphos, 'rough, but a good nurse of young men'",
    order: "The commons of Ithaca",
    domain: "The assembly that has not met in twenty years",
    who: "The population of a kingdom whose king has been gone twenty years, whose sons are eating his house, and who have never once been called together about it. The poem is unusually hard on them. They are not villains; they are a community that watched and said nothing, and Mentor tells them so to their faces.",
    books: [1, 2, 16, 24],
    prominence: 2,
    acts: {
      "The first assembly in twenty years": "Come at the herald's summons, and the oldest man present, Aegyptius, has to ask who called them, since no assembly has been held since Odysseus sailed. The silence of two decades is stated as a fact of the constitution before anyone argues about the suitors.",
      "Mentor's rebuke": "Are the real target of Mentor's speech. He spends only a line on the suitors and the rest on the many sitting quiet, who could shout down a few young men and do not. Then Leocritus dissolves the meeting, and they go home, which proves him right.",
      "The ambush failed": "Learn from Medon and from the suitors' own quarrel that a plot to kill their king's son has been running from their harbour, and Halitherses tells them plainly whose fault it is. The demos does nothing again.",
      "Eupeithes raises Ithaca": "Gather at last, over the bodies of their sons. Eupeithes calls for vengeance, Medon reports that a god fought beside Odysseus, Halitherses tells them they are being led into a second slaughter by their own cowardice, and more than half stay behind. The rest arm and march.",
      "Laertes' cast, and the truce": "Are stopped mid-battle by Athena's shout and Zeus' thunderbolt, take oaths for the future, and are made to forget the killing of their sons. The poem ends a civil war by divine amnesia rather than by settlement, which many readers have found abrupt and some have found the point."
    }
  },
  {
    name: "The Cephallenians",
    aliases: ["Kephallenes", "the Cephallenes", "the men of the western isles"],
    kind: "people",
    greek: "Kephallênes (Κεφαλλῆνες)",
    roman: "Cephallenes",
    homer: "megáthymoi Kephallênes — 'great-hearted Cephallenians', the formula of the Iliad's catalogue; the Odyssey uses the name plainly",
    order: "The levy of Odysseus' kingdom",
    domain: "Ithaca, Same, Dulichium, Zacynthus, and the mainland shore",
    house: "The house of Arcesius",
    who: "The collective name for the peoples Odysseus rules and led to Troy in twelve ships: not Ithaca alone but the islands round it and a strip of the opposite coast. The Odyssey almost never uses the word, which matters, because the poem's Ithaca is deliberately small — a rough island with a hall in it — while the kingdom behind it is large enough to supply a hundred and eight suitors.",
    books: [24],
    prominence: 3,
    acts: {
      "Laertes in the orchard": "Are named by an old man in a patched tunic and goatskin cap, wishing he were the man he was when he took Nericus on the mainland cape at the head of the Cephallenians. It is the only place in the poem where the kingdom is described as an army, and it is said by someone who can no longer lift a spear."
    }
  },
  {
    name: "The Taphians",
    aliases: ["Taphioi", "the Taphian sea-raiders", "the men of Mentes"],
    kind: "people",
    greek: "Táphioi (Τάφιοι)",
    roman: "Taphii",
    homer: "Taphíōn philērétmōn — 'the oar-loving Taphians'",
    order: "A trading and raiding people of the western sea",
    domain: "Iron for bronze, and the slave trade",
    who: "Sailors from the islands off Acarnania who trade metal and steal people, and whose reputation is respectable enough that Athena chooses their lord as her first disguise. The poem uses them as its ordinary background of maritime violence: no monsters, no gods, just ships that will carry cargo or carry off a nurse depending on the harbour.",
    books: [1, 15, 16],
    prominence: 3,
    acts: {
      "Athena as Mentes": "Lend their name to a goddess. Athena arrives as Mentes, lord of the Taphians, with a ship's crew waiting in a bay, a cargo of iron for Temese, and a guest-friendship with Laertes going back generations — a cover story built entirely out of commerce and xenia.",
      "The Phoenician nurse": "Are the pirates who seized a rich man's daughter from Sidon in the first place and sold her to Laertes' house. The Ithacan household's most trusted women arrive in it as stolen property, and Eumaeus tells this without any sense that it needs explaining.",
      "Penelope on the stair": "Are the reason Antinous has no standing to threaten anyone. Penelope reminds him that his father came here as a fugitive because he had joined Taphian pirates against the Thesprotians, that the Ithacans wanted to kill him and eat his estate, and that Odysseus stood in front of him. The man eating the house was saved by it."
    }
  },
  {
    name: "The Phoenicians",
    aliases: ["Phoinikes", "the Sidonians", "the Sidonian traders"],
    kind: "people",
    greek: "Phoínikes (Φοίνικες)",
    roman: "Phoenices / Poeni",
    homer: "Phoínikes nausíklytoi ... trṓktai — 'Phoenicians famed for ships', and 'sharpers', men who gnaw at a bargain",
    order: "Traders of the eastern sea",
    domain: "Cargo, trinkets, and the selling of people",
    who: "The poem's professional strangers: superb sailors, makers of the finest worked silver in the world, and, whenever they appear in a story, cheats. Homer applies to them the only ethnic slur in the Odyssey. They are also the mechanism by which people in this poem change hands, and both of the household's lies about the past run through their ships.",
    books: [13, 14, 15],
    prominence: 3,
    acts: {
      "Athena as a young shepherd": "Appear in the first lie Odysseus tells on his own soil. He says he killed a man in Crete, paid Phoenician sailors to carry him off, and was set ashore here with his goods when the wind failed. He invents them because a Phoenician ship explains any man arriving anywhere with treasure.",
      "The lie about Crete and Egypt": "Appear again in the Cretan tale, as the man who kept him a year and then shipped him for Libya intending to sell him. The false life Odysseus builds for himself is a merchant's life, and its villains are the ones a real sailor would name.",
      "The Phoenician nurse": "Put in at Syrie with trinkets, find one of their own women working as a nurse in the king's house, and buy her loyalty with a gold-and-amber necklace and the promise of home. She steals three cups and the king's small son and carries him aboard. Six days out Artemis strikes her dead, and the boy is sold in Ithaca to Laertes: Eumaeus is a prince, traded twice before he can remember it."
    }
  },
  {
    name: "The Egyptians",
    aliases: ["Aegyptii", "the men of Egypt", "the people of the Nile"],
    kind: "people",
    greek: "Aigýptioi (Αἰγύπτιοι)",
    roman: "Aegyptii",
    homer: "iētròs dè hékastos epistámenos perì pántōn anthrṓpōn — 'there every man is a healer, skilled beyond all mankind'",
    order: "A great kingdom beyond the sea",
    domain: "Drugs, grain, wealth, and the far end of every plausible lie",
    who: "The richest and most distant real place in the poem's world, reached by a heaven-fed river, producing drugs good and baneful in more variety than anywhere else on earth. Egypt does two jobs in the Odyssey: it detains Menelaus and makes him rich, and it supplies the geography for Odysseus' false lives, because a story that goes to Egypt cannot be checked.",
    books: [3, 4, 14, 17],
    prominence: 3,
    acts: {
      "The scattering of the fleet": "Are where Nestor last places Menelaus: driven off course, delayed among men of alien speech, and coming home in the eighth year with a fortune. The Egyptian detour is the model of a return that succeeds slowly.",
      "Helen's drug": "Supply the nepenthes. Polydamna, wife of Thon, gave it to Helen in Egypt, where the earth bears the most drugs of any country; she drops it in the wine so that four people who have been weeping can hear about the war without grief. Egyptian pharmacology is used to make memory bearable.",
      "The calm at Pharos": "Hold Menelaus twenty days on an island a day's sail off their coast, with no wind and the food running out, because he failed to sacrifice before leaving. The country is a trap that has to be paid for before it can be left.",
      "The lie about Crete and Egypt": "Are the hinge of the Cretan tale. The false Odysseus says his men ignored orders, raided the fields, killed the men and took the women, and were cut to pieces when the city came out at dawn; he threw down his weapons and clasped the king's knees, and was protected. He tells a swineherd a story about a raid punished and a suppliant spared, in a house where he is testing whether suppliants are still spared."
    }
  },
  {
    name: "The Ethiopians",
    aliases: ["Aethiopes", "the Aithiopes", "the far-off Ethiopians"],
    kind: "people",
    greek: "Aithíopes (Αἰθίοπες)",
    roman: "Aethiopes",
    homer: "éskhatoi andrôn — 'the remotest of men', divided in two, some at the setting and some at the rising of Hyperion",
    order: "A people at the world's two edges",
    domain: "The feast that keeps a god away from the council",
    who: "A blameless people living at the extreme east and west, split in two by the sun's course, who entertain the gods at hecatombs. They never speak and are never visited by a mortal. Their whole function is chronological: they are where Poseidon is when the plot needs him absent.",
    books: [1, 4, 5],
    prominence: 3,
    acts: {
      "The council on Olympus": "Are feasting Poseidon at the far edge of the world while the other gods decide to release Odysseus. The Odyssey begins by getting the hero's enemy out of the room, and the device it uses is a hecatomb of bulls and rams at the end of the earth.",
      "The double wedding at Sparta": "Stand at the far end of Menelaus' wandering, in the same breath as Cyprus, Phoenicia, the Sidonians, and the Libyans where the lambs are born horned. His list of places measures how far a return can be stretched without breaking.",
      "Poseidon's storm": "Are the feast Poseidon is coming home from when he looks up from the mountains of the Solymi, sees Odysseus on a raft in mid-sea, and understands that the gods have changed their minds while he was away."
    }
  },
  {
    name: "The Cimmerians",
    aliases: ["Kimmerioi", "the people of the mist"],
    kind: "people",
    greek: "Kimmérioi (Κιμμέριοι)",
    roman: "Cimmerii",
    homer: "ēéri kaì nephélēi kekalymménoi — 'wrapped in mist and cloud', over whom 'deadly night is stretched'",
    order: "A people at the edge of Ocean",
    domain: "The last inhabited shore before the dead",
    who: "A city and a people on the far bank of Ocean, on whom the shining sun never looks, either climbing or coming down, so that ruinous night covers them always. They are the only inhabitants of the road to the underworld, and they are described in four lines and never mentioned again. Homer gives them houses and an assembly, which makes the darkness worse.",
    books: [11],
    prominence: 3,
    acts: {
      "The trench of blood": "Are the landfall. The ship runs to the deep-flowing Ocean and beaches among their people, in a permanent night, and Odysseus walks inland from their shore to the place Circe described. The poem marks the boundary of the living world with a city where nobody can see."
    }
  },
  {
    name: "The shades of the dead",
    aliases: ["the dead", "the souls", "the psychai", "the ghosts", "the shades", "the strengthless dead"],
    kind: "shade",
    greek: "psykhaí — nekýōn amenēnà kárēna (ψυχαί)",
    roman: "manes / umbrae",
    homer: "nekýōn amenēnà kárēna — 'the strengthless heads of the dead'; and brotôn eídōla kamóntōn — 'the phantoms of men outworn'",
    order: "The population of the house of Hades",
    domain: "Memory without body, and speech bought with blood",
    house: "The dead of the Nekyia",
    who: "In the Odyssey the dead are not punished and not rewarded; with a few exceptions they are simply drained. They keep their faces and their grievances, lose their strength and their wits, and cannot recognise anyone or speak sense until they have drunk blood — Teiresias alone keeps his mind entire. Achilles states the doctrine flatly: he would rather be a hired hand for a landless man than king over all the perished dead.",
    books: [11, 24],
    prominence: 2,
    acts: {
      "The trench of blood": "Come up out of Erebus at the smell of the offering, in a crowd — brides, unmarried youths, old men worn with suffering, tender girls, and men in armour still carrying their wounds — with a cry that turns Odysseus green with fear. He has to hold them off the trench with a drawn sword while he waits for the one shade he came for.",
      "The catalogue of heroines": "Come forward in order, sent up by Persephone: the wives and daughters of the great houses, each drinking and giving her name and her lover and her sons. The dead are organised here into something like a poem's index of genealogy, and Odysseus lets them through one at a time.",
      "Agamemnon, Achilles, Ajax": "Behave as three different kinds of dead: one who cannot stop talking about how he was killed, one who wants only news of his son and his father, and one who says nothing at all and walks away into the dark, still angry about the armour. Homer's most famous silence is a shade refusing the blood.",
      "Minos, Tantalus, Sisyphus, Heracles": "Gather at the end in their myriads with an unearthly clamour, and green fear takes Odysseus that Persephone will send up the Gorgon's head. He runs for the ship. The Nekyia does not conclude; it is fled.",
      "Hermes leads the suitors' souls": "Are roused by the golden wand and follow it gibbering, like bats in the depth of a holy cave when one drops from the cluster on the rock. The suitors go down squeaking together, past the White Rock and the gates of the sun, into the asphodel — the poem's last crowd scene, and the least dignified."
    }
  },

  /* -------------------------------------------------------- crews and households */
  {
    name: "Odysseus' companions",
    aliases: ["the companions", "the comrades", "the hetairoi", "the crews", "Odysseus' men", "the men of the twelve ships"],
    kind: "people",
    greek: "hétairoi (ἑταῖροι)",
    roman: "socii / comites",
    homer: "autôn gàr sphetérēisin atasthalíēisin ólonto — 'they perished by their own recklessness'",
    order: "The crews of twelve ships",
    domain: "Everything Odysseus fails to bring home",
    who: "Six hundred or so men from Ithaca and the islands, subtracted through the poem in blocks until none is left. The proem states their fate and their fault in the same breath, and then the narrative complicates it: they disobey at Ismarus and at Aeolia and at Thrinacia, but they also warn him at the Cyclops' cave and beg him not to shout, and he is the one who insists on going in. They are the poem's standing argument about how much of a disaster a leader owns.",
    books: [1, 9, 10, 11, 12],
    prominence: 1,
    acts: {
      "The proem": "Are the poem's first stated loss. Odysseus strove to win his own life and the homecoming of his companions, and yet he did not save them, hard as he tried, for they perished by their own recklessness — the whole poem's ethics compressed into four lines, before the man is even named.",
      "The sack of Ismarus": "Will not obey the order to take the plunder and go. They kill sheep and cattle on the beach and drink the wine while the Cicones fetch help from inland, and seventy-two of them die there. The first thing the crew does in the story is exactly what the suitors do in the hall.",
      "The land of the Lotus-eaters": "Send three men to find out who lives there and lose all three to a shared meal. The rest have to watch their crewmates dragged back weeping and lashed under the benches, and row away from a place where nobody was hurt.",
      "The cave of Polyphemus": "Beg him, sensibly, to take the cheeses and drive the lambs and kids to the ship and go. He refuses, wanting to see the host and get a guest-gift, and six of them are eaten for it. Odysseus tells this against himself, in a hall full of hosts.",
      "The stake in the eye": "Draw lots for the four who will help him drive the heated olive stake, and the lot picks the very men he would have chosen. They lean on it while he turns it like a shipwright's drill, and the eye hisses.",
      "Under the rams, and the curse": "Are lashed in threes under the bellies of the rams and got out alive, then plead with him, one gentle word after another, not to shout at the Cyclops from the sea. He shouts, gives his name, and buys the curse that costs them everything.",
      "The bag of winds": "Sail nine days and nights with Odysseus never letting the sheet out of his hands, because he will not trust anyone else with it. The fatigue that lets the disaster happen is a direct consequence of his refusal to delegate or explain.",
      "Within sight of Ithaca": "Watch him fall asleep in sight of the fires of home, decide that the ox-hide bag holds gold and silver from Aeolus that he has not shared, and cut the cord. The winds come out together and blow them back to where they started. Their crime is not greed exactly; it is the assumption that their commander has been keeping something from them, which is true in every other scene.",
      "The Laestrygonians": "Lose eleven ships and every man aboard them in a harbour they rowed into because it looked safe. Odysseus alone tied up outside. From here he commands one crew, and the poem's arithmetic never recovers.",
      "The dividing of the crew": "Are split by lot into two companies of twenty-two, and Eurylochus' half goes inland to the smoke. Circe feeds them cheese, barley, honey and Pramnian wine with a drug in it, taps them with her wand, and they are swine with the minds of men, weeping in the pens. Only Eurylochus, who hung back, comes home to tell it.",
      "The year on Aeaea": "Eat and drink well for a year and are the ones who finally say it. They take him aside and tell him it is time to remember his own country, and he goes to Circe that night to ask for release. The crew, not the captain, restarts the return.",
      "The trench of blood": "Hold the sheep for the throat-cutting at the world's edge, flay them, and burn them to Hades and Persephone while Odysseus keeps the dead off the pit with a sword. They do the work of the Nekyia and take no part in it."
    }
  },
  {
    name: "The crew of the last ship",
    aliases: ["the last crew", "the survivors of Thrinacia", "the men who ate the cattle"],
    kind: "people",
    greek: "hétairoi (ἑταῖροι)",
    roman: "socii",
    homer: "nḗpioi — 'fools, children', the proem's one word for them",
    order: "The final ship's company",
    domain: "Starvation, an oath, and one meal",
    who: "The forty-odd men left after the Laestrygonians and Circe: the only crew Odysseus still commands, and the only one whose destruction the poem argues about in detail. They are warned twice, by Teiresias and by Circe, in the plainest terms the poem ever uses. They swear an oath. Then the wind blows from the south for a month, the ship's stores run out, and they are reduced to bent hooks and sea birds. Homer makes the case for them and against them at once.",
    books: [10, 11, 12],
    prominence: 2,
    acts: {
      "Elpenor's burial and Circe's second briefing": "Bury a crewmate who broke his neck falling off a roof drunk, raise a mound, plant his oar on it, and then sit through a set of sailing directions that names every way they can die. Everything that follows has already been described to them.",
      "The Sirens and the wax": "Take the wax he has kneaded soft in the sun, seal their own ears, and bind him to the mast, then tighten the ropes when he signals to be released. The one episode the crew handles perfectly is the one where they cannot hear anything.",
      "Scylla and Charybdis": "Row past the cliff without being told about Scylla, because Odysseus decides they will not row at all if they know. Six are snatched from the deck over his head, calling his name as they go, and he says it was the most pitiable thing he saw in all his labours at sea.",
      "Thrinacia and the oath": "Refuse, through Eurylochus, to row past an island at nightfall after a night without sleep, and Odysseus gives way. They swear a great oath to touch no cattle and eat only Circe's stores, and mean it.",
      "The month of the south wind": "Are held a month by a south wind, eat through the ship's provisions, and hunt birds and fish with bent hooks because hunger gnaws at the belly. Eurylochus makes the speech: all deaths are hateful, but starving is the worst, and a man can build the Sun a temple later. They sacrifice the best cattle with oak leaves instead of barley and water instead of wine, because they have neither.",
      "The wreck and the lone survivor": "Feast for six days on beef that lows on the spits while the hides crawl on the ground, and put to sea on the seventh. Zeus sends a squall, the mast breaks the steersman's skull, the bolt strikes, and they float round the black ship like sea-crows. Odysseus is asleep on the beach when the slaughter begins and asleep again in the strait when it ends."
    }
  },
  {
    name: "The twelve disloyal maids",
    aliases: ["the shameless maids", "the twelve maids", "the disloyal handmaids", "the women who went with the suitors"],
    kind: "servant",
    greek: "dmōiaí (δμῳαί)",
    roman: "ancillae",
    homer: "anaideíēs epébēsan — 'they set foot upon shamelessness', twelve of fifty",
    order: "Household slaves of Ithaca",
    domain: "The corridor between the hall and the women's quarters",
    house: "The household of Ithaca",
    who: "Twelve of the fifty women in the house, who sleep with the suitors, insult the beggar, and carry news out of the women's rooms. The poem calls it shamelessness and never calls it choice; they are slaves in a house whose master is presumed dead and whose heir cannot protect anyone. Their hanging is the most disputed passage in the Odyssey, and Homer's own simile — birds in a net, feet twitching a little while — refuses to make it heroic.",
    books: [18, 19, 20, 22],
    prominence: 2,
    acts: {
      "Melantho's insults": "Speak through Melantho, whom Penelope raised like a daughter and who sleeps with Eurymachus. She tells the beggar to get out and sleep in a smithy, and gets a reply that promises Telemachus will hear of it — the first time the disguised king threatens his own servant.",
      "The braziers and the taunting": "Are sent off to sit with Penelope and refuse to go, so the stranger offers to hold the torches himself and stand all night. The maids laugh at him one after another; he tells them to go upstairs, and they do, understanding something from his eyes that they cannot name.",
      "Melantho again": "Abuse him a second time in the cleared hall, and Penelope turns on Melantho and tells her she knows what she is doing and will pay for it with her life. The mistress of the house names the sentence before the master comes home.",
      "The maids in the dark": "Go out through the courtyard to the suitors at night, laughing and setting one another up, exactly as they have every night. Odysseus lies awake on his ox-hide and his heart growls inside him like a bitch standing over her puppies, and he beats his breast and tells it to endure — the passage where he first talks to himself as if to a subordinate.",
      "The twelve maids, and the fire": "Are named by Eurycleia when the killing is over: twelve of fifty went the way of shamelessness. They carry the bodies of the men they slept with out into the courtyard, scrub the tables and the floor, and are then herded between the round-house and the wall. Telemachus refuses them the clean death by sword his father ordered, and hangs them in a row from a ship's cable, like thrushes or doves caught in a net."
    }
  },
  {
    name: "The loyal servants",
    aliases: ["the faithful servants", "the household slaves", "the loyal household", "the good servants", "the dmoes"],
    kind: "servant",
    greek: "dmôes kaì dmōiaí (δμῶες)",
    roman: "famuli fideles",
    homer: "no formula of their own; Homer gives the epithets to individuals — dîos hyphorbós, 'the noble swineherd'",
    order: "The household of Odysseus",
    domain: "Keeping a house for a man presumed dead",
    house: "The household of Ithaca",
    who: "Eurycleia, bought for twenty oxen and never touched; Eumaeus, a stolen prince who now runs the pig farm; Philoetius, who has kept the cattle for a master he has not seen in twenty years; Dolius and his sons on the old man's farm. The Odyssey's most radical move is to make loyalty a matter of household rank rather than birth: the slaves pass the test and the noblemen fail it, and the poem's recognitions are given to a nurse, a swineherd, and a cowherd before they are given to a wife.",
    books: [1, 2, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24],
    prominence: 2,
    acts: {
      "Eurycleia and the sleepless night": "Carry the torches to the prince's room, fold his tunic, hang it on the peg, and pull the door to by the silver handle — the poem's first picture of a house still running properly at the level below the quarrel.",
      "Eurycleia and the stores": "Provision a secret voyage under oath: twelve jars of wine and twenty measures of barley meal, drawn and sealed and kept from Penelope for eleven days. The household conspires to help the son because the household is the only part of Ithaca still functioning.",
      "The guest-portion": "Kill the household's own food for a stranger who owns nothing. Eumaeus roasts two piglets, gives the guest the long chine that is the master's portion, and burns the first offering to the gods, on the grounds that Zeus is with beggars — the poem's model of hospitality performed by a slave on rations.",
      "Philoetius the cowherd": "Bring the yearling heifer and the fat goats over from the mainland at dawn and stop in the doorway to say aloud that the sight of a beggar in rags makes them think of their own master wandering somewhere in the same state, if he is alive.",
      "The recognition of Eumaeus and Philoetius": "Are brought out into the yard and shown the scar, and made the first people on Ithaca to whom Odysseus declares himself deliberately. Their orders are practical: bar the courtyard gate, tie the door with a cable, and bring the bow through when the women are shut in.",
      "The twelve maids, and the fire": "Come out of the women's quarters with torches when it is over, weep round their master, take his hands, kiss his head and shoulders, and then carry the dead out and scrub the hall with sponges and water while he burns sulphur to purify it.",
      "The false wedding-feast": "Bathe, dress, and make music enough to convince a whole street that a wedding is taking place, so that the killing of a hundred noblemen is not discovered until the family is out of town. The last piece of household competence in the poem is a lie staged for the neighbours.",
      "Laertes' cast, and the truce": "Arm at last. Dolius and his six sons take up spears beside a hundred-year-old man and stand with Odysseus against the fathers of the dead, and the household that kept the house ends the poem as its army."
    }
  },
  {
    name: "The Sirens",
    aliases: ["Seirenes", "the Sirens", "the two Sirens"],
    kind: "monster",
    greek: "Seirênes (Σειρῆνες)",
    roman: "Sirenes",
    homer: "ligyrêi thélgousin aoidêi — 'they enchant with clear-toned song'; and of themselves, ídmen hóssa génētai epì chthonì pouluboteírēi — 'we know all that comes to pass on the nourishing earth'",
    order: "Singers in a meadow",
    domain: "Knowledge offered as a song, and the bones that pay for it",
    who: "Homer never describes their bodies, never gives them wings or feathers, and never says how many there are — the grammar of the passage is dual, which is why they are usually taken as two, against a later tradition of three. What he does specify is the content of the song. They do not sing about love; they sing about Troy, and they offer the listener everything that happens on earth. They sit in a meadow with a heap of rotting men round them, and the skin is shrivelling on the bones.",
    books: [12],
    prominence: 2,
    acts: {
      "Elpenor's burial and Circe's second briefing": "Are the first hazard Circe names, and the only one she gives instructions for surviving intact: knead wax, stop the crew's ears, and if he wants to hear it, be bound upright to the mast with the ropes tightened when he begs. The one danger in the poem that can be experienced and survived is the one made of information.",
      "The Sirens and the wax": "Sing to him by name — glory of the Achaeans, come here, no man has ever rowed past without hearing us — and offer him knowledge of everything the Greeks and Trojans suffered at Troy and everything that happens on the fruitful earth. The wind drops to a flat calm as the ship comes level with them, which is the trap. He signals to be untied and is lashed tighter, and it is the crew's deafness that saves him."
    }
  },
  {
    name: "The cattle of the Sun",
    aliases: ["the cattle of Helios", "the oxen of the Sun", "the herds of Hyperion", "the flocks of the Sun"],
    kind: "object",
    greek: "bóes Ēelíoio (βόες Ἠελίοιο)",
    roman: "boves Solis",
    homer: "bóes kaì íphia mêla Ēelíoio — 'the cattle and fat flocks of Helios', of which 'no young are born, nor do they ever die'",
    order: "Sacred herds on Thrinacia",
    domain: "A prohibition with no argument attached",
    house: "The line of Helios",
    who: "Seven herds of cattle and seven flocks of sheep, fifty in each, on the island of Thrinacia, watched by Helios' daughters Phaethusa and Lampetie. They neither breed nor die, which means they are not property in any ordinary sense: they are the number the Sun sees when he looks down, and killing one alters the world. The poem uses them as its purest test — no trick, no disguise, no ambiguity, just meat that must not be eaten.",
    books: [1, 11, 12],
    prominence: 2,
    acts: {
      "The proem": "Are named in the poem's ninth line, before Odysseus is. The crews died because they ate the cattle of Hyperion the Sun, and the god took from them the day of their return. Homer gives away the ending of the wanderings on the first page and tells them anyway.",
      "Teiresias' prophecy": "Are the hinge of the entire prophecy. Leave them alone and you may yet reach Ithaca, though in a bad state; harm them and the ship and the men are destroyed, and if you yourself escape you come home late, on a foreign ship, to find trouble in your house. Everything that happens afterwards is one of the two branches offered here.",
      "Elpenor's burial and Circe's second briefing": "Are named a second time by Circe in the same terms as by Teiresias, so that the crew hears the warning from a goddess as well as a ghost. Odysseus reports it to them on deck, which means no man on the ship can claim not to have known.",
      "Thrinacia and the oath": "Are heard before they are seen — lowing in the pens, and the bleating of sheep — as the ship comes in at nightfall against Odysseus' judgement. The whole crew swears not to touch them.",
      "The month of the south wind": "Are killed at last by starving men who choose the best of them, do the ritual with oak leaves and water because the barley and wine are gone, and promise the Sun a temple in Ithaca. Lampetie goes to her father at once. Helios threatens to go down and shine among the dead unless Zeus pays for it.",
      "The wreck and the lone survivor": "Announce their own revenge through omens the gods send: the hides creep along the ground, and the meat, both roasted and raw, bellows on the spits like living cattle. The men eat for six days anyway."
    }
  },
  {
    name: "The flocks of Polyphemus",
    aliases: ["the sheep of Polyphemus", "the rams of Polyphemus", "the great ram", "the Cyclops' flocks"],
    kind: "object",
    greek: "mêla (μῆλα) — óïes kaì árnes",
    roman: "greges Polyphemi",
    homer: "dasýmalloi ... iodnephès eîros ékhontes — 'thick-fleeced, with wool dark as violets'",
    order: "A giant's herd",
    domain: "Milk, cheese, and the way out of a cave",
    who: "The one thing in the Cyclops' world that is well managed. Polyphemus keeps his lambs and kids sorted by age in three pens, milks in strict order, curdles half and sets half by in wicker baskets, and knows his animals well enough to talk to the leading ram. That competence is the point: the poem's least civilised character is a first-rate stockman, and his flock is both his household economy and, in the end, the door.",
    books: [9],
    prominence: 3,
    acts: {
      "The cave of Polyphemus": "Fill the cave with the smell and sound of a working dairy: pens of lambs, spring-born and summer-born and newborn kept apart, vessels swimming with whey, cheeses on the racks that the crew want to steal and run. The trespassers eat another man's stores while waiting for him, which is exactly the crime being committed in Ithaca throughout the poem.",
      "Under the rams, and the curse": "Carry the survivors out under their bellies at dawn, lashed in threes with the withies the giant sleeps on, one man slung beneath the middle ram of each set. Odysseus takes the great ram himself and hangs face-up in the wool. The blind master stops that ram at the door, strokes its back, and asks why it is last today when it is always first — the poem's most unbearable moment of affection, spoken over the man who has just destroyed him."
    }
  },

  /* ------------------------------------------------------------------- objects */
  {
    name: "The bow of Iphitus",
    aliases: ["the bow", "the great bow", "the bow of Eurytus", "Odysseus' bow"],
    kind: "object",
    greek: "tóxon (τόξον)",
    roman: "arcus Iphiti",
    homer: "keîto ... mnêma xeínoio phíloio — 'it lay there, a memorial of a dear guest-friend'",
    order: "A guest-gift in a storeroom",
    domain: "The contest that only its owner can win",
    house: "The household of Ithaca",
    who: "Eurytus' bow, given to Odysseus by Iphitus when the two young men met in Messene and exchanged gifts. Iphitus was later murdered by Heracles in Heracles' own house, over the table he had set, and the bow passed to a man who then refused to take it to Troy and used it only on his own ground. Its provenance is a broken guest-friendship, and its use in the poem is the punishment of broken guest-friendship. Homer does not underline the symmetry; he just tells the story twice.",
    books: [21, 22, 24],
    prominence: 1,
    acts: {
      "Penelope goes to the storeroom": "Is fetched by the woman who has decided to end the waiting. Penelope takes the bent key with the ivory handle, opens the storeroom door with a noise like a bull bellowing in a meadow, lifts the bow down in its case from its peg, sits with it on her knees, and weeps before she can carry it out.",
      "The bow of Iphitus": "Gets its history at the exact moment it is brought into the hall: the meeting at Ortilochus' house, the sword and spear given in exchange, the friendship that never had time to become visiting, and Heracles killing his guest for twelve mares. The weapon that will kill a hundred men for violating hospitality is itself the residue of a host who murdered a guest.",
      "The axes set in line": "Is set against a row of twelve axe heads bedded in a trench in the earth floor by Telemachus, who has never seen it done and gets the line straight anyway. The contest is to string it and shoot through all twelve.",
      "Telemachus almost strings it": "Nearly yields to the son. Three times he bends it and the fourth time he would have strung it, and his father shakes his head, so he sets it down and pretends to be too young. The nearest the poem comes to letting the succession happen early.",
      "The grease and the fire": "Is turned over and over by suitors who cannot bend it, warmed at the fire and rubbed with lard by Antinous' orders, and still refuses every one of them. The physical fact of the bow is the argument: they are not strong enough to be him.",
      "The note like a swallow": "Is strung at last by a man sitting on a stool, without effort, the way a singer fits a new string to a lyre, and plucked with the right hand so that it sings out like a swallow. Zeus thunders outside as the arrow goes clean through every axe without touching a helve.",
      "The rags thrown off": "Puts its first arrow through the throat of a man lifting a two-handled gold cup to drink. The beggar leaps onto the threshold, spills the arrows out at his feet, and tells the hall he will try another mark.",
      "Amphimedon tells the story": "Is described in the underworld by one of the men it killed, who tells Agamemnon that the stranger asked for the bow, was laughed at, was given it by Telemachus, strung it easily, shot through the axes, and then stood on the threshold and poured out the arrows. The dead give the most compact account of the contest in the poem."
    }
  },
  {
    name: "The raft",
    aliases: ["the raft of Odysseus", "the schedia", "Odysseus' raft"],
    kind: "object",
    greek: "skhedíē (σχεδίη)",
    roman: "ratis",
    homer: "eureîa skhedíē — 'a broad raft', as wide as 'the floor of a broad merchant ship'",
    order: "A vessel built by one man",
    domain: "Eighteen days of open sea",
    who: "Not a wreck-raft but a proper piece of work: twenty seasoned trees felled and trimmed, bored and pegged and fitted with a deck, a mast, a yard, a steering oar, and wicker bulwarks against the sea, finished in four days with tools a goddess hands over under protest. It is the only thing Odysseus makes in the poem apart from the bed, and both are made of trees. His competence with an adze is the poem's quiet answer to the question of what kind of king he is.",
    books: [5],
    prominence: 2,
    acts: {
      "Calypso's offer of immortality": "Is the alternative to immortality. Having been told to let him go, Calypso offers him ageless life instead, is refused, and then hands over a great bronze axe, an adze, augers, and cloth for a sail — a goddess equipping the man who is leaving her.",
      "The building of the raft": "Takes four days: alder, poplar and fir felled on the fifth day of the fifth year of captivity, bored with the augers, fastened with pegs and joints, decked, masted, and hedged round with willow against the wave. On the fifth day she bathes him, gives him bread, water, and a skin of red wine, and sends a warm following wind.",
      "Poseidon's storm": "Survives seventeen days and dies on the eighteenth, in sight of Scheria. Four winds strike it at once, the steering oar goes out of his hands, the mast snaps, and the sail and yard go into the sea; he is under water long enough that the weight of Calypso's clothes nearly finishes him, and he comes up and swims to it and rides it like a man on a bolting horse.",
      "Ino Leucothea's veil": "Is the thing he refuses to leave. Told by a sea goddess to strip, take her veil, and swim, he decides on the spot that this may be a trap, and resolves to stay with the timbers as long as they hold together. His distrust of a rescue is exactly the trait that gets him home.",
      "The landfall on Scheria": "Is finally broken apart by a great wave, as a wind scatters a dry heap of chaff, and he rides a single plank astride like a horse before letting go and swimming for two days along a coast that has no harbours."
    }
  },
  {
    name: "The olive-tree bed",
    aliases: ["the bed", "the marriage bed", "the olive bed", "the bed of Odysseus and Penelope"],
    kind: "object",
    greek: "lékhos (λέχος)",
    roman: "lectus / torus",
    homer: "sḗmata ariphradéa — 'signs unmistakable', Penelope's words when the bed is described to her",
    order: "The immovable token",
    domain: "The one fact only two people and one servant know",
    house: "The house of Arcesius",
    who: "A bed built around a living olive trunk. Odysseus trimmed the tree to a post, laid out the bedchamber round it, roofed and doored the room, and only then inlaid the frame with gold, silver and ivory and strung it with ox-hide thongs. It cannot be moved without cutting the root, which makes it the perfect proof of identity and, at the same time, the poem's whole argument about marriage: a house grown round something rooted, which will not survive being relocated.",
    books: [23],
    prominence: 1,
    acts: {
      "Penelope refuses to believe": "Is the trap she sets while pretending to concede. She has watched him bathed and dressed and looking like a god, has been called hard-hearted by her own son, and answers by telling the nurse to move the strong bed out of the chamber and make it up outside.",
      "The secret of the olive-tree bed": "Provokes the only time in the poem Odysseus loses control of himself for reasons that are not tactical. He describes the building of it, course by course, ending with the demand to know whether the olive stump is still in the ground or some man has cut it through — and her knees go slack, and she runs and takes his neck and asks him not to be angry, because she has been afraid of exactly this trick for twenty years. Stranger to husband, and the recognition is done by carpentry.",
      "The night lengthened, and the tale told over": "Is where the poem's most patient scene happens. Athena holds the dawn back at the Ocean, and in the bed they have not shared in twenty years they take their fill first of love and then of talking: she tells everything she endured in the house, and he tells the whole story of the wanderings, in order, from the Cicones to Calypso, and falls asleep before the end."
    }
  },
  {
    name: "The loom and the shroud of Laertes",
    aliases: ["the web", "the shroud", "the web of Laertes", "Penelope's web", "the winding sheet"],
    kind: "object",
    greek: "histós kaì phâros (ἱστός, φᾶρος)",
    roman: "tela Penelopes",
    homer: "ēmatíē mèn hyphaínesken mégan histón, nýktas d' allýesken — 'by day she wove the great web, and by night she unravelled it'",
    order: "A trick that lasted three years",
    domain: "Delay, and the obligation that makes it respectable",
    house: "The house of Arcesius",
    who: "A funeral cloth for a father-in-law who is not yet dead, woven as a public duty so that no woman of Achaea can say a man who won great wealth was buried without a shroud. Nobody can object to it, which is the whole design. The web is Penelope's version of her husband's method: a cover story that exploits a social obligation, sustained for three years, and betrayed in the end by a servant.",
    books: [2, 19, 24],
    prominence: 2,
    acts: {
      "Antinous and the web of Laertes": "Is produced in the assembly by the suitors as evidence against her. Antinous tells the story to prove the fault is hers and not theirs: she gave every man hope in private, set up the great loom, wove by day and pulled the threads out by night for three years, and was caught in the fourth when one of the women told them. The poem's first full account of Penelope's mind comes from a man who hates her.",
      "Penelope and the stranger": "Is told a second time by Penelope herself, to a beggar, as the first thing she says about her own conduct: three schemes to hold them off, this one the best, and now her parents are pressing her and her son is grown and wants his estate back. Told in her voice it is not a stratagem but an account of running out of them.",
      "Amphimedon tells the story": "Is told a third time in the underworld, by a dead suitor to Agamemnon, as the beginning of the plot that killed him. Homer gives the same trick to the assembly, the wife, and the dead, so that it exists in all three of the poem's worlds; and Agamemnon, hearing it, says her fame will never die, and compares her to his own wife."
    }
  },
  {
    name: "The scar",
    aliases: ["the scar of Odysseus", "the boar's scar", "the oule", "the wound on the thigh"],
    kind: "object",
    greek: "oulḗ (οὐλή)",
    roman: "cicatrix",
    homer: "oulḗ, tḗn poté min sŷs ḗlase leukôi odónti — 'the scar which a boar once dealt him with its white tusk'",
    order: "A mark on the thigh above the knee",
    domain: "Identity that survives disguise",
    who: "A wound taken on Parnassus as a boy, hunting with the sons of Autolycus, the grandfather who named him and told his mother to send him for the promised gifts. The scar is the one thing Athena's transformations cannot cover: she can shrink his skin, whiten his hair, and dim his eyes, but the tusk mark is under the rags. It makes recognition a physical event rather than an argument, and it is always found by touch.",
    books: [19, 21, 24],
    prominence: 1,
    acts: {
      "Eurycleia and the scar": "Turns a footbath into the poem's central recognition. The old nurse takes the leg in her hands, knows the scar at once, lets the foot drop so that the bronze basin tips and the water spills over the floor, and gets out one word of joy before his hand closes on her throat and he tells her she will destroy him if she says it. Beggar to king, seen by a slave, and immediately suppressed. Penelope, sitting a few feet away, is prevented from noticing by Athena.",
      "The recognition of Eumaeus and Philoetius": "Is used deliberately for the first time. Out in the yard, away from the hall, he asks the swineherd and the cowherd where they would stand if Odysseus came back, hears his answer, and then pulls his rags aside and shows them the scar. The same mark that betrayed him in Book 19 is now evidence he chooses to produce.",
      "Laertes in the orchard": "Ends the last deception in the poem. Having tested his father past the point of cruelty and watched him pour dust on his own head, Odysseus shows the scar and then, because a scar is not enough for a gardener, counts out from memory the trees his father gave him as a boy: thirteen pear, ten apple, forty fig, and fifty rows of vines. The final proof of identity in the Odyssey is an inventory of an orchard."
    }
  },
  {
    name: "The winds in the bag",
    aliases: ["the bag of winds", "the ox-hide bag", "the wind bag", "Aeolus' gift"],
    kind: "object",
    greek: "askòs anémōn (ἀσκός)",
    roman: "uter ventorum",
    homer: "byktáōn anémōn ... kéleutha — 'the paths of the blustering winds', bound in the hide of a nine-year ox and tied with a silver cord",
    order: "A guest-gift from the keeper of the winds",
    domain: "A fair passage, and the sailors' suspicion that undoes it",
    house: "The wind-king and the Aeolids",
    who: "Every wind but the West, flayed into an ox-hide and knotted shut with a shining silver cord, given by Aeolus after a month's entertainment. It is a perfect gift and an impossible one to explain, because a leader who says 'this sack is not treasure' to hungry men who have watched him take gifts alone is not believed. The episode is the poem's cleanest case of a disaster caused by an information failure rather than by a monster.",
    books: [10],
    prominence: 2,
    acts: {
      "The bag of winds": "Is stowed in the hollow ship and lashed down with a bright cord so that not a breath can escape, while Aeolus lets the West wind blow to carry them. For nine days and nights the fleet runs, and Odysseus keeps the sheet in his own hand the whole time and will not give it to anyone.",
      "Within sight of Ithaca": "Is opened on the tenth day, close enough to see men tending fires on the home shore, at the moment its keeper falls asleep from exhaustion. The crew have decided it is gold and silver that he is taking home while they arrive empty-handed. The winds come out in a body, the storm takes the ships back the way they came, and he wakes to it and considers going over the side.",
      "Aeolus refuses a second time": "Is the reason a hospitable king throws a suppliant out of his hall. Aeolus reads their return as proof that the man in front of him is hated by the blessed gods, and tells him to get out — it is not lawful to help a man the gods have set against. The poem's one instance of xenia refused by a good host, and the refusal is pious."
    }
  },
  {
    name: "The moly",
    aliases: ["moly", "the moly plant", "the herb of Hermes"],
    kind: "object",
    greek: "môly (μῶλυ)",
    roman: "moly",
    homer: "môly dé min kaléousi theoí — 'the gods call it moly'; black at the root, with a flower like milk, and hard for mortal men to dig",
    order: "A plant with two names",
    domain: "Immunity to a drug",
    who: "A herb pulled out of the ground by Hermes on Aeaea and handed over with instructions. Homer gives it a divine name and no mortal one, which is his standard way of marking the boundary between what men can use and what they can only be given. It is the only object in the poem that makes Odysseus proof against magic, and it works by pharmacology rather than by cleverness — the one time he is saved by something he did not think of.",
    books: [10],
    prominence: 2,
    acts: {
      "Moly, and the sword at the witch's throat": "Is given on the path between the ship and the house by a young man with the first down on his lip, along with the exact procedure: drink what she mixes, and when she strikes with the wand, go at her with the sword as if to kill her, and make her swear the great oath of the gods before going to her bed. The drug fails, Circe recognises him by its failure, and the man who wins by cunning everywhere else wins this one with a root."
    }
  },
  {
    name: "The veil of Leucothea",
    aliases: ["the kredemnon", "Ino's veil", "the immortal veil", "the scarf of Leucothea"],
    kind: "object",
    greek: "krḗdemnon (κρήδεμνον)",
    roman: "velamen — no settled Latin name of its own",
    homer: "krḗdemnon ámbroton — 'an immortal veil', to be spread beneath the breast and then thrown back into the sea with the face turned away",
    order: "A goddess' headcloth",
    domain: "Two days of swimming without drowning",
    who: "The head-wrapping of Ino, daughter of Cadmus, who was a mortal woman and now has a share of honour in the sea as Leucothea. She surfaces like a shearwater on the broken raft and offers it. The condition attached is the interesting part: it must be given back the moment land is touched, thrown out to sea with the face averted, so that the rescue leaves no property behind. It is the only piece of divine equipment in the poem that has to be returned.",
    books: [5],
    prominence: 2,
    acts: {
      "Ino Leucothea's veil": "Is offered with a full set of instructions — strip off Calypso's clothes, leave the raft, spread this under your chest, swim for the Phaeacian shore — and is not immediately used. Odysseus suspects a god setting a trap and stays on the timbers until a wave breaks them apart under him, and only then strips, wraps the veil round his chest, and goes into the water face down with his arms out.",
      "The landfall on Scheria": "Is given back exactly as required. After two nights and two days in the swell and a landing up a river mouth, he crawls out with his skin swollen and salt water running from his mouth and nose, unwinds the veil, and drops it into the seaward current with his head turned aside; Ino takes it back in her hands. Then he lies down in the leaves under two olive bushes and sleeps, with nothing at all."
    }
  }
];
