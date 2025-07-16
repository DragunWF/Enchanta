import { ReactNode } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import CustomText from "./CustomText";
import { mainColors } from "../../constants/colors";

interface CustomButtonProps {
  children: ReactNode;
  onPress: () => void;
  style?: object;
  icon?: string | undefined;
}

function CustomButton({ children, onPress, style, icon }: CustomButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.buttonContainer, style]}>
        {icon && (
          <AntDesign name={icon as any} size={14} color={mainColors.white} />
        )}
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
    elevation: 5,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    flexDirection: "row",
    gap: 7,
  },
  buttonText: {
    color: mainColors.white,
    fontFamily: "quicksand",
    fontSize: 14,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
  },
});

export default CustomButton;
