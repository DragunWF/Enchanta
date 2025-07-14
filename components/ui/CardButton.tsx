import { ReactNode } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import { mainColors } from "../../constants/colors";

interface CardButtonProps {
  children: ReactNode;
  onPress: () => void;
  style?: object;
}

function CardButton({ children, onPress, style }: CardButtonProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={[styles.cardButtonContainer, style]}>
        <Text style={styles.cardButtonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardButtonContainer: {
    backgroundColor: mainColors.primary700,
    borderRadius: 5,
    marginBottom: 10,
    width: "80%",
  },
  cardButtonText: {
    fontFamily: "quicksand-bold",
    fontSize: 16,
    color: mainColors.white,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default CardButton;
