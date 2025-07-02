import { StyleSheet, Image } from "react-native";

interface BotImageProps {
  onMoodChange: () => void;
}

function BotImage({ onMoodChange }: BotImageProps) {
  return (
    <Image
      source={require("../assets/images/curious-mage.png")}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: 225,
    borderRadius: 15,
  },
});

export default BotImage;
