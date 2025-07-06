export const mainColors = {
  primary900: "#7a001f", // Very deep crimson, for accents or backgrounds
  primary700: "#8f0025", // Dark crimson, good for headers or focused elements
  primary500: "#b3002d", // Your main crimson base
  primary300: "#e44c73", // Mid-tone pink, for active states and highlights
  primary100: "#ff86bb", // Light pink for active tab icons and buttons
  primary50: "#ffc1ff", // Very light pink, for backgrounds and soft UI areas
  secondary500: "#7a3ca6", // Rich purple — nice contrast for buttons, tab icons, etc.
  secondary300: "#a06ec7", // Soft lavender for hover or card backgrounds
  secondary100: "#e6d8f2", // Light lavender for secondary backgrounds, form fields
  accent500: "#5bb7d5", // Soft aqua — matches your player chat bubble color, keeps visual consistency
  accent300: "#90d7e3", // Lighter aqua for hover states, highlights, or glow effects
  accent100: "#d9f2f9", // Very light aqua for backgrounds or subtle highlights
  white: "#ffffff",
  softWhite: "#ffe0f0", // For softer text or icons
  black: "#000000",
};

export const gradientColors = [
  mainColors.primary500,
  mainColors.primary300,
  mainColors.primary100,
  mainColors.primary50,
];

export const chatBubbleColors = {
  player: "#5bb7d5", // Aqua blue for user messages
  bot: "lightgrey", // Light grey for Angelina's messages
  botActive: "#ffe0f0", // Optional: a soft pink tone when Angelina is mid-reply or in special moods
};

export const tabBarColors = {
  background: "rgba(179, 0, 45, 0.95)", // Deep crimson with opacity for tab bar
  activeTint: mainColors.primary100, // Light pink
  inactiveTint: "#ffe0e0", // Soft faded pink
};

export const headerColors = {
  background: mainColors.primary500,
  text: mainColors.white,
  icon: mainColors.softWhite,
};
