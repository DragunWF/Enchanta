import { StyleSheet, Image } from "react-native";

import { moods } from "../helpers/botFactorsData";
import BotMood from "../models/botMood";
import { MOOD } from "../constants/botFactors";

interface BotImageProps {
  moodName: string;
}

function BotImage({ moodName }: BotImageProps) {
  console.log(Object.values(MOOD));
  console.log(moodName);
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
