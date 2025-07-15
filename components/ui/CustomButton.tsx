import { ReactNode } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import { mainColors } from "../../constants/colors";

interface CustomButtonProps {
  children: ReactNode;
  onPress: () => void;
  style?: object;
}

function CustomButton({ children, onPress, style }: CustomButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.buttonContainer, style]}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  buttonContainer: {
    backgroundColor: mainColors.accent500,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: mainColors.white,
    fontFamily: "quicksand",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default CustomButton;
