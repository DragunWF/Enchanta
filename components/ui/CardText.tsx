import { ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

import { mainColors } from "../../constants/colors";

interface CardTextProps {
  children: ReactNode;
  style?: object;
}

function CardText({ children, style }: CardTextProps) {
  return <Text style={[styles.cardText, style]}>{children}</Text>;
}

const fontSize = 14;
const styles = StyleSheet.create({
  cardText: {
    fontFamily: "quicksand",
    fontSize: fontSize,
    textAlign: "justify",
    marginHorizontal: 20,
    marginBottom: 10,
    lineHeight: fontSize * 1.5,
    color: mainColors.white,
  },
});

export default CardText;
