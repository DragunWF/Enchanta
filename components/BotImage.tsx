import { StyleSheet, Image } from "react-native";

import { moods } from "../helpers/bot/botFactorsData";
import BotMood from "../models/botMood";

interface BotImageProps {
  moodName: string;
}

function BotImage({ moodName }: BotImageProps) {
  const currentMood: BotMood = moods[moodName];

  return <Image source={currentMood.getImageSource()} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: 225,
    borderRadius: 15,
  },
});

export default BotImage;
