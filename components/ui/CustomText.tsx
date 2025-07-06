import { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import { mainColors } from "../../constants/colors";

interface CustomTextProps {
  children: ReactNode;
  style: any;
}

function CustomText({ children, style }: CustomTextProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "quicksand",
    color: mainColors.softWhite,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
  },
});

export default CustomText;
