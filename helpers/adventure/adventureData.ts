import AdventureLand from "../../models/adventureLand";

export const adventureLands = [
  new AdventureLand(
    1,
    "Sky Islands",
    "A kingdom in the clouds, where ancient stone islands float high above the world. The air is thin, the bridges unstable, and the sky pulses with arcane energy.",
    "A vast, fragmented kingdom floating above the clouds, the Sky Islands are suspended in the upper atmosphere by ancient and forgotten magic. Crumbling stone platforms drift slowly across the open skies, linked only by narrow rope bridges, moss-covered stairways, or gravity-defying jumps. Each island holds remnants of a lost civilization — vine-choked temples, glowing obelisks pulsing with arcane energy, and wind-powered contraptions left in eternal motion. The air is thin and electric, filled with drifting pollen-like motes of light and the distant hum of skybeasts circling overhead. Weather shifts rapidly — from blinding sun to violet lightning storms that ripple across the horizon. Some islands are peaceful and lush, with strange floating flora and sparkling pools that defy gravity. Others are desolate, haunted by wind echoes, arcane guardians, or the lurking presence of aerial predators. Below, endless cloud cover hides the world — and a single fall means certain doom.",
    require("../../assets/images/adventure/sky-islands/sky-islands.png"),
    {
      calm: [
        require("../../assets/images/adventure/sky-islands/calm-1.png"),
        require("../../assets/images/adventure/sky-islands/calm-2.png"),
      ],
      mystery: [
        require("../../assets/images/adventure/sky-islands/mystery-1.png"),
        require("../../assets/images/adventure/sky-islands/mystery-2.png"),
      ],
      danger: [
        require("../../assets/images/adventure/sky-islands/danger-1.png"),
        require("../../assets/images/adventure/sky-islands/danger-2.png"),
      ],
      action: [
        require("../../assets/images/adventure/sky-islands/action-1.png"),
        require("../../assets/images/adventure/sky-islands/action-2.png"),
      ],
      aftermath: [
        require("../../assets/images/adventure/sky-islands/aftermath-1.png"),
        require("../../assets/images/adventure/sky-islands/aftermath-2.png"),
      ],
    },
    {
      win: require("../../assets/images/adventure/sky-islands/gameover-win.png"),
      lose: require("../../assets/images/adventure/sky-islands/gameover-lose.png"),
    },
    require("../../assets/images/adventure/sky-islands/background.png")
  ),
  new AdventureLand(
    2,
    "Spirit Forest",
    "A living forest steeped in magic. Whispering trees, glowing flora, and spirit wisps guide—or mislead—those who dare walk its sacred paths.",
    "A living, enchanted forest where ancient trees whisper forgotten songs and glowing flora illuminates mossy trails in soft blues and greens. Spirit wisps drift between trees like living fireflies, sometimes helpful, sometimes mischievous. The ground is soft with moss and thick with roots that shift when unobserved. Hollow trunks conceal secret passageways and shrines pulsing with forest magic. The air hums with life — both serene and unpredictable — as the forest itself seems to watch and respond. Twilight lingers unnaturally long, and footsteps echo with a feeling of being followed by something unseen.",
    require("../../assets/images/adventure/spirit-forest/spirit-forest.png"),
    {
      calm: [
        require("../../assets/images/adventure/spirit-forest/calm-1.png"),
        require("../../assets/images/adventure/spirit-forest/calm-2.png"),
      ],
      mystery: [
        require("../../assets/images/adventure/spirit-forest/mystery-1.png"),
        require("../../assets/images/adventure/spirit-forest/mystery-2.png"),
      ],
      danger: [
        require("../../assets/images/adventure/spirit-forest/danger-1.png"),
        require("../../assets/images/adventure/spirit-forest/danger-2.png"),
      ],
      action: [
        require("../../assets/images/adventure/spirit-forest/action-1.png"),
        require("../../assets/images/adventure/spirit-forest/action-2.png"),
      ],
      aftermath: [
        require("../../assets/images/adventure/spirit-forest/aftermath-1.png"),
        require("../../assets/images/adventure/spirit-forest/aftermath-2.png"),
      ],
    },
    {
      win: require("../../assets/images/adventure/spirit-forest/gameover-win.png"),
      lose: require("../../assets/images/adventure/spirit-forest/gameover-lose.png"),
    },
    require("../../assets/images/adventure/spirit-forest/background.png")
  ),
  new AdventureLand(
    3,
    "Frostveil Ruins",
    "Frozen remnants of an ancient civilization buried in snow and silence. The ruins hold forgotten power—and something that still stirs beneath the ice.",
    "A vast tundra of shattered stone structures half-buried beneath glittering snowdrifts. Frostbitten pillars and collapsed temples hint at a long-lost empire swallowed by time and ice. Everything is silent — too silent — save for the soft crunch of snow and distant howls carried by frigid wind. Icicles hang from broken arches like blades. Beneath the surface, glowing runes flicker to life when disturbed, and frozen figures entombed in crystal-clear ice hint at a forgotten curse. Northern lights ripple in the sky, casting ghostly reflections on the ruins and awakening something that should remain asleep.",
    require("../../assets/images/adventure/frostveil-ruins/frostveil-ruins.png"),
    {
      calm: [
        require("../../assets/images/adventure/frostveil-ruins/calm-1.png"),
        require("../../assets/images/adventure/frostveil-ruins/calm-2.png"),
      ],
      mystery: [
        require("../../assets/images/adventure/frostveil-ruins/mystery-1.png"),
        require("../../assets/images/adventure/frostveil-ruins/mystery-2.png"),
      ],
      danger: [
        require("../../assets/images/adventure/frostveil-ruins/danger.png"),
      ],
      action: [
        require("../../assets/images/adventure/frostveil-ruins/action-1.png"),
        require("../../assets/images/adventure/frostveil-ruins/action-2.png"),
      ],
      aftermath: [
        require("../../assets/images/adventure/frostveil-ruins/aftermath-1.png"),
        require("../../assets/images/adventure/frostveil-ruins/aftermath-2.png"),
        require("../../assets/images/adventure/frostveil-ruins/aftermath-3.png"),
        require("../../assets/images/adventure/frostveil-ruins/aftermath-4.png"),
      ],
    },
    {
      win: require("../../assets/images/adventure/frostveil-ruins/gameover-win.png"),
      lose: require("../../assets/images/adventure/frostveil-ruins/gameover-lose.png"),
    },
    require("../../assets/images/adventure/frostveil-ruins/background.png")
  ),
  new AdventureLand(
    4,
    "Obsidian Caverns",
    "Deep beneath the earth lies a labyrinth of molten rock and ember-lit shadows. The ground burns, and the air thrums with hostile energy.",
    "A dangerous maze of volcanic tunnels and magma-lit chambers. Jagged walls of black glass reflect the flicker of molten rivers that snake through the caverns like veins of fire. The air is stifling, thick with sulfur, and the ground is cracked and unstable, occasionally erupting with geysers of steam or lava. Shadows move strangely here, and distant tremors hint at something massive stirring beneath the crust. Some tunnels lead to chambers filled with glowing crystals or ancient relics pulsing with heat and dark energy. It is both a place of danger and forgotten power — where the earth breathes in anger.",
    require("../../assets/images/adventure/obsidian-caverns/obsidian-caverns.png"),
    {
      calm: [
        require("../../assets/images/adventure/obsidian-caverns/calm-1.png"),
        require("../../assets/images/adventure/obsidian-caverns/calm-2.png"),
      ],
      mystery: [
        require("../../assets/images/adventure/obsidian-caverns/mystery-1.png"),
        require("../../assets/images/adventure/obsidian-caverns/mystery-2.png"),
      ],
      danger: [
        require("../../assets/images/adventure/obsidian-caverns/danger-1.png"),
        require("../../assets/images/adventure/obsidian-caverns/danger-2.png"),
      ],
      action: [
        require("../../assets/images/adventure/obsidian-caverns/action-1.png"),
        require("../../assets/images/adventure/obsidian-caverns/action-2.png"),
      ],
      aftermath: [
        require("../../assets/images/adventure/obsidian-caverns/aftermath-1.png"),
        require("../../assets/images/adventure/obsidian-caverns/aftermath-2.png"),
      ],
    },
    {
      win: require("../../assets/images/adventure/obsidian-caverns/gameover-win.png"),
      lose: require("../../assets/images/adventure/obsidian-caverns/gameover-lose.png"),
    },
    require("../../assets/images/adventure/obsidian-caverns/background.png")
  ),
  new AdventureLand(
    5,
    "Crimson Marshlands",
    "A haunting swamp veiled in blood-red mist and poisonous spores. Every root hides a trap, and the still water watches in silence.",
    "A surreal and ominous swamp bathed in perpetual red mist. Twisted trees rise like skeletal fingers from murky, stagnant water. Blood-colored moss clings to every surface, and the air is thick with spores that shimmer with an unnatural glow. Sounds are muffled — every splash, every breath feels distant, like the land itself is absorbing noise. The water reflects things that aren’t there. Strange croaks and rustles come from unseen creatures lurking just beneath the surface. Ancient ruins sink slowly into the bog, guarded by toxic flora and ghostly silhouettes that flicker between the mist-covered reeds.",
    require("../../assets/images/adventure/crimson-marshlands/crimson-marshlands.png"),
    {
      calm: [
        require("../../assets/images/adventure/crimson-marshlands/calm-1.png"),
        require("../../assets/images/adventure/crimson-marshlands/calm-2.png"),
      ],
      mystery: [
        require("../../assets/images/adventure/crimson-marshlands/mystery-1.png"),
        require("../../assets/images/adventure/crimson-marshlands/mystery-2.png"),
      ],
      danger: [
        require("../../assets/images/adventure/crimson-marshlands/danger-1.png"),
        require("../../assets/images/adventure/crimson-marshlands/danger-2.png"),
      ],
      action: [
        require("../../assets/images/adventure/crimson-marshlands/action-1.png"),
        require("../../assets/images/adventure/crimson-marshlands/action-2.png"),
      ],
      aftermath: [
        require("../../assets/images/adventure/crimson-marshlands/aftermath-1.png"),
        require("../../assets/images/adventure/crimson-marshlands/aftermath-2.png"),
      ],
    },
    {
      win: require("../../assets/images/adventure/crimson-marshlands/gameover-win.png"),
      lose: require("../../assets/images/adventure/crimson-marshlands/gameover-lose.png"),
    },
    require("../../assets/images/adventure/crimson-marshlands/background.png")
  ),
];

export const universalAdventureGoals = [
  "rescue a kidnapped spirit trapped in a cursed mirror",
  "solve the mystery of vanishing villagers",
  "break a powerful curse infecting the local wildlife",
  "stop an unstable rift from tearing reality apart",
  "decipher a series of illusions to find the truth",
  "earn the trust of a reluctant guide who knows the terrain",
  "recover your stolen memories scattered across the region",
  "make a difficult choice between saving a friend or completing the mission",
  "escort a fragile artifact through hostile territory",
  "mediate a growing conflict between two ancient factions",
  "uncover the secrets behind a long-forgotten legend",
  "locate a hidden sanctuary that appears only at twilight",
  "prove your worth to gain the aid of a mythical guardian",
  "rescue a trapped traveler from a shifting labyrinth",
  "bring harmony to a land torn by magical imbalance",
  "stop a dream entity from merging with the waking world",
  "piece together the shards of a shattered prophecy",
  "dispel an illusion that has blinded the local population",
  "help a spirit pass on by completing their final wish",
  "track a mysterious figure seen at the edge of every major incident",
  "decode an ancient map written in a lost language",
  "win the favor of a trickster being through a clever challenge",
  "stop a countdown to an unknown magical catastrophe",
  "reverse a spell that is slowly petrifying a village",
  "solve the riddle of the ever-locked temple door",
  "defeat a mirror version of yourself created by residual magic",
  "restore color and emotion to a world gone gray",
  "deliver a message between star-crossed entities from rival realms",
  "create a rare potion from ingredients scattered across the realm",
  "carry out the final wishes of a fallen hero",
  "survive a day where the laws of physics are distorted",
  "locate the true source of a creeping darkness spreading across the world",
  "discover why memories of the past week have vanished",
  "win a magical duel against a powerful but misunderstood rival",
  "recover a relic before it falls into the wrong hands",
  "quiet the land’s whispers that drive people mad at night",
  "save a soul tethered between life and death",
  "assemble a celestial puzzle to unlock the path forward",
  "pass a series of trials designed to test your heart and will",
  "help a forgotten guardian remember its purpose",
  "sabotage a magical machine distorting the environment",
  "calm a furious storm spirit causing havoc across zones",
  "repair a broken bridge that spans multiple dimensions",
  "earn the blessing of the land through a selfless act",
  "investigate a location where reality glitches uncontrollably",
  "befriend a feared creature who holds the key to peace",
  "unlock a sealed vault using clues hidden in local legends",
  "disrupt a festival that’s secretly a cover for dark intentions",
  "heal a wounded companion using only what the land provides",
  "free a zone caught in an eternal loop of one tragic moment",
];
