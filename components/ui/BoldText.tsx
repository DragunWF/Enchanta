import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";
import { mainColors } from "../../constants/colors";

interface BoldTextProps {
  children: ReactNode;
  style?: object;
}

function BoldText({ children, style }: BoldTextProps) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "quicksand-bold",
    color: mainColors.white,
  },
});

export default BoldText;
