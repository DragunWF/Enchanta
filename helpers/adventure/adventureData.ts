import AdventureLand from "../../models/adventureLand";

export const adventureLands = [
  new AdventureLand(
    1,
    "Sky Islands",
    "A kingdom in the clouds, where ancient stone islands float high above the world. The air is thin, the bridges unstable, and the sky pulses with arcane energy.",
    require("../../assets/images/adventure/sky-islands/sky-islands.png"),
    {
      calm: [
        require("../../assets/images/adventure/sky-islands/sky-islands-calm-1.png"),
        require("../../assets/images/adventure/sky-islands/sky-islands-calm-2.png"),
      ],
      mystery: [
        require("../../assets/images/adventure/sky-islands/sky-islands-mystery-1.png"),
        require("../../assets/images/adventure/sky-islands/sky-islands-mystery-2.png"),
      ],
      danger: [
        require("../../assets/images/adventure/sky-islands/sky-islands-danger-1.png"),
        require("../../assets/images/adventure/sky-islands/sky-islands-danger-2.png"),
      ],
      action: [
        require("../../assets/images/adventure/sky-islands/sky-islands-action-1.png"),
        require("../../assets/images/adventure/sky-islands/sky-islands-action-2.png"),
      ],
      aftermath: [
        require("../../assets/images/adventure/sky-islands/sky-islands-aftermath-1.png"),
        require("../../assets/images/adventure/sky-islands/sky-islands-aftermath-2.png"),
      ],
    }
  ),
  new AdventureLand(
    2,
    "Spirit Forest",
    "A living forest steeped in magic. Whispering trees, glowing flora, and spirit wisps guide—or mislead—those who dare walk its sacred paths.",
    require("../../assets/images/adventure/spirit-forest/spirit-forest.png"),
    {
      calm: [
        require("../../assets/images/adventure/spirit-forest/spirit-forest-calm-1.png"),
        require("../../assets/images/adventure/spirit-forest/spirit-forest-calm-2.png"),
      ],
      mystery: [
        require("../../assets/images/adventure/spirit-forest/spirit-forest-mystery-1.png"),
        require("../../assets/images/adventure/spirit-forest/spirit-forest-mystery-2.png"),
      ],
      danger: [
        require("../../assets/images/adventure/spirit-forest/spirit-forest-danger-1.png"),
        require("../../assets/images/adventure/spirit-forest/spirit-forest-danger-2.png"),
      ],
      action: [
        require("../../assets/images/adventure/spirit-forest/spirit-forest-action-1.png"),
        require("../../assets/images/adventure/spirit-forest/spirit-forest-action-2.png"),
      ],
      aftermath: [
        require("../../assets/images/adventure/spirit-forest/spirit-forest-aftermath-1.png"),
        require("../../assets/images/adventure/spirit-forest/spirit-forest-aftermath-2.png"),
      ],
    }
  ),
  new AdventureLand(
    3,
    "Frostveil Ruins",
    "Frozen remnants of an ancient civilization buried in snow and silence. The ruins hold forgotten power—and something that still stirs beneath the ice.",
    require("../../assets/images/adventure/frostveil-ruins.png"),
    {
      calm: [],
      mystery: [],
      danger: [],
      action: [],
      aftermath: [],
    }
  ),
  new AdventureLand(
    4,
    "Obsidian Caverns",
    "Deep beneath the earth lies a labyrinth of molten rock and ember-lit shadows. The ground burns, and the air thrums with hostile energy.",
    require("../../assets/images/adventure/obsidian-caverns.png"),
    {
      calm: [],
      mystery: [],
      danger: [],
      action: [],
      aftermath: [],
    }
  ),
  new AdventureLand(
    5,
    "Crimson Marshlands",
    "A haunting swamp veiled in blood-red mist and poisonous spores. Every root hides a trap, and the still water watches in silence.",
    require("../../assets/images/adventure/crimson-marshlands.png"),
    {
      calm: [],
      mystery: [],
      danger: [],
      action: [],
      aftermath: [],
    }
  ),
  new AdventureLand(
    6,
    "Purple Nether",
    "A surreal, corrupted dimension wrapped in violet mist and unstable magic. Reality bends here, and danger hides behind beauty.",
    require("../../assets/images/adventure/purple-nether.png"),
    {
      calm: [],
      mystery: [],
      danger: [],
      action: [],
      aftermath: [],
    }
  ),
];
