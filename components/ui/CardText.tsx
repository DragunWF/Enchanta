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

const styles = StyleSheet.create({
  cardText: {
    fontFamily: "quicksand",
    fontSize: 14,
    textAlign: "justify",
    marginHorizontal: 20,
    marginBottom: 10,
    color: mainColors.white,
  },
});

export default CardText;
