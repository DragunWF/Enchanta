import { ReactNode } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

import CustomText from "./CustomText";
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
        <CustomText style={styles.buttonText}>{children}</CustomText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.8,
  },
  buttonContainer: {
    width: 300,
    borderWidth: 2,
    borderColor: mainColors.accent500,
    backgroundColor: mainColors.accent700,
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
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});

export default CustomButton;
