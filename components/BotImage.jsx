import { StyleSheet, Image } from "react-native";

function BotImage({ onMoodChange }) {
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
