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
      calm: [],
      mystery: [],
      danger: [],
      action: [],
      aftermath: [],
    },
    {
      win: require("../../assets/images/adventure/sky-islands/gameover-win.png"),
      lose: require("../../assets/images/adventure/sky-islands/gameover-lose.png"),
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
      calm: [],
      mystery: [],
      danger: [],
      action: [],
      aftermath: [],
    },
    {
      win: require("../../assets/images/adventure/sky-islands/gameover-win.png"),
      lose: require("../../assets/images/adventure/sky-islands/gameover-lose.png"),
    },
    require("../../assets/images/adventure/spirit-forest/background.png")
  ),
  new AdventureLand(
    5,
    "Crimson Marshlands",
    "A haunting swamp veiled in blood-red mist and poisonous spores. Every root hides a trap, and the still water watches in silence.",
    "A surreal and ominous swamp bathed in perpetual red mist. Twisted trees rise like skeletal fingers from murky, stagnant water. Blood-colored moss clings to every surface, and the air is thick with spores that shimmer with an unnatural glow. Sounds are muffled — every splash, every breath feels distant, like the land itself is absorbing noise. The water reflects things that aren’t there. Strange croaks and rustles come from unseen creatures lurking just beneath the surface. Ancient ruins sink slowly into the bog, guarded by toxic flora and ghostly silhouettes that flicker between the mist-covered reeds.",
    require("../../assets/images/adventure/crimson-marshlands/crimson-marshlands.png"),
    {
      calm: [],
      mystery: [],
      danger: [],
      action: [],
      aftermath: [],
    },
    {
      win: require("../../assets/images/adventure/sky-islands/gameover-win.png"),
      lose: require("../../assets/images/adventure/sky-islands/gameover-lose.png"),
    },
    require("../../assets/images/adventure/spirit-forest/background.png")
  ),
];
